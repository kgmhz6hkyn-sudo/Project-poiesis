const CACHE='poiesis-v2';
const ASSETS=['./','./index.html','./app.js','./manifest.webmanifest','./assets/daily-art.svg','./assets/hamlet.svg','./assets/performance.svg','./assets/exhibition.svg','./assets/exhibition2.svg','./assets/concert.svg','./assets/rothko.svg','./assets/stage.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
