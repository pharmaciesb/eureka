self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pharma-eureka-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/assets/css/style.css",
        "/assets/js/script.js",
        "/assets/images/favicon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
