import { chromium } from "playwright";
import { startTestServer } from "./lib/test-server.mjs";

const { base, stop } = await startTestServer(3015);

try {
  let browser;
  try {
    browser = await chromium.launch();
  } catch (launchErr) {
    console.warn("SKIP perf: navegador Playwright indisponível (" + launchErr.message + ").");
    process.exit(0);
  }
  const page = await browser.newPage();
  await page.goto(`${base}/index.html?autotest=1&perf=1`, { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.waitForFunction(() => window.__stealthOpsTest && window.__stealthOpsTest.ready, null, { timeout: 15000 });

  const fps = await page.evaluate(async () => {
    const api = window.__stealthOpsTest;
    api.setEnemyMode("homelander");
    api.startLevel(1, { character: "homelander", runType: "survivor", seed: "PERF-HL" });
    const t0 = performance.now();
    let frames = 0;
    while (performance.now() - t0 < 2000) {
      api.tick(1 / 60);
      frames++;
    }
    return frames / 2;
  });

  if (fps < 15) {
    throw new Error("FPS Homelander muito baixo: " + fps.toFixed(1));
  }

  await browser.close();
  console.log("OK perf Homelander: ~" + fps.toFixed(0) + " ticks/s (2s).");
} finally {
  stop();
}
