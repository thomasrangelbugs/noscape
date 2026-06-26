import { chromium } from "playwright";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { startTestServer } from "./lib/test-server.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { base, stop } = await startTestServer(3012);

try {
  let browser;
  try {
    browser = await chromium.launch();
  } catch (launchErr) {
    console.warn("SKIP sim: navegador Playwright indisponível (" + launchErr.message + ").");
    process.exit(0);
  }
  const page = await browser.newPage();
  await page.goto(`${base}/index.html?autotest=1`, { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.waitForFunction(() => window.__stealthOpsTest && window.__stealthOpsTest.ready, null, { timeout: 15000 });

  const result = await page.evaluate(() => {
    const api = window.__stealthOpsTest;
    api.setEnemyMode("agent");
    api.startLevel(1, { mode: "agent", seed: "SIM-L1-agent" });
    for (let i = 0; i < 120; i++) api.tick(1 / 30);
    const snap = api.snapshot();
    return { mode: snap.mode, level: snap.level, playerAlive: snap.player.alive };
  });

  if (result.mode !== "PLAYING" || result.level !== 1 || !result.playerAlive) {
    throw new Error("Simulação falhou: " + JSON.stringify(result));
  }

  await browser.close();
  console.log("OK sim: tick de gameplay em fase 1 (agente).");
} finally {
  stop();
}
