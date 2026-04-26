import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Base '/' porque el dominio personalizado trasladosmalvinas.com.ar sirve desde la raíz
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
