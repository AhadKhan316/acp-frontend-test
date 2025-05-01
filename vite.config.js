// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(), // For advanced image transformations
    ViteImageOptimizer({
      // Basic configuration - adjust based on your needs
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: false,
      },
      avif: {
        quality: 70,
        lossless: false,
      },
      cache: true, // Enable caching for faster rebuilds
      includePublic: true, // Process images in public folder
    }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*.{js,css,html,ico,png,svg,json,webp,avif}"], // Added webp and avif
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.example\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
          // Add image caching strategy
          {
            urlPattern: /\.(png|jpe?g|webp|avif|svg)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
      manifest: {
        name: "My App",
        short_name: "MyApp",
        description: "A PWA built with React + Vite",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          // Add WebP versions for better performance
          {
            src: "/pwa-192x192.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/pwa-512x512.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
    }),
  ],
  build: {
    assetsInlineLimit: 4096,
    // Enable brotli and gzip compression
    reportCompressedSize: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
  },
  // OptimizeDeps for better caching
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
  },
});
