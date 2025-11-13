import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

/**
 * File System Utility
 * Handles all file operations for the automation system
 */

class FileSystem {
  /**
   * Read file contents
   */
  async readFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      return content;
    } catch (error) {
      throw new Error(`Failed to read file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Write file contents
   */
  async writeFile(filePath, content) {
    try {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, content, 'utf-8');
      return true;
    } catch (error) {
      throw new Error(`Failed to write file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Write binary file (for images)
   */
  async writeBinaryFile(filePath, buffer) {
    try {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, buffer);
      return true;
    } catch (error) {
      throw new Error(`Failed to write binary file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Check if file exists
   */
  async exists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Find files matching pattern
   */
  async findFiles(pattern, options = {}) {
    try {
      const files = await glob(pattern, {
        ignore: ['node_modules/**', '.next/**', '.git/**'],
        ...options
      });
      return files;
    } catch (error) {
      throw new Error(`Failed to find files with pattern ${pattern}: ${error.message}`);
    }
  }

  /**
   * Read JSON file
   */
  async readJSON(filePath) {
    const content = await this.readFile(filePath);
    return JSON.parse(content);
  }

  /**
   * Write JSON file
   */
  async writeJSON(filePath, data) {
    const content = JSON.stringify(data, null, 2);
    return this.writeFile(filePath, content);
  }

  /**
   * Get file stats
   */
  async getStats(filePath) {
    try {
      return await fs.stat(filePath);
    } catch (error) {
      throw new Error(`Failed to get stats for ${filePath}: ${error.message}`);
    }
  }

  /**
   * Get file size in KB
   */
  async getFileSizeKB(filePath) {
    const stats = await this.getStats(filePath);
    return (stats.size / 1024).toFixed(2);
  }

  /**
   * Ensure directory exists
   */
  async ensureDir(dirPath) {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

export default new FileSystem();


