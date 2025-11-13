#!/usr/bin/env node

/**
 * Interactive Setup Script
 * Helps configure the automation system with Gemini + Image Generation
 */

import fs from 'fs/promises';
import path from 'path';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function setup() {
  console.log('\n🚀 Link Innovations - Image Automation Setup\n');
  console.log('This will help you configure the automation system.\n');

  try {
    // Check if config already exists
    const configPath = path.join(process.cwd(), 'config.json');
    const configExists = await fs.access(configPath).then(() => true).catch(() => false);

    if (configExists) {
      const overwrite = await question('config.json already exists. Overwrite? (y/N): ');
      if (overwrite.toLowerCase() !== 'y') {
        console.log('\n✓ Keeping existing config.json');
        console.log('Edit it manually or delete it and run setup again.\n');
        rl.close();
        return;
      }
    }

    // Get API keys
    console.log('\n📝 API Configuration\n');
    
    console.log('1. Gemini API Key (for prompt generation):');
    const geminiKey = await question('   Get FREE at https://makersuite.google.com/app/apikey\n   Enter key: ');
    
    console.log('\n2. Image Generation Provider:\n');
    console.log('   Option A: Replicate (easiest, free tier, recommended)');
    console.log('   Option B: Google Imagen (requires Vertex AI setup)\n');
    
    const provider = await question('   Choose provider (A for Replicate, B for Imagen): ');
    
    let imageProvider = 'replicate';
    let replicateKey = '';
    
    if (provider.toLowerCase() === 'b') {
      imageProvider = 'gemini-imagen';
      console.log('\n   Using Google Imagen (requires Vertex AI enabled)');
      console.log('   Make sure to set GOOGLE_CLOUD_PROJECT environment variable\n');
    } else {
      console.log('\n   Get Replicate API key:');
      replicateKey = await question('   Visit https://replicate.com → Account → API Tokens\n   Enter token: ');
    }

    // Load example config
    const examplePath = path.join(process.cwd(), 'config.example.json');
    const exampleContent = await fs.readFile(examplePath, 'utf-8');
    const config = JSON.parse(exampleContent);

    // Update with user values
    config.apis.gemini.apiKey = geminiKey.trim() || 'YOUR_GEMINI_API_KEY_HERE';
    config.apis.imageGeneration.provider = imageProvider;
    
    if (imageProvider === 'replicate') {
      config.apis.imageGeneration.replicateKey = replicateKey.trim() || 'YOUR_REPLICATE_KEY_HERE';
    }

    // Save config
    await fs.writeFile(configPath, JSON.stringify(config, null, 2), 'utf-8');

    console.log('\n✅ Configuration saved to config.json\n');
    
    // Validation
    if (geminiKey.trim() && !geminiKey.includes('YOUR_')) {
      console.log('✓ Gemini API key looks valid');
    } else {
      console.log('⚠️  Gemini API key appears to be placeholder - update it in config.json');
    }

    if (imageProvider === 'replicate') {
      if (replicateKey.trim() && replicateKey.startsWith('r8_')) {
        console.log('✓ Replicate API token looks valid');
      } else {
        console.log('⚠️  Replicate token appears invalid - should start with r8_');
      }
    }

    console.log('\n🎉 Setup complete!\n');
    console.log('Your configuration:');
    console.log(`  - Prompt generation: Gemini 1.5 Flash`);
    console.log(`  - Image generation: ${imageProvider === 'replicate' ? 'Replicate (Flux Schnell)' : 'Google Imagen 3'}`);
    console.log(`  - Total API keys: ${imageProvider === 'replicate' ? '2 (Gemini + Replicate)' : '1 (Gemini only)'}`);
    console.log('\nNext steps:');
    console.log('  1. Test the system: npm run generate-images -- --dry-run');
    console.log('  2. Test connection: npm run generate-images -- --test-connection');
    console.log('  3. Generate images: npm run generate-images\n');
    console.log('For help, see: README.md or GEMINI_IMAGE_GENERATION_GUIDE.md\n');

  } catch (error) {
    console.error('\n❌ Setup failed:', error.message);
    console.log('\nManual setup:');
    console.log('  1. Copy config.example.json to config.json');
    console.log('  2. Edit config.json with your API keys');
    console.log('  3. See GEMINI_IMAGE_GENERATION_GUIDE.md for detailed instructions\n');
  }

  rl.close();
}

setup();
