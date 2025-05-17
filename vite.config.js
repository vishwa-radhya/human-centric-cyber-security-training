import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType:'autoUpdate',
      devOptions:{
        enabled:true
      },
      includeAssets:[
        '/favicons/favicon.ico',
        '/favicons/apple-touch-icon.png',
        '/favicons/android-chrome-192x192.png',
      '/favicons/android-chrome-512x512.png',
      '/favicons/favicon-32x32.png',
      '/favicons/favicon-16x16.png',
      ],
      workbox:{
        navigateFallback:'/offline.html',
        runtimeCaching:[
          {
            urlPattern:({url})=>
              !url.origin.includes('firebase') && 
            /\.(js|css|png|jpg|jpeg|svg|webp|woff2|ttf|gif)$/i.test(url.pathname),
            handler:'StaleWhileRevalidate',
            options:{
              cacheName:'dynamic-assets',
              expiration:{
                maxEntries:100,
                maxAgeSeconds:60*60*24*7
              }
            }
          }
        ]
      },
      manifest:{
        name:'CS Training',
        short_name:'CS Training',
        description:'Our Human-Centric Cybersecurity Training Program focuses on building knowledge and resilience against cyber threats, designed with people at its core. Learn essential skills to protect your digital presence and safeguard your organization from emerging cyber risks.',
        theme_color:'#000',
        background_color:'#000',
        display:'standalone',
        start_url:'/',
        icons:[{
          src:'/favicons/android-chrome-192x192.png',
          sizes:'192x192',
          type:'image/png',
          purpose:'any maskable'
        },{
          src:'/favicons/android-chrome-512x512.png',
          sizes:'512x512',
          type:'image/png',
          purpose:'any maskable'
        },
      ],
      },
    }),
  ],
})
