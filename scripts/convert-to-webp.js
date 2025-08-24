import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const inputDir = 'attached_assets';
const outputDir = 'attached_assets/webp';

// Create webp directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files from attached_assets (PNG, JPG, JPEG)
const imageFiles = fs.readdirSync(inputDir).filter(file => {
  const ext = file.toLowerCase();
  return (ext.endsWith('.png') || ext.endsWith('.jpg') || ext.endsWith('.jpeg')) && !file.startsWith('.');
});

console.log(`Found ${imageFiles.length} image files to convert...`);

imageFiles.forEach((file, index) => {
  const inputPath = path.join(inputDir, file);
  const outputFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFile);
  
  try {
    // Convert to WebP with quality 85 (good balance of size/quality)
    execSync(`magick "${inputPath}" -quality 85 "${outputPath}"`, { stdio: 'inherit' });
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
    
    console.log(`${index + 1}/${imageFiles.length}: ${file} -> ${outputFile} (${savings}% smaller)`);
  } catch (error) {
    console.error(`Error converting ${file}:`, error.message);
  }
});

console.log('WebP conversion complete!');