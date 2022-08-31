import CacheHelper from './utils/cache-helper';

const assetToCache = [
  './',
  './icon/android-icon-36x36.png',
  './icon/android-icon-48x48.png',
  './icon/android-icon-72x72.png',
  './icon/android-icon-96x96.png',
  './icon/android-icon-144x144.png',
  './icon/android-icon-192x192.png',
  './icon/apple-icon-180x180.png',
  './index.html',
  './favicon.ico',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

window.self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetToCache]));
});

window.self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

window.self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
