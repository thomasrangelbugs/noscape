import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = 3011;
const BASE = `http://127.0.0.1:${PORT}`;

const server = spawn("npx", ["--yes", "serve", ".", "-l", String(PORT)], {
  cwd: root,
  stdio: "ignore",
  shell: true
});

try {
  await delay(2500);
  let browser;
  try {
    browser = await chromium.launch();
  } catch (launchErr) {
    console.warn("SKIP smoke: navegador Playwright indisponível (" + launchErr.message + ").");
    process.exit(0);
  }
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto(`${BASE}/index.html`, { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.waitForSelector("#c", { timeout: 5000 });
  const title = await page.title();
  if (!title.includes("Stealth Ops")) {
    throw new Error("Título da página inesperado: " + title);
  }
  if (errors.length) {
    throw new Error("Erros no console da página:\n" + errors.join("\n"));
  }

  await browser.close();
  console.log("OK smoke: página carrega sem erros de script.");
} finally {
  server.kill("SIGTERM");
}
