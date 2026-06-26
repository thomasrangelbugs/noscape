import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const gameJs = readFileSync(join(root, "game.js"), "utf8");
const indexHtml = readFileSync(join(root, "index.html"), "utf8");

function extractFunction(name) {
  const re = new RegExp(`function ${name}\\([^)]*\\)\\s*\\{[\\s\\S]*?\\n    \\}`);
  const match = gameJs.match(re);
  return match ? match[0] : "";
}

const checks = [
  ["OPERATIVE_MAX_HEALTH metade dos supers", /OPERATIVE_MAX_HEALTH\s*=\s*HOMELANDER_MAX_HEALTH\s*\/\s*2/],
  ["Thor cura no pickup de raios", /THOR_HEAL_PER_PICKUP/],
  ["Thor usa asset do Mjolnir", /assets\/sprites\/mjolnir\.png/],
  ["Thor possui ciclo de arremesso e retorno", /function updateThorMjolnir[\s\S]*mjolnirState === "returning"/],
  ["Thor mantém laser e Mjolnir separados", /updateHomelanderLaser\(dt, pressedShoot \|\| holdingShoot\);[\s\S]*updateThorMjolnir\(dt, pressedHammer, holdingHammer\)/],
  ["Botão mobile exclusivo do Mjolnir", () => /id="touchHammer"/.test(indexHtml) && /getElementById\("touchHammer"\)/.test(gameJs)],
  ["Supers curam ao coletar item", /function healOnSuperPickup/],
  ["Agente campanha com damageOperative", /function damageOperative/],
  ["Dano escala por fase na campanha", /function campaignEnemyDamageMul/],
  ["Dano aplicado com scaledEnemyDamage", /scaledEnemyDamage\(amount\)/],
  ["Corações só no agente", /const hearts = \[\]/],
  ["Spawn de corações na campanha", /isOperativeCampaign\(\)[\s\S]*hearts\.push/],
  ["Drops raros no survivor", /isSurvivalRun\(\)\s*\?\s*\(Math\.random\(\) < 0\.38/],
  ["Drops limitados na campanha super", /:\s*\(2 \+ \(\(Math\.random\(\) \* 3\) \| 0\)\)/],
  ["Botão de cura oculto nos supers", /touchLure\.classList\.toggle\("hidden",\s*hl\)/],
  ["Tecla E não cura supers", /const wantsLure = !superCharacter &&/],
  ["R recarrega arma", /reload:\s*\["r"\]/],
  ["R não reinicia run", () => !gameJs.includes('restart: ["r"]') && !gameJs.includes("consumeActionPress(\"restart\")")],
  ["Botão Rec. no mobile", () => /id="touchReload"/.test(indexHtml) && /getElementById\("touchReload"\)/.test(gameJs)],
  ["tryReloadWeapon", /function tryReloadWeapon/],
  ["Meta systems carregado", /window\.__StealthOpsMeta/],
  ["Tutorial integrado", /function initTutorialForLevel/],
  ["Minimapa integrado", /drawMinimap/],
  ["Save mid-run", /function saveMidRunSnapshot/],
  ["generateLevel super campanha", /if \(isSuperCharacter\(\)\) \{\s*const layout/],
  () => {
    const fn = extractFunction("healThorOnKill");
    return fn.includes("addThorLightning") && !fn.includes("player.health");
  },
  () => {
    const fn = extractFunction("healOnSuperPickup");
    return fn.includes("SUPER_HEAL_PER_PICKUP") && !fn.includes("player.milk");
  },
  () => {
    const pickup = extractFunction("tryAutoPickupCollectibles");
    return pickup.includes("hearts.length") && pickup.includes("OPERATIVE_HEAL_PER_HEART");
  }
];

let failed = 0;
for (const entry of checks) {
  const [label, check] = Array.isArray(entry) ? entry : ["custom", entry];
  const ok = typeof check === "function" ? check() : check.test(gameJs);
  console.log(ok ? "OK" : "FAIL", label);
  if (!ok) failed += 1;
}

if (failed > 0) {
  console.error(`\n${failed} verificação(ões) falharam.`);
  process.exit(1);
}

console.log(`\nTodas as ${checks.length} verificações de balanceamento passaram.`);
