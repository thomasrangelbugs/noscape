/**
 * Stealth Ops — sistemas meta (conquistas, desafio diário, tutorial, minimapa, etc.)
 * Carregado antes de game.js; game.js chama window.__StealthOpsMeta.*
 */
(() => {
  const ACH_KEY = "stealth_ops_achievements_v1";
  const MID_RUN_KEY = "stealth_ops_midrun_v1";
  const TUTORIAL_KEY = "stealth_ops_tutorial_v1";

  const ACHIEVEMENT_DEFS = [
    { id: "first_clear", title: "Primeira extração", desc: "Complete a fase 1." },
    { id: "ghost_run", title: "Fantasma", desc: "Complete uma fase sem ser detectado." },
    { id: "speed_demon", title: "Veloz", desc: "Complete uma fase abaixo do tempo alvo." },
    { id: "knife_only", title: "Só faca", desc: "Complete uma fase usando apenas faca." },
    { id: "nemesis_down", title: "Caçador", desc: "Derrote o Nemesis." },
    { id: "survivor_10", title: "Sobrevivente", desc: "Alcance nível 10 no Survivor." },
    { id: "survivor_25", title: "Veterano", desc: "Alcance nível 25 no Survivor." },
    { id: "daily_done", title: "Desafio do dia", desc: "Complete o desafio diário." },
    { id: "hardcore_clear", title: "Hardcore", desc: "Complete uma fase no modo Hardcore." },
    { id: "all_modes", title: "Polivalente", desc: "Complete fase 1 em agente, zumbi e palhaço." }
  ];

  const TUTORIAL_STEPS = [
    { id: "move", text: "Use WASD ou setas para mover. Shift corre; C agacha (menos barulho)." },
    { id: "crouch", text: "Agache (C) para reduzir visibilidade e barulho perto de guardas." },
    { id: "terminal", text: "Aproxime-se dos terminais (T) e pressione F para invadi-los." },
    { id: "dossier", text: "Pegue o dossiê (item brilhante) após os objetivos secundários." },
    { id: "exit", text: "Saia pela porta de extração quando tiver o dossiê." },
    { id: "lure", text: "Pressione E para jogar isca e distrair patrulhas." },
    { id: "done", text: "Boa sorte, agente. Fique oculto!" }
  ];

  const DEFAULT_KEYBINDS = {
    up: ["w", "arrowup"],
    down: ["s", "arrowdown"],
    left: ["a", "arrowleft"],
    right: ["d", "arrowright"],
    run: ["shift"],
    crouch: ["c"],
    interact: ["f"],
    lure: ["e"],
    shoot: ["q"],
    hammer: ["e"],
    switchWeapon: ["x"],
    pause: ["p", "escape"],
    reload: ["r"],
    confirm: ["enter", " "]
  };

  const COLORBLIND_VISION = {
    normal: { cone: "rgba(255,90,90,0.22)", edge: "rgba(255,120,120,0.45)" },
    protanopia: { cone: "rgba(255,180,60,0.24)", edge: "rgba(255,200,80,0.48)" },
    deuteranopia: { cone: "rgba(80,160,255,0.24)", edge: "rgba(100,180,255,0.48)" },
    tritanopia: { cone: "rgba(255,100,200,0.24)", edge: "rgba(255,130,210,0.48)" }
  };

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function saveJson(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (_) { /* ignore */ }
  }

  function getDailyChallengeDateKey(d = new Date()) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function hashSeed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return ("00000000" + (h >>> 0).toString(16)).slice(-8).toUpperCase();
  }

  function getDailyChallenge() {
    const dateKey = getDailyChallengeDateKey();
    const modes = ["agent", "zombie", "clown"];
    const dayNum = parseInt(dateKey.replace(/-/g, ""), 10) || 0;
    const mode = modes[dayNum % modes.length];
    const seed = "DAILY-" + hashSeed(dateKey);
    const level = 1 + (dayNum % 5);
    return { dateKey, mode, seed, level, label: "Desafio " + dateKey };
  }

  function loadAchievements() {
    const data = loadJson(ACH_KEY, { unlocked: {}, modesCleared: {} });
    if (!data.unlocked) data.unlocked = {};
    if (!data.modesCleared) data.modesCleared = {};
    return data;
  }

  function saveAchievements(data) {
    saveJson(ACH_KEY, data);
  }

  function unlockAchievement(id, achData) {
    const data = achData || loadAchievements();
    if (data.unlocked[id]) return null;
    const def = ACHIEVEMENT_DEFS.find((a) => a.id === id);
    if (!def) return null;
    data.unlocked[id] = Date.now();
    saveAchievements(data);
    return def;
  }

  function loadTutorialProgress() {
    return loadJson(TUTORIAL_KEY, { completed: false, step: 0, seenControls: false });
  }

  function saveTutorialProgress(data) {
    saveJson(TUTORIAL_KEY, data);
  }

  function loadMidRunSave() {
    return loadJson(MID_RUN_KEY, null);
  }

  function saveMidRunSave(snapshot) {
    if (!snapshot) {
      try { localStorage.removeItem(MID_RUN_KEY); } catch (_) { /* ignore */ }
      return;
    }
    saveJson(MID_RUN_KEY, snapshot);
  }

  function buildShareText(ctx) {
    const parts = [
      "Stealth Ops",
      "Fase " + (ctx.level || 1),
      "Pontos " + (ctx.score || 0),
      "Seed " + (ctx.seed || "AUTO"),
      ctx.mode ? "Modo " + ctx.mode : "",
      ctx.time ? "Tempo " + ctx.time : ""
    ].filter(Boolean);
    return parts.join(" | ");
  }

  function buildShareUrl(ctx) {
    const base = typeof location !== "undefined" ? location.origin + location.pathname : "";
    const params = new URLSearchParams();
    if (ctx.seed) params.set("seed", ctx.seed);
    if (ctx.mode) params.set("mode", ctx.mode);
    if (ctx.level) params.set("level", String(ctx.level));
    const q = params.toString();
    return q ? base + "?" + q : base;
  }

  function parseUrlBootstrap() {
    if (typeof location === "undefined") return null;
    const params = new URLSearchParams(location.search);
    const seed = params.get("seed");
    const mode = params.get("mode");
    const level = params.get("level");
    if (!seed && !mode && !level) return null;
    return {
      seed: seed || "",
      mode: mode || "",
      level: level ? Math.max(1, parseInt(level, 10) || 1) : 1
    };
  }

  function mergeKeybinds(custom) {
    const out = {};
    for (const [action, defaults] of Object.entries(DEFAULT_KEYBINDS)) {
      const c = custom && custom[action];
      out[action] = Array.isArray(c) && c.length ? c.slice() : defaults.slice();
    }
    return out;
  }

  function drawMinimap(targetCtx, opts) {
    if (!targetCtx || !opts || !opts.grid || !opts.grid.length) return;
    const grid = opts.grid;
    const H = grid.length;
    const W = grid[0].length;
    const pad = 10;
    const size = opts.size || 118;
    const x0 = opts.x != null ? opts.x : targetCtx.canvas.width - size - pad;
    const y0 = opts.y != null ? opts.y : pad;
    const cell = size / Math.max(W, H);
    const ox = x0 + (size - W * cell) / 2;
    const oy = y0 + (size - H * cell) / 2;

    targetCtx.save();
    targetCtx.fillStyle = "rgba(5,12,20,0.72)";
    targetCtx.fillRect(x0 - 4, y0 - 16, size + 8, size + 20);
    targetCtx.strokeStyle = "rgba(100,180,230,0.35)";
    targetCtx.strokeRect(x0 - 3.5, y0 - 15.5, size + 7, size + 19);
    targetCtx.font = "600 9px Bahnschrift, sans-serif";
    targetCtx.fillStyle = "rgba(180,210,230,0.9)";
    targetCtx.textAlign = "left";
    targetCtx.fillText("MAPA", x0, y0 - 4);

    const floor = opts.CELL_FLOOR ?? 0;
    const wall = opts.CELL_WALL ?? 1;
    const doorClosed = opts.CELL_DOOR_CLOSED ?? 2;
    const doorOpen = opts.CELL_DOOR_OPEN ?? 3;

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const c = grid[y][x];
        let color = "rgba(20,35,50,0.85)";
        if (c === floor || c === doorOpen) color = "rgba(45,70,95,0.9)";
        else if (c === doorClosed) color = "rgba(90,70,40,0.95)";
        else if (c === wall) color = "rgba(12,22,32,0.95)";
        targetCtx.fillStyle = color;
        targetCtx.fillRect(ox + x * cell, oy + y * cell, cell + 0.5, cell + 0.5);
      }
    }

    const dot = (wx, wy, color, r) => {
      const mx = ox + (wx / opts.TILE + 0.5) * cell;
      const my = oy + (wy / opts.TILE + 0.5) * cell;
      targetCtx.fillStyle = color;
      targetCtx.beginPath();
      targetCtx.arc(mx, my, r || Math.max(2, cell * 0.35), 0, Math.PI * 2);
      targetCtx.fill();
    };

    if (opts.objectives) {
      for (const o of opts.objectives) {
        if (!o.done) dot(o.x, o.y, "#ffb84a", Math.max(2.2, cell * 0.4));
      }
    }
    if (opts.item && !opts.item.taken) dot(opts.item.x, opts.item.y, "#7cf5ff", Math.max(2.4, cell * 0.45));
    if (opts.exit) dot(opts.exit.x + (opts.exit.w || 0) * 0.5, opts.exit.y + (opts.exit.h || 0) * 0.5, "#6dff9a", Math.max(2.4, cell * 0.45));
    dot(opts.playerX, opts.playerY, "#ffffff", Math.max(2.6, cell * 0.5));

    targetCtx.restore();
  }

  function drawTutorialOverlay(targetCtx, step, opts) {
    if (!targetCtx || step == null || step < 0 || step >= TUTORIAL_STEPS.length) return;
    const def = TUTORIAL_STEPS[step];
    if (!def) return;
    const mobile = opts && opts.mobile;
    const w = mobile ? Math.min(340, targetCtx.canvas.width - 24) : 420;
    const h = 56;
    const x = (targetCtx.canvas.width - w) / 2;
    const y = targetCtx.canvas.height - h - (mobile ? 88 : 24);

    targetCtx.save();
    targetCtx.fillStyle = "rgba(4,14,24,0.88)";
    targetCtx.fillRect(x, y, w, h);
    targetCtx.strokeStyle = "rgba(127,244,188,0.55)";
    targetCtx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    targetCtx.font = "600 11px Bahnschrift, sans-serif";
    targetCtx.fillStyle = "rgba(220,240,255,0.95)";
    targetCtx.textAlign = "center";
    const lines = wrapText(targetCtx, def.text, w - 20);
    let ly = y + 18;
    for (const line of lines) {
      targetCtx.fillText(line, x + w / 2, ly);
      ly += 14;
    }
    targetCtx.font = "500 9px Bahnschrift, sans-serif";
    targetCtx.fillStyle = "rgba(150,180,200,0.75)";
    targetCtx.fillText("Tutorial " + (step + 1) + "/" + TUTORIAL_STEPS.length + " — Enter para continuar", x + w / 2, y + h - 8);
    targetCtx.restore();
  }

  function drawFirstRunControls(targetCtx, mobile) {
    if (!targetCtx) return;
    const rows = mobile
      ? [["Joystick", "Mover"], ["Correr / Agachar", "Ações"], ["Soco / Usar", "Combate"], ["START", "Pausa"]]
      : [["WASD", "Mover"], ["Shift", "Correr"], ["C", "Agachar"], ["F", "Usar"], ["E", "Isca"], ["Q", "Atirar"], ["P", "Pausar"]];
    const pad = 12;
    const lineH = 15;
    targetCtx.save();
    targetCtx.font = "600 11px Bahnschrift, sans-serif";
    let maxA = 0;
    let maxB = 0;
    for (const [a, b] of rows) {
      maxA = Math.max(maxA, targetCtx.measureText(a).width);
      maxB = Math.max(maxB, targetCtx.measureText(b).width);
    }
    const bw = maxA + 16 + maxB + pad * 2;
    const bh = 22 + rows.length * lineH + pad;
    const bx = 14;
    const by = 90;
    targetCtx.fillStyle = "rgba(6,16,26,0.82)";
    targetCtx.fillRect(bx, by, bw, bh);
    targetCtx.strokeStyle = "rgba(127,244,188,0.4)";
    targetCtx.strokeRect(bx + 0.5, by + 0.5, bw - 1, bh - 1);
    targetCtx.fillStyle = "#7ff4bc";
    targetCtx.textAlign = "left";
    targetCtx.font = "700 12px Bahnschrift, sans-serif";
    targetCtx.fillText("CONTROLES — primeira partida", bx + pad, by + 16);
    let ry = by + 32;
    for (const [a, b] of rows) {
      targetCtx.font = "700 11px Bahnschrift, sans-serif";
      targetCtx.fillStyle = "#e8f6ff";
      targetCtx.fillText(a, bx + pad, ry);
      targetCtx.font = "500 11px Bahnschrift, sans-serif";
      targetCtx.fillStyle = "rgba(186,206,222,0.92)";
      targetCtx.fillText(b, bx + pad + maxA + 16, ry);
      ry += lineH;
    }
    targetCtx.restore();
  }

  function drawStealthFeedback(targetCtx, reason, timer) {
    if (!targetCtx || !reason || (timer != null && timer <= 0)) return;
    const alpha = timer != null ? Math.min(1, timer * 2) : 1;
    targetCtx.save();
    targetCtx.globalAlpha = alpha;
    targetCtx.font = "700 13px Bahnschrift, sans-serif";
    targetCtx.fillStyle = "#ff7a82";
    targetCtx.textAlign = "center";
    targetCtx.fillText(reason, targetCtx.canvas.width / 2, 52);
    targetCtx.restore();
  }

  function drawSurvivorStatsOverlay(targetCtx, stats) {
    if (!targetCtx || !stats) return;
    const lines = [
      "SURVIVOR — FIM DA RUN",
      "Nível " + stats.level + " | Tempo " + (stats.time || "0:00"),
      "Eliminações: " + (stats.kills || 0),
      "XP total: " + (stats.xp || 0),
      "Habilidades: " + (stats.abilities || 0)
    ];
    const w = 280;
    const h = 20 + lines.length * 18;
    const x = (targetCtx.canvas.width - w) / 2;
    const y = targetCtx.canvas.height / 2 - h / 2 + 40;
    targetCtx.save();
    targetCtx.fillStyle = "rgba(4,10,18,0.9)";
    targetCtx.fillRect(x, y, w, h);
    targetCtx.strokeStyle = "rgba(255,90,90,0.5)";
    targetCtx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    targetCtx.textAlign = "center";
    let ly = y + 18;
    for (let i = 0; i < lines.length; i++) {
      targetCtx.font = (i === 0 ? "700 13px" : "500 11px") + " Bahnschrift, sans-serif";
      targetCtx.fillStyle = i === 0 ? "#ff6a6a" : "rgba(210,230,245,0.92)";
      targetCtx.fillText(lines[i], x + w / 2, ly);
      ly += 18;
    }
    targetCtx.restore();
  }

  function computeStealthThreatReason(guards, player, hearThreshold) {
    if (!guards || !player) return "";
    let best = "";
    let bestScore = 0;
    for (const g of guards) {
      if (g.sleepT > 0) continue;
      const d = Math.hypot(g.x - player.x, g.y - player.y);
      if (g.state === "ALERT" && d < 220) {
        const s = 3 - d / 220;
        if (s > bestScore) { bestScore = s; best = "Detectado — linha de visão!"; }
      } else if (g.state === "SUSPICIOUS" && d < 180) {
        const s = 2 - d / 180;
        if (s > bestScore) { bestScore = s; best = "Suspeita — guarda investigando"; }
      } else if (player.noise > (hearThreshold || 0.45) && d < (g.hearDist || 200)) {
        const s = 1.5 + player.noise;
        if (s > bestScore) { bestScore = s; best = "Barulho alto — inimigos ouvem"; }
      }
    }
    if (!best && player.vis > 0.55) return "Exposto — reduza visibilidade (agache)";
    if (!best && player.noise > 0.5) return "Barulho elevado — caminhe ou agache";
    return best;
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? line + " " + word : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  }

  function musicDuckMultiplier(playerNoise, alertLevel) {
    let duck = 1;
    if (playerNoise > 0.35) duck *= 0.88 - playerNoise * 0.15;
    if (alertLevel >= 1) duck *= 0.72;
    else if (alertLevel > 0.5) duck *= 0.85;
    return Math.max(0.45, duck);
  }

  function prefersReducedMotion() {
    return typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  window.__StealthOpsMeta = {
    ACH_KEY,
    MID_RUN_KEY,
    TUTORIAL_KEY,
    ACHIEVEMENT_DEFS,
    TUTORIAL_STEPS,
    DEFAULT_KEYBINDS,
    COLORBLIND_VISION,
    getDailyChallenge,
    getDailyChallengeDateKey,
    loadAchievements,
    saveAchievements,
    unlockAchievement,
    loadTutorialProgress,
    saveTutorialProgress,
    loadMidRunSave,
    saveMidRunSave,
    buildShareText,
    buildShareUrl,
    parseUrlBootstrap,
    mergeKeybinds,
    drawMinimap,
    drawTutorialOverlay,
    drawFirstRunControls,
    drawStealthFeedback,
    drawSurvivorStatsOverlay,
    computeStealthThreatReason,
    musicDuckMultiplier,
    prefersReducedMotion
  };
})();
