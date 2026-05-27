import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'pwa-icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'My Travels',
        short_name: 'Travels',
        description: '個人旅遊行程記錄',
        theme_color: '#003366',
        background_color: '#EDF2FF',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'currency-api',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 5,
              },
            },
          },
        ],
      },
    }),
  ],
  base: '/',
})
