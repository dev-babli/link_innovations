import sharp from 'sharp';
import path from 'path';
import logger from '../utils/logger.js';
import fileSystem from '../utils/fileSystem.js';
import validator from '../utils/validator.js';

/**
 * Image Optimizer Module
 * Optimizes, converts, and organizes generated images
 */

class ImageOptimizer {
  constructor(config) {
    this.config = config;
    this.optimizedImages = [];
  }

  /**
   * Optimize all generated images
   */
  async optimizeImages(generatedImages) {
    logger.startSpinner('Optimizing images...');

    const results = [];
    let optimized = 0;

    try {
      for (const imageData of generatedImages) {
        const result = await this.optimizeImage(imageData);
        if (result) {
          results.push(result);
          optimized++;
          logger.updateSpinner(`Optimized ${optimized}/${generatedImages.length} images...`);
        }
      }

      logger.succeedSpinner('Image optimization complete');
      logger.success('Converted to WebP');
      logger.success('Compressed to targets');
      logger.success('Organized into folders');

      return results;
    } catch (error) {
      logger.failSpinner('Optimization failed');
      throw error;
    }
  }

  /**
   * Optimize single image
   */
  async optimizeImage(imageData) {
    const { pageName, pageType, imageType, generatedImage, imageData: buffer, metadata } = imageData;

    try {
      // Generate file name
      const fileName = this.generateFileName(pageName, imageType, pageType);
      
      // Determine output directory
      const outputDir = this.getOutputDirectory(pageType);
      
      // Get max file size for this image type
      const maxSize = this.config.output.maxFileSizes[imageType] || 500;

      // Process image with Sharp
      const optimizedImages = await this.processImage(buffer, fileName, outputDir, maxSize);

      // Validate results
      for (const img of optimizedImages) {
        const sizeKB = await fileSystem.getFileSizeKB(img.path);
        const isValid = validator.validateFileSize(sizeKB, maxSize);
        
        if (!isValid) {
          logger.warn(`Image ${img.name} exceeds max size: ${sizeKB}KB > ${maxSize}KB`);
        }
      }

      return {
        ...imageData,
        optimizedImages,
        status: 'success'
      };

    } catch (error) {
      logger.error(`Failed to optimize ${pageName} ${imageType}: ${error.message}`);
      return {
        ...imageData,
        status: 'failed',
        error: error.message
      };
    }
  }

  /**
   * Process image with Sharp
   */
  async processImage(buffer, baseName, outputDir, maxSizeKB) {
    const outputs = [];

    // Ensure output directory exists
    await fileSystem.ensureDir(outputDir);

    // Convert to WebP (primary format)
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(buffer)
      .webp({ 
        quality: 85,
        effort: 6 
      })
      .toFile(webpPath);

    // Check size and re-compress if needed
    let sizeKB = parseFloat(await fileSystem.getFileSizeKB(webpPath));
    
    if (sizeKB > maxSizeKB) {
      // Recalculate quality to meet size target
      const quality = Math.max(60, Math.floor(85 * (maxSizeKB / sizeKB)));
      
      await sharp(buffer)
        .webp({ quality, effort: 6 })
        .toFile(webpPath);
      
      sizeKB = parseFloat(await fileSystem.getFileSizeKB(webpPath));
    }

    outputs.push({
      path: webpPath,
      name: `${baseName}.webp`,
      format: 'webp',
      sizeKB
    });

    // Also create JPEG fallback
    const jpgPath = path.join(outputDir, `${baseName}.jpg`);
    await sharp(buffer)
      .jpeg({ quality: 85 })
      .toFile(jpgPath);

    const jpgSizeKB = await fileSystem.getFileSizeKB(jpgPath);

    outputs.push({
      path: jpgPath,
      name: `${baseName}.jpg`,
      format: 'jpg',
      sizeKB: jpgSizeKB
    });

    logger.debug(`Optimized ${baseName}: WebP ${sizeKB}KB, JPG ${jpgSizeKB}KB`);

    return outputs;
  }

  /**
   * Generate standardized file name
   */
  generateFileName(pageName, imageType, pageType) {
    const sanitized = validator.sanitizeFileName(pageName);
    const typePrefix = validator.sanitizeFileName(imageType);
    const version = 'v1';

    return `li-${pageType}-${sanitized}-${typePrefix}-${version}`;
  }

  /**
   * Get output directory based on page type
   */
  getOutputDirectory(pageType) {
    const baseDir = path.resolve(process.cwd(), this.config.output.imageDir);

    const dirMap = {
      'homepage': path.join(baseDir, 'heroes/home'),
      'service': path.join(baseDir, 'services'),
      'industry': path.join(baseDir, 'industries'),
      'showcase': path.join(baseDir, 'heroes'),
      'about': path.join(baseDir, 'components'),
      'portfolio': path.join(baseDir, 'components'),
      'contact': path.join(baseDir, 'components'),
      'other': path.join(baseDir, 'components')
    };

    return dirMap[pageType] || path.join(baseDir, 'components');
  }

  /**
   * Generate responsive image sizes
   */
  async generateResponsiveSizes(buffer, baseName, outputDir) {
    const sizes = [
      { suffix: '-sm', width: 640 },
      { suffix: '-md', width: 1024 },
      { suffix: '-lg', width: 1920 },
      { suffix: '-xl', width: 2560 }
    ];

    const responsive = [];

    for (const size of sizes) {
      const fileName = `${baseName}${size.suffix}.webp`;
      const filePath = path.join(outputDir, fileName);

      await sharp(buffer)
        .resize(size.width, null, { withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(filePath);

      const sizeKB = await fileSystem.getFileSizeKB(filePath);

      responsive.push({
        path: filePath,
        name: fileName,
        width: size.width,
        sizeKB
      });
    }

    return responsive;
  }

  /**
   * Get optimization statistics
   */
  getStats() {
    const totalImages = this.optimizedImages.length;
    const totalSizeKB = this.optimizedImages.reduce((sum, img) => {
      return sum + parseFloat(img.optimizedImages?.[0]?.sizeKB || 0);
    }, 0);

    return {
      totalImages,
      totalSizeKB: totalSizeKB.toFixed(2),
      averageSizeKB: (totalSizeKB / totalImages).toFixed(2),
      formats: ['webp', 'jpg']
    };
  }
}

export default ImageOptimizer;


