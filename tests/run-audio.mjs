import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const gameJs = readFileSync(join(root, "game.js"), "utf8");
const audioDir = join(root, "assets", "audio");

const requiredFiles = [
  "door-open-cc0.wav",
  "gun-reload-cc0.wav",
  "slime-squish-cc0.wav",
  "swish-heavy-cc0.wav",
  "superpower-5-cc0.ogg",
  "superpower-12-cc0.ogg",
  "superpower-31-cc0.ogg",
  "Resident Evil 3_ Nemesis - Feel the Tension.mp3",
  "Resident Evil 3_ Nemesis - Nemesis' Theme.mp3",
  "rock kiss.mp3",
  "me crazy.mp3"
];

const codeChecks = [
  ["Butcher 2 cargas de dash", /BUTCHER_DASH_CHARGES\s*=\s*2/],
  ["Survival vozes mais discretas", /survivalAmbientVoiceT/],
  ["SFX porta abrir", /function sfxDoorOpen/],
  ["SFX recarga", /function sfxGunReload/],
  ["SFX tentáculo", /function sfxTentacleWhip/],
  ["SFX habilidades survivor", /function playSurvivalAbilitySfx/],
  ["doorOpen registrado", /doorOpen:\s*\{/],
  ["gunReload registrado", /gunReload:\s*\{/],
  ["Tiros mais baixos no survivor", /isSurvivalRun\(\)\s*\?\s*0\.3\s*:\s*1/],
  ["Menu com trilhas alternadas", /MENU_BGM_TRACK_INDICES\s*=\s*\[[^\]]*ROCK_KISS_BGM_TRACK_INDEX/],
  ["Rock Kiss no BGM", /rock kiss\.mp3/],
  ["Me Crazy no BGM", /me crazy\.mp3/]
];

let failed = 0;
for (const [label, pattern] of codeChecks) {
  const ok = pattern.test(gameJs);
  console.log(ok ? "OK" : "FAIL", label);
  if (!ok) failed += 1;
}

for (const file of requiredFiles) {
  const path = join(audioDir, file);
  const ok = existsSync(path) && readFileSync(path).length > 100;
  console.log(ok ? "OK" : "FAIL", "arquivo " + file);
  if (!ok) failed += 1;
}

if (failed > 0) {
  console.error(`\n${failed} verificação(ões) falharam.`);
  process.exit(1);
}

console.log(`\nTodas as ${codeChecks.length + requiredFiles.length} verificações de áudio passaram.`);
