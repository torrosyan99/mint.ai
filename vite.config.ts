import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@icons':path.resolve(__dirname, 'src/shared/assets/icons'),
    },
  },
  css: {
    modules: {
      generateScopedName:
        mode === 'development'
          ? '[name]__[local]--[hash:base64:5]'
          : '[hash:base64:8]',
    },
  },
}));
