/**
 * BONUS IMAGE GENERATOR
 * Generates 10 additional high-quality images with varied themes
 * For marketing, social media, and extra content needs
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenAI } from '@google/genai';
import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load config
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));

const FREEPIK_KEY = config.apis.imageGeneration.apiKey;
const GEMINI_KEY = config.apis.gemini.apiKey;

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
  model: config.apis.gemini.model,
  generationConfig: {
    temperature: 0.9,
    maxOutputTokens: 4096
  }
});

// 10 Bonus image themes
const BONUS_THEMES = [
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    location: 'public/images/general/li-team-collaboration.webp',
    context: 'Diverse tech team collaborating on innovative project, brainstorming session, modern office'
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics Dashboard',
    location: 'public/images/general/li-data-analytics-dashboard.webp',
    context: 'Advanced data analytics dashboard with real-time metrics, AI-powered insights, business intelligence'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Protection',
    location: 'public/images/general/li-cybersecurity-protection.webp',
    context: 'Digital security shield, encrypted data streams, firewall protection, secure cloud infrastructure'
  },
  {
    id: 'innovation-lab',
    name: 'Innovation Lab',
    location: 'public/images/general/li-innovation-lab.webp',
    context: 'Futuristic innovation laboratory, prototyping station, cutting-edge technology development'
  },
  {
    id: 'client-success',
    name: 'Client Success Meeting',
    location: 'public/images/general/li-client-success-meeting.webp',
    context: 'Professional client presentation, video conference, successful project delivery celebration'
  },
  {
    id: 'code-development',
    name: 'Software Development',
    location: 'public/images/general/li-code-development.webp',
    context: 'Close-up of developer coding, IDE interface, multiple code windows, debugging session'
  },
  {
    id: 'network-infrastructure',
    name: 'Network Infrastructure',
    location: 'public/images/general/li-network-infrastructure.webp',
    context: 'Abstract network topology, interconnected nodes, data flow visualization, distributed systems'
  },
  {
    id: 'iot-devices',
    name: 'IoT & Smart Devices',
    location: 'public/images/general/li-iot-smart-devices.webp',
    context: 'Internet of Things ecosystem, smart devices connected, sensor network, industrial IoT'
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    location: 'public/images/general/li-api-integration.webp',
    context: 'API architecture diagram, microservices, REST endpoints, system integration visualization'
  },
  {
    id: 'success-metrics',
    name: 'Success Metrics & KPIs',
    location: 'public/images/general/li-success-metrics-kpis.webp',
    context: 'Business dashboard showing growth metrics, KPI visualization, success indicators, ROI charts'
  }
];

console.log('\n🎨 BONUS IMAGE GENERATOR\n');
console.log('═'.repeat(70));
console.log(`✨ Generating 10 additional premium images`);
console.log(`🎯 Enhanced prompts with Gemini 2.5 Flash`);
console.log(`🖼️ Professional generation with Freepik Flux Dev\n`);

async function generatePrompt(theme) {
  const systemPrompt = `You are an expert AI image prompt engineer for Link Innovations.

BRAND COLORS (mandatory hex codes):
- Primary Blue: #3B82F6
- Primary Purple: #8B5CF6  
- Primary Cyan: #06B6D4
- Accent Coral: #FF7A59
- Accent Yellow: #E8FF7A

Create ONE highly detailed, photorealistic image prompt with:
✓ Specific camera angle and focal length
✓ 2-3 brand colors with hex codes integrated naturally
✓ Cinematic lighting (rim lighting, volumetric effects, HDR)
✓ Professional photography terms (bokeh, depth of field, 8K quality)
✓ Atmospheric elements (fog, particles, light rays)
✓ Material details (glass, metal, matte finishes, reflections)
✓ Composition guidance (rule of thirds, leading lines)
✓ Ultra-specific subject description (no generic terms)

Make it PHOTOREALISTIC and PROFESSIONAL.`;

  const userPrompt = `Generate a detailed image prompt for:

THEME: ${theme.name}
CONTEXT: ${theme.context}
PURPOSE: Premium B2B technology marketing imagery
USAGE: ${theme.location}

Create a SINGLE highly detailed prompt (150+ words) that describes:
1. Exact camera angle and perspective
2. Specific subjects and their arrangement
3. Lighting setup with brand colors
4. Atmospheric effects
5. Material and surface details
6. Composition and framing

OUTPUT FORMAT (just the prompt, no labels):
[Your ultra-detailed photorealistic prompt here]`;

  try {
    const result = await model.generateContent(systemPrompt + '\n\n' + userPrompt);
    const response = result.response.text();
    return response.trim();
  } catch (error) {
    console.log(`   ⚠️ Gemini failed for ${theme.name}, using fallback`);
    return `Professional ${theme.context}, featuring #3B82F6 blue and #8B5CF6 purple tech elements, modern corporate environment, cinematic lighting, 8K quality, photorealistic, professional photography`;
  }
}

async function generateImage(prompt, theme) {
  try {
    console.log(`\n📸 [${theme.id}] ${theme.name}`);
    console.log(`   Prompt: ${prompt.substring(0, 100)}...`);
    
    // Create Freepik task
    const createResponse = await axios.post(
      'https://api.freepik.com/v1/ai/text-to-image/flux-dev',
      {
        prompt: prompt,
        num_images: 1,
        image: { size: '1024x576' } // 16:9
      },
      {
        headers: {
          'x-freepik-api-key': FREEPIK_KEY,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    const taskId = createResponse.data?.data?.task_id;
    
    if (!taskId) {
      throw new Error('No task ID returned');
    }

    console.log(`   ⏳ Task: ${taskId}`);

    // Poll for completion
    for (let i = 0; i < 60; i++) {
      await new Promise(r => setTimeout(r, 3000));
      
      const statusResponse = await axios.get(
        `https://api.freepik.com/v1/ai/text-to-image/flux-dev/${taskId}`,
        {
          headers: { 'x-freepik-api-key': FREEPIK_KEY }
        }
      );

      const status = statusResponse.data?.data?.status;
      const generated = statusResponse.data?.data?.generated;
      
      if (status === 'COMPLETED' && generated && generated.length > 0) {
        const imageUrl = generated[0];
        console.log(`   ✅ Generated!`);
        
        // Download image
        const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imgResponse.data);
        
        // Optimize and save
        const outputDir = path.join(__dirname, '../public/images/general');
        await fs.mkdir(outputDir, { recursive: true });
        
        const filename = `li-${theme.id}.webp`;
        const filepath = path.join(outputDir, filename);
        
        // Convert to WebP
        await sharp(imageBuffer)
          .webp({ quality: 90 })
          .toFile(filepath);
        
        const stats = await fs.stat(filepath);
        console.log(`   💾 Saved: ${filename} (${(stats.size / 1024).toFixed(2)} KB)`);
        
        return { success: true, filename, size: stats.size };
      }
      
      if (status === 'FAILED' || status === 'ERROR') {
        throw new Error('Task failed');
      }
    }
    
    throw new Error('Timeout');
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  const results = [];
  let successCount = 0;

  for (let i = 0; i < BONUS_THEMES.length; i++) {
    const theme = BONUS_THEMES[i];
    
    console.log(`\n[${ i + 1}/10] Generating: ${theme.name}`);
    console.log('   🎨 Creating AI prompt with Gemini...');
    
    const prompt = await generatePrompt(theme);
    
    console.log('   ⚡ Generating image with Freepik...');
    const result = await generateImage(prompt, theme);
    
    results.push({
      theme: theme.name,
      location: theme.location,
      ...result
    });
    
    if (result.success) {
      successCount++;
    }
    
    // Small delay between images to avoid rate limits
    if (i < BONUS_THEMES.length - 1) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  // Summary
  console.log('\n' + '═'.repeat(70));
  console.log('\n✨ BONUS GENERATION COMPLETE!\n');
  console.log(`📊 Statistics:`);
  console.log(`   ✅ Successful: ${successCount}/10`);
  console.log(`   ❌ Failed: ${10 - successCount}/10`);
  console.log(`   📁 Location: public/images/general/`);
  
  console.log('\n📸 Generated Images:');
  results.forEach((r, i) => {
    if (r.success) {
      const sizeKB = (r.size / 1024).toFixed(2);
      console.log(`   ${i + 1}. ✅ ${r.theme} (${sizeKB} KB)`);
    } else {
      console.log(`   ${i + 1}. ❌ ${r.theme} - ${r.error}`);
    }
  });
  
  console.log('\n💡 Usage Locations:');
  BONUS_THEMES.forEach(t => {
    console.log(`   • ${t.location}`);
  });
  
  console.log('\n🎉 Done! Check public/images/general/ for all bonus images.\n');
}

main().catch(console.error);


