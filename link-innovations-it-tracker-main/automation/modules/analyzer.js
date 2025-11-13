import path from 'path';
import fileSystem from '../utils/fileSystem.js';
import logger from '../utils/logger.js';

/**
 * Codebase Analyzer Module
 * Scans the project to identify image requirements
 */

class Analyzer {
  constructor(config) {
    this.config = config;
    this.projectRoot = path.resolve(process.cwd(), config.project.root);
  }

  /**
   * Analyze entire project for image needs
   */
  async analyze(scope = null) {
    logger.startSpinner('Analyzing project structure...');

    const results = {
      pages: [],
      components: [],
      totalImagesNeeded: 0,
      summary: {}
    };

    try {
      // Scan all page.tsx files
      const pages = await this.scanPages(scope);
      results.pages = pages;

      // Analyze components for image requirements
      const components = await this.scanComponents();
      results.components = components;

      // Calculate totals
      results.totalImagesNeeded = this.calculateTotalImages(pages, components);
      results.summary = this.generateSummary(pages, components);

      logger.succeedSpinner('Project analysis complete');
      logger.success(`Found ${results.pages.length} pages`);
      logger.success(`Detected ${results.totalImagesNeeded} missing images`);

      return results;
    } catch (error) {
      logger.failSpinner('Analysis failed');
      throw error;
    }
  }

  /**
   * Scan all page files
   */
  async scanPages(scope) {
    const pages = [];
    const scanPath = scope 
      ? path.join(this.projectRoot, 'src/app', scope)
      : path.join(this.projectRoot, 'src/app');

    const pageFiles = await fileSystem.findFiles(
      path.join(scanPath, '**/page.tsx').replace(/\\/g, '/')
    );

    for (const pageFile of pageFiles) {
      const content = await fileSystem.readFile(pageFile);
      const pageInfo = await this.analyzePage(pageFile, content);
      if (pageInfo) {
        pages.push(pageInfo);
      }
    }

    return pages;
  }

  /**
   * Analyze individual page
   */
  async analyzePage(filePath, content) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const pathParts = relativePath.split(path.sep);

    // Determine page type
    let pageType = 'other';
    let pageName = 'unknown';

    if (pathParts.includes('services')) {
      pageType = 'service';
      const serviceIndex = pathParts.indexOf('services') + 1;
      pageName = pathParts[serviceIndex] || 'services-index';
    } else if (pathParts.includes('industries')) {
      pageType = 'industry';
      const industryIndex = pathParts.indexOf('industries') + 1;
      pageName = pathParts[industryIndex] || 'industries-index';
    } else if (pathParts.includes('showcases')) {
      pageType = 'showcase';
      const showcaseIndex = pathParts.indexOf('showcases') + 1;
      pageName = pathParts[showcaseIndex] || 'showcases-index';
    } else if (relativePath.includes('app\\page.tsx') || relativePath.includes('app/page.tsx')) {
      pageType = 'homepage';
      pageName = 'home';
    } else if (pathParts.includes('about')) {
      pageType = 'about';
      pageName = 'about';
    } else if (pathParts.includes('portfolio')) {
      pageType = 'portfolio';
      pageName = 'portfolio';
    } else if (pathParts.includes('contact')) {
      pageType = 'contact';
      pageName = 'contact';
    }

    // Detect required images
    const requiredImages = this.detectRequiredImages(content, pageType);

    // Detect theme
    const theme = this.detectTheme(content);

    // Check for existing images
    const hasImages = this.checkExistingImages(content);

    return {
      path: relativePath,
      type: pageType,
      name: pageName,
      requiredImages,
      theme,
      hasImages,
      textOverlayNeeded: true,
      priority: this.determinePriority(pageType)
    };
  }

  /**
   * Detect required images based on content and type
   */
  detectRequiredImages(content, pageType) {
    const images = [];

    // Hero image is needed for most pages
    if (!content.includes('hero-image') && !content.includes('HeroImage')) {
      images.push({
        type: 'hero',
        dimensions: '1920x1080',
        aspectRatio: '16:9',
        purpose: 'Main hero section background'
      });
    }

    // Service pages need additional images
    if (pageType === 'service') {
      if (!content.includes('dashboard') && !content.includes('Dashboard')) {
        images.push({
          type: 'dashboard',
          dimensions: '1920x1080',
          aspectRatio: '16:9',
          purpose: 'Service capabilities showcase'
        });
      }
    }

    // Homepage needs multiple images
    if (pageType === 'homepage') {
      if (!content.includes('3d-menu-background')) {
        images.push({
          type: '3d-background',
          dimensions: '1920x1080',
          aspectRatio: '16:9',
          purpose: '3D infinite menu background'
        });
      }
    }

    return images;
  }

  /**
   * Detect theme from content
   */
  detectTheme(content) {
    if (content.includes('cortex') || content.includes('dark') || content.includes('purple')) {
      return 'tech-forward';
    } else if (content.includes('metomic') || content.includes('enterprise') || content.includes('coral')) {
      return 'enterprise';
    } else if (content.includes('vareto') || content.includes('light') || content.includes('yellow')) {
      return 'modern-light';
    }
    return 'default';
  }

  /**
   * Check if page already has images
   */
  checkExistingImages(content) {
    const imagePatterns = [
      /src=["']\/[^"']*\.(jpg|jpeg|png|webp)/gi,
      /Image.*src=["'][^"']+["']/gi,
      /background.*url\([^)]+\)/gi
    ];

    return imagePatterns.some(pattern => pattern.test(content));
  }

  /**
   * Scan components for image needs
   */
  async scanComponents() {
    const components = [];
    const componentFiles = await fileSystem.findFiles(
      path.join(this.projectRoot, 'src/components/**/*.tsx').replace(/\\/g, '/')
    );

    // For now, focus on main section components
    const sectionComponents = componentFiles.filter(file => 
      file.includes('Section') || 
      file.includes('Hero') ||
      file.includes('Blog') ||
      file.includes('Testimonial')
    );

    for (const file of sectionComponents.slice(0, 10)) { // Limit to avoid overwhelming
      const content = await fileSystem.readFile(file);
      const relativePath = path.relative(this.projectRoot, file);
      
      if (!this.checkExistingImages(content)) {
        components.push({
          path: relativePath,
          name: path.basename(file, '.tsx'),
          needsImage: true
        });
      }
    }

    return components;
  }

  /**
   * Calculate total images needed
   */
  calculateTotalImages(pages, components) {
    const pageImages = pages.reduce((sum, page) => sum + page.requiredImages.length, 0);
    const componentImages = components.filter(c => c.needsImage).length;
    return pageImages + componentImages;
  }

  /**
   * Generate summary statistics
   */
  generateSummary(pages, components) {
    const byType = pages.reduce((acc, page) => {
      acc[page.type] = (acc[page.type] || 0) + 1;
      return acc;
    }, {});

    const byPriority = pages.reduce((acc, page) => {
      acc[page.priority] = (acc[page.priority] || 0) + 1;
      return acc;
    }, {});

    return {
      totalPages: pages.length,
      totalComponents: components.length,
      byType,
      byPriority
    };
  }

  /**
   * Determine image priority
   */
  determinePriority(pageType) {
    const priorityMap = {
      'homepage': 'critical',
      'service': 'high',
      'industry': 'medium',
      'showcase': 'medium',
      'about': 'low',
      'portfolio': 'medium',
      'contact': 'low',
      'other': 'low'
    };

    return priorityMap[pageType] || 'low';
  }
}

export default Analyzer;


