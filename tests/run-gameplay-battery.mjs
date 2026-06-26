import { chromium } from "playwright";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { startTestServer } from "./lib/test-server.mjs";

const { base, stop } = await startTestServer(3014);

try {
  let browser;
  try {
    browser = await chromium.launch();
  } catch (launchErr) {
    console.warn("SKIP gameplay battery: navegador Playwright indisponível (" + launchErr.message + ").");
    process.exit(0);
  }
  const page = await browser.newPage();
  await page.goto(`${base}/index.html?autotest=1`, { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.waitForFunction(() => window.__stealthOpsTest && window.__stealthOpsTest.ready, null, { timeout: 15000 });

  const report = await page.evaluate(() => window.__stealthOpsTest.runBattery());

  if (report.issues && report.issues.length) {
    throw new Error("Battery falhou:\n" + report.issues.join("\n"));
  }

  const warnCount = (report.warnings || []).length;
  await browser.close();
  console.log("OK gameplay battery: " + (report.ok || report.levels || "passou") + (warnCount ? " (" + warnCount + " avisos)" : ""));
} finally {
  stop();
}
