const CACHE = 'finanzas-v2';
const FILES = ['./finanzas-tracker.html', './manifest.json', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(r => r || fetch(e.request).catch(() => caches.match('./finanzas-tracker.html')))
  );
});

// Notificaciones programadas desde la app
self.addEventListener('message', e => {
  if (!e.data) return;
  if (e.data.type === 'SCHEDULE_NOTIF') {
    const { title, body, delay, tag } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body,
        icon: './icon.svg',
        badge: './icon.svg',
        tag: tag || 'finanzas-notif',
        renotify: true,
        vibrate: [200, 100, 200],
      });
    }, Math.max(0, delay));
  }
  if (e.data.type === 'CANCEL_NOTIF') {
    self.registration.getNotifications({ tag: e.data.tag })
      .then(ns => ns.forEach(n => n.close()));
  }
});
