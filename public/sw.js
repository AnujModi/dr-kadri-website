const CACHE_NAME = 'carrollton-perio-v2';
const isLocal = ['localhost', '127.0.0.1', '[::1]'].includes(self.location.hostname);
const urlsToCache = ['/', '/index.html', '/images/logo.jpeg'];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    if (!isLocal) {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(urlsToCache);
    }
    await self.skipWaiting();
  })());
});

// Revalidate mutable pages and photos online; retain an offline fallback.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (isLocal || event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request, { cache: 'no-cache' });
      if (response.ok && response.type === 'basic') {
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      if (event.request.mode === 'navigate') {
        const page = await cache.match('/index.html');
        if (page) return page;
      }
      return Response.error();
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith('carrollton-perio-') && (isLocal || name !== CACHE_NAME))
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});
