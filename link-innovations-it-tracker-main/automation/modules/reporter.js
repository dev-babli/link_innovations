import path from 'path';
import fileSystem from '../utils/fileSystem.js';
import logger from '../utils/logger.js';

/**
 * Report Generator Module
 * Creates comprehensive markdown reports
 */

class ReportGenerator {
  constructor(config) {
    this.config = config;
  }

  /**
   * Generate complete report
   */
  async generateReport(analysisResults, promptResults, imageResults, optimizedResults) {
    logger.startSpinner('Creating report...');

    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
      const reportPath = path.resolve(
        process.cwd(),
        this.config.output.reportDir,
        `generation-report-${timestamp}.md`
      );

      const report = this.buildReport(
        analysisResults,
        promptResults,
        imageResults,
        optimizedResults
      );

      await fileSystem.writeFile(reportPath, report);

      logger.succeedSpinner(`Report saved: ${path.basename(reportPath)}`);
      logger.info(`Full path: ${reportPath}`);

      return reportPath;
    } catch (error) {
      logger.failSpinner('Report generation failed');
      throw error;
    }
  }

  /**
   * Build markdown report
   */
  buildReport(analysis, prompts, images, optimized) {
    const successful = optimized.filter(img => img.status === 'success');
    const failed = optimized.filter(img => img.status === 'failed');
    const timestamp = new Date().toLocaleString();

    return `# 📊 Image Generation Report

**Generated:** ${timestamp}  
**System:** Link Innovations Automated Image Generation  
**Status:** ${failed.length === 0 ? '✅ Complete' : '⚠️ Partial Success'}

---

## 📈 Summary Statistics

| Metric | Count |
|--------|-------|
| **Total Pages Analyzed** | ${analysis.pages.length} |
| **Images Generated** | ${successful.length} |
| **Failed Generations** | ${failed.length} |
| **Total File Size** | ${this.calculateTotalSize(successful)} MB |
| **Average Quality** | ${this.calculateAverageQuality(images)}/100 |

---

## 🎯 Generated Images by Type

${this.buildImagesByType(successful)}

---

## 📁 Generated Files

${this.buildFilesList(successful)}

---

## 💻 Implementation Guide

### How to Use These Images

${this.buildImplementationGuide(successful)}

---

## ✅ Quality Metrics

${this.buildQualityMetrics(successful)}

---

## 🚨 Issues & Warnings

${failed.length > 0 ? this.buildFailuresList(failed) : '✓ No issues detected - all images generated successfully!'}

---

## 🔄 Next Steps

### Immediate Actions:
1. Review generated images in \`/public/images/\`
2. Test images in components (see implementation guide above)
3. Verify mobile responsiveness
4. Check text overlay contrast

### Optional Improvements:
- [ ] Generate alternate variations for A/B testing
- [ ] Create mobile-specific versions (9:16 aspect ratio)
- [ ] Add responsive image sizes
- [ ] Get stakeholder approval

---

## 📊 Detailed Results

${this.buildDetailedResults(successful)}

---

## 🎨 Prompts Used

${this.buildPromptsSection(prompts, successful)}

---

**Report End**  
**For questions, see automation/README.md**
`;
  }

  /**
   * Build images by type section
   */
  buildImagesByType(images) {
    const byType = images.reduce((acc, img) => {
      const type = img.imageType || 'other';
      if (!acc[type]) acc[type] = [];
      acc[type].push(img);
      return acc;
    }, {});

    let output = '';
    for (const [type, imgs] of Object.entries(byType)) {
      output += `### ${this.capitalize(type)} Images (${imgs.length})\n\n`;
      imgs.forEach(img => {
        const files = img.optimizedImages || [];
        const webp = files.find(f => f.format === 'webp');
        output += `- **${img.pageName}**: \`${webp?.name || 'N/A'}\` (${webp?.sizeKB || 'N/A'}KB)\n`;
      });
      output += '\n';
    }

    return output;
  }

  /**
   * Build files list
   */
  buildFilesList(images) {
    let output = '```\npublic/images/\n';

    const byDirectory = images.reduce((acc, img) => {
      const dir = img.optimizedImages?.[0]?.path || '';
      const dirName = path.dirname(dir).split(path.sep).pop() || 'other';
      if (!acc[dirName]) acc[dirName] = [];
      acc[dirName].push(img);
      return acc;
    }, {});

    for (const [dir, imgs] of Object.entries(byDirectory)) {
      output += `├── ${dir}/\n`;
      imgs.forEach(img => {
        const files = img.optimizedImages || [];
        files.forEach(file => {
          output += `│   ├── ${file.name} (${file.sizeKB}KB)\n`;
        });
      });
    }

    output += '```\n';
    return output;
  }

  /**
   * Build implementation guide
   */
  buildImplementationGuide(images) {
    let output = '';

    // Group by page
    const byPage = images.reduce((acc, img) => {
      const page = img.pageName || 'unknown';
      if (!acc[page]) acc[page] = [];
      acc[page].push(img);
      return acc;
    }, {});

    for (const [page, imgs] of Object.entries(byPage)) {
      output += `#### ${this.capitalize(page)} Page\n\n`;
      output += `**File:** \`${imgs[0]?.page || 'N/A'}\`\n\n`;

      imgs.forEach(img => {
        const webpFile = img.optimizedImages?.find(f => f.format === 'webp');
        if (webpFile) {
          const relativePath = path.relative(
            path.join(this.config.project.root, 'public'),
            webpFile.path
          ).replace(/\\/g, '/');

          output += `**${this.capitalize(img.imageType)} Image:**\n\`\`\`tsx\n`;
          output += `<img\n`;
          output += `  src="/${relativePath}"\n`;
          output += `  alt="${this.generateAltText(img)}"\n`;
          output += `  className="w-full h-auto object-cover"\n`;
          output += `  loading="lazy"\n`;
          output += `/>\n\`\`\`\n\n`;
        }
      });
    }

    return output;
  }

  /**
   * Build quality metrics section
   */
  buildQualityMetrics(images) {
    const metrics = {
      totalWebP: 0,
      totalJPG: 0,
      avgWebPSize: 0,
      avgJPGSize: 0,
      underTarget: 0,
      overTarget: 0
    };

    images.forEach(img => {
      const files = img.optimizedImages || [];
      const webp = files.find(f => f.format === 'webp');
      const jpg = files.find(f => f.format === 'jpg');

      if (webp) {
        metrics.totalWebP++;
        metrics.avgWebPSize += parseFloat(webp.sizeKB);
        
        const maxSize = this.config.output.maxFileSizes[img.imageType] || 500;
        if (parseFloat(webp.sizeKB) <= maxSize) {
          metrics.underTarget++;
        } else {
          metrics.overTarget++;
        }
      }

      if (jpg) {
        metrics.totalJPG++;
        metrics.avgJPGSize += parseFloat(jpg.sizeKB);
      }
    });

    if (metrics.totalWebP > 0) {
      metrics.avgWebPSize = (metrics.avgWebPSize / metrics.totalWebP).toFixed(2);
    }
    if (metrics.totalJPG > 0) {
      metrics.avgJPGSize = (metrics.avgJPGSize / metrics.totalJPG).toFixed(2);
    }

    return `
| Metric | Value |
|--------|-------|
| **WebP Images** | ${metrics.totalWebP} |
| **JPG Images** | ${metrics.totalJPG} |
| **Avg WebP Size** | ${metrics.avgWebPSize}KB |
| **Avg JPG Size** | ${metrics.avgJPGSize}KB |
| **Under Target** | ${metrics.underTarget} ✓ |
| **Over Target** | ${metrics.overTarget} ${metrics.overTarget > 0 ? '⚠️' : ''} |
`;
  }

  /**
   * Build failures list
   */
  buildFailuresList(failed) {
    let output = '### Failed Generations:\n\n';
    failed.forEach(img => {
      output += `- **${img.pageName}** (${img.imageType}): ${img.error || 'Unknown error'}\n`;
    });
    return output;
  }

  /**
   * Build detailed results
   */
  buildDetailedResults(images) {
    let output = '';

    images.forEach((img, index) => {
      output += `### ${index + 1}. ${this.capitalize(img.pageName)} - ${this.capitalize(img.imageType)}\n\n`;
      output += `- **Page:** \`${img.page}\`\n`;
      output += `- **Type:** ${img.pageType}\n`;
      output += `- **Theme:** ${img.metadata?.theme || 'default'}\n`;
      output += `- **Dimensions:** ${img.metadata?.dimensions || 'N/A'}\n`;
      
      const files = img.optimizedImages || [];
      output += `- **Files:**\n`;
      files.forEach(file => {
        output += `  - ${file.name} (${file.sizeKB}KB)\n`;
      });
      
      output += '\n';
    });

    return output;
  }

  /**
   * Build prompts section
   */
  buildPromptsSection(prompts, successful) {
    let output = '';

    successful.forEach((img, index) => {
      const promptData = prompts.find(p => 
        p.pageName === img.pageName && p.imageType === img.imageType
      );

      if (promptData) {
        output += `### ${index + 1}. ${this.capitalize(img.pageName)} - ${this.capitalize(img.imageType)}\n\n`;
        output += `**Prompt:**\n\`\`\`\n${promptData.prompt.primary || promptData.prompt}\n\`\`\`\n\n`;
      }
    });

    return output;
  }

  /**
   * Calculate total size
   */
  calculateTotalSize(images) {
    const totalKB = images.reduce((sum, img) => {
      const files = img.optimizedImages || [];
      return sum + files.reduce((s, f) => s + parseFloat(f.sizeKB), 0);
    }, 0);

    return (totalKB / 1024).toFixed(2);
  }

  /**
   * Calculate average quality
   */
  calculateAverageQuality(images) {
    if (images.length === 0) return 0;
    const total = images.reduce((sum, img) => sum + (img.quality || 90), 0);
    return (total / images.length).toFixed(0);
  }

  /**
   * Generate alt text
   */
  generateAltText(imageData) {
    const { pageName, imageType, pageType } = imageData;
    return `${this.capitalize(imageType)} image for ${pageName} ${pageType} page showing modern technology and professional design`;
  }

  /**
   * Capitalize string
   */
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
  }
}

export default ReportGenerator;


