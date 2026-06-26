/**
 * Gera WAVs sintetizados para o Mjolnir e modo tempestade do Thor.
 * License: project asset (synthesized locally).
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "assets", "audio");
mkdirSync(outDir, { recursive: true });

const SAMPLE_RATE = 44100;

function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

function writeWav(path, samples) {
  const numSamples = samples.length;
  const buffer = Buffer.alloc(44 + numSamples * 2);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + numSamples * 2, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(SAMPLE_RATE, 24);
  buffer.writeUInt32LE(SAMPLE_RATE * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(numSamples * 2, 40);
  for (let i = 0; i < numSamples; i++) {
    const s = clamp(samples[i], -1, 1);
    buffer.writeInt16LE(Math.round(s * 32767), 44 + i * 2);
  }
  writeFileSync(path, buffer);
}

function whiteNoise() {
  return Math.random() * 2 - 1;
}

function envAttackDecay(t, attack, decay, sustain = 0, release = 0, total = 1) {
  if (t < attack) return t / Math.max(attack, 0.0001);
  if (t < attack + decay) {
    const p = (t - attack) / Math.max(decay, 0.0001);
    return 1 - p * (1 - sustain);
  }
  if (t < total - release) return sustain;
  const p = (t - (total - release)) / Math.max(release, 0.0001);
  return sustain * (1 - p);
}

function lowPass(prev, input, cutoffHz) {
  const rc = 1 / (Math.PI * 2 * cutoffHz);
  const dt = 1 / SAMPLE_RATE;
  const alpha = dt / (rc + dt);
  return prev + alpha * (input - prev);
}

function makeSpinLoop(seconds = 2.4) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  let lp1 = 0;
  let lp2 = 0;
  let lp3 = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const phase = (t / seconds) * Math.PI * 2;
    const wobble = 0.72 + Math.sin(phase * 3.1) * 0.18 + Math.sin(phase * 7.4) * 0.08;
    const wind = whiteNoise();
    lp1 = lowPass(lp1, wind, 520 + Math.sin(phase * 2) * 180);
    lp2 = lowPass(lp2, wind, 1200 + Math.sin(phase * 5) * 320);
    const rumble = Math.sin(phase * 1.0) * 0.34 + Math.sin(phase * 2.03) * 0.12;
    const metal = Math.sin(phase * 14.2) * 0.08 + Math.sin(phase * 21.7) * 0.045;
    const whoosh = lp1 * 0.42 * wobble + lp2 * 0.16 * wobble;
    lp3 = lowPass(lp3, whoosh + rumble * 0.28 + metal, 2400);
    out[i] = lp3 * 0.78;
  }
  return out;
}

function makeFlyLoop(seconds = 1.8) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  let lp = 0;
  let lp2 = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const phase = (t / seconds) * Math.PI * 2;
    const gust = 0.65 + Math.sin(phase * 2.4) * 0.22;
    lp = lowPass(lp, whiteNoise(), 680 + Math.sin(phase) * 240);
    const hum = Math.sin(phase * 0.8) * 0.18 + Math.sin(phase * 1.6) * 0.07;
    const doppler = Math.sin(phase * 3.5) * 0.12;
    lp2 = lowPass(lp2, lp * gust + hum + doppler, 1800);
    out[i] = lp2 * 0.72;
  }
  return out;
}

function makeThrow(seconds = 0.42) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const env = envAttackDecay(t, 0.012, 0.08, 0.35, 0.18, seconds);
    const sweep = 1800 - t * 3200;
    lp = lowPass(lp, whiteNoise(), clamp(sweep, 280, 2200));
    const boom = Math.sin(t * 48 * Math.PI * 2) * Math.exp(-t * 14) * 0.55;
    const ring = Math.sin(t * 420 * Math.PI * 2) * Math.exp(-t * 9) * 0.22;
    out[i] = (lp * 0.75 + boom + ring) * env;
  }
  return out;
}

function makeImpact(seconds = 0.55) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const env = Math.exp(-t * 7.5);
    const thud = Math.sin(t * 62 * Math.PI * 2) * Math.exp(-t * 18) * 0.65;
    const clang =
      Math.sin(t * 380 * Math.PI * 2) * Math.exp(-t * 11) * 0.35 +
      Math.sin(t * 620 * Math.PI * 2) * Math.exp(-t * 14) * 0.22 +
      Math.sin(t * 910 * Math.PI * 2) * Math.exp(-t * 16) * 0.12;
    const crack = whiteNoise() * Math.exp(-t * 28) * 0.18;
    out[i] = (thud + clang + crack) * env;
  }
  return out;
}

function makeCatch(seconds = 0.28) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const env = envAttackDecay(t, 0.004, 0.05, 0.2, 0.12, seconds);
    const grab = Math.sin(t * 240 * Math.PI * 2) * Math.exp(-t * 12) * 0.42;
    const snap = whiteNoise() * Math.exp(-t * 22) * 0.2;
    const thump = Math.sin(t * 88 * Math.PI * 2) * Math.exp(-t * 16) * 0.28;
    out[i] = (grab + snap + thump) * env;
  }
  return out;
}

function makeStormLoop(seconds = 4.2) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  let lp = 0;
  let lp2 = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const phase = (t / seconds) * Math.PI * 2;
    const rumble = 0.55 + Math.sin(phase * 0.7) * 0.25 + Math.sin(phase * 1.9) * 0.12;
    lp = lowPass(lp, whiteNoise(), 140 + Math.sin(phase * 0.5) * 40);
    const crackle = whiteNoise() * (Math.sin(phase * 17) > 0.82 ? 0.08 : 0.015);
    lp2 = lowPass(lp2, lp * rumble + crackle, 420);
    const sub = Math.sin(phase * 0.45) * 0.16;
    out[i] = (lp2 + sub) * 0.62;
  }
  return out;
}

function makeStormStrike(seconds = 0.72) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  let lp = 0;
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const crackT = clamp((t - 0.02) / 0.05, 0, 1);
    const boomT = clamp((t - 0.05) / 0.25, 0, 1);
    const crack = whiteNoise() * (1 - crackT) * Math.exp(-t * 20) * 0.85;
    lp = lowPass(lp, crack, 2800 - t * 1800);
    const boom = Math.sin(t * 42 * Math.PI * 2) * (1 - boomT) * 0.75;
    const zap = Math.sin(t * 520 * Math.PI * 2) * Math.exp(-t * 10) * 0.18;
    out[i] = (lp * 0.55 + boom + zap) * Math.exp(-t * 2.8);
  }
  return out;
}

function makeLightning(seconds = 0.16) {
  const n = Math.floor(SAMPLE_RATE * seconds);
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / SAMPLE_RATE;
    const env = Math.exp(-t * 24);
    const zap =
      Math.sin(t * 880 * Math.PI * 2) * 0.35 +
      Math.sin(t * 1320 * Math.PI * 2) * 0.22 +
      whiteNoise() * 0.28;
    out[i] = zap * env * 0.7;
  }
  return out;
}

const files = [
  ["mjolnir-spin-loop.wav", makeSpinLoop()],
  ["mjolnir-fly-loop.wav", makeFlyLoop()],
  ["mjolnir-throw.wav", makeThrow()],
  ["mjolnir-impact.wav", makeImpact()],
  ["mjolnir-catch.wav", makeCatch()],
  ["thor-storm-loop.wav", makeStormLoop()],
  ["thor-storm-strike.wav", makeStormStrike()],
  ["mjolnir-lightning.wav", makeLightning()]
];

for (const [name, samples] of files) {
  const path = join(outDir, name);
  writeWav(path, samples);
  console.log("wrote", name, `(${(samples.length / SAMPLE_RATE).toFixed(2)}s)`);
}

console.log("\nMjolnir audio generated in assets/audio/");
