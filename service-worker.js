// Archivo vacío o básico para permitir instalación como PWA
self.addEventListener('install', e => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', e => {});
