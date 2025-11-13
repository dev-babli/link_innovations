/**
 * EXTRA BONUS IMAGE GENERATOR
 * Generates 20 additional high-quality images
 * For homepage, marketing, social media, and additional needs
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(await fs.readFile(configPath, 'utf-8'));

const FREEPIK_KEY = config.apis.imageGeneration.apiKey;
const GEMINI_KEY = config.apis.gemini.apiKey;

const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
  model: config.apis.gemini.model,
  generationConfig: { temperature: 0.9, maxOutputTokens: 4096 }
});

// 20 Extra image themes
const EXTRA_THEMES = [
  { id: 'digital-transformation', name: 'Digital Transformation Journey', context: 'Business transformation through technology, from traditional to digital, growth visualization' },
  { id: 'remote-team-workspace', name: 'Remote Team Workspace', context: 'Distributed team collaboration, video calls, remote work technology, global connectivity' },
  { id: 'machine-learning-ai', name: 'Machine Learning & AI', context: 'Neural networks, deep learning visualization, AI model training, predictive analytics' },
  { id: 'blockchain-technology', name: 'Blockchain Technology', context: 'Distributed ledger, cryptocurrency, smart contracts, decentralized systems' },
  { id: 'quantum-computing', name: 'Quantum Computing', context: 'Quantum processors, advanced computing, futuristic technology, quantum bits' },
  { id: 'augmented-reality', name: 'Augmented Reality Interface', context: 'AR glasses, holographic UI, mixed reality applications, spatial computing' },
  { id: 'edge-computing', name: 'Edge Computing Network', context: 'Distributed edge nodes, low-latency processing, IoT edge devices, 5G connectivity' },
  { id: 'devops-pipeline', name: 'DevOps CI/CD Pipeline', context: 'Continuous integration, automated deployment, git workflow, testing automation' },
  { id: 'microservices', name: 'Microservices Architecture', context: 'Container orchestration, Kubernetes, Docker, distributed services' },
  { id: 'big-data-processing', name: 'Big Data Processing', context: 'Data lakes, ETL pipelines, real-time analytics, distributed computing' },
  { id: 'serverless-architecture', name: 'Serverless Architecture', context: 'Cloud functions, event-driven, auto-scaling, pay-per-use infrastructure' },
  { id: 'progressive-web-app', name: 'Progressive Web Apps', context: 'Mobile-first design, offline functionality, app-like experience, responsive UI' },
  { id: 'design-thinking', name: 'Design Thinking Workshop', context: 'Brainstorming session, sticky notes, user journey mapping, prototype sketching' },
  { id: 'agile-methodology', name: 'Agile Development Sprint', context: 'Scrum board, sprint planning, kanban workflow, team standup meeting' },
  { id: 'tech-infrastructure', name: 'Data Center Infrastructure', context: 'Server racks, fiber optic cables, cooling systems, modern data center' },
  { id: 'cloud-migration', name: 'Cloud Migration Process', context: 'Legacy system modernization, hybrid cloud, migration dashboard, architecture diagram' },
  { id: 'digital-security', name: 'Digital Security Operations', context: 'Security monitoring, threat detection, incident response, SOC center' },
  { id: 'business-intelligence', name: 'Business Intelligence Dashboard', context: 'Executive dashboard, real-time KPIs, data visualization, predictive insights' },
  { id: 'customer-experience', name: 'Customer Experience Platform', context: 'User journey, customer touchpoints, CX analytics, satisfaction metrics' },
  { id: 'innovation-process', name: 'Innovation Process Flow', context: 'Idea generation, prototype development, testing phase, product launch' }
];

console.log('\n🎨 EXTRA BONUS IMAGE GENERATOR\n');
console.log('═'.repeat(70));
console.log(`✨ Generating 20 additional premium images`);
console.log(`🎯 Ultra-detailed prompts with Gemini 2.5 Flash`);
console.log(`🖼️ Professional generation with Freepik Flux Dev`);
console.log(`💡 For homepage, marketing, social media, and more\n`);

async function generatePrompt(theme) {
  const systemPrompt = `You are a professional AI image prompt engineer for Link Innovations.

BRAND COLORS (use hex codes):
#3B82F6 (Primary Blue), #8B5CF6 (Purple), #06B6D4 (Cyan), #FF7A59 (Coral), #E8FF7A (Yellow)

Create ONE ultra-detailed, photorealistic prompt with:
✓ Specific camera setup (lens, angle, focal length)
✓ 2-3 brand colors naturally integrated with hex codes
✓ Professional lighting (cinematic, HDR, volumetric)
✓ Atmospheric effects (fog, particles, bokeh)
✓ Material details (glass, metal, reflections)
✓ Composition (rule of thirds, depth layers)
✓ 8K quality, photorealistic rendering`;

  const userPrompt = `Create ultra-detailed image prompt for:

THEME: ${theme.name}
CONTEXT: ${theme.context}
STYLE: Professional B2B technology imagery

Generate 150+ word detailed prompt with specific:
- Camera angle & lens (24mm/50mm/85mm)
- Subject placement & composition
- Lighting with brand color glows
- Atmospheric effects & materials
- Professional photography terms

Just output the prompt (no labels or formatting):`;

  try {
    const result = await model.generateContent(systemPrompt + '\n\n' + userPrompt);
    return result.response.text().trim();
  } catch (error) {
    return `Professional ${theme.context}, #3B82F6 blue and #8B5CF6 purple tech elements, cinematic lighting, 8K quality`;
  }
}

async function generateImage(prompt, theme, index) {
  try {
    console.log(`\n[${index + 1}/20] 📸 ${theme.name}`);
    console.log(`   Prompt: ${prompt.substring(0, 80)}...`);
    
    const createResponse = await axios.post(
      'https://api.freepik.com/v1/ai/text-to-image/flux-dev',
      {
        prompt: prompt,
        num_images: 1,
        image: { size: '1024x576' }
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
    if (!taskId) throw new Error('No task ID');

    console.log(`   ⏳ Generating...`);

    // Poll for completion
    for (let i = 0; i < 60; i++) {
      await new Promise(r => setTimeout(r, 3000));
      
      const statusResponse = await axios.get(
        `https://api.freepik.com/v1/ai/text-to-image/flux-dev/${taskId}`,
        { headers: { 'x-freepik-api-key': FREEPIK_KEY } }
      );

      const status = statusResponse.data?.data?.status;
      const generated = statusResponse.data?.data?.generated;
      
      if (status === 'COMPLETED' && generated?.length > 0) {
        const imageUrl = generated[0];
        
        // Download
        const imgResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(imgResponse.data);
        
        // Save optimized WebP
        const outputDir = path.join(__dirname, '../public/images/extras');
        await fs.mkdir(outputDir, { recursive: true });
        
        const filename = `li-${theme.id}.webp`;
        const filepath = path.join(outputDir, filename);
        
        await sharp(imageBuffer)
          .webp({ quality: 90 })
          .toFile(filepath);
        
        const stats = await fs.stat(filepath);
        console.log(`   ✅ Saved: ${filename} (${(stats.size / 1024).toFixed(2)} KB)`);
        
        return { success: true, filename, size: stats.size };
      }
      
      if (status === 'FAILED' || status === 'ERROR') {
        throw new Error('Generation failed');
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
  const startTime = Date.now();

  for (let i = 0; i < EXTRA_THEMES.length; i++) {
    const theme = EXTRA_THEMES[i];
    
    console.log(`\n🎨 Creating prompt with Gemini...`);
    const prompt = await generatePrompt(theme);
    
    const result = await generateImage(prompt, theme, i);
    results.push({ theme: theme.name, ...result });
    
    if (result.success) successCount++;
    
    // Delay to avoid rate limits
    if (i < EXTRA_THEMES.length - 1) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  // Summary
  console.log('\n' + '═'.repeat(70));
  console.log('\n✨ EXTRA GENERATION COMPLETE!\n');
  console.log(`📊 Statistics:`);
  console.log(`   ✅ Successful: ${successCount}/20`);
  console.log(`   ❌ Failed: ${20 - successCount}/20`);
  console.log(`   ⏱️ Total Time: ${duration}s`);
  console.log(`   📁 Location: public/images/extras/\n`);
  
  console.log('📸 Generated Images:');
  results.forEach((r, i) => {
    if (r.success) {
      console.log(`   ${i + 1}. ✅ ${r.theme} (${(r.size / 1024).toFixed(2)} KB)`);
    } else {
      console.log(`   ${i + 1}. ❌ ${r.theme}`);
    }
  });
  
  console.log('\n💡 Total images now: 29 + 20 = 49 images!');
  console.log('\n🎉 Check public/images/extras/ for all new images!\n');
}

main().catch(console.error);


