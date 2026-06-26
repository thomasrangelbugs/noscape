import { chromium } from "playwright";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { startTestServer } from "./lib/test-server.mjs";

const { base, stop } = await startTestServer(3013);

try {
  let browser;
  try {
    browser = await chromium.launch();
  } catch (launchErr) {
    console.warn("SKIP touch: navegador Playwright indisponível (" + launchErr.message + ").");
    process.exit(0);
  }
  const page = await browser.newPage();
  await page.setViewportSize({ width: 900, height: 500 });
  await page.goto(`${base}/index.html`, { waitUntil: "domcontentloaded", timeout: 15000 });
  await page.waitForSelector("#mobileControls", { timeout: 5000 });

  const hasJoy = await page.evaluate(() => {
    return !!document.getElementById("joyPad") &&
      !!document.getElementById("touchShoot") &&
      !!document.getElementById("touchSwitch");
  });
  if (!hasJoy) throw new Error("Controles touch não encontrados no DOM");

  await page.evaluate(() => {
    document.body.classList.add("mobile-gameplay");
    const mc = document.getElementById("mobileControls");
    if (mc) mc.classList.remove("hidden");
  });

  const touchRun = await page.$("#touchRun");
  const touchUse = await page.$("#touchUse");
  const touchSwitch = await page.$("#touchSwitch");
  if (!touchRun || !touchUse || !touchSwitch) throw new Error("Botões touch ausentes");

  await browser.close();
  console.log("OK touch: elementos de controle mobile presentes.");
} finally {
  stop();
}
