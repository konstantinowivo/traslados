import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images';
const QUALITY = 82;
const MAX_WIDTH = 1200;

const SKIP = ['logo_traslados.png', 'traslados_malvinas.png']; // logos mantienen PNG

const files = await readdir(INPUT_DIR);
const images = files.filter(f => ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase()) && !SKIP.includes(f));

for (const file of images) {
  const input = join(INPUT_DIR, file);
  const output = join(OUTPUT_DIR, basename(file, extname(file)) + '.webp');

  const info = await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(output);

  const original = (await import('fs')).statSync(input).size;
  const saved = ((1 - info.size / original) * 100).toFixed(0);
  console.log(`✓ ${file} → ${basename(output)}  ${(original/1024/1024).toFixed(1)}MB → ${(info.size/1024).toFixed(0)}KB  (-${saved}%)`);
}
