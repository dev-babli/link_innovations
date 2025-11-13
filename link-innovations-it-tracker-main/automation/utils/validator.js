/**
 * Validator Utility
 * Validates prompts, configurations, and outputs
 */

class Validator {
  /**
   * Validate brand colors are included in prompt
   */
  validateBrandColors(prompt, brandColors) {
    const requiredColors = [
      brandColors.primaryBlue,
      brandColors.primaryPurple,
      brandColors.primaryCyan
    ];

    const colorsMissing = [];
    for (const color of requiredColors) {
      if (!prompt.toLowerCase().includes(color.toLowerCase())) {
        colorsMissing.push(color);
      }
    }

    return {
      valid: colorsMissing.length === 0,
      missing: colorsMissing
    };
  }

  /**
   * Validate image dimensions
   */
  validateDimensions(width, height, expectedRatio) {
    const ratio = width / height;
    const expectedRatios = {
      '16:9': 16 / 9,
      '9:16': 9 / 16,
      '4:3': 4 / 3,
      '1:1': 1,
      '21:9': 21 / 9
    };

    const target = expectedRatios[expectedRatio];
    const tolerance = 0.05;

    return Math.abs(ratio - target) < tolerance;
  }

  /**
   * Validate file size
   */
  validateFileSize(sizeKB, maxSize) {
    return parseFloat(sizeKB) <= maxSize;
  }

  /**
   * Validate prompt quality
   */
  validatePrompt(prompt) {
    const issues = [];

    // Check minimum length
    if (prompt.length < 50) {
      issues.push('Prompt too short (< 50 characters)');
    }

    // Check for required keywords
    const requiredKeywords = ['modern', 'professional'];
    const hasKeywords = requiredKeywords.some(keyword => 
      prompt.toLowerCase().includes(keyword)
    );
    if (!hasKeywords) {
      issues.push('Missing style keywords (modern/professional)');
    }

    // Check for aspect ratio
    if (!prompt.includes('--ar')) {
      issues.push('Missing aspect ratio parameter');
    }

    return {
      valid: issues.length === 0,
      issues
    };
  }

  /**
   * Validate configuration
   */
  validateConfig(config) {
    const required = [
      'apis.gemini.apiKey',
      'project.root',
      'output.imageDir'
    ];

    const missing = [];
    
    // Check required fields
    for (const key of required) {
      const keys = key.split('.');
      let value = config;
      for (const k of keys) {
        value = value?.[k];
      }
      if (!value || value.includes('YOUR_')) {
        missing.push(key);
      }
    }

    // Check image generation provider is configured
    const provider = config.apis?.imageGeneration?.provider;
    
    if (provider === 'replicate') {
      const replicateKey = config.apis?.imageGeneration?.replicateKey;
      if (!replicateKey || replicateKey.includes('YOUR_')) {
        missing.push('apis.imageGeneration.replicateKey (Replicate provider requires token)');
      }
    } else if (provider === 'gemini-imagen') {
      // Imagen uses same Gemini key, just check it exists
      // Already checked above
    } else if (!provider) {
      missing.push('apis.imageGeneration.provider (Choose: replicate or gemini-imagen)');
    }

    return {
      valid: missing.length === 0,
      missing
    };
  }

  /**
   * Sanitize file name
   */
  sanitizeFileName(name) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
}

export default new Validator();

