const CACHE = "stealth-ops-v20260624";
const PRECACHE = [
  "./",
  "./index.html",
  "./game.js",
  "./js/meta-systems.js",
  "./styles.css",
  "./manifest.json"
];

function isAppShellRequest(request) {
  if (request.method !== "GET") return false;
  try {
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return false;
    const path = url.pathname;
    return (
      path.endsWith("/game.js") ||
      path.endsWith("/js/meta-systems.js") ||
      path.endsWith("/index.html") ||
      path.endsWith("/styles.css") ||
      path.endsWith("/sw.js") ||
      path === "/" ||
      path.endsWith("/")
    );
  } catch (_) {
    return false;
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  if (isAppShellRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => new Response("", { status: 404, statusText: "Not Found" }));
    })
  );
});
