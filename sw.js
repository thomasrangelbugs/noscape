const SHELL_CACHE_PREFIX = "stealth-ops-shell-";
const SHELL_CACHE = "stealth-ops-shell-v20260728";
const OFFLINE_CACHE = "stealth-ops-offline-v1";
const APP_ENTRY = new URL("./index.html", self.location.href).href;
const PRECACHE = [
  "./",
  "./index.html",
  "./game.js",
  "./js/meta-systems.js",
  "./styles.css",
  "./manifest.json",
  "./offline-assets.json",
  "./assets/sprites/capa.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-512-maskable.png"
];
const REQUIRED_SHELL = new Set([
  "./index.html",
  "./game.js",
  "./js/meta-systems.js",
  "./styles.css"
]);

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
  const cache = await caches.open(OFFLINE_CACHE);
  const list = Array.isArray(urls) ? urls : [];
  let done = 0;
  let cached = 0;
  let failed = 0;
  for (const raw of list) {
    const url = String(raw || "").trim();
    if (!url) continue;
    try {
      const absoluteUrl = new URL(url, self.registration.scope).href;
      const response = await fetch(absoluteUrl, { cache: "reload" });
      if (response && response.ok) {
        await cache.put(absoluteUrl, response.clone());
        cached += 1;
      } else {
        failed += 1;
      }
    } catch (_) {
      failed += 1;
    }
    done += 1;
    const clients = await self.clients.matchAll({ type: "window" });
    for (const client of clients) {
      client.postMessage({
        type: "OFFLINE_CACHE_PROGRESS",
        done,
        total: list.length,
        cached,
        failed
      });
    }
  }
  return { done, total: list.length, cached, failed };
}

async function precacheShell() {
  const cache = await caches.open(SHELL_CACHE);
  const failedRequired = [];

  for (const path of PRECACHE) {
    try {
      const url = new URL(path, self.registration.scope).href;
      const response = await fetch(url, { cache: "reload" });
      if (!response || !response.ok) throw new Error("HTTP " + (response && response.status));
      await cache.put(url, response.clone());
    } catch (_) {
      if (REQUIRED_SHELL.has(path)) failedRequired.push(path);
    }
  }

  if (failedRequired.length) {
    throw new Error("Arquivos essenciais indisponíveis: " + failedRequired.join(", "));
  }
}

async function cachedResponse(request) {
  const cache = await caches.open(SHELL_CACHE);
  return cache.match(request, { ignoreSearch: true });
}

async function cachedAppEntry() {
  const cache = await caches.open(SHELL_CACHE);
  return (await cache.match(APP_ENTRY, { ignoreSearch: true }))
    || cache.match(new URL("./", self.registration.scope).href, { ignoreSearch: true });
}

self.addEventListener("install", (event) => {
  event.waitUntil(precacheShell().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) =>
            (key.startsWith(SHELL_CACHE_PREFIX) && key !== SHELL_CACHE)
            || /^stealth-ops-v\d/.test(key)
          )
          .map((key) => caches.delete(key))
      )
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

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          if (response && response.ok) {
            const clone = response.clone();
            const cache = await caches.open(SHELL_CACHE);
            await cache.put(APP_ENTRY, clone);
          }
          return response;
        })
        .catch(() => cachedAppEntry())
    );
    return;
  }

  if (isAppShellRequest(event.request)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(SHELL_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cachedResponse(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && event.request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(OFFLINE_CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => new Response("", { status: 404, statusText: "Not Found" }));
    })
  );
});
