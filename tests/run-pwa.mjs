import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const port = 3012;
const base = `http://127.0.0.1:${port}`;
const server = spawn("npx", ["--yes", "serve", ".", "-l", String(port)], {
  cwd: root,
  stdio: "ignore",
  shell: true
});

let browser;
try {
  await delay(2500);
  try {
    browser = await chromium.launch({ channel: "chrome" });
  } catch (_) {
    browser = await chromium.launch();
  }
  const context = await browser.newContext({ serviceWorkers: "allow" });
  const page = await context.newPage();

  await page.goto(`${base}/index.html`, { waitUntil: "load" });
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve) => {
        navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true });
      });
    }
  });
  await page.reload({ waitUntil: "load" });

  const shellReady = await page.evaluate(async () => {
    const cache = await caches.open("stealth-ops-shell-v20260728");
    const urls = await cache.keys();
    return ["index.html", "game.js", "styles.css"].every((name) =>
      urls.some((request) => new URL(request.url).pathname.endsWith("/" + name))
    );
  });
  if (!shellReady) throw new Error("O pacote essencial não foi salvo no cache.");

  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector("#c");
  if (!(await page.title()).includes("Stealth Ops")) {
    throw new Error("O app não abriu offline após a instalação.");
  }

  // Limpar somente o Cache Storage mantém o service worker instalado. Ao voltar
  // à internet, uma abertura deve reconstruir o shell automaticamente.
  await context.setOffline(false);
  await page.evaluate(async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((key) => caches.delete(key)));
  });
  await page.reload({ waitUntil: "load" });
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.waitForSelector("#c");

  console.log("OK PWA: abre offline e recupera o cache essencial após uma abertura online.");
} finally {
  if (browser) await browser.close();
  server.kill("SIGTERM");
}
