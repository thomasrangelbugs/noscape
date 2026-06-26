import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");

export async function startTestServer(port = 3011) {
  const server = spawn("npx", ["--yes", "serve", ".", "-l", String(port)], {
    cwd: root,
    stdio: "ignore",
    shell: true
  });
  await delay(2500);
  return {
    base: `http://127.0.0.1:${port}`,
    stop: () => server.kill("SIGTERM")
  };
}

export async function waitForTestApi(page, timeoutMs = 15000) {
  await page.goto(page.url().split("?")[0] + "?autotest=1", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => window.__stealthOpsTest && window.__stealthOpsTest.ready, null, { timeout: timeoutMs });
  return page.evaluate(() => window.__stealthOpsTest);
}
