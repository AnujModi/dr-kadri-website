export function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  if (import.meta.env.DEV) {
    // Remove registrations left by older builds on this development origin.
    void unregisterServiceWorker();
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { updateViaCache: 'none' })
      .then((registration) => {
        void registration.update();
        setInterval(() => { void registration.update(); }, 60 * 60 * 1000);
      })
      .catch((error) => console.error('SW registration failed:', error));
  });
}

export async function unregisterServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.filter((registration) => {
      const worker = registration.active || registration.waiting || registration.installing;
      return worker && new URL(worker.scriptURL).pathname === '/sw.js';
    }).map((registration) => registration.unregister()));
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith('carrollton-perio-'))
      .map((name) => caches.delete(name)));
  } catch (error) {
    console.error('SW cleanup failed:', error);
  }
}
