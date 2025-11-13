/**
 * BATCH GENERATE REMAINING SERVICES
 * Generates images for all remaining service pages
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REMAINING_SERVICES = [
  'cybersecurity',
  'data-analytics',
  'mobile-app-development',
  'mobile-apps',
  'web-app-development'
];

console.log('\n🚀 BATCH SERVICE IMAGE GENERATION\n');
console.log('═'.repeat(60));
console.log(`📦 Generating images for ${REMAINING_SERVICES.length} services`);
console.log(`⏱️ ETA: ~${REMAINING_SERVICES.length * 50} seconds\n`);

async function generateService(serviceName, index) {
  return new Promise((resolve, reject) => {
    console.log(`\n[${index + 1}/${REMAINING_SERVICES.length}] Generating: ${serviceName}`);
    console.log('─'.repeat(60));
    
    const child = spawn('node', ['index.js', '--scope', `services/${serviceName}`], {
      cwd: __dirname,
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${serviceName} complete!\n`);
        resolve();
      } else {
        console.log(`❌ ${serviceName} failed\n`);
        reject(new Error(`Service ${serviceName} generation failed with code ${code}`));
      }
    });
  });
}

async function main() {
  const startTime = Date.now();
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < REMAINING_SERVICES.length; i++) {
    try {
      await generateService(REMAINING_SERVICES[i], i);
      successCount++;
    } catch (error) {
      failCount++;
      console.error(`Error: ${error.message}`);
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n' + '═'.repeat(60));
  console.log('\n✨ BATCH GENERATION COMPLETE!\n');
  console.log(`📊 Statistics:`);
  console.log(`   ✅ Successful: ${successCount}/${REMAINING_SERVICES.length}`);
  console.log(`   ❌ Failed: ${failCount}/${REMAINING_SERVICES.length}`);
  console.log(`   ⏱️ Total Time: ${duration}s`);
  console.log(`   📸 Images Generated: ${successCount * 2}`);
  console.log(`   📁 Location: public/images/services/\n`);
  
  console.log('🎉 All service images complete!');
  console.log('📋 Check: public/images/services/ for all images\n');
}

main().catch(console.error);


