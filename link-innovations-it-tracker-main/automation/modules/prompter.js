import { GoogleGenerativeAI } from '@google/generative-ai';
import logger from '../utils/logger.js';
import validator from '../utils/validator.js';

/**
 * Prompt Engineer Module
 * Uses Gemini AI to generate optimized image prompts
 */

class PromptEngineer {
  constructor(config, designKnowledge) {
    this.config = config;
    this.designKnowledge = designKnowledge;
    this.genAI = new GoogleGenerativeAI(config.apis.gemini.apiKey);
    this.model = this.genAI.getGenerativeModel({ 
      model: config.apis.gemini.model 
    });
  }

  /**
   * Generate prompts for all required images
   */
  async generatePrompts(analysisResults) {
    logger.startSpinner('Generating prompts with Gemini AI...');

    const prompts = [];
    let generated = 0;

    try {
      // Generate prompts for each page
      for (const page of analysisResults.pages) {
        for (const imageReq of page.requiredImages) {
          const prompt = await this.generatePrompt(page, imageReq);
          if (prompt) {
            prompts.push({
              page: page.path,
              pageName: page.name,
              pageType: page.type,
              imageType: imageReq.type,
              prompt: prompt.primary,
              alternatePrompt: prompt.alternate,
              metadata: {
                dimensions: imageReq.dimensions,
                aspectRatio: imageReq.aspectRatio,
                purpose: imageReq.purpose,
                theme: page.theme
              }
            });
            generated++;
            logger.updateSpinner(`Generated ${generated} prompts...`);
          }
        }
      }

      logger.succeedSpinner(`Generated ${prompts.length} optimized prompts`);
      logger.success('Validated brand alignment');

      return prompts;
    } catch (error) {
      logger.failSpinner('Prompt generation failed');
      throw error;
    }
  }

  /**
   * Generate single prompt using Gemini AI
   */
  async generatePrompt(pageInfo, imageRequirement) {
    const systemPrompt = this.buildSystemPrompt();
    const userPrompt = this.buildUserPrompt(pageInfo, imageRequirement);

    try {
      const result = await this.model.generateContent(systemPrompt + '\n\n' + userPrompt);
      const response = result.response.text();

      // Parse response to extract prompts
      const prompts = this.parseGeminiResponse(response);

      // Validate prompts
      const validated = this.validateAndEnhancePrompts(prompts, imageRequirement);

      return validated;
    } catch (error) {
      logger.error(`Failed to generate prompt for ${pageInfo.name}: ${error.message}`);
      // Fallback to template-based prompt
      return this.generateFallbackPrompt(pageInfo, imageRequirement);
    }
  }

  /**
   * Build system prompt for Gemini
   */
  buildSystemPrompt() {
    const { brandColors, visualStyle, rules } = this.designKnowledge;

    return `You are an expert AI image prompt engineer specializing in creating highly detailed, photorealistic technology imagery for Link Innovations - a premium B2B tech company.

BRAND IDENTITY:
- Company: Link Innovations
- Industry: Enterprise B2B Technology Solutions
- Style: Premium, professional, cutting-edge, trustworthy
- Target: Fortune 500 companies, tech startups, enterprise clients

MANDATORY BRAND COLORS (use specific hex codes):
- Primary Blue: ${brandColors.primaryBlue} - for main tech elements
- Primary Purple: ${brandColors.primaryPurple} - for accent glows/highlights
- Primary Cyan: ${brandColors.primaryCyan} - for secondary elements
- Accent Coral: ${brandColors.accentCoral} - sparingly for emphasis
- Accent Yellow: ${brandColors.accentYellow} - for UI highlights

VISUAL REQUIREMENTS:
- Quality: 8K, ultra high resolution, professional photography grade
- Lighting: Cinematic, dramatic rim lighting, volumetric effects, HDR
- Composition: Rule of thirds, professional framing, depth of field
- Style: Photorealistic, modern tech aesthetic, premium corporate look
- Atmosphere: Innovative, trustworthy, cutting-edge, sophisticated

CRITICAL RULES:
✓ EVERY prompt must include at least 2-3 specific brand colors with hex codes
✓ Be HIGHLY SPECIFIC about subjects, angles, and composition
✓ Include lighting details (cinematic, rim lighting, volumetric effects)
✓ Specify depth of field and focal points
✓ Add atmospheric elements (fog, particles, light rays)
✓ Make each image UNIQUE - vary angles, subjects, and compositions dramatically
✓ Use professional photography terms (bokeh, chromatic aberration, lens flare)

NEVER DO:
✗ Generic descriptions like "technology background"
✗ Vague prompts without specific elements
✗ Omit brand colors
✗ Create similar/repetitive images
✗ Use amateur photography terms

Your task: Generate TWO completely DIFFERENT, highly detailed prompts for professional AI image generation.`;
  }

  /**
   * Build user prompt for specific image
   */
  buildUserPrompt(pageInfo, imageRequirement) {
    const specificReqs = this.designKnowledge.specificRequirements || {};
    const imageTypeReqs = specificReqs[imageRequirement.type] || {};

    // Add specific guidance based on image type
    const typeGuidance = {
      hero: `
HERO IMAGE SPECIFIC REQUIREMENTS:
- Show a dramatic, wide-angle scene
- Include human elements (hands, person from behind, partial view)
- Feature recognizable tech objects (laptop, screens, devices)
- Use dynamic perspective (over-shoulder, side angle, diagonal composition)
- Include environmental context (modern office, tech lab, workspace)
- Add depth with foreground/background elements`,
      
      dashboard: `
DASHBOARD/INTERFACE IMAGE SPECIFIC REQUIREMENTS:
- Show close-up view of screens/interfaces
- Include detailed UI elements (charts, graphs, data visualization)
- Feature glowing elements and holographic effects
- Use macro/close-up perspective
- Include reflections and screen glow on surfaces
- Show hands interacting or cursor/pointer elements`,
      
      service: `
SERVICE IMAGE SPECIFIC REQUIREMENTS:
- Feature specific service-related objects/tools
- Show professional work environment
- Include multiple elements showing service capabilities
- Use mid-range perspective showing complete scene
- Add context-specific props and equipment`,
      
      background: `
BACKGROUND IMAGE SPECIFIC REQUIREMENTS:
- Abstract geometric patterns
- Flowing data streams or network visualizations
- Particle systems and light effects
- No recognizable objects, pure atmosphere
- Seamless/tileable composition`
    };

    return `Generate TWO completely DIFFERENT image prompts for:

PROJECT: Link Innovations - ${pageInfo.name}
IMAGE TYPE: ${imageRequirement.type}
PURPOSE: ${imageRequirement.purpose}
ASPECT RATIO: ${imageRequirement.aspectRatio}
${pageInfo.textOverlayNeeded ? 'TEXT SPACE: Leave 30% empty space for text overlay' : ''}

${typeGuidance[imageRequirement.type] || typeGuidance.service}

MANDATORY REQUIREMENTS FOR EACH PROMPT:
1. START with specific subject and angle (e.g., "Close-up over-shoulder view of...")
2. Include 2-3 brand colors with hex codes (#3B82F6, #8B5CF6, #06B6D4)
3. Specify EXACT lighting (e.g., "cinematic rim lighting from top-right, volumetric fog with ${imageRequirement.type === 'hero' ? '#8B5CF6' : '#3B82F6'} glow")
4. Describe composition (rule of thirds, focal point, depth of field)
5. Add atmospheric details (particles, light rays, bokeh effects)
6. Include professional photography terms (f/2.8 aperture, shallow DOF, 8K quality)
7. Specify material details (glass, metal, matte surfaces, reflections)
8. Make PRIMARY and ALTERNATE completely different scenes/angles

DIFFERENTIATION REQUIREMENTS:
- PRIMARY: Use one angle/subject/composition
- ALTERNATE: Use completely different angle/subject/composition
- Change camera position (close-up vs wide, left vs right, top vs bottom)
- Vary the main subject or focal point dramatically
- Use different color dominance (blue-heavy vs purple-heavy)

OUTPUT FORMAT:
PRIMARY:
[Highly detailed prompt with specific camera angle, subject, lighting, colors with hex codes, composition, and atmosphere - minimum 150 words]

ALTERNATE:
[Completely different scene with different angle, subject, lighting, colors, and composition - minimum 150 words]`;
  }

  /**
   * Parse Gemini response to extract prompts
   */
  parseGeminiResponse(response) {
    const primaryMatch = response.match(/PRIMARY:\s*\n([^\n]+(?:\n(?!ALTERNATE:)[^\n]+)*)/);
    const alternateMatch = response.match(/ALTERNATE:\s*\n([^\n]+(?:\n(?!$)[^\n]+)*)/);

    const primary = primaryMatch ? primaryMatch[1].trim() : null;
    const alternate = alternateMatch ? alternateMatch[1].trim() : null;

    return { primary, alternate };
  }

  /**
   * Validate and enhance prompts
   */
  validateAndEnhancePrompts(prompts, imageRequirement) {
    let { primary, alternate } = prompts;

    // Ensure brand colors are included
    const colorValidation = validator.validateBrandColors(
      primary || '',
      this.config.brandColors
    );

    if (!colorValidation.valid) {
      // Add missing colors
      const colorString = ` with ${this.config.brandColors.primaryBlue} blue and ${this.config.brandColors.primaryPurple} purple accents`;
      primary = (primary || '') + colorString;
    }

    // Ensure aspect ratio is mentioned
    if (primary && !primary.includes('--ar')) {
      primary += `, ${imageRequirement.aspectRatio} aspect ratio`;
    }

    // Ensure quality keywords
    if (primary && !primary.includes('professional') && !primary.includes('modern')) {
      primary += ', professional modern tech aesthetic';
    }

    return {
      primary: primary || this.generateFallbackPrompt({}, imageRequirement).primary,
      alternate: alternate || primary
    };
  }

  /**
   * Generate fallback prompt when AI fails
   */
  generateFallbackPrompt(pageInfo, imageRequirement) {
    const colors = this.config.brandColors;
    const type = imageRequirement.type;

    const templates = {
      hero: `Modern technology workspace with holographic interfaces, ${colors.primaryBlue} and ${colors.primaryPurple} neon accents, futuristic professional setting, dramatic lighting, cinematic depth, high-tech aesthetic, ${imageRequirement.aspectRatio} composition`,
      
      dashboard: `Clean modern software dashboard interface with data visualization, ${colors.primaryPurple} and ${colors.primaryCyan} UI elements, dark theme, professional SaaS design, elegant charts and metrics, ${imageRequirement.aspectRatio} layout`,
      
      service: `Professional technology service visualization, ${colors.primaryBlue} and ${colors.primaryCyan} tech elements, modern corporate environment, innovative solutions concept, ${imageRequirement.aspectRatio} composition`,
      
      industry: `Modern ${pageInfo.name || 'business'} environment with advanced technology integration, ${colors.primaryBlue} tech displays, professional setting, high-tech innovation, ${imageRequirement.aspectRatio} layout`,
      
      background: `Abstract tech pattern with ${colors.primaryPurple} to ${colors.primaryBlue} gradient, geometric shapes, minimal design, professional background, ${imageRequirement.aspectRatio} composition`
    };

    const primary = templates[type] || templates.hero;

    return {
      primary,
      alternate: primary.replace(colors.primaryBlue, colors.primaryCyan)
    };
  }

  /**
   * Get example prompts for reference
   */
  getExamplePrompts(imageType) {
    const { successful } = this.designKnowledge.prompts;
    
    // Filter prompts that might be relevant to image type
    const relevant = successful.filter(prompt => 
      prompt.toLowerCase().includes(imageType) ||
      prompt.toLowerCase().includes('hero') ||
      prompt.toLowerCase().includes('dashboard')
    );

    return relevant.slice(0, 3); // Return top 3 examples
  }
}

export default PromptEngineer;

