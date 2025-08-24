import { defineConfig } from 'vite';
import { resolve } from 'path';

// Performance optimization configuration
export const performanceConfig = {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          ui: [
            '@radix-ui/react-dialog',
            '@radix-ui/react-card', 
            '@radix-ui/react-button',
            'lucide-react'
          ],
          i18n: ['react-i18next', 'i18next'],
          form: ['react-hook-form', '@hookform/resolvers', 'zod']
        },
        // Optimize chunk size
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        }
      }
    },
    // Optimize build settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-i18next',
      'i18next',
      'lucide-react'
    ]
  }
};

export default defineConfig(performanceConfig);