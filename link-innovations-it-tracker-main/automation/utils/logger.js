import chalk from 'chalk';
import ora from 'ora';

/**
 * Logger Utility for Automation System
 * Provides consistent, beautiful console output
 */

class Logger {
  constructor() {
    this.spinner = null;
    this.verbose = process.argv.includes('--verbose');
  }

  // Info message
  info(message) {
    console.log(chalk.blue('ℹ'), message);
  }

  // Success message
  success(message) {
    console.log(chalk.green('✓'), message);
  }

  // Warning message
  warn(message) {
    console.log(chalk.yellow('⚠'), message);
  }

  // Error message
  error(message) {
    console.log(chalk.red('✗'), message);
  }

  // Step message
  step(stepNumber, totalSteps, message) {
    console.log(chalk.cyan(`\n[${stepNumber}/${totalSteps}]`), chalk.bold(message));
  }

  // Verbose logging (only shows if --verbose flag)
  debug(message) {
    if (this.verbose) {
      console.log(chalk.gray('  →'), chalk.gray(message));
    }
  }

  // Start spinner
  startSpinner(message) {
    if (this.spinner) {
      this.spinner.stop();
    }
    this.spinner = ora(message).start();
  }

  // Update spinner
  updateSpinner(message) {
    if (this.spinner) {
      this.spinner.text = message;
    }
  }

  // Stop spinner with success
  succeedSpinner(message) {
    if (this.spinner) {
      this.spinner.succeed(message);
      this.spinner = null;
    }
  }

  // Stop spinner with error
  failSpinner(message) {
    if (this.spinner) {
      this.spinner.fail(message);
      this.spinner = null;
    }
  }

  // Header banner
  header(title) {
    console.log('\n' + chalk.bold.cyan('═'.repeat(60)));
    console.log(chalk.bold.cyan(`  ${title}`));
    console.log(chalk.bold.cyan('═'.repeat(60)) + '\n');
  }

  // Summary section
  summary(title, items) {
    console.log('\n' + chalk.bold.white(title));
    items.forEach(item => {
      console.log(chalk.gray('  •'), item);
    });
  }

  // Statistics table
  stats(data) {
    console.log('\n' + chalk.bold.white('Statistics:'));
    Object.entries(data).forEach(([key, value]) => {
      console.log(chalk.gray('  •'), `${key}:`, chalk.cyan(value));
    });
  }
}

export default new Logger();


