import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Extract CSS to separate files for async loading
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          let extType = assetInfo.name.split('.').at(1);
          if (extType && /png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType || 'misc'}/[name]-[hash][extname]`;
        },
        manualChunks: {
          // Core React chunks
          'react-core': ['react', 'react-dom'],
          'react-router': ['react-router-dom'],
          
          // UI libraries - split for better caching
          'radix-core': ['@radix-ui/react-slot', '@radix-ui/react-accordion', '@radix-ui/react-dialog'],
          'radix-forms': ['@radix-ui/react-checkbox', '@radix-ui/react-select', '@radix-ui/react-radio-group'],
          'radix-overlay': ['@radix-ui/react-toast', '@radix-ui/react-popover', '@radix-ui/react-tooltip'],
          
          // Data fetching
          'query': ['@tanstack/react-query'],
          
          // Utilities and forms
          'utils': ['class-variance-authority', 'clsx', 'tailwind-merge'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'icons': ['lucide-react'],
          
          // i18n - separate chunk for better loading
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    // Enable gzip compression for production builds
    mode === 'production' && viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Enable brotli compression for production builds  
    mode === 'production' && viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
