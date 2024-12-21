// service-worker.js

const CACHE_NAME = 'my-cache-v2'; // Version your cache
const urlsToCache = [
  '/', // Root page
  '/index.html', // Example HTML
  '/index-C6Y966Lk.css', // Example CSS
  '/index-hh9eqi4q.js', // Example JS
  // Add assets from the dist/assets folder
  '/assets/app-sec (1)-WcyKlWG_.jpg',
  '/assets/apple-touch-icon-Cl60QhyS.png',
  '/assets/auth-now-CjmLl-BJ.png',
  '/assets/chakra-petch-latin-400-normal-B8DsKUUm.woff',
  '/assets/chakra-petch-latin-400-normal-Rp6tQSL7.woff2',
  '/assets/chakra-petch-latin-ext-400-normal-gSau51S8.woff',
  '/assets/chakra-petch-latin-ext-400-normal-tuqB3l-m.woff2',
  '/assets/chakra-petch-thai-400-normal-BwVEvbB4.woff',
  '/assets/chakra-petch-thai-400-normal-H48Olwgn.woff2',
  '/assets/chakra-petch-vietnamese-400-normal-bi64QiC0.woff',
  '/assets/cloud (1)-CzEYBsfq.jpg',
  '/assets/cryptography (1)-Cop_hADZ.jpg',
  '/assets/cyber-attack (1)-yqXEXg1k.png',
  '/assets/favicon-16x16-DTOUujiP.png',
  '/assets/favicon-32x32-DmxnDK9N.png',
  '/assets/information-sec (1)-B35J5nAt.jpg',
  '/assets/network sec (1)-rax24reC.jpg',
  '/assets/no-auth-W5geWMCF.png',
  '/assets/site-BgSBh6oi.webmanifest',
  '/assets/social-eng (1) (1)-DE6zajil.jpg',
  '/assets/void-Crbb0DR3.svg',
];

// Install the service worker and cache files
self.addEventListener('install', (event) => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching files');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate the service worker and remove old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]; // Keep only the current cache
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName); // Clean up old caches
          }
        })
      );
    })
  );
});

// Fetch the request and serve from the cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('Service Worker: Serving from cache', event.request.url);
        return cachedResponse;
      }
      console.log('Service Worker: Fetching from network', event.request.url);
      return fetch(event.request); // Fetch from network if not cached
    })
  );
});
