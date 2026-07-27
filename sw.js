const CACHE = "stealth-ops-v20260727";
const PRECACHE = [
  "./",
  "./index.html",
  "./game.js",
  "./js/meta-systems.js",
  "./styles.css",
  "./manifest.json",
  "./offline-assets.json",
  "./assets/sprites/capa.png"
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
      path.endsWith("/offline-assets.json") ||
      path.endsWith("/manifest.json") ||
      path === "/" ||
      path.endsWith("/")
    );
  } catch (_) {
    return false;
  }
}

async function cacheUrls(urls) {
  const cache = await caches.open(CACHE);
  const list = Array.isArray(urls) ? urls : [];
  let done = 0;
  for (const raw of list) {
    const url = String(raw || "").trim();
    if (!url) continue;
    try {
      const response = await fetch(url, { cache: "reload" });
      if (response && response.ok) {
        await cache.put(url, response.clone());
      }
    } catch (_) {
      /* skip failed asset; continue pack */
    }
    done += 1;
    const clients = await self.clients.matchAll({ type: "window" });
    for (const client of clients) {
      client.postMessage({
        type: "OFFLINE_CACHE_PROGRESS",
        done,
        total: list.length
      });
    }
  }
  return { done, total: list.length };
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

self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "PRECACHE_OFFLINE" && Array.isArray(data.urls)) {
    event.waitUntil(
      cacheUrls(data.urls).then((result) => {
        if (event.source) {
          event.source.postMessage({
            type: "OFFLINE_CACHE_DONE",
            ...result
          });
        }
      })
    );
  }
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
