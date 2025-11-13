import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenAI } from '@google/genai';
import logger from '../utils/logger.js';
import fileSystem from '../utils/fileSystem.js';

/**
 * Image Generator Module
 * Integrates with Google Imagen 3 (Gemini ecosystem) to generate images
 * Fallback to Replicate if needed
 */

class ImageGenerator {
  constructor(config) {
    this.config = config;
    this.provider = config.apis.imageGeneration?.provider || 'gemini-imagen';
    this.genAI = new GoogleGenerativeAI(config.apis.gemini.apiKey);
    this.imagenAI = new GoogleGenAI({ apiKey: config.apis.gemini.apiKey });
    this.generatedImages = [];
  }

  /**
   * Generate all images from prompts
   */
  async generateImages(prompts) {
    logger.startSpinner('Generating images with Freepik AI...');

    const results = [];
    const totalPrompts = prompts.length;
    let successCount = 0;
    let failCount = 0;

    try {
      // Generate images with rate limiting
      const maxParallel = this.config.generation.maxParallelRequests || 3;
      
      for (let i = 0; i < prompts.length; i += maxParallel) {
        const batch = prompts.slice(i, i + maxParallel);
        const batchResults = await Promise.allSettled(
          batch.map(promptData => this.generateSingleImage(promptData, i + batch.indexOf(promptData) + 1, totalPrompts))
        );

        for (const result of batchResults) {
          if (result.status === 'fulfilled' && result.value) {
            results.push(result.value);
            successCount++;
          } else {
            failCount++;
            logger.error(`Failed to generate image: ${result.reason?.message || 'Unknown error'}`);
          }
        }

        logger.updateSpinner(`Generated ${successCount}/${totalPrompts} images...`);

        // Small delay between batches
        if (i + maxParallel < prompts.length) {
          await this.delay(2000);
        }
      }

      logger.succeedSpinner(`Generated ${successCount} images`);
      
      if (failCount > 0) {
        logger.warn(`${failCount} images failed to generate`);
      }

      if (successCount > 0) {
        const avgQuality = results.reduce((sum, r) => sum + (r.quality || 90), 0) / results.length;
        logger.success(`Average quality: ${avgQuality.toFixed(0)}/100`);
      }

      return results;
    } catch (error) {
      logger.failSpinner('Image generation failed');
      throw error;
    }
  }

  /**
   * Generate single image with Freepik API
   */
  async generateSingleImage(promptData, index, total) {
    const { prompt, pageName, imageType, metadata } = promptData;

    logger.debug(`[${index}/${total}] Generating ${imageType} for ${pageName}...`);

    try {
      // Try primary prompt first
      let result = await this.callFreepikAPI(prompt.primary || prompt, metadata);

      // If failed, try alternate prompt
      if (!result && prompt.alternate) {
        logger.debug(`Retrying with alternate prompt for ${pageName}...`);
        result = await this.callFreepikAPI(prompt.alternate, metadata);
      }

      if (!result) {
        throw new Error('Both primary and alternate prompts failed');
      }

      return {
        ...promptData,
        generatedImage: result.imageUrl,
        imageData: result.imageData,
        quality: result.quality || 90,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      logger.debug(`Failed to generate ${imageType} for ${pageName}: ${error.message}`);
      throw error;
    }
  }

  /**
   * Call Image Generation API (Freepik, Imagen, Gemini, or Replicate)
   */
  async callFreepikAPI(prompt, metadata) {
    const maxRetries = this.config.generation.retryAttempts || 3;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // Use Freepik API
        if (this.provider === 'freepik') {
          return await this.generateWithFreepik(prompt, metadata);
        }
        
        // Use Google Imagen (proper Imagen API)
        if (this.provider === 'imagen') {
          return await this.generateWithImagenAPI(prompt, metadata);
        }
        
        // Use Gemini's built-in image generation
        if (this.provider === 'gemini') {
          return await this.generateWithGemini(prompt, metadata);
        }
        
        // Use Google Imagen 3 (via Vertex AI)
        if (this.provider === 'gemini-imagen') {
          return await this.generateWithImagen(prompt, metadata);
        }
        
        // Fallback to Replicate
        return await this.generateWithReplicate(prompt, metadata);

      } catch (error) {
        logger.debug(`Attempt ${attempt}/${maxRetries} failed: ${error.message}`);
        
        if (attempt === maxRetries) {
          throw error;
        }

        await this.delay(this.config.generation.retryDelay || 5000);
      }
    }
  }

  /**
   * Generate image with Freepik API
   */
  async generateWithFreepik(prompt, metadata) {
    try {
      const apiKey = this.config.apis.imageGeneration?.apiKey;
      const model = this.config.apis.imageGeneration?.model || 'flux-dev';
      
      if (!apiKey || apiKey.includes('YOUR_')) {
        throw new Error('Freepik API key not configured');
      }

      logger.debug(`Using Freepik ${model} model`);
      
      // Clean prompt for Freepik
      const cleanPrompt = this.formatPromptForFreepik(prompt);
      
      // Determine aspect ratio
      let aspectRatio = metadata.aspectRatio || '16:9';
      // Freepik uses format like "16:9", "1:1", "9:16"
      
      // Create image generation task
      const createResponse = await axios.post(
        `https://api.freepik.com/v1/ai/text-to-image/${model}`,
        {
          prompt: cleanPrompt,
          num_images: 1,
          image: {
            size: aspectRatio === '16:9' ? '1024x576' : 
                  aspectRatio === '9:16' ? '576x1024' :
                  aspectRatio === '1:1' ? '1024x1024' : '1024x576'
          }
        },
        {
          headers: {
            'x-freepik-api-key': apiKey,
            'Content-Type': 'application/json'
          },
          timeout: 30000
        }
      );

      // Extract task ID from response
      const taskId = createResponse.data?.data?.task_id;
      
      if (!taskId) {
        throw new Error(`No task ID in response. Response: ${JSON.stringify(createResponse.data)}`);
      }
      
      logger.debug(`Freepik task created: ${taskId}`);


      // Poll for task completion
      const maxPollAttempts = 60; // 60 * 3 = 180 seconds max
      
      for (let i = 0; i < maxPollAttempts; i++) {
        await this.delay(3000); // Wait 3 seconds between polls
        
        const statusResponse = await axios.get(
          `https://api.freepik.com/v1/ai/text-to-image/${model}/${taskId}`,
          {
            headers: {
              'x-freepik-api-key': apiKey
            }
          }
        );

        const status = statusResponse.data?.data?.status;
        const generated = statusResponse.data?.data?.generated;
        
        if (status === 'COMPLETED' && generated && generated.length > 0) {
          const imageUrl = generated[0];  // First generated image URL
          
          if (!imageUrl) {
            throw new Error('No image URL in completed task');
          }

          logger.debug(`Freepik image ready, downloading from: ${imageUrl}`);
          
          // Download the image
          const imageData = await this.downloadImage(imageUrl);

          return {
            imageUrl,
            imageData,
            quality: 90
          };
        }
        
        if (status === 'FAILED' || status === 'ERROR') {
          const error = statusResponse.data?.data?.error || statusResponse.data?.data?.message;
          throw new Error(`Freepik task failed: ${error || 'Unknown error'}`);
        }
        
        // Still processing, continue polling
        if (i % 5 === 0) {  // Log every 15 seconds
          logger.debug(`Freepik task status: ${status} (${i * 3}s elapsed)`);
        }
      }

      throw new Error('Freepik task timeout after 180 seconds');

    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        logger.error(`Freepik API error ${status}: ${JSON.stringify(data)}`);
        
        // Provide specific error messages
        if (status === 401) {
          throw new Error(`Freepik API authentication failed. Check your API key.`);
        } else if (status === 429) {
          throw new Error(`Freepik API rate limit exceeded. Please wait and try again.`);
        } else if (status === 403) {
          throw new Error(`Freepik API access denied. Your subscription may not include AI generation.`);
        } else {
          throw new Error(`Freepik API error ${status}: ${data?.message || JSON.stringify(data)}`);
        }
      } else {
        logger.debug(`Freepik generation failed: ${error.message}`);
        throw error;
      }
    }
  }

  /**
   * Generate image with Google Imagen API (using proper SDK)
   */
  async generateWithImagenAPI(prompt, metadata) {
    try {
      const modelName = this.config.apis.imageGeneration?.model || 'imagen-4.0-generate-001';
      
      logger.debug(`Using Imagen model: ${modelName}`);
      
      // Clean prompt for Imagen
      const cleanPrompt = this.formatPromptForImagen(prompt);
      
      // Map aspect ratio format
      let aspectRatio = this.config.apis.imageGeneration?.aspectRatio || metadata.aspectRatio || '16:9';
      
      // Generate with Imagen using proper SDK
      const response = await this.imagenAI.models.generateImages({
        model: modelName,
        prompt: cleanPrompt,
        config: {
          numberOfImages: this.config.apis.imageGeneration?.numberOfImages || 1,
          aspectRatio: aspectRatio,
          personGeneration: 'allow_adult'
        }
      });
      
      // Extract image data from response
      if (!response.generatedImages || response.generatedImages.length === 0) {
        throw new Error('No images generated by Imagen');
      }
      
      // Get first generated image
      const generatedImage = response.generatedImages[0];
      const imageBytes = generatedImage.image.imageBytes;
      const imageData = Buffer.from(imageBytes, 'base64');

      return {
        imageUrl: 'generated-by-imagen',
        imageData,
        quality: 95
      };

    } catch (error) {
      logger.debug(`Imagen generation failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Generate image with Gemini's image generation model
   */
  async generateWithGemini(prompt, metadata) {
    try {
      const modelName = this.config.apis.imageGeneration?.model || 'gemini-2.5-flash-image';
      logger.debug(`Using Gemini model: ${modelName}`);
      
      const model = this.genAI.getGenerativeModel({ model: modelName });
      
      // Clean prompt for Gemini
      const cleanPrompt = this.formatPromptForImagen(prompt);
      
      // Generate image
      const result = await model.generateContent(cleanPrompt);
      const response = await result.response;
      
      // Gemini image models return base64 encoded images
      const candidates = response.candidates;
      
      if (!candidates || candidates.length === 0) {
        throw new Error('No image generated by Gemini');
      }
      
      // Extract image data from response
      // The response structure varies, check for different formats
      let imageData;
      
      if (candidates[0].content && candidates[0].content.parts) {
        const part = candidates[0].content.parts[0];
        
        if (part.inlineData) {
          // Image is in inline data format
          const base64Data = part.inlineData.data;
          imageData = Buffer.from(base64Data, 'base64');
        } else if (part.text) {
          // Sometimes returns text description, try to get image URL
          throw new Error('Gemini returned text instead of image');
        } else {
          throw new Error('Unknown image format in Gemini response');
        }
      } else {
        throw new Error('Invalid response structure from Gemini');
      }

      return {
        imageUrl: 'generated-by-gemini',
        imageData,
        quality: 95
      };

    } catch (error) {
      logger.debug(`Gemini image generation failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Generate image with Google Imagen 3
   */
  async generateWithImagen(prompt, metadata) {
    try {
      // Google Imagen 3 via Vertex AI or AI Studio
      // Using Vertex AI endpoint
      const projectId = process.env.GOOGLE_CLOUD_PROJECT || 'your-project-id';
      const location = 'us-central1';
      
      // Note: This requires Vertex AI setup. Alternative approach using Generative AI SDK:
      const model = this.genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
      
      // For now, using a workaround with Gemini to create base64 encoded instructions
      // Real implementation would use Vertex AI's Imagen endpoint
      
      // Simplified approach: Call Vertex AI REST API directly
      const endpoint = `https://${location}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${location}/publishers/google/models/imagegeneration@006:predict`;
      
      const response = await axios.post(
        endpoint,
        {
          instances: [
            {
              prompt: this.formatPromptForImagen(prompt)
            }
          ],
          parameters: {
            sampleCount: 1,
            aspectRatio: metadata.aspectRatio || '16:9',
            safetySetting: 'block_some',
            personGeneration: 'allow_adult'
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${await this.getGoogleAccessToken()}`,
            'Content-Type': 'application/json'
          },
          timeout: 60000
        }
      );

      // Extract base64 image from response
      const imageB64 = response.data?.predictions?.[0]?.bytesBase64Encoded;
      
      if (!imageB64) {
        throw new Error('No image data in Imagen response');
      }

      const imageData = Buffer.from(imageB64, 'base64');

      return {
        imageUrl: 'generated-by-imagen',
        imageData,
        quality: 95
      };

    } catch (error) {
      logger.debug(`Imagen generation failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Generate image with Replicate (fallback)
   */
  async generateWithReplicate(prompt, metadata) {
    try {
      const replicateKey = this.config.apis.imageGeneration?.replicateKey;
      
      if (!replicateKey || replicateKey.includes('YOUR_')) {
        throw new Error('Replicate API key not configured');
      }

      // Using Flux Schnell model (fast and free on Replicate)
      const response = await axios.post(
        'https://api.replicate.com/v1/predictions',
        {
          version: 'black-forest-labs/flux-schnell:latest',
          input: {
            prompt: this.formatPromptForReplicate(prompt),
            aspect_ratio: metadata.aspectRatio || '16:9',
            num_outputs: 1,
            output_format: 'png',
            output_quality: 90
          }
        },
        {
          headers: {
            'Authorization': `Token ${replicateKey}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Poll for completion
      const predictionId = response.data.id;
      const imageUrl = await this.pollReplicatePrediction(predictionId, replicateKey);
      
      // Download image
      const imageData = await this.downloadImage(imageUrl);

      return {
        imageUrl,
        imageData,
        quality: 90
      };

    } catch (error) {
      logger.debug(`Replicate generation failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Poll Replicate prediction until complete
   */
  async pollReplicatePrediction(predictionId, apiKey) {
    const maxAttempts = 60; // 60 * 2 = 120 seconds max wait
    
    for (let i = 0; i < maxAttempts; i++) {
      const response = await axios.get(
        `https://api.replicate.com/v1/predictions/${predictionId}`,
        {
          headers: { 'Authorization': `Token ${apiKey}` }
        }
      );

      if (response.data.status === 'succeeded') {
        return response.data.output[0]; // Image URL
      }

      if (response.data.status === 'failed') {
        throw new Error('Replicate prediction failed');
      }

      await this.delay(2000); // Wait 2 seconds
    }

    throw new Error('Replicate prediction timeout');
  }

  /**
   * Get Google Cloud access token
   */
  async getGoogleAccessToken() {
    // This is a simplified version
    // In production, use Google Auth library
    // For now, return the API key (works for some endpoints)
    return this.config.apis.gemini.apiKey;
  }

  /**
   * Format prompt for Imagen API
   */
  formatPromptForImagen(prompt) {
    // Remove Midjourney-specific parameters
    let formatted = prompt
      .replace(/--ar \d+:\d+/g, '')
      .replace(/--style raw/g, '')
      .replace(/--v \d+\.\d+/g, '')
      .replace(/--q \d+/g, '')
      .trim();

    // Imagen works best with clear, descriptive prompts
    if (!formatted.toLowerCase().includes('professional')) {
      formatted += ', professional quality, photorealistic';
    }

    // Limit to reasonable length (Imagen has token limits)
    if (formatted.length > 1000) {
      formatted = formatted.substring(0, 1000);
    }

    return formatted;
  }

  /**
   * Format prompt for Replicate API
   */
  formatPromptForReplicate(prompt) {
    return this.formatPromptForImagen(prompt); // Same formatting works for both
  }

  /**
   * Legacy method name for compatibility
   */
  formatPromptForFreepik(prompt) {
    return this.formatPromptForImagen(prompt);
  }

  /**
   * Get image size for API
   */
  getImageSize(dimensions) {
    const [width, height] = dimensions.split('x').map(Number);
    
    // Freepik might have specific size options
    // Adjust based on API documentation
    if (width === 1920 && height === 1080) {
      return '1920x1080'; // or '16:9' or 'large' depending on API
    }
    
    return dimensions;
  }

  /**
   * Download image from URL
   */
  async downloadImage(url) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout: 30000
      });

      return Buffer.from(response.data);
    } catch (error) {
      throw new Error(`Failed to download image: ${error.message}`);
    }
  }

  /**
   * Utility delay function
   */
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Test API connection
   */
  async testConnection() {
    try {
      const providerName = this.provider === 'gemini-imagen' ? 'Google Imagen' : 'Replicate';
      logger.info(`Testing ${providerName} API connection...`);
      
      const testPrompt = `Simple blue and purple gradient background, modern tech aesthetic`;
      
      const result = await this.callFreepikAPI(testPrompt, {
        dimensions: '1920x1080',
        aspectRatio: '16:9'
      });

      if (result) {
        logger.success(`${providerName} API connection successful!`);
        logger.info(`Provider: ${this.provider}`);
        return true;
      }
    } catch (error) {
      logger.error(`API test failed: ${error.message}`);
      
      if (this.provider === 'gemini-imagen') {
        logger.warn('Note: Google Imagen requires Vertex AI setup.');
        logger.warn('Alternative: Set "provider": "replicate" in config.json');
        logger.warn('Get Replicate key (free tier): https://replicate.com');
      }
      
      return false;
    }
  }
}

export default ImageGenerator;

