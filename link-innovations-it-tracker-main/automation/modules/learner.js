import path from 'path';
import fileSystem from '../utils/fileSystem.js';
import logger from '../utils/logger.js';

/**
 * Design System Learner Module
 * Reads and extracts knowledge from design documentation
 */

class DesignSystemLearner {
  constructor(config) {
    this.config = config;
    this.projectRoot = path.resolve(process.cwd(), config.project.root);
    this.knowledge = null;
  }

  /**
   * Learn from all design system documentation
   */
  async learn() {
    logger.startSpinner('Learning design system...');

    try {
      const knowledge = {
        brandColors: this.config.brandColors,
        visualStyle: {},
        prompts: {
          successful: [],
          templates: []
        },
        rules: {
          dos: [],
          donts: []
        },
        components: {}
      };

      // Read each design document
      for (const docPath of this.config.project.designSystemDocs) {
        const fullPath = path.join(this.projectRoot, docPath);
        const exists = await fileSystem.exists(fullPath);
        
        if (exists) {
          const content = await fileSystem.readFile(fullPath);
          this.extractKnowledge(content, knowledge, docPath);
        } else {
          logger.warn(`Design doc not found: ${docPath}`);
        }
      }

      // Extract successful prompts from MIDJOURNEY_IMAGE_PROMPTS.md
      await this.extractSuccessfulPrompts(knowledge);

      this.knowledge = knowledge;
      logger.succeedSpinner('Design system learned');
      
      logger.debug(`Brand colors: ${Object.keys(knowledge.brandColors).length}`);
      logger.debug(`Successful prompts: ${knowledge.prompts.successful.length}`);
      logger.debug(`Style rules: ${knowledge.rules.dos.length} dos, ${knowledge.rules.donts.length} donts`);

      return knowledge;
    } catch (error) {
      logger.failSpinner('Failed to learn design system');
      throw error;
    }
  }

  /**
   * Extract knowledge from documentation content
   */
  extractKnowledge(content, knowledge, docName) {
    // Extract visual style keywords
    if (docName.includes('STYLE_GUIDE')) {
      this.extractVisualStyle(content, knowledge);
    }

    // Extract brand guidelines
    if (docName.includes('LEARNING_SUMMARY')) {
      this.extractBrandGuidelines(content, knowledge);
    }

    // Extract style rules
    if (docName.includes('IMAGE_GENERATION_STYLE_GUIDE')) {
      this.extractStyleRules(content, knowledge);
    }
  }

  /**
   * Extract visual style characteristics
   */
  extractVisualStyle(content, knowledge) {
    const styleMatch = content.match(/Aesthetic:(.*?)(?=\n-|$)/s);
    if (styleMatch) {
      knowledge.visualStyle.aesthetic = styleMatch[1].trim();
    }

    const moodMatch = content.match(/Mood:(.*?)(?=\n-|$)/s);
    if (moodMatch) {
      knowledge.visualStyle.mood = moodMatch[1].trim();
    }

    const lightingMatch = content.match(/Lighting:(.*?)(?=\n-|$)/s);
    if (lightingMatch) {
      knowledge.visualStyle.lighting = lightingMatch[1].trim();
    }

    // Default values if not found
    if (!knowledge.visualStyle.aesthetic) {
      knowledge.visualStyle.aesthetic = 'Modern, tech-forward, professional, clean';
    }
    if (!knowledge.visualStyle.mood) {
      knowledge.visualStyle.mood = 'Innovative, trustworthy, futuristic, premium';
    }
    if (!knowledge.visualStyle.lighting) {
      knowledge.visualStyle.lighting = 'Dramatic with highlights, dark backgrounds, neon accents';
    }
  }

  /**
   * Extract brand guidelines
   */
  extractBrandGuidelines(content, knowledge) {
    // Extract font information
    const fontMatch = content.match(/Fonts?:.*?Inter|Orbitron|Exo 2|JetBrains Mono/gi);
    if (fontMatch) {
      knowledge.visualStyle.fonts = ['Inter', 'Orbitron', 'JetBrains Mono'];
    }

    // Extract key principles
    const principlesMatch = content.match(/## ✅ ALWAYS DO THESE[\s\S]*?(?=##)/);
    if (principlesMatch) {
      const principles = principlesMatch[0].match(/✅ [^\n]+/g);
      if (principles) {
        knowledge.rules.dos = principles.map(p => p.replace('✅ ', '').trim());
      }
    }

    // Extract things to avoid
    const avoidMatch = content.match(/## ❌ NEVER DO[\s\S]*?(?=##)/);
    if (avoidMatch) {
      const avoid = avoidMatch[0].match(/❌ [^\n]+/g);
      if (avoid) {
        knowledge.rules.donts = avoid.map(p => p.replace('❌ ', '').trim());
      }
    }
  }

  /**
   * Extract style rules
   */
  extractStyleRules(content, knowledge) {
    // Extract DO rules
    const doSection = content.match(/### ✅ DO These Things[\s\S]*?(?=###)/);
    if (doSection) {
      const dos = doSection[0].match(/- ✅ [^\n]+/g);
      if (dos) {
        knowledge.rules.dos = [
          ...knowledge.rules.dos,
          ...dos.map(d => d.replace('- ✅ ', '').trim())
        ];
      }
    }

    // Extract DON'T rules
    const dontSection = content.match(/### ❌ DON'T Do These Things[\s\S]*?(?=###)/);
    if (dontSection) {
      const donts = dontSection[0].match(/- ❌ [^\n]+/g);
      if (donts) {
        knowledge.rules.donts = [
          ...knowledge.rules.donts,
          ...donts.map(d => d.replace('- ❌ ', '').trim())
        ];
      }
    }
  }

  /**
   * Extract successful prompts from documentation
   */
  async extractSuccessfulPrompts(knowledge) {
    const promptsDocPath = path.join(this.projectRoot, 'MIDJOURNEY_IMAGE_PROMPTS.md');
    const exists = await fileSystem.exists(promptsDocPath);

    if (!exists) {
      logger.warn('MIDJOURNEY_IMAGE_PROMPTS.md not found');
      return;
    }

    const content = await fileSystem.readFile(promptsDocPath);

    // Extract all prompts in code blocks
    const promptBlocks = content.match(/```\n([^`]+)```/g);
    if (promptBlocks) {
      knowledge.prompts.successful = promptBlocks
        .map(block => block.replace(/```\n|```/g, '').trim())
        .filter(prompt => prompt.length > 50);
    }

    logger.debug(`Extracted ${knowledge.prompts.successful.length} successful prompts`);
  }

  /**
   * Get knowledge for specific component type
   */
  getComponentKnowledge(componentType) {
    if (!this.knowledge) {
      throw new Error('Must call learn() first');
    }

    return {
      ...this.knowledge,
      specificRequirements: this.getSpecificRequirements(componentType)
    };
  }

  /**
   * Get specific requirements for component type
   */
  getSpecificRequirements(componentType) {
    const requirements = {
      'hero': {
        description: 'Epic, cinematic quality with clear focal point',
        textOverlay: true,
        aspectRatio: '16:9',
        styleKeywords: 'dramatic, professional, aspirational'
      },
      'dashboard': {
        description: 'Clean modern interface with readable UI elements',
        textOverlay: false,
        aspectRatio: '16:9',
        styleKeywords: 'clean, modern, professional SaaS design'
      },
      'service': {
        description: 'Tech-forward representation of service',
        textOverlay: true,
        aspectRatio: '16:9',
        styleKeywords: 'modern tech visualization, professional'
      },
      'industry': {
        description: 'Accurate industry representation with modern tech integration',
        textOverlay: true,
        aspectRatio: '16:9',
        styleKeywords: 'professional environment, high-tech integration'
      },
      'blog': {
        description: 'Abstract concept visualization for article',
        textOverlay: true,
        aspectRatio: '4:3',
        styleKeywords: 'modern illustration, tech concept'
      },
      'background': {
        description: 'Subtle, non-distracting pattern or gradient',
        textOverlay: true,
        aspectRatio: '16:9',
        styleKeywords: 'minimal, elegant, professional'
      }
    };

    return requirements[componentType] || requirements['hero'];
  }
}

export default DesignSystemLearner;


