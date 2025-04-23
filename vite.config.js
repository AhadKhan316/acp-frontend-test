import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// First define your config object
const config = {
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 80 },
      optipng: { optimizationLevel: 5 },
      pngquant: { quality: [0.7, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false }
        ]
      },
      webp: { quality: 80 }
    }),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'axios'],
          // Add other heavy dependencies here
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    chunkSizeWarningLimit: 1000, // in kB
  },
  server: {
    host: true,
    port: 3000
  }
}

// Then modify it conditionally
if (process.env.NODE_ENV !== 'production') {
  config.plugins = config.plugins.filter(
    plugin => plugin !== viteImagemin && plugin !== ViteImageOptimizer
  )
}

// Finally export the config
export default defineConfig(config)