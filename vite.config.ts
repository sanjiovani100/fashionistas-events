import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    strictPort: false, // Allow fallback to next available port
    host: true,
    open: true,
    cors: true,
    hmr: {
      overlay: true,
      clientPort: 3001
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    watch: {
      usePolling: true
    }
  },
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
    modules: {
      localsConvention: 'camelCase'
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      'react',
      'react-dom',
      'i18next',
      'react-i18next',
      '@radix-ui/react-label',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-switch',
      '@radix-ui/react-progress',
      'clsx',
      'class-variance-authority',
      'lucide-react',
      'tailwind-merge'
    ]
  },
  optimizeDeps: {
    include: [
      'i18next',
      'react-i18next',
      'i18next-browser-languagedetector',
      'clsx',
      'class-variance-authority',
      'lucide-react',
      '@radix-ui/react-label',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-switch',
      '@radix-ui/react-progress',
      '@cloudinary/url-gen',
      'tailwind-merge'
    ]
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': [
            '@radix-ui/react-label',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-switch',
            '@radix-ui/react-progress'
          ]
        }
      }
    }
  }
});


