import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Usa '/' para Vercel, '/traslados/' para GitHub Pages
  base: process.env.VERCEL ? '/' : '/traslados/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
