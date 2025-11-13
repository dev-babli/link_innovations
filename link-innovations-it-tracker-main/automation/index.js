#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import fileSystem from './utils/fileSystem.js';
import logger from './utils/logger.js';
import validator from './utils/validator.js';
import Analyzer from './modules/analyzer.js';
import DesignSystemLearner from './modules/learner.js';
import PromptEngineer from './modules/prompter.js';
import ImageGenerator from './modules/generator.js';
import ImageOptimizer from './modules/optimizer.js';
import ReportGenerator from './modules/reporter.js';

/**
 * Main Orchestrator
 * Coordinates all modules to automate image generation
 */

class ImageAutomationSystem {
  constructor() {
    this.config = null;
    this.startTime = Date.now();
  }

  /**
   * Initialize the system
   */
  async initialize() {
    logger.header('Link Innovations - Automated Image Generation System');

    // Load configuration
    await this.loadConfig();

    // Validate configuration
    const configValidation = validator.validateConfig(this.config);
    if (!configValidation.valid) {
      logger.error('Configuration validation failed!');
      logger.error('Missing required fields:');
      configValidation.missing.forEach(field => logger.error(`  - ${field}`));
      logger.info('\nPlease copy config.example.json to config.json and fill in your API keys.');
      process.exit(1);
    }

    logger.success('Configuration loaded and validated');
  }

  /**
   * Load configuration file
   */
  async loadConfig() {
    const configPath = path.join(process.cwd(), 'config.json');
    const examplePath = path.join(process.cwd(), 'config.example.json');

    const configExists = await fileSystem.exists(configPath);

    if (!configExists) {
      logger.warn('config.json not found. Please create it from config.example.json');
      logger.info('Copy config.example.json to config.json and add your API keys.');
      
      // Load example config for structure
      this.config = await fileSystem.readJSON(examplePath);
      return;
    }

    this.config = await fileSystem.readJSON(configPath);
  }

  /**
   * Run the complete automation workflow
   */
  async run(options = {}) {
    try {
      const scope = options.scope || null;
      const analyzeOnly = options.analyzeOnly || false;
      const dryRun = options.dryRun || false;

      // Step 1: Analyze codebase
      logger.step(1, 6, 'Analyzing project structure...');
      const analyzer = new Analyzer(this.config);
      const analysisResults = await analyzer.analyze(scope);

      if (analysisResults.totalImagesNeeded === 0) {
        logger.info('No images needed! All pages already have imagery.');
        return;
      }

      if (analyzeOnly) {
        logger.summary('Analysis Results', [
          `Pages scanned: ${analysisResults.pages.length}`,
          `Images needed: ${analysisResults.totalImagesNeeded}`,
          `By type: ${JSON.stringify(analysisResults.summary.byType)}`
        ]);
        return analysisResults;
      }

      // Step 2: Learn design system
      logger.step(2, 6, 'Learning design system...');
      const learner = new DesignSystemLearner(this.config);
      const designKnowledge = await learner.learn();

      // Step 3: Generate prompts
      logger.step(3, 6, 'Generating prompts with Gemini AI...');
      const prompter = new PromptEngineer(this.config, designKnowledge);
      const promptResults = await prompter.generatePrompts(analysisResults);

      if (dryRun) {
        logger.info('Dry run mode - skipping image generation');
        logger.summary('Generated Prompts', 
          promptResults.slice(0, 3).map(p => `${p.pageName}: ${p.prompt.primary?.substring(0, 60)}...`)
        );
        return { analysisResults, promptResults };
      }

      // Step 4: Generate images
      logger.step(4, 6, 'Generating images via Freepik API...');
      const generator = new ImageGenerator(this.config);
      
      // Optional: Test connection first
      if (options.testConnection) {
        const connected = await generator.testConnection();
        if (!connected) {
          throw new Error('Freepik API connection test failed');
        }
      }

      const imageResults = await generator.generateImages(promptResults);

      if (imageResults.length === 0) {
        logger.error('No images were generated!');
        logger.warn('Check your Freepik API key and quota.');
        return;
      }

      // Step 5: Optimize images
      logger.step(5, 6, 'Optimizing images...');
      const optimizer = new ImageOptimizer(this.config);
      const optimizedResults = await optimizer.optimizeImages(imageResults);

      // Step 6: Generate report
      logger.step(6, 6, 'Creating report...');
      const reporter = new ReportGenerator(this.config);
      const reportPath = await reporter.generateReport(
        analysisResults,
        promptResults,
        imageResults,
        optimizedResults
      );

      // Final summary
      this.printFinalSummary(optimizedResults, reportPath);

      return {
        analysis: analysisResults,
        prompts: promptResults,
        images: imageResults,
        optimized: optimizedResults,
        report: reportPath
      };

    } catch (error) {
      logger.error(`\n❌ Automation failed: ${error.message}`);
      if (options.verbose || process.argv.includes('--verbose')) {
        console.error(error);
      }
      process.exit(1);
    }
  }

  /**
   * Print final summary
   */
  printFinalSummary(results, reportPath) {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(1);
    const successful = results.filter(r => r.status === 'success').length;
    const failed = results.filter(r => r.status === 'failed').length;

    logger.header('Generation Complete!');
    
    logger.stats({
      'Images Generated': successful,
      'Failed': failed,
      'Total Time': `${duration}s`,
      'Report': path.basename(reportPath)
    });

    logger.info('\n📋 Next Steps:');
    logger.info('  1. Review generated images in /public/images/');
    logger.info(`  2. Check the report: ${path.basename(reportPath)}`);
    logger.info('  3. Implement images in components (see report for code)');
    logger.info('  4. Test on mobile and desktop\n');

    logger.success(`\n✨ Complete! Generated ${successful} images in ${duration} seconds.\n`);
  }
}

/**
 * CLI Setup
 */
program
  .name('image-automation')
  .description('Automated image generation for Link Innovations')
  .version('1.0.0');

program
  .option('-s, --scope <path>', 'Scope to specific path (e.g., services/ai-automation)')
  .option('-a, --analyze-only', 'Only analyze, don\'t generate images')
  .option('-d, --dry-run', 'Generate prompts but don\'t create images')
  .option('-t, --test-connection', 'Test API connection before generating')
  .option('-v, --verbose', 'Verbose logging')
  .action(async (options) => {
    const system = new ImageAutomationSystem();
    await system.initialize();
    await system.run(options);
  });

program.parse();

export default ImageAutomationSystem;


