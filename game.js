  (() => {
    const canvas = document.getElementById("c");
    const ctx = canvas.getContext("2d");
    const stage = canvas.closest(".stage");

    const visBar = document.getElementById("visBar");
    const noiBar = document.getElementById("noiBar");
    const visTxt = document.getElementById("visTxt");
    const noiTxt = document.getElementById("noiTxt");
    const statusTxt = document.getElementById("statusTxt");
    const objTxt = document.getElementById("objTxt");
    const seedTxt = document.getElementById("seedTxt");
    const hint = document.getElementById("hint");
    const phaseTxt = document.getElementById("phaseTxt");
    const livesTxt = document.getElementById("livesTxt");
    const scoreTxt = document.getElementById("scoreTxt");
    const timeTxt = document.getElementById("timeTxt");
    const ammoTxt = document.getElementById("ammoTxt");
    const lureCdTxt = document.getElementById("lureCdTxt");
    const rankList = document.getElementById("rankList");
    const clearRankBtn = document.getElementById("clearRankBtn");
    const cfgPhase = document.getElementById("cfgPhase");
    const cfgLives = document.getElementById("cfgLives");
    const cfgScore = document.getElementById("cfgScore");
    const cfgTime = document.getElementById("cfgTime");
    const cfgVis = document.getElementById("cfgVis");
    const cfgNoi = document.getElementById("cfgNoi");
    const cfgStatus = document.getElementById("cfgStatus");
    const cfgObj = document.getElementById("cfgObj");
    const cfgSeed = document.getElementById("cfgSeed");

    const startBtn = document.getElementById("startBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const menuBtn = document.getElementById("menuBtn");
    const settingsBtn = document.getElementById("settingsBtn");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    const menuModal = document.getElementById("menuModal");
    const menuResumeBtn = document.getElementById("menuResumeBtn");
    const menuFullscreenBtn = document.getElementById("menuFullscreenBtn");
    const menuSettingsBtn = document.getElementById("menuSettingsBtn");
    const menuLevelSelect = document.getElementById("menuLevelSelect");
    const menuLevelSub = document.getElementById("menuLevelSub");
    const menuDifficultySelect = document.getElementById("menuDifficultySelect");
    const menuStartRunBtn = document.getElementById("menuStartRunBtn");
    const menuEnemyModeSelect = null;
    const menuCharacterSelect = null;
    const menuRunTypeSelect = null;
    const menuFamilyCards = Array.from(document.querySelectorAll("[data-menu-family]"));
    const menuRunTypeCards = Array.from(document.querySelectorAll("[data-run-type]"));
    const menuScenarioCards = Array.from(document.querySelectorAll(".menu-scenario-card[data-scenario-mode]"));
    const menuCharacterCards = Array.from(document.querySelectorAll(".menu-character-card[data-super-mode]"));
    let menuWizardFamily = "agent";
    const modeLoreModal = document.getElementById("modeLoreModal");
    const modeLoreTitle = document.getElementById("modeLoreTitle");
    const modeLoreTagline = document.getElementById("modeLoreTagline");
    const modeLoreBody = document.getElementById("modeLoreBody");
    const modeLoreWallpaper = document.getElementById("modeLoreWallpaper");
    const modeLoreSprite = document.getElementById("modeLoreSprite");
    const modeLoreWallpaperDl = document.getElementById("modeLoreWallpaperDl");
    const modeLoreSpriteDl = document.getElementById("modeLoreSpriteDl");
    const modeLoreCloseBtn = document.getElementById("modeLoreCloseBtn");
    const bestTimesList = document.getElementById("bestTimesList");
    const menuCredits = document.getElementById("menuCredits");
    const menuLoadout = document.getElementById("menuLoadout");
    const shopGrid = document.getElementById("shopGrid");
    const shopCarousel = document.getElementById("shopCarousel");
    const shopPrevBtn = document.getElementById("shopPrevBtn");
    const shopNextBtn = document.getElementById("shopNextBtn");
    const shopCarouselCounter = document.getElementById("shopCarouselCounter");
    const shopFeedback = document.getElementById("shopFeedback");
    const shopArtLightbox = document.getElementById("shopArtLightbox");
    const shopArtLightboxImg = document.getElementById("shopArtLightboxImg");
    const shopArtLightboxTitle = document.getElementById("shopArtLightboxTitle");
    const shopArtLightboxCloseBtn = document.getElementById("shopArtLightboxCloseBtn");
    let shopCarouselIndex = 0;

    const menuCard = document.getElementById("menuCard");
    const menuScreens = Array.from(document.querySelectorAll(".menu-screen"));
    const menuCoverBtn = document.getElementById("menuCoverBtn");
    const towerPlayBtn = document.getElementById("towerPlayBtn");
    const towerMenuBtn = document.getElementById("towerMenuBtn");
    const downloadMobileBtn = document.getElementById("downloadMobileBtn");
    const downloadPcBtn = document.getElementById("downloadPcBtn");
    const offlineDownloadModal = document.getElementById("offlineDownloadModal");
    const offlineDownloadTitle = document.getElementById("offlineDownloadTitle");
    const offlineDownloadLead = document.getElementById("offlineDownloadLead");
    const offlineDownloadSteps = document.getElementById("offlineDownloadSteps");
    const offlineInstallBtn = document.getElementById("offlineInstallBtn");
    const offlineCacheBtn = document.getElementById("offlineCacheBtn");
    const offlineDownloadProgress = document.getElementById("offlineDownloadProgress");
    const offlineProgressBar = document.getElementById("offlineProgressBar");
    const offlineProgressLabel = document.getElementById("offlineProgressLabel");
    const offlineDownloadStatus = document.getElementById("offlineDownloadStatus");
    const offlineDownloadCloseBtn = document.getElementById("offlineDownloadCloseBtn");
    let deferredInstallPrompt = null;
    let offlineDownloadPlatform = "mobile";
    let offlineCacheBusy = false;
    const familyBackBtn = document.getElementById("familyBackBtn");
    const familyNextBtn = document.getElementById("familyNextBtn");
    const runtypeBackBtn = document.getElementById("runtypeBackBtn");
    const runtypeNextBtn = document.getElementById("runtypeNextBtn");
    const scenarioBackBtn = document.getElementById("scenarioBackBtn");
    const scenarioNextBtn = document.getElementById("scenarioNextBtn");
    const characterBackBtn = document.getElementById("characterBackBtn");
    const characterNextBtn = document.getElementById("characterNextBtn");
    const difficultyNextBtn = document.getElementById("difficultyNextBtn");
    const levelBackBtn = document.getElementById("levelBackBtn");
    const recordsBackBtn = document.getElementById("recordsBackBtn");
    const menuRunTypeSub = document.getElementById("menuRunTypeSub");

    const settingsModal = document.getElementById("settingsModal");
    const settingsModalCard = settingsModal ? settingsModal.querySelector(".modal-card") : null;
    const masterVolume = document.getElementById("masterVolume");
    const musicVolume = document.getElementById("musicVolume");
    const sfxEnabled = document.getElementById("sfxEnabled");
    const musicEnabled = document.getElementById("musicEnabled");
    const qualityMode = document.getElementById("qualityMode");
    const difficultyMode = document.getElementById("difficultyMode");
    const touchMode = document.getElementById("touchMode");
    const handedness = document.getElementById("handedness");
    const touchLayout = document.getElementById("touchLayout");
    const touchBtnOffsetX = document.getElementById("touchBtnOffsetX");
    const touchBtnOffsetXValue = document.getElementById("touchBtnOffsetXValue");
    const touchBtnOffsetY = document.getElementById("touchBtnOffsetY");
    const touchBtnOffsetYValue = document.getElementById("touchBtnOffsetYValue");
    const hapticEnabled = document.getElementById("hapticEnabled");
    const joyDeadzone = document.getElementById("joyDeadzone");
    const joyDeadzoneValue = document.getElementById("joyDeadzoneValue");
    const joySensitivity = document.getElementById("joySensitivity");
    const joySensitivityValue = document.getElementById("joySensitivityValue");
    const mobileZoom = document.getElementById("mobileZoom");
    const mobileZoomValue = document.getElementById("mobileZoomValue");
    const hudScale = document.getElementById("hudScale");
    const hudContrast = document.getElementById("hudContrast");
    const colorblindMode = document.getElementById("colorblindMode");
    const keybindGrid = document.getElementById("keybindGrid");
    const keybindResetBtn = document.getElementById("keybindResetBtn");
    let keybindCaptureAction = null;
    const shareRunBtn = document.getElementById("shareRunBtn");
    const quickPlayBtn = document.getElementById("quickPlayBtn");
    const dailyChallengeBtn = document.getElementById("dailyChallengeBtn");
    const seedInput = document.getElementById("seedInput");
    const seedApplyBtn = document.getElementById("seedApplyBtn");
    const clearRankFromSettingsBtn = document.getElementById("clearRankFromSettingsBtn");
    const settingsCloseBtn = document.getElementById("settingsCloseBtn");
    const laserCalibOpenBtn = document.getElementById("laserCalibOpenBtn");
    const laserCalibModal = document.getElementById("laserCalibModal");
    const laserCalibCanvas = document.getElementById("laserCalibCanvas");
    const laserCalibCharacter = document.getElementById("laserCalibCharacter");
    const laserCalibPose = document.getElementById("laserCalibPose");
    const laserCalibDir = document.getElementById("laserCalibDir");
    const laserCalibDirValue = document.getElementById("laserCalibDirValue");
    const laserCalibLeftLx = document.getElementById("laserCalibLeftLx");
    const laserCalibLeftLy = document.getElementById("laserCalibLeftLy");
    const laserCalibRightLx = document.getElementById("laserCalibRightLx");
    const laserCalibRightLy = document.getElementById("laserCalibRightLy");
    const laserCalibLeftLxValue = document.getElementById("laserCalibLeftLxValue");
    const laserCalibLeftLyValue = document.getElementById("laserCalibLeftLyValue");
    const laserCalibRightLxValue = document.getElementById("laserCalibRightLxValue");
    const laserCalibRightLyValue = document.getElementById("laserCalibRightLyValue");
    const laserCalibExport = document.getElementById("laserCalibExport");
    const laserCalibMirrorBtn = document.getElementById("laserCalibMirrorBtn");
    const laserCalibResetBtn = document.getElementById("laserCalibResetBtn");
    const laserCalibCopyBtn = document.getElementById("laserCalibCopyBtn");
    const laserCalibSaveBtn = document.getElementById("laserCalibSaveBtn");
    const laserCalibCloseBtn = document.getElementById("laserCalibCloseBtn");
    const laserCalibCtx = laserCalibCanvas ? laserCalibCanvas.getContext("2d") : null;

    const mobileControls = document.getElementById("mobileControls");
    const touchActionBar = document.getElementById("touchActionBar");
    const cardioMonitor = document.getElementById("cardioMonitor");
    const cardioBpm = document.getElementById("cardioBpm");
    const cardioState = document.getElementById("cardioState");
    const orientationGate = document.getElementById("orientationGate");
    const joyPad = document.getElementById("joyPad");
    const joyStick = document.getElementById("joyStick");
    const touchRun = document.getElementById("touchRun");
    const touchCrouch = document.getElementById("touchCrouch");
    const touchLure = document.getElementById("touchLure");
    const touchReload = document.getElementById("touchReload");
    const touchUse = document.getElementById("touchUse");
    const touchShoot = document.getElementById("touchShoot");
    const touchHammer = document.getElementById("touchHammer");
    const touchSwitch = document.getElementById("touchSwitch");
    const touchStart = document.getElementById("touchStart");
    const mobilePlayGate = document.getElementById("mobilePlayGate");
    const mobilePlayBtn = document.getElementById("mobilePlayBtn");
    const mobilePlayStep = document.getElementById("mobilePlayStep");
    const mobilePlayMenuBtn = document.getElementById("mobilePlayMenuBtn");
    const gamePauseModal = document.getElementById("gamePauseModal");
    const pauseResumeBtn = document.getElementById("pauseResumeBtn");
    const pauseMenuBtn = document.getElementById("pauseMenuBtn");
    const pauseExitBtn = document.getElementById("pauseExitBtn");
    const pausePhase = document.getElementById("pausePhase");
    const pauseLives = document.getElementById("pauseLives");
    const pauseScore = document.getElementById("pauseScore");
    const pauseTime = document.getElementById("pauseTime");
    const pauseVis = document.getElementById("pauseVis");
    const pauseNoi = document.getElementById("pauseNoi");
    const pauseInventory = document.getElementById("pauseInventory");
    const pausePortrait = document.getElementById("pausePortrait");

    const TILE = 24;
    const BASE_W = 92;
    const BASE_H = 54;
    // Homelander joga em um mapa muito maior; por isso W/H/WORLD sao mutaveis.
    let W = BASE_W;
    let H = BASE_H;
    let WORLD_W = W * TILE;
    let WORLD_H = H * TILE;

    function applyWorldSizeForMode() {
      if (isSurvivalRun()) {
        if (isBrowserMobilePlay()) {
          W = SUPER_WORLD_MOBILE_W;
          H = SUPER_WORLD_MOBILE_H;
        } else {
          W = SUPER_WORLD_W;
          H = SUPER_WORLD_H;
        }
      } else {
        W = BASE_W;
        H = BASE_H;
      }
      WORLD_W = W * TILE;
      WORLD_H = H * TILE;
    }

    const CELL_FLOOR = 0;
    const CELL_WALL = 1;
    const CELL_DOOR_CLOSED = 2;
    const CELL_DOOR_OPEN = 3;
    const DOOR_WIDTH = 3;

    const MODE_MENU = "MENU";
    const MODE_PLAYING = "PLAYING";
    const MODE_PAUSED = "PAUSED";
    const MODE_LEVEL_CLEAR = "LEVEL_CLEAR";
    const MODE_LEVEL_FAIL = "LEVEL_FAIL";
    const MODE_RUN_OVER = "RUN_OVER";

    let mode = MODE_MENU;
    let modeTimer = 0;
    let levelIntroFlash = 0;
    let mobileStartTapCount = 0;

    let grid = [];
    let floorTint = [];

    const keys = new Set();
    const pressed = new Set();

    const keyMap = {
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

    const KEYBIND_LABELS = {
      up: "Mover cima",
      down: "Mover baixo",
      left: "Mover esquerda",
      right: "Mover direita",
      run: "Correr",
      crouch: "Agachar",
      interact: "Usar / pegar",
      lure: "Isca",
      shoot: "Atirar / soco",
      hammer: "Poder extra (E)",
      switchWeapon: "Trocar arma",
      pause: "Pausar",
      reload: "Recarregar",
      confirm: "Confirmar"
    };

    const SETTINGS_KEY = "stealth_ops_settings_v2";
    const SCORE_KEY = "stealth_ops_scores_v1";
    const PROGRESS_KEY = "stealth_ops_progress_v1";
    const AUTO_SEED_LABEL = "AUTO";
    const NEMESIS_TENSION_BGM_TRACK_INDEX = 14;
    const NEMESIS_CHASE_BGM_TRACK_INDEX = 15;
    const NEMESIS_BGM_TRACK_INDICES = [NEMESIS_TENSION_BGM_TRACK_INDEX, NEMESIS_CHASE_BGM_TRACK_INDEX];
    const BGM_PACK = "assets/audio/bgm-pack/";
    const AGENT_BGM_TRACK_INDICES = [0, 1, 2, 3, 21, 22, 23, 24, 25, 26, 27, 51, 52];
    const ZOMBIE_BGM_TRACK_INDICES = [10, 11, 28, 29, 30, 31, 32, 33, 34, 51, 52];
    const CLOWN_BGM_TRACK_INDICES = [9, 12, 13, 35, 36, 37, 38, 39, 40, 51, 52];
    const SURVIVAL_BGM_TRACK_INDICES = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
    const ENEMY_MODES = {
      agent: {
        label: "Agentes",
        kind: "agent",
        menuTitle: "Operação fantasma",
        menuTagline: "Infiltração silenciosa. Um passo em falso e a base inteira acorda.",
        menuDesc: "Você entra sozinho, sem reforços e sem segunda chance. Patrulhas armadas, rádio entre guardas e um Nemesis no fim do corredor — se alguém te ver, a operação acabou.",
        menuLore: "Stealth Ops não contrata equipes grandes: contrata especialistas que sabem sumir. Sua missão é invadir instalações procedurais, cumprir objetivos secundários, roubar o dossiê e sair antes que o alarme vire caçada.\n\nOs agentes inimigos falam entre si, reforçam posições e puxam armas cedo. Você tem iscas, cobertura e furtividade — mas nunca tem tempo de sobra.",
        loreImage: "assets/sprites/fundoagente.png",
        loreSprite: "assets/sprites/agente.png",
        startLabel: "Infiltrar com agentes",
        hint: "Modo agentes: patrulhas táticas, rádio entre guardas e armas mais cedo."
      },
      zombie: {
        label: "Zumbis",
        kind: "zombie",
        menuTitle: "Zona morta",
        menuTagline: "A neblina engole o horizonte. Eles não te veem — mas ouvem cada passo.",
        menuDesc: "O ar pesa, a visão cai e a horda vem pelo som. Correr atrai dezenas; agachar pode ser a diferença entre passar e ser cercado.",
        menuLore: "Ninguém sabe quando a zona morta começou — só que os sinais de rádio morreram e os sobreviventes viraram massa. Os infectados errantes reagem ao barulho antes de enxergar qualquer coisa.\n\nNeblina, passos arrastados e um silêncio falso. Quando o Nemesis aparece, a horda deixa de vaguear e passa a caçar.",
        loreImage: "assets/sprites/fundozumbi.png",
        loreSprite: "assets/sprites/zumbi.png",
        startLabel: "Entrar na zona zumbi",
        hint: "Modo zumbi: horda maior, audição forte, pouca visão e bote curto quando alerta."
      },
      clown: {
        label: "Palhaços",
        kind: "clown",
        menuTitle: "Circo macabro",
        menuTagline: "Luzes piscando, risadas distorcidas. O ataque vem antes do aviso.",
        menuDesc: "Cores saturadas escondem perigo. Os palhaços são poucos, mas rápidos — zigue-zague, risadas e perseguição implacável quando te encontram.",
        menuLore: "O circo fechou há anos, mas alguém deixou as luzes acesas. Palhaços deformados patrulham corredores estreitos, rindo antes de correr. Eles não formam hordas enormes: preferem perseguir até o fim.\n\nSe ouvir risada perto, não pare para olhar — já é tarde demais.",
        loreImage: "assets/sprites/fundopalhaco.png",
        loreSprite: "assets/sprites/palhaco.png",
        startLabel: "Abrir o circo",
        hint: "Modo palhaço: menos inimigos, perseguidor rápido, zigue-zague e risadas ao detectar."
      },
      homelander: {
        label: "Homelander",
        kind: "agent",
        mixed: true,
        character: "homelander",
        menuTitle: "O mundo inteiro pode esperar",
        menuTagline: "Acima da lei, além da pena — e impaciente com quem atrasa a limpeza.",
        menuDesc: "Ele não se esconde: atravessa paredes, incinera tudo no caminho e deixa a arena em ruínas. Pressione E no chão para espalhar uma onda de choque.",
        menuLore: "Homelander não é herói de propaganda — é resposta extrema quando a situação saiu do controle. O olhar dele corta aço; o voo rasga mapas inteiros. Inimigos de todos os tipos são empurrados para perto, como se o universo quisesse testar quantos cabem na mira.\n\nLeite recupera o que sobrou de humanidade no corpo invulnerável. Laser e voo não pedem permissão: pedem distância.",
        loreImage: "assets/sprites/fundohomelander.jpg",
        loreSprite: "assets/sprites/homelander.png",
        startLabel: "Soltar o Homelander",
        hint: "Homelander: segure o laser (recarrega) e use o voo para despedaçar tudo. Pressione E no chão para soltar uma onda de choque. Colete leite no mapa para recuperar vida."
      },
      butcher: {
        label: "Butcher",
        kind: "agent",
        mixed: true,
        character: "butcher",
        menuTitle: "O brutamontes soltou o V",
        menuTagline: "Sem capa e sem discurso — só o trabalho sujo que ninguém mais aceita fazer.",
        menuDesc: "Ex-operador transformado em arma viva. O feixe rasga o ar, o dash atravessa carne e osso, e E solta tentáculos negros nos inimigos.",
        menuLore: "Butcher aprendeu cedo que salvar civis e salvar a missão raramente cabem na mesma frase. O Composto V mantém o corpo de pé quando a lógica já desistiu. No combate, ele avança como tempestade: dash, corte, tentáculos negros buscando o próximo pescoço.\n\nNão há hordas distantes — há corpos entre você e a saída. E Butcher sempre escolhe passar por cima.",
        loreImage: "assets/sprites/butcherfundo.png",
        loreSprite: "assets/sprites/Butcher.png",
        startLabel: "Soltar o Butcher",
        hint: "Butcher: segure o laser e use o dash para atravessar inimigos. Pressione E para lançar tentáculos pretos nos alvos. Colete Composto V no mapa para recuperar vida."
      },
      thor: {
        label: "Thor",
        kind: "agent",
        mixed: true,
        character: "thor",
        menuTitle: "Protocolo Asgard",
        menuTagline: "O trovão da Vought cai onde a corporação mandar.",
        menuDesc: "Criado em laboratório pela Vought para ser o próximo ícone nacional, Thor herdou poder de tempestade — e a arrogância que vem com ele. O laser e o Mjolnir abrem caminho; os raios no campo alimentam a tempestade.",
        menuLore: "A Vought não queria apenas mais um super. Queria um deus vendável. Thor foi engenharia genética, propaganda e violência autorizada em um só pacote.\n\nCada raio colhido no campo recarrega o corpo e empilha carga elétrica. Quando a tempestade explode, o céu do mapa fica azul — e ninguém pede permissão.",
        loreImage: "assets/sprites/Thor wallpaper.png",
        loreSprite: "assets/sprites/thor_parado.png",
        startLabel: "Convocar Thor",
        hint: "Thor: segure Q/clique para usar o laser. Segure E para girar e carregar o Mjolnir, solte para arremessar e aperte E novamente para chamá-lo de volta."
      }
    };
    const SUPER_MIX_KINDS = ["zombie", "clown", "agent"];
    const HOMELANDER_MIX_KINDS = SUPER_MIX_KINDS;
    const DIFFICULTY_MODES = {
      casual: {
        label: "Casual",
        lives: Infinity,
        enemyCountMul: 0.86,
        enemySpeedMul: 0.94,
        enemySenseMul: 0.9,
        scoreMul: 0.9,
        hint: "Respawns infinitos e inimigos um pouco menos atentos."
      },
      operation: {
        label: "Operacional",
        lives: 3,
        enemyCountMul: 1,
        enemySpeedMul: 1,
        enemySenseMul: 1,
        scoreMul: 1,
        hint: "Tres respawns e balanceamento padrao."
      },
      hardcore: {
        label: "Hardcore",
        lives: 1,
        enemyCountMul: 1.16,
        enemySpeedMul: 1.08,
        enemySenseMul: 1.12,
        scoreMul: 1.25,
        hint: "Um respawn, mais inimigos e sentidos mais agressivos."
      }
    };
    const settings = {
      masterVolume: 0.6,
      musicVolume: 0.45,
      sfxEnabled: true,
      musicEnabled: true,
      enemyMode: "agent",
      character: "operative",
      runType: "campaign",
      qualityMode: "high",
      difficultyMode: "operation",
      touchMode: "auto",
      handedness: "right",
      touchLayout: "comfortable",
      touchBtnOffsetX: 0,
      touchBtnOffsetY: 0,
      hapticEnabled: true,
      joyDeadzone: 0.18,
      joySensitivity: 1,
      mobileZoomLevel: 1,
      hudScale: "normal",
      hudContrast: "normal",
      preferredSeed: "",
      laserCalibration: null,
      colorblindMode: "normal",
      keybinds: null,
      dailyChallengeDone: ""
    };

    const run = {
      level: 1,
      lives: 3,
      score: 0,
      cleared: 0,
      detected: 0,
      levelStartMs: performance.now(),
      levelFreezeSec: 0,
      seedText: "AUTO",
      difficultyMode: "operation",
      active: false,
      scoreRecorded: false,
      grenadeLauncherLevel: 0,
      grenadeLauncherCollected: false,
      levelKnifeOnly: false,
      levelNemesisDefeated: false,
      levelStartDetections: 0,
      superMapVariant: 0,
      superBgmTrack: -1,
      survivorKills: 0,
      survivorXpTotal: 0,
      isDailyChallenge: false
    };

    const player = {
      x: 0,
      y: 0,
      r: 9,
      dir: 0,
      alive: true,
      crouch: false,
      moving: false,
      running: false,
      carrying: false,
      speedWalk: 140,
      speedRun: 230,
      speedCrouch: 90,
      noise: 0,
      vis: 0,
      throwCooldown: 0,
      hasWeapon: false,
      meleeWeapon: "",
      activeSlot: "knife",
      ammo: 0,
      maxAmmo: 7,
      weaponSlots: [null, null],
      activeWeaponIndex: 0,
      shootCooldown: 0,
      muzzleFlashT: 0,
      laserHeat: 0,
      laserActive: false,
      flying: false,
      flyT: 0,
      // Estado especifico do Homelander
      health: 10,
      maxHealth: 10,
      hurtCd: 0,
      milk: 0,
      rage: 0,
      rageMax: 100,
      berserkT: 0,
      drinkCd: 0,
      laserFuel: 4,
      laserMaxFuel: 4,
      laserCooldown: 0,
      flyFuel: 3,
      flyMaxFuel: 3,
      flyCooldown: 0,
      flySoundDone: false,
      butcherDashT: 0,
      butcherDashDir: 0,
      butcherDashPairs: 0,
      butcherDashPairT: 0,
      mjolnirState: "held",
      mjolnirX: 0,
      mjolnirY: 0,
      mjolnirTargetX: 0,
      mjolnirTargetY: 0,
      mjolnirCharge: 0,
      mjolnirSpin: 0,
      mjolnirLeg: 0,
      mjolnirDamageT: 0,
      mjolnirLightningT: 0,
      mjolnirRequireRelease: false,
      mjolnirEnergy: 4.8,
      mjolnirMaxEnergy: 4.8,
      mjolnirCooldown: 0,
      thorStormStrikeT: 0,
      superPowerCooldown: 0
    };

    const HOMELANDER_LASER_MAX_FUEL = 4;
    const HOMELANDER_LASER_COOLDOWN = 5;
    const HOMELANDER_FLY_MAX_FUEL = 3;
    const HOMELANDER_FLY_COOLDOWN = 5;
    const HOMELANDER_MAX_HEALTH = 10;
    const OPERATIVE_MAX_HEALTH = HOMELANDER_MAX_HEALTH / 2;
    const SUPER_HEAL_PER_PICKUP = 2;
    const THOR_HEAL_PER_PICKUP = 1;
    const OPERATIVE_HEAL_PER_HEART = 1;
    const THOR_LASER_MAX_FUEL = 4.8;
    const THOR_BERSERK_LASER_MAX_FUEL = 6.2;
    const THOR_MJOLNIR_MAX_ENERGY = 4.8;
    const THOR_MJOLNIR_STORM_MAX_ENERGY = 6.2;
    const THOR_MJOLNIR_COOLDOWN = 5;
    const THOR_MJOLNIR_MAX_CHARGE = 2.2;
    const THOR_MJOLNIR_MIN_RANGE = 150;
    const THOR_MJOLNIR_MAX_RANGE = 680;
    const THOR_MJOLNIR_OUT_SPEED = 720;
    const THOR_MJOLNIR_RETURN_SPEED = 880;
    const THOR_FLY_MAX_FUEL = 4.2;
    const THOR_FLY_COOLDOWN = 4.2;
    const THOR_BERSERK_SECONDS = 10;
    const THOR_BERSERK_FLY_MAX_FUEL = 6.5;
    const THOR_RAGE_PER_PICKUP = 22;
    const THOR_RAGE_PER_KILL = 9;
    const BUTCHER_DASH_DURATION = 0.58;
    const BUTCHER_DASH_COOLDOWN = 4.8;
    const BUTCHER_DASH_CHARGES = 2;
    const BUTCHER_DASH_SPEED = 760;
    const BUTCHER_DASH_MAX_PAIRS = 3;
    const BUTCHER_TENTACLE_COOLDOWN = 5;
    const BUTCHER_TENTACLE_MAX_TARGETS = 5;
    const BUTCHER_TENTACLE_RANGE = 300;
    const HOMELANDER_SHOCK_COOLDOWN = 5;
    const HOMELANDER_SHOCK_MAX_RADIUS = 155;
    const HOMELANDER_SHOCK_SPEED = 460;
    // Arena compacta para modos super no navegador (PC).
    const SUPER_WORLD_W = 108;
    const SUPER_WORLD_H = 68;
    // Arena ainda menor no celular (menos tiles para renderizar/atualizar).
    const SUPER_WORLD_MOBILE_W = 96;
    const SUPER_WORLD_MOBILE_H = 58;
    const SURVIVAL_XP_BASE = 80;
    const SURVIVAL_MAX_LEVEL = 80;
    const SURVIVAL_WAVES = [
      { at: 0, label: "Agentes", kinds: ["agent"], spawnEvery: 1.05, batch: 3, cap: 96 },
      { at: 45, label: "Zumbis", kinds: ["zombie"], spawnEvery: 0.92, batch: 4, cap: 118 },
      { at: 95, label: "Palhacos", kinds: ["clown"], spawnEvery: 0.86, batch: 4, cap: 128 },
      { at: 155, label: "Misturado", kinds: ["agent", "zombie", "clown"], spawnEvery: 0.74, batch: 5, cap: 146 },
      { at: 235, label: "Nemesis", kinds: ["agent", "zombie", "clown"], spawnEvery: 0.7, batch: 5, cap: 145, nemesis: true },
      { at: 330, label: "Caos total", kinds: ["agent", "zombie", "clown"], spawnEvery: 0.64, batch: 6, cap: 152, nemesis: true }
    ];
    const SURVIVAL_ABILITIES = [
      { id: "basicLaser", name: "Kit: Laser", max: 6, desc: "Mais alcance, dano e carga para o laser básico.", tags: ["basic"] },
      { id: "basicMove", name: "Kit: Movimento", max: 6, desc: "Melhora voo ou dash inicial e reduz sua recarga.", tags: ["basic"] },
      { id: "basicLightning", name: "Kit: Raios", max: 6, desc: "Aumenta ganho e duração da carga elétrica do Thor.", tags: ["basic"] },
      { id: "flameAura", name: "Área em Chamas", max: 8, desc: "Queima inimigos perto de você continuamente.", tags: ["area"] },
      { id: "boomerang", name: "Bumerangue", max: 8, desc: "Lâmina volta atravessando a horda.", tags: ["projectile"] },
      { id: "chainLightning", name: "Corrente Elétrica", max: 8, desc: "Raios pulam entre alvos próximos.", tags: ["projectile"] },
      { id: "orbitalBlades", name: "Lâminas Orbitais", max: 8, desc: "Lâminas giram ao redor do personagem.", tags: ["area"] },
      { id: "meteor", name: "Impacto de Calor", max: 8, desc: "Explosões caem perto dos inimigos.", tags: ["blast"] },
      { id: "bloodWave", name: "Onda Brutal", max: 8, desc: "Pulso circular empurra e fere a horda.", tags: ["area"] },
      { id: "homingShard", name: "Estilhaços Teleguiados", max: 8, desc: "Projéteis perseguem alvos aleatórios.", tags: ["projectile"] },
      { id: "vortex", name: "Vórtice", max: 8, desc: "Puxa inimigos e aplica dano em grupo.", tags: ["control"] },
      { id: "acidTrail", name: "Rastro Cáustico", max: 8, desc: "Deixa zonas de dano por onde você passa.", tags: ["area"] },
      { id: "laserTurret", name: "Drone Laser", max: 8, desc: "Dispara laser automático no alvo mais perto.", tags: ["projectile"] },
      { id: "knifeFan", name: "Leque de Facas", max: 8, desc: "Arremessa facas em cone automaticamente.", tags: ["projectile"] },
      { id: "shockNova", name: "Nova de Choque", max: 8, desc: "Descarga periódica ao seu redor.", tags: ["area"] },
      { id: "blackTendrils", name: "Tentáculos Negros", max: 8, desc: "Tentáculos agarram alvos em volta.", tags: ["control"] },
      { id: "sonicBoom", name: "Estrondo Sônico", max: 8, desc: "Disparo frontal de alto impacto.", tags: ["blast"] },
      { id: "sawDisc", name: "Disco Serrado", max: 8, desc: "Disco ricocheteia entre inimigos.", tags: ["projectile"] },
      { id: "holyMilk", name: "Leite Fortificado", max: 5, desc: "Aumenta vida máxima e regeneração.", tags: ["passive"] },
      { id: "compoundRush", name: "Rush de Composto V", max: 5, desc: "Move mais rápido e recarrega poderes.", tags: ["passive"] },
      { id: "stormCore", name: "Núcleo da Tempestade", max: 5, desc: "Aumenta dano, energia do Mjolnir e raios do Thor.", tags: ["passive"] },
      { id: "magnet", name: "Campo Magnético", max: 5, desc: "Itens são puxados de mais longe.", tags: ["passive"] },
      { id: "battleArmor", name: "Pele Blindada", max: 5, desc: "Reduz dano de contato.", tags: ["passive"] }
    ];

    const item = { x: 0, y: 0, taken: false };
    const weaponDrop = { x: 0, y: 0, available: false, weaponType: null };
    const ammoMagDrop = { x: 0, y: 0, available: false, amount: 4 };
    const grenadeLauncherDrop = { x: 0, y: 0, available: false };
    const exit = { x: 0, y: 0, w: TILE * 1.8, h: TILE * 1.8 };
    const levelDoors = [];
    const mapProps = [];
    const lootCaches = [];

    const WEAPON_TYPES = [
      { id: "pistol", label: "Pistola", maxAmmo: 7, cooldown: 0.24, range: 320, laneRadius: 13, damage: 1, aimAssist: 0.18, bodyColor: "#d9dee8", gripColor: "#49566a", barrelLen: 15, barrelW: 5, soundProfile: "pistol", tracerColor: "255,198,132" },
      { id: "revolver", label: "Revolver", maxAmmo: 6, cooldown: 0.34, range: 330, laneRadius: 12, damage: 1.85, aimAssist: 0.16, bodyColor: "#d4d7df", gripColor: "#5a4034", barrelLen: 16, barrelW: 5.4, soundProfile: "magnum", tracerColor: "255,191,112", traceWidth: 2.4 },
      { id: "smg", label: "SMG", maxAmmo: 18, cooldown: 0.09, range: 250, laneRadius: 15, damage: 0.62, aimAssist: 0.12, recoil: 0.08, auto: true, bodyColor: "#c8d4e8", gripColor: "#3d4a5c", barrelLen: 18, barrelW: 4.5, soundProfile: "smg", tracerColor: "255,218,132", traceLife: 0.06 },
      { id: "burst", label: "Fuzil Burst", maxAmmo: 15, cooldown: 0.17, range: 340, laneRadius: 12, damage: 0.95, aimAssist: 0.17, bodyColor: "#aebbc7", gripColor: "#334150", barrelLen: 22, barrelW: 4.2, soundProfile: "burst", tracerColor: "230,246,176", traceLife: 0.075 },
      { id: "rifle", label: "Rifle", maxAmmo: 5, cooldown: 0.42, range: 390, laneRadius: 10, damage: 2.15, aimAssist: 0.22, bodyColor: "#b8c6a8", gripColor: "#3a4535", barrelLen: 24, barrelW: 4, soundProfile: "rifle", tracerColor: "220,245,180", traceLife: 0.1 },
      { id: "sniper", label: "Rifle Sniper", maxAmmo: 3, cooldown: 0.72, range: 480, laneRadius: 7, damage: 3.25, aimAssist: 0.26, pierce: 1, bodyColor: "#9aa8b5", gripColor: "#26313c", barrelLen: 29, barrelW: 3.6, soundProfile: "sniper", tracerColor: "225,246,212", traceLife: 0.12, traceWidth: 2.2 },
      { id: "shotgun", label: "Escopeta", maxAmmo: 4, cooldown: 0.58, range: 185, laneRadius: 24, damage: 2.35, aimAssist: 0.1, pellets: 3, bodyColor: "#a8927a", gripColor: "#4a3828", barrelLen: 14, barrelW: 6.5, soundProfile: "shotgun", tracerColor: "255,166,112", traceWidth: 3 },
      { id: "silencer", label: "Silenciada", maxAmmo: 9, cooldown: 0.22, range: 300, laneRadius: 12, damage: 0.9, aimAssist: 0.2, bodyColor: "#8a9aaa", gripColor: "#2e3844", barrelLen: 17, barrelW: 4, noiseMul: 0.25, soundProfile: "silencer", tracerColor: "175,205,225", traceLife: 0.045, traceWidth: 1.35 },
      { id: "tranq", label: "Dardos de Sono", maxAmmo: 5, cooldown: 0.48, range: 270, laneRadius: 12, damage: 0.15, aimAssist: 0.2, bodyColor: "#9bd7c0", gripColor: "#284a43", barrelLen: 18, barrelW: 4, noiseMul: 0.12, soundProfile: "silencer", tranquilizer: true, tracerColor: "126,247,201", traceLife: 0.11, traceWidth: 1.6 },
      { id: "laser", label: "Pistola Laser", maxAmmo: 8, cooldown: 0.26, range: 360, laneRadius: 9, damage: 1.35, aimAssist: 0.32, bodyColor: "#d7dce7", gripColor: "#313b4c", barrelLen: 18, barrelW: 4.2, noiseMul: 0.78, soundProfile: "laser", laserSight: true, tracerColor: "255,38,48", traceLife: 0.16, traceWidth: 2.8 },
      { id: "plasma", label: "Carabina Plasma", maxAmmo: 6, cooldown: 0.36, range: 365, laneRadius: 12, damage: 1.75, aimAssist: 0.28, bodyColor: "#bcc4ff", gripColor: "#2c315a", barrelLen: 22, barrelW: 4.8, noiseMul: 0.82, soundProfile: "laser", laserSight: true, tracerColor: "155,104,255", traceLife: 0.15, traceWidth: 2.6 }
    ];
    const GRENADE_LAUNCHER = {
      id: "grenadeLauncher",
      label: "Lança-granadas",
      maxAmmo: 2,
      cooldown: 1.1,
      range: 400,
      laneRadius: 20,
      damage: 4.8,
      aimAssist: 0.08,
      bodyColor: "#68727a",
      gripColor: "#2a3035",
      barrelLen: 26,
      barrelW: 8.4,
      noiseMul: 1.45,
      soundProfile: "bazooka",
      tracerColor: "255,150,76",
      traceLife: 0.16,
      traceWidth: 3.4,
      grenade: true,
      blastRadius: 84
    };
    const SHOP_ITEM_DEFS = [
      {
        id: "knife",
        label: "Faca",
        type: "knife",
        cost: 0,
        ownedDefault: true,
        desc: "Curta distância, silenciosa e letal em cone frontal.",
        upgrades: [
          { id: "reach", label: "Alcance", max: 2, costs: [140, 260] },
          { id: "speed", label: "Golpe rápido", max: 1, costs: [220] }
        ]
      },
      {
        id: "pistol",
        label: "Pistola",
        type: "weapon",
        weaponId: "pistol",
        cost: 180,
        desc: "Arma inicial equilibrada.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 3, costs: [100, 160, 240] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] },
          { id: "silencer", label: "Silenciador", max: 1, costs: [320] }
        ]
      },
      {
        id: "revolver",
        label: "Revólver",
        type: "weapon",
        weaponId: "revolver",
        cost: 260,
        desc: "Seis tiros de calibre grosso com recuo forte.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 2, costs: [120, 200] },
          { id: "scope", label: "Mira", max: 1, costs: [240] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "tranq",
        label: "Dardos de Sono",
        type: "weapon",
        weaponId: "tranq",
        cost: 380,
        desc: "Dorme humanos sem disparar o alarme.",
        upgrades: [
          { id: "ammo", label: "Dardos", max: 2, costs: [150, 240] },
          { id: "control", label: "Precisão", max: 1, costs: [220] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "smg",
        label: "Metralhadora",
        type: "weapon",
        weaponId: "smg",
        cost: 440,
        desc: "Alta cadência para abrir caminho.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 3, costs: [180, 260, 360] },
          { id: "control", label: "Controle", max: 2, costs: [240, 360] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "burst",
        label: "Fuzil Burst",
        type: "weapon",
        weaponId: "burst",
        cost: 490,
        desc: "Rajadas curtas para limpar corredores.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 2, costs: [170, 270] },
          { id: "control", label: "Controle", max: 2, costs: [220, 340] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "shotgun",
        label: "Doze",
        type: "weapon",
        weaponId: "shotgun",
        cost: 540,
        desc: "Dano forte em curta distância.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 2, costs: [220, 340] },
          { id: "spread", label: "Cano largo", max: 2, costs: [220, 340] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "rifle",
        label: "Rifle",
        type: "weapon",
        weaponId: "rifle",
        cost: 640,
        desc: "Precisão e alcance contra bosses.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 2, costs: [240, 380] },
          { id: "scope", label: "Mira", max: 2, costs: [260, 420] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "laser",
        label: "Pistola Laser",
        type: "weapon",
        weaponId: "laser",
        cost: 700,
        desc: "Feixe vermelho preciso e silencioso.",
        upgrades: [
          { id: "ammo", label: "Carga", max: 2, costs: [210, 340] },
          { id: "control", label: "Estabilizador", max: 1, costs: [270] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "sniper",
        label: "Sniper",
        type: "weapon",
        weaponId: "sniper",
        cost: 820,
        desc: "Perfura e derruba alvos à longa distância.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 2, costs: [270, 400] },
          { id: "scope", label: "Mira", max: 2, costs: [290, 460] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      },
      {
        id: "bazooka",
        label: "Bazuca",
        type: "weapon",
        weaponId: "grenadeLauncher",
        cost: 950,
        desc: "Explosiva, lenta e perfeita contra Nemesis.",
        upgrades: [
          { id: "ammo", label: "Munição", max: 2, costs: [360, 540] },
          { id: "blast", label: "Explosão", max: 2, costs: [340, 520] },
          { id: "laser", label: "Mira laser", max: 1, costs: [260] }
        ]
      }
    ];
    const SHOP_WEAPON_IMAGES = {
      knife: "assets/sprites/faca.png",
      pistol: "assets/sprites/pistola.png",
      revolver: "assets/sprites/revolver.png",
      smg: "assets/sprites/metralhadora.png",
      burst: "assets/sprites/fuzil burst.png",
      shotgun: "assets/sprites/doze.png",
      rifle: "assets/sprites/rifle.png",
      tranq: "assets/sprites/dardos do sono.png",
      sniper: "assets/sprites/sniper.png",
      laser: "assets/sprites/pistola laser.png",
      grenadeLauncher: "assets/sprites/bazuca.png",
      bazooka: "assets/sprites/bazuca.png"
    };
    const CHARACTER_PAUSE_PORTRAITS = {
      operative: { src: "assets/sprites/agente.png", label: "Agente" },
      homelander: { src: "assets/sprites/homelander.png", label: "Homelander" },
      butcher: { src: "assets/sprites/Butcher.png", label: "Butcher" },
      thor: { src: "assets/sprites/thor_parado.png", label: "Thor" }
    };
    const MAP_WEAPON_DEFS = [
      { id: "revolver", rarity: "comum", weight: 28 },
      { id: "silencer", rarity: "comum", weight: 26 },
      { id: "burst", rarity: "comum", weight: 20, minLevel: 2 },
      { id: "tranq", rarity: "rara", weight: 16 },
      { id: "laser", rarity: "rara", weight: 12, minLevel: 3 },
      { id: "sniper", rarity: "rara", weight: 10, minLevel: 3 },
      { id: "plasma", rarity: "especial", weight: 5, minLevel: 4 }
    ];
    const WEAPON_PICKUP_SPRITES = {
      pistol: { key: "weaponPistols", rect: { x: 0, y: 0, w: 42, h: 25 }, scale: 0.56 },
      revolver: { key: "weaponPistols", rect: { x: 0, y: 63, w: 43, h: 28 }, scale: 0.56 },
      silencer: { key: "weaponPistols", rect: { x: 0, y: 31, w: 45, h: 26 }, scale: 0.54 },
      tranq: { key: "weaponPistols", rect: { x: 47, y: 63, w: 44, h: 27 }, scale: 0.54 },
      laser: { key: "weaponPistols", rect: { x: 143, y: 0, w: 41, h: 25 }, scale: 0.56 },
      smg: { key: "weaponMachineGuns", rect: { x: 0, y: 35, w: 84, h: 30 }, scale: 0.36 },
      burst: { key: "weaponMachineGuns", rect: { x: 0, y: 70, w: 96, h: 30 }, scale: 0.34 },
      rifle: { key: "weaponMachineGuns", rect: { x: 0, y: 138, w: 103, h: 34 }, scale: 0.33 },
      sniper: { key: "weaponSniper", rect: { x: 0, y: 0, w: 131, h: 26 }, scale: 0.29 },
      shotgun: { key: "weaponShotguns", rect: { x: 0, y: 0, w: 100, h: 32 }, scale: 0.35 },
      grenadeLauncher: { key: "weaponNeonpunk", rect: { x: 42, y: 0, w: 79, h: 35 }, scale: 0.36 },
      plasma: { key: "weaponNeonpunk", rect: { x: 61, y: 55, w: 92, h: 29 }, scale: 0.34 }
    };
    let currentWeaponType = WEAPON_TYPES[0];
    let levelWeaponDropType = WEAPON_TYPES[0];
    let currentEnemyKind = "agent";

    const lures = [];
    const guards = [];
    const milks = [];
    const hearts = [];
    const objectives = [];
    const rankings = [];
    const fx = { shards: [], traces: [], blood: [], punches: [], slashes: [], alerts: [], scorch: [], gore: [], wind: [], gibs: [], spriteGore: [], spriteGibs: [], fires: [], bloodSprays: [], tentacles: [], rings: [] };
    const survival = {
      active: false,
      level: 1,
      xp: 0,
      nextXp: 24,
      pendingChoices: null,
      choiceRects: [],
      elapsed: 0,
      waveIndex: 0,
      spawnT: 0,
      bossT: 0,
      abilities: Object.create(null),
      cooldowns: Object.create(null),
      stats: {
        damage: 1,
        area: 1,
        cooldown: 1,
        move: 1,
        armor: 0,
        regen: 0,
        magnet: 1,
        pickupXp: 1
      }
    };
    const progress = {
      highestLevel: 1,
      lastLevel: 1,
      bestTimes: Object.create(null),
      credits: 0,
      inventory: createDefaultInventory()
    };
    const nemesis = {
      enabled: false,
      spawned: false,
      warned: false,
      chaseLocked: false,
      spawnT: 0
    };

    // Misseis de bazuca disparados pelo Nemesis.
    const nemesisMissiles = [];
    const NEMESIS_BAZOOKA_AIM_TIME = 1.05;
    const NEMESIS_BAZOOKA_RANGE_MIN = 70;
    const NEMESIS_BAZOOKA_RANGE_MAX = 920;
    const NEMESIS_TENTACLE_AIM_TIME = 0.85;
    const NEMESIS_TENTACLE_COOLDOWN_MIN = 11;
    const NEMESIS_TENTACLE_COOLDOWN_MAX = 16;
    const NEMESIS_TENTACLE_ROLL_INTERVAL = 2.4;
    const NEMESIS_TENTACLE_PROC_CHANCE = 0.34;
    const NEMESIS_TENTACLE_RANGE_MIN = 85;
    const NEMESIS_TENTACLE_RANGE_MAX = 320;

    const sprites = {
      player: null,
      playerProcedural: null,
      playerSheet: null,
      homelander: null,
      homelanderFly: null,
      butcher: null,
      butcherDash: null,
      thor: null,
      thorFly: null,
      mjolnir: null,
      item: null,
      exit: null,
      terminalOff: null,
      terminalOn: null,
      guardPatrol: null,
      guardSuspicious: null,
      guardAlert: null,
      zombie: null,
      clown: null,
      nemesis: null,
      weaponPistols: null,
      weaponShotguns: null,
      weaponMachineGuns: null,
      weaponSniper: null,
      weaponNeonpunk: null
    };

    const spriteScale = {
      player: 1,
      playerSheet: 1,
      homelander: 1,
      homelanderFly: 1,
      butcher: 1,
      butcherDash: 1,
      thor: 1,
      thorFly: 1,
      mjolnir: 1,
      item: 1,
      exit: 1,
      terminalOff: 1,
      terminalOn: 1,
      guardPatrol: 1,
      guardSuspicious: 1,
      guardAlert: 1,
      zombie: 1,
      clown: 1,
      nemesis: 1,
      weaponPistols: 1,
      weaponShotguns: 1,
      weaponMachineGuns: 1,
      weaponSniper: 1,
      weaponNeonpunk: 1
    };
    const spriteSourceRect = Object.create(null);
    let playerOperativeRuntime = null;

    // Viloes (vista lateral) e player (vista de cima) usam tamanhos distintos:
    // o mesmo valor em px deixa o player aparentemente maior.
    const ENTITY_SPRITE_SIZE = 38;
    const PLAYER_SPRITE_SIZE = 65;
    const HOMELANDER_SPRITE_SIZE = 69;
    const BUTCHER_SPRITE_SIZE = 69;
    const THOR_SPRITE_SIZE = 72;
    const MJOLNIR_SPRITE_SIZE = 46;

    // Posicao dos olhos no espaco local do sprite (ancora 0.5/0.5 apos trim+bake).
    // Coordenadas dos olhos (laser) por sprite — edite aqui ou use Configurações → Calibrar laser (dev).
    const SUPER_EYE_LOCAL = {
      homelander: {
        left: { lx: -3.5, ly: -12 },
        right: { lx: 3.5, ly: -12 }
      },
      homelanderFly: {
        left: { lx: -3.5, ly: 15.5 },
        right: { lx: 3.5, ly: 15.5 }
      },
      butcher: {
        left: { lx: -3.5, ly: -23 },
        right: { lx: 3.5, ly: -23 }
      },
      butcherDash: {
        left: { lx: -3.5, ly: -23 },
        right: { lx: 3.5, ly: -23 }
      },
      thor: {
        left: { lx: -4, ly: -12 },
        right: { lx: 3.5, ly: -12 }
      },
      thorFly: {
        left: { lx: -3.5, ly: 30 },
        right: { lx: 7, ly: 30 }
      }
    };
    const SUPER_EYE_KEYS = [
      "homelander",
      "homelanderFly",
      "butcher",
      "butcherDash",
      "thor",
      "thorFly"
    ];
    const LASER_CALIB_CHARACTER_POSE = {
      homelander: { stand: "homelander", alt: "homelanderFly" },
      butcher: { stand: "butcher", alt: "butcherDash" },
      thor: { stand: "thor", alt: "thorFly" }
    };

    function cloneSuperEyeDefaults() {
      const out = Object.create(null);
      for (const key of SUPER_EYE_KEYS) {
        const src = SUPER_EYE_LOCAL[key];
        out[key] = {
          left: { lx: src.left.lx, ly: src.left.ly },
          right: { lx: src.right.lx, ly: src.right.ly }
        };
      }
      return out;
    }

    function sanitizeLaserCalibration(raw) {
      const out = cloneSuperEyeDefaults();
      if (!raw || typeof raw !== "object") return out;
      if (raw.androidt && !raw.thor) raw.thor = raw.androidt;
      if (raw.androidtFly && !raw.thorFly) raw.thorFly = raw.androidtFly;
      for (const key of SUPER_EYE_KEYS) {
        const entry = raw[key];
        if (!entry || typeof entry !== "object") continue;
        if (entry.left && typeof entry.left === "object") {
          if (typeof entry.left.lx === "number") out[key].left.lx = clamp(entry.left.lx, -50, 50);
          if (typeof entry.left.ly === "number") out[key].left.ly = clamp(entry.left.ly, -50, 50);
        }
        if (entry.right && typeof entry.right === "object") {
          if (typeof entry.right.lx === "number") out[key].right.lx = clamp(entry.right.lx, -50, 50);
          if (typeof entry.right.ly === "number") out[key].right.ly = clamp(entry.right.ly, -50, 50);
        }
      }
      return out;
    }

    function ensureLaserCalibration() {
      if (!settings.laserCalibration) settings.laserCalibration = cloneSuperEyeDefaults();
      return settings.laserCalibration;
    }

    function bootstrapDevToolsFlag() {
      try {
        if (new URLSearchParams(location.search).has("dev")) {
          localStorage.setItem("stealth_ops_dev", "1");
        }
      } catch (_) {
        // ignore
      }
    }

    function isDevToolsEnabled() {
      try {
        bootstrapDevToolsFlag();
        if (localStorage.getItem("stealth_ops_dev") === "1") return true;
        if (new URLSearchParams(location.search).has("dev")) return true;
        const host = location.hostname;
        if (host === "localhost" || host === "127.0.0.1") return true;
        if (location.protocol === "file:") return true;
        return false;
      } catch (_) {
        return false;
      }
    }

    function syncLaserCalibDevButton() {
      if (!laserCalibOpenBtn) return;
      laserCalibOpenBtn.classList.toggle("hidden", !isDevToolsEnabled());
    }

    function getSuperEyeConfig(key) {
      const fallback = SUPER_EYE_LOCAL[key] || SUPER_EYE_LOCAL.homelander;
      const cal = settings.laserCalibration;
      const entry = cal && cal[key];
      if (!entry || !entry.left || !entry.right) return fallback;
      return entry;
    }

    const SPRITE_ASSET_PATHS = {
      player: { src: "assets/AGENTE.png", targetSize: PLAYER_SPRITE_SIZE, trimAlpha: true },
      playerSheet: {
        src: "assets/sprites/player-operative-animated-tactical-cc0.png",
        fallbacks: ["assets/sprites/player-operative-animated-cc0.png"],
        sheetCols: 7,
        sheetRows: 1,
        targetHeight: PLAYER_SPRITE_SIZE
      },
      homelander: {
        src: "assets/sprites/homelander.png",
        targetSize: HOMELANDER_SPRITE_SIZE,
        trimAlpha: true
      },
      homelanderFly: {
        src: "assets/sprites/voando.png",
        targetSize: HOMELANDER_SPRITE_SIZE,
        trimAlpha: true
      },
      butcher: {
        src: "assets/sprites/Butcher.png",
        targetSize: BUTCHER_SPRITE_SIZE,
        trimAlpha: true
      },
      butcherDash: {
        src: "assets/sprites/dashbutcher.png",
        targetSize: BUTCHER_SPRITE_SIZE,
        trimAlpha: true
      },
      thor: {
        src: "assets/sprites/thor_parado.png",
        targetSize: THOR_SPRITE_SIZE,
        trimAlpha: true
      },
      thorFly: {
        src: "assets/sprites/thor_ voando.png",
        targetSize: THOR_SPRITE_SIZE,
        trimAlpha: true
      },
      mjolnir: {
        src: "assets/sprites/mjolnir.png",
        targetSize: MJOLNIR_SPRITE_SIZE,
        trimAlpha: true
      },
      guardPatrol: {
        src: "assets/sprites/agente.png",
        fallbacks: ["assets/sprites/GUARDA.png", "assets/GUARDA.png", "assets/guarda.png"],
        targetSize: ENTITY_SPRITE_SIZE + 18,
        trimAlpha: true
      },
      guardSuspicious: {
        src: "assets/sprites/agente.png",
        fallbacks: ["assets/sprites/GUARDA.png", "assets/GUARDA.png", "assets/guarda.png"],
        targetSize: ENTITY_SPRITE_SIZE + 18,
        trimAlpha: true
      },
      guardAlert: {
        src: "assets/sprites/agente.png",
        fallbacks: ["assets/sprites/GUARDA.png", "assets/GUARDA.png", "assets/guarda.png"],
        targetSize: ENTITY_SPRITE_SIZE + 18,
        trimAlpha: true
      },
      zombie: { src: "assets/sprites/zumbi.png", targetSize: ENTITY_SPRITE_SIZE + 11, trimAlpha: true },
      clown: { src: "assets/sprites/palhaco.png", targetSize: ENTITY_SPRITE_SIZE + 13, trimAlpha: true },
      nemesis: { src: "assets/sprites/nemesis.png", targetSize: 63, trimAlpha: true },
      weaponPistols: { src: "assets/sprites/weapons/pistols-cc0.png", scale: 1 },
      weaponShotguns: { src: "assets/sprites/weapons/shotguns-cc0.png", scale: 1 },
      weaponMachineGuns: { src: "assets/sprites/weapons/machine-guns-cc0.png", scale: 1 },
      weaponSniper: { src: "assets/sprites/weapons/sniper-cc0.png", scale: 1 },
      weaponNeonpunk: { src: "assets/sprites/weapons/neonpunk-cc0.png", scale: 1 },
      item: { src: "assets/dossier-case.svg", scale: 38 / 96 },
      exit: { src: "assets/exit-door.svg", scale: 56 / 128 },
      terminalOff: { src: "assets/terminal-off.svg", scale: 36 / 96 },
      terminalOn: { src: "assets/terminal-on.svg", scale: 36 / 96 }
    };

    // Colisao fica em player.y; sombra/ pes no chao ficam ~10px abaixo (ver drawEntities).
    const PLAYER_WORLD_FEET_OFFSET = 0;

    const PLAYER_OPERATIVE_SHEET = {
      sheetCols: 7,
      sheetRows: 1,
      targetHeight: PLAYER_SPRITE_SIZE,
      // Vista de cima no PNG; atan2 usa 0 rad = direita.
      facingOffset: Math.PI / 2,
      idle: [0],
      crouch: [0],
      walk: [0, 1, 2, 3, 4, 5, 6],
      run: [0, 2, 4, 6],
      attack: [6],
      shoot: 6
    };

    const FEET_ENTITY_ANCHOR = { x: 0.5, y: 0.94 };
    const PLAYER_SPRITE_ANCHOR = { x: 0.5, y: 0.5 };

    const SCENARIO_THEMES = [
      {
        id: "industrial",
        label: "Instalação Industrial",
        floorTexture: "assets/textures/floor-industrial-realistic.png",
        wallTexture: "assets/textures/floor-industrial-realistic.png",
        floorBase: [34, 55, 72],
        floorNoise: [10, 14, 15],
        wallBase: [14, 27, 44],
        wallNoise: [10, 14, 13],
        accent: [120, 220, 255],
        warning: [255, 199, 104],
        musicTrackIndex: 0,
        textureFloorAlpha: 0.16,
        textureWallAlpha: 0.18
      },
      {
        id: "lab",
        label: "Laboratório Tático",
        floorTexture: "assets/textures/floor-lab-realistic.png",
        wallTexture: "assets/textures/floor-lab-realistic.png",
        floorBase: [30, 62, 66],
        floorNoise: [9, 13, 10],
        wallBase: [16, 52, 61],
        wallNoise: [8, 11, 10],
        accent: [140, 255, 242],
        warning: [111, 255, 170],
        musicTrackIndex: 1,
        textureFloorAlpha: 0.18,
        textureWallAlpha: 0.16
      },
      {
        id: "office",
        label: "Complexo Corporativo",
        floorTexture: "assets/textures/floor-office-realistic.png",
        wallTexture: "assets/textures/floor-office-realistic.png",
        floorBase: [44, 46, 70],
        floorNoise: [10, 9, 11],
        wallBase: [20, 24, 50],
        wallNoise: [10, 10, 13],
        accent: [174, 183, 255],
        warning: [255, 194, 125],
        musicTrackIndex: 2,
        textureFloorAlpha: 0.14,
        textureWallAlpha: 0.16
      },
      {
        id: "reactor",
        label: "Reator Neon",
        floorTexture: "assets/textures/floor-reactor-realistic.png",
        wallTexture: "assets/textures/floor-reactor-realistic.png",
        floorBase: [30, 55, 50],
        floorNoise: [10, 14, 13],
        wallBase: [15, 42, 38],
        wallNoise: [11, 14, 11],
        accent: [105, 255, 196],
        warning: [251, 255, 143],
        musicTrackIndex: 3,
        textureFloorAlpha: 0.31,
        textureWallAlpha: 0.31
      },
      {
        id: "vault",
        label: "Cofre Carmesim",
        floorTexture: "assets/textures/floor-vault-realistic.png",
        wallTexture: "assets/textures/floor-vault-realistic.png",
        floorBase: [58, 40, 52],
        floorNoise: [12, 9, 10],
        wallBase: [33, 15, 24],
        wallNoise: [13, 10, 11],
        accent: [255, 141, 163],
        warning: [255, 217, 121],
        musicTrackIndex: 0,
        textureFloorAlpha: 0.29,
        textureWallAlpha: 0.3
      },
      {
        id: "night",
        label: "Operação Noturna",
        floorTexture: "assets/textures/floor-security-realistic.png",
        wallTexture: "assets/textures/floor-security-realistic.png",
        floorBase: [20, 31, 45],
        floorNoise: [7, 9, 12],
        wallBase: [8, 16, 29],
        wallNoise: [6, 8, 12],
        accent: [119, 175, 255],
        warning: [166, 225, 255],
        musicTrackIndex: 4,
        weather: "night",
        textureFloorAlpha: 0.22,
        textureWallAlpha: 0.28
      },
      {
        id: "storm",
        label: "Tempestade",
        floorTexture: "assets/textures/floor-corridor-realistic.png",
        wallTexture: "assets/textures/floor-corridor-realistic.png",
        floorBase: [24, 36, 48],
        floorNoise: [8, 10, 12],
        wallBase: [12, 22, 34],
        wallNoise: [7, 9, 11],
        accent: [126, 198, 255],
        warning: [255, 214, 128],
        musicTrackIndex: 4,
        weather: "rain",
        textureFloorAlpha: 0.2,
        textureWallAlpha: 0.26
      },
      {
        id: "snow",
        label: "Base Nevada",
        floorTexture: "assets/textures/floor-clinic-realistic.png",
        wallTexture: "assets/textures/floor-clinic-realistic.png",
        floorBase: [86, 108, 120],
        floorNoise: [13, 14, 16],
        wallBase: [35, 55, 70],
        wallNoise: [8, 10, 12],
        accent: [210, 244, 255],
        warning: [151, 224, 255],
        musicTrackIndex: 5,
        weather: "snow",
        textureFloorAlpha: 0.18,
        textureWallAlpha: 0.24
      },
      {
        id: "beach",
        label: "Praia Vigiada",
        floorTexture: "assets/textures/floor-corridor-realistic.png",
        wallTexture: "assets/textures/floor-corridor-realistic.png",
        floorBase: [124, 110, 75],
        floorNoise: [20, 18, 12],
        wallBase: [41, 59, 70],
        wallNoise: [11, 12, 12],
        accent: [99, 223, 238],
        warning: [255, 223, 137],
        musicTrackIndex: 6,
        weather: "beach",
        textureFloorAlpha: 0.12,
        textureWallAlpha: 0.18
      },
      {
        id: "autumn",
        label: "Setor Outono",
        floorTexture: "assets/textures/floor-archive-realistic.png",
        wallTexture: "assets/textures/floor-archive-realistic.png",
        floorBase: [70, 72, 48],
        floorNoise: [18, 15, 11],
        wallBase: [33, 39, 37],
        wallNoise: [11, 10, 9],
        accent: [236, 183, 104],
        warning: [141, 217, 153],
        musicTrackIndex: 7,
        weather: "autumn",
        textureFloorAlpha: 0.18,
        textureWallAlpha: 0.22
      },
      {
        id: "summer",
        label: "Complexo Verão",
        floorTexture: "assets/textures/floor-loading-realistic.png",
        wallTexture: "assets/textures/floor-loading-realistic.png",
        floorBase: [49, 84, 77],
        floorNoise: [14, 19, 16],
        wallBase: [30, 43, 49],
        wallNoise: [12, 12, 12],
        accent: [255, 230, 128],
        warning: [95, 229, 193],
        musicTrackIndex: 8,
        weather: "summer",
        textureFloorAlpha: 0.2,
        textureWallAlpha: 0.22
      },
      {
        id: "outbreak",
        label: "Zona Zumbi",
        floorTexture: "assets/textures/floor-outbreak-realistic.png",
        wallTexture: "assets/textures/floor-outbreak-realistic.png",
        floorBase: [42, 55, 46],
        floorNoise: [12, 15, 10],
        wallBase: [18, 30, 27],
        wallNoise: [9, 11, 8],
        accent: [143, 255, 177],
        warning: [255, 111, 111],
        musicTrackIndex: 4,
        weather: "fog",
        enemyKind: "zombie",
        textureFloorAlpha: 0.24,
        textureWallAlpha: 0.25
      }
    ];

    let scenarioTheme = SCENARIO_THEMES[0];
    const environmentTextures = {
      floorByTheme: Object.create(null),
      wallByTheme: Object.create(null),
      floorPattern: null,
      wallPattern: null
    };

    const touchInput = {
      enabled: false,
      joyPointerId: null,
      moveX: 0,
      moveY: 0,
      run: false,
      crouch: false,
      interactTap: false,
      lureTap: false,
      reloadTap: false,
      shootTap: false,
      shoot: false,
      hammerTap: false,
      hammer: false,
      switchWeaponTap: false,
      startTap: false
    };

    let viewportResyncToken = 0;

    // Controle por mouse (modo PC): mira pela posicao do cursor, clique esquerdo
    // atira/laser, clique direito corre/voa.
    const mouseInput = {
      aimActive: false,
      worldX: 0,
      worldY: 0,
      shoot: false,
      shootTap: false,
      run: false
    };

    let gamePauseOpen = false;
    let mobilePauseResumeTap = { t: 0, count: 0 };
    let showControlsHelp = false;
    let tutorialStep = -1;
    let tutorialActive = false;
    let stealthFeedbackText = "";
    let stealthFeedbackT = 0;
    let survivorStatsOverlayT = 0;
    let midRunSaveTimer = 0;
    const Meta = () => window.__StealthOpsMeta || null;

    const audio = {
      ctx: null,
      master: null,
      sfx: null,
      music: null,
      unlocked: false,
      musicTimer: null,
      musicStep: 0,
      musicThemeIndex: 0,
      musicTempoMs: 0,
      bgmTracks: [],
      activeBgmTrack: -1,
      activeBgmContext: "",
      bgmAdvancePending: false,
      bgmFadeTrack: -1,
      bgmFadeStartMs: 0,
      bgmFadeDurationMs: 0,
      sfxBank: Object.create(null),
      sfxLoaded: false,
      loopingSfx: Object.create(null)
    };

    const BGM_FILES = [
      "assets/audio/bgm1.mp3",
      "assets/audio/bgm2.mp3",
      "assets/audio/bgm3.mp3",
      "assets/audio/bgm4.mp3",
      "assets/audio/music-night-cc0.ogg",
      "assets/audio/music-snow-cc0.ogg",
      "assets/audio/music-beach-cc0.mp3",
      "assets/audio/music-autumn-cc0.mp3",
      "assets/audio/music-summer-cc0.mp3",
      "assets/audio/music-clown-creepy-cc0.wav",
      "assets/audio/music-zombie-lost-cc0.ogg",
      "assets/audio/music-zombie-heartbeat-cc0.ogg",
      "assets/audio/music-clown-creepy-loop-cc0.ogg",
      "assets/audio/music-clown-carnival-cc0.ogg",
      {
        primary: "assets/audio/Resident Evil 3_ Nemesis - Feel the Tension.mp3",
        fallbacks: ["assets/audio/music-nemesis-tension-cc0.mp3"]
      },
      {
        primary: "assets/audio/Resident Evil 3_ Nemesis - Nemesis' Theme.mp3",
        fallbacks: ["assets/audio/music-nemesis-chase-cc0.wav"]
      },
      "assets/audio/menu.mp3",
      "assets/audio/homelander.mp3",
      "assets/audio/butcher.mp3",
      "assets/audio/androit.mp3",
      "assets/audio/voo.mp3",
      BGM_PACK + "mode-agent-01.mp3",
      BGM_PACK + "mode-agent-02.mp3",
      BGM_PACK + "mode-agent-03.mp3",
      BGM_PACK + "mode-agent-04.mp3",
      BGM_PACK + "mode-agent-05.mp3",
      BGM_PACK + "mode-agent-06.mp3",
      BGM_PACK + "mode-agent-07.mp3",
      BGM_PACK + "mode-zombie-01.mp3",
      BGM_PACK + "mode-zombie-02.mp3",
      BGM_PACK + "mode-zombie-03.mp3",
      BGM_PACK + "mode-zombie-04.mp3",
      BGM_PACK + "mode-zombie-05.mp3",
      BGM_PACK + "mode-zombie-06.mp3",
      BGM_PACK + "mode-zombie-07.mp3",
      BGM_PACK + "mode-clown-01.mp3",
      BGM_PACK + "mode-clown-02.mp3",
      BGM_PACK + "mode-clown-03.mp3",
      BGM_PACK + "mode-clown-04.mp3",
      BGM_PACK + "mode-clown-05.mp3",
      BGM_PACK + "mode-clown-06.mp3",
      BGM_PACK + "survival-rock-01.mp3",
      BGM_PACK + "survival-rock-02.mp3",
      BGM_PACK + "survival-rock-03.mp3",
      BGM_PACK + "survival-rock-04.mp3",
      BGM_PACK + "survival-rock-05.mp3",
      BGM_PACK + "survival-rock-06.mp3",
      BGM_PACK + "survival-rock-07.mp3",
      BGM_PACK + "survival-rock-08.mp3",
      BGM_PACK + "survival-rock-09.mp3",
      BGM_PACK + "survival-rock-10.mp3",
      "assets/audio/rock kiss.mp3",
      "assets/audio/me crazy.mp3"
    ];

    const DEFAULT_BGM_COUNT = 4;
    const MENU_BGM_TRACK_INDEX = 16;
    const ROCK_KISS_BGM_TRACK_INDEX = 51;
    const ME_CRAZY_BGM_TRACK_INDEX = 52;
    const HOMELANDER_BGM_TRACK_INDEX = 17;
    const BUTCHER_BGM_TRACK_INDEX = 18;
    const THOR_BGM_TRACK_INDEX = 19;
    const VOO_BGM_TRACK_INDEX = 20;
    const SUPER_BGM_POOLS = {
      homelander: [HOMELANDER_BGM_TRACK_INDEX, VOO_BGM_TRACK_INDEX, 21, 22, 41, 42, 43, ROCK_KISS_BGM_TRACK_INDEX, ME_CRAZY_BGM_TRACK_INDEX],
      butcher: [BUTCHER_BGM_TRACK_INDEX, 14, 15, 44, 45, 46, 23, ROCK_KISS_BGM_TRACK_INDEX, ME_CRAZY_BGM_TRACK_INDEX],
      thor: [THOR_BGM_TRACK_INDEX, 47, 48, 49, 24, 25, ROCK_KISS_BGM_TRACK_INDEX, ME_CRAZY_BGM_TRACK_INDEX]
    };
    const SUPER_BGM_TRACK_INDICES = Object.values(SUPER_BGM_POOLS).flat()
      .filter((idx, pos, arr) => arr.indexOf(idx) === pos);
    const MENU_BGM_TRACK_INDICES = [MENU_BGM_TRACK_INDEX, ROCK_KISS_BGM_TRACK_INDEX, ME_CRAZY_BGM_TRACK_INDEX];
    const ROTATING_BGM_TRACK_INDICES = SUPER_BGM_TRACK_INDICES
      .concat(MENU_BGM_TRACK_INDICES)
      .concat(AGENT_BGM_TRACK_INDICES)
      .concat(ZOMBIE_BGM_TRACK_INDICES)
      .concat(CLOWN_BGM_TRACK_INDICES)
      .concat(SURVIVAL_BGM_TRACK_INDICES)
      .concat([NEMESIS_TENSION_BGM_TRACK_INDEX, NEMESIS_CHASE_BGM_TRACK_INDEX])
      .filter((idx, pos, arr) => arr.indexOf(idx) === pos);

    const SFX_FILES = {
      gunShot: { src: "assets/audio/gun-shot.mp3", volume: 0.92 },
      gunPistolClean: { src: "assets/audio/gun-pistol-clean.wav", volume: 0.84 },
      gunSmgClean: { src: "assets/audio/gun-smg-clean.wav", volume: 0.76 },
      gunMagnumClean: { src: "assets/audio/gun-magnum-clean.wav", volume: 0.88 },
      gunRifleClean: { src: "assets/audio/gun-rifle-clean.wav", volume: 0.82 },
      gunShotgunClean: { src: "assets/audio/gun-shotgun-clean.wav", volume: 0.9 },
      gunSilencedClean: { src: "assets/audio/gun-silenced-clean.wav", volume: 0.72 },
      gunLaserClean: { src: "assets/audio/gun-laser-clean.wav", volume: 0.64 },
      gunImpact: { src: "assets/audio/gun-impact.mp3", volume: 0.34 },
      gunClick: { src: "assets/audio/gun-click.mp3", volume: 0.35 },
      knifeSlice: { src: "assets/audio/knife-slice.mp3", volume: 0.78 },
      knifeHit: { src: "assets/audio/knife-hit.mp3", volume: 0.84 },
      humanDeath1: { src: "assets/audio/human-death-1-cc0.wav", volume: 0.78 },
      humanDeath2: { src: "assets/audio/human-death-2-cc0.wav", volume: 0.78 },
      zombieMoans: { src: "assets/audio/zombie-moans-cc0.ogg", volume: 0.42 },
      zombieDeath1: { src: "assets/audio/zombie-death-1-cc0.wav", volume: 0.72 },
      zombieDeath2: { src: "assets/audio/zombie-death-2-cc0.wav", volume: 0.72 },
      zombieYell1: { src: "assets/audio/zombie-yell-1-cc0.wav", volume: 0.64 },
      zombieYell2: { src: "assets/audio/zombie-yell-2-cc0.wav", volume: 0.64 },
      zombieYell3: { src: "assets/audio/zombie-yell-3-cc0.wav", volume: 0.64 },
      clownLaugh: { src: "assets/audio/clown-laugh-cc0.ogg", volume: 0.86 },
      clownDeathHorror: { src: "assets/audio/clown-death-horror-cc0.wav", volume: 0.72 },
      footstepWalk: { src: "assets/audio/footsteps-walk.mp3", volume: 0.22, loop: true },
      footstepRun: { src: "assets/audio/footsteps-run.mp3", volume: 0.32, loop: true },
      superLaser: { src: "assets/audio/super-laser.wav", volume: 0.78, loop: true },
      fly: { src: "assets/audio/voo.mp3", volume: 0.6, loop: false },
      doorOpen: { src: "assets/audio/door-open-cc0.wav", volume: 0.55 },
      gunReload: { src: "assets/audio/gun-reload-cc0.wav", volume: 0.72 },
      tentacleWhip: { src: "assets/audio/swish-heavy-cc0.wav", volume: 0.62 },
      tentacleSquish: { src: "assets/audio/slime-squish-cc0.wav", volume: 0.58 },
      chicote: { src: "assets/sprites/chicote.mp3", volume: 0.9 },
      nemesisScream1: { src: "assets/sprites/nemesis_scream.mp3", volume: 0.95 },
      nemesisScream2: { src: "assets/sprites/nemesis_scream2.mp3", volume: 0.95 },
      laserThor: { src: "assets/sprites/laser_thor.mp3", volume: 0.96, loop: true },
      laserSuper: { src: "assets/sprites/laser.mp3", volume: 0.86, loop: true },
      survivalBlast: { src: "assets/audio/superpower-5-cc0.ogg", volume: 0.55 },
      survivalZap: { src: "assets/audio/superpower-12-cc0.ogg", volume: 0.5 },
      survivalWhoosh: { src: "assets/audio/superpower-31-cc0.ogg", volume: 0.48 },
      nemesisStars: { src: "assets/sprites/nemesis_scream2.mp3", volume: 0.72 },
      mjolnirSpin: { src: "assets/audio/mjolnir-spin-loop.wav", volume: 0.54, loop: true },
      mjolnirFly: { src: "assets/audio/mjolnir-fly-loop.wav", volume: 0.57, loop: true },
      mjolnirThrow: { src: "assets/audio/mjolnir-throw.wav", volume: 0.68 },
      mjolnirImpact: { src: "assets/audio/mjolnir-impact.wav", volume: 0.65 },
      mjolnirCatch: { src: "assets/audio/mjolnir-catch.wav", volume: 0.5 },
      mjolnirLightning: { src: "assets/audio/mjolnir-lightning.wav", volume: 0.38 },
      thorStorm: { src: "assets/audio/thor-storm-loop.wav", volume: 0.46, loop: true },
      thorStormStrike: { src: "assets/audio/thor-storm-strike.wav", volume: 0.6 },
      giromjolnir: { src: "assets/audio/giromjolnir.mp3", volume: 0.58, loop: true },
      chaomjolnir: { src: "assets/audio/chaomjolnir.mp3", volume: 0.72 },
      hitmjolnir: { src: "assets/audio/hitmjolnir.mp3", volume: 0.68 },
      destruicaomjolnir: { src: "assets/audio/destruicaomjolnir.mp3", volume: 0.65 },
      raio1: { src: "assets/audio/raio1.mp3", volume: 0.62 },
      raio2: { src: "assets/audio/raio2.mp3", volume: 0.62 }
    };

    const screenShake = {
      t: 0,
      duration: 0,
      strength: 0,
      x: 0,
      y: 0
    };

    const FULLSCREEN_ON_LABEL = "Sair Tela Cheia";
    const FULLSCREEN_OFF_LABEL = "Tela Cheia";

    const TOUCH_LABELS = {
      lure: "Isca",
      use: "Usar",
      crouch: "Agachar",
      shoot: "Atirar",
      punch: "Soco",
      knife: "Faca",
      fullscreenOn: "Sair",
      fullscreenOff: "Tela",
      hlFly: "Voo",
      hlLaser: "Laser",
      hlMilk: "Leite",
      hlDash: "Dash",
      hlTentacles: "Tentáculos",
      hlShock: "Choque",
      hlCompound: "V",
      hlLightning: "Raios",
      reload: "Rec.",
      switchKnife: "Faca",
      switchWeapon: "Arma"
    };

    const AUDIO_FALLBACK_BGM_FILES = [];

    const MUSIC_THEMES = [
      {
        tempoMs: 460,
        chordRoots: [45, 43, 41, 40],
        chordShape: [0, 3, 7],
        melodyOffsets: [12, 10, 7, 10, 12, 14, 15, 14],
        chordWave: "triangle",
        leadWave: "sine",
        chordVol: 0.075,
        leadVol: 0.06
      },
      {
        tempoMs: 430,
        chordRoots: [48, 46, 43, 45],
        chordShape: [0, 4, 7],
        melodyOffsets: [12, 11, 9, 11, 14, 16, 14, 12],
        chordWave: "sine",
        leadWave: "triangle",
        chordVol: 0.068,
        leadVol: 0.055
      },
      {
        tempoMs: 500,
        chordRoots: [40, 38, 36, 35],
        chordShape: [0, 3, 6],
        melodyOffsets: [10, 8, 6, 8, 10, 13, 10, 8],
        chordWave: "sawtooth",
        leadWave: "triangle",
        chordVol: 0.058,
        leadVol: 0.05
      },
      {
        tempoMs: 390,
        chordRoots: [43, 40, 45, 41],
        chordShape: [0, 5, 8],
        melodyOffsets: [12, 15, 12, 10, 12, 17, 15, 12],
        chordWave: "triangle",
        leadWave: "square",
        chordVol: 0.07,
        leadVol: 0.045
      }
    ];

    let levelRandom = Math.random;
    let hintCooldown = 0;
    let lastCanvasCssW = 0;
    let lastCanvasCssH = 0;
    let lastCardioVisual = "";
    let renderQuality = "high";
    let smoothFps = 60;
    const camera = {
      x: WORLD_W * 0.5,
      y: WORLD_H * 0.5,
      zoom: 1,
      ready: false
    };
    const uiFeedback = {
      prompt: "",
      interactText: "",
      interactTimer: 0,
      interactKind: "ok"
    };
    const mapCache = {
      canvas: null,
      ctx: null,
      dirty: true,
      quality: "",
      themeId: "",
      level: 0,
      seed: ""
    };

    function clamp(v, a, b) {
      return Math.max(a, Math.min(b, v));
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function qualityRank(level) {
      if (level === "low") return 0;
      if (level === "medium") return 1;
      return 2;
    }

    function qualityAtLeast(level) {
      return qualityRank(renderQuality) >= qualityRank(level);
    }

    function maxFxShards() {
      let cap = qualityAtLeast("high") ? 420 : (qualityAtLeast("medium") ? 320 : 220);
      if (isSuperCharacter() && superCombatHeavy()) cap = Math.min(cap, 240);
      return cap;
    }

    let superShakeAccum = 0;
    let superKillSfxBudget = 6;
    let survivalAmbientVoiceT = 0;
    let nemesisStarsVoiceCd = 0;
    let nemesisScreamCd = 0;
    let nemesisScreamPick = 0;
    const survivalAbilitySfxT = {};
    let mjolnirLightningSfxT = 0;
    let mjolnirHitSfxT = 0;
    let mjolnirDestroySfxT = 0;
    let thorRaioPick = 0;

    // Carga alta nos modos super: laser/voo ativos, horda grande ou FPS baixo.
    function superCombatHeavy() {
      return isSuperCharacter() && (
        player.laserActive ||
        player.flying ||
        guards.length > 18 ||
        smoothFps < 48 ||
        !qualityAtLeast("high") ||
        isBrowserMobilePlay()
      );
    }

    function shakeSuperScreen(strength, duration, dt) {
      superShakeAccum += dt;
      const every = superCombatHeavy() ? 0.085 : 0.045;
      if (superShakeAccum < every) return;
      superShakeAccum = 0;
      shakeScreen(strength, duration);
    }

    function playSuperKillSfx(g) {
      if (superKillSfxBudget <= 0) return;
      superKillSfxBudget -= 1;
      if (isZombieKind(g.kind)) sfxZombieDeath();
      else if (isClownKind(g.kind)) sfxClownDeath();
      else sfxDeathScream();
    }

    function isEnemyMode(value) {
      return Object.prototype.hasOwnProperty.call(ENEMY_MODES, value);
    }

    function getEnemyModeConfig(modeId = settings.enemyMode) {
      return ENEMY_MODES[isEnemyMode(modeId) ? modeId : "agent"];
    }

    function isDifficultyMode(value) {
      return Object.prototype.hasOwnProperty.call(DIFFICULTY_MODES, value);
    }

    function isCharacterId(value) {
      return value === "operative" || value === "homelander" || value === "butcher" || value === "thor";
    }

    function isRunType(value) {
      return value === "campaign" || value === "survivor";
    }

    function isScenarioMode(value) {
      return value === "agent" || value === "zombie" || value === "clown";
    }

    function getDifficultyConfig(modeId = null) {
      const key = isDifficultyMode(modeId)
        ? modeId
        : (run.active && isDifficultyMode(run.difficultyMode) ? run.difficultyMode : settings.difficultyMode);
      return DIFFICULTY_MODES[isDifficultyMode(key) ? key : "operation"];
    }

    function getDifficultyLabel() {
      return getDifficultyConfig().label;
    }

    function hasUnlimitedRespawns() {
      return !Number.isFinite(getDifficultyConfig().lives);
    }

    function getStartingLives() {
      const lives = getDifficultyConfig(settings.difficultyMode).lives;
      return Number.isFinite(lives) ? Math.max(1, Math.floor(lives)) : 999;
    }

    function getEnemyKindForSettings() {
      const modeId = isScenarioMode(settings.enemyMode) ? settings.enemyMode : "agent";
      return getEnemyModeConfig(modeId).kind;
    }

    function isHomelanderMode() {
      return getSelectedCharacter() === "homelander";
    }

    function isButcherMode() {
      return getSelectedCharacter() === "butcher";
    }

    function isThorMode() {
      return getSelectedCharacter() === "thor";
    }

    function isSuperMode(modeId = settings.enemyMode) {
      const cfg = getEnemyModeConfig(modeId);
      return cfg.character === "homelander" || cfg.character === "butcher" || cfg.character === "thor";
    }

    function getSelectedCharacter() {
      if (isCharacterId(settings.character)) return settings.character;
      if (isSuperMode(settings.enemyMode)) return getEnemyModeConfig(settings.enemyMode).character;
      return "operative";
    }

    function isHomelanderCharacter() {
      return isHomelanderMode();
    }

    function isButcherCharacter() {
      return isButcherMode();
    }

    function isThorCharacter() {
      return isThorMode();
    }

    function isSuperCharacter() {
      return getSelectedCharacter() !== "operative";
    }

    function isOperativeCampaign() {
      return !isSuperCharacter() && settings.runType === "campaign" && run.active;
    }

    function isCampaignRun() {
      return settings.runType === "campaign" && run.active;
    }

    function campaignDifficultyTier() {
      if (!isCampaignRun()) return 0;
      return Math.max(0, run.level - 1);
    }

    function campaignEnemyDamageMul() {
      if (!isCampaignRun()) return 1;
      return 1 + campaignDifficultyTier() * 0.07;
    }

    function campaignEnemyHpMul() {
      if (!isCampaignRun()) return 1;
      return 1 + campaignDifficultyTier() * 0.08;
    }

    function campaignEnemySpeedMul() {
      if (!isCampaignRun()) return 1;
      return 1 + campaignDifficultyTier() * 0.012;
    }

    function scaledEnemyDamage(amount) {
      return (amount || 1) * campaignEnemyDamageMul();
    }

    const CAMPAIGN_OBJECTIVE_TYPES = {
      hack: { label: "Terminal", hold: 0, score: 120 },
      sabotage: { label: "Sabotagem", hold: 2.6, score: 180 },
      upload: { label: "Upload seguro", hold: 4.0, score: 230 },
      defend: { label: "Defesa", hold: 3.2, score: 280, alertRadius: 300 },
      relay: { label: "Relay", hold: 1.8, score: 170 }
    };

    function pickCampaignObjectiveType(levelNo, index, total, useSequence) {
      if (levelNo <= 2) return "hack";
      if (!useSequence) {
        if (levelNo <= 4) return index % 2 ? "sabotage" : "hack";
        if (levelNo <= 6) return ["hack", "sabotage", "upload"][index % 3];
        if (levelNo <= 9) return ["hack", "sabotage", "upload", "defend"][index % 4];
        return ["sabotage", "upload", "defend", "upload"][index % 4];
      }
      if (index === 0) return "hack";
      if (index === total - 1 && levelNo >= 10) return "defend";
      return levelNo >= 8 ? (index % 2 ? "upload" : "sabotage") : "sabotage";
    }

    function buildCampaignObjectiveCells(levelNo, rooms, startRoom, itemRoom, exitRoom, g) {
      const isCampaign = !isSurvivalRun();
      const objectiveCount = isCampaign
        ? clamp(2 + Math.floor(levelNo / 2), 2, 8)
        : clamp(2 + Math.floor(levelNo / 3), 2, 5);
      const useSequence = isCampaign && levelNo >= 6 && objectiveCount >= 3;
      const objectiveRooms = rooms.filter((r) => r !== startRoom && r !== itemRoom && r !== exitRoom);
      const pool = objectiveRooms.slice();
      const objectiveCells = [];
      for (let i = 0; i < objectiveCount && pool.length > 0; i++) {
        const idx = randInt(0, pool.length - 1);
        const room = pool.splice(idx, 1)[0];
        const cell = randomCellInRoom(room, g);
        if (!cell) continue;
        const type = pickCampaignObjectiveType(levelNo, i, objectiveCount, useSequence);
        const def = CAMPAIGN_OBJECTIVE_TYPES[type] || CAMPAIGN_OBJECTIVE_TYPES.hack;
        objectiveCells.push({
          x: cell.x,
          y: cell.y,
          type,
          seq: useSequence ? i : 0,
          holdNeed: def.hold || 0,
          label: def.label,
          scoreBonus: def.score || 120,
          alertRadius: def.alertRadius || 0
        });
      }
      return objectiveCells;
    }

    function canStartObjective(o) {
      if (!o || o.done || !o.seq) return true;
      for (const other of objectives) {
        if (other.seq < o.seq && !other.done) return false;
      }
      return true;
    }

    function completeObjective(o) {
      if (!o || o.done) return;
      o.done = true;
      o.holdT = 0;
      o.holdStarted = false;
      run.score += (o.scoreBonus || 120) + run.level * 12;
      sfxHack();
      updateMissionHint();
      setInteractionFeedback((o.label || "Objetivo") + " concluído", "ok", 0.55);
    }

    function updateObjectives(dt) {
      if (isSurvivalRun() || mode !== MODE_PLAYING) return;
      for (const o of objectives) {
        if (o.done || !canStartObjective(o)) continue;
        const near = dist(player.x, player.y, o.x, o.y) < 24;
        const holdNeed = o.holdNeed || 0;
        if (!near) {
          if (o.holdT) o.holdT = Math.max(0, o.holdT - dt * 1.6);
          if (!o.holdT) o.holdStarted = false;
          continue;
        }
        if (holdNeed <= 0) {
          completeObjective(o);
          continue;
        }
        if (!o.holdStarted) {
          o.holdStarted = true;
          if (o.alertRadius) {
            broadcastNoise(o.x, o.y, o.alertRadius, 0.75);
            pushHint("Alerta local! Inimigos podem convergir.", 1.1);
          }
        }
        o.holdT = (o.holdT || 0) + dt;
        if (o.holdT >= holdNeed) completeObjective(o);
      }
    }

    function getScenarioWeather() {
      return (scenarioTheme && scenarioTheme.weather) || "";
    }

    function getWeatherVisionConfig() {
      const weather = getScenarioWeather();
      if (weather === "night") return { darkness: 0.66, radius: 124, edge: 0.42 };
      if (weather === "rain") return { darkness: 0.34, radius: 168, edge: 0.5 };
      if (weather === "fog") return { darkness: 0.42, radius: 148, edge: 0.46 };
      return null;
    }

    function drawWeatherVisionLimit() {
      if (isSuperCharacter() || mode !== MODE_PLAYING || !player.alive) return;
      const cfg = getWeatherVisionConfig();
      if (!cfg) return;
      const vb = getVisibleWorldBounds(48);
      const px = player.x;
      const py = player.y;
      const radius = cfg.radius * (player.crouch ? 0.82 : (player.running ? 1.08 : 1));
      const grd = ctx.createRadialGradient(px, py, radius * 0.08, px, py, radius);
      grd.addColorStop(0, "rgba(0,0,0,0)");
      grd.addColorStop(cfg.edge, "rgba(0,8,18," + (cfg.darkness * 0.42) + ")");
      grd.addColorStop(1, "rgba(0,4,12," + cfg.darkness + ")");
      ctx.save();
      ctx.fillStyle = grd;
      ctx.fillRect(vb.minX, vb.minY, vb.maxX - vb.minX, vb.maxY - vb.minY);
      ctx.restore();
    }

    const DEATH_GORE_SCALE = 0.52;

    function superCharacterName() {
      if (isButcherCharacter()) return "Butcher";
      if (isThorCharacter()) return "Thor";
      return "Homelander";
    }

    function superHealItemName() {
      if (isThorCharacter()) return "raios";
      return isButcherCharacter() ? "Composto V" : "leite";
    }

    function superHealItemLabel() {
      if (isThorCharacter()) return "Raios";
      return isButcherCharacter() ? "Composto V" : "Leite";
    }

    function superMoveAbilityLabel() {
      return isButcherCharacter() ? "Dash" : "Voo";
    }

    function superMoveCooldownSeconds() {
      const basic = isSurvivalRun() ? survivalAbilityLevel("basicMove") : 0;
      const survivalMul = isSurvivalRun() ? 1.85 : 1;
      const upgradeMul = Math.max(0.62, 1 - basic * 0.075);
      if (isButcherCharacter()) return BUTCHER_DASH_COOLDOWN * survivalMul * upgradeMul;
      if (isThorCharacter()) return THOR_FLY_COOLDOWN * survivalMul * upgradeMul;
      return HOMELANDER_FLY_COOLDOWN * survivalMul * upgradeMul;
    }

    function superLaserCooldownSeconds() {
      const basic = isSurvivalRun() ? survivalAbilityLevel("basicLaser") : 0;
      const survivalMul = isSurvivalRun() ? 1.9 : 1;
      return HOMELANDER_LASER_COOLDOWN * survivalMul * Math.max(0.64, 1 - basic * 0.07);
    }

    function thorMjolnirCooldownSeconds() {
      const basic = isSurvivalRun() ? survivalAbilityLevel("basicLaser") : 0;
      const survivalMul = isSurvivalRun() ? 1.65 : 1;
      return THOR_MJOLNIR_COOLDOWN * survivalMul * Math.max(0.62, 1 - basic * 0.075);
    }

    function butcherTentacleCooldownSeconds() {
      const basic = isSurvivalRun() ? survivalAbilityLevel("basicMove") : 0;
      const survivalMul = isSurvivalRun() ? 1.55 : 1;
      return BUTCHER_TENTACLE_COOLDOWN * survivalMul * Math.max(0.62, 1 - basic * 0.07);
    }

    function homelanderShockCooldownSeconds() {
      const basic = isSurvivalRun() ? survivalAbilityLevel("basicMove") : 0;
      const survivalMul = isSurvivalRun() ? 1.55 : 1;
      return HOMELANDER_SHOCK_COOLDOWN * survivalMul * Math.max(0.62, 1 - basic * 0.07);
    }

    function thorStormActive() {
      return isThorCharacter() && player.berserkT > 0;
    }

    function isZombieKind(kind) {
      return kind === "zombie";
    }

    function isClownKind(kind) {
      return kind === "clown";
    }

    function isNemesisKind(kind) {
      return kind === "nemesis";
    }

    function isMeleeEnemyKind(kind) {
      return isZombieKind(kind) || isClownKind(kind) || isNemesisKind(kind);
    }

    function shouldSpawnNemesisBoss(_kind, levelNo) {
      const lvl = Math.max(1, Math.floor(levelNo) || 1);
      return lvl >= 4 && lvl % 4 === 0;
    }

    function enemyName(kind) {
      if (isNemesisKind(kind)) return "Nemesis";
      if (isZombieKind(kind)) return "Zumbi";
      if (isClownKind(kind)) return "Palhaço";
      return "Guarda";
    }

    function enemyThreatName(kind) {
      if (isNemesisKind(kind)) return "Nemesis";
      if (isZombieKind(kind)) return "Ameaça zumbi";
      if (isClownKind(kind)) return "Palhaço hostil";
      return "Alvo";
    }

    function createDefaultInventory() {
      const owned = Object.create(null);
      const upgrades = Object.create(null);
      for (const def of SHOP_ITEM_DEFS) {
        if (def.ownedDefault) owned[def.id] = true;
        upgrades[def.id] = Object.create(null);
        for (const up of def.upgrades || []) {
          upgrades[def.id][up.id] = 0;
        }
      }
      return { selectedItem: "knife", owned, upgrades };
    }

    function getShopItemDef(itemId) {
      return SHOP_ITEM_DEFS.find((def) => def.id === itemId) || SHOP_ITEM_DEFS[0];
    }

    function normalizeInventory(input) {
      const inv = createDefaultInventory();
      if (!input || typeof input !== "object") return inv;

      if (input.owned && typeof input.owned === "object") {
        for (const def of SHOP_ITEM_DEFS) {
          if (input.owned[def.id] || def.ownedDefault) inv.owned[def.id] = true;
        }
      }

      if (input.upgrades && typeof input.upgrades === "object") {
        for (const def of SHOP_ITEM_DEFS) {
          const row = input.upgrades[def.id];
          if (!row || typeof row !== "object") continue;
          for (const up of def.upgrades || []) {
            const lvl = Number(row[up.id]);
            inv.upgrades[def.id][up.id] = Number.isFinite(lvl)
              ? Math.max(0, Math.min(up.max, Math.floor(lvl)))
              : 0;
          }
        }
      }

      const selected = typeof input.selectedItem === "string" ? input.selectedItem : "knife";
      inv.selectedItem = inv.owned[selected] ? selected : "knife";
      return inv;
    }

    function isShopItemOwned(itemId) {
      return !!(progress.inventory && progress.inventory.owned && progress.inventory.owned[itemId]);
    }

    function getUpgradeDef(itemId, upgradeId) {
      const def = getShopItemDef(itemId);
      return (def.upgrades || []).find((up) => up.id === upgradeId) || null;
    }

    function getUpgradeLevel(itemId, upgradeId) {
      const inv = progress.inventory || createDefaultInventory();
      const row = inv.upgrades && inv.upgrades[itemId];
      const value = row ? Number(row[upgradeId]) : 0;
      const up = getUpgradeDef(itemId, upgradeId);
      const max = up ? up.max : 0;
      return Number.isFinite(value) ? Math.max(0, Math.min(max, Math.floor(value))) : 0;
    }

    function getUpgradeCost(itemId, upgradeId) {
      const up = getUpgradeDef(itemId, upgradeId);
      if (!up) return null;
      const lvl = getUpgradeLevel(itemId, upgradeId);
      if (lvl >= up.max) return null;
      return Number(up.costs[lvl]) || null;
    }

    function setShopFeedback(text) {
      if (shopFeedback) shopFeedback.textContent = text;
    }

    function selectLoadoutItem(itemId) {
      const def = getShopItemDef(itemId);
      if (!def || !isShopItemOwned(def.id)) return false;
      progress.inventory.selectedItem = def.id;
      saveProgress();
      renderShop();
      setShopFeedback(def.label + " selecionado para iniciar a fase.");
      return true;
    }

    function buyShopItem(itemId) {
      const def = getShopItemDef(itemId);
      if (!def) return;
      if (isShopItemOwned(def.id)) {
        selectLoadoutItem(def.id);
        return;
      }
      const cost = Math.max(0, Number(def.cost) || 0);
      if (progress.credits < cost) {
        setShopFeedback("Faltam " + (cost - progress.credits) + " créditos.");
        sfxFail();
        return;
      }
      progress.credits -= cost;
      progress.inventory.owned[def.id] = true;
      progress.inventory.selectedItem = def.id;
      saveProgress();
      renderShop();
      setShopFeedback(def.label + " comprado e equipado para o inicio.");
      sfxPickup();
    }

    function buyShopUpgrade(itemId, upgradeId) {
      const def = getShopItemDef(itemId);
      const up = getUpgradeDef(itemId, upgradeId);
      if (!def || !up || !isShopItemOwned(itemId)) return;
      const lvl = getUpgradeLevel(itemId, upgradeId);
      if (lvl >= up.max) return;
      const cost = getUpgradeCost(itemId, upgradeId);
      if (!Number.isFinite(cost)) return;
      if (progress.credits < cost) {
        setShopFeedback("Faltam " + (cost - progress.credits) + " créditos.");
        sfxFail();
        return;
      }
      progress.credits -= cost;
      progress.inventory.upgrades[itemId][upgradeId] = lvl + 1;
      saveProgress();
      renderShop();
      setShopFeedback(up.label + " de " + def.label + " melhorado.");
      sfxSuccess();
    }

    function getWeaponTemplateById(weaponId) {
      if (weaponId === GRENADE_LAUNCHER.id) return GRENADE_LAUNCHER;
      return WEAPON_TYPES.find((wt) => wt.id === weaponId) || WEAPON_TYPES[0];
    }

    function pickMapWeaponForLevel(levelNo) {
      const safeLevel = Math.max(1, Math.floor(levelNo) || 1);
      const pool = MAP_WEAPON_DEFS.filter((def) => !def.minLevel || safeLevel >= def.minLevel)
        .map((def) => {
          const wt = WEAPON_TYPES.find((weapon) => weapon.id === def.id);
          return wt ? { def, wt } : null;
        })
        .filter(Boolean);

      const totalWeight = pool.reduce((sum, entry) => sum + entry.def.weight, 0);
      let roll = rand() * Math.max(1, totalWeight);
      let chosen = pool[0];
      for (const entry of pool) {
        roll -= entry.def.weight;
        if (roll <= 0) {
          chosen = entry;
          break;
        }
      }

      const weapon = chosen ? chosen.wt : WEAPON_TYPES[0];
      const rarity = chosen ? chosen.def.rarity : "comum";
      return Object.assign({}, weapon, { mapOnly: true, rarity });
    }

    function rarityLabel(rarity) {
      if (rarity === "especial") return "Especial";
      if (rarity === "rara") return "Rara";
      return "Comum";
    }

    function rarityColor(rarity) {
      if (rarity === "especial") return "255,214,91";
      if (rarity === "rara") return "120,190,255";
      return "142,255,184";
    }

    function buildLoadoutWeapon(itemId) {
      const def = getShopItemDef(itemId);
      const base = getWeaponTemplateById(def.weaponId);
      const wt = Object.assign({}, base, {
        label: def.label,
        shopItemId: def.id
      });

      const ammoLvl = getUpgradeLevel(def.id, "ammo");
      if (ammoLvl > 0) {
        const step = def.id === "smg" ? 5 : (def.id === "bazooka" ? 1 : 2);
        wt.maxAmmo += ammoLvl * step;
      }

      // Mira laser disponivel para todas as armas.
      if (getUpgradeLevel(def.id, "laser") > 0) {
        wt.laserSight = true;
        wt.tracerColor = "255,38,48";
        wt.laneRadius = Math.max(7, (wt.laneRadius || 9) - 2);
        wt.aimAssist = Math.max(wt.aimAssist || 0, 0.32);
      }

      if (def.id === "pistol") {
        if (getUpgradeLevel(def.id, "silencer") > 0) {
          wt.label = "Pistola Silenciada";
          wt.noiseMul = 0.25;
          wt.soundProfile = "silencer";
          wt.bodyColor = "#8a9aaa";
          wt.gripColor = "#2e3844";
          wt.barrelLen += 3;
        }
      }

      const controlLvl = getUpgradeLevel(def.id, "control");
      if (controlLvl > 0) {
        wt.range += controlLvl * 28;
        wt.laneRadius += controlLvl * 1.5;
        wt.cooldown = Math.max(0.08, wt.cooldown * (1 - controlLvl * 0.08));
        wt.aimAssist = (wt.aimAssist || 0) + controlLvl * 0.04;
      }

      const spreadLvl = getUpgradeLevel(def.id, "spread");
      if (spreadLvl > 0) {
        wt.range += spreadLvl * 12;
        wt.laneRadius += spreadLvl * 6;
      }

      const scopeLvl = getUpgradeLevel(def.id, "scope");
      if (scopeLvl > 0) {
        wt.range += scopeLvl * 55;
        wt.laneRadius = Math.max(7, wt.laneRadius - scopeLvl * 1.5);
        if (scopeLvl >= 2) {
          wt.laserSight = true;
          wt.tracerColor = "210,255,190";
        }
        wt.aimAssist = (wt.aimAssist || 0) + scopeLvl * 0.08;
      }

      const blastLvl = getUpgradeLevel(def.id, "blast");
      if (blastLvl > 0) {
        wt.range += blastLvl * 15;
        wt.blastRadius = (wt.blastRadius || GRENADE_LAUNCHER.blastRadius) + blastLvl * 18;
      }

      return wt;
    }

    function getKnifeStats() {
      const reachLvl = getUpgradeLevel("knife", "reach");
      const speedLvl = getUpgradeLevel("knife", "speed");
      return {
        range: 80 + reachLvl * 14,
        laneRadius: 30 + reachLvl * 5,
        cooldown: Math.max(0.32, 0.48 - speedLvl * 0.12),
        maxTargets: 2 + reachLvl
      };
    }

    function getSelectedLoadoutDef() {
      const inv = progress.inventory || createDefaultInventory();
      const selected = inv.selectedItem || "knife";
      return isShopItemOwned(selected) ? getShopItemDef(selected) : getShopItemDef("knife");
    }

    function cloneWeaponType(wt) {
      const base = wt || WEAPON_TYPES[0];
      return Object.assign({}, base);
    }

    function hasAnyWeapon() {
      return Array.isArray(player.weaponSlots) && player.weaponSlots.some(Boolean);
    }

    function sanitizeWeaponSlots() {
      if (!Array.isArray(player.weaponSlots) || player.weaponSlots.length !== 2) {
        player.weaponSlots = [null, null];
      }
      for (let i = 0; i < player.weaponSlots.length; i++) {
        const slot = player.weaponSlots[i];
        if (!slot || !slot.weapon) {
          player.weaponSlots[i] = null;
          continue;
        }
        slot.ammo = Math.max(0, Math.floor(Number(slot.ammo) || 0));
        slot.maxAmmo = Math.max(0, Math.floor(Number(slot.maxAmmo) || (slot.weapon.maxAmmo || 0)));
        slot.reserveAmmo = Math.max(0, Math.floor(Number(slot.reserveAmmo) || 0));
      }
      player.activeWeaponIndex = clamp(player.activeWeaponIndex | 0, 0, player.weaponSlots.length - 1);
    }

    function getActiveWeaponSlot() {
      sanitizeWeaponSlots();
      let slot = player.weaponSlots[player.activeWeaponIndex];
      if (!slot) {
        const first = player.weaponSlots.findIndex(Boolean);
        if (first >= 0) {
          player.activeWeaponIndex = first;
          slot = player.weaponSlots[first];
        }
      }
      return slot || null;
    }

    function syncActiveWeaponState() {
      sanitizeWeaponSlots();
      const slot = getActiveWeaponSlot();
      player.hasWeapon = hasAnyWeapon();
      if (slot) {
        slot.maxAmmo = Math.max(0, Number.isFinite(slot.maxAmmo) ? slot.maxAmmo : (slot.weapon.maxAmmo || 0));
        slot.ammo = clamp(Number.isFinite(slot.ammo) ? slot.ammo : slot.maxAmmo, 0, slot.maxAmmo);
        slot.reserveAmmo = Math.max(0, Math.floor(Number(slot.reserveAmmo) || 0));
        currentWeaponType = slot.weapon;
        player.ammo = slot.ammo;
        player.maxAmmo = slot.maxAmmo;
      } else {
        currentWeaponType = levelWeaponDropType || WEAPON_TYPES[0];
        player.ammo = 0;
        player.maxAmmo = 0;
      }
      if (player.activeSlot === "weapon" && !slot) player.activeSlot = "knife";
    }

    function firstEmptyWeaponSlotIndex() {
      sanitizeWeaponSlots();
      return player.weaponSlots.findIndex((slot) => !slot);
    }

    function makeWeaponSlot(wt, ammo = null, reserveAmmo = 0) {
      const weapon = cloneWeaponType(wt);
      const maxAmmo = Math.max(0, weapon.maxAmmo || 0);
      return {
        weapon,
        ammo: clamp(Number.isFinite(ammo) ? ammo : maxAmmo, 0, maxAmmo),
        maxAmmo,
        reserveAmmo: Math.max(0, Math.floor(Number(reserveAmmo) || 0))
      };
    }

    function weaponReserveText(slot) {
      const reserve = slot ? Math.max(0, Math.floor(Number(slot.reserveAmmo) || 0)) : 0;
      return reserve > 0 ? (" +" + reserve) : "";
    }

    function weaponSlotSummary(slot, idx) {
      if (!slot) return "W" + (idx + 1) + " vazio";
      return "W" + (idx + 1) + " " + slot.weapon.label + " " + slot.ammo + "/" + slot.maxAmmo + weaponReserveText(slot);
    }

    function weaponAmmoSummary() {
      sanitizeWeaponSlots();
      return player.weaponSlots
        .map((slot, idx) => slot ? ("W" + (idx + 1) + " " + slot.ammo + "/" + slot.maxAmmo + weaponReserveText(slot)) : "")
        .filter(Boolean)
        .join(" | ");
    }

    function findNextWeaponIndex(startIndex = 0) {
      sanitizeWeaponSlots();
      for (let i = 0; i < player.weaponSlots.length; i++) {
        const idx = (startIndex + i + player.weaponSlots.length) % player.weaponSlots.length;
        if (player.weaponSlots[idx]) return idx;
      }
      return -1;
    }

    function equipWeaponAtIndex(idx, feedback = true) {
      sanitizeWeaponSlots();
      if (!player.weaponSlots[idx]) return false;
      player.activeWeaponIndex = idx;
      player.activeSlot = "weapon";
      syncActiveWeaponState();
      if (feedback) {
        setInteractionFeedback("W" + (idx + 1) + " " + currentWeaponType.label + " ativa", "ok", 0.55);
      }
      return true;
    }

    function giveWeapon(wt, opts = {}) {
      sanitizeWeaponSlots();
      const slot = makeWeaponSlot(wt, opts.ammo, opts.reserveAmmo);
      let idx = firstEmptyWeaponSlotIndex();
      if (idx < 0) idx = player.activeSlot === "weapon" ? player.activeWeaponIndex : findNextWeaponIndex(player.activeWeaponIndex);
      if (idx < 0) idx = 0;

      const replaced = player.weaponSlots[idx];
      player.weaponSlots[idx] = slot;
      player.activeWeaponIndex = idx;
      player.activeSlot = "weapon";
      player.meleeWeapon = "knife";
      syncActiveWeaponState();
      return { index: idx, replaced };
    }

    function addAmmoToBestWeapon(amount) {
      sanitizeWeaponSlots();
      if (!hasAnyWeapon()) return 0;
      const add = Math.max(0, Math.floor(Number(amount) || 0));
      if (add <= 0) return 0;
      const active = getActiveWeaponSlot();
      let idx = active ? player.activeWeaponIndex : -1;
      if (idx < 0) idx = player.weaponSlots.findIndex(Boolean);
      if (idx < 0) return 0;

      const slot = player.weaponSlots[idx];
      let remaining = add;
      const loadNow = Math.min(Math.max(0, slot.maxAmmo - slot.ammo), remaining);
      slot.ammo += loadNow;
      remaining -= loadNow;
      slot.reserveAmmo = Math.max(0, Math.floor(Number(slot.reserveAmmo) || 0)) + remaining;
      player.activeWeaponIndex = idx;
      player.activeSlot = "weapon";
      syncActiveWeaponState();
      return add;
    }

    function reloadWeaponSlot(idx, feedback = true) {
      sanitizeWeaponSlots();
      const slot = player.weaponSlots[idx];
      if (!slot) return 0;
      const reserve = Math.max(0, Math.floor(Number(slot.reserveAmmo) || 0));
      const need = Math.max(0, slot.maxAmmo - slot.ammo);
      const loaded = Math.min(need, reserve);
      if (loaded <= 0) return 0;

      slot.ammo += loaded;
      slot.reserveAmmo = reserve - loaded;
      player.activeWeaponIndex = idx;
      player.activeSlot = "weapon";
      syncActiveWeaponState();
      if (feedback) {
        sfxGunReload();
        setInteractionFeedback("Pente carregado W" + (idx + 1), "ok", 0.55);
      }
      return loaded;
    }

    function reloadActiveWeapon(feedback = true) {
      const slot = getActiveWeaponSlot();
      return slot ? reloadWeaponSlot(player.activeWeaponIndex, feedback) : 0;
    }

    function tryReloadWeapon(feedback = true) {
      if (!player.alive || mode !== MODE_PLAYING) return false;
      if (isSuperCharacter()) {
        if (feedback) setInteractionFeedback(isThorCharacter() ? "A energia do Mjolnir recarrega sozinha" : "Laser recarrega sozinho", "ok", 0.4);
        return false;
      }
      syncActiveWeaponState();
      if (player.activeSlot !== "weapon" || !player.hasWeapon) {
        if (feedback) setInteractionFeedback("Equipe uma arma para recarregar", "warn", 0.45);
        return false;
      }
      const slot = getActiveWeaponSlot();
      if (!slot) {
        if (feedback) setInteractionFeedback("Sem arma ativa", "warn", 0.4);
        return false;
      }
      if (slot.reserveAmmo <= 0) {
        if (feedback) setInteractionFeedback("Sem munição reserva", "warn", 0.45);
        return false;
      }
      if (slot.ammo >= slot.maxAmmo) {
        if (feedback) setInteractionFeedback("Pente cheio", "ok", 0.4);
        return false;
      }
      return reloadActiveWeapon(feedback) > 0;
    }

    function cloneWeaponSlot(slot) {
      if (!slot || !slot.weapon) return null;
      return {
        weapon: cloneWeaponType(slot.weapon),
        ammo: Math.max(0, Math.floor(Number(slot.ammo) || 0)),
        maxAmmo: Math.max(0, Math.floor(Number(slot.maxAmmo) || (slot.weapon.maxAmmo || 0))),
        reserveAmmo: Math.max(0, Math.floor(Number(slot.reserveAmmo) || 0))
      };
    }

    function capturePlayerLoadout() {
      sanitizeWeaponSlots();
      return {
        weaponSlots: player.weaponSlots.map(cloneWeaponSlot),
        activeWeaponIndex: player.activeWeaponIndex | 0,
        activeSlot: player.activeSlot,
        meleeWeapon: player.meleeWeapon || "knife"
      };
    }

    function restorePlayerLoadout(loadout) {
      if (!loadout || typeof loadout !== "object") return false;
      const slots = Array.isArray(loadout.weaponSlots) ? loadout.weaponSlots : [];
      player.weaponSlots = [cloneWeaponSlot(slots[0]), cloneWeaponSlot(slots[1])];
      player.activeWeaponIndex = clamp(loadout.activeWeaponIndex | 0, 0, 1);
      player.meleeWeapon = loadout.meleeWeapon || "knife";
      player.activeSlot = loadout.activeSlot === "weapon" && player.weaponSlots[player.activeWeaponIndex] ? "weapon" : "knife";
      syncActiveWeaponState();
      return true;
    }

    function getWeaponDropType() {
      return weaponDrop.weaponType || levelWeaponDropType;
    }

    function currentHeldItemLabel() {
      syncActiveWeaponState();
      if (player.activeSlot === "weapon" && player.hasWeapon && currentWeaponType) return currentWeaponType.label;
      if (player.meleeWeapon === "knife") return "Faca";
      if (player.hasWeapon && currentWeaponType) return currentWeaponType.label;
      return "Soco";
    }

    function weaponSlotLabel() {
      syncActiveWeaponState();
      if (!player.hasWeapon) return "---";
      return player.weaponSlots
        .map((slot, idx) => slot ? ("W" + (idx + 1) + " " + slot.weapon.label) : "")
        .filter(Boolean)
        .join(" | ");
    }

    function activeSlotLabel() {
      syncActiveWeaponState();
      if (player.activeSlot === "weapon" && player.hasWeapon) return "Arma";
      if (player.meleeWeapon === "knife") return "Faca";
      return "Soco";
    }

    function switchActiveSlot(forceSlot = "") {
      syncActiveWeaponState();
      if (forceSlot === "weapon" && player.hasWeapon) {
        const idx = findNextWeaponIndex(player.activeWeaponIndex);
        return idx >= 0 ? equipWeaponAtIndex(idx) : false;
      }
      if (forceSlot === "knife" && player.meleeWeapon === "knife") {
        player.activeSlot = "knife";
        syncActiveWeaponState();
        setInteractionFeedback("Faca ativa", "ok", 0.45);
        return true;
      }
      if (!player.hasWeapon || player.meleeWeapon !== "knife") return false;

      if (player.activeSlot !== "weapon") {
        const idx = findNextWeaponIndex(0);
        return idx >= 0 ? equipWeaponAtIndex(idx) : false;
      }

      for (let idx = player.activeWeaponIndex + 1; idx < player.weaponSlots.length; idx++) {
        if (player.weaponSlots[idx]) return equipWeaponAtIndex(idx);
      }

      player.activeSlot = "knife";
      syncActiveWeaponState();
      setInteractionFeedback("Faca ativa", "ok", 0.45);
      return true;
    }

    function drawShopKnifeArt(c, w, h) {
      c.save();
      c.translate(w * 0.5, h * 0.52);
      c.rotate(-0.38);
      const blade = c.createLinearGradient(-30, -6, 34, 6);
      blade.addColorStop(0, "#8fa8bb");
      blade.addColorStop(0.45, "#eef6ff");
      blade.addColorStop(1, "#b8c8d8");
      c.fillStyle = blade;
      c.beginPath();
      c.moveTo(-30, -3);
      c.lineTo(14, -6);
      c.lineTo(34, 0);
      c.lineTo(14, 6);
      c.lineTo(-30, 3);
      c.closePath();
      c.fill();
      c.strokeStyle = "rgba(2,8,14,0.82)";
      c.lineWidth = 1.8;
      c.stroke();
      c.fillStyle = "#2a3848";
      c.fillRect(-46, -5, 18, 10);
      c.fillStyle = "#121923";
      c.fillRect(-52, -7, 8, 14);
      c.fillStyle = "rgba(255,255,255,0.18)";
      c.fillRect(-28, -1.5, 22, 1.2);
      c.restore();
    }

    function drawProceduralWeaponShop(c, wt, w, h) {
      const id = wt ? wt.id : "pistol";
      const body = wt && wt.bodyColor ? wt.bodyColor : "#b8c6d8";
      const grip = wt && wt.gripColor ? wt.gripColor : "#2f3a48";
      const barrelLen = wt && wt.barrelLen ? wt.barrelLen : 16;
      const barrelW = wt && wt.barrelW ? wt.barrelW : 5;
      c.save();
      c.translate(w * 0.5, h * 0.52);
      c.rotate(-0.1);
      c.shadowColor = "rgba(0,0,0,0.55)";
      c.shadowBlur = 8;
      c.shadowOffsetY = 4;

      if (id === "grenadeLauncher") {
        const tube = c.createLinearGradient(-38, -10, 42, 10);
        tube.addColorStop(0, "#3a4248");
        tube.addColorStop(0.5, "#6a7278");
        tube.addColorStop(1, "#2a3035");
        c.fillStyle = tube;
        c.fillRect(-38, -9, 72, 18);
        c.fillStyle = "#1a2026";
        c.fillRect(30, -7, 16, 14);
        c.fillStyle = "#8b1a12";
        c.beginPath();
        c.arc(46, 0, 5.5, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "#2a3035";
        c.fillRect(-52, -4, 16, 22);
        c.fillStyle = "#151a1f";
        c.fillRect(-58, 2, 10, 14);
        c.strokeStyle = "rgba(255,180,90,0.35)";
        c.lineWidth = 1.2;
        c.strokeRect(-38, -9, 72, 18);
      } else if (id === "shotgun") {
        c.fillStyle = grip;
        c.fillRect(-12, 2, 12, 20);
        c.fillStyle = body;
        c.fillRect(-34, -7, 52, 14);
        c.fillRect(16, -9, 22, 18);
        c.fillStyle = "#1a1410";
        c.fillRect(36, -6, 8, 12);
      } else if (id === "sniper" || id === "rifle" || id === "burst") {
        c.fillStyle = grip;
        c.fillRect(-10, 2, 11, 18);
        c.fillStyle = body;
        c.fillRect(-36, -5, 58, 10);
        c.fillRect(20, -4, barrelLen + 8, barrelW);
        if (id === "sniper") {
          c.fillStyle = "#1a2228";
          c.fillRect(8, -12, 28, 5);
          c.strokeStyle = "rgba(180,220,255,0.35)";
          c.strokeRect(8, -12, 28, 5);
        }
        if (id === "burst") {
          c.fillStyle = "#2a3238";
          c.fillRect(-8, -2, 22, 14);
        }
      } else if (id === "smg") {
        c.fillStyle = grip;
        c.fillRect(-6, 0, 10, 16);
        c.fillStyle = body;
        c.fillRect(-30, -5, 48, 10);
        c.fillRect(16, -3, 24, 6);
        c.fillStyle = "#222a32";
        c.fillRect(-4, -8, 14, 12);
      } else if (id === "revolver") {
        c.fillStyle = grip;
        c.fillRect(-10, 0, 11, 18);
        c.fillStyle = body;
        c.fillRect(-22, -5, 28, 10);
        c.beginPath();
        c.arc(6, 0, 7, 0, Math.PI * 2);
        c.fill();
        c.fillStyle = "#1a1410";
        c.fillRect(12, -3, barrelLen, barrelW);
      } else if (id === "tranq") {
        c.fillStyle = "#2d4a42";
        c.fillRect(-10, 0, 11, 17);
        c.fillStyle = "#9bd7c0";
        c.fillRect(-28, -5, 40, 10);
        c.fillStyle = "#6ef0c8";
        c.fillRect(10, -3, 18, 6);
        c.fillStyle = "rgba(255,255,255,0.35)";
        c.fillRect(-20, -2, 8, 4);
      } else if (id === "laser" || id === "plasma") {
        c.fillStyle = grip;
        c.fillRect(-10, 0, 11, 17);
        c.fillStyle = body;
        c.fillRect(-28, -5, 42, 10);
        c.fillStyle = id === "plasma" ? "#9b7cff" : "#ff2630";
        c.fillRect(12, -3, 20, 6);
        c.shadowColor = id === "plasma" ? "rgba(155,124,255,0.8)" : "rgba(255,38,48,0.8)";
        c.shadowBlur = 12;
        c.fillRect(30, -2, 4, 4);
      } else if (id === "silencer") {
        c.fillStyle = grip;
        c.fillRect(-10, 0, 11, 17);
        c.fillStyle = "#7a8898";
        c.fillRect(-26, -5, 34, 10);
        c.fillStyle = "#4a5560";
        c.fillRect(6, -4, 24, 8);
      } else {
        c.fillStyle = body;
        c.fillRect(-30, -5, 42, 10);
        c.fillStyle = grip;
        c.fillRect(-10, 2, 11, 17);
        c.fillStyle = "#1a2228";
        c.fillRect(10, -3, barrelLen, barrelW);
      }

      c.shadowBlur = 0;
      c.restore();
    }

    function renderShopItemArt(canvas, def) {
      if (!canvas) return;
      const c = canvas.getContext("2d");
      if (!c) return;
      const w = canvas.width;
      const h = canvas.height;
      c.clearRect(0, 0, w, h);
      const bg = c.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "rgba(24,42,58,0.96)");
      bg.addColorStop(0.55, "rgba(8,16,24,0.98)");
      bg.addColorStop(1, "rgba(4,10,16,1)");
      c.fillStyle = bg;
      c.fillRect(0, 0, w, h);
      c.strokeStyle = def.type === "knife" ? "rgba(126,184,216,0.22)" : "rgba(200,168,106,0.22)";
      c.lineWidth = 1;
      c.strokeRect(0.5, 0.5, w - 1, h - 1);
      c.fillStyle = "rgba(255,255,255,0.05)";
      c.fillRect(0, 0, w, 1);
      const glow = c.createRadialGradient(w * 0.5, h * 0.5, 2, w * 0.5, h * 0.5, Math.min(w, h) * 0.42);
      glow.addColorStop(0, def.type === "knife" ? "rgba(126,184,216,0.1)" : "rgba(200,168,106,0.1)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      c.fillStyle = glow;
      c.fillRect(0, 0, w, h);
      c.fillStyle = "rgba(0,0,0,0.32)";
      c.beginPath();
      c.ellipse(w * 0.5, h * 0.58, w * 0.28, h * 0.08, 0, 0, Math.PI * 2);
      c.fill();

      if (def.type === "weapon") drawShopWeaponArt(c, getWeaponTemplateById(def.weaponId), w, h);
      else drawShopKnifeArt(c, w, h);
    }

    function drawShopWeaponArt(c, wt, w, h) {
      drawProceduralWeaponShop(c, wt, w, h);
    }

    function getShopWeaponImageKey(def) {
      if (!def) return "";
      if (def.type === "knife") return "knife";
      if (def.type === "weapon") return def.weaponId || def.id || "";
      return "";
    }

    function encodeAssetPath(path) {
      if (!path) return "";
      return String(path).split("/").map((part, index) => (index === 0 ? part : encodeURIComponent(part))).join("/");
    }

    function getShopWeaponImageUrl(def) {
      const key = getShopWeaponImageKey(def);
      if (!key) return "";
      const path = SHOP_WEAPON_IMAGES[key] || SHOP_WEAPON_IMAGES[def.id] || "";
      return encodeAssetPath(path);
    }

    function getPausePortraitConfig() {
      return CHARACTER_PAUSE_PORTRAITS[getSelectedCharacter()] || CHARACTER_PAUSE_PORTRAITS.operative;
    }

    function syncPausePortrait() {
      if (!pausePortrait) return;
      const cfg = getPausePortraitConfig();
      const src = encodeAssetPath(cfg.src);
      if (pausePortrait.getAttribute("src") !== src) pausePortrait.src = src;
      pausePortrait.alt = cfg.label;
    }

    function renderShopItemArtDataUrl(def) {
      const canvas = document.createElement("canvas");
      canvas.width = 480;
      canvas.height = 240;
      renderShopItemArt(canvas, def);
      return canvas.toDataURL("image/png");
    }

    function appendShopItemArt(card, def) {
      const frame = document.createElement("div");
      frame.className = "shop-card-art-frame";

      const img = document.createElement("img");
      img.className = "shop-card-art";
      img.alt = def.label;
      img.loading = "lazy";
      img.decoding = "async";

      const localUrl = getShopWeaponImageUrl(def);
      const sources = localUrl ? [localUrl] : [];
      let sourceIdx = 0;

      const useProceduralFallback = () => {
        img.src = renderShopItemArtDataUrl(def);
      };

      const tryNextSource = () => {
        if (sourceIdx >= sources.length) {
          img.removeEventListener("error", onImageError);
          useProceduralFallback();
          return;
        }
        img.src = sources[sourceIdx++];
      };

      const onImageError = () => tryNextSource();

      img.addEventListener("error", onImageError);
      if (sources.length) tryNextSource();
      else useProceduralFallback();

      frame.title = "Clique para ampliar";
      frame.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const src = img.currentSrc || img.src;
        if (!src) return;
        ensureAudio();
        openShopArtLightbox(def.label, src);
        sfxClick();
      });

      frame.appendChild(img);
      card.appendChild(frame);
    }

    function openShopArtLightbox(label, src) {
      if (!shopArtLightbox || !shopArtLightboxImg || !src) return;
      if (shopArtLightboxTitle) shopArtLightboxTitle.textContent = label || "";
      shopArtLightboxImg.src = src;
      shopArtLightboxImg.alt = label || "Arma";
      shopArtLightbox.classList.remove("hidden");
      shopArtLightbox.setAttribute("aria-hidden", "false");
    }

    function closeShopArtLightbox() {
      if (!shopArtLightbox) return;
      shopArtLightbox.classList.add("hidden");
      shopArtLightbox.setAttribute("aria-hidden", "true");
      if (shopArtLightboxImg) shopArtLightboxImg.removeAttribute("src");
    }

    function shouldUseShopCarousel() {
      if (!window.matchMedia) return false;
      return window.matchMedia("(orientation: landscape) and (max-height: 560px)").matches ||
        window.matchMedia("(orientation: landscape) and (max-width: 820px)").matches;
    }

    function syncShopCarousel(jumpToSelected = false) {
      if (!shopGrid || !shopCarousel) return;
      const cards = Array.from(shopGrid.querySelectorAll(".shop-card"));
      const useCarousel = shouldUseShopCarousel();
      shopCarousel.classList.toggle("carousel-active", useCarousel);

      if (!cards.length) {
        if (shopCarouselCounter) shopCarouselCounter.textContent = "0 / 0";
        return;
      }

      if (jumpToSelected) {
        const selectedIdx = cards.findIndex((c) => c.classList.contains("selected"));
        if (selectedIdx >= 0) shopCarouselIndex = selectedIdx;
      }

      if (!useCarousel) {
        cards.forEach((c) => c.classList.remove("shop-card-hidden"));
        if (shopCarouselCounter) shopCarouselCounter.textContent = cards.length + " itens";
        return;
      }

      shopCarouselIndex = clamp(shopCarouselIndex, 0, cards.length - 1);
      cards.forEach((c, i) => c.classList.toggle("shop-card-hidden", i !== shopCarouselIndex));
      if (shopCarouselCounter) {
        shopCarouselCounter.textContent = (shopCarouselIndex + 1) + " / " + cards.length;
      }
    }

    function shiftShopCarousel(delta) {
      if (!shopGrid) return;
      const total = shopGrid.querySelectorAll(".shop-card").length;
      if (total <= 1) return;
      shopCarouselIndex = (shopCarouselIndex + delta + total) % total;
      syncShopCarousel(false);
      sfxClick();
    }

    function renderShop() {
      progress.inventory = normalizeInventory(progress.inventory);
      if (menuCredits) menuCredits.textContent = "Créditos: " + progress.credits;
      if (menuLoadout) {
        const selectedDef = getShopItemDef(progress.inventory.selectedItem);
        menuLoadout.textContent = (selectedDef.type === "weapon" && isShopItemOwned(selectedDef.id))
          ? ("Início: " + selectedDef.label)
          : "Início: Pistola";
      }
      if (!shopGrid) return;

      shopGrid.innerHTML = "";
      for (const def of SHOP_ITEM_DEFS) {
        const owned = isShopItemOwned(def.id);
        const selected = progress.inventory.selectedItem === def.id;
        const card = document.createElement("div");
        card.className = "shop-card" + (owned ? " owned" : "") + (selected ? " selected" : "");

        appendShopItemArt(card, def);

        const title = document.createElement("div");
        title.className = "shop-card-title";
        title.textContent = def.label + (def.cost > 0 ? (" · " + def.cost) : "");
        card.appendChild(title);

        const desc = document.createElement("div");
        desc.className = "shop-card-desc";
        desc.textContent = def.desc;
        card.appendChild(desc);

        const action = document.createElement("button");
        action.className = "shop-main-btn";
        if (!owned) {
          action.textContent = "Comprar " + def.cost;
          action.disabled = progress.credits < def.cost;
          action.addEventListener("click", () => buyShopItem(def.id));
        } else if (selected) {
          action.textContent = "Selecionado";
          action.disabled = true;
        } else {
          action.textContent = "Selecionar";
          action.addEventListener("click", () => selectLoadoutItem(def.id));
        }
        card.appendChild(action);

        const upgrades = document.createElement("div");
        upgrades.className = "shop-upgrades";
        for (const up of def.upgrades || []) {
          const lvl = getUpgradeLevel(def.id, up.id);
          const upBtn = document.createElement("button");
          upBtn.className = "shop-upgrade-btn";
          if (!owned) {
            upBtn.textContent = up.label + " 0/" + up.max;
            upBtn.disabled = true;
          } else if (lvl >= up.max) {
            upBtn.textContent = up.label + " MAX";
            upBtn.disabled = true;
          } else {
            const cost = getUpgradeCost(def.id, up.id);
            upBtn.textContent = up.label + " " + lvl + "/" + up.max + " +" + cost;
            upBtn.disabled = progress.credits < cost;
            upBtn.addEventListener("click", () => buyShopUpgrade(def.id, up.id));
          }
          upgrades.appendChild(upBtn);
        }
        card.appendChild(upgrades);
        shopGrid.appendChild(card);
      }
      syncShopCarousel(true);
    }

    function awardCredits(amount) {
      const earned = Math.max(0, Math.round((Number(amount) || 0) * (getDifficultyConfig().scoreMul || 1)));
      if (earned <= 0) return 0;
      progress.credits += earned;
      saveProgress();
      renderShop();
      return earned;
    }

    function formatLivesLabel() {
      return hasUnlimitedRespawns() ? "INF" : String(run.lives);
    }

    function setInteractionFeedback(text, kind = "ok", duration = 0.55) {
      uiFeedback.interactText = text || "";
      uiFeedback.interactKind = kind;
      uiFeedback.interactTimer = duration;
      if (settings.hapticEnabled && touchInput.enabled) {
        if (kind === "fail") touchHaptic([18, 36, 18]);
        else if (kind === "warn") touchHaptic([24]);
        else if (text) touchHaptic([10]);
      }
    }

    function touchHaptic(pattern) {
      if (!settings.hapticEnabled) return;
      try {
        if (navigator.vibrate) navigator.vibrate(pattern);
      } catch (_) {
        // vibration unsupported or blocked
      }
    }

    function safeSetPointerCapture(el, pointerId) {
      if (!el || pointerId == null || typeof el.setPointerCapture !== "function") return;
      try {
        el.setPointerCapture(pointerId);
      } catch (_) {
        // Pointer capture can fail on recycled mobile events.
      }
    }

    function setTouchBtnCooldown(el, remaining, max) {
      if (!el) return;
      const pct = max > 0 ? clamp(1 - remaining / max, 0, 1) : 1;
      el.style.setProperty("--cd-pct", pct.toFixed(3));
    }

    function touchSwitchLabel() {
      syncActiveWeaponState();
      if (player.activeSlot === "weapon" && player.hasWeapon) return TOUCH_LABELS.switchKnife;
      return TOUCH_LABELS.switchWeapon;
    }

    function syncTouchActionBarLayout() {
      if (!touchActionBar) return;
      const hl = isSuperCharacter();
      const playing = mode === MODE_PLAYING;
      touchActionBar.classList.toggle("layout-super", hl);
      touchActionBar.classList.toggle("layout-operative", !hl);
      touchActionBar.classList.toggle("layout-thor", hl && isSuperCharacter());

      if (touchCrouch) {
        touchCrouch.classList.toggle("hidden", hl);
        if (hl) touchInput.crouch = false;
      }
      if (touchLure) {
        touchLure.classList.toggle("hidden", hl);
        if (hl) touchInput.lureTap = false;
      }
      if (touchHammer) {
        const showSpecial = hl && isSuperCharacter();
        touchHammer.classList.toggle("hidden", !showSpecial);
        if (!showSpecial) {
          touchInput.hammerTap = false;
          touchInput.hammer = false;
        }
      }
      if (touchReload) {
        const hideReload = hl || !playing;
        touchReload.classList.toggle("hidden", hideReload);
      }
      if (touchSwitch) {
        const hideSwitch = hl || !playing;
        touchSwitch.classList.toggle("hidden", hideSwitch);
        if (hideSwitch) touchInput.switchWeaponTap = false;
      }
    }

    function resetFollowCamera() {
      camera.x = player.x || WORLD_W * 0.5;
      camera.y = player.y || WORLD_H * 0.5;
      camera.zoom = 1;
      camera.ready = false;
    }

    function invalidateMapCache() {
      mapCache.dirty = true;
    }

    function applyAccessibilityClasses() {
      document.body.classList.toggle("left-handed", settings.handedness === "left");
      document.body.classList.toggle("hud-large", settings.hudScale === "large");
      document.body.classList.toggle("hud-contrast", settings.hudContrast === "high");
      document.body.classList.toggle("colorblind-protanopia", settings.colorblindMode === "protanopia");
      document.body.classList.toggle("colorblind-deuteranopia", settings.colorblindMode === "deuteranopia");
      document.body.classList.toggle("colorblind-tritanopia", settings.colorblindMode === "tritanopia");
      document.body.classList.toggle("reduced-motion", Meta() && Meta().prefersReducedMotion());
      applyTouchLayoutClasses();
      applyTouchControlOffsets();
    }

    function applyTouchLayoutClasses() {
      document.body.classList.remove("touch-layout-compact", "touch-layout-comfortable", "touch-layout-tablet");
      const layout = settings.touchLayout === "compact" || settings.touchLayout === "tablet"
        ? settings.touchLayout
        : "comfortable";
      document.body.classList.add("touch-layout-" + layout);
    }

    function applyTouchControlOffsets() {
      if (!mobileControls) return;
      const ox = clamp(settings.touchBtnOffsetX || 0, -40, 40);
      const oy = clamp(settings.touchBtnOffsetY || 0, -40, 40);
      mobileControls.style.setProperty("--touch-offset-x", ox + "px");
      mobileControls.style.setProperty("--touch-offset-y", oy + "px");
    }

    function applyKeybindSettings() {
      const m = Meta();
      if (!m) return;
      const merged = m.mergeKeybinds(settings.keybinds);
      for (const action of Object.keys(keyMap)) {
        if (merged[action]) keyMap[action] = merged[action].slice();
      }
    }

    function syncKeybindUI() {
      if (!keybindGrid) return;
      const m = Meta();
      if (!m) return;
      const merged = m.mergeKeybinds(settings.keybinds);
      keybindGrid.innerHTML = "";
      for (const action of Object.keys(KEYBIND_LABELS)) {
        if (!keyMap[action]) continue;
        const row = document.createElement("div");
        row.className = "keybind-row";
        const label = document.createElement("span");
        label.className = "keybind-label";
        label.textContent = KEYBIND_LABELS[action];
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "keybind-btn";
        btn.dataset.action = action;
        const keys = merged[action] || keyMap[action] || [];
        btn.textContent = keys.length ? keys.join(", ") : "—";
        if (keybindCaptureAction === action) btn.classList.add("capturing");
        row.appendChild(label);
        row.appendChild(btn);
        keybindGrid.appendChild(row);
      }
    }

    function bindKeybindUI() {
      if (!keybindGrid) return;
      keybindGrid.addEventListener("click", (e) => {
        const btn = e.target.closest(".keybind-btn");
        if (!btn || !btn.dataset.action) return;
        ensureAudio();
        keybindCaptureAction = btn.dataset.action;
        if (!settings.keybinds) settings.keybinds = {};
        settings.keybinds[keybindCaptureAction] = [];
        syncKeybindUI();
        setHint("Pressione tecla(s) para «" + (KEYBIND_LABELS[keybindCaptureAction] || keybindCaptureAction) + "». Enter confirma, Esc cancela.", 4);
        sfxClick();
      });
      document.addEventListener("keydown", (e) => {
        if (!keybindCaptureAction) return;
        if (e.key === "Escape") {
          keybindCaptureAction = null;
          syncKeybindUI();
          return;
        }
        if (e.key === "Enter") {
          keybindCaptureAction = null;
          syncKeybindUI();
          saveSettings();
          setHint("Tecla salva.", 1);
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        const key = e.key.toLowerCase();
        if (!settings.keybinds) settings.keybinds = {};
        const m = Meta();
        const defaults = m ? m.mergeKeybinds(null)[keybindCaptureAction] : keyMap[keybindCaptureAction];
        const current = (settings.keybinds[keybindCaptureAction] || defaults || []).slice();
        if (!current.includes(key)) current.push(key);
        settings.keybinds[keybindCaptureAction] = current.slice(0, 3);
        applyKeybindSettings();
        syncKeybindUI();
      }, true);
    }

    function shouldSkipDesktopTutorial() {
      return touchInput.enabled || isBrowserMobilePlay();
    }

    function dismissTutorialForMobile() {
      if (!shouldSkipDesktopTutorial()) return;
      tutorialActive = false;
      tutorialStep = -1;
    }

    function initTutorialForLevel() {
      const m = Meta();
      if (!m || isSuperCharacter() || isSurvivalRun()) {
        tutorialActive = false;
        tutorialStep = -1;
        return;
      }
      if (shouldSkipDesktopTutorial()) {
        tutorialActive = false;
        tutorialStep = -1;
        return;
      }
      const prog = m.loadTutorialProgress();
      if (prog.completed || run.level > 1) {
        tutorialActive = false;
        tutorialStep = -1;
        return;
      }
      tutorialActive = true;
      tutorialStep = Math.max(0, prog.step || 0);
    }

    function advanceTutorial() {
      const m = Meta();
      if (!m || !tutorialActive) return;
      tutorialStep += 1;
      const prog = m.loadTutorialProgress();
      prog.step = tutorialStep;
      if (tutorialStep >= m.TUTORIAL_STEPS.length - 1) {
        prog.completed = true;
        tutorialActive = false;
        tutorialStep = -1;
        setHint("Tutorial concluído. Boa infiltração!");
      }
      m.saveTutorialProgress(prog);
    }

    function checkAchievementsOnLevelClear() {
      const m = Meta();
      if (!m) return;
      const ach = m.loadAchievements();
      const unlocked = [];
      if (run.level >= 1) {
        const u = m.unlockAchievement("first_clear", ach);
        if (u) unlocked.push(u);
      }
      if (run.detected === run.levelStartDetections) {
        const u = m.unlockAchievement("ghost_run", ach);
        if (u) unlocked.push(u);
      }
      const targetTime = Math.max(34, 78 - run.level * 2.5);
      if (run.levelFreezeSec <= targetTime) {
        const u = m.unlockAchievement("speed_demon", ach);
        if (u) unlocked.push(u);
      }
      if (run.levelKnifeOnly) {
        const u = m.unlockAchievement("knife_only", ach);
        if (u) unlocked.push(u);
      }
      if (run.levelNemesisDefeated) {
        const u = m.unlockAchievement("nemesis_down", ach);
        if (u) unlocked.push(u);
      }
      if (run.difficultyMode === "hardcore") {
        const u = m.unlockAchievement("hardcore_clear", ach);
        if (u) unlocked.push(u);
      }
      if (run.isDailyChallenge) {
        settings.dailyChallengeDone = m.getDailyChallengeDateKey();
        saveSettings();
        const u = m.unlockAchievement("daily_done", ach);
        if (u) unlocked.push(u);
      }
      const modeKey = settings.enemyMode;
      if (isScenarioMode(modeKey) && run.level >= 1) {
        ach.modesCleared[modeKey] = true;
        m.saveAchievements(ach);
        const cleared = ["agent", "zombie", "clown"].filter((k) => ach.modesCleared[k]);
        if (cleared.length >= 3) {
          const u = m.unlockAchievement("all_modes", ach);
          if (u) unlocked.push(u);
        }
      }
      if (unlocked.length) {
        setHint("Conquista: " + unlocked.map((a) => a.title).join(", "), 2.5);
      }
      renderAchievementsList();
    }

    function checkSurvivorAchievements() {
      const m = Meta();
      if (!m || !isSurvivalRun()) return;
      const ach = m.loadAchievements();
      const unlocked = [];
      if (survival.level >= 10) {
        const u = m.unlockAchievement("survivor_10", ach);
        if (u) unlocked.push(u);
      }
      if (survival.level >= 25) {
        const u = m.unlockAchievement("survivor_25", ach);
        if (u) unlocked.push(u);
      }
      if (unlocked.length) setHint("Conquista: " + unlocked.map((a) => a.title).join(", "), 2.5);
      renderAchievementsList();
    }

    function renderAchievementsList() {
      const m = Meta();
      if (!m) return;
      const data = m.loadAchievements();
      const targets = [
        document.getElementById("achievementsList"),
        document.getElementById("menuAchievementsList")
      ].filter(Boolean);
      if (!targets.length) return;
      for (const el of targets) {
        el.innerHTML = "";
        el.classList.toggle("empty", m.ACHIEVEMENT_DEFS.every((def) => !data.unlocked[def.id]));
        for (const def of m.ACHIEVEMENT_DEFS) {
          const li = document.createElement("li");
          li.className = data.unlocked[def.id] ? "ach-unlocked" : "ach-locked";
          li.textContent = (data.unlocked[def.id] ? "✓ " : "○ ") + def.title + " — " + def.desc;
          el.appendChild(li);
        }
      }
    }

    function renderDailyChallengeUI() {
      const m = Meta();
      const label = document.getElementById("dailyChallengeLabel");
      const btn = document.getElementById("dailyChallengeBtn");
      if (!m || !label) return;
      const dc = m.getDailyChallenge();
      const done = settings.dailyChallengeDone === dc.dateKey;
      label.textContent = dc.label + " | " + dc.mode + " | Fase " + dc.level + (done ? " (concluído)" : "");
      if (btn) btn.disabled = done;
    }

    function startDailyChallenge() {
      const m = Meta();
      if (!m) return;
      const dc = m.getDailyChallenge();
      selectEnemyMode(dc.mode);
      settings.preferredSeed = dc.seed;
      if (seedInput) seedInput.value = dc.seed;
      saveSettings();
      startRun(dc.level, { keepDailyChallenge: true });
      run.isDailyChallenge = true;
      setHint("Desafio diário: " + dc.mode + " | seed " + dc.seed);
    }

    function startQuickPlay() {
      ensureAudio();
      applyMenuEnemyModeSelection();
      const level = Math.max(1, progress.lastLevel || 1);
      run.isDailyChallenge = false;
      startRun(level);
      sfxClick();
    }

    function shareCurrentRun() {
      const m = Meta();
      if (!m) return;
      const text = m.buildShareText({
        level: run.level,
        score: run.score,
        seed: run.seedText,
        mode: settings.enemyMode,
        time: formatTime(getLevelElapsedSec(performance.now()))
      });
      const url = m.buildShareUrl({ seed: run.seedText, mode: settings.enemyMode, level: run.level });
      const payload = text + "\n" + url;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(payload).then(() => setHint("Run copiada para a área de transferência.", 1.5)).catch(() => fallbackCopy(payload));
      } else {
        fallbackCopy(payload);
      }
    }

    function fallbackCopy(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setHint("Run copiada.", 1.2);
      } catch (_) {
        setHint("Copie manualmente: " + text.slice(0, 80) + "…", 2);
      }
      document.body.removeChild(ta);
    }

    function saveMidRunSnapshot() {
      const m = Meta();
      if (!m || !run.active || mode !== MODE_PLAYING) return;
      m.saveMidRunSave({
        version: 1,
        savedAt: Date.now(),
        level: run.level,
        lives: run.lives,
        score: run.score,
        cleared: run.cleared,
        detected: run.detected,
        seedText: run.seedText,
        difficultyMode: run.difficultyMode,
        enemyMode: settings.enemyMode,
        character: getSelectedCharacter(),
        runType: settings.runType,
        playerHealth: player.health,
        isDailyChallenge: run.isDailyChallenge,
        levelElapsed: getLevelElapsedSec(performance.now()),
        survival: isSurvivalRun() ? {
          level: survival.level,
          xp: survival.xp,
          elapsed: survival.elapsed,
          abilities: Object.assign({}, survival.abilities),
          kills: run.survivorKills
        } : null
      });
    }

    function tryResumeMidRun() {
      const m = Meta();
      if (!m) return false;
      const snap = m.loadMidRunSave();
      if (!snap || !snap.version) return false;
      if (menuResumeBtn) menuResumeBtn.disabled = false;
      return true;
    }

    function resumeMidRun() {
      const m = Meta();
      if (!m) return;
      const snap = m.loadMidRunSave();
      if (!snap) return;
      ensureAudio();
      settings.enemyMode = isScenarioMode(snap.enemyMode) ? snap.enemyMode : "agent";
      if (snap.enemyMode === "androidt") settings.enemyMode = "thor";
      if (snap.character === "androidt") settings.character = "thor";
      if (isCharacterId(snap.character)) settings.character = snap.character;
      if (isRunType(snap.runType)) settings.runType = snap.runType;
      if (isDifficultyMode(snap.difficultyMode)) settings.difficultyMode = snap.difficultyMode;
      settings.preferredSeed = snap.seedText || "";
      run.seedText = snap.seedText || resolveSeedForRun();
      run.isDailyChallenge = !!snap.isDailyChallenge;
      resetRunData();
      run.level = snap.level || 1;
      run.lives = snap.lives;
      run.score = snap.score || 0;
      run.cleared = snap.cleared || 0;
      run.detected = snap.detected || 0;
      run.difficultyMode = snap.difficultyMode || settings.difficultyMode;
      player.health = snap.playerHealth || player.health;
      if (snap.survival && isSurvivalRun()) {
        survival.level = snap.survival.level || 1;
        survival.xp = snap.survival.xp || 0;
        survival.abilities = migrateSurvivalAbilityIds(snap.survival.abilities || {});
        survival.elapsed = snap.survival.elapsed || 0;
        run.survivorKills = snap.survival.kills || 0;
        recalcSurvivalStats();
      }
      setupLevel(run.level, { preserveLoadout: true });
      run.levelStartMs = performance.now() - (snap.levelElapsed || 0) * 1000;
      mode = MODE_PLAYING;
      modeTimer = 0;
      run.active = true;
      menuModal.classList.add("hidden");
      updateMobilePlayGate();
      forceViewportResync();
      setHint("Run retomada da fase " + run.level + ".");
      sfxClick();
    }

    function applyUrlBootstrap() {
      const m = Meta();
      if (!m) return;
      const boot = m.parseUrlBootstrap();
      if (!boot) return;
      if (boot.seed) {
        settings.preferredSeed = boot.seed;
        if (seedInput) seedInput.value = boot.seed;
      }
      if (boot.mode && isScenarioMode(boot.mode)) settings.enemyMode = boot.mode;
      saveSettings();
    }

    function updateDifficultyHintLabel() {
      const el = document.getElementById("difficultyHint");
      if (!el) return;
      const cfg = getDifficultyConfig();
      el.textContent = cfg.hint + " | Inimigos: ×" + cfg.enemyCountMul.toFixed(2)
        + " vel ×" + cfg.enemySpeedMul.toFixed(2)
        + " sentidos ×" + cfg.enemySenseMul.toFixed(2)
        + " | Pontos ×" + cfg.scoreMul.toFixed(2);
    }

    function getDifficultyConfigForMode(modeId) {
      const safe = isDifficultyMode(modeId) ? modeId : "operation";
      return DIFFICULTY_MODES[safe] || DIFFICULTY_MODES.operation;
    }

    function updateMenuDifficultyHint() {
      const el = document.getElementById("menuDifficultyHint");
      if (!el) return;
      const modeId = menuDifficultySelect ? menuDifficultySelect.value : settings.difficultyMode;
      const cfg = getDifficultyConfigForMode(modeId);
      el.textContent = cfg.hint;
    }

    function syncMenuDifficultyUI() {
      if (menuDifficultySelect) {
        menuDifficultySelect.value = isDifficultyMode(settings.difficultyMode) ? settings.difficultyMode : "operation";
      }
      updateMenuDifficultyHint();
    }

    function applyMenuDifficultySelection() {
      const next = menuDifficultySelect ? menuDifficultySelect.value : settings.difficultyMode;
      settings.difficultyMode = isDifficultyMode(next) ? next : "operation";
      if (difficultyMode) difficultyMode.value = settings.difficultyMode;
      updateDifficultyHintLabel();
      updateMenuDifficultyHint();
      saveSettings();
    }

    function updateSettingsValueLabels() {
      if (joyDeadzoneValue) {
        joyDeadzoneValue.textContent = Math.round(clamp(settings.joyDeadzone * 100, 0, 45)) + "%";
      }
      if (joySensitivityValue) {
        joySensitivityValue.textContent = Math.round(clamp(settings.joySensitivity * 100, 60, 140)) + "%";
      }
      if (mobileZoomValue) {
        mobileZoomValue.textContent = Math.round(clamp(settings.mobileZoomLevel * 100, 80, 140)) + "%";
      }
      if (touchBtnOffsetXValue) {
        touchBtnOffsetXValue.textContent = String(settings.touchBtnOffsetX || 0) + "px";
      }
      if (touchBtnOffsetYValue) {
        touchBtnOffsetYValue.textContent = String(settings.touchBtnOffsetY || 0) + "px";
      }
    }

    function isFullscreenActive() {
      return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      );
    }

    function updateFullscreenButtons() {
      const active = isFullscreenActive();
      const label = active ? FULLSCREEN_ON_LABEL : FULLSCREEN_OFF_LABEL;
      if (fullscreenBtn) fullscreenBtn.textContent = label;
      if (menuFullscreenBtn) menuFullscreenBtn.textContent = label;
    }

    function isGameOnlyFullscreenPreferred() {
      if (!run.active) return false;
      if (menuModal && !menuModal.classList.contains("hidden")) return false;
      if (isSettingsOverlayOpen()) return false;
      if (modeLoreModal && !modeLoreModal.classList.contains("hidden")) return false;
      if (isGamePauseOpen()) return false;
      return mode === MODE_PLAYING || mode === MODE_PAUSED || mode === MODE_LEVEL_FAIL;
    }

    function syncFullscreenLayout() {
      const active = isFullscreenActive();
      const gameOnly = active && isGameOnlyFullscreenPreferred();
      document.body.classList.toggle("stage-fullscreen", gameOnly);
      document.body.classList.toggle("ui-fullscreen", active && !gameOnly);
    }

    function getFullscreenTarget() {
      return document.documentElement;
    }

    function toggleFullscreenMode() {
      if (isFullscreenActive()) {
        const exit =
          document.exitFullscreen ||
          document.webkitExitFullscreen ||
          document.msExitFullscreen;
        if (exit) {
          try {
            const job = exit.call(document);
            if (job && typeof job.catch === "function") job.catch(() => {});
          } catch (_) {
            // fullscreen exit can fail on older browsers
          }
        }
      } else {
        const target = getFullscreenTarget();
        const request =
          target.requestFullscreen ||
          target.webkitRequestFullscreen ||
          target.msRequestFullscreen;
        if (request) {
          try {
            const job = request === target.requestFullscreen
              ? request.call(target, { navigationUI: "hide" })
              : request.call(target);
            if (job && typeof job.then === "function") {
              job.then(() => {
                tryLockLandscapeOrientation();
              }).catch(() => {});
            } else {
              tryLockLandscapeOrientation();
            }
          } catch (_) {
            // fullscreen must be triggered by a direct user gesture
          }
        }
      }

      syncFullscreenLayout();
      updateFullscreenButtons();
      updateCanvasViewportSize();
    }

    function cellNoise(cx, cy, salt = 0) {
      let n = Math.imul(cx + 11 + salt * 17, 374761393) ^ Math.imul(cy + 7 + salt * 13, 668265263);
      n = (n ^ (n >>> 13)) | 0;
      n = Math.imul(n, 1274126177);
      n ^= n >>> 16;
      return (n >>> 0) / 4294967295;
    }

    function rand() {
      return levelRandom();
    }

    function randInt(min, max) {
      return Math.floor(rand() * (max - min + 1)) + min;
    }

    function pick(arr) {
      return arr[Math.floor(rand() * arr.length)];
    }

    function sanitizeSeed(text) {
      const raw = (text || "").trim().toUpperCase().replace(/\\s+/g, "-");
      return raw.slice(0, 32);
    }

    function makeRandomSeed() {
      const a = Math.floor(Math.random() * 1e9).toString(36).toUpperCase();
      const b = Math.floor((Date.now() + performance.now()) % 1e9).toString(36).toUpperCase();
      return "OPS-" + b + "-" + a;
    }

    function normalizeFixedSeed(text) {
      const cleaned = sanitizeSeed(text);
      return cleaned === AUTO_SEED_LABEL ? "" : cleaned;
    }

    function seedModeLabel() {
      return settings.preferredSeed ? settings.preferredSeed : AUTO_SEED_LABEL;
    }

    function hashSeed(text) {
      let h = 2166136261 >>> 0;
      for (let i = 0; i < text.length; i++) {
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    }

    function calcScenarioThemeIndexForLevel(levelNo) {
      const themeCount = Math.max(1, SCENARIO_THEMES.length);
      const safeLevel = Math.max(1, levelNo | 0);
      const seedOffset = run.seedText ? (hashSeed(run.seedText + "::theme") % themeCount) : 0;
      return (safeLevel - 1 + seedOffset) % themeCount;
    }

    function rebuildEnvironmentPatterns() {
      environmentTextures.floorPattern = null;
      environmentTextures.wallPattern = null;

      const floor = environmentTextures.floorByTheme[scenarioTheme.id];
      if (floor && floor.complete && floor.naturalWidth > 0) {
        environmentTextures.floorPattern = ctx.createPattern(floor, "repeat");
      }

      const wall = environmentTextures.wallByTheme[scenarioTheme.id];
      if (wall && wall.complete && wall.naturalWidth > 0) {
        environmentTextures.wallPattern = ctx.createPattern(wall, "repeat");
      }
    }

    function setScenarioThemeForLevel(levelNo) {
      if (getEnemyKindForSettings() === "zombie") {
        scenarioTheme = SCENARIO_THEMES.find((theme) => theme.id === "outbreak") || SCENARIO_THEMES[0];
      } else {
        const idx = calcScenarioThemeIndexForLevel(levelNo);
        scenarioTheme = SCENARIO_THEMES[idx] || SCENARIO_THEMES[0];
      }
      rebuildEnvironmentPatterns();
    }

    function loadImageAsset(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (img.naturalWidth > 0 && img.naturalHeight > 0) {
            resolve(img);
          } else {
            reject(new Error("Asset invalido: " + src));
          }
        };
        img.onerror = () => reject(new Error("Falha ao carregar asset: " + src));
        img.src = src;
      });
    }

    function trimTransparentImage(img) {
      const iw = img.naturalWidth || img.width || 0;
      const ih = img.naturalHeight || img.height || 0;
      if (iw <= 0 || ih <= 0) return img;

      const srcCanvas = document.createElement("canvas");
      srcCanvas.width = iw;
      srcCanvas.height = ih;
      const srcCtx = srcCanvas.getContext("2d", { willReadFrequently: true });
      if (!srcCtx) return img;
      try {
        srcCtx.drawImage(img, 0, 0);
      } catch (_) {
        return img;
      }
      let pixels;
      try {
        pixels = srcCtx.getImageData(0, 0, iw, ih).data;
      } catch (_) {
        // file:// can block pixel reads in some browsers; keep original image.
        return img;
      }

      let minX = iw;
      let minY = ih;
      let maxX = -1;
      let maxY = -1;
      for (let y = 0; y < ih; y++) {
        for (let x = 0; x < iw; x++) {
          const a = pixels[(y * iw + x) * 4 + 3];
          if (a <= 10) continue;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }

      if (maxX < minX || maxY < minY) return img;
      const tw = maxX - minX + 1;
      const th = maxY - minY + 1;
      if (tw === iw && th === ih) return img;

      const out = document.createElement("canvas");
      out.width = tw;
      out.height = th;
      const outCtx = out.getContext("2d");
      if (!outCtx) return img;
      outCtx.drawImage(srcCanvas, minX, minY, tw, th, 0, 0, tw, th);
      return out;
    }

    function keyOutNearBlack(img, threshold = 36) {
      const iw = img.naturalWidth || img.width || 0;
      const ih = img.naturalHeight || img.height || 0;
      if (iw <= 0 || ih <= 0) return img;

      const srcCanvas = document.createElement("canvas");
      srcCanvas.width = iw;
      srcCanvas.height = ih;
      const srcCtx = srcCanvas.getContext("2d", { willReadFrequently: true });
      if (!srcCtx) return img;
      try {
        srcCtx.drawImage(img, 0, 0);
      } catch (_) {
        return img;
      }

      let pixels;
      try {
        pixels = srcCtx.getImageData(0, 0, iw, ih);
      } catch (_) {
        return img;
      }

      const data = pixels.data;
      const isBg = (idx) =>
        data[idx] <= threshold && data[idx + 1] <= threshold && data[idx + 2] <= threshold;

      // Flood-fill a partir das bordas: so o preto do FUNDO vira transparente.
      // Assim partes escuras da roupa (cercadas por pixels claros) sao preservadas.
      const visited = new Uint8Array(iw * ih);
      const stack = [];
      for (let x = 0; x < iw; x++) {
        stack.push(x, 0, x, ih - 1);
      }
      for (let y = 0; y < ih; y++) {
        stack.push(0, y, iw - 1, y);
      }

      while (stack.length) {
        const py = stack.pop();
        const px = stack.pop();
        if (px < 0 || py < 0 || px >= iw || py >= ih) continue;
        const cell = py * iw + px;
        if (visited[cell]) continue;
        visited[cell] = 1;
        const idx = cell * 4;
        if (!isBg(idx)) continue;
        data[idx + 3] = 0;
        stack.push(px + 1, py, px - 1, py, px, py + 1, px, py - 1);
      }

      const out = document.createElement("canvas");
      out.width = iw;
      out.height = ih;
      const outCtx = out.getContext("2d");
      if (!outCtx) return img;
      outCtx.putImageData(pixels, 0, 0);
      return out;
    }

    function buildUniformSheetFrames(img, cols, rows) {
      const iw = img.naturalWidth || img.width || 0;
      const ih = img.naturalHeight || img.height || 0;
      const safeCols = Math.max(1, cols | 0);
      const safeRows = Math.max(1, rows | 0);
      const frameW = Math.floor(iw / safeCols);
      const frameH = Math.floor(ih / safeRows);
      const frames = [];
      for (let r = 0; r < safeRows; r++) {
        for (let c = 0; c < safeCols; c++) {
          const x = c * frameW;
          const y = r * frameH;
          const w = c === safeCols - 1 ? Math.max(1, iw - x) : frameW;
          const h = r === safeRows - 1 ? Math.max(1, ih - y) : frameH;
          frames.push({ x, y, w, h });
        }
      }
      return { frames, frameW, frameH };
    }

    function detectPlayerSheetColumns(img, preferredCols) {
      if (preferredCols > 0) return preferredCols;
      const iw = img.naturalWidth || img.width || 0;
      const ih = img.naturalHeight || img.height || 0;
      if (iw <= 0 || ih <= 0) return 7;
      if (iw < ih * 1.35) return 1;
      for (const cols of [7, 6, 8, 5, 4]) {
        const frameW = iw / cols;
        if (frameW >= ih * 0.28 && frameW <= ih * 1.35) return cols;
      }
      return Math.max(4, Math.round(iw / ih));
    }

    function measureSheetFrameContentBounds(img, rect, alphaMin = 20, rgbMin = 36) {
      const iw = img.naturalWidth || img.width || 0;
      const ih = img.naturalHeight || img.height || 0;
      const rx = Math.max(0, rect.x | 0);
      const ry = Math.max(0, rect.y | 0);
      const rw = Math.max(1, Math.min(rect.w | 0, iw - rx));
      const rh = Math.max(1, Math.min(rect.h | 0, ih - ry));

      const crop = document.createElement("canvas");
      crop.width = rw;
      crop.height = rh;
      const cropCtx = crop.getContext("2d", { willReadFrequently: true });
      if (!cropCtx) return { x: rx, y: ry, w: rw, h: rh };

      try {
        cropCtx.drawImage(img, rx, ry, rw, rh, 0, 0, rw, rh);
      } catch (_) {
        return { x: rx, y: ry, w: rw, h: rh };
      }

      let pixels;
      try {
        pixels = cropCtx.getImageData(0, 0, rw, rh).data;
      } catch (_) {
        return { x: rx, y: ry, w: rw, h: rh };
      }

      let minX = rw;
      let minY = rh;
      let maxX = -1;
      let maxY = -1;
      let sumX = 0;
      let sumY = 0;
      let count = 0;
      for (let y = 0; y < rh; y++) {
        for (let x = 0; x < rw; x++) {
          const i = (y * rw + x) * 4;
          const a = pixels[i + 3];
          if (a <= alphaMin) continue;
          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          if (r <= rgbMin && g <= rgbMin && b <= rgbMin) continue;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
          sumX += x;
          sumY += y;
          count++;
        }
      }

      if (maxX < minX || maxY < minY) return { x: rx, y: ry, w: rw, h: rh, anchorX: 0.5, anchorY: 1 };

      const pad = Math.max(10, Math.round(Math.min(rw, rh) * 0.035));
      const cx0 = Math.max(0, minX - pad);
      const cy0 = Math.max(0, minY - pad);
      const cx1 = Math.min(rw - 1, maxX + pad);
      const cy1 = Math.min(rh - 1, maxY + pad);
      const tw = cx1 - cx0 + 1;
      const th = cy1 - cy0 + 1;
      const centroidX = count > 0 ? sumX / count : (minX + maxX) * 0.5;

      const footY = maxY;
      const footRowY = footY - cy0 + 0.5;

      return {
        x: rx + cx0,
        y: ry + cy0,
        w: tw,
        h: th,
        anchorX: clamp((centroidX - cx0) / tw, 0.2, 0.8),
        anchorY: clamp(footRowY / th, 0.72, 1)
      };
    }

    // Recorte fixo por celula do sheet (sem getImageData) = mesmo resultado no PC e no Netlify.
    function playerFrameCropRect(frame) {
      const padX = Math.max(4, Math.round(frame.w * 0.02));
      const padY = Math.max(4, Math.round(frame.h * 0.02));
      return {
        x: frame.x + padX,
        y: frame.y + padY,
        w: Math.max(1, frame.w - padX * 2),
        h: Math.max(1, frame.h - padY * 2)
      };
    }

    function configurePlayerOperativeSheet(img, cfg = {}) {
      if (!img) {
        playerOperativeRuntime = null;
        return;
      }
      const cols = detectPlayerSheetColumns(img, cfg.sheetCols || PLAYER_OPERATIVE_SHEET.sheetCols);
      const rows = Math.max(1, cfg.sheetRows || PLAYER_OPERATIVE_SHEET.sheetRows || 1);
      const layout = buildUniformSheetFrames(img, cols, rows);
      const targetSize = cfg.targetHeight || PLAYER_OPERATIVE_SHEET.targetHeight || PLAYER_SPRITE_SIZE;
      const bakedFrames = [];

      for (const frame of layout.frames) {
        const crop = playerFrameCropRect(frame);
        const baked = bakeSpriteToTarget(img, targetSize, crop);
        bakedFrames.push(baked ? { img: baked } : null);
      }

      playerOperativeRuntime = {
        bakedFrames,
        scale: 1,
        cols,
        rows,
        buildId: "20260528r"
      };
    }

    function bakeSpriteToTarget(img, targetSize, sourceRect = null) {
      const iw = sourceRect ? sourceRect.w : (img.naturalWidth || img.width || 0);
      const ih = sourceRect ? sourceRect.h : (img.naturalHeight || img.height || 0);
      if (!targetSize || targetSize <= 0 || iw <= 0 || ih <= 0) return null;

      const scale = targetSize / Math.max(iw, ih);
      const w = Math.max(1, Math.round(iw * scale));
      const h = Math.max(1, Math.round(ih * scale));
      const out = document.createElement("canvas");
      out.width = w;
      out.height = h;
      const outCtx = out.getContext("2d");
      if (!outCtx) return null;
      outCtx.imageSmoothingEnabled = true;
      outCtx.imageSmoothingQuality = "high";

      if (sourceRect) {
        outCtx.drawImage(img, sourceRect.x, sourceRect.y, sourceRect.w, sourceRect.h, 0, 0, w, h);
      } else {
        outCtx.drawImage(img, 0, 0, iw, ih, 0, 0, w, h);
      }

      return out;
    }

    async function loadVisualAssets() {
      const sourceCache = new Map();
      const fetchAsset = (src) => {
        if (sourceCache.has(src)) return sourceCache.get(src);
        const job = loadImageAsset(src);
        sourceCache.set(src, job);
        return job;
      };

      const spriteJobs = Object.entries(SPRITE_ASSET_PATHS).map(async ([key, cfg]) => {
        try {
          let img = null;
          const srcList = [cfg.src].concat(cfg.fallbacks || []);
          for (const src of srcList) {
            try {
              img = await fetchAsset(src);
              break;
            } catch (_) {
              // tenta proximo caminho
            }
          }
          if (!img) throw new Error("sprite missing: " + key);
          let usableImg = img;
          if (cfg.keyBlack) usableImg = keyOutNearBlack(usableImg, cfg.keyBlackThreshold ?? 36);
          if (cfg.trimAlpha) usableImg = trimTransparentImage(usableImg);

          if (key === "playerSheet") {
            sprites.playerSheet = usableImg;
            spriteSourceRect.playerSheet = null;
            spriteScale.playerSheet = 1;
            configurePlayerOperativeSheet(usableImg, cfg);
            return;
          }

          if (key === "player") {
            if (typeof cfg.targetSize === "number" && cfg.targetSize > 0) {
              const baked = bakeSpriteToTarget(usableImg, cfg.targetSize, null);
              sprites.playerPortrait = baked || usableImg;
            } else {
              sprites.playerPortrait = usableImg;
            }
            return;
          }

          const sourceRect = cfg.sourceRect ? {
            x: cfg.sourceRect.x | 0,
            y: cfg.sourceRect.y | 0,
            w: Math.max(1, cfg.sourceRect.w | 0),
            h: Math.max(1, cfg.sourceRect.h | 0)
          } : null;

          if (typeof cfg.targetSize === "number" && cfg.targetSize > 0) {
            const baked = bakeSpriteToTarget(usableImg, cfg.targetSize, sourceRect);
            if (baked) {
              sprites[key] = baked;
              spriteSourceRect[key] = null;
              spriteScale[key] = 1;
            } else {
              sprites[key] = usableImg;
              spriteSourceRect[key] = sourceRect;
              const iw = sourceRect ? sourceRect.w : (usableImg.naturalWidth || usableImg.width || 1);
              const ih = sourceRect ? sourceRect.h : (usableImg.naturalHeight || usableImg.height || 1);
              spriteScale[key] = cfg.targetSize / Math.max(iw, ih);
            }
          } else {
            sprites[key] = usableImg;
            spriteSourceRect[key] = sourceRect;
            spriteScale[key] = cfg.scale || 1;
          }
        } catch (_) {
          // fallback procedural sprite
        }
      });

      const textureJobs = SCENARIO_THEMES.flatMap((theme) => [
        fetchAsset(theme.floorTexture).then((img) => {
          environmentTextures.floorByTheme[theme.id] = img;
        }).catch(() => {
          // fallback to plain floor shading
        }),
        fetchAsset(theme.wallTexture).then((img) => {
          environmentTextures.wallByTheme[theme.id] = img;
        }).catch(() => {
          // fallback to plain wall shading
        })
      ]);

      await Promise.all(spriteJobs.concat(textureJobs));
      if (playerOperativeRuntime && playerOperativeRuntime.buildId) {
        console.info("[Stealth Ops] player sprite build:", playerOperativeRuntime.buildId);
      }
      rebuildEnvironmentPatterns();
      invalidateMapCache();
    }

    function makeSeededRng(seed) {
      let s = seed >>> 0;
      if (s === 0) s = 0x9e3779b9;
      return () => {
        s = (s + 0x6D2B79F5) >>> 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    function setLevelRng(seedText, levelNo) {
      const superSalt = isSurvivalRun() && Number.isFinite(run.superMapVariant)
        ? "::super" + run.superMapVariant
        : "";
      const seedNum = hashSeed(seedText + superSalt + "::" + levelNo);
      levelRandom = makeSeededRng(seedNum);
    }

    function getSuperCharacterContext() {
      return isThorCharacter() ? "thor" : (isButcherCharacter() ? "butcher" : "homelander");
    }

    function superBgmPoolForContext(context) {
      if (isSurvivalRun()) return SURVIVAL_BGM_TRACK_INDICES;
      return SUPER_BGM_POOLS[context] || SUPER_BGM_POOLS.homelander;
    }

    function pickModeBgmPool() {
      if (currentEnemyKind === "zombie") return ZOMBIE_BGM_TRACK_INDICES;
      if (currentEnemyKind === "clown") return CLOWN_BGM_TRACK_INDICES;
      return AGENT_BGM_TRACK_INDICES;
    }

    function pickRandomSuperBgm(context) {
      const ready = getReadyBgmIndices(superBgmPoolForContext(context));
      if (!ready.length) return -1;
      return ready[(Math.random() * ready.length) | 0];
    }

    function rollSuperRunVariety() {
      if (!isSuperCharacter()) {
        run.superMapVariant = 0;
        run.superBgmTrack = -1;
        return;
      }
      run.superMapVariant = ((Math.random() * 0x7fffffff) | 0);
      run.superBgmTrack = pickRandomSuperBgm(getSuperCharacterContext());
      audio.activeBgmContext = "";
      audio.bgmAdvancePending = true;
    }

    function dist(ax, ay, bx, by) {
      return Math.hypot(bx - ax, by - ay);
    }

    function angleTo(ax, ay, bx, by) {
      return Math.atan2(by - ay, bx - ax);
    }

    function normAngle(a) {
      while (a <= -Math.PI) a += Math.PI * 2;
      while (a > Math.PI) a -= Math.PI * 2;
      return a;
    }

    function inBounds(cx, cy) {
      return cx >= 0 && cy >= 0 && cx < W && cy < H;
    }

    function cellAt(px, py) {
      const cx = Math.floor(px / TILE);
      const cy = Math.floor(py / TILE);
      if (!inBounds(cx, cy)) return 1;
      return grid[cy][cx];
    }

    function worldToCell(px, py) {
      return {
        x: clamp(Math.floor(px / TILE), 0, W - 1),
        y: clamp(Math.floor(py / TILE), 0, H - 1)
      };
    }

    function cellCenter(cell) {
      return { x: (cell.x + 0.5) * TILE, y: (cell.y + 0.5) * TILE };
    }

    function cellBlocksMovement(v) {
      return v === CELL_WALL || v === CELL_DOOR_CLOSED;
    }

    function cellBlocksSight(v) {
      return v === CELL_WALL || v === CELL_DOOR_CLOSED;
    }

    function isWalkableCell(v) {
      return v === CELL_FLOOR || v === CELL_DOOR_OPEN;
    }

    function propBlocksPoint(px, py, extraRadius = 0) {
      for (const p of mapProps) {
        if (!p.blocks) continue;
        const pr = (p.r || 8) + extraRadius;
        if (dist(px, py, p.x, p.y) < pr) return true;
      }
      return false;
    }

    function isCorridorCell(g, cx, cy) {
      if (!isWalkable(g, cx, cy)) return false;
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      let floors = 0;
      let walls = 0;
      for (const d of dirs) {
        const nx = cx + d[0];
        const ny = cy + d[1];
        if (!inBounds(nx, ny)) return false;
        const v = g[ny][nx];
        if (isWalkableCell(v)) floors += 1;
        else if (v === CELL_WALL) walls += 1;
      }
      return floors === 2 && walls === 2;
    }

    function isNearCorridor(g, cx, cy, radius = 1) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (isCorridorCell(g, cx + dx, cy + dy)) return true;
        }
      }
      return false;
    }

    function cellBlockedForEntity(g, cx, cy, entRadius, avoidProps = true) {
      if (!isWalkable(g, cx, cy)) return true;
      if (!avoidProps) return false;
      const wx = (cx + 0.5) * TILE;
      const wy = (cy + 0.5) * TILE;
      const pad = (entRadius || 9) * 0.32;
      const pts = [
        { x: wx - pad, y: wy - pad },
        { x: wx + pad, y: wy - pad },
        { x: wx - pad, y: wy + pad },
        { x: wx + pad, y: wy + pad }
      ];
      for (const p of pts) {
        if (propBlocksPoint(p.x, p.y, 0)) return true;
      }
      return false;
    }

    function cellAtOnGrid(px, py, g = grid) {
      const cx = Math.floor(px / TILE);
      const cy = Math.floor(py / TILE);
      if (!inBounds(cx, cy)) return 1;
      return g[cy][cx];
    }

    function isWallOnGrid(px, py, g = grid) {
      if (propBlocksPoint(px, py)) return true;
      return cellBlocksMovement(cellAtOnGrid(px, py, g));
    }

    function canEnemySpawnAt(wx, wy, entRadius = 9, g = grid) {
      const r = entRadius || 9;
      const pts = [
        { x: wx, y: wy },
        { x: wx - r, y: wy - r },
        { x: wx + r, y: wy - r },
        { x: wx - r, y: wy + r },
        { x: wx + r, y: wy + r }
      ];
      for (const p of pts) {
        if (isWallOnGrid(p.x, p.y, g)) return false;
      }
      const c = worldToCell(wx, wy);
      if (!inBounds(c.x, c.y) || !isWalkable(g, c.x, c.y)) return false;
      return true;
    }

    function resolveEnemySpawnPosition(wx, wy, entRadius = 9, g = grid) {
      if (canEnemySpawnAt(wx, wy, entRadius, g)) return { x: wx, y: wy };
      const free = findNearestFreePosition(wx, wy, entRadius, 8);
      if (free && canEnemySpawnAt(free.x, free.y, entRadius, g)) return free;
      return null;
    }

    function canEntityOccupyCell(cx, cy, entRadius) {
      if (!inBounds(cx, cy) || !isWalkable(grid, cx, cy)) return false;
      return canEnemySpawnAt((cx + 0.5) * TILE, (cy + 0.5) * TILE, entRadius);
    }

    function findNearestFreePosition(px, py, entRadius, maxCellRadius = 6) {
      const start = worldToCell(px, py);
      if (canEntityOccupyCell(start.x, start.y, entRadius)) {
        return { x: px, y: py };
      }
      for (let ring = 1; ring <= maxCellRadius; ring++) {
        for (let dy = -ring; dy <= ring; dy++) {
          for (let dx = -ring; dx <= ring; dx++) {
            if (Math.abs(dx) !== ring && Math.abs(dy) !== ring) continue;
            const cx = start.x + dx;
            const cy = start.y + dy;
            if (!canEntityOccupyCell(cx, cy, entRadius)) continue;
            return cellCenter({ x: cx, y: cy });
          }
        }
      }
      return null;
    }

    function isWall(px, py) {
      if (propBlocksPoint(px, py)) return true;
      return cellBlocksMovement(cellAt(px, py));
    }

    function doorTileCoords(door) {
      const w = door.width || DOOR_WIDTH;
      const coords = [];
      if (door.orient === "v") {
        for (let i = 0; i < w; i++) coords.push({ x: door.x, y: door.y + i });
      } else {
        for (let i = 0; i < w; i++) coords.push({ x: door.x + i, y: door.y });
      }
      return coords;
    }

    function doorCenterWorld(door) {
      const tiles = doorTileCoords(door);
      let sx = 0;
      let sy = 0;
      for (const t of tiles) {
        sx += (t.x + 0.5) * TILE;
        sy += (t.y + 0.5) * TILE;
      }
      return { x: sx / tiles.length, y: sy / tiles.length };
    }

    function setDoorGridCells(door, g, cellValue) {
      for (const t of doorTileCoords(door)) {
        if (inBounds(t.x, t.y)) g[t.y][t.x] = cellValue;
      }
    }

    function getDoorAtCell(cx, cy) {
      for (const door of levelDoors) {
        for (const t of doorTileCoords(door)) {
          if (t.x === cx && t.y === cy) return door;
        }
      }
      return null;
    }

    function openDoor(door, broken = false, skipCacheInvalidate = false) {
      if (!door || door.open) return;
      door.open = true;
      door.broken = !!broken;
      setDoorGridCells(door, grid, CELL_DOOR_OPEN);
      // As portas sao desenhadas como overlay (nao ficam no cache do piso), entao
      // ao destruir muitas portas (voo do Homelander) podemos pular o rebuild total.
      if (!skipCacheInvalidate) invalidateMapCache();
      if (broken) {
        shakeScreen(6, 0.12);
        playSfx("gunImpact", 0.55, { rate: 0.68 });
      } else {
        sfxDoorOpen();
      }
    }

    function closeDoor(door) {
      if (!door || !door.open || door.broken) return;
      door.open = false;
      setDoorGridCells(door, grid, CELL_DOOR_CLOSED);
      invalidateMapCache();
      sfxDoorClose();
    }

    function rectContains(rx, ry, rw, rh, x, y) {
      return x >= rx && x <= rx + rw && y >= ry && y <= ry + rh;
    }

    function formatTime(seconds) {
      const s = Math.max(0, Math.floor(seconds));
      const m = Math.floor(s / 60);
      const r = String(s % 60).padStart(2, "0");
      return m + ":" + r;
    }

    function makeGrid(fill) {
      return Array.from({ length: H }, () => Array(W).fill(fill));
    }

    function actionDown(name) {
      const keysForAction = keyMap[name] || [];
      for (const key of keysForAction) {
        if (keys.has(key)) return true;
      }
      return false;
    }

    function consumeActionPress(name) {
      const keysForAction = keyMap[name] || [];
      for (const key of keysForAction) {
        if (pressed.has(key)) {
          pressed.delete(key);
          return true;
        }
      }
      return false;
    }

    function consumeTouchFlag(name) {
      if (touchInput[name]) {
        touchInput[name] = false;
        return true;
      }
      return false;
    }

    function setHint(text) {
      hint.textContent = text;
    }

    function pushHint(text, cooldown = 1) {
      if (hintCooldown <= 0) {
        setHint(text);
        hintCooldown = cooldown;
      }
    }

    function missionProgressText() {
      if (isSurvivalRun()) {
        return "Survival Nv " + survival.level;
      }
      const done = objectives.filter((o) => o.done).length;
      const total = objectives.length;
      return done + "/" + total;
    }

    function allObjectivesDone() {
      if (isSurvivalRun()) return false;
      return objectives.length === 0 || objectives.every((o) => o.done);
    }

    function isSurvivalRun() {
      return survival.active && isSuperCharacter();
    }

    function survivalXpToNext(level) {
      const lvl = Math.max(1, Math.floor(level) || 1);
      return Math.round(SURVIVAL_XP_BASE * Math.pow(lvl, 1.48) + lvl * 18);
    }

    function survivalAbilityLevel(id) {
      return survival.abilities[id] || 0;
    }

    function survivalAbilityDef(id) {
      return SURVIVAL_ABILITIES.find((a) => a.id === id) || null;
    }

    function survivalAbilityDisplay(def) {
      if (def && def.id === "basicLaser" && isThorCharacter()) {
        return {
          name: "Kit: Mjolnir",
          desc: "Aumenta alcance, dano e energia para girar e arremessar o Mjolnir."
        };
      }
      return { name: def ? def.name : "", desc: def ? def.desc : "" };
    }

    function resetSurvivalState() {
      survival.active = isSuperCharacter() && settings.runType === "survivor";
      survival.level = 1;
      survival.xp = 0;
      survival.nextXp = survivalXpToNext(1);
      survival.pendingChoices = null;
      survival.choiceRects.length = 0;
      survival.elapsed = 0;
      survival.waveIndex = 0;
      survival.spawnT = 0.8;
      survival.bossT = 95;
      survival.abilities = Object.create(null);
      survival.cooldowns = Object.create(null);
      survival.stats = {
        damage: 1,
        area: 1,
        cooldown: 1,
        move: 1,
        armor: 0,
        regen: 0,
        magnet: 1,
        pickupXp: 1
      };
      if (survival.active) recalcSurvivalStats();
    }

    function recalcSurvivalStats() {
      const holyMilk = survivalAbilityLevel("holyMilk");
      const rush = survivalAbilityLevel("compoundRush");
      const core = survivalAbilityLevel("stormCore");
      const basicLightning = survivalAbilityLevel("basicLightning");
      const magnet = survivalAbilityLevel("magnet");
      const armor = survivalAbilityLevel("battleArmor");
      survival.stats.damage = 1 + core * 0.12 + survivalAbilityLevel("basicLaser") * 0.08;
      survival.stats.area = 1 + Math.max(0, survival.level - 1) * 0.006;
      survival.stats.cooldown = Math.max(0.58, 1 - rush * 0.06 - core * 0.025);
      survival.stats.move = 1 + rush * 0.035 + survivalAbilityLevel("basicMove") * 0.025;
      survival.stats.armor = armor * 0.11;
      survival.stats.regen = holyMilk * 0.025;
      survival.stats.magnet = 1 + magnet * 0.42;
      survival.stats.pickupXp = 1 + magnet * 0.04;
      player.rageMax = 100 + basicLightning * 10;
      player.maxHealth = HOMELANDER_MAX_HEALTH + holyMilk;
      player.health = Math.min(player.maxHealth, Math.max(player.health, player.maxHealth));
      if (isSurvivalRun()) {
        const laser = survivalAbilityLevel("basicLaser");
        const move = survivalAbilityLevel("basicMove");
        const laserFrac = player.laserMaxFuel > 0 ? player.laserFuel / player.laserMaxFuel : 1;
        const flyFrac = player.flyMaxFuel > 0 ? player.flyFuel / player.flyMaxFuel : 1;
        const baseLaser = isThorCharacter() ? THOR_LASER_MAX_FUEL : HOMELANDER_LASER_MAX_FUEL;
        const baseFly = isButcherCharacter() ? BUTCHER_DASH_CHARGES : (isThorCharacter() ? THOR_FLY_MAX_FUEL : HOMELANDER_FLY_MAX_FUEL);
        player.laserMaxFuel = baseLaser * (1 + laser * 0.085);
        if (isThorCharacter()) {
          const hammerFrac = player.mjolnirMaxEnergy > 0 ? player.mjolnirEnergy / player.mjolnirMaxEnergy : 1;
          player.mjolnirMaxEnergy = THOR_MJOLNIR_MAX_ENERGY * (1 + laser * 0.085);
          player.mjolnirEnergy = Math.min(player.mjolnirMaxEnergy, player.mjolnirMaxEnergy * hammerFrac);
        }
        player.flyMaxFuel = baseFly * (1 + move * 0.08);
        player.laserFuel = Math.min(player.laserMaxFuel, player.laserMaxFuel * laserFrac);
        player.flyFuel = Math.min(player.flyMaxFuel, player.flyMaxFuel * flyFrac);
      }
    }

    function grantSurvivalXp(amount, x, y) {
      if (!isSurvivalRun() || survival.pendingChoices) return;
      survival.xp += Math.max(0, amount || 0) * survival.stats.pickupXp;
      while (survival.xp >= survival.nextXp && survival.level < SURVIVAL_MAX_LEVEL) {
        survival.xp -= survival.nextXp;
        survival.level += 1;
        run.level = Math.max(run.level, survival.level);
        survival.nextXp = survivalXpToNext(survival.level);
        openSurvivalLevelChoices();
        break;
      }
    }

    function availableSurvivalUpgrades() {
      return SURVIVAL_ABILITIES.filter((a) => {
        if (survivalAbilityLevel(a.id) >= a.max) return false;
        if (a.id === "basicLightning" || a.id === "stormCore") return isThorCharacter();
        return true;
      });
    }

    function openSurvivalLevelChoices() {
      const pool = availableSurvivalUpgrades();
      if (!pool.length) return;
      const picks = [];
      const weighted = pool.slice();
      while (picks.length < 3 && weighted.length) {
        const idx = (Math.random() * weighted.length) | 0;
        picks.push(weighted.splice(idx, 1)[0]);
      }
      survival.pendingChoices = picks;
      survival.choiceRects.length = 0;
      shakeScreen(5, 0.18);
      setInteractionFeedback("NÍVEL " + survival.level, "ok", 1.0);
      setHint("Subiu de nível: escolha uma habilidade com 1, 2, 3 ou toque na carta.");
    }

    function applySurvivalUpgrade(id) {
      const def = survivalAbilityDef(id);
      if (!def || survivalAbilityLevel(id) >= def.max) return;
      survival.abilities[id] = survivalAbilityLevel(id) + 1;
      survival.pendingChoices = null;
      survival.choiceRects.length = 0;
      recalcSurvivalStats();
      run.score += 80 + survival.level * 8;
      const display = survivalAbilityDisplay(def);
      setInteractionFeedback(display.name + " Nv " + survival.abilities[id], "ok", 0.9);
      pushHint(display.name + " melhorada para nível " + survival.abilities[id] + ".", 1.0);
    }

    function chooseSurvivalCard(index) {
      if (!survival.pendingChoices) return false;
      const pick = survival.pendingChoices[index];
      if (!pick) return false;
      applySurvivalUpgrade(pick.id);
      return true;
    }

    function updateMissionHint() {
      if (isSurvivalRun()) {
        setHint("Sobreviva, colete " + superHealItemLabel() + " para XP e escolha habilidades automáticas ao subir de nível.");
        return;
      }
      const done = objectives.filter((o) => o.done).length;
      const total = objectives.length;
      const sectorPrefix = scenarioTheme ? "[" + scenarioTheme.label + "] " : "";
      const weather = getScenarioWeather();
      const weatherNote = weather === "night"
        ? "Visão limitada. "
        : (weather === "rain" ? "Chuva reduz a visão. " : "");
      const objectiveVerb = isSuperCharacter()
        ? "Esmague os objetivos"
        : (objectives.some((o) => (o.holdNeed || 0) > 0) ? "Complete os objetivos" : "Invada os terminais");
      const dossierText = isSuperCharacter() ? "pegue o item de extração" : "pegue o dossiê";

      if (!item.taken && !allObjectivesDone()) {
        setHint(weatherNote + sectorPrefix + objectiveVerb + " (" + done + "/" + total + "), " + dossierText + " e escape.");
      } else if (!item.taken && allObjectivesDone()) {
        setHint(weatherNote + sectorPrefix + "Objetivos completos. " + (isSuperCharacter() ? "Pegue o item de extração." : "Pegue o dossiê."));
      } else if (item.taken && !allObjectivesDone()) {
        setHint(weatherNote + sectorPrefix + (isSuperCharacter() ? "Item em mãos. " : "Dossiê em mãos. ") + "Termine os objetivos (" + done + "/" + total + ").");
      } else {
        setHint(weatherNote + sectorPrefix + "Tudo pronto. Vá para o EXIT.");
      }
    }

    function saveProgress() {
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify({
          highestLevel: progress.highestLevel,
          lastLevel: progress.lastLevel,
          bestTimes: progress.bestTimes,
          credits: progress.credits,
          inventory: progress.inventory
        }));
      } catch (_) {
        // ignore write errors
      }
    }

    function loadProgress() {
      progress.highestLevel = 1;
      progress.lastLevel = 1;
      progress.bestTimes = Object.create(null);
      progress.credits = 0;
      progress.inventory = createDefaultInventory();

      try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return;

        const highest = Number(parsed.highestLevel);
        if (Number.isFinite(highest)) {
          progress.highestLevel = Math.max(1, Math.floor(highest));
        }

        const last = Number(parsed.lastLevel);
        if (Number.isFinite(last)) {
          progress.lastLevel = clamp(Math.floor(last), 1, progress.highestLevel);
        }

        const credits = Number(parsed.credits);
        if (Number.isFinite(credits)) {
          progress.credits = Math.max(0, Math.floor(credits));
        }

        progress.inventory = normalizeInventory(parsed.inventory);

        if (parsed.bestTimes && typeof parsed.bestTimes === "object") {
          for (const [k, v] of Object.entries(parsed.bestTimes)) {
            const levelNo = Number(k);
            const sec = Number(v);
            if (!Number.isFinite(levelNo) || !Number.isFinite(sec)) continue;
            if (levelNo < 1 || sec <= 0) continue;
            progress.bestTimes[String(Math.floor(levelNo))] = sec;
          }
        }
      } catch (_) {
        // ignore corrupt progress data
      }
    }

    function getBestLevelTime(levelNo) {
      const key = String(Math.max(1, Math.floor(levelNo)));
      const value = progress.bestTimes[key];
      return Number.isFinite(value) && value > 0 ? value : null;
    }

    function recordBestLevelTime(levelNo, sec) {
      if (!Number.isFinite(sec) || sec <= 0) return;
      const key = String(Math.max(1, Math.floor(levelNo)));
      const prev = getBestLevelTime(levelNo);
      if (prev === null || sec < prev) {
        progress.bestTimes[key] = sec;
      }
      saveProgress();
    }

    function unlockLevel(levelNo) {
      const lvl = Math.max(1, Math.floor(levelNo));
      if (lvl > progress.highestLevel) {
        progress.highestLevel = lvl;
      }
      if (lvl > progress.lastLevel) {
        progress.lastLevel = lvl;
      }
      saveProgress();
    }

    function getSelectedMenuLevel() {
      const maxLevel = Math.max(1, progress.highestLevel);
      const parsed = Number(menuLevelSelect ? menuLevelSelect.value : 1);
      if (!Number.isFinite(parsed)) return 1;
      return clamp(Math.floor(parsed), 1, maxLevel);
    }

    function refreshMenuLevelSelect(preferredLevel = null) {
      if (!menuLevelSelect) return;
      const maxLevel = Math.max(1, progress.highestLevel);
      const target = clamp(
        Number.isFinite(preferredLevel) ? Math.floor(preferredLevel) : progress.highestLevel,
        1,
        maxLevel
      );

      menuLevelSelect.innerHTML = "";
      for (let lvl = 1; lvl <= maxLevel; lvl++) {
        const opt = document.createElement("option");
        opt.value = String(lvl);
        opt.textContent = "Fase " + lvl;
        menuLevelSelect.appendChild(opt);
      }
      menuLevelSelect.value = String(target);
    }

    function renderBestTimes() {
      if (!bestTimesList) return;

      bestTimesList.innerHTML = "";
      const entries = Object.entries(progress.bestTimes)
        .map(([level, sec]) => ({ level: Number(level), sec: Number(sec) }))
        .filter((row) => Number.isFinite(row.level) && row.level > 0 && Number.isFinite(row.sec) && row.sec > 0)
        .sort((a, b) => a.level - b.level);

      if (entries.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Conclua fases para registrar tempos.";
        bestTimesList.appendChild(li);
        return;
      }

      for (const row of entries) {
        const li = document.createElement("li");
        li.textContent = "Fase " + row.level + ": " + formatTime(row.sec);
        bestTimesList.appendChild(li);
      }
    }

    function loadRankings() {
      rankings.length = 0;
      try {
        const raw = localStorage.getItem(SCORE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return;
        for (const entry of parsed) {
          if (!entry || typeof entry !== "object") continue;
          rankings.push({
            score: Number(entry.score) || 0,
            level: Number(entry.level) || 1,
            seed: typeof entry.seed === "string" ? entry.seed : "AUTO",
            date: typeof entry.date === "string" ? entry.date : ""
          });
        }
      } catch (_) {
        // ignore corrupt ranking
      }
    }

    function saveRankings() {
      try {
        localStorage.setItem(SCORE_KEY, JSON.stringify(rankings));
      } catch (_) {
        // ignore write errors
      }
    }

    function renderRankings() {
      rankList.innerHTML = "";
      rankList.classList.toggle("empty", rankings.length === 0);

      if (rankings.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Sem runs salvas ainda.";
        rankList.appendChild(li);
        return;
      }

      for (let i = 0; i < rankings.length; i++) {
        const r = rankings[i];
        const li = document.createElement("li");
        li.textContent = "#" + (i + 1) + " " + r.score + " pts | Fase " + r.level + " | Seed " + r.seed + " | " + r.date;
        rankList.appendChild(li);
      }
    }

    function clearRankings() {
      rankings.length = 0;
      saveRankings();
      renderRankings();
      setHint("Ranking local limpo.");
      sfxClick();
    }

    function recordRunScore() {
      rankings.push({
        score: run.score,
        level: run.level,
        seed: run.seedText,
        date: new Date().toLocaleDateString("pt-BR")
      });
      rankings.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.level - a.level;
      });
      if (rankings.length > 10) rankings.length = 10;
      saveRankings();
      renderRankings();
    }

    function buildSprite(size, painter) {
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const s = c.getContext("2d");
      painter(s, size);
      return c;
    }

    function createSprites() {
      for (const key of Object.keys(spriteScale)) spriteScale[key] = 1;

      function roundedRectPath(s, x, y, w, h, r) {
        const rr = Math.min(r, w * 0.5, h * 0.5);
        s.beginPath();
        s.moveTo(x + rr, y);
        s.lineTo(x + w - rr, y);
        s.arcTo(x + w, y, x + w, y + rr, rr);
        s.lineTo(x + w, y + h - rr);
        s.arcTo(x + w, y + h, x + w - rr, y + h, rr);
        s.lineTo(x + rr, y + h);
        s.arcTo(x, y + h, x, y + h - rr, rr);
        s.lineTo(x, y + rr);
        s.arcTo(x, y, x + rr, y, rr);
        s.closePath();
      }

      function fillRoundRect(s, x, y, w, h, r, fill) {
        roundedRectPath(s, x, y, w, h, r);
        s.fillStyle = fill;
        s.fill();
      }

      function strokeRoundRect(s, x, y, w, h, r, stroke, lw = 1) {
        roundedRectPath(s, x, y, w, h, r);
        s.strokeStyle = stroke;
        s.lineWidth = lw;
        s.stroke();
      }

      function drawAgentSprite(cfg) {
        return buildSprite(ENTITY_SPRITE_SIZE, (s, n) => {
          const cx = n * 0.5;
          const cy = n * 0.5;

          s.fillStyle = "rgba(2,9,16,0.58)";
          s.beginPath();
          s.ellipse(cx, cy + 12.2, 12.5, 5.5, 0, 0, Math.PI * 2);
          s.fill();

          const body = s.createRadialGradient(cx - 3, cy - 4, 2, cx, cy, 16);
          body.addColorStop(0, cfg.bodyHi);
          body.addColorStop(1, cfg.bodyLo);
          s.fillStyle = body;
          s.beginPath();
          s.arc(cx, cy + 2, 13.2, 0, Math.PI * 2);
          s.fill();
          s.strokeStyle = cfg.edge;
          s.lineWidth = 1.7;
          s.stroke();

          const chest = s.createLinearGradient(cx - 8, cy, cx + 8, cy);
          chest.addColorStop(0, cfg.chest);
          chest.addColorStop(1, cfg.arm);
          fillRoundRect(s, cx - 8.5, cy - 0.5, 17, 8.5, 2.5, chest);
          s.fillStyle = cfg.accent;
          s.fillRect(cx - 1.2, cy - 0.2, 2.4, 7.8);

          const helmet = s.createRadialGradient(cx + 5, cy - 7, 2, cx + 4, cy - 7, 8.5);
          helmet.addColorStop(0, cfg.headHi);
          helmet.addColorStop(1, cfg.headLo);
          s.fillStyle = helmet;
          s.beginPath();
          s.arc(cx + 4.3, cy - 6.8, 7.2, 0, Math.PI * 2);
          s.fill();
          s.strokeStyle = cfg.edge;
          s.lineWidth = 1.2;
          s.stroke();

          fillRoundRect(s, cx + 0.2, cy - 9.2, 9.3, 4.6, 1.7, cfg.visor);
          s.fillStyle = cfg.visorGlow;
          s.globalAlpha = 0.5;
          s.fillRect(cx + 1.1, cy - 8.8, 2.7, 3.7);
          s.globalAlpha = 1;

          fillRoundRect(s, cx - 14.6, cy - 2.7, 4.5, 10.8, 2, cfg.arm);
          fillRoundRect(s, cx + 9.8, cy - 2.7, 4.5, 10.8, 2, cfg.arm);

          fillRoundRect(s, cx - 7.4, cy + 10, 5.4, 5.8, 1.3, cfg.boot);
          fillRoundRect(s, cx + 2.2, cy + 10, 5.4, 5.8, 1.3, cfg.boot);

          s.strokeStyle = cfg.accentSoft;
          s.globalAlpha = 0.4;
          s.beginPath();
          s.moveTo(cx - 6.5, cy + 8.7);
          s.lineTo(cx + 6.5, cy + 8.7);
          s.stroke();
          s.globalAlpha = 1;
        });
      }

      sprites.playerProcedural = drawAgentSprite({
        bodyHi: "#4f738d",
        bodyLo: "#1d3348",
        headHi: "#f4fbff",
        headLo: "#8faac0",
        edge: "rgba(8,26,40,0.92)",
        chest: "#274b68",
        arm: "#203f59",
        boot: "#142a3b",
        visor: "#56c5ff",
        visorGlow: "#ccf4ff",
        accent: "#cdefff",
        accentSoft: "#9dd4f4"
      });
      sprites.player = sprites.playerProcedural;

      sprites.item = buildSprite(38, (s, n) => {
        s.fillStyle = "rgba(1,8,14,0.5)";
        s.beginPath();
        s.ellipse(n * 0.5, n * 0.77, n * 0.29, n * 0.13, 0, 0, Math.PI * 2);
        s.fill();

        const shell = s.createLinearGradient(0, 5, 0, n - 6);
        shell.addColorStop(0, "#ffe1a6");
        shell.addColorStop(1, "#c28b35");
        fillRoundRect(s, 7, 8, n - 14, n - 16, 4, shell);
        strokeRoundRect(s, 7, 8, n - 14, n - 16, 4, "#734e1a", 1.8);

        fillRoundRect(s, 10, 11, n - 20, n - 22, 2.4, "#1c2f45");
        s.strokeStyle = "rgba(210,238,255,0.26)";
        s.lineWidth = 1;
        s.beginPath();
        s.moveTo(11, 15);
        s.lineTo(n - 11, 15);
        s.stroke();

        s.fillStyle = "#7fd8ff";
        s.fillRect(n * 0.5 - 1.2, 12.5, 2.4, n - 25);
        s.fillStyle = "#ffe29f";
        fillRoundRect(s, n * 0.5 - 3.8, n * 0.5 - 3.5, 7.6, 7, 1.5, "#f0b546");
        strokeRoundRect(s, n * 0.5 - 3.8, n * 0.5 - 3.5, 7.6, 7, 1.5, "#7a4b10", 1.1);
      });

      sprites.exit = buildSprite(56, (s, n) => {
        const halo = s.createRadialGradient(n * 0.5, n * 0.5, n * 0.08, n * 0.5, n * 0.5, n * 0.55);
        halo.addColorStop(0, "rgba(132,240,255,0.35)");
        halo.addColorStop(1, "rgba(21,80,120,0)");
        s.fillStyle = halo;
        s.fillRect(0, 0, n, n);

        const frame = s.createLinearGradient(0, 0, n, n);
        frame.addColorStop(0, "rgba(78,196,255,0.85)");
        frame.addColorStop(1, "rgba(25,88,133,0.9)");
        fillRoundRect(s, 6, 6, n - 12, n - 12, 6, frame);
        strokeRoundRect(s, 6, 6, n - 12, n - 12, 6, "rgba(185,242,255,0.95)", 2);
        fillRoundRect(s, 11, 11, n - 22, n - 22, 4, "rgba(6,26,42,0.88)");

        s.strokeStyle = "rgba(125,226,255,0.48)";
        s.lineWidth = 1;
        for (let i = 0; i < 4; i++) {
          const y = 16 + i * 8;
          s.beginPath();
          s.moveTo(13, y);
          s.lineTo(n - 13, y);
          s.stroke();
        }

        s.fillStyle = "#9ff3ff";
        s.font = "700 10px Cascadia Mono, monospace";
        s.fillText("EXIT", 17, n * 0.57);
      });

      function terminalSprite(active) {
        return buildSprite(36, (s, n) => {
          s.fillStyle = "rgba(2,10,16,0.5)";
          s.beginPath();
          s.ellipse(n * 0.5, n * 0.78, n * 0.26, n * 0.1, 0, 0, Math.PI * 2);
          s.fill();

          const shell = s.createLinearGradient(0, 4, 0, n - 6);
          shell.addColorStop(0, active ? "#214236" : "#22384d");
          shell.addColorStop(1, active ? "#0f241d" : "#111f2c");
          fillRoundRect(s, 6, 5, n - 12, n - 12, 4, shell);
          strokeRoundRect(s, 6, 5, n - 12, n - 12, 4, active ? "#6db596" : "#496b84", 1.6);

          fillRoundRect(s, 9, 8, n - 18, 11, 2.5, active ? "#98ffc4" : "#35516a");
          s.strokeStyle = active ? "rgba(193,255,219,0.58)" : "rgba(130,174,205,0.34)";
          s.lineWidth = 1;
          s.beginPath();
          s.moveTo(10, 12);
          s.lineTo(n - 10, 12);
          s.stroke();

          s.fillStyle = active ? "#b2ffd3" : "#526d83";
          fillRoundRect(s, 11, n - 11, n - 22, 3.5, 1.4, active ? "#b2ffd3" : "#526d83");
          s.fillStyle = active ? "#56d994" : "#293d52";
          fillRoundRect(s, n * 0.5 - 2.2, n - 9.8, 4.4, 2.6, 1, active ? "#56d994" : "#293d52");
        });
      }

      sprites.terminalOff = terminalSprite(false);
      sprites.terminalOn = terminalSprite(true);

      function guardSprite(bodyHi, bodyLo, visor, accent) {
        return drawAgentSprite({
          bodyHi,
          bodyLo,
          headHi: "#d7e8f5",
          headLo: "#6a859b",
          edge: "rgba(10,23,35,0.93)",
          chest: "#1e3347",
          arm: "#1b3144",
          boot: "#102331",
          visor,
          visorGlow: "#d9f8ff",
          accent,
          accentSoft: accent
        });
      }

      function clownSprite() {
        return buildSprite(ENTITY_SPRITE_SIZE, (s, n) => {
          const cx = n * 0.5;
          const cy = n * 0.5;

          s.fillStyle = "rgba(2,6,12,0.58)";
          s.beginPath();
          s.ellipse(cx, cy + 12.4, 12.8, 5.7, 0, 0, Math.PI * 2);
          s.fill();

          const body = s.createRadialGradient(cx - 2, cy - 3, 2, cx, cy + 1, 16);
          body.addColorStop(0, "#fff7df");
          body.addColorStop(0.52, "#b92646");
          body.addColorStop(1, "#421528");
          s.fillStyle = body;
          s.beginPath();
          s.arc(cx, cy + 3, 13.2, 0, Math.PI * 2);
          s.fill();
          s.strokeStyle = "rgba(34,10,18,0.95)";
          s.lineWidth = 1.7;
          s.stroke();

          fillRoundRect(s, cx - 11, cy - 1, 7.4, 8.6, 2.5, "#f7f0d8");
          fillRoundRect(s, cx + 3.6, cy - 1, 7.4, 8.6, 2.5, "#f7f0d8");
          fillRoundRect(s, cx - 1.4, cy - 1.6, 2.8, 10, 1.2, "#ffcf3c");

          fillRoundRect(s, cx - 15.4, cy - 2.8, 4.9, 11, 2, "#8d2242");
          fillRoundRect(s, cx + 10.5, cy - 2.8, 4.9, 11, 2, "#2b8dd4");
          fillRoundRect(s, cx - 7.4, cy + 10.1, 5.4, 5.8, 1.3, "#24101c");
          fillRoundRect(s, cx + 2.2, cy + 10.1, 5.4, 5.8, 1.3, "#24101c");

          s.fillStyle = "#e51d3e";
          for (let i = 0; i < 5; i++) {
            const a = -1.2 + i * 0.45;
            s.beginPath();
            s.arc(cx + 4.1 + Math.cos(a) * 7.4, cy - 7 + Math.sin(a) * 5.3, 3.2, 0, Math.PI * 2);
            s.fill();
          }

          const face = s.createRadialGradient(cx + 4, cy - 8, 1, cx + 4, cy - 7, 8.6);
          face.addColorStop(0, "#fff9f0");
          face.addColorStop(1, "#d8cbc0");
          s.fillStyle = face;
          s.beginPath();
          s.arc(cx + 4.3, cy - 6.8, 7.4, 0, Math.PI * 2);
          s.fill();
          s.strokeStyle = "rgba(34,10,18,0.95)";
          s.lineWidth = 1.2;
          s.stroke();

          s.fillStyle = "#1b1015";
          s.beginPath();
          s.arc(cx + 1.5, cy - 8.6, 1.1, 0, Math.PI * 2);
          s.arc(cx + 6.8, cy - 8.6, 1.1, 0, Math.PI * 2);
          s.fill();

          s.fillStyle = "#ff274b";
          s.beginPath();
          s.arc(cx + 4.2, cy - 6.2, 2.1, 0, Math.PI * 2);
          s.fill();

          s.strokeStyle = "#7a1024";
          s.lineWidth = 1.3;
          s.beginPath();
          s.arc(cx + 4.2, cy - 4.8, 3.7, 0.2, Math.PI - 0.2);
          s.stroke();
        });
      }

      sprites.guardPatrol = guardSprite("#6a9cc0", "#254865", "#8fd5ff", "#b7dfff");
      sprites.guardSuspicious = guardSprite("#8f7a4c", "#4a3e22", "#ffd98f", "#ffd898");
      sprites.guardAlert = guardSprite("#9d4f4f", "#5c1f1f", "#ff9b9b", "#ffb3b3");
      sprites.zombie = drawAgentSprite({
        bodyHi: "#7d9b6b",
        bodyLo: "#2d4731",
        headHi: "#b6c5a0",
        headLo: "#526a4a",
        edge: "rgba(7,22,13,0.95)",
        chest: "#405d3c",
        arm: "#596b42",
        boot: "#1d2c22",
        visor: "#d9f2b4",
        visorGlow: "#f3ffd0",
        accent: "#8fffb1",
        accentSoft: "#6fdc8d"
      });
      sprites.clown = clownSprite();
    }

    function migrateSurvivalAbilityIds(abilities) {
      if (!abilities || typeof abilities !== "object") return abilities || {};
      if (abilities.basicRage && !abilities.basicLightning) {
        abilities.basicLightning = abilities.basicRage;
        delete abilities.basicRage;
      }
      if (abilities.berserkCore && !abilities.stormCore) {
        abilities.stormCore = abilities.berserkCore;
        delete abilities.berserkCore;
      }
      return abilities;
    }

    function loadSettings() {
      try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (typeof parsed.masterVolume === "number") settings.masterVolume = clamp(parsed.masterVolume, 0, 1);
          if (typeof parsed.musicVolume === "number") settings.musicVolume = clamp(parsed.musicVolume, 0, 1);
          if (typeof parsed.sfxEnabled === "boolean") settings.sfxEnabled = parsed.sfxEnabled;
          if (typeof parsed.musicEnabled === "boolean") settings.musicEnabled = parsed.musicEnabled;
          if (isEnemyMode(parsed.enemyMode)) settings.enemyMode = parsed.enemyMode;
          if (parsed.enemyMode === "androidt") settings.enemyMode = "thor";
          if (isScenarioMode(parsed.enemyMode)) settings.enemyMode = parsed.enemyMode;
          if (isCharacterId(parsed.character)) settings.character = parsed.character;
          if (parsed.character === "androidt") settings.character = "thor";
          else if (isSuperMode(parsed.enemyMode)) settings.character = getEnemyModeConfig(parsed.enemyMode).character;
          if (isRunType(parsed.runType)) settings.runType = parsed.runType;
          if (!isScenarioMode(settings.enemyMode)) settings.enemyMode = "agent";
          if (parsed.qualityMode === "low" || parsed.qualityMode === "medium" || parsed.qualityMode === "high") {
            settings.qualityMode = parsed.qualityMode;
          }
          if (isDifficultyMode(parsed.difficultyMode)) settings.difficultyMode = parsed.difficultyMode;
          if (typeof parsed.touchMode === "string") settings.touchMode = parsed.touchMode;
          if (parsed.handedness === "left" || parsed.handedness === "right") settings.handedness = parsed.handedness;
          if (parsed.touchLayout === "compact" || parsed.touchLayout === "comfortable" || parsed.touchLayout === "tablet") {
            settings.touchLayout = parsed.touchLayout;
          }
          if (typeof parsed.touchBtnOffsetX === "number") settings.touchBtnOffsetX = clamp(parsed.touchBtnOffsetX, -40, 40);
          if (typeof parsed.touchBtnOffsetY === "number") settings.touchBtnOffsetY = clamp(parsed.touchBtnOffsetY, -40, 40);
          if (typeof parsed.hapticEnabled === "boolean") settings.hapticEnabled = parsed.hapticEnabled;
          if (typeof parsed.joyDeadzone === "number") settings.joyDeadzone = clamp(parsed.joyDeadzone, 0, 0.45);
          if (typeof parsed.joySensitivity === "number") settings.joySensitivity = clamp(parsed.joySensitivity, 0.6, 1.4);
          if (typeof parsed.mobileZoomLevel === "number") settings.mobileZoomLevel = clamp(parsed.mobileZoomLevel, 0.8, 1.4);
          if (parsed.hudScale === "large" || parsed.hudScale === "normal") settings.hudScale = parsed.hudScale;
          if (parsed.hudContrast === "high" || parsed.hudContrast === "normal") settings.hudContrast = parsed.hudContrast;
          if (typeof parsed.preferredSeed === "string") {
            const storedSeed = normalizeFixedSeed(parsed.preferredSeed);
            settings.preferredSeed = storedSeed.startsWith("OPS-") ? "" : storedSeed;
          }
          if (isDevToolsEnabled() && parsed.laserCalibration) {
            settings.laserCalibration = sanitizeLaserCalibration(parsed.laserCalibration);
          } else {
            settings.laserCalibration = null;
          }
          if (parsed.colorblindMode === "normal" || parsed.colorblindMode === "protanopia" ||
              parsed.colorblindMode === "deuteranopia" || parsed.colorblindMode === "tritanopia") {
            settings.colorblindMode = parsed.colorblindMode;
          }
          if (parsed.keybinds && typeof parsed.keybinds === "object") settings.keybinds = parsed.keybinds;
          if (typeof parsed.dailyChallengeDone === "string") settings.dailyChallengeDone = parsed.dailyChallengeDone;
        }
      } catch (_) {
        // ignore corrupt storage
      }
      applyKeybindSettings();
      applyBrowserPlatformDefaults();
      applyAccessibilityClasses();
      updateSettingsValueLabels();
      updateDifficultyHintLabel();
    }

    function saveSettings() {
      try {
        const payload = Object.assign({}, settings);
        if (!isDevToolsEnabled()) delete payload.laserCalibration;
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(payload));
      } catch (_) {
        // ignore write issues
      }
    }

    function syncSettingsUI() {
      masterVolume.value = String(Math.round(settings.masterVolume * 100));
      musicVolume.value = String(Math.round(settings.musicVolume * 100));
      sfxEnabled.value = settings.sfxEnabled ? "on" : "off";
      musicEnabled.value = settings.musicEnabled ? "on" : "off";
      if (qualityMode) qualityMode.value = settings.qualityMode;
      if (difficultyMode) difficultyMode.value = isDifficultyMode(settings.difficultyMode) ? settings.difficultyMode : "operation";
      touchMode.value = settings.touchMode;
      if (handedness) handedness.value = settings.handedness;
      if (touchLayout) touchLayout.value = settings.touchLayout || "comfortable";
      if (touchBtnOffsetX) touchBtnOffsetX.value = String(settings.touchBtnOffsetX || 0);
      if (touchBtnOffsetY) touchBtnOffsetY.value = String(settings.touchBtnOffsetY || 0);
      if (hapticEnabled) hapticEnabled.value = settings.hapticEnabled ? "on" : "off";
      if (joyDeadzone) joyDeadzone.value = String(Math.round(settings.joyDeadzone * 100));
      if (joySensitivity) joySensitivity.value = String(Math.round(settings.joySensitivity * 100));
      if (mobileZoom) mobileZoom.value = String(Math.round(settings.mobileZoomLevel * 100));
      if (hudScale) hudScale.value = settings.hudScale;
      if (hudContrast) hudContrast.value = settings.hudContrast;
      if (colorblindMode) colorblindMode.value = settings.colorblindMode || "normal";
      seedInput.value = settings.preferredSeed;
      updateSettingsValueLabels();
      updateDifficultyHintLabel();
      syncKeybindUI();
    }

    function isMenuWizardSupers() {
      return menuWizardFamily === "supers";
    }

    function isMenuWizardSurvivor() {
      return isMenuWizardSupers() && settings.runType === "survivor";
    }

    function getMenuWizardBack(screen) {
      if (screen === "family") return "home";
      if (screen === "runtype") return "family";
      if (screen === "scenario") return isMenuWizardSupers() ? "runtype" : "family";
      if (screen === "character") return "scenario";
      if (screen === "difficulty") return isMenuWizardSupers() ? "character" : "scenario";
      if (screen === "level") return "difficulty";
      return "home";
    }

    function getMenuWizardNext(screen) {
      if (screen === "family") return isMenuWizardSupers() ? "runtype" : "scenario";
      if (screen === "runtype") return "scenario";
      if (screen === "scenario") return isMenuWizardSupers() ? "character" : "difficulty";
      if (screen === "character") return "difficulty";
      if (screen === "difficulty") return isMenuWizardSurvivor() ? "" : "level";
      return "";
    }

    function setMenuWizardFamily(family) {
      menuWizardFamily = family === "supers" ? "supers" : "agent";
      if (menuWizardFamily === "agent") {
        settings.character = "operative";
        settings.runType = "campaign";
      } else if (getSelectedCharacter() === "operative") {
        settings.character = "homelander";
      }
      syncMenuFamilyUI();
      syncMenuRunTypeUI();
      syncMenuCharacterUI();
    }

    function setMenuWizardRunType(runType) {
      if (!isRunType(runType)) return;
      if (!isMenuWizardSupers() && runType === "survivor") return;
      settings.runType = runType;
      syncMenuRunTypeUI();
    }

    function setMenuWizardScenario(modeId) {
      if (!isScenarioMode(modeId)) return;
      settings.enemyMode = modeId;
      syncMenuScenarioUI();
      applyMenuModeVisuals(modeId);
    }

    function setMenuWizardCharacter(charId) {
      if (!isCharacterId(charId) || charId === "operative") return;
      settings.character = charId;
      syncMenuCharacterUI();
      applyMenuModeVisuals(settings.enemyMode);
    }

    function syncMenuFamilyUI() {
      for (const card of menuFamilyCards) {
        const active = card.dataset.menuFamily === menuWizardFamily;
        card.classList.toggle("selected", active);
        card.setAttribute("aria-pressed", active ? "true" : "false");
      }
    }

    function syncMenuRunTypeUI() {
      const runType = isRunType(settings.runType) ? settings.runType : "campaign";
      if (!isMenuWizardSupers()) settings.runType = "campaign";
      for (const card of menuRunTypeCards) {
        const isSurvivor = card.dataset.runType === "survivor";
        const disabled = isSurvivor && !isMenuWizardSupers();
        card.classList.toggle("disabled", disabled);
        const active = card.dataset.runType === settings.runType && !disabled;
        card.classList.toggle("selected", active);
        card.setAttribute("aria-pressed", active ? "true" : "false");
      }
      if (menuRunTypeSub) {
        menuRunTypeSub.textContent = isMenuWizardSupers()
          ? "Campanha com fases ou Survivor sem parar."
          : "Modo Agente usa apenas Campanha.";
      }
    }

    function syncMenuScenarioUI() {
      const modeId = isScenarioMode(settings.enemyMode) ? settings.enemyMode : "agent";
      settings.enemyMode = modeId;
      for (const card of menuScenarioCards) {
        const active = card.dataset.scenarioMode === modeId;
        card.classList.toggle("selected", active);
        card.setAttribute("aria-pressed", active ? "true" : "false");
        const cfg = getEnemyModeConfig(card.dataset.scenarioMode);
        const nameEl = card.querySelector(".menu-mode-name");
        const lineEl = card.querySelector(".menu-mode-line");
        if (nameEl) nameEl.textContent = cfg.label;
        if (lineEl) lineEl.textContent = cfg.menuTagline || cfg.menuDesc || "";
      }
    }

    function syncMenuCharacterUI() {
      const charId = getSelectedCharacter();
      for (const card of menuCharacterCards) {
        const active = card.dataset.superMode === charId;
        card.classList.toggle("selected", active);
        card.setAttribute("aria-pressed", active ? "true" : "false");
        const cfg = getEnemyModeConfig(card.dataset.superMode);
        const nameEl = card.querySelector(".menu-mode-name");
        const lineEl = card.querySelector(".menu-mode-line");
        if (nameEl) nameEl.textContent = cfg.label;
        if (lineEl) lineEl.textContent = cfg.menuTagline || cfg.menuDesc || "";
      }
    }

    function syncMenuWizardUI() {
      syncMenuFamilyUI();
      syncMenuRunTypeUI();
      syncMenuScenarioUI();
      syncMenuCharacterUI();
      syncMenuDifficultyUI();
    }

    function applyMenuWizardSelections() {
      if (!isMenuWizardSupers()) {
        settings.character = "operative";
        settings.runType = "campaign";
      }
      if (!isScenarioMode(settings.enemyMode)) settings.enemyMode = "agent";
      applyMenuDifficultySelection();
      saveSettings();
      applyMenuModeVisuals(settings.enemyMode);
    }

    function syncMenuEnemyModeUI() {
      menuWizardFamily = isSuperCharacter() ? "supers" : "agent";
      syncMenuWizardUI();
    }

    function applyMenuEnemyModeSelection() {
      applyMenuWizardSelections();
    }

    function selectEnemyMode(modeId, persist = true) {
      if (!isEnemyMode(modeId)) return;
      if (isSuperMode(modeId)) {
        menuWizardFamily = "supers";
        settings.character = getEnemyModeConfig(modeId).character;
        if (!settings.runType || settings.runType === "campaign") {
          settings.runType = settings.runType || "campaign";
        }
      } else if (isScenarioMode(modeId)) {
        menuWizardFamily = "agent";
        settings.enemyMode = modeId;
        settings.character = "operative";
        settings.runType = "campaign";
      }
      if (!isScenarioMode(settings.enemyMode)) settings.enemyMode = "agent";
      syncMenuWizardUI();
      applyMenuModeVisuals(isScenarioMode(modeId) ? modeId : settings.enemyMode);
      if (persist) saveSettings();
    }

    function syncMenuModeCardCopy() {
      syncMenuScenarioUI();
      syncMenuCharacterUI();
    }

    function loreAssetDownloadName(label, suffix, url) {
      const safe = String(label || "modo").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const extMatch = String(url || "").match(/\.([a-z0-9]+)(?:\?.*)?$/i);
      const ext = extMatch ? extMatch[1] : "png";
      return safe + "-" + suffix + "." + ext;
    }

    function setModeLoreAsset(img, link, url, altText, downloadName) {
      if (img) {
        img.src = url;
        img.alt = altText;
      }
      if (link) {
        link.href = url;
        link.setAttribute("download", downloadName || altText);
      }
    }

    function openModeLore(modeId) {
      if (!modeLoreModal || !isEnemyMode(modeId)) return;
      ensureAudio();
      const cfg = getEnemyModeConfig(modeId);
      if (modeLoreTitle) modeLoreTitle.textContent = cfg.menuTitle || cfg.label;
      if (modeLoreTagline) modeLoreTagline.textContent = cfg.menuTagline || cfg.menuDesc || "";
      if (modeLoreBody) {
        modeLoreBody.textContent = "";
        const parts = (cfg.menuLore || cfg.menuDesc || "").split("\n\n");
        for (const part of parts) {
          if (!part.trim()) continue;
          const p = document.createElement("p");
          p.textContent = part.trim();
          modeLoreBody.appendChild(p);
        }
      }
      const label = cfg.label || "Modo";
      const wallpaper = cfg.loreImage || "assets/sprites/fundohomelander.jpg";
      const sprite = cfg.loreSprite || wallpaper;
      setModeLoreAsset(
        modeLoreWallpaper,
        modeLoreWallpaperDl,
        wallpaper,
        "Wallpaper — " + label,
        loreAssetDownloadName(label, "wallpaper", wallpaper)
      );
      setModeLoreAsset(
        modeLoreSprite,
        modeLoreSpriteDl,
        sprite,
        "Personagem — " + label,
        loreAssetDownloadName(label, "personagem", sprite)
      );
      modeLoreModal.classList.remove("hidden");
      modeLoreModal.setAttribute("aria-hidden", "false");
    }

    function closeModeLore() {
      if (!modeLoreModal) return;
      modeLoreModal.classList.add("hidden");
      modeLoreModal.setAttribute("aria-hidden", "true");
    }

    function applyMenuModeVisuals(modeId = settings.enemyMode) {
      const scenarioMode = isScenarioMode(modeId) ? modeId : (isScenarioMode(settings.enemyMode) ? settings.enemyMode : "agent");
      const themeMode = isMenuWizardSupers() ? getSelectedCharacter() : scenarioMode;
      const safeTheme = isEnemyMode(themeMode) ? themeMode : scenarioMode;
      const cfg = getEnemyModeConfig(scenarioMode);
      document.body.classList.remove("menu-theme-agent", "menu-theme-zombie", "menu-theme-clown", "menu-theme-homelander", "menu-theme-butcher", "menu-theme-thor");
      document.body.classList.add("menu-theme-" + safeTheme);

      if (menuModal && cfg && cfg.loreImage) {
        const wash = "linear-gradient(180deg, rgba(4, 8, 18, 0.52), rgba(2, 6, 14, 0.78))";
        menuModal.style.backgroundImage = wash + ", url(\"" + cfg.loreImage + "\")";
        menuModal.style.backgroundSize = "cover, cover";
        menuModal.style.backgroundPosition = "center center, center center";
        menuModal.style.backgroundRepeat = "no-repeat, no-repeat";
      }

      syncMenuModeCardCopy();
      syncMenuFamilyUI();
      syncMenuRunTypeUI();
      syncMenuScenarioUI();
      syncMenuCharacterUI();
    }

    function applySettingsFromUI() {
      settings.masterVolume = clamp(Number(masterVolume.value) / 100, 0, 1);
      settings.musicVolume = clamp(Number(musicVolume.value) / 100, 0, 1);
      settings.sfxEnabled = sfxEnabled.value === "on";
      settings.musicEnabled = musicEnabled.value === "on";
      const nextQuality = qualityMode ? qualityMode.value : "high";
      settings.qualityMode = (nextQuality === "high" || nextQuality === "medium" || nextQuality === "low") ? nextQuality : "high";
      const nextDifficulty = difficultyMode ? difficultyMode.value : "operation";
      settings.difficultyMode = isDifficultyMode(nextDifficulty) ? nextDifficulty : "operation";
      const nextTouchMode = touchMode.value;
      settings.touchMode = (nextTouchMode === "auto" || nextTouchMode === "on" || nextTouchMode === "off") ? nextTouchMode : "auto";
      const nextHandedness = handedness ? handedness.value : "right";
      settings.handedness = (nextHandedness === "left" || nextHandedness === "right") ? nextHandedness : "right";
      const nextTouchLayout = touchLayout ? touchLayout.value : "comfortable";
      settings.touchLayout = (nextTouchLayout === "compact" || nextTouchLayout === "comfortable" || nextTouchLayout === "tablet")
        ? nextTouchLayout
        : "comfortable";
      settings.touchBtnOffsetX = clamp(touchBtnOffsetX ? Number(touchBtnOffsetX.value) : 0, -40, 40);
      settings.touchBtnOffsetY = clamp(touchBtnOffsetY ? Number(touchBtnOffsetY.value) : 0, -40, 40);
      settings.hapticEnabled = !hapticEnabled || hapticEnabled.value !== "off";
      settings.joyDeadzone = clamp((joyDeadzone ? Number(joyDeadzone.value) : 18) / 100, 0, 0.45);
      settings.joySensitivity = clamp((joySensitivity ? Number(joySensitivity.value) : 100) / 100, 0.6, 1.4);
      settings.mobileZoomLevel = clamp((mobileZoom ? Number(mobileZoom.value) : 100) / 100, 0.8, 1.4);
      const nextHudScale = hudScale ? hudScale.value : "normal";
      settings.hudScale = (nextHudScale === "large" || nextHudScale === "normal") ? nextHudScale : "normal";
      const nextHudContrast = hudContrast ? hudContrast.value : "normal";
      settings.hudContrast = (nextHudContrast === "high" || nextHudContrast === "normal") ? nextHudContrast : "normal";
      const nextColorblind = colorblindMode ? colorblindMode.value : "normal";
      settings.colorblindMode = (nextColorblind === "protanopia" || nextColorblind === "deuteranopia" || nextColorblind === "tritanopia") ? nextColorblind : "normal";
      settings.preferredSeed = normalizeFixedSeed(seedInput.value);
      applyAccessibilityClasses();
      updateSettingsValueLabels();
      updateDifficultyHintLabel();
      applyAudioSettings();
      updateTouchVisibility();
      resetFollowCamera();
      saveSettings();
    }

    function normalizeBgmEntry(entry) {
      if (typeof entry === "string") return { sources: [entry] };
      const sources = [entry.primary].concat(entry.fallbacks || []).filter(Boolean);
      return { sources: sources.length ? sources : [""] };
    }

    function loadBgmTrackSource(track, trackIndex) {
      if (!track || !track.el || !track.sources || !track.sources.length) return;
      if (track.sourceIndex >= track.sources.length) {
        track.failed = true;
        track.ready = false;
        if (audio.activeBgmTrack === trackIndex) audio.activeBgmTrack = -1;
        syncMusicState();
        return;
      }
      const src = track.sources[track.sourceIndex];
      track.src = src;
      track.failed = false;
      track.ready = false;
      try {
        track.el.src = src;
        track.el.load();
      } catch (_) {
        track.sourceIndex += 1;
        loadBgmTrackSource(track, trackIndex);
      }
    }

    function makeAudioElement(src, loop = false) {
      const el = new Audio(src);
      el.preload = "auto";
      el.loop = !!loop;
      return el;
    }

    function ensureSfxAssets() {
      if (audio.sfxLoaded) return;

      for (const name of Object.keys(SFX_FILES)) {
        const cfg = SFX_FILES[name];
        const el = makeAudioElement(cfg.src, !!cfg.loop);
        const track = { el, src: cfg.src, volume: cfg.volume || 1, failed: false, loop: !!cfg.loop };
        el.addEventListener("error", () => {
          track.failed = true;
        });
        try {
          el.load();
        } catch (_) {
          track.failed = true;
        }

        audio.sfxBank[name] = track;
        if (cfg.loop) audio.loopingSfx[name] = track;
      }

      audio.sfxLoaded = true;
      updateLoopingSfxVolumes();
    }

    function ensureAudio() {
      if (!audio.ctx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;

        audio.ctx = new Ctx();
        audio.master = audio.ctx.createGain();
        audio.sfx = audio.ctx.createGain();
        audio.music = audio.ctx.createGain();

        audio.music.connect(audio.master);
        audio.sfx.connect(audio.master);
        audio.master.connect(audio.ctx.destination);
      }

      ensureSfxAssets();

      if (audio.bgmTracks.length === 0) {
        const tracksToLoad = BGM_FILES.concat(AUDIO_FALLBACK_BGM_FILES);
        for (let i = 0; i < tracksToLoad.length; i++) {
          const { sources } = normalizeBgmEntry(tracksToLoad[i]);
          const rotating = ROTATING_BGM_TRACK_INDICES.includes(i);
          const nemesisLoop = NEMESIS_BGM_TRACK_INDICES.includes(i);
          const el = makeAudioElement(sources[0], nemesisLoop || !rotating);
          const track = { el, src: sources[0], sources, sourceIndex: 0, ready: false, failed: false };
          el.addEventListener("canplaythrough", () => {
            track.ready = true;
            track.failed = false;
            syncMusicState();
          });
          el.addEventListener("error", () => {
            track.sourceIndex += 1;
            loadBgmTrackSource(track, i);
          });
          if (!nemesisLoop) {
            el.addEventListener("ended", () => {
              if (audio.activeBgmTrack === i) {
                audio.bgmAdvancePending = true;
                syncMusicState();
              }
            });
          }
          try {
            el.load();
          } catch (_) {
            track.sourceIndex = 1;
            loadBgmTrackSource(track, i);
          }
          audio.bgmTracks.push(track);
        }
      }

      if (audio.ctx && audio.ctx.state === "suspended") {
        audio.ctx.resume();
      }

      applyAudioSettings();
      audio.unlocked = true;
      syncMusicState();
    }

    let menuMusicPrimed = false;
    // Tenta tocar a trilha do menu o mais cedo possivel. Navegadores bloqueiam
    // som antes de qualquer gesto, entao tambem armamos um gatilho no primeiro
    // toque/clique/tecla em qualquer lugar da pagina (nao so no botao INICIAR).
    function primeMenuMusicAutoplay() {
      if (menuMusicPrimed) return;
      menuMusicPrimed = true;

      const kick = () => {
        ensureAudio();
        if (audio.ctx && audio.ctx.state === "suspended") {
          audio.ctx.resume().catch(() => {});
        }
        syncMusicState();
      };

      // Tentativa imediata (alguns navegadores/PWAs permitem).
      kick();

      const onFirstGesture = () => {
        kick();
        window.removeEventListener("pointerdown", onFirstGesture, true);
        window.removeEventListener("keydown", onFirstGesture, true);
        window.removeEventListener("touchstart", onFirstGesture, true);
        window.removeEventListener("click", onFirstGesture, true);
      };
      window.addEventListener("pointerdown", onFirstGesture, true);
      window.addEventListener("keydown", onFirstGesture, true);
      window.addEventListener("touchstart", onFirstGesture, true);
      window.addEventListener("click", onFirstGesture, true);
    }

    function isPreGameMenuActive() {
      if (!menuModal || menuModal.classList.contains("hidden")) return false;
      // Trilha de menu so antes do jogo (ou apos a run terminar), nao durante a pausa.
      return mode === MODE_MENU || mode === MODE_RUN_OVER || !run.active;
    }

    function shouldPlayMusic() {
      if (!settings.musicEnabled) return false;
      if (run.active && mode !== MODE_RUN_OVER) return true;
      return isPreGameMenuActive();
    }

    function calcMusicThemeIndexForLevel(levelNo) {
      const themeCount = Math.max(1, MUSIC_THEMES.length);
      const safeLevel = Math.max(1, levelNo | 0);
      const seedOffset = run.seedText ? (hashSeed(run.seedText) % themeCount) : 0;
      return (safeLevel - 1 + seedOffset) % themeCount;
    }

    function setMusicThemeForLevel(levelNo) {
      const nextIndex = calcMusicThemeIndexForLevel(levelNo);
      audio.musicThemeIndex = nextIndex;
      audio.musicStep = 0;

      if (audio.musicTimer) {
        stopMusicLoop();
      }

      if (audio.activeBgmTrack >= 0) {
        const current = audio.bgmTracks[audio.activeBgmTrack];
        if (current && !current.el.paused) current.el.pause();
        audio.activeBgmTrack = -1;
      }

      syncMusicState();
    }

    function getCurrentMusicTheme() {
      if (MUSIC_THEMES.length === 0) return null;
      return MUSIC_THEMES[audio.musicThemeIndex % MUSIC_THEMES.length] || MUSIC_THEMES[0];
    }

    function pauseAllBgmTracks(skipIndex = -1) {
      for (let i = 0; i < audio.bgmTracks.length; i++) {
        if (i === skipIndex) continue;
        const track = audio.bgmTracks[i];
        if (!track) continue;
        if (!track.el.paused) track.el.pause();
      }
    }

    function hasActiveNemesis() {
      return nemesis.warned || guards.some((g) => isNemesisKind(g.kind));
    }

    function getActiveNemesisGuard() {
      return guards.find((g) => isNemesisKind(g.kind)) || null;
    }

    function getNemesisMusicState() {
      const boss = getActiveNemesisGuard();
      if (boss) {
        if (nemesis.chaseLocked || boss.chaseLocked) return "chase";
        const hotTrail = boss.state === "ALERT" && (!boss.lastSeen || boss.lastSeen.t < 1.6 || guardSeesPlayer(boss));
        return hotTrail ? "chase" : "tension";
      }
      return nemesis.warned ? "tension" : "";
    }

    function pickReadyNemesisBgmTrack(index) {
      const track = audio.bgmTracks[index];
      return track && track.ready && !track.failed ? index : -1;
    }

    function pickEnemyModeBgmTrack() {
      if (isSuperCharacter()) return null;
      const nemesisMusic = getNemesisMusicState();
      if (nemesisMusic === "chase") {
        const chase = pickReadyNemesisBgmTrack(NEMESIS_CHASE_BGM_TRACK_INDEX);
        if (chase >= 0) return chase;
      }
      if (nemesisMusic === "tension") {
        const tension = pickReadyNemesisBgmTrack(NEMESIS_TENSION_BGM_TRACK_INDEX);
        if (tension >= 0) return tension;
      }
      const pool = pickModeBgmPool();
      const context = "mode-" + currentEnemyKind;
      if (audio.bgmAdvancePending || audio.activeBgmContext !== context) {
        const rotated = pickRotatingBgmTrack(context, pool);
        if (rotated >= 0) return rotated;
      }
      const active = audio.activeBgmTrack;
      if (pool.includes(active) && audio.activeBgmContext === context) {
        const track = audio.bgmTracks[active];
        if (track && track.el && !track.el.ended) return active;
      }
      return pool[(Math.max(1, run.level | 0) - 1) % pool.length];
    }

    function getReadyBgmIndices(indices) {
      return indices.filter((idx) => {
        const track = audio.bgmTracks[idx];
        return track && track.ready && !track.failed;
      });
    }

    function pickRotatingBgmTrack(context, indices) {
      const ready = getReadyBgmIndices(indices);
      if (!ready.length) return -1;

      const active = audio.activeBgmTrack;
      const keepActive = audio.activeBgmContext === context &&
        !audio.bgmAdvancePending &&
        ready.includes(active);
      if (keepActive) {
        const track = audio.bgmTracks[active];
        if (track && track.el && !track.el.ended) return active;
      }

      const pool = ready.length > 1 ? ready.filter((idx) => idx !== active) : ready;
      return pool[(Math.random() * pool.length) | 0];
    }

    function randomMenuTrackOffset(el) {
      const duration = el && Number.isFinite(el.duration) ? el.duration : 0;
      if (duration < 45) return 0;
      const minOffset = Math.min(18, duration * 0.22);
      const maxOffset = Math.min(duration * 0.68, Math.max(minOffset, duration - 35));
      if (maxOffset <= minOffset) return minOffset;
      return minOffset + Math.random() * (maxOffset - minOffset);
    }

    function pickPlayableBgmTrack() {
      if (!audio.bgmTracks.length) return { index: -1, context: "" };

      if (isPreGameMenuActive()) {
        const menuTrackIndex = pickRotatingBgmTrack("menu", MENU_BGM_TRACK_INDICES);
        if (menuTrackIndex >= 0) {
          return { index: menuTrackIndex, context: "menu", randomStart: false, fadeInMs: 1800 };
        }
        if (audio.activeBgmTrack >= 0 && audio.activeBgmContext === "menu") {
          return { index: audio.activeBgmTrack, context: "menu", randomStart: false, fadeInMs: 0 };
        }
        return { index: -1, context: "menu", randomStart: false, fadeInMs: 0 };
      }

      if (isSuperCharacter()) {
        const context = isSurvivalRun() ? "survival" : getSuperCharacterContext();
        const pool = superBgmPoolForContext(getSuperCharacterContext());
        let superTrackIndex = run.superBgmTrack;
        const readyChosen = Number.isFinite(superTrackIndex) && superTrackIndex >= 0 &&
          getReadyBgmIndices([superTrackIndex]).length > 0;
        if (!readyChosen || audio.bgmAdvancePending) {
          superTrackIndex = pickRotatingBgmTrack(context, pool);
          if (superTrackIndex < 0) superTrackIndex = pickRandomSuperBgm(getSuperCharacterContext());
          run.superBgmTrack = superTrackIndex;
        }
        if (superTrackIndex >= 0) {
          return { index: superTrackIndex, context, randomStart: false, fadeInMs: 1200 };
        }
      }

      const enemyModeTrack = pickEnemyModeBgmTrack();
      if (Number.isFinite(enemyModeTrack) && enemyModeTrack >= 0) {
        const nemesisMusic = getNemesisMusicState();
        const context = nemesisMusic ? ("nemesis-" + nemesisMusic) : ("mode-" + currentEnemyKind);
        return { index: enemyModeTrack, context, randomStart: false, fadeInMs: nemesisMusic ? 650 : 1000 };
      }

      const preferred = (scenarioTheme && Number.isFinite(scenarioTheme.musicTrackIndex))
        ? scenarioTheme.musicTrackIndex
        : (audio.musicThemeIndex % Math.max(1, DEFAULT_BGM_COUNT));
      const procedural = audio.musicThemeIndex % Math.max(1, DEFAULT_BGM_COUNT);
      const fallback = Math.min(audio.bgmTracks.length - 1, Math.max(0, DEFAULT_BGM_COUNT - 1));
      const candidates = [preferred, procedural, fallback, 0];
      for (const idx of candidates) {
        const track = audio.bgmTracks[idx];
        if (track && track.ready && !track.failed) return { index: idx, context: "gameplay" };
      }

      for (let i = 0; i < audio.bgmTracks.length; i++) {
        const track = audio.bgmTracks[i];
        if (track && track.ready && !track.failed) return { index: i, context: "fallback" };
      }

      return { index: -1, context: "" };
    }

    function bgmBaseVolume() {
      return clamp(settings.masterVolume * settings.musicVolume * 1.2, 0, 1);
    }

    function updateActiveBgmVolume(nowMs = performance.now()) {
      if (audio.activeBgmTrack < 0) return;
      const track = audio.bgmTracks[audio.activeBgmTrack];
      if (!track) return;

      let volume = bgmBaseVolume();
      const m = Meta();
      if (m && mode === MODE_PLAYING && run.active) {
        volume *= m.musicDuckMultiplier(player.noise, calcAlertLevel());
      }
      if (audio.bgmFadeTrack === audio.activeBgmTrack && audio.bgmFadeDurationMs > 0) {
        const progress = clamp((nowMs - audio.bgmFadeStartMs) / audio.bgmFadeDurationMs, 0, 1);
        volume *= progress;
        if (progress >= 1) {
          audio.bgmFadeTrack = -1;
          audio.bgmFadeDurationMs = 0;
        }
      }
      track.el.volume = volume;
    }

    function applyAudioSettings() {
      if (!audio.ctx) return;

      const now = audio.ctx.currentTime;
      const master = settings.masterVolume;
      const music = settings.musicEnabled ? settings.musicVolume : 0;
      const sfx = settings.sfxEnabled ? 1 : 0;

      audio.master.gain.cancelScheduledValues(now);
      audio.music.gain.cancelScheduledValues(now);
      audio.sfx.gain.cancelScheduledValues(now);

      audio.master.gain.linearRampToValueAtTime(master, now + 0.04);
      audio.music.gain.linearRampToValueAtTime(music, now + 0.05);
      audio.sfx.gain.linearRampToValueAtTime(sfx, now + 0.05);

      if (audio.activeBgmTrack >= 0) {
        updateActiveBgmVolume();
      }

      updateLoopingSfxVolumes();
      syncMusicState();
    }

    function syncMusicState() {
      if (!audio.ctx || !audio.unlocked) return;

      const shouldPlay = shouldPlayMusic();
      if (!shouldPlay) {
        pauseAllBgmTracks();
        audio.activeBgmTrack = -1;
        audio.activeBgmContext = "";
        stopMusicLoop();
        return;
      }

      const selection = pickPlayableBgmTrack();
      const selectedTrackIndex = selection.index;
      if (selectedTrackIndex >= 0) {
        const track = audio.bgmTracks[selectedTrackIndex];
        const el = track.el;
        const contextChanged = audio.activeBgmContext !== selection.context;
        const changedTrack = audio.activeBgmTrack !== selectedTrackIndex || contextChanged || audio.bgmAdvancePending;

        if (!changedTrack && el && !el.paused) {
          updateActiveBgmVolume();
          return;
        }

        stopMusicLoop();
        pauseAllBgmTracks(selectedTrackIndex);

        if (changedTrack) {
          try {
            el.currentTime = selection.randomStart ? randomMenuTrackOffset(el) : 0;
          } catch (_) {
            // ignore seek issues
          }
          audio.bgmFadeTrack = selectedTrackIndex;
          audio.bgmFadeStartMs = performance.now();
          audio.bgmFadeDurationMs = selection.fadeInMs || 0;
        }
        audio.activeBgmTrack = selectedTrackIndex;
        audio.activeBgmContext = selection.context;
        audio.bgmAdvancePending = false;
        updateActiveBgmVolume();

        if (el.paused) {
          const p = el.play();
          if (p && typeof p.catch === "function") {
            p.catch((err) => {
              const msg = String((err && (err.name + " " + err.message)) || err || "");
              if (/notallowed|gesture|interact|autoplay/i.test(msg)) {
                audio.unlocked = false;
                audio.activeBgmTrack = -1;
                audio.activeBgmContext = "";
                return;
              }
              track.failed = true;
              audio.activeBgmTrack = -1;
              audio.activeBgmContext = "";
              startMusicLoop(true);
            });
          }
        }
        return;
      }

      pauseAllBgmTracks();
      audio.activeBgmTrack = -1;
      audio.activeBgmContext = "";
      startMusicLoop();
    }

    function playMusicTone(freq, duration, volume, type = "triangle", attack = 0.01) {
      if (!audio.ctx || !settings.musicEnabled) return;

      const now = audio.ctx.currentTime;
      const osc = audio.ctx.createOscillator();
      const gain = audio.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(volume, now + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(audio.music);
      osc.start(now);
      osc.stop(now + duration + 0.03);
    }

    function tickMusic() {
      if (!audio.ctx || !settings.musicEnabled) return;

      const theme = getCurrentMusicTheme();
      if (!theme) return;

      const chordIndex = Math.floor(audio.musicStep / 2) % theme.chordRoots.length;
      const rootMidi = theme.chordRoots[chordIndex];
      const melodyMidi = rootMidi + theme.melodyOffsets[audio.musicStep % theme.melodyOffsets.length];
      const beat = theme.tempoMs / 1000;
      const chordDur = Math.max(0.32, beat * 1.2);
      const leadDur = Math.max(0.16, beat * 0.56);

      for (let i = 0; i < theme.chordShape.length; i++) {
        const midi = rootMidi + theme.chordShape[i];
        const freq = 440 * Math.pow(2, (midi - 69) / 12);
        playMusicTone(freq, chordDur, theme.chordVol, theme.chordWave, 0.018);
      }

      if (audio.musicStep % 4 === 0) {
        const bassFreq = 440 * Math.pow(2, (rootMidi - 12 - 69) / 12);
        playMusicTone(bassFreq, chordDur * 0.9, theme.chordVol * 0.46, "sine", 0.012);
      }

      const melodyFreq = 440 * Math.pow(2, (melodyMidi - 69) / 12);
      playMusicTone(melodyFreq, leadDur, theme.leadVol, theme.leadWave, 0.008);
      audio.musicStep += 1;
    }

    function startMusicLoop(forceRestart = false) {
      if (!audio.ctx) return;

      const theme = getCurrentMusicTheme();
      const desiredTempo = theme ? theme.tempoMs : 460;
      if (audio.musicTimer) {
        if (!forceRestart && audio.musicTempoMs === desiredTempo) return;
        clearInterval(audio.musicTimer);
        audio.musicTimer = null;
      }

      audio.musicStep = 0;
      audio.musicTempoMs = desiredTempo;
      audio.musicTimer = setInterval(() => {
        if (!shouldPlayMusic()) return;
        tickMusic();
      }, desiredTempo);
    }

    function stopMusicLoop() {
      if (!audio.musicTimer) return;
      clearInterval(audio.musicTimer);
      audio.musicTimer = null;
      audio.musicTempoMs = 0;
    }

    function playTone(type, freq, duration, volume, toFreq) {
      if (!audio.ctx || !settings.sfxEnabled) return;

      const now = audio.ctx.currentTime;
      const o = audio.ctx.createOscillator();
      const g = audio.ctx.createGain();

      o.type = type;
      o.frequency.setValueAtTime(freq, now);
      if (typeof toFreq === "number") {
        o.frequency.linearRampToValueAtTime(toFreq, now + duration);
      }

      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(volume, now + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      o.connect(g);
      g.connect(audio.sfx);
      o.start(now);
      o.stop(now + duration + 0.03);
    }

    function calcSfxVolume(baseVolume) {
      if (!settings.sfxEnabled) return 0;
      return clamp(settings.masterVolume * (baseVolume || 1), 0, 1);
    }

    function playSfx(name, volume = 1, opts = null) {
      ensureSfxAssets();
      const track = audio.sfxBank[name];
      if (!track || track.failed) return false;

      const el = track.el.cloneNode(true);
      el.loop = false;
      el.volume = calcSfxVolume((track.volume || 1) * volume);
      if (opts && typeof opts.rate === "number") {
        el.playbackRate = clamp(opts.rate, 0.65, 1.6);
      }
      if (opts && typeof opts.offset === "number") {
        try {
          el.currentTime = Math.max(0, opts.offset);
        } catch (_) {
          // short one-shots can ignore seek issues
        }
      }

      const p = el.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {});
      }
      return true;
    }

    function playSfxOneOf(names, volume = 1, opts = null) {
      ensureSfxAssets();
      const pool = names.filter((name) => audio.sfxBank[name] && !audio.sfxBank[name].failed);
      if (pool.length === 0) return false;
      const name = pool[Math.floor(Math.random() * pool.length)];
      return playSfx(name, volume, opts);
    }

    function updateLoopingSfxVolumes() {
      if (!audio.sfxLoaded) return;
      for (const name of Object.keys(audio.loopingSfx)) {
        const track = audio.loopingSfx[name];
        if (!track) continue;
        const target = track.targetVolume || 0;
        track.el.volume = calcSfxVolume((track.volume || 1) * target);
      }
    }

    function stopLoopingSfx() {
      for (const name of Object.keys(audio.loopingSfx)) {
        const track = audio.loopingSfx[name];
        if (!track) continue;
        track.targetVolume = 0;
        track.el.pause();
      }
      updateLoopingSfxVolumes();
    }

    function setLoopingSfx(name, targetVolume, rate = 1) {
      ensureSfxAssets();
      const track = audio.loopingSfx[name];
      if (!track || track.failed) return;

      track.targetVolume = clamp(targetVolume, 0, 1);
      track.el.playbackRate = clamp(rate, 0.7, 1.35);
      track.el.volume = calcSfxVolume((track.volume || 1) * track.targetVolume);

      if (track.targetVolume > 0 && track.el.paused && audio.unlocked && settings.sfxEnabled) {
        const p = track.el.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }

      if (track.targetVolume <= 0.001 && !track.el.paused) {
        track.el.pause();
      }
    }

    function updateFootstepAudio() {
      if (!audio.unlocked || mode !== MODE_PLAYING || !player.alive) {
        stopLoopingSfx();
        return;
      }

      const moving = player.moving && !player.crouch;
      // Enquanto o Homelander voa, os passos ficam mudos (o som de voo e um
      // disparo unico tocado em manageHomelanderFlyFuel, nao um loop).
      if (player.flying) {
        setLoopingSfx("footstepWalk", 0);
        setLoopingSfx("footstepRun", 0);
        return;
      }
      const walkTarget = moving && !player.running ? 1 : 0;
      const runTarget = moving && player.running ? 1 : 0;
      setLoopingSfx("footstepWalk", walkTarget, 0.96 + player.noise * 0.08);
      setLoopingSfx("footstepRun", runTarget, 1.02 + player.noise * 0.1);
    }

    function sfxClick() {
      if (!playSfx("gunClick", 0.28, { rate: 1.25 })) playTone("square", 520, 0.07, 0.06, 430);
    }

    function sfxDoorOpen() {
      if (!playSfx("doorOpen", 0.88, { rate: 0.94 + Math.random() * 0.08 })) {
        playTone("sine", 180, 0.08, 0.045, 120);
      }
    }

    function sfxDoorClose() {
      if (!playSfx("doorOpen", 0.62, { rate: 0.7 + Math.random() * 0.06 })) {
        playTone("sine", 140, 0.06, 0.035, 90);
      }
    }

    function sfxGunReload() {
      if (!playSfx("gunReload", 0.9, { rate: 0.98 + Math.random() * 0.04 })) {
        playSfx("gunClick", 0.48, { rate: 0.74 + Math.random() * 0.06 });
      }
    }

    function getSuperLaserSfxKey() {
      return "laserSuper";
    }

    function setSuperLaserLoop(targetVolume, rate = 1) {
      const key = getSuperLaserSfxKey();
      const other = key === "laserThor" ? "laserSuper" : "laserThor";
      if (targetVolume > 0) {
        setLoopingSfx(other, 0);
        setLoopingSfx("superLaser", 0);
        setLoopingSfx(key, targetVolume, rate);
        return;
      }
      setLoopingSfx("laserThor", 0);
      setLoopingSfx("laserSuper", 0);
      setLoopingSfx("superLaser", 0);
    }

    function setMjolnirSpinLoop(targetVolume, rate = 1) {
      setLoopingSfx("giromjolnir", targetVolume, rate);
    }

    function setMjolnirFlyLoop(targetVolume, rate = 1) {
      setLoopingSfx("mjolnirFly", targetVolume, rate);
    }

    function setThorStormLoop(targetVolume, rate = 1) {
      setLoopingSfx("thorStorm", targetVolume, rate);
    }

    function stopMjolnirLoopingSfx() {
      setMjolnirSpinLoop(0);
      setMjolnirFlyLoop(0);
    }

    function sfxMjolnirThrow(chargeFrac = 0) {
      const frac = clamp(chargeFrac, 0, 1);
      const rate = 0.88 + frac * 0.28;
      if (!playSfx("mjolnirThrow", 0.72 + frac * 0.12, { rate })) {
        playSfx("survivalWhoosh", 0.58, { rate: 0.82 + frac * 0.2 });
        playTone("sine", 95 + frac * 40, 0.1, 0.045, 48);
      }
    }

    function sfxMjolnirRecall() {
      if (!playSfx("mjolnirThrow", 0.54, { rate: 1.35 })) {
        playSfx("survivalWhoosh", 0.42, { rate: 1.2 });
      }
    }

    function sfxMjolnirImpact(ground = true) {
      if (ground) {
        if (!playSfx("chaomjolnir", 0.72, { rate: 0.94 + Math.random() * 0.08 })) {
          playSfx("mjolnirImpact", 0.68, { rate: 0.92 });
        }
        return;
      }
      if (!playSfx("mjolnirImpact", 0.34, { rate: 1.15 })) {
        playSfx("gunImpact", 0.28, { rate: 1.2 });
      }
    }

    function sfxMjolnirHit() {
      const now = performance.now();
      if ((mjolnirHitSfxT || 0) > now) return;
      mjolnirHitSfxT = now + 110;
      if (!playSfx("hitmjolnir", 0.68, { rate: 0.94 + Math.random() * 0.1 })) {
        playSfx("gunImpact", 0.32, { rate: 1.05 });
      }
    }

    function sfxMjolnirDestroy() {
      const now = performance.now();
      if ((mjolnirDestroySfxT || 0) > now) return;
      mjolnirDestroySfxT = now + 130;
      if (!playSfx("destruicaomjolnir", 0.66, { rate: 0.92 + Math.random() * 0.12 })) {
        playSfx("gunImpact", 0.38, { rate: 0.82 });
      }
    }

    function sfxThorRaio(volume = 0.62) {
      const name = thorRaioPick % 2 === 0 ? "raio1" : "raio2";
      thorRaioPick += 1;
      if (!playSfx(name, volume, { rate: 0.92 + Math.random() * 0.14 })) {
        playSfx("survivalZap", volume * 0.7, { rate: 0.88 + Math.random() * 0.16 });
      }
    }

    function sfxMjolnirCatch() {
      if (!playSfx("mjolnirCatch", 0.62, { rate: 0.96 + Math.random() * 0.06 })) {
        playSfx("gunImpact", 0.28, { rate: 1.2 });
        playTone("sine", 320, 0.08, 0.028, 180);
      }
    }

    function sfxThorStormEnter() {
      playSfx("raio1", 0.78, { rate: 0.94 });
      playSfx("survivalBlast", 0.55, { rate: 0.82 });
      setThorStormLoop(0.42, 1);
    }

    function sfxThorStormStrike() {
      sfxThorRaio(0.66);
    }

    function sfxMjolnirLightning() {
      const now = performance.now();
      if ((mjolnirLightningSfxT || 0) > now) return;
      mjolnirLightningSfxT = now + 90;
      if (thorStormActive()) {
        sfxThorRaio(0.55);
        return;
      }
      if (!playSfx("mjolnirLightning", 0.48, { rate: 0.92 + Math.random() * 0.16 })) {
        playSfx("survivalZap", 0.3, { rate: 1.05 + Math.random() * 0.12 });
      }
    }

    function updateMjolnirAudio(dt) {
      if (!audio.unlocked || !isThorCharacter() || !player.alive || mode !== MODE_PLAYING) {
        stopMjolnirLoopingSfx();
        if (!thorStormActive()) setThorStormLoop(0);
        return;
      }

      const storm = thorStormActive();
      if (storm) {
        const pulse = 0.36 + Math.sin(performance.now() * 0.004) * 0.06;
        setThorStormLoop(pulse, 0.98 + player.berserkT * 0.012);
      } else {
        setThorStormLoop(0);
      }

      const state = player.mjolnirState;
      if (state === "charging") {
        const chargeFrac = clamp(player.mjolnirCharge / THOR_MJOLNIR_MAX_CHARGE, 0, 1);
        setMjolnirFlyLoop(0);
        setMjolnirSpinLoop(
          0.28 + chargeFrac * 0.52,
          0.85 + chargeFrac * 0.55 + (storm ? 0.12 : 0)
        );
      } else if (state === "outbound" || state === "returning") {
        setMjolnirSpinLoop(0);
        const flyRate = state === "returning" ? 1.18 : 1.05;
        setMjolnirFlyLoop(0.56 + (storm ? 0.14 : 0), flyRate);
      } else {
        stopMjolnirLoopingSfx();
      }
    }

    function sfxTentacleWhip(volume = 1) {
      const vol = clamp(volume, 0, 1.2);
      if (!playSfx("chicote", 0.9 * vol, { rate: 0.94 + Math.random() * 0.1 })) {
        if (!playSfx("tentacleWhip", 0.64 * vol, { rate: 0.72 + Math.random() * 0.14 })) {
          playSfx("knifeSlice", 0.55 * vol, { rate: 0.68 + Math.random() * 0.1 });
        }
      }
    }

    function playSurvivalAbilitySfx(id, kind = "zap", volume = 1) {
      if (!isSurvivalRun()) return;
      const now = performance.now();
      const key = id + ":" + kind;
      if ((survivalAbilitySfxT[key] || 0) > now) return;
      survivalAbilitySfxT[key] = now + 220;
      const vol = clamp(volume, 0.15, 1.1);
      const sfxName = kind === "blast" ? "survivalBlast" : (kind === "whoosh" ? "survivalWhoosh" : "survivalZap");
      if (!playSfx(sfxName, 0.48 * vol, { rate: 0.88 + Math.random() * 0.18 })) {
        playTone(kind === "blast" ? "sawtooth" : "sine", kind === "blast" ? 150 : 240, 0.1, 0.045 * vol, kind === "blast" ? 90 : 180);
      }
    }
    function sfxPickup(kind = "generic") {
      if (kind === "weapon") {
        const played = playSfx("gunClick", 0.5, { rate: 0.82 });
        playTone("triangle", 260, 0.09, 0.05, 170);
        playDelayedTone(42, "triangle", 620, 0.08, 0.04, 480);
        if (!played) playDelayedTone(85, "sine", 920, 0.06, 0.03, 760);
        return;
      }
      if (kind === "ammo") {
        const played = playSfx("gunClick", 0.46, { rate: 1.32 });
        playTone("square", 520, 0.045, 0.026, 420);
        playDelayedTone(34, "triangle", 880, 0.055, 0.03, 760);
        if (!played) playDelayedTone(70, "triangle", 1180, 0.04, 0.022, 980);
        return;
      }
      if (kind === "dossier") {
        const played = playSfx("gunClick", 0.4, { rate: 1.08 });
        playTone("triangle", 740, 0.08, 0.045, 680);
        playDelayedTone(60, "sine", 1180, 0.12, 0.042, 920);
        if (!played) playDelayedTone(120, "triangle", 1480, 0.055, 0.026, 1300);
        return;
      }
      if (!playSfx("gunClick", 0.4, { rate: 1.08 })) playTone("triangle", 860, 0.12, 0.09, 1100);
    }
    function sfxHack() {
      if (!playSfx("gunClick", 0.32, { rate: 1.42 })) {
        playTone("triangle", 740, 0.1, 0.08, 980);
        setTimeout(() => playTone("triangle", 1020, 0.08, 0.07, 1320), 55);
      } else {
        setTimeout(() => playSfx("gunClick", 0.26, { rate: 1.58 }), 70);
      }
      playDelayedTone(110, "sine", 1560, 0.06, 0.028, 1180);
    }
    function sfxLure() {
      if (!playSfx("gunClick", 0.34, { rate: 0.92 })) playTone("square", 690, 0.08, 0.08, 470);
    }
    function sfxAlert() {
      if (!playSfx("gunImpact", 0.26, { rate: 1.18 })) playTone("sawtooth", 230, 0.16, 0.08, 170);
    }
    function sfxSuccess() {
      if (!playSfx("gunClick", 0.38, { rate: 1.32 })) {
        playTone("triangle", 620, 0.12, 0.09, 760);
        setTimeout(() => playTone("triangle", 780, 0.14, 0.08, 980), 70);
      }
    }

    function playDelayedTone(delayMs, type, freq, duration, volume, toFreq) {
      setTimeout(() => playTone(type, freq, duration, volume, toFreq), delayMs);
    }

    function weaponSoundProfile(wt) {
      if (!wt) return "pistol";
      return wt.soundProfile || wt.id || "pistol";
    }

    function weaponShotRate(profile) {
      if (profile === "smg") return 1.08 + Math.random() * 0.05;
      if (profile === "burst") return 1.02 + Math.random() * 0.05;
      if (profile === "magnum") return 0.92 + Math.random() * 0.04;
      if (profile === "rifle") return 0.96 + Math.random() * 0.04;
      if (profile === "sniper") return 0.84 + Math.random() * 0.04;
      if (profile === "shotgun") return 0.9 + Math.random() * 0.04;
      if (profile === "silencer") return 1.02 + Math.random() * 0.06;
      if (profile === "laser") return 1.04 + Math.random() * 0.05;
      if (profile === "bazooka") return 0.72 + Math.random() * 0.05;
      if (profile === "guard") return 0.96 + Math.random() * 0.04;
      return 0.98 + Math.random() * 0.04;
    }

    function weaponShotVolume(profile) {
      if (profile === "smg") return 0.74;
      if (profile === "burst") return 0.84;
      if (profile === "magnum") return 0.98;
      if (profile === "rifle") return 0.96;
      if (profile === "sniper") return 1.02;
      if (profile === "shotgun") return 1.04;
      if (profile === "silencer") return 0.48;
      if (profile === "laser") return 0.74;
      if (profile === "bazooka") return 1.08;
      if (profile === "guard") return 0.82;
      return 0.84;
    }

    function layerWeaponShot(profile, samplePlayed = false) {
      if (samplePlayed && (
        profile === "pistol" ||
        profile === "smg" ||
        profile === "burst" ||
        profile === "magnum" ||
        profile === "rifle" ||
        profile === "sniper" ||
        profile === "shotgun" ||
        profile === "guard"
      )) {
        return;
      }

      if (profile === "smg") {
        playTone("triangle", 360, 0.035, 0.028, 240);
        playDelayedTone(26, "triangle", 420, 0.026, 0.022, 280);
      } else if (profile === "burst") {
        playTone("triangle", 330, 0.04, 0.032, 220);
        playDelayedTone(30, "triangle", 380, 0.032, 0.024, 260);
      } else if (profile === "magnum") {
        playTone("sine", 126, 0.09, 0.052, 70);
        playDelayedTone(34, "triangle", 520, 0.04, 0.026, 260);
      } else if (profile === "rifle") {
        playTone("sine", 148, 0.06, 0.04, 94);
        playDelayedTone(28, "triangle", 620, 0.032, 0.024, 420);
      } else if (profile === "sniper") {
        playTone("sine", 104, 0.11, 0.055, 58);
        playDelayedTone(42, "triangle", 540, 0.055, 0.03, 220);
      } else if (profile === "shotgun") {
        playTone("sine", 88, 0.12, 0.056, 46);
        playDelayedTone(45, "triangle", 280, 0.045, 0.022, 150);
      } else if (profile === "silencer") {
        playTone("triangle", 620, 0.028, 0.018, 360);
        playDelayedTone(18, "sine", 130, 0.05, 0.014, 80);
      } else if (profile === "laser") {
        playTone("sawtooth", 940, 0.052, 0.035, 1360);
        playDelayedTone(24, "triangle", 1480, 0.055, 0.028, 720);
      } else if (profile === "bazooka") {
        playTone("sine", 72, 0.14, 0.09, 48);
        playDelayedTone(80, "sawtooth", 110, 0.18, 0.06, 62);
      } else if (profile === "guard") {
        playTone("sine", 150, 0.055, 0.036, 96);
        playDelayedTone(20, "triangle", 620, 0.034, 0.022, 420);
      } else {
        playTone("triangle", 280, 0.05, 0.034, 190);
        playDelayedTone(16, "triangle", 520, 0.032, 0.024, 320);
      }
    }

    function sfxGunshot(hit, wt = null) {
      const profile = weaponSoundProfile(wt);
      let shotPlayed = false;
      const opts = { rate: weaponShotRate(profile) };
      const vol = weaponShotVolume(profile) * (isSurvivalRun() ? 0.3 : 1);
      if (profile === "smg") {
        shotPlayed = playSfx("gunSmgClean", vol, opts);
      } else if (profile === "magnum" || profile === "sniper") {
        shotPlayed = playSfx("gunMagnumClean", vol, opts);
      } else if (profile === "rifle" || profile === "burst" || profile === "guard") {
        shotPlayed = playSfx("gunRifleClean", vol, opts);
      } else if (profile === "shotgun") {
        shotPlayed = playSfx("gunShotgunClean", vol, opts);
      } else if (profile === "silencer") {
        shotPlayed = playSfx("gunSilencedClean", vol, opts);
      } else if (profile === "laser") {
        shotPlayed = playSfx("gunLaserClean", vol, opts);
      } else if (profile === "bazooka") {
        shotPlayed = sfxBazookaFire(vol);
      } else if (profile === "pistol") {
        shotPlayed = playSfx("gunPistolClean", vol, opts);
      }
      if (!shotPlayed) shotPlayed = playSfx("gunPistolClean", vol, opts);
      if (!shotPlayed) shotPlayed = playSfx("gunShot", vol * 0.72, opts);
      layerWeaponShot(profile, shotPlayed);
      if (hit) {
        const hitVol = 0.72 * (isSurvivalRun() ? 0.35 : 1);
        setTimeout(() => playSfx("gunImpact", hitVol, { rate: 0.92 + Math.random() * 0.12 }), 35);
      }
      if (!shotPlayed) playDelayedTone(12, "triangle", 220, 0.06, 0.035, 120);
    }
    function sfxBazookaFire(volume = 1) {
      const vol = clamp(volume, 0, 1.2);
      const played = playSfx("gunShotgunClean", 0.9 * vol, { rate: 0.58 + Math.random() * 0.06 });
      playSfx("survivalBlast", 0.28 * vol, { rate: 1.08 + Math.random() * 0.06 });
      playTone("sine", 68, 0.16, 0.1 * vol, 42);
      playDelayedTone(70, "sawtooth", 104, 0.2, 0.07 * vol, 56);
      if (!played) playDelayedTone(30, "triangle", 180, 0.12, 0.05 * vol, 90);
      return played;
    }

    function sfxBazookaExplode(volume = 1) {
      const vol = clamp(volume, 0, 1.2);
      playSfx("survivalBlast", 0.92 * vol, { rate: 0.72 + Math.random() * 0.08 });
      playSfx("gunImpact", 0.98 * vol, { rate: 0.44 + Math.random() * 0.06 });
      playTone("sine", 54, 0.32, 0.13 * vol, 30);
      playDelayedTone(110, "sawtooth", 78, 0.24, 0.09 * vol, 38);
      playDelayedTone(210, "triangle", 46, 0.38, 0.06 * vol, 24);
    }

    function sfxNemesisPunch(volume = 1) {
      const vol = clamp(volume, 0, 1.2);
      sfxTentacleWhip(vol * 0.82);
      playTone("sawtooth", 62, 0.16, 0.09 * vol, 34);
    }

    function sfxNemesisBizarre(volume = 1) {
      playNemesisScream(volume * 0.72, "attack");
    }

    function sfxEnemyMeleeWindup(g) {
      if (!g) return;
      if (isSurvivalRun() && (isZombieKind(g.kind) || isClownKind(g.kind))) {
        if (survivalAmbientVoiceT > 0) return;
        survivalAmbientVoiceT = 7 + rand() * 6;
      }
      if (isZombieKind(g.kind)) sfxZombieAttack(isSurvivalRun() ? 0.36 : 0.72);
      else if (isClownKind(g.kind)) sfxClownAlert(isSurvivalRun() ? 0.34 : 0.65);
      else if (!isNemesisKind(g.kind)) playTone("triangle", 220, 0.06, 0.03, 160);
    }

    function sfxEnemyMeleeHit(g) {
      if (!g) return;
      if (isNemesisKind(g.kind)) {
        sfxNemesisPunch(0.95);
        maybePlayNemesisAttackVoice(g, true);
      } else if (isZombieKind(g.kind)) {
        sfxZombieAttack(isSurvivalRun() ? 0.42 : 1);
        playSfx("tentacleSquish", 0.35, { rate: 0.92 + Math.random() * 0.08 });
      } else if (isClownKind(g.kind)) {
        sfxClownAlert(isSurvivalRun() ? 0.4 : 0.88);
        playSfx("knifeSlice", 0.55, { rate: 1.1 + Math.random() * 0.1 });
      } else {
        sfxPunch(true);
      }
    }

    function sfxPunch(hit) {
      const played = playSfx(hit ? "knifeHit" : "gunImpact", hit ? 0.48 : 0.16, {
        rate: hit ? (0.62 + Math.random() * 0.08) : (0.8 + Math.random() * 0.08)
      });
      playTone("sine", hit ? 96 : 138, hit ? 0.08 : 0.045, hit ? 0.075 : 0.025, hit ? 54 : 118);
      if (hit) playDelayedTone(34, "triangle", 170, 0.055, 0.035, 92);
      if (!played && !hit) playTone("triangle", 180, 0.04, 0.025, 120);
    }
    function sfxKnifeKill() {
      const slicePlayed = playSfx("knifeSlice", 0.94, { rate: 0.92 + Math.random() * 0.12 });
      setTimeout(() => playSfx("knifeHit", 1, { rate: 0.88 + Math.random() * 0.14 }), 42);
      if (!slicePlayed) {
        playTone("sawtooth", 190, 0.18, 0.1, 110);
        setTimeout(() => playTone("sawtooth", 145, 0.2, 0.08, 90), 60);
      }
    }
    function sfxDeathScream() {
      const played = playSfxOneOf(["humanDeath1", "humanDeath2"], 0.92, { rate: 0.92 + Math.random() * 0.16 });
      if (!played) {
        playTone("sawtooth", 430, 0.12, 0.14, 300);
        setTimeout(() => playTone("sawtooth", 320, 0.16, 0.12, 190), 75);
        setTimeout(() => playTone("triangle", 230, 0.24, 0.1, 120), 155);
      }
    }
    function sfxZombieIdle(volume = 1) {
      const vol = clamp(volume, 0, 1.15);
      const survival = isSurvivalRun();
      const pool = survival ? ["zombieYell1", "zombieYell2", "zombieYell3"] : ["zombieMoans", "zombieYell1", "zombieYell2", "zombieYell3"];
      const playVol = (survival ? 0.2 : 0.38) * vol;
      const rate = survival ? 0.94 + Math.random() * 0.18 : 0.72 + Math.random() * 0.16;
      if (!playSfxOneOf(pool, playVol, { rate })) {
        playTone("sawtooth", 98, 0.32, 0.055 * vol, 66);
      }
    }
    function sfxZombieAttack(volume = 1) {
      const vol = clamp(volume, 0, 1.15);
      if (!playSfxOneOf(["zombieYell1", "zombieYell2", "zombieYell3"], 0.86 * vol, { rate: 0.82 + Math.random() * 0.16 })) {
        playTone("sawtooth", 130, 0.18, 0.11 * vol, 76);
      }
    }
    function sfxZombieDeath() {
      if (!playSfxOneOf(["zombieDeath1", "zombieDeath2", "zombieYell2"], 0.9, { rate: 0.86 + Math.random() * 0.14 })) {
        playTone("sawtooth", 122, 0.22, 0.11, 52);
        playDelayedTone(80, "triangle", 90, 0.2, 0.08, 42);
      }
    }
    function playNemesisScream(volume = 1, kind = "chase") {
      if (!settings.sfxEnabled) return false;
      const vol = clamp(volume, 0, 1.15);
      const minGap = kind === "alert" ? 0 : (kind === "attack" ? 4.5 : (kind === "spawn" ? 0 : 7.5));
      if (nemesisScreamCd > 0 && kind !== "spawn") {
        if (kind === "alert" && nemesisScreamCd > 2.5) return false;
        if (nemesisScreamCd > minGap) return false;
      }
      const key = nemesisScreamPick % 2 === 0 ? "nemesisScream1" : "nemesisScream2";
      nemesisScreamPick += 1;
      const played = playSfx(key, vol, { rate: 0.97 + Math.random() * 0.06 });
      if (played) {
        if (kind === "attack") nemesisScreamCd = 5.5 + Math.random() * 3;
        else if (kind === "alert") nemesisScreamCd = 8 + Math.random() * 4;
        else if (kind === "spawn") nemesisScreamCd = 9 + Math.random() * 5;
        else nemesisScreamCd = 10 + Math.random() * 7;
      }
      return played;
    }

    function sfxNemesisRoar(volume = 1, kind = "alert") {
      if (tryNemesisStarsVoice(volume * 0.85, kind === "spawn" ? 0.5 : 0.14)) return;
      playNemesisScream(volume, kind);
    }

    function tryNemesisStarsVoice(volume = 1, chance = 0.26) {
      if (!settings.sfxEnabled || nemesisStarsVoiceCd > 0) return false;
      if (Math.random() > chance) return false;
      const vol = clamp(volume, 0, 1.15);
      const played = playSfx("nemesisStars", vol, { rate: 0.97 + Math.random() * 0.05 });
      if (played) {
        nemesisStarsVoiceCd = 20 + Math.random() * 16;
        return true;
      }
      return false;
    }

    function sfxNemesisAttack(volume = 1) {
      playNemesisScream(volume, "attack");
    }
    function sfxNemesisStun(strong = false) {
      playSfx("gunImpact", strong ? 0.85 : 0.62, { rate: strong ? 0.62 : 0.78 });
      playTone("sawtooth", strong ? 96 : 132, strong ? 0.26 : 0.16, strong ? 0.11 : 0.07, strong ? 42 : 76);
      if (strong) playDelayedTone(120, "triangle", 74, 0.28, 0.08, 38);
    }
    function sfxClownIdle(volume = 1) {
      const vol = clamp(volume, 0, 1.15);
      const survival = isSurvivalRun();
      const playVol = (survival ? 0.11 : 0.22) * vol;
      const rate = survival ? 1.1 + Math.random() * 0.2 : 0.82 + Math.random() * 0.22;
      if (!playSfx("clownLaugh", playVol, { rate })) {
        playTone("square", 520, 0.08, 0.035 * vol, 720);
        playDelayedTone(70, "triangle", 720, 0.07, 0.026 * vol, 920);
      }
    }
    function sfxClownAlert(volume = 1) {
      const vol = clamp(volume, 0, 1.15);
      if (!playSfx("clownLaugh", 0.9 * vol, { rate: 0.96 + Math.random() * 0.16 })) {
        playTone("square", 620, 0.1, 0.08 * vol, 880);
        playDelayedTone(85, "triangle", 920, 0.11, 0.065 * vol, 1180);
        playDelayedTone(170, "sawtooth", 480, 0.12, 0.06 * vol, 620);
      }
    }
    function sfxClownDeath() {
      if (!playSfx("clownDeathHorror", 0.82, { rate: 0.9 + Math.random() * 0.12 })) {
        playTone("sawtooth", 260, 0.16, 0.09, 160);
        playDelayedTone(85, "square", 180, 0.18, 0.07, 120);
      }
      setTimeout(() => playSfx("clownLaugh", 0.3, { rate: 0.68 + Math.random() * 0.08 }), 80);
    }
    function sfxFail() {
      if (!playSfx("gunImpact", 0.42, { rate: 0.78 })) {
        playTone("sawtooth", 190, 0.18, 0.1, 110);
        setTimeout(() => playTone("sawtooth", 145, 0.2, 0.08, 90), 60);
      }
    }

    function enemyVoiceRadius(g) {
      if (!g) return 0;
      if (isNemesisKind(g.kind)) return 430;
      if (isClownKind(g.kind)) return 285;
      if (isZombieKind(g.kind)) return 265;
      return 0;
    }

    function enemyVoiceVolume(g, radius = enemyVoiceRadius(g)) {
      if (!g || !player.alive || mode !== MODE_PLAYING || radius <= 0) return 0;
      const d = dist(g.x, g.y, player.x, player.y);
      if (d > radius) return 0;
      const blockedMul = rayBlocked(g.x, g.y, player.x, player.y) ? 0.58 : 1;
      const near = 1 - d / radius;
      return clamp((0.16 + near * 0.84) * blockedMul, 0, 1);
    }

    function enemyVoiceInterval(g, heard) {
      if (!heard) return isSurvivalRun() ? 9 + rand() * 7 : 1.1 + rand() * 1.7;
      const alertMul = g.state === "ALERT" ? 0.78 : 1;
      if (isSurvivalRun()) return (28 + rand() * 22) * alertMul;
      if (isNemesisKind(g.kind)) return (11 + rand() * 9) * alertMul;
      if (isClownKind(g.kind)) return (5.0 + rand() * 4.8) * alertMul;
      return (4.6 + rand() * 5.2) * alertMul;
    }

    function playEnemyAmbientVoice(g) {
      const ambMul = isSurvivalRun() ? 0.12 : 1;
      const volume = enemyVoiceVolume(g) * ambMul;
      if (volume <= 0) return false;
      if (isSurvivalRun()) {
        if (survivalAmbientVoiceT > 0) return false;
        survivalAmbientVoiceT = 14 + rand() * 10;
      }
      if (isNemesisKind(g.kind)) {
        if (!tryNemesisStarsVoice(volume * 0.78, 0.12)) playNemesisScream(volume * 0.82, "chase");
      }
      else if (isClownKind(g.kind)) sfxClownIdle(volume);
      else if (isZombieKind(g.kind)) sfxZombieIdle(volume);
      return true;
    }

    function maybePlayNemesisAttackVoice(g, force = false) {
      if (!g || !isNemesisKind(g.kind)) return false;
      if (!force && g.attackVoiceT > 0) return false;
      const volume = enemyVoiceVolume(g, 455);
      if (volume <= 0) return false;
      if (tryNemesisStarsVoice(volume * 0.9, force ? 0.38 : 0.22)) {
        g.attackVoiceT = 3.4 + rand() * 2.6;
        return true;
      }
      sfxNemesisAttack(volume);
      g.attackVoiceT = 2.8 + rand() * 2.4;
      return true;
    }

    function matchMediaQuery(query) {
      return !!(window.matchMedia && window.matchMedia(query).matches);
    }

    function isCoarsePointer() {
      return matchMediaQuery("(pointer: coarse)");
    }

    function isTouchPrimaryDevice() {
      return matchMediaQuery("(hover: none) and (pointer: coarse)");
    }

    // Deteccao abrangente de toque: alguns celulares/navegadores nao reportam
    // corretamente as media queries de ponteiro, entao tambem checamos a API de
    // toque (maxTouchPoints / ontouchstart) para nao deixar o aparelho sem botoes.
    function deviceSupportsTouch() {
      if ((navigator.maxTouchPoints || navigator.msMaxTouchPoints || 0) > 0) return true;
      if ("ontouchstart" in window) return true;
      if (matchMediaQuery("(pointer: coarse)")) return true;
      if (matchMediaQuery("(hover: none)")) return true;
      return false;
    }

    function isLikelyMobileViewport() {
      // Qualquer aparelho com toque e tela "de mao/tablet" usa o layout mobile.
      if (deviceSupportsTouch()) {
        return window.innerWidth <= 1280 || window.innerHeight <= 900;
      }
      // Desktop com mouse: nao ativa layout mobile so porque a janela ficou estreita (ex.: DevTools).
      return window.innerWidth <= 520;
    }

    // Celular/tablet jogando pelo navegador (Netlify, Chrome, Safari, etc.).
    function isBrowserMobilePlay() {
      return deviceSupportsTouch() && isLikelyMobileViewport();
    }

    function superPlatformEnemyMul() {
      return isBrowserMobilePlay() ? 0.72 : 1;
    }

    function applyBrowserPlatformDefaults() {
      try {
        if (localStorage.getItem(SETTINGS_KEY)) return;
      } catch (_) {
        return;
      }
      if (isBrowserMobilePlay()) {
        settings.qualityMode = "medium";
      }
      const cores = navigator.hardwareConcurrency || 0;
      const saveData = navigator.connection && navigator.connection.saveData;
      if (isBrowserMobilePlay() && (cores > 0 && cores <= 4 || saveData)) {
        settings.qualityMode = "low";
      }
    }

    function isLandscapeViewport() {
      return window.innerWidth >= window.innerHeight;
    }

    function isMobileGameplayMode() {
      return mode === MODE_PLAYING || mode === MODE_PAUSED || mode === MODE_LEVEL_CLEAR || mode === MODE_LEVEL_FAIL;
    }

    function shouldBlockPortraitMobileGameplay() {
      return touchInput.enabled && isLikelyMobileViewport() && !isLandscapeViewport() && isMobileGameplayMode();
    }

    function tryLockLandscapeOrientation() {
      try {
        if (!screen.orientation || typeof screen.orientation.lock !== "function") return;
        const lockJob = screen.orientation.lock("landscape");
        if (lockJob && typeof lockJob.catch === "function") lockJob.catch(() => {});
      } catch (_) {
        // orientation lock not supported
      }
    }

    function resetMobileStartTaps() {
      mobileStartTapCount = 0;
      if (mobilePlayStep) {
        mobilePlayStep.textContent = "Toque 1/2 para iniciar";
      }
    }

    function syncMobilePlayStepText() {
      if (!mobilePlayStep) return;
      if (mobileStartTapCount <= 0) {
        mobilePlayStep.textContent = "Toque 1/2 para iniciar";
      } else if (!isLandscapeViewport()) {
        mobilePlayStep.textContent = "Gire o celular e toque 2/2";
      } else {
        mobilePlayStep.textContent = "Toque 2/2 para iniciar";
      }
    }

    function shouldShowMobilePlayGate() {
      if (!touchInput.enabled || !isLikelyMobileViewport() || mode !== MODE_MENU) return false;
      if (!menuModal || !menuModal.classList.contains("hidden")) return false;
      if (settingsModal && !settingsModal.classList.contains("hidden")) return false;
      if (isLaserCalibOpen()) return false;
      return true;
    }

    function updateMobilePlayGate() {
      if (!mobilePlayGate) return;
      const show = shouldShowMobilePlayGate();
      mobilePlayGate.classList.toggle("hidden", !show);
      mobilePlayGate.setAttribute("aria-hidden", show ? "false" : "true");
      document.body.classList.toggle("mobile-touch-menu", show);
      if (!show) resetMobileStartTaps();
      else syncMobilePlayStepText();
    }

    function handleMobilePlayTap() {
      mobileStartTapCount += 1;

      if (mobileStartTapCount === 1) {
        ensureAudio();
        requestMobileImmersiveMode();
        tryLockLandscapeOrientation();
        syncMobilePlayStepText();
        return;
      }

      if (!isLandscapeViewport()) {
        mobileStartTapCount = 1;
        syncMobilePlayStepText();
        return;
      }

      resetMobileStartTaps();
      requestMobileImmersiveMode();
      tryLockLandscapeOrientation();
      openMenu();
      updateMobilePlayGate();
    }

    function requestMobileImmersiveMode() {
      if (!touchInput.enabled || !isLikelyMobileViewport() || !isLandscapeViewport()) return;

      const root = document.documentElement;
      if (!document.fullscreenElement && root && typeof root.requestFullscreen === "function") {
        try {
          const fsJob = root.requestFullscreen({ navigationUI: "hide" });
          if (fsJob && typeof fsJob.then === "function") {
            fsJob.then(() => {
              tryLockLandscapeOrientation();
            }).catch(() => {});
          } else {
            tryLockLandscapeOrientation();
          }
        } catch (_) {
          // fullscreen can fail without user gesture
        }
      } else {
        tryLockLandscapeOrientation();
      }
    }

    function updateTouchVisibility() {
      let wantTouch;
      if (settings.touchMode === "on") wantTouch = true;
      else if (settings.touchMode === "off") wantTouch = false;
      else wantTouch = deviceSupportsTouch() || window.innerWidth <= 820;

      touchInput.enabled = wantTouch;
      if (wantTouch) dismissTutorialForMobile();
      const showMobileUi = wantTouch && isLikelyMobileViewport() && isLandscapeViewport() && isMobileGameplayMode();
      mobileControls.classList.toggle("hidden", !showMobileUi);
      if (touchStart) touchStart.classList.toggle("hidden", !showMobileUi);

      if (!wantTouch) {
        touchInput.moveX = 0;
        touchInput.moveY = 0;
        touchInput.run = false;
        touchInput.crouch = false;
        touchInput.interactTap = false;
        touchInput.lureTap = false;
        touchInput.reloadTap = false;
        touchInput.shootTap = false;
        touchInput.shoot = false;
        touchInput.hammerTap = false;
        touchInput.hammer = false;
        touchInput.switchWeaponTap = false;
        touchInput.startTap = false;
        if (touchRun) touchRun.classList.remove("active");
        if (touchCrouch) {
          touchCrouch.classList.remove("active");
          touchCrouch.classList.remove("cooldown");
          touchCrouch.textContent = TOUCH_LABELS.crouch;
        }
        if (touchLure) {
          touchLure.classList.remove("active");
          touchLure.classList.remove("cooldown");
          touchLure.textContent = TOUCH_LABELS.lure;
        }
        if (touchUse) {
          touchUse.classList.remove("active");
          touchUse.classList.remove("cooldown");
          touchUse.textContent = TOUCH_LABELS.use;
        }
        if (touchShoot) {
          touchShoot.classList.remove("active");
          touchShoot.classList.remove("cooldown");
          touchShoot.textContent = TOUCH_LABELS.punch;
        }
        if (touchHammer) {
          touchHammer.classList.remove("active");
          touchHammer.classList.remove("cooldown");
          touchHammer.textContent = "Mjolnir";
        }
        if (touchStart) touchStart.classList.remove("active");
        if (touchSwitch) {
          touchSwitch.classList.add("hidden");
          touchSwitch.classList.remove("active");
          touchSwitch.classList.remove("cooldown");
        }
        joyStick.style.transform = "translate(0px, 0px)";
      }

      updateFullscreenButtons();
      updateMobileGameplayLayout();
      updateMobilePlayGate();
      syncTouchActionBarLayout();
      updateCanvasViewportSize();
    }

    function getMobileControlsReservePx() {
      if (!document.body.classList.contains("mobile-gameplay")) return 0;
      if (!mobileControls || mobileControls.classList.contains("hidden")) return 0;
      const measured = mobileControls.offsetHeight;
      return measured > 0 ? measured : 112;
    }

    function syncMobileControlsReserve() {
      if (!stage) return;
      const reserve = getMobileControlsReservePx();
      if (reserve > 0) {
        stage.style.setProperty("--mobile-controls-h", reserve + "px");
      } else {
        stage.style.removeProperty("--mobile-controls-h");
      }
    }

    function getViewportContentSize(el) {
      const style = window.getComputedStyle(el);
      const padL = parseFloat(style.paddingLeft) || 0;
      const padR = parseFloat(style.paddingRight) || 0;
      const padT = parseFloat(style.paddingTop) || 0;
      const padB = parseFloat(style.paddingBottom) || 0;
      return {
        w: Math.max(1, el.clientWidth - padL - padR),
        h: Math.max(1, el.clientHeight - padT - padB)
      };
    }

    function updateCanvasViewportSize() {
      if (!stage) return;

      const mobileLayout = document.body.classList.contains("mobile-gameplay");
      const viewport = canvas.closest(".stage-viewport");
      const measureEl = mobileLayout ? (viewport || stage) : stage;
      const content = mobileLayout ? getViewportContentSize(measureEl) : null;
      const sw = content ? content.w : measureEl.clientWidth;
      const sh = content ? content.h : measureEl.clientHeight;
      if (sw <= 0 || sh <= 0) return;

      const targetAspect = canvas.width / canvas.height;
      let cw = sw;
      let ch = cw / targetAspect;
      if (ch > sh) {
        ch = sh;
        cw = ch * targetAspect;
      }

      const nextW = Math.max(1, Math.floor(cw));
      const nextH = Math.max(1, Math.floor(ch));
      if (nextW === lastCanvasCssW && nextH === lastCanvasCssH) {
        return;
      }

      lastCanvasCssW = nextW;
      lastCanvasCssH = nextH;
      canvas.style.width = nextW + "px";
      canvas.style.height = nextH + "px";
    }

    // Recalcula o tamanho do canvas/controles ignorando o cache de tamanho, em
    // varios momentos. A transicao menu->jogo (e a entrada em tela cheia) pode
    // medir o layout antes dele assentar, cortando os botoes; remedir depois
    // corrige sem precisar de refresh.
    function forceViewportResync() {
      viewportResyncToken += 1;
      const token = viewportResyncToken;
      const run1 = () => {
        if (token !== viewportResyncToken) return;
        lastCanvasCssW = -1;
        lastCanvasCssH = -1;
        updateMobileGameplayLayout();
        updateCanvasViewportSize();
      };
      run1();
      requestAnimationFrame(run1);
      setTimeout(run1, 120);
      setTimeout(run1, 360);
    }

    function updateCardioMonitorLayout(_canvasCssH, _stageCssH) {
      // Cardiac monitor lives inside the RE3 pause menu only.
    }

    function isGamePauseOpen() {
      return gamePauseModal && !gamePauseModal.classList.contains("hidden");
    }

    function updatePauseMenuUI() {
      if (!pausePhase) return;

      syncPausePortrait();
      const secs = getLevelElapsedSec(performance.now());
      pausePhase.textContent = String(run.level);
      if (pauseLives) pauseLives.textContent = formatLivesLabel();
      if (pauseScore) pauseScore.textContent = String(run.score);
      if (pauseTime) pauseTime.textContent = formatTime(secs);
      if (pauseVis) pauseVis.textContent = Math.round(player.vis * 100) + "%";
      if (pauseNoi) pauseNoi.textContent = Math.round(player.noise * 100) + "%";

      if (pauseInventory) {
        const done = objectives.filter((o) => o.done).length;
        syncActiveWeaponState();
        const items = [
          { name: "Dossiê", value: item.taken ? "OK" : "---" },
          {
            name: "Faca",
            value: player.meleeWeapon === "knife" ? (player.activeSlot === "knife" ? "ATIVA" : "OK") : "---"
          },
          {
            name: "Isca",
            value: player.throwCooldown > 0 ? player.throwCooldown.toFixed(1) + "s" : "PRONTA"
          },
          { name: "Terminais", value: done + "/" + objectives.length }
        ];
        for (let i = 0; i < player.weaponSlots.length; i++) {
          const slot = player.weaponSlots[i];
          items.splice(2 + i, 0, {
            name: slot ? ("W" + (i + 1) + " " + slot.weapon.label) : ("W" + (i + 1)),
            value: slot ? ((player.activeSlot === "weapon" && player.activeWeaponIndex === i ? "ATIVA " : "") + slot.ammo + "/" + slot.maxAmmo) : "---"
          });
        }

        pauseInventory.innerHTML = "";
        for (const entry of items) {
          const li = document.createElement("li");
          const name = document.createElement("span");
          const value = document.createElement("span");
          name.textContent = entry.name;
          value.textContent = entry.value;
          li.appendChild(name);
          li.appendChild(value);
          pauseInventory.appendChild(li);
        }
      }
    }

    function openGamePauseMenu() {
      if (!gamePauseModal) return;
      if (mode !== MODE_PLAYING && mode !== MODE_PAUSED) return;

      if (mode === MODE_PLAYING) {
        run.levelFreezeSec = getLevelElapsedSec(performance.now());
        mode = MODE_PAUSED;
        stopLoopingSfx();
        statusTxt.textContent = "PAUSADO";
        pauseBtn.textContent = "Retomar";
      }

      gamePauseOpen = true;
      updatePauseMenuUI();
      updateCardioPulseState();
      gamePauseModal.classList.remove("hidden");
      gamePauseModal.setAttribute("aria-hidden", "false");
      if (touchInput.enabled && isLikelyMobileViewport()) {
        gamePauseModal.classList.add("touch-opening");
        setTimeout(() => {
          if (gamePauseModal) gamePauseModal.classList.remove("touch-opening");
        }, 180);
      }
      sfxClick();
      syncFullscreenLayout();
    }

    function closeGamePauseMenu() {
      if (!gamePauseModal) return;
      gamePauseModal.classList.add("hidden");
      gamePauseModal.setAttribute("aria-hidden", "true");
      gamePauseOpen = false;
      syncFullscreenLayout();
    }

    function resumePausedGameplay(showFeedback = true) {
      if (mode === MODE_PAUSED) {
        mode = MODE_PLAYING;
        run.levelStartMs = performance.now() - run.levelFreezeSec * 1000;
        statusTxt.textContent = "INFILTRANDO";
        pauseBtn.textContent = "Pausar";
        if (showFeedback) setHint("Retomado. Continue a infiltração.");
        forceViewportResync();
      }
    }

    function resumeFromGamePause() {
      closeGamePauseMenu();
      resumePausedGameplay(true);
      sfxClick();
      syncFullscreenLayout();
    }

    function handleMobilePauseDoubleTap(e) {
      if (!touchInput.enabled || !isLikelyMobileViewport() || mode !== MODE_PAUSED) return;
      if (menuModal && !menuModal.classList.contains("hidden")) return;
      if (settingsModal && !settingsModal.classList.contains("hidden")) return;
      if (isLaserCalibOpen()) return;
      const target = e.target;
      if (target && target.closest && target.closest("button, select, input, textarea, .joystick, .touch-actions, .touch-start-btn")) return;

      const now = performance.now();
      if (now - mobilePauseResumeTap.t > 520) {
        mobilePauseResumeTap.count = 0;
      }
      mobilePauseResumeTap.t = now;
      mobilePauseResumeTap.count += 1;

      if (mobilePauseResumeTap.count >= 2) {
        mobilePauseResumeTap.count = 0;
        e.preventDefault();
        closeGamePauseMenu();
        resumePausedGameplay(true);
        sfxClick();
      } else {
        setInteractionFeedback("Toque 2x para voltar", "ok", 0.45);
      }
    }

    function applyCardioPulseVisual(bpm, stateText, durationSec, waveColor, glowColor, flatline) {
      if (!cardioMonitor) return;

      const key = [bpm, stateText, durationSec.toFixed(2), waveColor, glowColor, flatline ? "1" : "0"].join("|");
      if (key === lastCardioVisual) return;
      lastCardioVisual = key;

      cardioMonitor.classList.toggle("flatline", !!flatline);
      cardioMonitor.style.setProperty("--cardio-wave-duration", durationSec.toFixed(2) + "s");
      cardioMonitor.style.setProperty("--cardio-wave-color", waveColor);
      cardioMonitor.style.setProperty("--cardio-wave-glow", glowColor);

      if (cardioBpm) cardioBpm.textContent = flatline ? "0" : String(bpm);
      if (cardioState) cardioState.textContent = stateText;
      if (cardioState) cardioState.style.color = waveColor;
    }

    function updateCardioPulseState() {
      if (!cardioMonitor) return;

      let bpm = 72;
      let label = "NOMINAL";
      let durationSec = 1.8;
      let waveColor = "#8fefff";
      let glowColor = "rgba(123, 228, 255, 0.65)";
      let flatline = false;

      if (mode === MODE_LEVEL_FAIL || mode === MODE_RUN_OVER) {
        bpm = 0;
        label = "SEM SINAIS";
        durationSec = 1.8;
        waveColor = "#ff9f9f";
        glowColor = "rgba(255, 139, 139, 0.7)";
        flatline = true;
      } else if (mode === MODE_PLAYING) {
        let hasAlert = false;
        let hasSuspicious = false;

        for (const g of guards) {
          if (g.state === "ALERT") {
            hasAlert = true;
            break;
          }
          if (g.state === "SUSPICIOUS" || g.state === "SEARCH") {
            hasSuspicious = true;
          }
        }

        const running = (actionDown("run") || touchInput.run) && !player.crouch;
        const stealthy = player.crouch && player.noise <= 0.2 && !hasAlert;

        if (hasAlert) {
          bpm = 124;
          label = "ALERTA";
          durationSec = 0.7;
          waveColor = "#ffa3a3";
          glowColor = "rgba(255, 148, 148, 0.72)";
        } else if (hasSuspicious) {
          bpm = 96;
          label = "SUSPEITA";
          durationSec = 1.08;
          waveColor = "#ffd98c";
          glowColor = "rgba(255, 214, 129, 0.68)";
        } else if (stealthy) {
          bpm = 56;
          label = "OCULTO";
          durationSec = 2.45;
          waveColor = "#7df3cf";
          glowColor = "rgba(126, 247, 201, 0.68)";
        } else if (player.crouch) {
          bpm = 62;
          label = "BAIXO";
          durationSec = 2.2;
          waveColor = "#8aeccc";
          glowColor = "rgba(138, 236, 204, 0.66)";
        } else if (running || player.noise > 0.58) {
          bpm = 88;
          label = "MOVIMENTO";
          durationSec = 1.32;
          waveColor = "#9ed8ff";
          glowColor = "rgba(147, 214, 255, 0.66)";
        }
      }

      applyCardioPulseVisual(bpm, label, durationSec, waveColor, glowColor, flatline);
    }

    function shouldUseMobileGameplayLayout() {
      return touchInput.enabled && isLikelyMobileViewport() && isLandscapeViewport() && isMobileGameplayMode();
    }

    function updateMobileGameplayLayout() {
      const useMobileLayout = shouldUseMobileGameplayLayout();
      const blockPortrait = shouldBlockPortraitMobileGameplay();
      document.body.classList.toggle("mobile-gameplay", useMobileLayout);
      document.body.classList.toggle("mobile-zoom", useMobileLayout);
      document.body.classList.toggle("mobile-portrait-blocked", blockPortrait);

      if (orientationGate) {
        orientationGate.classList.toggle("hidden", !blockPortrait);
        orientationGate.setAttribute("aria-hidden", blockPortrait ? "false" : "true");
      }

      if (mobileControls) mobileControls.classList.toggle("hidden", !useMobileLayout);

      if (blockPortrait && mode === MODE_PLAYING) {
        run.levelFreezeSec = getLevelElapsedSec(performance.now());
        mode = MODE_PAUSED;
        statusTxt.textContent = "PAUSADO";
        pauseBtn.textContent = "Retomar";
        setHint("Gire o celular para o modo paisagem para continuar.");
      }

      updateCanvasViewportSize();

      if (touchStart && touchInput.enabled) {
        const showStart = shouldUseMobileGameplayLayout();
        touchStart.classList.toggle("hidden", !showStart);
      }

      if (useMobileLayout) {
        syncMobileControlsReserve();
        updateCanvasViewportSize();
        requestAnimationFrame(() => {
          syncMobileControlsReserve();
          updateCanvasViewportSize();
        });
      }
    }

    function shouldUseFollowCamera() {
      return run.active && (
        mode === MODE_PLAYING ||
        mode === MODE_PAUSED ||
        mode === MODE_LEVEL_CLEAR ||
        mode === MODE_LEVEL_FAIL
      );
    }

    function getFollowCameraZoom() {
      if (!shouldUseFollowCamera()) return 1;

      if (!document.body.classList.contains("mobile-gameplay")) {
        return 1;
      }

      const running = (actionDown("run") || touchInput.run) && !player.crouch;
      let base = 1.38;
      if (mode === MODE_LEVEL_FAIL || mode === MODE_RUN_OVER) base = 1.46;
      else if (mode === MODE_PAUSED) base = 1.44;
      else if (player.crouch) base = 1.6;
      else if (running) base = 1.34;

      return clamp(base * settings.mobileZoomLevel, 1.05, 2.25);
    }

    function getCameraScreenCenter() {
      const y = document.body.classList.contains("mobile-gameplay")
        ? canvas.height * 0.43
        : canvas.height * 0.5;
      return { x: canvas.width * 0.5, y };
    }

    function updateRenderQuality(dt) {
      const fps = dt > 0 ? 1 / dt : 60;
      smoothFps = lerp(smoothFps, fps, 0.08);

      const userLevel = settings.qualityMode || "high";
      if (userLevel === "low" || userLevel === "medium") {
        renderQuality = userLevel;
        return;
      }

      // "Alta" escolhida pelo jogador: adapta ao dispositivo (celular vs PC no navegador).
      let level = "high";
      const mobile = isBrowserMobilePlay();
      if (mobile && isSuperCharacter()) {
        level = smoothFps < 34 ? "low" : "medium";
      } else if (mobile) {
        if (smoothFps < 28) level = "medium";
        if (smoothFps < 20) level = "low";
      } else if (isSuperCharacter()) {
        if (smoothFps < 40) level = "medium";
        if (smoothFps < 26) level = "low";
      } else if (smoothFps < 28) {
        level = "medium";
      }
      renderQuality = level;
    }

    function updateFollowCamera(dt) {
      if (!shouldUseFollowCamera()) {
        camera.zoom = 1;
        camera.ready = false;
        return;
      }

      const zoom = getFollowCameraZoom();
      camera.zoom = zoom;

      let focusX = player.x;
      let focusY = player.y;
      if (!run.active || mode === MODE_MENU) {
        focusX = WORLD_W * 0.5;
        focusY = WORLD_H * 0.5;
      }

      if (!camera.ready || !Number.isFinite(camera.x) || !Number.isFinite(camera.y)) {
        camera.x = focusX;
        camera.y = focusY;
        camera.ready = true;
      }

      const center = getCameraScreenCenter();
      const halfW = canvas.width / (2 * zoom);
      const halfH = canvas.height / (2 * zoom);
      const minX = center.x / zoom;
      const maxX = WORLD_W - (canvas.width - center.x) / zoom;
      const minY = center.y / zoom;
      const maxY = WORLD_H - (canvas.height - center.y) / zoom;
      const deadZoneX = halfW * 0.23;
      const deadZoneY = halfH * 0.2;

      let targetX = camera.x;
      let targetY = camera.y;
      if (focusX < camera.x - deadZoneX) targetX = focusX + deadZoneX;
      else if (focusX > camera.x + deadZoneX) targetX = focusX - deadZoneX;
      if (focusY < camera.y - deadZoneY) targetY = focusY + deadZoneY;
      else if (focusY > camera.y + deadZoneY) targetY = focusY - deadZoneY;

      if (maxX > minX) targetX = clamp(targetX, minX, maxX);
      else targetX = WORLD_W * 0.5;
      if (maxY > minY) targetY = clamp(targetY, minY, maxY);
      else targetY = WORLD_H * 0.5;

      const smoothing = clamp(1 - Math.pow(0.001, dt * 4.8), 0, 1);
      camera.x = lerp(camera.x, targetX, smoothing);
      camera.y = lerp(camera.y, targetY, smoothing);

      if (maxX > minX) camera.x = clamp(camera.x, minX, maxX);
      else camera.x = WORLD_W * 0.5;
      if (maxY > minY) camera.y = clamp(camera.y, minY, maxY);
      else camera.y = WORLD_H * 0.5;
    }

    function projectWorldToScreen(x, y) {
      if (!shouldUseFollowCamera() || !camera.ready) return { x, y };

      const center = getCameraScreenCenter();
      const zoom = camera.zoom;
      if (zoom <= 1) {
        return {
          x: x - camera.x + center.x,
          y: y - camera.y + center.y
        };
      }

      return {
        x: (x - camera.x) * zoom + center.x,
        y: (y - camera.y) * zoom + center.y
      };
    }

    // Converte coordenadas do clique (clientX/Y) para coordenadas internas do canvas.
    function clientToCanvas(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const sx = rect.width > 0 ? canvas.width / rect.width : 1;
      const sy = rect.height > 0 ? canvas.height / rect.height : 1;
      return { x: (clientX - rect.left) * sx, y: (clientY - rect.top) * sy };
    }

    // Inverso de projectWorldToScreen: tela -> mundo.
    function screenToWorld(sx, sy) {
      if (!shouldUseFollowCamera() || !camera.ready) return { x: sx, y: sy };
      const center = getCameraScreenCenter();
      const zoom = camera.zoom;
      if (zoom <= 1) {
        return { x: sx - center.x + camera.x, y: sy - center.y + camera.y };
      }
      return { x: (sx - center.x) / zoom + camera.x, y: (sy - center.y) / zoom + camera.y };
    }

    // Limites do mundo visiveis pela camera (com margem), para nao desenhar o que
    // esta fora da tela. Retorna null quando nao ha camera de follow (mapa inteiro cabe).
    function getVisibleWorldBounds(margin = 96) {
      if (!shouldUseFollowCamera() || !camera.ready) return null;
      const zoom = camera.zoom || 1;
      const center = getCameraScreenCenter();
      return {
        minX: camera.x - center.x / zoom - margin,
        maxX: camera.x + (canvas.width - center.x) / zoom + margin,
        minY: camera.y - center.y / zoom - margin,
        maxY: camera.y + (canvas.height - center.y) / zoom + margin
      };
    }

    function inViewBounds(b, x, y) {
      if (!b) return true;
      return x >= b.minX && x <= b.maxX && y >= b.minY && y <= b.maxY;
    }

    function applyFollowCameraTransform() {
      if (!shouldUseFollowCamera() || !camera.ready) return false;

      const zoom = camera.zoom;
      const center = getCameraScreenCenter();

      if (zoom <= 1) {
        ctx.translate(center.x - camera.x, center.y - camera.y);
        return true;
      }

      ctx.translate(center.x, center.y);
      ctx.scale(zoom, zoom);
      ctx.translate(-camera.x, -camera.y);
      return true;
    }

    function bindHoldButton(el, onChange) {
      if (!el) return;
      let pointerId = null;

      function set(v) {
        onChange(v);
        el.classList.toggle("active", v);
      }

      el.addEventListener("pointerdown", (e) => {
        if (!touchInput.enabled) return;
        e.preventDefault();
        ensureAudio();
        requestMobileImmersiveMode();
        pointerId = e.pointerId;
        safeSetPointerCapture(el, pointerId);
        set(true);
      });

      function end(e) {
        if (pointerId === null || e.pointerId !== pointerId) return;
        pointerId = null;
        set(false);
      }

      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
    }

    function bindTapButton(el, flagName, fireOnRelease = false, guardFn = null) {
      if (!el) return;
      let pointerId = null;

      el.addEventListener("pointerdown", (e) => {
        if (!touchInput.enabled) return;
        if (guardFn && !guardFn(e)) return;
        e.preventDefault();
        ensureAudio();
        requestMobileImmersiveMode();
        pointerId = e.pointerId;
        safeSetPointerCapture(el, pointerId);
        if (!fireOnRelease) touchInput[flagName] = true;
        el.classList.add("active");
        setTimeout(() => el.classList.remove("active"), 90);
      });

      if (fireOnRelease) {
        function finish(e) {
          if (pointerId === null || e.pointerId !== pointerId) return;
          pointerId = null;
          touchInput[flagName] = true;
          el.classList.remove("active");
        }

        el.addEventListener("pointerup", finish);
        el.addEventListener("pointercancel", () => {
          pointerId = null;
          el.classList.remove("active");
        });
      }
    }

    function updateJoystickTouch(e) {
      const rect = joyPad.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const max = rect.width * 0.38;
      const len = Math.hypot(dx, dy);
      const dead = clamp(settings.joyDeadzone, 0, 0.45);
      const sens = clamp(settings.joySensitivity, 0.6, 1.4);

      let ux = 0;
      let uy = 0;
      let outX = 0;
      let outY = 0;
      if (len > 0.0001) {
        const nx = dx / len;
        const ny = dy / len;
        const normLen = clamp(len / max, 0, 1);
        let magnitude = 0;
        if (normLen > dead) {
          const postDead = (normLen - dead) / (1 - dead);
          magnitude = clamp(Math.pow(postDead, 0.92) * sens, 0, 1);
        }
        ux = nx * magnitude * max;
        uy = ny * magnitude * max;
        outX = clamp(nx * magnitude, -1, 1);
        outY = clamp(ny * magnitude, -1, 1);
      }

      touchInput.moveX = outX;
      touchInput.moveY = outY;
      joyStick.style.transform = "translate(" + ux.toFixed(1) + "px," + uy.toFixed(1) + "px)";
    }

    function initTouchControls() {
      joyPad.addEventListener("pointerdown", (e) => {
        if (!touchInput.enabled) return;
        e.preventDefault();
        ensureAudio();
        requestMobileImmersiveMode();
        touchInput.joyPointerId = e.pointerId;
        safeSetPointerCapture(joyPad, e.pointerId);
        updateJoystickTouch(e);
      });

      joyPad.addEventListener("pointermove", (e) => {
        if (touchInput.joyPointerId !== e.pointerId) return;
        e.preventDefault();
        updateJoystickTouch(e);
      });

      function joyRelease(e) {
        if (touchInput.joyPointerId !== e.pointerId) return;
        touchInput.joyPointerId = null;
        touchInput.moveX = 0;
        touchInput.moveY = 0;
        joyStick.style.transform = "translate(0px, 0px)";
      }

      joyPad.addEventListener("pointerup", joyRelease);
      joyPad.addEventListener("pointercancel", joyRelease);

      if (touchRun) {
        bindHoldButton(touchRun, (v) => {
          touchInput.run = v;
        });
      }
      if (touchCrouch) {
        bindHoldButton(touchCrouch, (v) => {
          touchInput.crouch = v;
        });
      }

      bindTapButton(touchLure, "lureTap");
      if (touchReload) bindTapButton(touchReload, "reloadTap");
      bindTapButton(touchUse, "interactTap", false, () => mode === MODE_PLAYING && !!nearestInteraction());
      if (touchSwitch) bindTapButton(touchSwitch, "switchWeaponTap");
      if (touchShoot) {
        bindHoldButton(touchShoot, (v) => {
          touchInput.shoot = v;
          if (v) touchInput.shootTap = true;
        });
      }
      if (touchHammer) {
        bindHoldButton(touchHammer, (v) => {
          touchInput.hammer = v;
          if (v) touchInput.hammerTap = true;
        });
      }
      if (touchStart) bindTapButton(touchStart, "startTap", true);
    }

    function showMenuScreen(name) {
      if (menuCard) menuCard.dataset.screen = name;
      for (const s of menuScreens) {
        s.classList.toggle("hidden", s.dataset.screen !== name);
      }
      if (name === "family") {
        syncMenuFamilyUI();
      } else if (name === "runtype") {
        syncMenuRunTypeUI();
      } else if (name === "scenario") {
        syncMenuScenarioUI();
      } else if (name === "character") {
        syncMenuCharacterUI();
      } else if (name === "difficulty") {
        syncMenuDifficultyUI();
        if (difficultyNextBtn) {
          difficultyNextBtn.textContent = isMenuWizardSurvivor() ? "Jogar" : "Próximo";
        }
      } else if (name === "level") {
        refreshMenuLevelSelect(run.active ? run.level : progress.lastLevel);
        if (menuLevelSub) {
          menuLevelSub.textContent = isMenuWizardSurvivor()
            ? "Survivor começa no mapa aberto — a fase só define a variante."
            : "Selecione em qual fase da campanha começar.";
        }
        if (menuStartRunBtn) menuStartRunBtn.disabled = false;
      } else if (name === "records") {
        renderShop();
        renderBestTimes();
      }
    }

    function advanceMenuWizard(fromScreen) {
      applyMenuWizardSelections();
      const next = getMenuWizardNext(fromScreen);
      if (!next) {
        if (fromScreen === "difficulty" && isMenuWizardSurvivor()) {
          launchMenuRun();
          return;
        }
        return;
      }
      showMenuScreen(next);
    }

    function openMenu() {
      closeGamePauseMenu();
      syncMenuEnemyModeUI();
      applyMenuModeVisuals(settings.enemyMode);
      menuModal.classList.remove("hidden");
      resetMobileStartTaps();
      updateMobilePlayGate();
      if (mode === MODE_PLAYING) {
        run.levelFreezeSec = getLevelElapsedSec(performance.now());
        mode = MODE_PAUSED;
        stopLoopingSfx();
      }

      if (mode === MODE_PAUSED) {
        menuResumeBtn.disabled = false;
        if (menuResumeBtn) menuResumeBtn.textContent = "Continuar";
      } else if (Meta() && Meta().loadMidRunSave()) {
        menuResumeBtn.disabled = false;
        if (menuResumeBtn) menuResumeBtn.textContent = "Retomar run salva";
      } else if (mode === MODE_RUN_OVER) {
        menuResumeBtn.disabled = true;
        if (menuResumeBtn) menuResumeBtn.textContent = "Continuar";
      } else {
        menuResumeBtn.disabled = true;
        if (menuResumeBtn) menuResumeBtn.textContent = "Continuar";
      }

      renderAchievementsList();
      renderDailyChallengeUI();

      refreshMenuLevelSelect(run.active ? run.level : progress.lastLevel);
      renderBestTimes();
      renderShop();
      if (menuStartRunBtn) {
        menuStartRunBtn.disabled = progress.highestLevel < 1 && !isMenuWizardSurvivor();
      }

      // Telas limpas: comeca pela capa quando nao ha run; se em pausa/run encerrada vai direto a torre.
      const hasRun = mode === MODE_PAUSED || mode === MODE_RUN_OVER;
      showMenuScreen(hasRun ? "home" : "cover");

      statusTxt.textContent = "MENU";
      setHint("Use Menu para iniciar, continuar ou ajustar configurações.");
      syncMusicState();
      sfxClick();
      syncFullscreenLayout();
    }

    function isStandaloneApp() {
      return window.matchMedia("(display-mode: standalone)").matches
        || window.navigator.standalone === true;
    }

    function isIosDevice() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    }

    function setOfflineStatus(text) {
      if (offlineDownloadStatus) offlineDownloadStatus.textContent = text || "";
    }

    function setOfflineProgress(done, total) {
      if (!offlineDownloadProgress || !offlineProgressBar || !offlineProgressLabel) return;
      offlineDownloadProgress.classList.remove("hidden");
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      offlineProgressBar.style.width = pct + "%";
      offlineProgressLabel.textContent = total > 0
        ? `Baixando ${done}/${total} (${pct}%)`
        : "Preparando…";
    }

    function refreshOfflineInstallButton() {
      if (!offlineInstallBtn) return;
      if (isStandaloneApp()) {
        offlineInstallBtn.textContent = "App já instalado";
        offlineInstallBtn.disabled = true;
        return;
      }
      offlineInstallBtn.disabled = false;
      if (deferredInstallPrompt) {
        offlineInstallBtn.textContent = offlineDownloadPlatform === "pc"
          ? "Instalar no PC"
          : "Instalar no celular";
        return;
      }
      if (isIosDevice()) {
        offlineInstallBtn.textContent = "Ver passos do iPhone";
        return;
      }
      offlineInstallBtn.textContent = "Instalar app (Chrome/Edge)";
    }

    function fillOfflineDownloadSteps(platform) {
      if (!offlineDownloadSteps) return;
      offlineDownloadSteps.innerHTML = "";
      const steps = platform === "pc"
        ? [
            "No Chrome ou Edge, toque em Instalar no PC (ou use o ícone ⊕ na barra de endereço).",
            "Depois toque em Baixar conteúdo offline (uma vez, com internet).",
            "Abra o app pelo atalho da área de trabalho — funciona sem internet."
          ]
        : isIosDevice()
          ? [
              "No Safari, toque em Compartilhar → Adicionar à Tela de Início.",
              "Abra o ícone Stealth Ops na tela inicial.",
              "Com internet, toque em Baixar conteúdo offline uma vez."
            ]
          : [
              "Toque em Instalar no celular (Chrome/Android) ou use o menu do navegador → Instalar app.",
              "Com internet, toque em Baixar conteúdo offline uma vez.",
              "Abra pelo ícone da tela inicial — joga sem internet / só local."
            ];
      for (const text of steps) {
        const li = document.createElement("li");
        li.textContent = text;
        offlineDownloadSteps.appendChild(li);
      }
    }

    function openOfflineDownloadModal(platform) {
      offlineDownloadPlatform = platform === "pc" ? "pc" : "mobile";
      if (!offlineDownloadModal) return;
      if (offlineDownloadTitle) {
        offlineDownloadTitle.textContent = platform === "pc"
          ? "Baixar no PC"
          : "Baixar no celular";
      }
      if (offlineDownloadLead) {
        offlineDownloadLead.textContent = platform === "pc"
          ? "Instale como app no computador para jogar offline ou só localmente."
          : "Instale na tela inicial do celular para jogar offline ou só localmente.";
      }
      fillOfflineDownloadSteps(offlineDownloadPlatform);
      refreshOfflineInstallButton();
      setOfflineStatus(isStandaloneApp()
        ? "App já instalado neste aparelho. Baixe o conteúdo offline se ainda não fez."
        : "");
      if (offlineDownloadProgress) offlineDownloadProgress.classList.add("hidden");
      if (offlineProgressBar) offlineProgressBar.style.width = "0%";
      offlineDownloadModal.classList.remove("hidden");
      offlineDownloadModal.setAttribute("aria-hidden", "false");
    }

    function closeOfflineDownloadModal() {
      if (!offlineDownloadModal) return;
      offlineDownloadModal.classList.add("hidden");
      offlineDownloadModal.setAttribute("aria-hidden", "true");
    }

    async function ensureServiceWorkerReady() {
      if (!("serviceWorker" in navigator)) return null;
      try {
        const reg = await navigator.serviceWorker.register("sw.js");
        return reg.ready;
      } catch (_) {
        return null;
      }
    }

    async function downloadOfflineContent() {
      if (offlineCacheBusy) return;
      offlineCacheBusy = true;
      if (offlineCacheBtn) offlineCacheBtn.disabled = true;
      setOfflineStatus("Listando arquivos…");
      setOfflineProgress(0, 0);

      try {
        const listRes = await fetch("offline-assets.json", { cache: "no-store" });
        if (!listRes.ok) throw new Error("lista indisponível");
        const urls = await listRes.json();
        if (!Array.isArray(urls) || !urls.length) throw new Error("lista vazia");

        const reg = await ensureServiceWorkerReady();
        if (reg && reg.active) {
          const total = urls.length;
          setOfflineProgress(0, total);

          await new Promise((resolve, reject) => {
            let settled = false;
            const finish = (fn, value) => {
              if (settled) return;
              settled = true;
              clearTimeout(timer);
              navigator.serviceWorker.removeEventListener("message", onMessage);
              fn(value);
            };
            const onMessage = (event) => {
              const data = event.data || {};
              if (data.type === "OFFLINE_CACHE_PROGRESS") {
                setOfflineProgress(data.done || 0, data.total || total);
              }
              if (data.type === "OFFLINE_CACHE_DONE") {
                finish(resolve, data);
              }
            };
            const timer = setTimeout(() => {
              finish(reject, new Error("tempo esgotado"));
            }, 15 * 60 * 1000);
            navigator.serviceWorker.addEventListener("message", onMessage);
            reg.active.postMessage({ type: "PRECACHE_OFFLINE", urls });
          });
        } else {
          // Fallback: cache direto no navegador se o SW não estiver ativo.
          const cache = await caches.open("stealth-ops-v20260727");
          let done = 0;
          for (const url of urls) {
            try {
              const res = await fetch(url, { cache: "reload" });
              if (res && res.ok) await cache.put(url, res.clone());
            } catch (_) { /* continue */ }
            done += 1;
            setOfflineProgress(done, urls.length);
          }
        }

        setOfflineStatus("Pronto. Pode jogar sem internet pelo app instalado.");
        setHint("Conteúdo offline baixado.", 1.4);
      } catch (err) {
        setOfflineStatus("Falha no download. Conecte-se e tente de novo.");
        setHint("Não foi possível baixar o pacote offline.", 1.6);
      } finally {
        offlineCacheBusy = false;
        if (offlineCacheBtn) offlineCacheBtn.disabled = false;
      }
    }

    async function promptInstallApp() {
      if (isStandaloneApp()) {
        setOfflineStatus("Este aparelho já está com o app instalado.");
        return;
      }
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        try {
          const choice = await deferredInstallPrompt.userChoice;
          if (choice && choice.outcome === "accepted") {
            setOfflineStatus("Instalação iniciada. Depois baixe o conteúdo offline.");
          } else {
            setOfflineStatus("Instalação cancelada.");
          }
        } catch (_) {
          setOfflineStatus("Não foi possível abrir o instalador.");
        }
        deferredInstallPrompt = null;
        refreshOfflineInstallButton();
        return;
      }
      if (isIosDevice()) {
        setOfflineStatus("No iPhone/iPad: Safari → Compartilhar → Adicionar à Tela de Início.");
        return;
      }
      setOfflineStatus("Abra no Chrome ou Edge e use o menu do navegador → Instalar app / Instalar Stealth Ops.");
    }

    function closeMenu() {
      menuModal.classList.add("hidden");
      updateMobilePlayGate();
      syncMusicState();
      syncFullscreenLayout();
    }

    function openSettings() {
      if (mode === MODE_PLAYING) {
        mode = MODE_PAUSED;
        run.levelFreezeSec = getLevelElapsedSec(performance.now());
        stopLoopingSfx();
      }
      settingsModal.classList.remove("hidden");
      settingsModal.scrollTop = 0;
      if (settingsModalCard) settingsModalCard.scrollTop = 0;
      syncSettingsUI();
      syncLaserCalibDevButton();
      sfxClick();
      syncFullscreenLayout();
    }

    function closeSettings() {
      settingsModal.classList.add("hidden");
      applySettingsFromUI();
      sfxClick();
      syncFullscreenLayout();
    }

    function isLaserCalibOpen() {
      return !!(laserCalibModal && !laserCalibModal.classList.contains("hidden"));
    }

    function isSettingsOverlayOpen() {
      return !!(settingsModal && !settingsModal.classList.contains("hidden")) || isLaserCalibOpen();
    }

    let laserCalibAnimId = 0;
    let laserCalibDraftKey = "homelander";

    function laserCalibKeyForSelection(character, pose) {
      const map = LASER_CALIB_CHARACTER_POSE[character] || LASER_CALIB_CHARACTER_POSE.homelander;
      return pose === "alt" ? map.alt : map.stand;
    }

    function laserCalibSelectionFromKey(key) {
      for (const character of Object.keys(LASER_CALIB_CHARACTER_POSE)) {
        const map = LASER_CALIB_CHARACTER_POSE[character];
        if (map.stand === key) return { character, pose: "stand" };
        if (map.alt === key) return { character, pose: "alt" };
      }
      return { character: "homelander", pose: "stand" };
    }

    function formatLaserCalibNumber(n) {
      return String(Math.round(n * 10) / 10);
    }

    function updateLaserCalibValueLabels() {
      if (laserCalibLeftLxValue && laserCalibLeftLx) laserCalibLeftLxValue.textContent = formatLaserCalibNumber(Number(laserCalibLeftLx.value));
      if (laserCalibLeftLyValue && laserCalibLeftLy) laserCalibLeftLyValue.textContent = formatLaserCalibNumber(Number(laserCalibLeftLy.value));
      if (laserCalibRightLxValue && laserCalibRightLx) laserCalibRightLxValue.textContent = formatLaserCalibNumber(Number(laserCalibRightLx.value));
      if (laserCalibRightLyValue && laserCalibRightLy) laserCalibRightLyValue.textContent = formatLaserCalibNumber(Number(laserCalibRightLy.value));
      if (laserCalibDirValue && laserCalibDir) laserCalibDirValue.textContent = laserCalibDir.value + "°";
    }

    function buildLaserCalibExportText() {
      const cal = ensureLaserCalibration();
      const lines = ["// Calibracao de laser — copie e envie estes valores", "{"];
      for (let i = 0; i < SUPER_EYE_KEYS.length; i++) {
        const key = SUPER_EYE_KEYS[i];
        const entry = cal[key];
        const comma = i < SUPER_EYE_KEYS.length - 1 ? "," : "";
        lines.push(
          "  \"" + key + "\": { \"left\": { \"lx\": " + formatLaserCalibNumber(entry.left.lx) +
          ", \"ly\": " + formatLaserCalibNumber(entry.left.ly) + " }, \"right\": { \"lx\": " +
          formatLaserCalibNumber(entry.right.lx) + ", \"ly\": " + formatLaserCalibNumber(entry.right.ly) + " } }" + comma
        );
      }
      lines.push("}");
      return lines.join("\n");
    }

    function refreshLaserCalibExport() {
      if (!laserCalibExport) return;
      laserCalibExport.value = buildLaserCalibExportText();
    }

    function syncLaserCalibSlidersFromKey(key) {
      if (!key) return;
      laserCalibDraftKey = key;
      const entry = ensureLaserCalibration()[key];
      if (!entry) return;
      if (laserCalibLeftLx) laserCalibLeftLx.value = String(entry.left.lx);
      if (laserCalibLeftLy) laserCalibLeftLy.value = String(entry.left.ly);
      if (laserCalibRightLx) laserCalibRightLx.value = String(entry.right.lx);
      if (laserCalibRightLy) laserCalibRightLy.value = String(entry.right.ly);
      updateLaserCalibValueLabels();
      refreshLaserCalibExport();
    }

    function applyLaserCalibSlidersToKey(key) {
      if (!key) return;
      const entry = ensureLaserCalibration()[key];
      if (!entry) return;
      entry.left.lx = clamp(Number(laserCalibLeftLx ? laserCalibLeftLx.value : entry.left.lx), -50, 50);
      entry.left.ly = clamp(Number(laserCalibLeftLy ? laserCalibLeftLy.value : entry.left.ly), -50, 50);
      entry.right.lx = clamp(Number(laserCalibRightLx ? laserCalibRightLx.value : entry.right.lx), -50, 50);
      entry.right.ly = clamp(Number(laserCalibRightLy ? laserCalibRightLy.value : entry.right.ly), -50, 50);
      updateLaserCalibValueLabels();
      refreshLaserCalibExport();
    }

    function drawSpriteOnCtx(targetCtx, img, x, y, rot, scale, anchor) {
      if (!targetCtx || !img) return;
      if (typeof HTMLImageElement !== "undefined" && img instanceof HTMLImageElement) {
        if (!img.complete || img.naturalWidth <= 0 || img.naturalHeight <= 0) return;
      }
      const iw = img.naturalWidth || img.width || 44;
      const ih = img.naturalHeight || img.height || 44;
      const w = iw * scale;
      const h = ih * scale;
      if (w <= 0 || h <= 0) return;
      const ax = anchor && typeof anchor.x === "number" ? anchor.x : 0.5;
      const ay = anchor && typeof anchor.y === "number" ? anchor.y : 0.5;
      targetCtx.save();
      targetCtx.imageSmoothingEnabled = false;
      targetCtx.translate(x, y);
      if (rot) targetCtx.rotate(rot);
      targetCtx.drawImage(img, -w * ax, -h * ay, w, h);
      targetCtx.restore();
    }

    function previewEyeWorld(lx, ly, dir, cx, cy) {
      const rot = dir - Math.PI / 2;
      return {
        x: cx + lx * Math.cos(rot) - ly * Math.sin(rot),
        y: cy + lx * Math.sin(rot) + ly * Math.cos(rot)
      };
    }

    function drawLaserCalibPreview() {
      if (!laserCalibCtx || !laserCalibCanvas) return;
      const w = laserCalibCanvas.width;
      const h = laserCalibCanvas.height;
      const cx = w * 0.5;
      const cy = h * 0.52;
      laserCalibCtx.clearRect(0, 0, w, h);
      laserCalibCtx.fillStyle = "#060e18";
      laserCalibCtx.fillRect(0, 0, w, h);

      const key = laserCalibDraftKey;
      const img = sprites[key];
      if (!spriteUsable(img)) {
        laserCalibCtx.fillStyle = "#8dc9e8";
        laserCalibCtx.font = "14px sans-serif";
        laserCalibCtx.textAlign = "center";
        laserCalibCtx.fillText("Carregando sprite...", cx, cy);
        return;
      }

      const dirDeg = laserCalibDir ? Number(laserCalibDir.value) : 135;
      const dir = (dirDeg * Math.PI) / 180;
      const previewZoom = 1.35;
      const frameScale = getSuperEyeFrameScaleForKey(key);
      const scale = (spriteScale[key] || 1) * frameScale * previewZoom;
      drawSpriteOnCtx(laserCalibCtx, img, cx, cy, dir - Math.PI / 2, scale, PLAYER_SPRITE_ANCHOR);

      const entry = ensureLaserCalibration()[key];
      const left = previewEyeWorld(entry.left.lx * frameScale * previewZoom, entry.left.ly * frameScale * previewZoom, dir, cx, cy);
      const right = previewEyeWorld(entry.right.lx * frameScale * previewZoom, entry.right.ly * frameScale * previewZoom, dir, cx, cy);
      const endLx = left.x + Math.cos(dir) * 120;
      const endLy = left.y + Math.sin(dir) * 120;
      const endRx = right.x + Math.cos(dir) * 120;
      const endRy = right.y + Math.sin(dir) * 120;

      laserCalibCtx.save();
      laserCalibCtx.globalCompositeOperation = "lighter";
      laserCalibCtx.lineCap = "round";
      laserCalibCtx.strokeStyle = "rgba(255,40,40,0.85)";
      laserCalibCtx.lineWidth = 2.4;
      laserCalibCtx.beginPath();
      laserCalibCtx.moveTo(left.x, left.y);
      laserCalibCtx.lineTo(endLx, endLy);
      laserCalibCtx.moveTo(right.x, right.y);
      laserCalibCtx.lineTo(endRx, endRy);
      laserCalibCtx.stroke();
      for (const eye of [left, right]) {
        const glow = laserCalibCtx.createRadialGradient(eye.x, eye.y, 0, eye.x, eye.y, 10);
        glow.addColorStop(0, "rgba(255,60,60,0.95)");
        glow.addColorStop(1, "rgba(255,40,40,0)");
        laserCalibCtx.fillStyle = glow;
        laserCalibCtx.beginPath();
        laserCalibCtx.arc(eye.x, eye.y, 10, 0, Math.PI * 2);
        laserCalibCtx.fill();
        laserCalibCtx.fillStyle = "#fff";
        laserCalibCtx.beginPath();
        laserCalibCtx.arc(eye.x, eye.y, 2.2, 0, Math.PI * 2);
        laserCalibCtx.fill();
      }
      laserCalibCtx.restore();
    }

    function stopLaserCalibPreview() {
      if (laserCalibAnimId) cancelAnimationFrame(laserCalibAnimId);
      laserCalibAnimId = 0;
    }

    function startLaserCalibPreview() {
      stopLaserCalibPreview();
      function tick() {
        if (!isLaserCalibOpen()) {
          stopLaserCalibPreview();
          return;
        }
        drawLaserCalibPreview();
        laserCalibAnimId = requestAnimationFrame(tick);
      }
      laserCalibAnimId = requestAnimationFrame(tick);
    }

    function openLaserCalib() {
      if (!laserCalibModal || !isDevToolsEnabled()) return;
      ensureLaserCalibration();
      const sel = laserCalibSelectionFromKey(laserCalibDraftKey || "homelander");
      if (laserCalibCharacter) laserCalibCharacter.value = sel.character;
      if (laserCalibPose) laserCalibPose.value = sel.pose;
      syncLaserCalibSlidersFromKey(laserCalibKeyForSelection(sel.character, sel.pose));
      laserCalibModal.classList.remove("hidden");
      laserCalibModal.setAttribute("aria-hidden", "false");
      startLaserCalibPreview();
      sfxClick();
    }

    function closeLaserCalib(saveBeforeClose) {
      if (!laserCalibModal) return;
      if (saveBeforeClose) {
        applyLaserCalibSlidersToKey(laserCalibDraftKey);
        saveSettings();
      }
      laserCalibModal.classList.add("hidden");
      laserCalibModal.setAttribute("aria-hidden", "true");
      stopLaserCalibPreview();
      sfxClick();
    }

    function onLaserCalibSelectionChanged() {
      applyLaserCalibSlidersToKey(laserCalibDraftKey);
      const character = laserCalibCharacter ? laserCalibCharacter.value : "homelander";
      const pose = laserCalibPose ? laserCalibPose.value : "stand";
      syncLaserCalibSlidersFromKey(laserCalibKeyForSelection(character, pose));
      drawLaserCalibPreview();
    }

    function resetLaserCalibCurrent() {
      const key = laserCalibDraftKey;
      const defaults = cloneSuperEyeDefaults()[key];
      if (!defaults || !key) return;
      ensureLaserCalibration()[key] = {
        left: { lx: defaults.left.lx, ly: defaults.left.ly },
        right: { lx: defaults.right.lx, ly: defaults.right.ly }
      };
      syncLaserCalibSlidersFromKey(key);
      drawLaserCalibPreview();
    }

    function mirrorLaserCalibEyes() {
      const key = laserCalibDraftKey;
      const entry = ensureLaserCalibration()[key];
      if (!entry) return;
      entry.right.lx = -entry.left.lx;
      entry.right.ly = entry.left.ly;
      syncLaserCalibSlidersFromKey(key);
      drawLaserCalibPreview();
    }

    async function copyLaserCalibExport() {
      const text = buildLaserCalibExportText();
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
          setHint("Valores de laser copiados.", 1.2);
          return;
        }
      } catch (_) {
        // fallback abaixo
      }
      if (laserCalibExport) {
        laserCalibExport.focus();
        laserCalibExport.select();
        document.execCommand("copy");
        setHint("Valores de laser copiados.", 1.2);
      }
    }

    function resolveSeedForRun() {
      const fixedSeed = normalizeFixedSeed(seedInput.value) || normalizeFixedSeed(settings.preferredSeed);
      const seed = fixedSeed || makeRandomSeed();
      settings.preferredSeed = fixedSeed;
      seedInput.value = fixedSeed;
      saveSettings();
      return seed;
    }

    function resetRunData() {
      run.level = 1;
      run.difficultyMode = isDifficultyMode(settings.difficultyMode) ? settings.difficultyMode : "operation";
      run.lives = getStartingLives();
      run.score = 0;
      run.cleared = 0;
      run.detected = 0;
      run.levelStartMs = performance.now();
      run.levelFreezeSec = 0;
      run.scoreRecorded = false;
      run.grenadeLauncherLevel = 0;
      run.grenadeLauncherCollected = false;
      run.levelKnifeOnly = false;
      run.levelNemesisDefeated = false;
      run.levelStartDetections = 0;
      run.active = true;
      run.survivorKills = 0;
      run.survivorXpTotal = 0;
      player.milk = 0;
      player.rage = 0;
      player.berserkT = 0;
      player.maxHealth = isSuperCharacter() ? HOMELANDER_MAX_HEALTH : OPERATIVE_MAX_HEALTH;
      player.health = player.maxHealth;
      resetSurvivalState();
    }

    const FACILITY_ROOM_CATALOG = [
      { id: "office", weight: 4, minW: 9, minH: 8 },
      { id: "break_room", weight: 2, minW: 8, minH: 7 },
      { id: "storage", weight: 2, minW: 8, minH: 7 },
      { id: "bathroom", weight: 1, minW: 7, minH: 7 },
      { id: "server", weight: 1, minW: 8, minH: 7 },
      { id: "security", weight: 1, minW: 8, minH: 7 },
      { id: "archive", weight: 1, minW: 9, minH: 8 }
    ];
    const FACILITY_MIN_LEAF_W = 17;
    const FACILITY_MIN_LEAF_H = 14;
    const FACILITY_SPLIT_PAD = 4;

    function pickFacilityRoomType(levelNo) {
      const pool = FACILITY_ROOM_CATALOG.slice();
      if (levelNo >= 4) pool.push({ id: "lab", weight: 1, minW: 9, minH: 8 });
      let total = 0;
      for (const t of pool) total += t.weight;
      let roll = rand() * total;
      for (const t of pool) {
        roll -= t.weight;
        if (roll <= 0) return t;
      }
      return pool[0];
    }

    function roomInteriorBounds(room) {
      return {
        ix: room.x + 1,
        iy: room.y + 1,
        iw: Math.max(1, room.w - 2),
        ih: Math.max(1, room.h - 2)
      };
    }

    function isInsideRoomInterior(x, y, room) {
      const b = roomInteriorBounds(room);
      return x >= b.ix && x < b.ix + b.iw && y >= b.iy && y < b.iy + b.ih;
    }

    function isInsideAnyRoomInterior(x, y, rooms) {
      for (const room of rooms) {
        if (isInsideRoomInterior(x, y, room)) return true;
      }
      return false;
    }

    function forEachRoomPerimeter(room, fn) {
      for (let xx = room.x; xx < room.x + room.w; xx++) {
        fn(xx, room.y);
        fn(xx, room.y + room.h - 1);
      }
      for (let yy = room.y + 1; yy < room.y + room.h - 1; yy++) {
        fn(room.x, yy);
        fn(room.x + room.w - 1, yy);
      }
    }

    function carveRoomShell(g, room) {
      const b = roomInteriorBounds(room);
      for (let yy = b.iy; yy < b.iy + b.ih; yy++) {
        for (let xx = b.ix; xx < b.ix + b.iw; xx++) {
          g[yy][xx] = CELL_FLOOR;
        }
      }
      forEachRoomPerimeter(room, (xx, yy) => {
        g[yy][xx] = CELL_WALL;
      });
    }

    function doorAlongRange(room, side) {
      if (side === "east" || side === "west") {
        return { min: room.y + 1, max: room.y + room.h - 1 - DOOR_WIDTH };
      }
      return { min: room.x + 1, max: room.x + room.w - 1 - DOOR_WIDTH };
    }

    function registerFacilityDoor(g, room, side, along, essential) {
      const range = doorAlongRange(room, side);
      const pos = clamp(along, range.min, range.max);
      let x = room.x;
      let y = room.y;
      let orient = "h";
      if (side === "east") {
        x = room.x + room.w - 1;
        y = pos;
        orient = "v";
      } else if (side === "west") {
        x = room.x;
        y = pos;
        orient = "v";
      } else if (side === "south") {
        x = pos;
        y = room.y + room.h - 1;
        orient = "h";
      } else {
        x = pos;
        y = room.y;
        orient = "h";
      }
      for (const t of doorTileCoords({ x, y, orient, width: DOOR_WIDTH })) {
        g[t.y][t.x] = CELL_DOOR_CLOSED;
      }
      const door = {
        x,
        y,
        orient,
        width: DOOR_WIDTH,
        open: false,
        broken: false,
        hp: 3.2 + rand() * 1.6,
        essential: !!essential,
        roomType: room.type || "office"
      };
      levelDoors.push(door);
      if (!Array.isArray(room.doors)) room.doors = [];
      room.doors.push(door);
      if (!room.door) room.door = door;
      room.doorSide = side;
      return door;
    }

    function roomDoorTileSet(room) {
      const set = new Set();
      const doors = Array.isArray(room.doors) && room.doors.length
        ? room.doors
        : (room.door ? [room.door] : []);
      for (const door of doors) {
        for (const t of doorTileCoords(door)) {
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              set.add((t.x + dx) + "," + (t.y + dy));
            }
          }
        }
      }
      return set;
    }

    function overlapDoorRange(roomA, sideA, roomB, sideB) {
      const a = doorAlongRange(roomA, sideA);
      const b = doorAlongRange(roomB, sideB);
      const min = Math.max(a.min, b.min);
      const max = Math.min(a.max, b.max);
      if (min > max) return null;
      return { min, max };
    }

    function doorAnchorCell(room, side, along) {
      if (side === "east") return { x: room.x + room.w - 1, y: along + 1 };
      if (side === "west") return { x: room.x, y: along + 1 };
      if (side === "south") return { x: along + 1, y: room.y + room.h - 1 };
      return { x: along + 1, y: room.y };
    }

    function carveCorridorStripe(g, x, y, rooms, doorTiles) {
      const key = x + "," + y;
      if (!inBounds(x, y) || doorTiles.has(key)) return;
      if (getDoorAtCell(x, y)) return;
      if (isInsideAnyRoomInterior(x, y, rooms)) return;
      g[y][x] = CELL_FLOOR;
    }

    function carveThickCorridorCell(g, cx, cy, rooms, doorTiles) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          carveCorridorStripe(g, cx + dx, cy + dy, rooms, doorTiles);
        }
      }
    }

    function carveCorridorBetweenRooms(g, roomA, sideA, roomB, sideB, rooms, essential) {
      const rangeA = doorAlongRange(roomA, sideA);
      const rangeB = doorAlongRange(roomB, sideB);
      if (rangeA.max < rangeA.min || rangeB.max < rangeB.min) return false;

      const overlap = overlapDoorRange(roomA, sideA, roomB, sideB);
      const alongA = overlap ? randInt(overlap.min, overlap.max) : randInt(rangeA.min, rangeA.max);
      const alongB = overlap ? alongA : randInt(rangeB.min, rangeB.max);

      registerFacilityDoor(g, roomA, sideA, alongA, essential);
      registerFacilityDoor(g, roomB, sideB, alongB, essential);

      const doorTiles = new Set();
      for (const d of [roomA.door, roomB.door]) {
        for (const t of doorTileCoords(d)) doorTiles.add(t.x + "," + t.y);
      }

      const start = doorAnchorCell(roomA, sideA, alongA);
      const end = doorAnchorCell(roomB, sideB, alongB);
      let cx = start.x;
      let cy = start.y;
      carveThickCorridorCell(g, cx, cy, rooms, doorTiles);

      const stepX = cx < end.x ? 1 : (cx > end.x ? -1 : 0);
      const stepY = cy < end.y ? 1 : (cy > end.y ? -1 : 0);
      while (cx !== end.x || cy !== end.y) {
        if (cx !== end.x) cx += stepX;
        else if (cy !== end.y) cy += stepY;
        carveThickCorridorCell(g, cx, cy, rooms, doorTiles);
      }
      if (!Array.isArray(roomA.links)) roomA.links = [];
      if (!Array.isArray(roomB.links)) roomB.links = [];
      if (!roomA.links.includes(roomB)) roomA.links.push(roomB);
      if (!roomB.links.includes(roomA)) roomB.links.push(roomA);
      return true;
    }

    function splitBSPNode(node, depth, maxDepth) {
      const canSplitVert = node.w >= FACILITY_MIN_LEAF_W * 2 + FACILITY_SPLIT_PAD;
      const canSplitHorz = node.h >= FACILITY_MIN_LEAF_H * 2 + FACILITY_SPLIT_PAD;
      if (depth >= maxDepth || (!canSplitVert && !canSplitHorz)) {
        node.leaf = true;
        return;
      }
      let splitVert = node.w > node.h * 1.08 ? true : (node.h > node.w * 1.08 ? false : rand() < 0.5);
      if (splitVert && !canSplitVert) splitVert = false;
      if (!splitVert && !canSplitHorz) splitVert = true;
      if (splitVert) {
        const splitMin = Math.max(node.x + FACILITY_MIN_LEAF_W, node.x + Math.floor(node.w * 0.36));
        const splitMax = Math.min(node.x + node.w - FACILITY_MIN_LEAF_W, node.x + Math.floor(node.w * 0.64));
        if (splitMax <= splitMin) {
          node.leaf = true;
          return;
        }
        const splitX = randInt(splitMin, splitMax);
        node.splitVert = true;
        node.splitPos = splitX;
        node.left = { x: node.x, y: node.y, w: splitX - node.x, h: node.h };
        node.right = { x: splitX, y: node.y, w: node.x + node.w - splitX, h: node.h };
      } else {
        const splitMin = Math.max(node.y + FACILITY_MIN_LEAF_H, node.y + Math.floor(node.h * 0.36));
        const splitMax = Math.min(node.y + node.h - FACILITY_MIN_LEAF_H, node.y + Math.floor(node.h * 0.64));
        if (splitMax <= splitMin) {
          node.leaf = true;
          return;
        }
        const splitY = randInt(splitMin, splitMax);
        node.splitVert = false;
        node.splitPos = splitY;
        node.left = { x: node.x, y: node.y, w: node.w, h: splitY - node.y };
        node.right = { x: node.x, y: splitY, w: node.w, h: node.y + node.h - splitY };
      }
      splitBSPNode(node.left, depth + 1, maxDepth);
      splitBSPNode(node.right, depth + 1, maxDepth);
    }

    function createRoomInLeaf(node, levelNo) {
      const typeDef = pickFacilityRoomType(levelNo);
      const margin = randInt(1, 2);
      const maxW = node.w - margin * 2;
      const maxH = node.h - margin * 2;
      if (maxW < typeDef.minW || maxH < typeDef.minH) return null;
      const minW = Math.min(maxW, Math.max(typeDef.minW, Math.floor(maxW * 0.76)));
      const minH = Math.min(maxH, Math.max(typeDef.minH, Math.floor(maxH * 0.76)));
      const w = randInt(minW, maxW);
      const h = randInt(minH, maxH);
      const ox = randInt(0, Math.max(0, maxW - w));
      const oy = randInt(0, Math.max(0, maxH - h));
      const room = {
        x: node.x + margin + ox,
        y: node.y + margin + oy,
        w,
        h,
        type: typeDef.id,
        cx: Math.floor(node.x + margin + ox + w / 2),
        cy: Math.floor(node.y + margin + oy + h / 2),
        doors: [],
        links: []
      };
      return room;
    }

    function rangeOverlapLen(a0, a1, b0, b1) {
      return Math.max(0, Math.min(a1, b1) - Math.max(a0, b0));
    }

    function roomGap(a, b, horizontal) {
      if (horizontal) {
        if (a.x + a.w < b.x) return b.x - (a.x + a.w);
        if (b.x + b.w < a.x) return a.x - (b.x + b.w);
        return 0;
      }
      if (a.y + a.h < b.y) return b.y - (a.y + a.h);
      if (b.y + b.h < a.y) return a.y - (b.y + b.h);
      return 0;
    }

    function chooseRoomsForSplitConnection(leftRooms, rightRooms, splitVert) {
      let best = null;
      let bestScore = Infinity;
      for (const a of leftRooms) {
        for (const b of rightRooms) {
          const overlap = splitVert
            ? rangeOverlapLen(a.y + 1, a.y + a.h - 1, b.y + 1, b.y + b.h - 1)
            : rangeOverlapLen(a.x + 1, a.x + a.w - 1, b.x + 1, b.x + b.w - 1);
          const perpendicular = splitVert ? Math.abs(a.cy - b.cy) : Math.abs(a.cx - b.cx);
          const gap = splitVert ? roomGap(a, b, true) : roomGap(a, b, false);
          const centerDist = dist(a.cx, a.cy, b.cx, b.cy);
          const score = perpendicular * 2.4 + gap * 0.7 + centerDist * 0.08 - overlap * 1.8 + rand() * 3;
          if (score < bestScore) {
            bestScore = score;
            best = { a, b };
          }
        }
      }
      return best;
    }

    function pickRepresentativeRoomForNode(node, rooms) {
      const cx = node.x + node.w * 0.5;
      const cy = node.y + node.h * 0.5;
      let best = rooms[0] || null;
      let bestScore = Infinity;
      for (const room of rooms) {
        const area = room.w * room.h;
        const score = dist(room.cx, room.cy, cx, cy) - area * 0.02 + rand() * 2;
        if (score < bestScore) {
          bestScore = score;
          best = room;
        }
      }
      return best;
    }

    function buildBSPRooms(node, g, rooms, levelNo) {
      if (node.leaf) {
        const room = createRoomInLeaf(node, levelNo);
        if (!room) return false;
        node.room = room;
        node.rooms = [room];
        rooms.push(room);
        carveRoomShell(g, room);
        return true;
      }
      if (!buildBSPRooms(node.left, g, rooms, levelNo)) return false;
      if (!buildBSPRooms(node.right, g, rooms, levelNo)) return false;

      const leftRooms = node.left.rooms || (node.left.room ? [node.left.room] : []);
      const rightRooms = node.right.rooms || (node.right.room ? [node.right.room] : []);
      const pair = chooseRoomsForSplitConnection(leftRooms, rightRooms, node.splitVert);
      if (!pair) return false;
      const a = pair.a;
      const b = pair.b;

      if (node.splitVert) {
        const sideA = a.cx < b.cx ? "east" : "west";
        const sideB = sideA === "east" ? "west" : "east";
        if (!carveCorridorBetweenRooms(g, a, sideA, b, sideB, rooms, true)) return false;
      } else {
        const sideA = a.cy < b.cy ? "south" : "north";
        const sideB = sideA === "south" ? "north" : "south";
        if (!carveCorridorBetweenRooms(g, a, sideA, b, sideB, rooms, true)) return false;
      }
      node.rooms = leftRooms.concat(rightRooms);
      node.room = pickRepresentativeRoomForNode(node, node.rooms);
      return true;
    }

    function roomConnectionExists(a, b) {
      return Array.isArray(a.links) && a.links.includes(b);
    }

    function connectFacilityRooms(g, a, b, rooms, essential, axis = "") {
      const horizontal = axis === "h" || (!axis && Math.abs(a.cx - b.cx) >= Math.abs(a.cy - b.cy));
      if (horizontal) {
        const sideA = a.cx < b.cx ? "east" : "west";
        const sideB = sideA === "east" ? "west" : "east";
        return carveCorridorBetweenRooms(g, a, sideA, b, sideB, rooms, essential);
      }
      const sideA = a.cy < b.cy ? "south" : "north";
      const sideB = sideA === "south" ? "north" : "south";
      return carveCorridorBetweenRooms(g, a, sideA, b, sideB, rooms, essential);
    }

    function addFacilityCrossLinks(g, rooms, levelNo) {
      const candidates = [];
      for (let i = 0; i < rooms.length; i++) {
        for (let j = i + 1; j < rooms.length; j++) {
          const a = rooms[i];
          const b = rooms[j];
          if (roomConnectionExists(a, b)) continue;

          const yOverlap = rangeOverlapLen(a.y + 1, a.y + a.h - 1, b.y + 1, b.y + b.h - 1);
          const xOverlap = rangeOverlapLen(a.x + 1, a.x + a.w - 1, b.x + 1, b.x + b.w - 1);
          const xGap = roomGap(a, b, true);
          const yGap = roomGap(a, b, false);
          const centerDist = dist(a.cx, a.cy, b.cx, b.cy);
          let axis = "";
          let score = Infinity;

          if (yOverlap >= DOOR_WIDTH && xGap <= 18) {
            axis = "h";
            score = xGap * 2.2 - yOverlap * 1.5 + Math.abs(a.cy - b.cy) * 0.35 + rand() * 6;
          }
          if (xOverlap >= DOOR_WIDTH && yGap <= 14) {
            const verticalScore = yGap * 2.2 - xOverlap * 1.5 + Math.abs(a.cx - b.cx) * 0.35 + rand() * 6;
            if (verticalScore < score) {
              axis = "v";
              score = verticalScore;
            }
          }
          if (!axis && centerDist <= 24 && (xGap <= 12 || yGap <= 10)) {
            axis = Math.abs(a.cx - b.cx) >= Math.abs(a.cy - b.cy) ? "h" : "v";
            score = centerDist + rand() * 8;
          }
          if (!axis) continue;
          candidates.push({ a, b, axis, score });
        }
      }

      candidates.sort((a, b) => a.score - b.score);
      const target = clamp(Math.floor(rooms.length * 0.38) + Math.floor(levelNo / 6), 2, 9);
      let added = 0;
      for (const c of candidates) {
        if (added >= target) break;
        if (roomConnectionExists(c.a, c.b)) continue;
        if (connectFacilityRooms(g, c.a, c.b, rooms, false, c.axis)) added += 1;
      }
    }

    function furnishFacilityRoom(g, room, blocked) {
      const b = roomInteriorBounds(room);
      const layouts = {
        office: [
          { kind: "desk", rx: 0.22, ry: 0.28, blocks: true },
          { kind: "desk", rx: 0.58, ry: 0.28, blocks: true },
          { kind: "chair", rx: 0.4, ry: 0.55, blocks: false },
          { kind: "chair", rx: 0.72, ry: 0.55, blocks: false },
          { kind: "cabinet", rx: 0.18, ry: 0.72, blocks: true }
        ],
        break_room: [
          { kind: "desk", rx: 0.35, ry: 0.38, blocks: true },
          { kind: "chair", rx: 0.22, ry: 0.62, blocks: false },
          { kind: "chair", rx: 0.55, ry: 0.62, blocks: false },
          { kind: "crate", rx: 0.78, ry: 0.35, blocks: false }
        ],
        storage: [
          { kind: "crate", rx: 0.22, ry: 0.3, blocks: true },
          { kind: "crate", rx: 0.5, ry: 0.3, blocks: true },
          { kind: "barrel", rx: 0.75, ry: 0.32, blocks: true },
          { kind: "shelf", rx: 0.35, ry: 0.68, blocks: true }
        ],
        bathroom: [
          { kind: "sink", rx: 0.25, ry: 0.28, blocks: true },
          { kind: "toilet", rx: 0.62, ry: 0.3, blocks: true },
          { kind: "locker", rx: 0.25, ry: 0.68, blocks: true },
          { kind: "locker", rx: 0.62, ry: 0.68, blocks: true }
        ],
        server: [
          { kind: "cabinet", rx: 0.2, ry: 0.28, blocks: true },
          { kind: "cabinet", rx: 0.5, ry: 0.28, blocks: true },
          { kind: "shelf", rx: 0.75, ry: 0.3, blocks: true },
          { kind: "desk", rx: 0.38, ry: 0.68, blocks: true }
        ],
        security: [
          { kind: "desk", rx: 0.32, ry: 0.35, blocks: true },
          { kind: "chair", rx: 0.32, ry: 0.58, blocks: false },
          { kind: "locker", rx: 0.68, ry: 0.35, blocks: true },
          { kind: "cabinet", rx: 0.68, ry: 0.68, blocks: true }
        ],
        archive: [
          { kind: "shelf", rx: 0.2, ry: 0.3, blocks: true },
          { kind: "shelf", rx: 0.5, ry: 0.3, blocks: true },
          { kind: "shelf", rx: 0.8, ry: 0.3, blocks: true },
          { kind: "desk", rx: 0.38, ry: 0.7, blocks: true }
        ],
        lab: [
          { kind: "desk", rx: 0.28, ry: 0.32, blocks: true },
          { kind: "barrel", rx: 0.62, ry: 0.32, blocks: true },
          { kind: "cabinet", rx: 0.28, ry: 0.68, blocks: true },
          { kind: "cabinet", rx: 0.62, ry: 0.68, blocks: true }
        ]
      };
      const plan = layouts[room.type] || layouts.office;
      const doorSet = roomDoorTileSet(room);

      for (const item of plan) {
        const cx = b.ix + Math.floor(item.rx * Math.max(1, b.iw - 1));
        const cy = b.iy + Math.floor(item.ry * Math.max(1, b.ih - 1));
        const key = cx + "," + cy;
        if (!isWalkable(g, cx, cy) || blocked.has(key) || doorSet.has(key)) continue;
        if (getDoorAtCell(cx, cy)) continue;

        let tooClose = false;
        for (const p of mapProps) {
          if (dist((cx + 0.5) * TILE, (cy + 0.5) * TILE, p.x, p.y) < TILE * 2) {
            tooClose = true;
            break;
          }
        }
        if (tooClose) continue;

        const hasLoot = rand() < (room.type === "storage" ? 0.35 : 0.14);
        mapProps.push({
          x: (cx + 0.5) * TILE,
          y: (cy + 0.5) * TILE,
          kind: item.kind,
          blocks: !!item.blocks,
          r: item.kind === "desk" ? 9 : (item.kind === "locker" || item.kind === "cabinet" ? 8 : 7),
          searched: false,
          loot: hasLoot ? "ammo" : null,
          roomType: room.type
        });
        blocked.add(key);
      }
    }

    function furnishFacilityRooms(g, rooms, routePoints, levelNo) {
      const blocked = collectCriticalRouteCells(g, routePoints);
      for (const door of levelDoors) {
        for (const t of doorTileCoords(door)) blocked.add(t.x + "," + t.y);
      }
      for (const room of rooms) {
        furnishFacilityRoom(g, room, blocked);
      }
      const extraTarget = isSurvivalRun()
        ? clamp(Math.floor(rooms.length * 0.2) + 1, 2, 5)
        : clamp(Math.floor(rooms.length * 0.65) + Math.floor(levelNo / 4), 3, 14);
      let added = 0;
      for (let n = 0; n < extraTarget * 8 && added < extraTarget; n++) {
        const room = pick(rooms);
        if (!room) break;
        const b = roomInteriorBounds(room);
        const cx = randInt(b.ix, b.ix + b.iw - 1);
        const cy = randInt(b.iy, b.iy + b.ih - 1);
        const key = cx + "," + cy;
        if (!isWalkable(g, cx, cy) || blocked.has(key) || getDoorAtCell(cx, cy)) continue;
        const kind = pick(["chair", "crate", "barrel"]);
        mapProps.push({
          x: (cx + 0.5) * TILE,
          y: (cy + 0.5) * TILE,
          kind,
          blocks: kind !== "chair" && rand() < 0.3,
          r: 7,
          searched: false,
          loot: rand() < 0.1 ? "ammo" : null,
          roomType: room.type
        });
        blocked.add(key);
        added += 1;
      }
    }

    function generateStructuredFacility(levelNo, opts = {}) {
      const g = makeGrid(CELL_WALL);
      const rooms = [];
      levelDoors.length = 0;
      mapProps.length = 0;

      const root = { x: 1, y: 1, w: W - 2, h: H - 2 };
      const superLayout = isSurvivalRun() ? (((run.superMapVariant || 0) + levelNo * 13) % 4) : 0;
      // Modos super: profundidade e densidade variam a cada nova run.
      const maxDepth = isSurvivalRun()
        ? clamp(2 + (superLayout % 3) + Math.floor(levelNo / 9), 2, 5)
        : clamp(3 + Math.floor(levelNo / 5), 3, 4);
      splitBSPNode(root, 0, maxDepth);
      if (!buildBSPRooms(root, g, rooms, levelNo)) return null;
      if (rooms.length < (isSurvivalRun() ? 4 : 6)) return null;
      if (isSurvivalRun()) {
        if (superLayout !== 1 || rand() < 0.42) addFacilityCrossLinks(g, rooms, levelNo);
      } else {
        addFacilityCrossLinks(g, rooms, levelNo);
      }

      enforceBorder(g);

      const startRoom = pickStartRoom(rooms);
      if (!startRoom) return null;
      const exitRoom = pickFarthestRoom(rooms, startRoom);
      if (!exitRoom || exitRoom === startRoom) return null;
      const itemRoom = pickObjectiveRoom(rooms, startRoom, exitRoom);
      if (!itemRoom) return null;

      const startCell = randomCellInRoom(startRoom, g);
      const itemCell = randomCellInRoom(itemRoom, g);
      const exitCell = randomCellInRoom(exitRoom, g);
      if (!startCell || !itemCell || !exitCell) return null;

      if (!withAllDoorsOpen(g, () => pathExists(g, startCell, itemCell))) return null;
      if (!withAllDoorsOpen(g, () => pathExists(g, itemCell, exitCell))) return null;

      const objectiveCells = buildCampaignObjectiveCells(levelNo, rooms, startRoom, itemRoom, exitRoom, g);
      if (objectiveCells.length === 0) return null;

      let pathOk = true;
      for (const cell of objectiveCells) {
        if (!withAllDoorsOpen(g, () => pathExists(g, startCell, cell)) ||
            !withAllDoorsOpen(g, () => pathExists(g, cell, exitCell))) {
          pathOk = false;
          break;
        }
      }
      if (!pathOk) return null;

      const doorOpenState = levelDoors.map((d) => d.open);
      for (const d of levelDoors) {
        d.open = true;
        setDoorGridCells(d, g, CELL_DOOR_OPEN);
      }
      if (!pathExists(g, startCell, exitCell)) return null;
      for (let di = 0; di < levelDoors.length; di++) {
        const d = levelDoors[di];
        d.open = doorOpenState[di];
        setDoorGridCells(d, g, d.open ? CELL_DOOR_OPEN : CELL_DOOR_CLOSED);
      }

      const tints = Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          if (g[y][x] !== CELL_FLOOR && g[y][x] !== CELL_DOOR_OPEN) return 0;
          const room = rooms.find((r) => isInsideRoomInterior(x, y, r));
          if (room && room.type === "bathroom") return 0.86 + rand() * 0.12;
          if (room && room.type === "server") return 0.72 + rand() * 0.16;
          return 0.78 + rand() * 0.28;
        })
      );

      const routePoints = [startCell].concat(objectiveCells, [itemCell, exitCell]);
      furnishFacilityRooms(g, rooms, routePoints, levelNo);

      const levelData = {
        g,
        tints,
        startCell,
        itemCell,
        exitCell,
        objectiveCells,
        routePoints
      };
      buildLootCachesForLevel(levelData, levelNo, collectCriticalRouteCells(g, routePoints));

      const seeds = guardSeedsForLevel(rooms, startRoom, itemRoom, exitRoom, levelNo, g, routePoints);
      if (seeds.length === 0) return null;

      return Object.assign(levelData, {
        seeds,
        doors: levelDoors.map((d) => Object.assign({}, d)),
        props: mapProps.map((p) => Object.assign({}, p))
      });
    }

    function enforceBorder(g) {
      for (let x = 0; x < W; x++) {
        g[0][x] = 1;
        g[H - 1][x] = 1;
      }
      for (let y = 0; y < H; y++) {
        g[y][0] = 1;
        g[y][W - 1] = 1;
      }
    }

    function carveRect(g, x, y, w, h) {
      for (let yy = y; yy < y + h; yy++) {
        for (let xx = x; xx < x + w; xx++) {
          if (inBounds(xx, yy)) g[yy][xx] = 0;
        }
      }
    }

    function carveH(g, x0, x1, y) {
      const a = Math.min(x0, x1);
      const b = Math.max(x0, x1);
      for (let x = a; x <= b; x++) {
        for (let dy = -2; dy <= 1; dy++) {
          const yy = y + dy;
          if (inBounds(x, yy)) g[yy][x] = CELL_FLOOR;
        }
      }
    }

    function carveV(g, y0, y1, x) {
      const a = Math.min(y0, y1);
      const b = Math.max(y0, y1);
      for (let y = a; y <= b; y++) {
        for (let dx = -2; dx <= 1; dx++) {
          const xx = x + dx;
          if (inBounds(xx, y)) g[y][xx] = CELL_FLOOR;
        }
      }
    }

    function widenTightCorridors(g, protectedCells = null) {
      const prot = protectedCells || new Set();
      for (let y = 1; y < H - 1; y++) {
        for (let x = 1; x < W - 1; x++) {
          if (prot.has(x + "," + y)) continue;
          if (g[y][x] !== CELL_WALL) continue;
          const left = isWalkableCell(g[y][x - 1]);
          const right = isWalkableCell(g[y][x + 1]);
          const up = isWalkableCell(g[y - 1][x]);
          const down = isWalkableCell(g[y + 1][x]);
          if (left && right && !up && !down) g[y][x] = CELL_FLOOR;
          else if (up && down && !left && !right) g[y][x] = CELL_FLOOR;
        }
      }
    }

    function getWalkableCardinalNeighbors(g, x, y) {
      const out = [];
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (const d of dirs) {
        const nx = x + d[0];
        const ny = y + d[1];
        if (isWalkable(g, nx, ny)) out.push({ x: nx, y: ny });
      }
      return out;
    }

    function isArticulationBridge(g, x, y) {
      if (!isWalkable(g, x, y)) return false;
      const nbs = getWalkableCardinalNeighbors(g, x, y);
      if (nbs.length !== 2) return false;

      const seen = new Set();
      const q = [nbs[0]];
      seen.add(nbs[0].x + "," + nbs[0].y);
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      while (q.length) {
        const c = q.shift();
        if (c.x === nbs[1].x && c.y === nbs[1].y) return false;
        for (const d of dirs) {
          const nx = c.x + d[0];
          const ny = c.y + d[1];
          if (nx === x && ny === y) continue;
          if (!isWalkable(g, nx, ny)) continue;
          const key = nx + "," + ny;
          if (seen.has(key)) continue;
          seen.add(key);
          q.push({ x: nx, y: ny });
        }
      }
      return true;
    }

    function detectDoorOrient(g, x, y) {
      const nbs = getWalkableCardinalNeighbors(g, x, y);
      if (nbs.length === 2) {
        if (nbs[0].x === nbs[1].x) return "v";
        if (nbs[0].y === nbs[1].y) return "h";
      }
      const left = inBounds(x - 1, y) && isWalkableCell(g[y][x - 1]);
      const right = inBounds(x + 1, y) && isWalkableCell(g[y][x + 1]);
      const up = inBounds(x, y - 1) && isWalkableCell(g[y - 1][x]);
      const down = inBounds(x, y + 1) && isWalkableCell(g[y + 1][x]);
      if (left && right) return "h";
      if (up && down) return "v";
      return "h";
    }

    function carveDoorFrame(g, x, y) {
      const orient = detectDoorOrient(g, x, y);
      g[y][x] = CELL_DOOR_CLOSED;
      if (orient === "h") {
        if (inBounds(x, y - 1)) g[y - 1][x] = CELL_WALL;
        if (inBounds(x, y + 1)) g[y + 1][x] = CELL_WALL;
      } else {
        if (inBounds(x - 1, y)) g[y][x - 1] = CELL_WALL;
        if (inBounds(x + 1, y)) g[y][x + 1] = CELL_WALL;
      }
      return orient;
    }

    function doorProtectedCells() {
      const prot = new Set();
      for (const door of levelDoors) {
        for (const t of doorTileCoords(door)) {
          prot.add(t.x + "," + t.y);
          if (door.orient === "h") {
            prot.add(t.x + "," + (t.y - 1));
            prot.add(t.x + "," + (t.y + 1));
          } else {
            prot.add((t.x - 1) + "," + t.y);
            prot.add((t.x + 1) + "," + t.y);
          }
        }
      }
      return prot;
    }

    function findBridgeCells(g) {
      const bridges = [];
      for (let y = 2; y < H - 2; y++) {
        for (let x = 2; x < W - 2; x++) {
          if (!isArticulationBridge(g, x, y)) continue;
          bridges.push({ x, y, orient: detectDoorOrient(g, x, y) });
        }
      }
      return bridges;
    }

    function doorTooCloseToOthers(x, y, minManhattan = 6) {
      for (const door of levelDoors) {
        if (Math.abs(door.x - x) + Math.abs(door.y - y) < minManhattan) return true;
      }
      return false;
    }

    function cellInsideRoom(x, y, room) {
      return x >= room.x && x < room.x + room.w && y >= room.y && y < room.y + room.h;
    }

    function canHostDoorFrame(g, x, y) {
      if (!inBounds(x, y) || !isWalkable(g, x, y)) return false;
      if (getDoorAtCell(x, y)) return false;
      const n = getWalkableCardinalNeighbors(g, x, y).length;
      return n >= 2;
    }

    function collectRouteDoorSites(g, routePoints) {
      const sites = [];
      const seen = new Set();
      const chain = Array.isArray(routePoints) ? routePoints : [];
      for (let i = 0; i < chain.length - 1; i++) {
        const seg = shortestPathCells(g, chain[i], chain[i + 1]);
        if (!seg || seg.length < 4) continue;
        const step = Math.max(1, Math.floor(seg.length / 5));
        const picks = [];
        for (let j = 1; j < seg.length - 1; j += step) picks.push(j);
        if (seg.length >= 3) {
          picks.push(Math.floor(seg.length * 0.5));
        }
        for (const rawIdx of picks) {
          const idx = clamp(rawIdx, 1, seg.length - 2);
          const c = seg[idx];
          const key = c.x + "," + c.y;
          if (seen.has(key)) continue;
          if (!canHostDoorFrame(g, c.x, c.y)) continue;
          seen.add(key);
          const bridge = isArticulationBridge(g, c.x, c.y);
          sites.push({ x: c.x, y: c.y, onRoute: true, priority: i * 3 + idx, bridge });
        }
      }
      return sites;
    }

    function sortRouteDoorSites(list) {
      const bridges = [];
      const rest = [];
      for (const site of list) {
        if (site.bridge) bridges.push(site);
        else rest.push(site);
      }
      shuffleDoorSites(bridges);
      shuffleDoorSites(rest);
      return bridges.concat(rest);
    }

    function findRoomEntranceSites(g, rooms) {
      const sites = [];
      const seen = new Set();
      for (const room of rooms) {
        for (let y = room.y; y < room.y + room.h; y++) {
          for (let x = room.x; x < room.x + room.w; x++) {
            if (!isWalkable(g, x, y)) continue;
            const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            for (const d of dirs) {
              const nx = x + d[0];
              const ny = y + d[1];
              if (cellInsideRoom(nx, ny, room)) continue;
              if (!canHostDoorFrame(g, nx, ny)) continue;
              const key = nx + "," + ny;
              if (seen.has(key)) continue;
              seen.add(key);
              sites.push({ x: nx, y: ny, onRoute: false, priority: 100 + sites.length });
            }
          }
        }
      }
      return sites;
    }

    function shuffleDoorSites(list) {
      for (let i = list.length - 1; i > 0; i--) {
        const j = randInt(0, i);
        const tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
      return list;
    }

    function withAllDoorsOpen(g, fn) {
      const doorCountBefore = levelDoors.length;
      const saved = levelDoors.slice(0, doorCountBefore).map((d) => ({
        open: d.open,
        broken: d.broken,
        x: d.x,
        y: d.y
      }));
      for (let i = 0; i < doorCountBefore; i++) {
        const d = levelDoors[i];
        if (d.broken) continue;
        d.open = true;
        setDoorGridCells(d, g, CELL_DOOR_OPEN);
      }
      const result = fn();
      for (let i = 0; i < doorCountBefore; i++) {
        const d = levelDoors[i];
        const s = saved[i];
        d.open = s.open;
        d.broken = s.broken;
        setDoorGridCells(d, g, d.broken ? CELL_DOOR_CLOSED : (d.open ? CELL_DOOR_OPEN : CELL_DOOR_CLOSED));
      }
      return result;
    }

    function tryPlaceDoorAt(g, x, y, essential, startCell, exitCell, opts = {}) {
      const forceRoute = opts.forceRoute === true;
      if (doorTooCloseToOthers(x, y, 5)) return false;
      if (!withAllDoorsOpen(g, () => pathExists(g, startCell, exitCell))) return false;

      const wallKey = x + "," + y;
      const blocksRoute = !withAllDoorsOpen(g, () => pathExists(g, startCell, exitCell, new Set([wallKey])));
      if (forceRoute && !blocksRoute) return false;
      if (essential && !forceRoute && !blocksRoute) return false;

      const orient = carveDoorFrame(g, x, y);
      levelDoors.push({
        x,
        y,
        open: false,
        broken: false,
        hp: 2.8 + rand() * 1.4,
        orient,
        essential: !!(essential || forceRoute || blocksRoute)
      });
      return true;
    }

    function carveCorridor(g, ax, ay, bx, by) {
      if (rand() < 0.5) {
        carveH(g, ax, bx, ay);
        carveV(g, ay, by, bx);
      } else {
        carveV(g, ay, by, ax);
        carveH(g, ax, bx, by);
      }
    }

    function roomsOverlap(a, b, margin) {
      return !(
        a.x + a.w + margin < b.x ||
        b.x + b.w + margin < a.x ||
        a.y + a.h + margin < b.y ||
        b.y + b.h + margin < a.y
      );
    }

    function isWalkable(g, cx, cy) {
      return inBounds(cx, cy) && isWalkableCell(g[cy][cx]);
    }

    function pathExists(g, start, goal, extraWalls = null) {
      const canEnter = (x, y) => {
        if (extraWalls && extraWalls.has(x + "," + y)) return false;
        return isWalkable(g, x, y);
      };
      if (!canEnter(start.x, start.y) || !canEnter(goal.x, goal.y)) return false;

      const seen = Array.from({ length: H }, () => Array(W).fill(false));
      const q = [{ x: start.x, y: start.y }];
      let qi = 0;
      seen[start.y][start.x] = true;

      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      while (qi < q.length) {
        const c = q[qi++];
        if (c.x === goal.x && c.y === goal.y) return true;

        for (const d of dirs) {
          const nx = c.x + d[0];
          const ny = c.y + d[1];
          if (!inBounds(nx, ny) || seen[ny][nx] || !canEnter(nx, ny)) continue;
          seen[ny][nx] = true;
          q.push({ x: nx, y: ny });
        }
      }

      return false;
    }

    function shortestPathCells(g, start, goal, blockFn = null) {
      const canEnter = (x, y) => blockFn ? !blockFn(x, y) : isWalkable(g, x, y);
      if (!canEnter(start.x, start.y) || !canEnter(goal.x, goal.y)) return null;

      const seen = Array.from({ length: H }, () => Array(W).fill(false));
      const parent = Array.from({ length: H }, () => Array(W).fill(null));
      const q = [{ x: start.x, y: start.y }];
      let qi = 0;
      seen[start.y][start.x] = true;

      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      while (qi < q.length) {
        const c = q[qi++];
        if (c.x === goal.x && c.y === goal.y) {
          const out = [];
          let cx = goal.x;
          let cy = goal.y;
          out.push({ x: cx, y: cy });
          while (!(cx === start.x && cy === start.y)) {
            const p = parent[cy][cx];
            if (!p) break;
            cx = p.x;
            cy = p.y;
            out.push({ x: cx, y: cy });
          }
          out.reverse();
          return out;
        }

        for (const d of dirs) {
          const nx = c.x + d[0];
          const ny = c.y + d[1];
          if (!inBounds(nx, ny) || seen[ny][nx] || !canEnter(nx, ny)) continue;
          seen[ny][nx] = true;
          parent[ny][nx] = c;
          q.push({ x: nx, y: ny });
        }
      }

      return null;
    }

    function nearestWalkableCell(g, cell, maxRadius = 4, blockFn = null) {
      const canEnter = (x, y) => blockFn ? !blockFn(x, y) : isWalkable(g, x, y);
      if (canEnter(cell.x, cell.y)) return { x: cell.x, y: cell.y };
      for (let r = 1; r <= maxRadius; r++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            if (Math.abs(dx) !== r && Math.abs(dy) !== r) continue;
            const nx = cell.x + dx;
            const ny = cell.y + dy;
            if (canEnter(nx, ny)) return { x: nx, y: ny };
          }
        }
      }
      return null;
    }

    function randomCellInRoom(room, g) {
      const minX = room.x + 1;
      const maxX = room.x + room.w - 2;
      const minY = room.y + 1;
      const maxY = room.y + room.h - 2;

      for (let i = 0; i < 24; i++) {
        const cx = randInt(minX, maxX);
        const cy = randInt(minY, maxY);
        if (isWalkable(g, cx, cy)) return { x: cx, y: cy };
      }

      if (isWalkable(g, room.cx, room.cy)) return { x: room.cx, y: room.cy };
      return null;
    }

    function pickStartRoom(rooms) {
      let best = null;
      let scoreBest = Infinity;
      for (const r of rooms) {
        const score = r.cx * 1.8 + (H - r.cy) * 2.3 + rand() * 1.5;
        if (score < scoreBest) {
          scoreBest = score;
          best = r;
        }
      }
      return best;
    }

    function pickFarthestRoom(rooms, from) {
      let best = null;
      let dBest = -1;
      for (const r of rooms) {
        const d = dist(r.cx, r.cy, from.cx, from.cy);
        if (d > dBest) {
          dBest = d;
          best = r;
        }
      }
      return best;
    }

    function pickObjectiveRoom(rooms, start, exitRoom) {
      let best = null;
      let scoreBest = -1;
      for (const r of rooms) {
        if (r === start || r === exitRoom) continue;
        const dStart = dist(r.cx, r.cy, start.cx, start.cy);
        const dExit = dist(r.cx, r.cy, exitRoom.cx, exitRoom.cy);
        const score = Math.min(dStart, dExit) + rand() * 2;
        if (score > scoreBest) {
          scoreBest = score;
          best = r;
        }
      }
      return best;
    }

    function makePatrolFromRoom(room) {
      const x0 = room.x + 1;
      const y0 = room.y + 1;
      const x1 = Math.max(x0, room.x + room.w - 2);
      const y1 = Math.max(y0, room.y + room.h - 2);

      const pts = [
        { x: x0, y: y0 },
        { x: x1, y: y0 },
        { x: x1, y: y1 },
        { x: x0, y: y1 }
      ];

      const rot = randInt(0, 3);
      return pts.slice(rot).concat(pts.slice(0, rot));
    }

    function guardSeedsNearPlayerStart(g, startCell, guardCount, levelNo) {
      const seeds = [];
      const sx = (startCell.x + 0.5) * TILE;
      const sy = (startCell.y + 0.5) * TILE;
      const minR = TILE * 8;
      const maxR = TILE * 20;
      for (let i = 0; i < guardCount; i++) {
        for (let t = 0; t < 36; t++) {
          const ang = (i / guardCount) * Math.PI * 2 + rand() * 0.8;
          const r = minR + rand() * (maxR - minR);
          const wx = sx + Math.cos(ang) * r;
          const wy = sy + Math.sin(ang) * r;
          const c = worldToCell(wx, wy);
          if (!isWalkable(g, c.x, c.y) || getDoorAtCell(c.x, c.y)) continue;
          const spawnX = (c.x + 0.5) * TILE;
          const spawnY = (c.y + 0.5) * TILE;
          if (!canEnemySpawnAt(spawnX, spawnY, 9, g)) continue;
          const orbitX = sx + Math.cos(ang) * TILE * 4;
          const orbitY = sy + Math.sin(ang) * TILE * 4;
          seeds.push({
            x: spawnX,
            y: spawnY,
            waypoints: [
              { x: wx, y: wy },
              { x: orbitX, y: orbitY },
              { x: sx, y: sy }
            ],
            speed: clamp(106 + levelNo * 5 + randInt(-10, 14), 96, 205),
            fov: Math.PI * 0.65,
            viewDist: 220,
            hearDist: 240,
            armed: false,
            ammo: 0
          });
          break;
        }
      }
      return seeds;
    }

    function guardSeedsForLevel(rooms, startRoom, itemRoom, exitRoom, levelNo, g = null, routePoints = null) {
      const seeds = [];
      const difficulty = getDifficultyConfig();
      const modeCountBias = currentEnemyKind === "zombie" ? 3 : (currentEnemyKind === "clown" ? 0 : 1);
      let guardCount = clamp(
        Math.round((5 + Math.floor(levelNo / 2) + modeCountBias) * (difficulty.enemyCountMul || 1)),
        4,
        currentEnemyKind === "zombie" ? 24 : 20
      );
      // Modos super: horda menor, concentrada perto do jogador.
      if (isSurvivalRun()) {
        const plat = superPlatformEnemyMul();
        guardCount = clamp(Math.round(guardCount * 2.5 * plat), isBrowserMobilePlay() ? 10 : 14, isBrowserMobilePlay() ? 26 : 36);
        if (g && routePoints && routePoints[0]) {
          return guardSeedsNearPlayerStart(g, routePoints[0], guardCount, levelNo);
        }
      }
      const pool = rooms.filter((r) => r !== startRoom && r.w >= 4 && r.h >= 4);
      const usedRooms = new Set();
      const usedCells = new Set();

      function pushSeedFromCellWaypoints(cells, speedBias = 0) {
        if (!Array.isArray(cells) || cells.length < 3) return false;
        const wp = [];
        for (const c of cells) {
          const key = c.x + "," + c.y;
          if (usedCells.has(key) && wp.length >= 4) continue;
          usedCells.add(key);
          wp.push({ x: (c.x + 0.5) * TILE, y: (c.y + 0.5) * TILE });
        }
        if (wp.length < 3) return false;
        const start = wp[randInt(0, wp.length - 1)];
        if (!canEnemySpawnAt(start.x, start.y, 9, g)) return false;
        seeds.push({
          x: start.x,
          y: start.y,
          waypoints: wp,
          speed: clamp(106 + levelNo * 5 + randInt(-10, 14) + speedBias, 96, 205),
          fov: Math.PI * clamp(0.56 + levelNo * 0.013, 0.56, 0.75),
          viewDist: clamp(188 + levelNo * 8 + randInt(-8, 16), 174, 340),
          hearDist: clamp(204 + levelNo * 8 + randInt(-6, 14), 186, 345),
          armed: currentEnemyKind === "agent"
            ? (levelNo >= 2 && rand() < clamp(0.26 + levelNo * 0.025, 0.28, 0.58))
            : (levelNo >= 4 && rand() < 0.42),
          ammo: levelNo >= 2 ? randInt(4, 7) : 0
        });
        return true;
      }

      // Force some guards to patrol the actual objective/item/exit route.
      if (g && Array.isArray(routePoints) && routePoints.length >= 2) {
        const chain = [];
        for (const p of routePoints) {
          if (!p || !isWalkable(g, p.x, p.y)) continue;
          const prev = chain[chain.length - 1];
          if (prev && prev.x === p.x && prev.y === p.y) continue;
          chain.push({ x: p.x, y: p.y });
        }

        let routePath = [];
        for (let i = 0; i < chain.length - 1; i++) {
          const seg = shortestPathCells(g, chain[i], chain[i + 1]);
          if (!seg || seg.length < 2) continue;
          if (routePath.length > 0) seg.shift();
          routePath = routePath.concat(seg);
        }
        if (chain.length > 0) {
          const routeStart = chain[0];
          routePath = routePath.filter((c) => dist(c.x, c.y, routeStart.x, routeStart.y) >= 7);
        }

        if (routePath.length >= 10) {
          const routeGuardCount = clamp(1 + Math.floor(levelNo / 3), 1, 3);
          const chunk = Math.max(1, Math.floor(routePath.length / routeGuardCount));
          for (let i = 0; i < routeGuardCount && seeds.length < guardCount; i++) {
            const startIdx = i * chunk + randInt(0, Math.max(0, chunk - 1));
            const stride = clamp(Math.floor(routePath.length / 10), 3, 8);
            const picked = [];
            for (let k = 0; k < 7; k++) {
              const idx = (startIdx + k * stride) % routePath.length;
              picked.push(routePath[idx]);
            }
            pushSeedFromCellWaypoints(picked, 4);
          }
        }
      }

      const priorityRooms = [itemRoom, exitRoom].filter(Boolean);
      let priorityIndex = 0;
      while (seeds.length < guardCount) {
        let chosen = null;

        if (priorityIndex < priorityRooms.length) {
          chosen = priorityRooms[priorityIndex++];
        } else {
          for (let t = 0; t < 30; t++) {
            const cand = pool.length ? pick(pool) : pick(rooms);
            if (!cand) break;
            const key = cand.x + "," + cand.y;
            if (usedRooms.has(key)) continue;
            const dStart = dist(cand.cx, cand.cy, startRoom.cx, startRoom.cy);
            const dExit = dist(cand.cx, cand.cy, exitRoom.cx, exitRoom.cy);
            if (dStart > 3.1 && dExit > 2.2) {
              chosen = cand;
              break;
            }
          }
        }

        if (!chosen) {
          chosen = pool.length ? pick(pool) : pick(rooms);
        }
        if (!chosen) break;

        usedRooms.add(chosen.x + "," + chosen.y);
        const patrol = makePatrolFromRoom(chosen);
        pushSeedFromCellWaypoints(patrol, chosen === itemRoom ? 6 : 0);
      }

      return seeds;
    }

    function collectCriticalRouteCells(g, routePoints) {
      const critical = new Set();
      const chain = Array.isArray(routePoints) ? routePoints : [];
      for (let i = 0; i < chain.length - 1; i++) {
        const seg = shortestPathCells(g, chain[i], chain[i + 1]);
        if (!seg) continue;
        for (const c of seg) critical.add(c.x + "," + c.y);
      }
      return critical;
    }

    function placeLevelDoors(g, routePoints, levelNo, rooms = []) {
      levelDoors.length = 0;
      if (!routePoints || routePoints.length < 2) return;

      const startCell = routePoints[0];
      const exitCell = routePoints[routePoints.length - 1];
      const minDoors = clamp(2 + Math.floor(levelNo / 4), 2, 4);
      const maxDoors = clamp(4 + Math.floor(levelNo / 3), 4, 8);
      const minEssential = clamp(2 + Math.floor(levelNo / 5), 2, 4);

      const routeSites = sortRouteDoorSites(collectRouteDoorSites(g, routePoints));
      const roomSites = shuffleDoorSites(findRoomEntranceSites(g, rooms));
      const bridgeSites = findBridgeCells(g).filter((b) => canHostDoorFrame(g, b.x, b.y));

      let placed = 0;
      let essentialPlaced = 0;

      for (const site of routeSites) {
        if (essentialPlaced >= minEssential) break;
        if (placed >= maxDoors) break;
        if (tryPlaceDoorAt(g, site.x, site.y, true, startCell, exitCell, { forceRoute: true })) {
          placed += 1;
          essentialPlaced += 1;
        }
      }

      for (const site of routeSites) {
        if (placed >= maxDoors) break;
        if (getDoorAtCell(site.x, site.y)) continue;
        if (tryPlaceDoorAt(g, site.x, site.y, essentialPlaced < minEssential, startCell, exitCell)) {
          placed += 1;
          if (essentialPlaced < minEssential) essentialPlaced += 1;
        }
      }

      for (const b of bridgeSites) {
        if (placed >= maxDoors) break;
        if (getDoorAtCell(b.x, b.y)) continue;
        if (tryPlaceDoorAt(g, b.x, b.y, false, startCell, exitCell)) placed += 1;
      }

      for (const site of roomSites) {
        if (placed >= maxDoors) break;
        if (getDoorAtCell(site.x, site.y)) continue;
        if (tryPlaceDoorAt(g, site.x, site.y, false, startCell, exitCell)) placed += 1;
      }

      if (placed < minDoors) {
        const critical = collectCriticalRouteCells(g, routePoints);
        const fallback = [];
        for (const key of critical) {
          const parts = key.split(",");
          const cx = Number(parts[0]);
          const cy = Number(parts[1]);
          if (!canHostDoorFrame(g, cx, cy)) continue;
          fallback.push({ x: cx, y: cy });
        }
        shuffleDoorSites(fallback);
        const fallbackTry = fallback.slice(0, 64);
        for (const site of fallbackTry) {
          if (placed >= minDoors) break;
          if (getDoorAtCell(site.x, site.y)) continue;
          if (tryPlaceDoorAt(g, site.x, site.y, essentialPlaced < minEssential, startCell, exitCell)) {
            placed += 1;
            if (essentialPlaced < minEssential) essentialPlaced += 1;
          }
        }
      }
    }

    function placeMapProps(g, rooms, levelNo, blockedCells) {
      mapProps.length = 0;
      const kinds = ["crate", "desk", "locker", "cabinet", "barrel", "shelf"];
      const target = clamp(rooms.length * 1.6 + Math.floor(levelNo), 12, 42);
      const blocked = blockedCells || new Set();

      for (let n = 0; n < target * 14 && mapProps.length < target; n++) {
        const room = pick(rooms);
        if (!room) break;
        const cx = randInt(room.x + 1, room.x + room.w - 2);
        const cy = randInt(room.y + 1, room.y + room.h - 2);
        const key = cx + "," + cy;
        if (!isWalkable(g, cx, cy) || blocked.has(key)) continue;
        if (getDoorAtCell(cx, cy)) continue;
        if (isNearCorridor(g, cx, cy, 2)) continue;

        let tooClose = false;
        for (const p of mapProps) {
          if (dist((cx + 0.5) * TILE, (cy + 0.5) * TILE, p.x, p.y) < TILE * 2.4) {
            tooClose = true;
            break;
          }
        }
        if (tooClose) continue;

        const kind = pick(kinds);
        const hasLoot = rand() < 0.22;
        const nearCorridor = isNearCorridor(g, cx, cy, 3);
        const blocks = nearCorridor
          ? false
          : (kind === "desk" ? rand() < 0.38 : (kind === "locker" || kind === "cabinet" ? rand() < 0.32 : rand() < 0.24));
        mapProps.push({
          x: (cx + 0.5) * TILE,
          y: (cy + 0.5) * TILE,
          kind,
          blocks,
          r: kind === "desk" ? 9 : (kind === "locker" ? 8 : 7),
          searched: false,
          loot: hasLoot ? "ammo" : null
        });
        blocked.add(key);
      }
    }

    function buildLootCachesForLevel(level, levelNo, blockedCells) {
      lootCaches.length = 0;
      const blocked = blockedCells || new Set();
      const cacheCount = clamp(2 + Math.floor(levelNo / 2), 2, 6);
      for (let i = 0; i < cacheCount; i++) {
        const cell = pickPickupCell(level, Array.from(blocked).map((k) => {
          const p = k.split(",");
          return { x: Number(p[0]), y: Number(p[1]) };
        }));
        if (!cell) continue;
        blocked.add(cell.x + "," + cell.y);
        lootCaches.push({
          x: (cell.x + 0.5) * TILE,
          y: (cell.y + 0.5) * TILE,
          amount: clamp(3 + Math.floor(levelNo / 2) + randInt(0, 2), 3, 9),
          available: true
        });
      }
    }

    function decorateGeneratedLevel(g, rooms, routePoints, levelNo) {
      furnishFacilityRooms(g, rooms, routePoints, levelNo);
    }

    function buildFallbackLevel(levelNo) {
      levelDoors.length = 0;
      mapProps.length = 0;
      const g = makeGrid(CELL_WALL);
      const rooms = [];

      const baseRoom = { x: 3, y: H - 13, w: 16, h: 10, type: "office", cx: 11, cy: H - 8, doors: [], links: [] };
      const storageRoom = { x: 27, y: H - 15, w: 16, h: 10, type: "storage", cx: 35, cy: H - 10, doors: [], links: [] };
      const midRoom = { x: Math.floor(W * 0.42), y: Math.floor(H * 0.44), w: 18, h: 11, type: "server", cx: Math.floor(W * 0.42) + 9, cy: Math.floor(H * 0.44) + 5, doors: [], links: [] };
      const archiveRoom = { x: 20, y: 7, w: 17, h: 10, type: "archive", cx: 28, cy: 12, doors: [], links: [] };
      const labRoom = { x: 48, y: 8, w: 16, h: 10, type: "lab", cx: 56, cy: 13, doors: [], links: [] };
      const securityRoom = { x: W - 22, y: Math.floor(H * 0.5), w: 17, h: 10, type: "security", cx: W - 14, cy: Math.floor(H * 0.5) + 5, doors: [], links: [] };
      const exitRoom = { x: W - 22, y: 4, w: 17, h: 10, type: "security", cx: W - 14, cy: 9, doors: [], links: [] };

      for (const room of [baseRoom, storageRoom, midRoom, archiveRoom, labRoom, securityRoom, exitRoom]) {
        rooms.push(room);
        carveRoomShell(g, room);
      }
      carveCorridorBetweenRooms(g, baseRoom, "east", storageRoom, "west", rooms, true);
      carveCorridorBetweenRooms(g, storageRoom, "north", midRoom, "south", rooms, true);
      carveCorridorBetweenRooms(g, midRoom, "north", archiveRoom, "south", rooms, true);
      carveCorridorBetweenRooms(g, archiveRoom, "east", labRoom, "west", rooms, false);
      carveCorridorBetweenRooms(g, labRoom, "east", exitRoom, "west", rooms, true);
      carveCorridorBetweenRooms(g, midRoom, "east", securityRoom, "west", rooms, false);
      carveCorridorBetweenRooms(g, securityRoom, "north", exitRoom, "south", rooms, false);
      enforceBorder(g);

      const startCell = randomCellInRoom(baseRoom, g);
      const itemCell = randomCellInRoom(midRoom, g);
      const exitCell = randomCellInRoom(exitRoom, g);
      const fallbackRooms = [baseRoom, storageRoom, midRoom, archiveRoom, labRoom, securityRoom, exitRoom];
      const objectiveCells = buildCampaignObjectiveCells(levelNo, fallbackRooms, baseRoom, midRoom, exitRoom, g);
      const routePoints = [startCell].concat(objectiveCells, [itemCell, exitCell]);
      furnishFacilityRooms(g, rooms, routePoints, levelNo);

      const tints = Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => (isWalkableCell(g[y][x]) ? 0.8 + rand() * 0.22 : 0))
      );
      const levelData = {
        g,
        tints,
        startCell,
        itemCell,
        exitCell,
        objectiveCells,
        routePoints
      };
      buildLootCachesForLevel(levelData, levelNo, collectCriticalRouteCells(g, routePoints));
      const seeds = guardSeedsForLevel(rooms, baseRoom, midRoom, exitRoom, levelNo, g, routePoints);
      return Object.assign(levelData, {
        seeds,
        doors: levelDoors.map((d) => Object.assign({}, d)),
        props: mapProps.map((p) => Object.assign({}, p))
      });
    }

    function generateSuperOpenArena(levelNo) {
      levelDoors.length = 0;
      mapProps.length = 0;
      lootCaches.length = 0;
      const g = makeGrid(CELL_FLOOR);
      enforceBorder(g);

      const layout = ((run.superMapVariant || 0) + levelNo * 7) % 5;
      const clusterCount = 2 + (layout % 4);
      for (let i = 0; i < clusterCount; i++) {
        const w = randInt(7, 13);
        const h = randInt(5, 10);
        const x = randInt(4, W - w - 4);
        const y = randInt(4, H - h - 4);
        if (dist(x + w / 2, y + h / 2, W / 2, H / 2) < 8 && rand() < 0.35) continue;
        let overlap = false;
        for (let t = 0; t < i; t++) {
          // evita sobreposicao grossa
        }
        carveSurvivalHouse(g, x, y, w, h);
      }

      const tints = Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          if (x <= 0 || y <= 0 || x >= W - 1 || y >= H - 1) return 0;
          const wave = Math.sin(x * 0.11 + y * 0.08 + layout) * 0.07;
          return 0.72 + rand() * 0.2 + wave;
        })
      );

      let startCell = { x: Math.floor(W / 2), y: Math.floor(H / 2) };
      for (let t = 0; t < 80; t++) {
        const cx = randInt(3, W - 4);
        const cy = randInt(3, H - 4);
        if (isWalkable(g, cx, cy)) {
          startCell = { x: cx, y: cy };
          break;
        }
      }

      const propTarget = Math.round((qualityAtLeast("high") ? 48 : 34) * (isBrowserMobilePlay() ? 0.7 : 1));
      const startWx = (startCell.x + 0.5) * TILE;
      const startWy = (startCell.y + 0.5) * TILE;
      for (let i = 0; i < propTarget; i++) {
        const ang = rand() * Math.PI * 2;
        const r = TILE * (8 + rand() * 24);
        const wx = startWx + Math.cos(ang) * r;
        const wy = startWy + Math.sin(ang) * r;
        const cx = Math.floor(wx / TILE);
        const cy = Math.floor(wy / TILE);
        if (cx <= 1 || cy <= 1 || cx >= W - 2 || cy >= H - 2) continue;
        if (!isWalkable(g, cx, cy) || getDoorAtCell(cx, cy)) continue;
        mapProps.push({
          x: wx,
          y: wy,
          kind: rand() < 0.38 ? "barrel" : "crate",
          blocks: rand() < 0.42,
          r: randInt(6, 9),
          searched: false,
          loot: rand() < 0.08 ? "ammo" : null
        });
      }

      const itemCell = { x: clamp(startCell.x + 2, 2, W - 3), y: startCell.y };
      const exitCell = { x: clamp(startCell.x - 2, 2, W - 3), y: startCell.y };
      return {
        g,
        tints,
        startCell,
        itemCell,
        exitCell,
        objectiveCells: [],
        routePoints: [startCell],
        seeds: [],
        doors: levelDoors.map((d) => Object.assign({}, d)),
        props: mapProps.map((p) => Object.assign({}, p))
      };
    }

    function generateLevel(levelNo) {
      if (isSurvivalRun()) return generateSurvivalOpenWorld(levelNo);
      if (isSuperCharacter()) {
        const layout = ((run.superMapVariant || 0) + levelNo * 17) % 4;
        if (layout === 3) {
          const open = generateSuperOpenArena(levelNo);
          if (open) return open;
        }
        for (let attempt = 0; attempt < 56; attempt++) {
          const result = generateStructuredFacility(levelNo);
          if (result && levelDoors.length >= (layout === 0 ? 1 : 2)) return result;
        }
        const open = generateSuperOpenArena(levelNo);
        if (open) return open;
        return buildFallbackLevel(levelNo);
      }
      for (let attempt = 0; attempt < 48; attempt++) {
        const result = generateStructuredFacility(levelNo);
        if (result && levelDoors.length >= 2) return result;
      }
      return buildFallbackLevel(levelNo);
    }

    function carveSurvivalHouse(g, x, y, w, h) {
      const room = { x, y, w, h, type: "house", cx: x + Math.floor(w / 2), cy: y + Math.floor(h / 2), doors: [], links: [] };
      carveRoomShell(g, room);
      const doorSide = rand() < 0.5 ? "south" : (rand() < 0.5 ? "east" : "west");
      const along = doorSide === "south"
        ? randInt(x + 2, x + Math.max(2, w - DOOR_WIDTH - 1))
        : randInt(y + 2, y + Math.max(2, h - DOOR_WIDTH - 1));
      registerFacilityDoor(g, room, doorSide, along, false);

      if (w >= 14 && h >= 10 && rand() < 0.75) {
        const splitX = x + Math.floor(w * (0.42 + rand() * 0.18));
        for (let yy = y + 1; yy < y + h - 1; yy++) g[yy][splitX] = CELL_WALL;
        const dy = y + randInt(2, h - DOOR_WIDTH - 2);
        for (let i = 0; i < DOOR_WIDTH; i++) g[dy + i][splitX] = CELL_DOOR_OPEN;
      }
      return room;
    }

    function generateSurvivalOpenWorld(levelNo) {
      levelDoors.length = 0;
      mapProps.length = 0;
      lootCaches.length = 0;
      const g = makeGrid(CELL_FLOOR);
      enforceBorder(g);
      const tints = Array.from({ length: H }, (_, y) =>
        Array.from({ length: W }, (_, x) => {
          if (x <= 0 || y <= 0 || x >= W - 1 || y >= H - 1) return 0;
          const wave = Math.sin(x * 0.13 + y * 0.07) * 0.08 + Math.sin(x * 0.035 - y * 0.11) * 0.06;
          return 0.74 + rand() * 0.18 + wave;
        })
      );
      const startCell = { x: Math.floor(W / 2), y: Math.floor(H / 2) };
      const itemCell = { x: startCell.x + 2, y: startCell.y };
      const exitCell = { x: startCell.x - 2, y: startCell.y };
      const houses = [];
      const houseCount = 2 + Math.floor(levelNo / 8);
      for (let i = 0; i < houseCount; i++) {
        const w = randInt(8, 12);
        const h = randInt(6, 10);
        const x = randInt(6, W - w - 6);
        const y = randInt(6, H - h - 6);
        if (dist(x + w / 2, y + h / 2, startCell.x, startCell.y) < 12) continue;
        let overlap = false;
        for (const r of houses) {
          if (x < r.x + r.w + 6 && x + w + 6 > r.x && y < r.y + r.h + 6 && y + h + 6 > r.y) overlap = true;
        }
        if (overlap) continue;
        houses.push(carveSurvivalHouse(g, x, y, w, h));
      }

      const propTarget = Math.round((qualityAtLeast("high") ? 72 : (qualityAtLeast("medium") ? 52 : 36)) * (isBrowserMobilePlay() ? 0.65 : 1));
      const startWx = (startCell.x + 0.5) * TILE;
      const startWy = (startCell.y + 0.5) * TILE;
      for (let i = 0; i < propTarget; i++) {
        const ang = rand() * Math.PI * 2;
        const r = TILE * (10 + rand() * 22);
        const wx = startWx + Math.cos(ang) * r;
        const wy = startWy + Math.sin(ang) * r;
        const cx = Math.floor(wx / TILE);
        const cy = Math.floor(wy / TILE);
        if (cx <= 1 || cy <= 1 || cx >= W - 2 || cy >= H - 2) continue;
        if (dist(wx, wy, startWx, startWy) < TILE * 6) continue;
        if (!isWalkable(g, cx, cy) || getDoorAtCell(cx, cy)) continue;
        if (rand() < 0.34) {
          mapProps.push({ x: wx, y: wy, kind: "tree", blocks: true, r: randInt(9, 14), searched: true, loot: null });
        } else {
          mapProps.push({ x: wx + (rand() - 0.5) * 10, y: wy + (rand() - 0.5) * 10, kind: "grass", blocks: false, r: randInt(5, 10), searched: true, loot: null, seed: rand() * 1000 });
        }
      }

      const seeds = [];
      return {
        g,
        tints,
        startCell,
        itemCell,
        exitCell,
        objectiveCells: [],
        routePoints: [startCell],
        seeds,
        doors: levelDoors.map((d) => Object.assign({}, d)),
        props: mapProps.map((p) => Object.assign({}, p))
      };
    }

    function addGuard(seed) {
      const kind = seed.kind || currentEnemyKind || "agent";
      const isZombie = isZombieKind(kind);
      const isClown = isClownKind(kind);
      const isNemesis = isNemesisKind(kind);
      const isMelee = isMeleeEnemyKind(kind);
      const spawnR = isNemesis ? 12.5 : (seed.leader ? 13.5 : 9);
      const resolved = resolveEnemySpawnPosition(seed.x, seed.y, spawnR);
      if (!resolved) return;
      seed = Object.assign({}, seed, { x: resolved.x, y: resolved.y });
      const leader = !!seed.leader;
      const difficulty = getDifficultyConfig();
      const speedMul = (difficulty.enemySpeedMul || 1) * campaignEnemySpeedMul();
      const senseMul = difficulty.enemySenseMul || 1;
      const campaignHp = campaignEnemyHpMul();
      const hpMul = (difficulty.enemyHpMul || 1) * campaignHp;
      const weather = getScenarioWeather();
      const weatherSenseMul = weather === "night" ? 0.9 : (weather === "rain" ? 0.95 : (weather === "fog" ? 0.92 : 1));
      const baseHp = isZombie ? 1.75 : (isClown ? 1.25 : 1);
      const survivalHpMul = isSurvivalRun()
        ? (1 + survival.elapsed / 190 + Math.max(0, survival.level - 1) * 0.045)
        : 1;
      const leaderMul = leader ? 3.25 : 1;
      guards.push({
        x: seed.x,
        y: seed.y,
        r: isNemesis ? 12.5 : (leader ? 13.5 : 9),
        dir: 0,
        kind,
        leader,
        speed: (isNemesis ? Math.max(118, seed.speed || (126 + run.level * 5)) : (isZombie ? Math.max(42, seed.speed * 0.48) : (isClown ? Math.max(66, seed.speed * 0.72) : seed.speed))) * speedMul * (leader ? 0.82 : 1),
        maxHp: (isNemesis ? (seed.maxHp || calcNemesisMaxHp()) : (seed.maxHp || baseHp)) * hpMul * survivalHpMul * leaderMul,
        hp: (isNemesis ? (seed.hp || seed.maxHp || calcNemesisMaxHp()) : (seed.hp || seed.maxHp || baseHp)) * hpMul * survivalHpMul * leaderMul,
        fov: isNemesis ? Math.PI * 0.86 : (isZombie ? Math.min(seed.fov * 0.62, Math.PI * 0.44) : (isClown ? Math.min(seed.fov * 0.78, Math.PI * 0.58) : seed.fov)),
        viewDist: (isNemesis ? Math.max(170, seed.viewDist * 0.92) : (isZombie ? Math.max(72, seed.viewDist * 0.38) : (isClown ? Math.max(92, seed.viewDist * 0.56) : seed.viewDist))) * senseMul * weatherSenseMul,
        hearDist: (isNemesis ? Math.max(420, seed.hearDist * 1.55) : (isMelee ? Math.max(isClown ? 300 : 260, seed.hearDist * (isClown ? 1.24 : 1.12)) : seed.hearDist)) * senseMul * weatherSenseMul,
        state: "PATROL",
        wp: seed.waypoints,
        wpIndex: 0,
        target: null,
        lastSeen: null,
        stateT: 0,
        suspicion: 0,
        sweepDir: rand() < 0.5 ? -1 : 1,
        visionDebuffT: 0,
        sleepT: 0,
        pauseT: 0,
        lookDir: 0,
        lureHoldT: 0,
        armed: isMelee ? false : !!seed.armed,
        ammo: (!isMelee && seed.armed) ? (seed.ammo || randInt(4, 7)) : 0,
        shootCooldown: 0,
        muzzleFlashT: 0,
        coverTarget: null,
        voiceT: isMelee ? (0.6 + rand() * 3.2) : 0,
        attackVoiceT: 0,
        meleeCd: 0,
        meleeWindup: 0,
        shootWindup: 0,
        abilityT: 0,
        dashT: 0,
        path: null,
        pathGoalKey: "",
        pathT: 0,
        stuckT: 0,
        stuckRecoverT: 0,
        lastX: seed.x,
        lastY: seed.y,
        boss: isNemesis,
        chaseLocked: false,
        nemesisBurstT: 0,
        nemesisTurn: seed.x !== undefined ? angleTo(seed.x, seed.y, player.x, player.y) : 0,
        nemesisDoorT: 0,
        nemesisPropT: 0,
        unstuckCd: 0,
        bazookaState: isNemesis ? "none" : "",
        bazookaT: 0,
        bazookaCd: isNemesis ? (2 + rand() * 3) : 0,
        tentacleState: isNemesis ? "none" : "",
        tentacleT: 0,
        tentacleCd: isNemesis ? (7 + rand() * 4) : 0,
        tentacleRollT: isNemesis ? (1.5 + rand() * 2) : 0,
        tentacleX: 0,
        tentacleY: 0,
        invulnT: 0,
        invulnCd: 0
      });
    }

    function seedNearPlayerStart(seed, minSpawnDist, minWaypointDist) {
      if (dist(player.x, player.y, seed.x, seed.y) < minSpawnDist) return true;
      const waypoints = Array.isArray(seed.waypoints) ? seed.waypoints : [];
      for (const wp of waypoints) {
        if (dist(player.x, player.y, wp.x, wp.y) < minWaypointDist) return true;
      }
      return false;
    }

    function findNemesisSpawnPoint() {
      let fallback = null;
      for (let i = 0; i < 520; i++) {
        const cx = randInt(1, W - 2);
        const cy = randInt(1, H - 2);
        if (!inBounds(cx, cy) || !isWalkable(grid, cx, cy)) continue;
        const x = (cx + 0.5) * TILE;
        const y = (cy + 0.5) * TILE;
        if (!canEnemySpawnAt(x, y, 12.5)) continue;
        const d = dist(x, y, player.x, player.y);
        if (!fallback || d > fallback.d) fallback = { x, y, d };
        if (d > TILE * 12 && rayBlocked(x, y, player.x, player.y)) return { x, y };
        if (d > TILE * 16) return { x, y };
      }
      return fallback ? { x: fallback.x, y: fallback.y } : { x: exit.x, y: exit.y };
    }

    function pickNemesisHuntTarget() {
      const candidates = [];
      for (const o of objectives) {
        if (!o.done) candidates.push({ x: o.x, y: o.y, weight: 1.15 });
      }
      if (!item.taken) candidates.push({ x: item.x, y: item.y, weight: 1.35 });
      candidates.push({ x: exit.x + exit.w * 0.5, y: exit.y + exit.h * 0.5, weight: item.taken ? 1.5 : 0.65 });

      let best = null;
      let bestScore = Infinity;
      for (const c of candidates) {
        const score = dist(player.x, player.y, c.x, c.y) / Math.max(0.1, c.weight) + rand() * TILE * 4;
        if (score < bestScore) {
          bestScore = score;
          best = c;
        }
      }
      return best || { x: player.x, y: player.y };
    }

    function triggerNemesisWarning() {
      if (nemesis.warned) return;
      nemesis.warned = true;
      syncMusicState();
    }

    function spawnNemesis() {
      if (!nemesis.enabled || nemesis.spawned) return;
      const p = findNemesisSpawnPoint();
      const hunt = pickNemesisHuntTarget();
      nemesis.spawned = true;
      addGuard({
        x: p.x,
        y: p.y,
        kind: "nemesis",
        speed: 116 + run.level * 4,
        maxHp: calcNemesisMaxHp(),
        fov: Math.PI * 0.86,
        viewDist: 220,
        hearDist: 480,
        armed: false,
        waypoints: [
          { x: p.x, y: p.y },
          { x: hunt.x, y: hunt.y }
        ]
      });
      const boss = guards[guards.length - 1];
      if (boss) {
        boss.state = "SEARCH";
        boss.target = { x: hunt.x, y: hunt.y, source: "HUNT" };
        boss.lastSeen = null;
        boss.voiceT = 0.7;
      }
      if (!tryNemesisStarsVoice(1, 0.5)) sfxNemesisRoar(1, "spawn");
      shakeScreen(11, 0.55);
      syncMusicState();
    }

    function updateNemesisSpawn(dt) {
      if (!nemesis.enabled || nemesis.spawned || mode !== MODE_PLAYING) return;
      nemesis.spawnT = Math.max(0, nemesis.spawnT - dt);
      if (!nemesis.warned && nemesis.spawnT <= 8.5) triggerNemesisWarning();
      if (nemesis.spawnT <= 0) spawnNemesis();
    }

    function pickPickupCell(level, extraBlocked = []) {
      const blocked = new Set([
        level.startCell.x + "," + level.startCell.y,
        level.itemCell.x + "," + level.itemCell.y,
        level.exitCell.x + "," + level.exitCell.y
      ]);
      for (const c of level.objectiveCells || []) {
        blocked.add(c.x + "," + c.y);
      }
      for (const b of extraBlocked) {
        blocked.add(b.x + "," + b.y);
      }

      const avoidPoints = [
        { x: (level.startCell.x + 0.5) * TILE, y: (level.startCell.y + 0.5) * TILE },
        { x: (level.itemCell.x + 0.5) * TILE, y: (level.itemCell.y + 0.5) * TILE },
        { x: (level.exitCell.x + 0.5) * TILE, y: (level.exitCell.y + 0.5) * TILE }
      ];

      let bestFallback = null;
      for (let i = 0; i < 420; i++) {
        const cx = randInt(1, W - 2);
        const cy = randInt(1, H - 2);
        if (!inBounds(cx, cy) || !isWalkable(level.g, cx, cy)) continue;

        const key = cx + "," + cy;
        if (blocked.has(key)) continue;

        const wx = (cx + 0.5) * TILE;
        const wy = (cy + 0.5) * TILE;
        let minDist = Infinity;
        for (const p of avoidPoints) {
          minDist = Math.min(minDist, dist(wx, wy, p.x, p.y));
        }

        if (minDist < TILE * 4.5) {
          if (!bestFallback || minDist > bestFallback.minDist) {
            bestFallback = { x: cx, y: cy, minDist };
          }
          continue;
        }

        return { x: cx, y: cy };
      }

      if (bestFallback) return { x: bestFallback.x, y: bestFallback.y };
      return null;
    }

    function pickWeaponCell(level) {
      return pickPickupCell(level);
    }

    function pickAmmoMagCell(level, weaponCell) {
      return pickPickupCell(level, weaponCell ? [weaponCell] : []);
    }

    function applyStartingLoadout() {
      player.hasWeapon = false;
      player.meleeWeapon = "knife";
      player.activeSlot = "knife";
      player.ammo = 0;
      player.maxAmmo = 0;
      player.weaponSlots = [null, null];
      player.activeWeaponIndex = 0;

      // Super modos nao usam armas comuns: a acao primaria vira habilidade.
      if (isSuperCharacter()) {
        syncActiveWeaponState();
        return;
      }

      const def = getSelectedLoadoutDef();
      if (def.type === "weapon" && isShopItemOwned(def.id)) {
        giveWeapon(buildLoadoutWeapon(def.id));
      } else {
        // Padrao: o player sempre comeca com uma pistola em vez da faca.
        giveWeapon(buildLoadoutWeapon("pistol"), { reserveAmmo: 21 });
      }
      syncActiveWeaponState();
    }

    function setupLevel(levelNo, opts = {}) {
      const carriedLoadout = opts && opts.preserveLoadout ? capturePlayerLoadout() : null;
      setLevelRng(run.seedText, levelNo);
      applyWorldSizeForMode();
      setScenarioThemeForLevel(levelNo);
      currentEnemyKind = getEnemyKindForSettings();
      setMusicThemeForLevel(levelNo);
      levelWeaponDropType = pickMapWeaponForLevel(levelNo);
      currentWeaponType = levelWeaponDropType;
      const level = generateLevel(levelNo);
      grid = level.g;
      floorTint = level.tints;
      invalidateMapCache();

      player.x = (level.startCell.x + 0.5) * TILE;
      player.y = (level.startCell.y + 0.5) * TILE;
      player.dir = -Math.PI / 2;
      player.alive = true;
      player.crouch = false;
      player.moving = false;
      player.running = false;
      player.carrying = false;
      player.noise = 0;
      player.vis = 0;
      player.throwCooldown = 0;
      player.hasWeapon = false;
      player.meleeWeapon = "";
      player.activeSlot = "knife";
      player.ammo = 0;
      player.maxAmmo = 0;
      player.weaponSlots = [null, null];
      player.activeWeaponIndex = 0;
      player.shootCooldown = 0;
      player.muzzleFlashT = 0;
      player.laserHeat = 0;
      player.laserActive = false;
      player.flying = false;
      player.flyT = 0;
      if (isOperativeCampaign()) {
        player.maxHealth = OPERATIVE_MAX_HEALTH;
        if (!Number.isFinite(player.health) || player.health <= 0) player.health = OPERATIVE_MAX_HEALTH;
        player.health = Math.min(player.maxHealth, player.health);
      } else if (isSuperCharacter()) {
        if (isSurvivalRun()) recalcSurvivalStats();
        else player.maxHealth = HOMELANDER_MAX_HEALTH;
        if (!Number.isFinite(player.health) || player.health <= 0) player.health = player.maxHealth;
        player.health = Math.min(player.maxHealth, player.health);
      } else {
        player.maxHealth = OPERATIVE_MAX_HEALTH;
        player.health = OPERATIVE_MAX_HEALTH;
      }
      player.hurtCd = 0;
      player.drinkCd = 0;
      player.rageMax = 100;
      player.berserkT = 0;
      player.laserMaxFuel = HOMELANDER_LASER_MAX_FUEL;
      player.laserFuel = HOMELANDER_LASER_MAX_FUEL;
      player.laserCooldown = 0;
      player.flyMaxFuel = HOMELANDER_FLY_MAX_FUEL;
      player.flyFuel = HOMELANDER_FLY_MAX_FUEL;
      player.flyCooldown = 0;
      player.flySoundDone = false;
      player.butcherDashT = 0;
      player.butcherDashDir = player.dir;
      player.butcherDashPairs = 0;
      player.butcherDashPairT = 0;
      if (isButcherCharacter()) {
        player.flyMaxFuel = BUTCHER_DASH_CHARGES;
        player.flyFuel = BUTCHER_DASH_CHARGES;
      } else if (isThorCharacter()) {
        player.milk = 0;
        player.laserMaxFuel = THOR_LASER_MAX_FUEL;
        player.laserFuel = THOR_LASER_MAX_FUEL;
        player.flyMaxFuel = THOR_FLY_MAX_FUEL;
        player.flyFuel = THOR_FLY_MAX_FUEL;
      }
      player.mjolnirState = "held";
      player.mjolnirX = player.x;
      player.mjolnirY = player.y;
      player.mjolnirTargetX = player.x;
      player.mjolnirTargetY = player.y;
      player.mjolnirCharge = 0;
      player.mjolnirSpin = 0;
      player.mjolnirLeg = 0;
      player.mjolnirDamageT = 0;
      player.mjolnirLightningT = 0;
      player.mjolnirRequireRelease = false;
      player.mjolnirMaxEnergy = THOR_MJOLNIR_MAX_ENERGY;
      player.mjolnirEnergy = THOR_MJOLNIR_MAX_ENERGY;
      player.mjolnirCooldown = 0;
      player.thorStormStrikeT = 0.35;
      player.superPowerCooldown = 0;
      homelanderLaserAccum = 0;
      homelanderLaserDamageT = 0;
      homelanderLaserEnvT = 0;
      homelanderFlightBreakT = 0;
      homelanderFlightKillT = 0;
      homelanderBeams.length = 0;
      homelanderShockwaves.length = 0;
      // O item de cura dos super modos fica entre fases.
      if (!isSuperCharacter()) player.milk = 0;
      homelanderSpawnT = isSurvivalRun() ? 0.6 : 4;
      if (!restorePlayerLoadout(carriedLoadout)) applyStartingLoadout();
      fx.shards.length = 0;
      fx.traces.length = 0;
      fx.blood.length = 0;
      fx.punches.length = 0;
      fx.slashes.length = 0;
      fx.alerts.length = 0;
      fx.scorch.length = 0;
      fx.gore.length = 0;
      fx.wind.length = 0;
      fx.gibs.length = 0;
      fx.spriteGore.length = 0;
      fx.spriteGibs.length = 0;
      fx.fires.length = 0;
      fx.bloodSprays.length = 0;
      fx.tentacles.length = 0;
      fx.rings.length = 0;
      nemesisMissiles.length = 0;
      stopLoopingSfx();

      item.x = (level.itemCell.x + 0.5) * TILE;
      item.y = (level.itemCell.y + 0.5) * TILE;
      item.taken = false;

      objectives.length = 0;
      for (const c of level.objectiveCells || []) {
        const type = c.type || "hack";
        const def = CAMPAIGN_OBJECTIVE_TYPES[type] || CAMPAIGN_OBJECTIVE_TYPES.hack;
        objectives.push({
          x: (c.x + 0.5) * TILE,
          y: (c.y + 0.5) * TILE,
          done: false,
          type,
          seq: c.seq || 0,
          holdNeed: Number.isFinite(c.holdNeed) ? c.holdNeed : (def.hold || 0),
          holdT: 0,
          holdStarted: false,
          label: c.label || def.label,
          scoreBonus: c.scoreBonus || def.score || 120,
          alertRadius: c.alertRadius || def.alertRadius || 0
        });
      }
      if (isSurvivalRun()) {
        objectives.length = 0;
        item.taken = true;
        player.carrying = false;
      }

      const weaponCell = pickWeaponCell(level);
      if (weaponCell) {
        weaponDrop.x = (weaponCell.x + 0.5) * TILE;
        weaponDrop.y = (weaponCell.y + 0.5) * TILE;
        weaponDrop.available = true;
        weaponDrop.weaponType = cloneWeaponType(levelWeaponDropType);
      } else {
        weaponDrop.x = 0;
        weaponDrop.y = 0;
        weaponDrop.available = false;
        weaponDrop.weaponType = null;
      }

      const bossLevel = shouldSpawnNemesisBoss(currentEnemyKind, run.level);
      const canOfferGrenadeLauncher = bossLevel &&
        getSelectedLoadoutDef().id !== "bazooka" &&
        !run.grenadeLauncherCollected &&
        (run.grenadeLauncherLevel === 0 || run.grenadeLauncherLevel === run.level);
      if (canOfferGrenadeLauncher && run.grenadeLauncherLevel === 0) {
        run.grenadeLauncherLevel = run.level;
      }
      const grenadeCell = canOfferGrenadeLauncher ? pickPickupCell(level, weaponCell ? [weaponCell] : []) : null;
      if (grenadeCell) {
        grenadeLauncherDrop.x = (grenadeCell.x + 0.5) * TILE;
        grenadeLauncherDrop.y = (grenadeCell.y + 0.5) * TILE;
        grenadeLauncherDrop.available = true;
      } else {
        grenadeLauncherDrop.x = 0;
        grenadeLauncherDrop.y = 0;
        grenadeLauncherDrop.available = false;
      }

      syncActiveWeaponState();
      const ammoBaseWeapon = player.hasWeapon ? currentWeaponType : levelWeaponDropType;
      ammoMagDrop.amount = Math.max(3, Math.ceil(ammoBaseWeapon.maxAmmo || 0));
      const blockedAmmoCells = [weaponCell, grenadeCell].filter(Boolean);
      const ammoCell = pickPickupCell(level, blockedAmmoCells);
      if (ammoCell) {
        ammoMagDrop.x = (ammoCell.x + 0.5) * TILE;
        ammoMagDrop.y = (ammoCell.y + 0.5) * TILE;
        ammoMagDrop.available = true;
      } else {
        ammoMagDrop.x = 0;
        ammoMagDrop.y = 0;
        ammoMagDrop.available = false;
      }
      if (isSuperCharacter()) {
        weaponDrop.available = false;
        weaponDrop.weaponType = null;
        grenadeLauncherDrop.available = false;
        ammoMagDrop.available = false;
      }

      exit.w = TILE * 1.8;
      exit.h = TILE * 1.8;
      exit.x = (level.exitCell.x + 0.5) * TILE - exit.w / 2;
      exit.y = (level.exitCell.y + 0.5) * TILE - exit.h / 2;

      lures.length = 0;
      guards.length = 0;
      levelDoors.length = 0;
      mapProps.length = 0;
      lootCaches.length = 0;
      if (level.doors) {
        for (const d of level.doors) levelDoors.push(Object.assign({}, d));
      }
      if (level.props) {
        for (const p of level.props) mapProps.push(Object.assign({}, p));
      }
      if (level.routePoints) {
        buildLootCachesForLevel(level, levelNo, collectCriticalRouteCells(grid, level.routePoints));
      } else {
        buildLootCachesForLevel(level, levelNo);
      }

      nemesis.enabled = bossLevel && !isSurvivalRun();
      nemesis.spawned = false;
      nemesis.warned = false;
      nemesis.chaseLocked = false;
      nemesisStarsVoiceCd = 0;
      nemesisScreamCd = 0;
      nemesis.spawnT = nemesis.enabled
        ? Math.max(10, 15 - run.level * 0.25 + rand() * 6.5)
        : 0;
      const minStartEnemyDist = isMeleeEnemyKind(currentEnemyKind) ? TILE * 6.5 : TILE * 8;
      const minStartPatrolDist = isMeleeEnemyKind(currentEnemyKind) ? TILE * 5.5 : TILE * 7;
      for (const seed of level.seeds) {
        const seedKind = isSurvivalRun()
          ? HOMELANDER_MIX_KINDS[(Math.random() * HOMELANDER_MIX_KINDS.length) | 0]
          : currentEnemyKind;
        const guardSeed = Object.assign({}, seed, { kind: seedKind });
        if (!isSurvivalRun() && seedNearPlayerStart(guardSeed, minStartEnemyDist, minStartPatrolDist)) continue;
        addGuard(guardSeed);
      }

      milks.length = 0;
      hearts.length = 0;
      if (isSuperCharacter()) {
        const pickupCount = isSurvivalRun()
          ? (Math.random() < 0.38 ? 0 : (Math.random() < 0.72 ? 1 : 2))
          : (2 + ((Math.random() * 3) | 0));
        let placed = 0;
        let tries = 0;
        while (placed < pickupCount && tries < 1200) {
          tries++;
          const cx = 1 + ((Math.random() * (W - 2)) | 0);
          const cy = 1 + ((Math.random() * (H - 2)) | 0);
          if (!grid[cy] || grid[cy][cx] !== CELL_FLOOR) continue;
          const wx = (cx + 0.5) * TILE;
          const wy = (cy + 0.5) * TILE;
          if (dist(wx, wy, player.x, player.y) < TILE * 5) continue;
          milks.push({ x: wx, y: wy, taken: false, bob: Math.random() * Math.PI * 2 });
          placed++;
        }
      } else if (isOperativeCampaign()) {
        const heartCount = 2 + ((Math.random() * 2) | 0);
        let placed = 0;
        let tries = 0;
        while (placed < heartCount && tries < 1200) {
          tries++;
          const cx = 1 + ((Math.random() * (W - 2)) | 0);
          const cy = 1 + ((Math.random() * (H - 2)) | 0);
          if (!grid[cy] || grid[cy][cx] !== CELL_FLOOR) continue;
          const wx = (cx + 0.5) * TILE;
          const wy = (cy + 0.5) * TILE;
          if (dist(wx, wy, player.x, player.y) < TILE * 4) continue;
          hearts.push({ x: wx, y: wy, taken: false, bob: Math.random() * Math.PI * 2 });
          placed++;
        }
      }

      run.levelStartMs = performance.now();
      run.levelFreezeSec = 0;
      run.levelKnifeOnly = !player.hasWeapon;
      run.levelNemesisDefeated = false;
      run.levelStartDetections = run.detected;
      resetFollowCamera();

      levelIntroFlash = 1.05;
      statusTxt.textContent = "INFILTRANDO";
      if (levelNo > progress.lastLevel) {
        progress.lastLevel = levelNo;
        saveProgress();
      }
      updateMissionHint();
      if (!isSuperCharacter()) {
        pushHint("Início: " + currentHeldItemLabel() + ". Arma do mapa: " + levelWeaponDropType.label + " (" + rarityLabel(levelWeaponDropType.rarity) + ").", 2.2);
      }
      pushHint(getEnemyModeConfig().hint, 2.6);
      pushHint("Dificuldade " + getDifficultyLabel() + ": " + getDifficultyConfig().hint, 2.4);
      if (nemesis.enabled) {
        pushHint("Sinal de boss no setor: primeiro vem a trilha de tensão, depois a caçada.", 3);
      }
      if (run.level >= 4) {
        pushHint("Atenção: guardas armados podem atirar se te detectarem.", 2.5);
      }
      initTutorialForLevel();
      saveMidRunSnapshot();
    }

    function getLevelElapsedSec(now) {
      if (mode === MODE_PLAYING) {
        return (now - run.levelStartMs) / 1000;
      }
      return run.levelFreezeSec;
    }

    function startRun(startLevel = 1, opts = {}) {
      ensureAudio();
      applyMenuEnemyModeSelection();
      closeMenu();
      closeSettings();
      resetMobileStartTaps();
      updateMobilePlayGate();

      if (!opts.keepDailyChallenge) run.isDailyChallenge = false;
      run.seedText = resolveSeedForRun();
      seedTxt.textContent = run.seedText;
      resetRunData();
      rollSuperRunVariety();
      const safeStart = clamp(Math.floor(startLevel) || 1, 1, Math.max(1, progress.highestLevel));
      run.level = safeStart;
      progress.lastLevel = Math.max(progress.lastLevel, safeStart);
      saveProgress();
      setupLevel(run.level);
      syncPausePortrait();
      mode = MODE_PLAYING;
      modeTimer = 0;
      pauseBtn.textContent = "Pausar";
      updateMobilePlayGate();
      forceViewportResync();
      syncFullscreenLayout();
      const m = Meta();
      if (m) {
        const prog = m.loadTutorialProgress();
        if (prog && !prog.seenControls) {
          prog.seenControls = true;
          m.saveTutorialProgress(prog);
        }
      }
      sfxClick();
    }

    function onLevelComplete() {
      if (mode !== MODE_PLAYING) return;

      run.levelFreezeSec = getLevelElapsedSec(performance.now());
      recordBestLevelTime(run.level, run.levelFreezeSec);
      unlockLevel(run.level + 1);

      const base = 900 + run.level * 140;
      const timePenalty = run.levelFreezeSec * 12;
      const points = Math.max(260, Math.round((base - timePenalty) * (getDifficultyConfig().scoreMul || 1)));
      const baseCredits = Math.max(55, points * 0.14 + run.level * 12);
      const cleanBonus = run.detected === run.levelStartDetections ? 75 + run.level * 10 : 0;
      const targetTime = Math.max(34, 78 - run.level * 2.5);
      const speedBonus = run.levelFreezeSec <= targetTime ? 65 + run.level * 8 : 0;
      const knifeBonus = run.levelKnifeOnly ? 90 + run.level * 12 : 0;
      const bossBonus = run.levelNemesisDefeated ? 80 + run.level * 12 : 0;
      const creditsEarned = awardCredits(baseCredits + cleanBonus + speedBonus + knifeBonus + bossBonus);
      const creditParts = ["+" + creditsEarned + " créditos"];
      if (cleanBonus > 0) creditParts.push("limpa");
      if (speedBonus > 0) creditParts.push("rapida");
      if (knifeBonus > 0) creditParts.push("so faca");
      if (bossBonus > 0) creditParts.push("boss");

      run.score += points;
      run.cleared += 1;
      checkAchievementsOnLevelClear();
      saveMidRunSnapshot();

      mode = MODE_LEVEL_CLEAR;
      modeTimer = 0;
      statusTxt.textContent = "EXTRAÇÃO CONFIRMADA";
      const best = getBestLevelTime(run.level);
      setHint("Fase concluída em " + formatTime(run.levelFreezeSec) + ". " + creditParts.join(" / ") + ". Melhor: " + formatTime(best || run.levelFreezeSec) + ".");
      sfxSuccess();
    }

    function nextLevel() {
      run.level += 1;
      if (run.level > progress.lastLevel) {
        progress.lastLevel = run.level;
        saveProgress();
      }
      setupLevel(run.level, { preserveLoadout: true });
      mode = MODE_PLAYING;
      modeTimer = 0;
    }

    function onDetected(cause = "melee") {
      if (mode !== MODE_PLAYING) return;

      // Super modos tem barra de vida: empurram inimigos e tomam dano (a menos
      // que estejam usando habilidade de movimento ou laser).
      if (isSuperCharacter()) {
        shakeScreen(4, 0.1);
        for (const g of guards) {
          if (dist(g.x, g.y, player.x, player.y) < player.r + g.r + 6) {
            const ang = angleTo(player.x, player.y, g.x, g.y);
            moveWithCollide(g, g.x + Math.cos(ang) * 16, g.y + Math.sin(ang) * 16);
          }
        }
        damageHomelander(1, cause);
        return;
      }

      if (isOperativeCampaign()) {
        shakeScreen(4, 0.1);
        damageOperative(1, cause);
        return;
      }

      killOperative(cause);
    }

    function killOperative(cause = "melee") {
      run.levelFreezeSec = getLevelElapsedSec(performance.now());
      run.detected += 1;
      if (!hasUnlimitedRespawns()) run.lives = Math.max(0, run.lives - 1);
      player.alive = false;
      player.noise = 0;
      player.vis = 0;
      player.moving = false;
      player.running = false;
      stopLoopingSfx();
      addBloodStain(player.x, player.y, player.dir + Math.PI, 1.85);
      spawnPlayerExplosion();
      shakeScreen(14, 0.38);

      mode = MODE_LEVEL_FAIL;
      modeTimer = 0;
      stealthFeedbackText = cause === "gun" ? "Detectado — tiro inimigo!" : (cause === "nemesis" ? "Detectado — Nemesis!" : "Detectado — combate corpo a corpo!");
      stealthFeedbackT = 2.2;
      statusTxt.textContent = "COMPROMETIDO";
      setHint((hasUnlimitedRespawns() || run.lives > 0) ? "Detectado. Reposicionando na mesma sala..." : "Detectado. Sem vidas restantes.");
      if (cause === "gun") {
        playSfx("gunImpact", 0.9, { rate: 0.82 + Math.random() * 0.08 });
        sfxDeathScream();
      } else if (cause === "zombie") {
        sfxZombieAttack();
        setTimeout(() => sfxDeathScream(), 70);
      } else if (cause === "nemesis") {
        sfxNemesisRoar();
        setTimeout(() => sfxDeathScream(), 70);
      } else if (cause === "clown") {
        sfxClownAlert();
        setTimeout(() => sfxDeathScream(), 80);
      } else {
        sfxKnifeKill();
        sfxFail();
      }
    }

    function homelanderInvulnerable() {
      return player.flying || player.laserActive;
    }

    function healOnSuperPickup() {
      if (!isSuperCharacter() || !player.alive || player.health >= player.maxHealth) return 0;
      const before = player.health;
      player.health = Math.min(player.maxHealth, player.health + SUPER_HEAL_PER_PICKUP);
      return player.health - before;
    }

    function canPickupHealItem() {
      if (!player.alive) return false;
      if (isThorCharacter()) {
        if (player.health < player.maxHealth) return true;
        if (player.berserkT > 0) return false;
        return player.rage < player.rageMax;
      }
      return player.health < player.maxHealth;
    }

    function launchMenuRun() {
      ensureAudio();
      resetMobileStartTaps();
      requestMobileImmersiveMode();
      tryLockLandscapeOrientation();
      applyMenuEnemyModeSelection();
      applyMenuDifficultySelection();
      const selectedLevel = getSelectedMenuLevel();
      startRun(selectedLevel);
      setHint("Run iniciada na fase " + selectedLevel + " (" + getDifficultyConfig().label + ").");
    }

    function drinkMilk() {
      // Supers curam automaticamente ao coletar itens no mapa.
      if (isSuperCharacter()) return;
      if (!player.alive || mode !== MODE_PLAYING) return;
      if (player.throwCooldown <= 0) throwLure();
    }

    function enterThorStorm() {
      if (!isThorCharacter()) return;
      player.rage = 0;
      player.berserkT = THOR_BERSERK_SECONDS + (isSurvivalRun() ? survivalAbilityLevel("basicLightning") * 1.2 : 0);
      player.laserMaxFuel = THOR_BERSERK_LASER_MAX_FUEL;
      player.mjolnirMaxEnergy = THOR_MJOLNIR_STORM_MAX_ENERGY;
      player.flyMaxFuel = THOR_BERSERK_FLY_MAX_FUEL;
      player.laserFuel = player.laserMaxFuel;
      player.mjolnirEnergy = player.mjolnirMaxEnergy;
      player.flyFuel = player.flyMaxFuel;
      shakeScreen(12, 0.35);
      pushHint("Thor entrou em modo tempestade.", 1.2);
      setInteractionFeedback("TEMPESTADE", "warn", 0.9);
      sfxThorStormEnter();
    }

    function addThorLightning(amount) {
      if (!isThorCharacter() || player.berserkT > 0) return;
      const gainMul = isSurvivalRun() ? (1 + survivalAbilityLevel("basicLightning") * 0.12) : 1;
      player.rage = clamp(player.rage + (amount || 0) * gainMul, 0, player.rageMax);
      if (player.rage >= player.rageMax) enterThorStorm();
    }

    function updateThorStorm(dt) {
      if (!isThorCharacter()) return;
      if (player.berserkT > 0) {
        player.berserkT = Math.max(0, player.berserkT - dt);
        player.laserMaxFuel = THOR_BERSERK_LASER_MAX_FUEL;
        player.mjolnirMaxEnergy = THOR_MJOLNIR_STORM_MAX_ENERGY;
        player.flyMaxFuel = THOR_BERSERK_FLY_MAX_FUEL;
        player.thorStormStrikeT -= dt;
        if (player.thorStormStrikeT <= 0) {
          triggerThorStormStrike();
          player.thorStormStrikeT = 0.32 + Math.random() * 0.48;
        }
        if (player.berserkT <= 0) {
          player.laserMaxFuel = THOR_LASER_MAX_FUEL;
          player.mjolnirMaxEnergy = THOR_MJOLNIR_MAX_ENERGY;
          player.flyMaxFuel = THOR_FLY_MAX_FUEL;
          player.laserFuel = Math.min(player.laserFuel, player.laserMaxFuel);
          player.mjolnirEnergy = Math.min(player.mjolnirEnergy, player.mjolnirMaxEnergy);
          player.flyFuel = Math.min(player.flyFuel, player.flyMaxFuel);
          setThorStormLoop(0);
          pushHint("Tempestade encerrada.", 0.8);
        }
      }
    }

    function healThorOnKill() {
      if (!isThorCharacter() || !player.alive) return;
      addThorLightning(THOR_RAGE_PER_KILL);
    }

    function damageOperative(amount, cause) {
      if (!isOperativeCampaign() || !player.alive || mode !== MODE_PLAYING) return;
      if (player.hurtCd > 0) return;
      player.hurtCd = 0.75;
      player.health = Math.max(0, player.health - scaledEnemyDamage(amount));
      shakeScreen(5, 0.16);
      if (!playSfx("gunImpact", 0.45, { rate: 0.75 })) playTone("square", 150, 0.08, 0.05, 90);
      setInteractionFeedback("Vida " + player.health + "/" + player.maxHealth, "warn", 0.5);
      if (player.health <= 0) killOperative(cause);
    }

    function damageHomelander(amount, cause) {
      if (!isSuperCharacter() || !player.alive || mode !== MODE_PLAYING) return;
      // Invulneravel durante movimento especial e durante o uso do laser.
      if (homelanderInvulnerable()) return;
      if (player.hurtCd > 0) return;
      player.hurtCd = 0.75;
      const armorMul = isSurvivalRun() ? Math.max(0.35, 1 - (survival.stats.armor || 0)) : 1;
      player.health = Math.max(0, player.health - scaledEnemyDamage(amount) * armorMul);
      shakeScreen(7, 0.2);
      if (!playSfx("gunImpact", 0.5, { rate: 0.7 })) playTone("square", 150, 0.08, 0.05, 90);
      setInteractionFeedback("Vida " + player.health + "/" + player.maxHealth, "warn", 0.5);
      if (player.health <= 0) killHomelander(cause);
    }

    function killHomelander(cause) {
      run.levelFreezeSec = getLevelElapsedSec(performance.now());
      run.detected += 1;
      if (!hasUnlimitedRespawns()) run.lives = Math.max(0, run.lives - 1);
      player.alive = false;
      player.flying = false;
      player.laserActive = false;
      player.noise = 0;
      player.vis = 0;
      player.moving = false;
      player.running = false;
      setSuperLaserLoop(0);
      setLoopingSfx("fly", 0);
      stopLoopingSfx();
      // Homelander morre EXPLODINDO.
      addBloodStain(player.x, player.y, player.dir, 2.4);
      spawnExplosionAt(player.x, player.y, {
        clear: false,
        count: 90,
        speedMin: 130,
        speedRange: 380,
        sizeMin: 2,
        sizeRange: 6.5,
        palette: ["#ffffff", "#ffe14a", "#ff8f3a", "#ff5555", "#caa36a", "#b3161a"]
      });
      addScorch(player.x, player.y, 30);
      shakeScreen(30, 0.75);
      if (!playSfx("gunImpact", 1, { rate: 0.5 })) playTone("sawtooth", 70, 0.3, 0.14, 40);
      sfxDeathScream();
      mode = MODE_LEVEL_FAIL;
      modeTimer = 0;
      statusTxt.textContent = "ABATIDO";
      const fallenName = superCharacterName();
      setHint((hasUnlimitedRespawns() || run.lives > 0) ? (fallenName + " caiu e explodiu. Reposicionando...") : (fallenName + " caiu. Run encerrada."));
    }

    function finalizeRun() {
      if (!run.scoreRecorded) {
        recordRunScore();
        run.scoreRecorded = true;
      }
      if (isSurvivalRun()) {
        checkSurvivorAchievements();
        survivorStatsOverlayT = 4.5;
      }
      const m = Meta();
      if (m) m.saveMidRunSave(null);
      run.active = false;
      fx.shards.length = 0;
      fx.slashes.length = 0;
      fx.alerts.length = 0;
      stopLoopingSfx();
      stopMusicLoop();
      mode = MODE_RUN_OVER;
      modeTimer = 0;
      openMenu();
    }

    function togglePause() {
      if (mode === MODE_PLAYING) {
        run.levelFreezeSec = getLevelElapsedSec(performance.now());
        mode = MODE_PAUSED;
        modeTimer = 0;
        pauseBtn.textContent = "Retomar";
        statusTxt.textContent = "PAUSADO";
        stopLoopingSfx();
        setHint("Jogo pausado. Pressione P, Esc ou botão Retomar.");
        sfxClick();
      } else if (mode === MODE_PAUSED) {
        mode = MODE_PLAYING;
        modeTimer = 0;
        run.levelStartMs = performance.now() - run.levelFreezeSec * 1000;
        pauseBtn.textContent = "Pausar";
        statusTxt.textContent = "INFILTRANDO";
        setHint("Retomado. Continue a infiltração.");
        forceViewportResync();
        sfxClick();
      }
    }

    function moveWithCollide(ent, nx, ny) {
      const r = ent.r;
      const ox = ent.x;
      const oy = ent.y;

      let x = nx;
      let y = ent.y;
      if (isWall(x - r, y - r) || isWall(x + r, y - r) || isWall(x - r, y + r) || isWall(x + r, y + r)) {
        x = ent.x;
      }

      y = ny;
      if (isWall(x - r, y - r) || isWall(x + r, y - r) || isWall(x - r, y + r) || isWall(x + r, y + r)) {
        y = ent.y;
      }

      ent.x = x;
      ent.y = y;
      return Math.hypot(ent.x - ox, ent.y - oy);
    }

    function rayBlocked(x0, y0, x1, y1) {
      const dx = x1 - x0;
      const dy = y1 - y0;
      const d = Math.hypot(dx, dy);
      if (d < 0.001) return false;

      const steps = Math.max(1, Math.ceil(d / (TILE / 4)));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = x0 + dx * t;
        const y = y0 + dy * t;
        if (isWall(x, y)) return true;
      }

      return false;
    }

    function rayEndBeforeWall(x0, y0, dir, maxDist) {
      const ux = Math.cos(dir);
      const uy = Math.sin(dir);
      const steps = Math.max(1, Math.ceil(maxDist / (TILE / 5)));
      let lastX = x0;
      let lastY = y0;

      for (let i = 1; i <= steps; i++) {
        const d = (maxDist * i) / steps;
        const x = x0 + ux * d;
        const y = y0 + uy * d;
        if (isWall(x, y)) return { x: lastX, y: lastY };
        lastX = x;
        lastY = y;
      }

      return { x: x0 + ux * maxDist, y: y0 + uy * maxDist };
    }

    function rayBlockedByMap(x0, y0, x1, y1) {
      const dx = x1 - x0;
      const dy = y1 - y0;
      const d = Math.hypot(dx, dy);
      if (d < 0.001) return false;

      const steps = Math.max(1, Math.ceil(d / (TILE / 4)));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = x0 + dx * t;
        const y = y0 + dy * t;
        if (cellBlocksMovement(cellAt(x, y))) return true;
      }

      return false;
    }

    function rayEndBeforeMapBlock(x0, y0, dir, maxDist) {
      const ux = Math.cos(dir);
      const uy = Math.sin(dir);
      const steps = Math.max(1, Math.ceil(maxDist / (TILE / 5)));
      let lastX = x0;
      let lastY = y0;

      for (let i = 1; i <= steps; i++) {
        const d = (maxDist * i) / steps;
        const x = x0 + ux * d;
        const y = y0 + uy * d;
        if (cellBlocksMovement(cellAt(x, y))) return { x: lastX, y: lastY };
        lastX = x;
        lastY = y;
      }

      return { x: x0 + ux * maxDist, y: y0 + uy * maxDist };
    }

    function broadcastNoise(x, y, radius, strength, source = "GENERIC") {
      for (const g of guards) {
        const d = dist(x, y, g.x, g.y);
        const effectiveRadius = Math.min(radius, g.hearDist);
        if (d > effectiveRadius || rayBlocked(x, y, g.x, g.y)) continue;

        const gain = (1 - d / effectiveRadius) * clamp(strength, 0, 1);
        if (gain <= 0.1) continue;
        if (g.state === "ALERT" && gain < 0.55) continue;

        g.state = "SUSPICIOUS";
        g.target = { x, y, source };
        g.stateT = 0;
        g.pauseT = 0;
        g.lureHoldT = 0;
        g.suspicion = clamp(g.suspicion + gain, 0, 1);
      }
    }

    function shakeScreen(strength, duration) {
      if (Meta() && Meta().prefersReducedMotion()) {
        screenShake.strength = Math.min(strength, 2);
        screenShake.duration = Math.min(duration, 0.06);
        screenShake.t = Math.min(duration, 0.06);
        return;
      }
      screenShake.strength = Math.max(screenShake.strength, strength);
      screenShake.duration = Math.max(screenShake.duration, duration);
      screenShake.t = Math.max(screenShake.t, duration);
    }

    function updateScreenShake(dt) {
      if (screenShake.t <= 0) {
        screenShake.x = 0;
        screenShake.y = 0;
        screenShake.duration = 0;
        screenShake.strength = 0;
        return;
      }

      screenShake.t = Math.max(0, screenShake.t - dt);
      const k = screenShake.duration > 0 ? screenShake.t / screenShake.duration : 0;
      const amp = screenShake.strength * k * k;
      screenShake.x = (Math.random() * 2 - 1) * amp;
      screenShake.y = (Math.random() * 2 - 1) * amp;
      if (screenShake.t <= 0) {
        screenShake.x = 0;
        screenShake.y = 0;
      }
    }

    function addBloodStain(x, y, dir = 0, intensity = 1) {
      const drops = [];
      const count = 10 + Math.floor(12 * clamp(intensity, 0.5, 1.8));
      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * Math.PI * 1.5;
        const a = dir + spread;
        const d = 5 + Math.random() * (24 + 16 * intensity);
        drops.push({
          x: Math.cos(a) * d + (Math.random() - 0.5) * 9,
          y: Math.sin(a) * d + (Math.random() - 0.5) * 9,
          rx: 2.2 + Math.random() * 6.2 * intensity,
          ry: 1.6 + Math.random() * 4.8 * intensity,
          rot: Math.random() * Math.PI,
          alpha: 0.42 + Math.random() * 0.42
        });
      }

      fx.blood.push({
        x,
        y,
        rot: Math.random() * Math.PI,
        scale: 0.95 + Math.random() * 0.55 * intensity,
        alpha: 0.9,
        intensity: clamp(intensity, 0.5, 2),
        drops
      });

      while (fx.blood.length > 42) fx.blood.shift();
    }

    function throwLure() {
      lures.push({
        x: player.x,
        y: player.y,
        vx: Math.cos(player.dir) * 420,
        vy: Math.sin(player.dir) * 420,
        ttl: 4.8,
        noiseRadius: 300,
        landed: false
      });
      sfxLure();
    }

    function findGuardInShotLine(maxDist, laneRadius) {
      const aimDir = getPlayerAimDir();
      const ux = Math.cos(aimDir);
      const uy = Math.sin(aimDir);
      let bestGuard = null;
      let bestForward = Infinity;

      for (const g of guards) {
        const dx = g.x - player.x;
        const dy = g.y - player.y;
        const forward = dx * ux + dy * uy;
        if (forward < 4 || forward > maxDist || forward >= bestForward) continue;

        const side = Math.abs(dx * (-uy) + dy * ux);
        if (side > laneRadius) continue;
        if (rayBlocked(player.x, player.y, g.x, g.y)) continue;

        bestGuard = g;
        bestForward = forward;
      }

      return bestGuard;
    }

    function findGuardsInShotCone(maxDist, laneRadius, maxTargets = 1) {
      const aimDir = getPlayerAimDir();
      const ux = Math.cos(aimDir);
      const uy = Math.sin(aimDir);
      const hits = [];

      for (const g of guards) {
        const dx = g.x - player.x;
        const dy = g.y - player.y;
        const forward = dx * ux + dy * uy;
        if (forward < 4 || forward > maxDist) continue;

        const side = Math.abs(dx * (-uy) + dy * ux);
        const widened = laneRadius + forward * 0.045;
        if (side > widened) continue;
        if (rayBlocked(player.x, player.y, g.x, g.y)) continue;
        hits.push({ guard: g, forward });
      }

      hits.sort((a, b) => a.forward - b.forward);
      return hits.slice(0, Math.max(1, maxTargets | 0)).map((hit) => hit.guard);
    }

    function findGuardsInMeleeArc(maxDist, laneRadius) {
      const aimDir = getPlayerAimDir();
      const ux = Math.cos(aimDir);
      const uy = Math.sin(aimDir);
      const hits = [];

      for (const g of guards) {
        const dx = g.x - player.x;
        const dy = g.y - player.y;
        const forward = dx * ux + dy * uy;
        if (forward < 5 || forward > maxDist) continue;

        const side = Math.abs(dx * (-uy) + dy * ux);
        const widened = laneRadius + forward * 0.1;
        if (side > widened) continue;
        if (rayBlocked(player.x, player.y, g.x, g.y)) continue;

        hits.push({ guard: g, forward });
      }

      hits.sort((a, b) => a.forward - b.forward);
      return hits.map((hit) => hit.guard);
    }

    function shoveGuard(g, distance, stunSec) {
      if (!g) return;
      const ang = angleTo(player.x, player.y, g.x, g.y);
      const pushDist = distance || 28;
      moveWithCollide(g, g.x + Math.cos(ang) * pushDist, g.y + Math.sin(ang) * pushDist);
      g.sleepT = Math.max(g.sleepT || 0, stunSec || 1.5);
      g.visionDebuffT = Math.max(g.visionDebuffT || 0, (stunSec || 1.5) + 0.7);
      g.state = "SUSPICIOUS";
      g.stateT = 0;
      g.suspicion = Math.max(0, (g.suspicion || 0) - 0.25);
      g.target = { x: player.x, y: player.y, source: "PUNCH" };
    }

    function removeGuard(g) {
      const idx = guards.indexOf(g);
      if (idx >= 0) guards.splice(idx, 1);
    }

    function pickCoverPosition(g) {
      const away = angleTo(g.x, g.y, player.x, player.y) + Math.PI + (rand() - 0.5) * 0.8;
      const dists = [TILE * 2.2, TILE * 3.4, TILE * 4.6];
      for (const d of dists) {
        const tx = g.x + Math.cos(away) * d;
        const ty = g.y + Math.sin(away) * d;
        if (!isWall(tx, ty) && !isWall(tx + g.r, ty) && !isWall(tx - g.r, ty)) {
          return { x: tx, y: ty };
        }
      }
      return { x: g.x + Math.cos(away) * TILE * 2, y: g.y + Math.sin(away) * TILE * 2 };
    }

    function guardsReactToIncomingFire(hitGuard) {
      const othersAlerted = guards.some((g) => g !== hitGuard && (g.state === "ALERT" || (g.state === "SUSPICIOUS" && g.target && g.target.source !== "SHOT")));

      for (const g of guards) {
        if (g === hitGuard) continue;
        const d = dist(g.x, g.y, player.x, player.y);
        if (d > 340) continue;

        const sees = guardSeesPlayer(g);
        if (sees && g.armed && g.state === "ALERT") continue;

        if (isMeleeEnemyKind(g.kind)) {
          if (d < 260) {
            g.state = "ALERT";
            g.target = { x: player.x, y: player.y, source: "SHOT" };
            g.stateT = 0;
          }
          continue;
        }

        const isFirst = !othersAlerted;
        const hideChance = isFirst ? 0.24 : 0.58;

        if (!sees && g.state !== "ALERT" && Math.random() < hideChance) {
          g.state = "COVER";
          g.stateT = 0;
          g.coverTarget = pickCoverPosition(g);
          g.pauseT = 0;
        } else if (g.state === "PATROL" && Math.random() < (isFirst ? 0.82 : 0.55)) {
          g.state = "SUSPICIOUS";
          g.target = { x: player.x, y: player.y, source: "SHOT" };
          g.stateT = 0;
        }
      }
    }

    function guardShoot(g) {
      if (g.shootCooldown > 0 || g.ammo <= 0) return;
      if ((g.shootWindup || 0) > 0) return;

      g.shootCooldown = 0.85 + rand() * 0.35;
      g.ammo = Math.max(0, g.ammo - 1);
      g.muzzleFlashT = 0.08;
      g.dir = angleTo(g.x, g.y, player.x, player.y);

      const maxDist = 270;
      const hitPlayer = guardSeesPlayer(g) && !rayBlocked(g.x, g.y, player.x, player.y) &&
        dist(g.x, g.y, player.x, player.y) <= maxDist;

      sfxGunshot(hitPlayer, { soundProfile: "guard" });
      shakeScreen(hitPlayer ? 10 : 4, hitPlayer ? 0.22 : 0.08);

      const tracerEnd = hitPlayer
        ? { x: player.x, y: player.y }
        : rayEndBeforeWall(g.x, g.y, g.dir, maxDist);
      fx.traces.push({
        x0: g.x,
        y0: g.y,
        x1: tracerEnd.x,
        y1: tracerEnd.y,
        life: 0.08,
        maxLife: 0.08,
        color: "255,155,118",
        width: 2
      });

      broadcastNoise(g.x, g.y, 320, 0.95, "GUARD_SHOT");

      if (hitPlayer) {
        addBloodStain(player.x, player.y, g.dir, 1.4);
        if (isSuperCharacter()) damageHomelander(2, "gun");
        else if (isOperativeCampaign()) damageOperative(2, "gun");
        else onDetected("gun");
      }
    }

    function tryAutoPickupCollectibles() {
      if (!item.taken && dist(player.x, player.y, item.x, item.y) < 22) {
        item.taken = true;
        player.carrying = true;
        sfxPickup("dossier");
        updateMissionHint();
        setInteractionFeedback("Dossiê coletado", "ok", 0.55);
      }

      if (milks.length) {
        for (const m of milks) {
          const pickupRadius = isSurvivalRun() ? 22 + 42 * (survival.stats.magnet || 1) : 22;
          if (!m.taken && dist(player.x, player.y, m.x, m.y) < pickupRadius) {
            if (!canPickupHealItem()) continue;
            m.taken = true;
            run.score += 50;
            grantSurvivalXp(10 + survival.level * 0.6, m.x, m.y);
            if (isThorCharacter()) {
              addThorLightning(THOR_RAGE_PER_PICKUP);
              if (player.health < player.maxHealth) {
                player.health = Math.min(player.maxHealth, player.health + THOR_HEAL_PER_PICKUP);
              }
              sfxPickup();
              setInteractionFeedback(
                superHealItemLabel() +
                  (player.health < player.maxHealth ? " +" + THOR_HEAL_PER_PICKUP + " vida" : " (carga elétrica)") +
                  " (" + player.health + "/" + player.maxHealth + ")",
                "ok",
                0.45
              );
            } else {
              const healed = healOnSuperPickup();
              sfxPickup();
              setInteractionFeedback(
                superHealItemLabel() + (healed > 0 ? " +" + healed + " vida" : "") +
                  " (" + player.health + "/" + player.maxHealth + ")",
                "ok",
                0.45
              );
            }
          }
        }
      }

      if (hearts.length) {
        for (const h of hearts) {
          if (!h.taken && dist(player.x, player.y, h.x, h.y) < 22) {
            if (player.health >= player.maxHealth) continue;
            h.taken = true;
            run.score += 40;
            player.health = Math.min(player.maxHealth, player.health + OPERATIVE_HEAL_PER_HEART);
            sfxPickup();
            setInteractionFeedback(
              "Coração +" + OPERATIVE_HEAL_PER_HEART + " vida (" + player.health + "/" + player.maxHealth + ")",
              "ok",
              0.45
            );
          }
        }
      }
    }

    function nearestDoorInteraction() {
      let best = null;
      for (const door of levelDoors) {
        if (door.broken) continue;
        const center = doorCenterWorld(door);
        const d = dist(player.x, player.y, center.x, center.y);
        if (d > 52) continue;
        if (!best || d < best.d) best = { door, d, wx: center.x, wy: center.y };
      }
      return best;
    }

    function nearestPropInteraction() {
      let best = null;
      for (const p of mapProps) {
        if (!p.loot || p.searched) continue;
        const d = dist(player.x, player.y, p.x, p.y);
        if (d > 34) continue;
        if (!best || d < best.d) best = { prop: p, d };
      }
      return best;
    }

    function nearestInteraction() {
      let best = null;
      function consider(kind, x, y, radius, label, extra) {
        const d = dist(player.x, player.y, x, y);
        if (d > radius) return;
        if (!best || d < best.d) best = Object.assign({ kind, x, y, d, label }, extra || {});
      }

      const doorHit = nearestDoorInteraction();
      if (doorHit) {
        const label = doorHit.door.open ? "USAR: fechar porta" : "USAR: abrir porta";
        consider("door", doorHit.wx, doorHit.wy, 40, label, { door: doorHit.door });
      }

      const propHit = nearestPropInteraction();
      if (propHit) {
        consider("prop", propHit.prop.x, propHit.prop.y, 34, "USAR: vasculhar", { prop: propHit.prop });
      }

      // Homelander nao usa armas nem munição: ignora esses coletaveis.
      for (const loot of lootCaches) {
        if (!loot.available) continue;
        if (loot.kind === "nemesis") {
          consider("loot", loot.x, loot.y, 38, "USAR: recompensa do Nemesis", { loot });
          continue;
        }
        if (!isSuperCharacter()) {
          consider("loot", loot.x, loot.y, 32, "USAR: pegar munição (" + loot.amount + ")", { loot });
        }
      }

      if (!isSuperCharacter()) {
        if (weaponDrop.available) {
          const wt = getWeaponDropType();
          consider("weapon", weaponDrop.x, weaponDrop.y, 34, "USAR: pegar " + (wt ? wt.label : "arma"));
        }
        if (grenadeLauncherDrop.available) {
          consider("grenade", grenadeLauncherDrop.x, grenadeLauncherDrop.y, 36, "USAR: pegar " + GRENADE_LAUNCHER.label);
        }
        if (ammoMagDrop.available) {
          const ownsWeapon = hasAnyWeapon();
          consider("ammo", ammoMagDrop.x, ammoMagDrop.y, 32, ownsWeapon ? "USAR: pegar pente" : "Precisa de arma");
        }
      }
      return best;
    }

    function dropReplacedWeapon(slot) {
      if (!slot || !slot.weapon) return;
      weaponDrop.x = player.x + Math.cos(player.dir + Math.PI) * 16;
      weaponDrop.y = player.y + Math.sin(player.dir + Math.PI) * 16;
      weaponDrop.available = true;
      weaponDrop.weaponType = cloneWeaponType(slot.weapon);
    }

    function pickupWeaponFromGround(wt, feedbackLabel) {
      const result = giveWeapon(wt);
      run.levelKnifeOnly = false;
      if (result.replaced) dropReplacedWeapon(result.replaced);
      sfxPickup("weapon");
      const slotText = "W" + (result.index + 1);
      setInteractionFeedback(slotText + " " + currentWeaponType.label + " equipada", "ok", 0.75);
      pushHint((feedbackLabel || "Arma equipada") + ". X alterna faca, W1 e W2; F troca o slot ativo.", 1.5);
      if (wt && wt.id === "silencer") pushHint("Silenciador: tiros discretos, menos alerta global.", 2);
      else if (wt && wt.id === "tranq") pushHint("Tranq: neutraliza sem matar — ideal para stealth.", 2);
      else if (wt && wt.noiseMul > 0.65) pushHint("Arma barulhenta: pode alertar guardas distantes.", 2);
    }

    function tryUseInteraction() {
      const inter = nearestInteraction();
      if (!inter) {
        setInteractionFeedback("Nada para usar", "fail", 0.35);
        return false;
      }

      if (inter.kind === "weapon") {
        const wt = getWeaponDropType();
        weaponDrop.available = false;
        weaponDrop.weaponType = null;
        pickupWeaponFromGround(wt, wt ? (wt.label + " " + rarityLabel(wt.rarity)) : "Arma do mapa");
        return true;
      }

      if (inter.kind === "grenade") {
        grenadeLauncherDrop.available = false;
        run.grenadeLauncherCollected = true;
        pickupWeaponFromGround(GRENADE_LAUNCHER, "Lança-granadas");
        pushHint("Lança-granadas: dano alto, explosão e stun forte no Nemesis.", 1.3);
        return true;
      }

      if (inter.kind === "ammo") {
        const added = addAmmoToBestWeapon(ammoMagDrop.amount);
        if (added <= 0) {
          setInteractionFeedback("Precisa de arma", "fail", 0.45);
          return false;
        }
        ammoMagDrop.available = false;
        sfxPickup("ammo");
        setInteractionFeedback("+1 pente W" + (player.activeWeaponIndex + 1), "ok", 0.55);
        return true;
      }

        if (inter.kind === "door" && inter.door) {
        const door = inter.door;
        if (door.open) {
          closeDoor(door);
          setInteractionFeedback("Porta fechada", "ok", 0.45);
        } else {
          openDoor(door, false);
          setInteractionFeedback("Porta aberta", "ok", 0.45);
        }
        return true;
      }

      if (inter.kind === "prop" && inter.prop) {
        const p = inter.prop;
        if (p.searched || !p.loot) {
          setInteractionFeedback("Nada útil aqui", "fail", 0.35);
          return false;
        }
        p.searched = true;
        const added = addAmmoToBestWeapon(2 + randInt(0, 2));
        sfxPickup("ammo");
        if (added > 0) {
          setInteractionFeedback("+" + added + " munição reserva", "ok", 0.55);
        } else {
          setInteractionFeedback("Munição encontrada, mas sem arma", "fail", 0.45);
        }
        run.score += 18;
        return true;
      }

      if (inter.kind === "loot") {
        const loot = inter.loot;
        if (!loot || !loot.available) return false;
        if (loot.kind === "nemesis") {
          loot.available = false;
          const creditsGain = awardCredits(loot.credits || 0);
          let feedback = "+" + creditsGain + " créditos";
          if (isSuperCharacter()) {
            if (isThorCharacter()) {
              addThorLightning(THOR_RAGE_PER_PICKUP * 2);
              if (player.health < player.maxHealth) {
                player.health = Math.min(player.maxHealth, player.health + THOR_HEAL_PER_PICKUP * 2);
              }
              sfxPickup();
            } else {
              let healed = healOnSuperPickup();
              if (player.health < player.maxHealth) healed += healOnSuperPickup();
              if (healed > 0) feedback += ", +" + healed + " vida";
            }
            sfxPickup();
          } else {
            const added = addAmmoToBestWeapon(loot.amount || 0);
            if (added > 0) feedback += ", +" + added + " munição";
            sfxPickup("ammo");
            run.score += 48;
          }
          setInteractionFeedback("Recompensa do Nemesis: " + feedback, "ok", 0.85);
          pushHint("Recompensa do Nemesis coletada.", 1.1);
          return true;
        }
        const added = addAmmoToBestWeapon(loot.amount);
        if (added <= 0) {
          setInteractionFeedback("Precisa de arma", "fail", 0.45);
          return false;
        }
        loot.available = false;
        sfxPickup("ammo");
        setInteractionFeedback("+" + added + " munição reserva", "ok", 0.55);
        run.score += 24;
        return true;
      }

      return false;
    }

    function touchInteractShortLabel(inter) {
      if (!inter) return TOUCH_LABELS.use;
      if (inter.kind === "door") return inter.door && inter.door.open ? "Fechar" : "Porta";
      if (inter.kind === "prop") return "Vasculhar";
      if (inter.kind === "loot" || inter.kind === "ammo") return "Munição";
      if (inter.kind === "weapon") return "Arma";
      if (inter.kind === "grenade") return "L.Gran";
      return TOUCH_LABELS.use;
    }

    function updateInteractionPrompt() {
      const inter = nearestInteraction();
      uiFeedback.prompt = inter ? inter.label : "";
    }

    function spawnPunchEffect(hit) {
      const dir = getPlayerAimDir();
      const reach = hit ? 26 : 22;
      const x = player.x + Math.cos(dir) * reach;
      const y = player.y + Math.sin(dir) * reach;
      const particles = [];
      const count = hit ? 9 : 5;

      for (let i = 0; i < count; i++) {
        const spread = (Math.random() - 0.5) * 0.95;
        const a = dir + spread;
        const speed = 80 + Math.random() * (hit ? 150 : 80);
        particles.push({
          x: Math.cos(a) * (4 + Math.random() * 5),
          y: Math.sin(a) * (4 + Math.random() * 5),
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed,
          size: 1.5 + Math.random() * (hit ? 3.5 : 2),
          rot: Math.random() * Math.PI,
          spin: (Math.random() - 0.5) * 10
        });
      }

      fx.punches.push({
        x,
        y,
        dir,
        hit: !!hit,
        life: 0.52,
        maxLife: 0.52,
        particles
      });

      while (fx.punches.length > 8) fx.punches.shift();
    }

    function spawnMeleeArcEffect(kind, hit, range, width) {
      const color = kind === "knife" ? "220,250,255" : "255,210,150";
      fx.slashes.push({
        x: player.x,
        y: player.y,
        dir: getPlayerAimDir(),
        kind,
        hit: !!hit,
        range: range || 44,
        width: width || Math.PI * 0.42,
        color,
        life: kind === "knife" ? 0.18 : 0.14,
        maxLife: kind === "knife" ? 0.18 : 0.14
      });
      while (fx.slashes.length > 8) fx.slashes.shift();
    }

    function getEnemyMeleeWindup(g) {
      if (isNemesisKind(g.kind)) return 0.38;
      if (isClownKind(g.kind)) return 0.28;
      if (isZombieKind(g.kind)) return 0.34;
      return 0.22;
    }

    function getEnemyMeleeCooldown(g) {
      if (isNemesisKind(g.kind)) return 0.95;
      if (isClownKind(g.kind)) return 0.82;
      if (isZombieKind(g.kind)) return 0.74;
      return 0.65;
    }

    function getEnemyMeleeReach(g) {
      if (isNemesisKind(g.kind)) return 8;
      if (isClownKind(g.kind)) return 5;
      if (isZombieKind(g.kind)) return 4;
      return 2;
    }

    function spawnEnemyMeleeEffect(g, hit) {
      const dir = angleTo(g.x, g.y, player.x, player.y);
      const kind = g.kind || "agent";
      const slashKind = isNemesisKind(kind) ? "nemesis" : (isZombieKind(kind) ? "bite" : (isClownKind(kind) ? "stab" : "punch"));
      const color = isNemesisKind(kind) ? "150,28,36" : (isZombieKind(kind) ? "190,42,42" : (isClownKind(kind) ? "255,70,130" : "255,210,150"));
      const range = isNemesisKind(kind) ? 54 : (isClownKind(kind) ? 46 : 40);
      fx.slashes.push({
        x: g.x,
        y: g.y,
        dir,
        kind: slashKind,
        hit: !!hit,
        range,
        width: isNemesisKind(kind) ? Math.PI * 0.62 : Math.PI * 0.48,
        color,
        life: 0.2,
        maxLife: 0.2
      });
      while (fx.slashes.length > 12) fx.slashes.shift();
    }

    function applyEnemyMeleeDamage(g) {
      const cause = isMeleeEnemyKind(g.kind) ? g.kind : "melee";
      const ang = angleTo(player.x, player.y, g.x, g.y);
      moveWithCollide(g, g.x + Math.cos(ang) * 10, g.y + Math.sin(ang) * 10);
      addBloodStain(player.x, player.y, ang + Math.PI, 0.55);
      const dmg = scaledEnemyDamage(isNemesisKind(g.kind) ? 2 : 1);
      if (isSuperCharacter()) damageHomelander(dmg, cause);
      else if (isOperativeCampaign()) damageOperative(dmg, cause);
      else {
        onDetected(cause);
        return true;
      }
      return false;
    }

    function tryEnemyMeleeAttack(g, dt, dPlayer) {
      if (!isMeleeEnemyKind(g.kind) || g.sleepT > 0) return false;
      g.meleeCd = Math.max(0, (g.meleeCd || 0) - dt);
      const reach = player.r + g.r + getEnemyMeleeReach(g);

      if ((g.meleeWindup || 0) > 0) {
        g.meleeWindup = Math.max(0, g.meleeWindup - dt);
        g.dir = angleTo(g.x, g.y, player.x, player.y);
        if (g.meleeWindup <= 0) {
          g.meleeCd = getEnemyMeleeCooldown(g);
          const hit = dPlayer < reach + 6 && !rayBlocked(g.x, g.y, player.x, player.y);
          spawnEnemyMeleeEffect(g, hit);
          if (hit) {
            sfxEnemyMeleeHit(g);
            return applyEnemyMeleeDamage(g);
          }
        }
        return true;
      }

      if (dPlayer < reach + 14 && g.meleeCd <= 0 && !rayBlocked(g.x, g.y, player.x, player.y)) {
        g.meleeWindup = getEnemyMeleeWindup(g);
        g.dir = angleTo(g.x, g.y, player.x, player.y);
        sfxEnemyMeleeWindup(g);
        return true;
      }
      return false;
    }

    function calcNemesisMaxHp() {
      const base = 34 + Math.min(40, Math.floor(run.level * 4.2));
      return base * campaignEnemyHpMul();
    }

    function weaponDamageAgainstGuard(wt, g) {
      if (!wt) return 1;
      if (wt.grenade) return wt.damage || 4.8;
      let damage = wt.damage || 1;
      if (isZombieKind(g.kind) && wt.id === "shotgun") damage += 0.45;
      if (isClownKind(g.kind) && wt.id === "smg") damage *= 0.86;
      if (g.state === "SLEEP" || g.sleepT > 0) damage *= 1.12;
      return damage;
    }

    function weaponDamageAgainstNemesis(wt) {
      if (!wt) return 1;
      if (wt.grenade) return 6.8;
      if (wt.id === "shotgun") return 3.2;
      if (wt.id === "sniper") return 3.5;
      if (wt.id === "rifle") return 2.8;
      if (wt.id === "revolver" || wt.id === "burst") return 2.1;
      if (wt.id === "plasma") return 2.4;
      if (wt.id === "laser") return 1.7;
      if (wt.id === "smg") return 0.85;
      if (wt.tranquilizer) return 0.5;
      return wt.damage || 1;
    }

    function killGuard(g, scoreBase = null) {
      addBloodStain(g.x, g.y, getPlayerAimDir(), (isZombieKind(g.kind) ? 0.72 : 0.62) * DEATH_GORE_SCALE);
      spawnGuardDeathExplosion(g.x, g.y);
      if (isZombieKind(g.kind)) sfxZombieDeath();
      else if (isClownKind(g.kind)) sfxClownDeath();
      else sfxDeathScream();
      removeGuard(g);
      run.score += (scoreBase || (isMeleeEnemyKind(g.kind) ? 140 : 180)) + run.level * 14;
      grantSurvivalXp((isNemesisKind(g.kind) ? 55 : (isClownKind(g.kind) ? 4 : (isZombieKind(g.kind) ? 3 : 3.5))) * (g.leader ? 2.4 : 1), g.x, g.y);
      healThorOnKill();
      setInteractionFeedback(enemyName(g.kind) + " abatido", "ok", 0.55);
      pushHint(enemyThreatName(g.kind) + " neutralizado.", 0.6);
    }

    function damageGuardWithWeapon(g, wt) {
      if (!g) return false;
      if (isNemesisKind(g.kind)) {
        return damageNemesis(g, weaponDamageAgainstNemesis(wt), {
          stunSec: wt && wt.tranquilizer ? 1.8 : 0.95
        });
      }

      const maxHp = g.maxHp || (isZombieKind(g.kind) ? 1.75 : (isClownKind(g.kind) ? 1.25 : 1));
      g.maxHp = maxHp;
      g.hp = Math.max(0, (Number.isFinite(g.hp) ? g.hp : maxHp) - weaponDamageAgainstGuard(wt, g));
      addBloodStain(g.x, g.y, getPlayerAimDir(), 0.74);
      if (g.hp <= 0) {
        killGuard(g);
        return true;
      }

      g.state = "ALERT";
      g.lastSeen = { x: player.x, y: player.y, t: 0 };
      g.target = { x: player.x, y: player.y, source: "WOUNDED" };
      g.visionDebuffT = Math.max(g.visionDebuffT || 0, 0.35);
      triggerEnemyAlertAbility(g);
      setInteractionFeedback(enemyName(g.kind) + " ferido " + Math.ceil(g.hp * 10) / 10 + "/" + g.maxHp, "ok", 0.55);
      return false;
    }

    function defeatNemesis(g) {
      if (!g || !isNemesisKind(g.kind)) return;
      const nx = g.x;
      const ny = g.y;
      const deathDir = getPlayerAimDir();
      spawnNemesisDeathExplosion(nx, ny, deathDir);
      spawnNemesisReward(nx, ny);
      sfxNemesisRoar();
      removeGuard(g);
      const scoreGain = 650 + run.level * 80;
      const creditsGain = awardCredits(180 + run.level * 28);
      grantSurvivalXp(90 + survival.level * 2, nx, ny);
      run.levelNemesisDefeated = true;
      nemesis.warned = false;
      nemesis.chaseLocked = false;
      run.score += scoreGain;
      healThorOnKill();
      setInteractionFeedback("Nemesis derrotado", "ok", 0.9);
      pushHint("Boss derrotado. +" + creditsGain + " créditos extras.", 2.2);
      syncMusicState();
    }

    function spawnNemesisDeathExplosion(x, y, dir) {
      addBloodStain(x, y, dir, 2.8);
      addBloodSpray(x, y, dir, 2.6);
      spawnRealisticDeathGore(x, y, dir);
      spawnExplosionAt(x, y, {
        clear: false,
        count: 28,
        speedMin: 90,
        speedRange: 260,
        sizeMin: 2.2,
        sizeRange: 6.5,
        palette: ["#b3161a", "#8a0f12", "#ff6a20", "#ffae4f", "#5c0a0c", "#3a2a18"]
      });
      for (let i = 0; i < 7; i++) {
        spawnFire(
          x + (Math.random() - 0.5) * 28,
          y + (Math.random() - 0.5) * 22,
          1.35 + Math.random() * 0.55
        );
      }
      addScorch(x, y, 22);
      shakeScreen(24, 0.62);
    }

    function spawnNemesisReward(x, y) {
      lootCaches.push({
        x,
        y,
        amount: clamp(6 + Math.floor(run.level / 2), 6, 14),
        credits: 80 + run.level * 15,
        available: true,
        kind: "nemesis",
        bob: Math.random() * Math.PI * 2
      });
    }

    function damageNemesis(g, amount, opts = {}) {
      if (!g || !isNemesisKind(g.kind)) return false;
      const maxHp = g.maxHp || calcNemesisMaxHp();
      g.maxHp = maxHp;

      g.hp = Math.max(0, (Number.isFinite(g.hp) ? g.hp : maxHp) - Math.max(0, amount || 0));
      addBloodStain(g.x, g.y, getPlayerAimDir(), opts.strong ? 1.45 : 0.8);
      if (g.hp <= 0) {
        defeatNemesis(g);
        return true;
      }

      // Nao dorme ao tomar tiro: apenas uma leve lentidao momentanea.
      g.slowT = Math.max(g.slowT || 0, opts.strong ? 1.1 : 0.5);
      g.state = "ALERT";
      g.chaseLocked = true;
      nemesis.chaseLocked = true;
      g.lastSeen = { x: player.x, y: player.y, t: 0 };
      g.target = { x: player.x, y: player.y, source: "CHASE" };
      if (Math.random() < 0.5) sfxNemesisStun(!!opts.strong);
      setInteractionFeedback("Nemesis HP " + Math.ceil(g.hp) + "/" + g.maxHp, "ok", 0.6);
      return false;
    }

    function stunNemesis(g, seconds, strong = false) {
      if (!g || !isNemesisKind(g.kind)) return;
      g.sleepT = Math.max(g.sleepT || 0, seconds);
      g.visionDebuffT = Math.max(g.visionDebuffT || 0, seconds + 1.6);
      g.state = "SUSPICIOUS";
      g.stateT = 0;
      g.suspicion = 0;
      g.target = { x: player.x, y: player.y, source: strong ? "GRENADE" : "SHOT" };
      addBloodStain(g.x, g.y, getPlayerAimDir(), strong ? 1.6 : 0.9);
      sfxNemesisStun(strong);
      shakeScreen(strong ? 18 : 8, strong ? 0.5 : 0.18);
      setInteractionFeedback(strong ? "Nemesis paralisado" : "Nemesis atordoado", "ok", 0.75);
      pushHint("Nemesis ficou vulnerável. Continue causando dano para derrubar o boss.", 1.2);
      run.score += strong ? 90 : 35;
    }

    // ===================== NEMESIS: HABILIDADES =====================
    function nemesisAimProgress(g) {
      // 0 -> acabou de mirar (vermelho), 1 -> prestes a disparar (laranja).
      if (!g || g.bazookaState !== "aim") return 0;
      return clamp(1 - (g.bazookaT || 0) / NEMESIS_BAZOOKA_AIM_TIME, 0, 1);
    }

    function updateNemesisAbilities(g, dt) {
      g.slowT = Math.max(0, (g.slowT || 0) - dt);
      g.invulnT = Math.max(0, (g.invulnT || 0) - dt);
      g.invulnCd = Math.max(0, (g.invulnCd || 0) - dt);
      g.bazookaCd = Math.max(0, (g.bazookaCd || 0) - dt);
      g.tentacleCd = Math.max(0, (g.tentacleCd || 0) - dt);
      g.tentacleRollT = Math.max(0, (g.tentacleRollT || 0) - dt);

      if (g.tentacleState === "aim") {
        g.tentacleT -= dt;
        g.dir = angleTo(g.x, g.y, g.tentacleX, g.tentacleY);
        if (g.tentacleT <= 0) {
          launchNemesisMeatTentacle(g, g.tentacleX, g.tentacleY);
          g.tentacleState = "none";
          g.tentacleCd = NEMESIS_TENTACLE_COOLDOWN_MIN + Math.random() * (NEMESIS_TENTACLE_COOLDOWN_MAX - NEMESIS_TENTACLE_COOLDOWN_MIN);
          g.tentacleRollT = NEMESIS_TENTACLE_ROLL_INTERVAL + Math.random() * 1.4;
        }
        return;
      }

      // Disparo de bazuca: mira por ~1s (laser vermelho->laranja) e atira.
      if (g.bazookaState === "aim") {
        g.bazookaT -= dt;
        g.dir = angleTo(g.x, g.y, g.aimX, g.aimY);
        if (g.bazookaT <= 0) {
          fireNemesisMissile(g, g.aimX, g.aimY);
          g.bazookaState = "none";
          g.bazookaCd = 6.5 + Math.random() * 4;
        }
        return;
      }

      const dPlayer = dist(g.x, g.y, player.x, player.y);
      const canTentacle = g.chaseLocked &&
        g.tentacleCd <= 0 &&
        g.invulnT <= 0 &&
        g.bazookaState !== "aim" &&
        dPlayer > NEMESIS_TENTACLE_RANGE_MIN &&
        dPlayer < NEMESIS_TENTACLE_RANGE_MAX &&
        guardSeesPlayer(g);

      if (canTentacle && g.tentacleRollT <= 0) {
        g.tentacleRollT = NEMESIS_TENTACLE_ROLL_INTERVAL + Math.random() * 1.4;
        if (Math.random() < NEMESIS_TENTACLE_PROC_CHANCE) {
          g.tentacleState = "aim";
          g.tentacleT = NEMESIS_TENTACLE_AIM_TIME;
          g.tentacleX = player.x;
          g.tentacleY = player.y;
          if (!tryNemesisStarsVoice(0.88, 0.36)) playNemesisScream(0.72, "chase");
          pushHint("Nemesis prepara tentáculo de carne! Saia da linha.", 0.9);
          return;
        }
      }

      if (g.chaseLocked && g.bazookaCd <= 0 && g.invulnT <= 0 && dPlayer > NEMESIS_BAZOOKA_RANGE_MIN && dPlayer < NEMESIS_BAZOOKA_RANGE_MAX && guardSeesPlayer(g)) {
        g.bazookaState = "aim";
        g.bazookaT = NEMESIS_BAZOOKA_AIM_TIME;
        g.aimX = player.x;
        g.aimY = player.y;
        if (!tryNemesisStarsVoice(0.92, 0.4)) playNemesisScream(0.68, "chase");
        pushHint("Nemesis está mirando a bazuca! Saia do alvo.", 1.0);
      }
    }

    function launchNemesisMeatTentacle(g, tx, ty) {
      const dir = angleTo(g.x, g.y, tx, ty);
      const px = Math.cos(dir + Math.PI / 2);
      const py = Math.sin(dir + Math.PI / 2);
      const sx = g.x + Math.cos(dir) * 10;
      const sy = g.y + Math.sin(dir) * 10;
      if (fx.tentacles.length > 36) fx.tentacles.splice(0, fx.tentacles.length - 36);
      fx.tentacles.push({
        x0: sx,
        y0: sy,
        x1: tx,
        y1: ty,
        cx: (sx + tx) * 0.5 + px * (24 + Math.random() * 18),
        cy: (sy + ty) * 0.5 + py * (24 + Math.random() * 18),
        life: 0.48,
        maxLife: 0.48,
        width: 7 + Math.random() * 3,
        seed: Math.random() * 1000,
        meat: true,
        pull: true,
        ownerX: g.x,
        ownerY: g.y,
        resolved: false
      });
      sfxTentacleWhip(0.95);
      playNemesisScream(0.88, "attack");
      const hitPlayer = player.alive && dist(tx, ty, player.x, player.y) < 30 && !rayBlocked(g.x, g.y, player.x, player.y);
      if (hitPlayer) {
        const pullDir = angleTo(player.x, player.y, g.x, g.y);
        const pullDist = Math.min(26, dist(player.x, player.y, g.x, g.y) * 0.22);
        moveWithCollide(player, player.x + Math.cos(pullDir) * pullDist, player.y + Math.sin(pullDir) * pullDist);
        addBloodStain(player.x, player.y, pullDir + Math.PI, 1.1);
        shakeScreen(10, 0.22);
        if (isSuperCharacter()) damageHomelander(2, "nemesis");
        else if (isOperativeCampaign()) damageOperative(2, "nemesis");
        else onDetected("nemesis");
      }
    }

    function fireNemesisMissile(g, tx, ty) {
      const ang = angleTo(g.x, g.y, tx, ty);
      const speed = 280;
      nemesisMissiles.push({
        x: g.x + Math.cos(ang) * 16,
        y: g.y + Math.sin(ang) * 16,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed,
        tx,
        ty,
        life: 5.5,
        traveled: 0,
        targetDist: dist(g.x, g.y, tx, ty)
      });
      shakeScreen(8, 0.24);
      sfxBazookaFire(0.92);
    }

    function explodeNemesisMissile(m) {
      const r = 96;
      spawnExplosionAt(m.x, m.y, {
        clear: false,
        count: 42,
        speedMin: 140,
        speedRange: 300,
        sizeMin: 2.5,
        sizeRange: 6,
        palette: ["#ff9b4f", "#ff5a3a", "#b3161a", "#5c0a0c", "#2a0808", "#ffd887"]
      });
      for (let i = 0; i < 6; i++) spawnFire(m.x + (Math.random() - 0.5) * 24, m.y + (Math.random() - 0.5) * 24, 1.2 + Math.random() * 0.6);
      addScorch(m.x, m.y, 34);
      shakeScreen(20, 0.48);
      sfxBazookaExplode(1);
      if (player.alive && dist(m.x, m.y, player.x, player.y) < r) {
        if (isSuperCharacter()) damageHomelander(2, "nemesis");
        else if (isOperativeCampaign()) damageOperative(2, "nemesis");
        else onDetected("nemesis");
      }
    }

    function updateNemesisMissiles(dt) {
      for (let i = nemesisMissiles.length - 1; i >= 0; i--) {
        const m = nemesisMissiles[i];
        m.life -= dt;
        const nx = m.x + m.vx * dt;
        const ny = m.y + m.vy * dt;
        m.traveled += Math.hypot(nx - m.x, ny - m.y);
        m.x = nx;
        m.y = ny;
        // Rastro de fumaca/fogo.
        if (Math.random() < dt * 30) {
          fx.shards.push({
            x: m.x, y: m.y,
            vx: (Math.random() - 0.5) * 30,
            vy: (Math.random() - 0.5) * 30,
            size: 2 + Math.random() * 3,
            life: 0.3, maxLife: 0.3,
            spin: 0, rot: 0,
            color: Math.random() < 0.5 ? "#ffb066" : "#aaaaaa"
          });
          const maxShards = maxFxShards();
          if (fx.shards.length > maxShards) fx.shards.splice(0, fx.shards.length - maxShards);
        }
        const arrived = m.traveled >= m.targetDist || dist(m.x, m.y, m.tx, m.ty) < 10;
        if (isWall(m.x, m.y) || arrived || m.life <= 0) {
          explodeNemesisMissile(m);
          nemesisMissiles.splice(i, 1);
        }
      }
    }

    function drawNemesisMissiles() {
      // Escudo brilhante quando o Nemesis esta invencivel.
      for (const g of guards) {
        if (!isNemesisKind(g.kind) || (g.invulnT || 0) <= 0) continue;
        const pulse = 0.5 + 0.5 * Math.sin(performance.now() / 90);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(120,200,255," + (0.4 + pulse * 0.4) + ")";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(g.x, g.y, (g.r || 14) + 12 + pulse * 4, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Laser de mira (vermelho -> laranja) durante o tempo de mira da bazuca.
      for (const g of guards) {
        if (!isNemesisKind(g.kind) || g.bazookaState !== "aim") continue;
        const p = nemesisAimProgress(g);
        const r = Math.round(255);
        const gr = Math.round(40 + p * 130);
        const col = r + "," + gr + ",40";
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(" + col + ",0.85)";
        ctx.lineWidth = 2 + p * 2;
        ctx.setLineDash([10, 8]);
        ctx.beginPath();
        ctx.moveTo(g.x, g.y);
        ctx.lineTo(g.aimX, g.aimY);
        ctx.stroke();
        ctx.setLineDash([]);
        // Marcador do ponto de impacto.
        ctx.fillStyle = "rgba(" + col + ",0.4)";
        ctx.beginPath();
        ctx.arc(g.aimX, g.aimY, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Mira do tentáculo de carne.
      for (const g of guards) {
        if (!isNemesisKind(g.kind) || g.tentacleState !== "aim") continue;
        const p = clamp(1 - (g.tentacleT || 0) / NEMESIS_TENTACLE_AIM_TIME, 0, 1);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = "rgba(220,90,100," + (0.55 + p * 0.35) + ")";
        ctx.lineWidth = 2.5 + p * 2;
        ctx.setLineDash([6, 7]);
        ctx.beginPath();
        ctx.moveTo(g.x, g.y);
        ctx.lineTo(g.tentacleX, g.tentacleY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "rgba(160,40,48," + (0.28 + p * 0.2) + ")";
        ctx.beginPath();
        ctx.arc(g.tentacleX, g.tentacleY, 22 + p * 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Misseis em voo.
      for (const m of nemesisMissiles) {
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(Math.atan2(m.vy, m.vx));
        ctx.fillStyle = "#3a3a42";
        ctx.fillRect(-7, -3, 12, 6);
        ctx.fillStyle = "#ff7a3a";
        ctx.beginPath();
        ctx.moveTo(5, -3);
        ctx.lineTo(11, 0);
        ctx.lineTo(5, 3);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    function explodeGrenadeAt(x, y, radius) {
      const r = radius || GRENADE_LAUNCHER.blastRadius;
      shakeScreen(22, 0.48);
      sfxBazookaExplode(0.95);
      fx.traces.push({
        x0: x - r * 0.45,
        y0: y,
        x1: x + r * 0.45,
        y1: y,
        life: 0.2,
        maxLife: 0.2,
        color: "255,96,48",
        width: 6,
        glow: true
      });
      for (let i = 0; i < 5; i++) spawnFire(x + (Math.random() - 0.5) * r * 0.4, y + (Math.random() - 0.5) * r * 0.4, 1 + Math.random() * 0.5);
      for (let i = 0; i < 16; i++) {
        const a = Math.random() * Math.PI * 2;
        const d = 8 + Math.random() * r * 0.55;
        fx.shards.push({
          x: x + Math.cos(a) * d,
          y: y + Math.sin(a) * d,
          vx: Math.cos(a) * (90 + Math.random() * 180),
          vy: Math.sin(a) * (90 + Math.random() * 180),
          size: 2.5 + Math.random() * 5,
          rot: Math.random() * Math.PI,
          spin: (Math.random() - 0.5) * 9,
          life: 0.45 + Math.random() * 0.35,
          maxLife: 0.8,
          color: Math.random() < 0.55 ? "#ff7a30" : "#3a1810"
        });
      }
      addScorch(x, y, r * 0.42);

      for (let i = guards.length - 1; i >= 0; i--) {
        const g = guards[i];
        const d = dist(x, y, g.x, g.y);
        if (d > r) continue;
        if (rayBlocked(x, y, g.x, g.y) && d > r * 0.52) continue;

        if (isNemesisKind(g.kind)) {
          damageNemesis(g, weaponDamageAgainstNemesis(GRENADE_LAUNCHER) + 2, { strong: true, stunSec: 3.8 });
          continue;
        }

        addBloodStain(g.x, g.y, angleTo(x, y, g.x, g.y), 1.45);
        spawnGuardDeathExplosion(g.x, g.y);
        if (isZombieKind(g.kind)) sfxZombieDeath();
        else if (isClownKind(g.kind)) sfxClownDeath();
        else sfxDeathScream();
        guards.splice(i, 1);
        run.score += (isMeleeEnemyKind(g.kind) ? 150 : 190) + run.level * 12;
      }
    }

    function punchAttack() {
      refreshPlayerFacingFromInput();
      if (player.shootCooldown > 0) return;

      player.shootCooldown = 0.32;
      const hit = findGuardInShotLine(46, 25);
      spawnPunchEffect(!!hit);
      spawnMeleeArcEffect("punch", !!hit, 42, Math.PI * 0.35);
      shakeScreen(hit ? 6 : 2, hit ? 0.14 : 0.05);
      sfxPunch(!!hit);

      if (hit) {
        shoveGuard(hit, isNemesisKind(hit.kind) ? 20 : 34, 1.5);
        run.score += isNemesisKind(hit.kind) ? 12 : 24;
        setInteractionFeedback(enemyName(hit.kind) + " empurrado", "ok", 0.55);
        pushHint("Soco acertou: inimigo parado por 1.5s.", 0.65);
      } else {
        setInteractionFeedback("Soco no ar", "fail", 0.35);
      }
    }

    function knifeAttack() {
      refreshPlayerFacingFromInput();
      if (player.shootCooldown > 0) return;

      const stats = getKnifeStats();
      player.shootCooldown = stats.cooldown;
      const hits = findGuardsInMeleeArc(stats.range, stats.laneRadius).slice(0, stats.maxTargets);
      const hitSomething = hits.length > 0;
      spawnPunchEffect(hitSomething);
      spawnMeleeArcEffect("knife", hitSomething, stats.range, Math.PI * 0.46);
      if (hitSomething) sfxKnifeKill();
      else {
        playSfx("knifeSlice", 0.72, { rate: 1 + Math.random() * 0.12 });
        playTone("triangle", 260, 0.05, 0.025, 180);
      }
      broadcastNoise(player.x, player.y, hitSomething ? 120 : 86, hitSomething ? 0.34 : 0.22, "KNIFE");
      shakeScreen(hitSomething ? 5 : 1.5, hitSomething ? 0.12 : 0.04);

      if (!hitSomething) {
        setInteractionFeedback("Faca no ar", "fail", 0.35);
        return;
      }

      for (const hit of hits) {
        if (isNemesisKind(hit.kind)) {
          damageNemesis(hit, 1.15 + getUpgradeLevel("knife", "reach") * 0.35, { stunSec: 0.7 });
          continue;
        }

        addBloodStain(hit.x, hit.y, getPlayerAimDir(), 1.15);
        spawnGuardDeathExplosion(hit.x, hit.y);
        if (isZombieKind(hit.kind)) sfxZombieDeath();
        else if (isClownKind(hit.kind)) sfxClownDeath();
        else sfxDeathScream();
        removeGuard(hit);
        run.score += 135 + run.level * 10;
      }

      setInteractionFeedback("Faca acertou " + hits.length, "ok", 0.55);
      pushHint("Faca comum: mata inimigos logo a frente e faz pouco barulho.", 0.8);
    }

    function performPrimaryAction() {
      syncActiveWeaponState();
      if (player.activeSlot === "weapon" && player.hasWeapon && player.ammo > 0) shootWeapon();
      else if (player.activeSlot === "weapon" && player.hasWeapon && reloadActiveWeapon(true) > 0) return;
      else if (player.activeSlot === "weapon" && player.hasWeapon && player.ammo <= 0 && player.meleeWeapon === "knife") {
        player.activeSlot = "knife";
        knifeAttack();
      } else if (player.meleeWeapon === "knife") knifeAttack();
      else if (player.hasWeapon) shootWeapon();
      else punchAttack();
    }

    function shootWeapon() {
      refreshPlayerFacingFromInput();
      syncActiveWeaponState();
      const slot = getActiveWeaponSlot();
      const wt = slot ? slot.weapon : currentWeaponType;
      if (player.shootCooldown > 0) return;

      if (!player.hasWeapon || !slot) {
        pushHint("Encontre uma arma para atirar.", 0.8);
        return;
      }
      if (player.ammo <= 0) {
        if (reloadActiveWeapon(true) > 0) return;
        pushHint("Sem munição reserva. Procure um pente no mapa.", 0.75);
        setInteractionFeedback("Sem munição", "fail", 0.45);
        sfxFail();
        return;
      }

      player.shootCooldown = wt.cooldown;
      player.muzzleFlashT = 0.08;
      player.ammo = Math.max(0, player.ammo - 1);
      slot.ammo = player.ammo;
      run.levelKnifeOnly = false;
      if (player.ammo <= 0 && slot.reserveAmmo > 0) {
        setTimeout(() => {
          const active = getActiveWeaponSlot();
          if (active === slot && active.ammo <= 0) reloadActiveWeapon(true);
        }, 140);
      } else if (player.ammo <= 0 && player.meleeWeapon === "knife") {
        setTimeout(() => {
          if (player.hasWeapon && player.ammo <= 0) {
            player.activeSlot = "knife";
            setInteractionFeedback("Faca ativa", "ok", 0.45);
          }
        }, 120);
      }

      const aimDir = getPlayerAimDir();
      let hitList;
      if (wt.pellets || wt.pierce) {
        hitList = findGuardsInShotCone(wt.range, wt.laneRadius, wt.pellets ? wt.pellets : (1 + (wt.pierce || 0)));
      } else {
        const singleHit = findGuardInShotLine(wt.range, wt.laneRadius);
        hitList = singleHit ? [singleHit] : [];
      }
      const hit = hitList[0] || null;
      sfxGunshot(!!hit, wt);
      shakeScreen(hit ? 8 : 3, hit ? 0.18 : 0.08);
      const tracerEnd = hit
        ? { x: hit.x, y: hit.y }
        : rayEndBeforeWall(player.x, player.y, aimDir, wt.range);
      const traceLife = wt.traceLife || 0.08;
      fx.traces.push({
        x0: player.x,
        y0: player.y,
        x1: tracerEnd.x,
        y1: tracerEnd.y,
        life: traceLife,
        maxLife: traceLife,
        color: wt.tracerColor || "255,198,132",
        width: wt.traceWidth || 2,
        glow: !!wt.laserSight
      });

      const noiseStrength = wt.noiseMul || 1;
      broadcastNoise(player.x, player.y, 340 * noiseStrength, noiseStrength, "SHOT");

      if (wt.grenade) {
        explodeGrenadeAt(tracerEnd.x, tracerEnd.y, wt.blastRadius || GRENADE_LAUNCHER.blastRadius);
        setInteractionFeedback("Explosão de granada", "ok", 0.5);
        return;
      }

      if (!wt.tranquilizer) guardsReactToIncomingFire(hit);

      if (hitList.length > 0) {
        if (wt.tranquilizer) {
          for (const target of hitList) {
            if (isNemesisKind(target.kind)) {
              damageNemesis(target, weaponDamageAgainstNemesis(wt), { stunSec: 1.8 });
              continue;
            }
            target.sleepT = Math.max(target.sleepT || 0, isMeleeEnemyKind(target.kind) ? 2.4 : 8.5);
            target.visionDebuffT = Math.max(target.visionDebuffT || 0, isMeleeEnemyKind(target.kind) ? 4.5 : 10);
            target.state = "SUSPICIOUS";
            target.stateT = 0;
            target.suspicion = Math.max(0, target.suspicion - 0.6);
            target.target = { x: target.x, y: target.y, source: "DART" };
          }
          setInteractionFeedback(hitList.length > 1 ? "Dardos aplicados" : (isMeleeEnemyKind(hit.kind) ? (enemyName(hit.kind) + " desacelerado") : "Alvo dormindo"), "ok", 0.55);
          pushHint("Dardo aplicado sem chamar atenção.", 0.75);
          return;
        }

        for (const target of hitList.slice()) {
          if (guards.indexOf(target) < 0) continue;
          damageGuardWithWeapon(target, wt);
        }
      } else {
        setInteractionFeedback("Tiro sem alvo", "fail", 0.4);
      }
      syncActiveWeaponState();
    }

    function getMovementInput() {
      let x = 0;
      let y = 0;

      if (actionDown("up")) y -= 1;
      if (actionDown("down")) y += 1;
      if (actionDown("left")) x -= 1;
      if (actionDown("right")) x += 1;

      if (touchInput.enabled) {
        x += touchInput.moveX;
        y += touchInput.moveY;
      }

      return { x, y };
    }

    function usesPlayerOperativeSheet() {
      return spriteUsable(sprites.playerSheet)
        && playerOperativeRuntime
        && Array.isArray(playerOperativeRuntime.bakedFrames)
        && playerOperativeRuntime.bakedFrames.some(Boolean);
    }

    function getPlayerDrawDir() {
      // Os assets dos super modos tem o rosto no topo: gira para seguir o movimento.
      if (isSuperCharacter()) return player.dir - Math.PI / 2;
      if (usesPlayerOperativeSheet()) {
        return player.dir + (PLAYER_OPERATIVE_SHEET.facingOffset || 0);
      }
      return player.dir;
    }

    function getPlayerAimDir() {
      const baseDir = player.dir;
      if (player.activeSlot !== "weapon" || !player.hasWeapon || !currentWeaponType) return baseDir;
      const assist = currentWeaponType.aimAssist || (currentWeaponType.laserSight ? 0.24 : 0);
      if (assist <= 0) return baseDir;

      const ux = Math.cos(baseDir);
      const uy = Math.sin(baseDir);
      let best = null;
      let bestScore = Infinity;
      const range = (currentWeaponType.range || 300) + 20;
      for (const g of guards) {
        const dx = g.x - player.x;
        const dy = g.y - player.y;
        const forward = dx * ux + dy * uy;
        if (forward < 8 || forward > range) continue;
        const ang = Math.atan2(dy, dx);
        const da = Math.abs(normAngle(ang - baseDir));
        if (da > assist) continue;
        if (rayBlocked(player.x, player.y, g.x, g.y)) continue;
        const score = da * 260 + forward * 0.08;
        if (score < bestScore) {
          bestScore = score;
          best = ang;
        }
      }
      return best === null ? baseDir : baseDir + normAngle(best - baseDir) * 0.76;
    }

    // Mira pelo mouse (modo PC): so vale apos o mouse mexer e em aparelho nao-touch.
    function useMouseAim() {
      return mouseInput.aimActive && !touchInput.enabled;
    }

    function mouseAimDir() {
      return Math.atan2(mouseInput.worldY - player.y, mouseInput.worldX - player.x);
    }

    function refreshPlayerFacingFromInput() {
      if (useMouseAim()) {
        player.dir = mouseAimDir();
        return;
      }
      const input = getMovementInput();
      if (input.x !== 0 || input.y !== 0) {
        player.dir = Math.atan2(input.y, input.x);
      }
    }

    function updatePlayer(dt) {
      const homelander = isHomelanderCharacter();
      const butcher = isButcherCharacter();
      const thor = isThorCharacter();
      const superCharacter = isSuperCharacter();
      player.crouch = (actionDown("crouch") || touchInput.crouch) && !superCharacter;
      const running = (actionDown("run") || touchInput.run || mouseInput.run) && !player.crouch;

      const input = getMovementInput();
      let vx = input.x;
      let vy = input.y;

      if (vx !== 0 || vy !== 0) {
        const len = Math.hypot(vx, vy);
        vx /= len;
        vy /= len;
        player.dir = Math.atan2(vy, vx);
      }

      // No PC, a rotacao do personagem segue o mouse (movimento continua no WASD/setas).
      if (useMouseAim()) player.dir = mouseAimDir();

      player.moving = vx !== 0 || vy !== 0;
      player.running = player.moving && running;

      // Habilidade de movimento dos super modos: voo continuo ou dash longo.
      let flying = false;
      if (homelander || thor) {
        flying = manageHomelanderFlyFuel(dt, player.running);
      } else if (butcher) {
        flying = manageButcherDashFuel(dt, running, vx, vy);
        if (flying) {
          vx = Math.cos(player.butcherDashDir);
          vy = Math.sin(player.butcherDashDir);
          player.dir = player.butcherDashDir;
          player.moving = true;
          player.running = true;
        }
      }
      player.flying = flying;

      let sp = player.speedWalk;
      if (player.crouch) sp = player.speedCrouch;
      else if (running) sp = player.speedRun;
      // Super movimento: voo acelera, dash tem velocidade propria.
      if (flying && butcher) sp = BUTCHER_DASH_SPEED;
      else if (flying && thor) sp *= thorStormActive() ? 3.05 : 2.45;
      else if (flying) sp *= 2.05;
      if (isSurvivalRun()) sp *= survival.stats.move || 1;

      const prevPX = player.x;
      const prevPY = player.y;
      moveWithCollide(player, player.x + vx * sp * dt, player.y + vy * sp * dt);
      if (homelander || thor) updateHomelanderFlight(dt, vx, vy);
      else if (butcher) updateButcherDash(dt);
      const playerMoved = Math.hypot(player.x - prevPX, player.y - prevPY);
      if (player.moving && playerMoved < sp * dt * 0.18) {
        player.stuckT = (player.stuckT || 0) + dt;
        if (player.stuckT > 0.26) {
          const escapeX = player.x + (vx !== 0 || vy !== 0 ? vx * TILE * 2 : Math.cos(player.dir) * TILE * 2);
          const escapeY = player.y + (vx !== 0 || vy !== 0 ? vy * TILE * 2 : Math.sin(player.dir) * TILE * 2);
          tryUnstuckEntity(player, escapeX, escapeY);
          player.stuckT = 0;
        }
      } else {
        player.stuckT = Math.max(0, (player.stuckT || 0) - dt * 3);
      }

      let noise = 0;
      if (vx !== 0 || vy !== 0) {
        if (player.crouch) noise = 0.14;
        else if (running) noise = 0.88;
        else noise = 0.37;
      }

      player.noise = player.noise + (noise - player.noise) * (1 - Math.pow(0.001, dt));
      player.vis = player.crouch ? 0.33 : (running ? 0.84 : 0.62);

      if (vx !== 0 || vy !== 0) {
        const radius = player.crouch ? 86 : (running ? 224 : 146);
        if (Math.random() < dt * 3.5) {
          broadcastNoise(player.x, player.y, radius, player.noise);
        }
      }

      uiFeedback.prompt = "";

      tryAutoPickupCollectibles();
      updateObjectives(dt);
      updateInteractionPrompt();

      const wantsInteract = consumeActionPress("interact") || consumeTouchFlag("interactTap");
      if (wantsInteract) {
        tryUseInteraction();
        updateInteractionPrompt();
      }

      if (!isSurvivalRun() && rectContains(exit.x, exit.y, exit.w, exit.h, player.x, player.y)) {
        if (!item.taken) {
          pushHint("Pegue o dossiê antes de sair.", 0.8);
        } else if (!allObjectivesDone()) {
          pushHint("Faltam terminais secundários.", 0.8);
        } else {
          onLevelComplete();
        }
      }

      player.throwCooldown = Math.max(0, player.throwCooldown - dt);
      player.shootCooldown = Math.max(0, player.shootCooldown - dt);
      player.muzzleFlashT = Math.max(0, player.muzzleFlashT - dt);
      player.hurtCd = Math.max(0, player.hurtCd - dt);
      player.drinkCd = Math.max(0, player.drinkCd - dt);
      updateThorStorm(dt);

      const wantsLure = !superCharacter && (consumeActionPress("lure") || consumeTouchFlag("lureTap"));
      if (wantsLure && player.throwCooldown <= 0) {
        player.throwCooldown = 4;
        throwLure();
      }

      const wantsTouchSwitch = consumeTouchFlag("switchWeaponTap");
      if (consumeActionPress("switchWeapon") || wantsTouchSwitch) {
        if (!switchActiveSlot()) pushHint("Equipe uma arma para alternar com a faca.", 0.7);
      }

      const pressedMouseShoot = mouseInput.shootTap;
      mouseInput.shootTap = false;
      const pressedShoot = consumeActionPress("shoot") || consumeTouchFlag("shootTap") || pressedMouseShoot;
      const holdingShoot = actionDown("shoot") || touchInput.shoot || mouseInput.shoot;
      const pressedSpecial = isSuperCharacter() && (consumeActionPress("hammer") || consumeTouchFlag("hammerTap"));
      const holdingHammer = thor && (actionDown("hammer") || touchInput.hammer);

      if (superCharacter) {
        updateHomelanderLaser(dt, pressedShoot || holdingShoot);
        if (thor) {
          updateThorMjolnir(dt, pressedSpecial, holdingHammer);
          updateMjolnirAudio(dt);
        } else if (butcher || homelander) {
          updateSuperSpecialPower(dt, pressedSpecial);
        }
      } else if (pressedShoot) {
        performPrimaryAction();
      } else if (player.shootCooldown <= 0 && holdingShoot) {
        // Armas automaticas (metralhadora) atiram em sequencia enquanto o botão fica pressionado.
        syncActiveWeaponState();
        const slot = getActiveWeaponSlot();
        const wt = slot ? slot.weapon : currentWeaponType;
        if (player.activeSlot === "weapon" && player.hasWeapon && player.ammo > 0 && wt && wt.auto) {
          shootWeapon();
        }
      }
    }

    function clearEntityPath(ent) {
      ent.path = null;
      ent.pathGoalKey = "";
      ent.pathT = 0;
    }

    function entityPathBlockFn(ent) {
      const er = ent.r || 9;
      const avoidProps = !!(ent.boss || (ent.kind && isNemesisKind(ent.kind)));
      return (cx, cy) => cellBlockedForEntity(grid, cx, cy, er, avoidProps);
    }

    function tryUnstuckEntity(ent, tx, ty) {
      if ((ent.unstuckCd || 0) > 0) return false;
      clearEntityPath(ent);
      ent.pathT = 0;
      const sideSign = Math.floor(performance.now() / 720) % 2 === 0 ? 1 : -1;
      const ang = angleTo(ent.x, ent.y, tx, ty);
      const side = ang + Math.PI / 2 * sideSign;
      const back = ang + Math.PI;
      const distNudge = TILE * (ent.boss || isNemesisKind(ent.kind) ? 1.05 : 0.85);
      const candidates = [
        { x: ent.x + Math.cos(side) * distNudge, y: ent.y + Math.sin(side) * distNudge },
        { x: ent.x + Math.cos(side + Math.PI) * distNudge, y: ent.y + Math.sin(side + Math.PI) * distNudge },
        { x: ent.x + Math.cos(ang) * distNudge * 0.65, y: ent.y + Math.sin(ang) * distNudge * 0.65 },
        { x: ent.x + Math.cos(back) * distNudge * 0.45, y: ent.y + Math.sin(back) * distNudge * 0.45 }
      ];

      let bestMoved = 0;
      let bestX = ent.x;
      let bestY = ent.y;
      for (const pos of candidates) {
        const ox = ent.x;
        const oy = ent.y;
        const moved = moveWithCollide(ent, pos.x, pos.y);
        if (moved > bestMoved) {
          bestMoved = moved;
          bestX = ent.x;
          bestY = ent.y;
        }
        ent.x = ox;
        ent.y = oy;
      }
      ent.x = bestX;
      ent.y = bestY;
      if (bestMoved > 1.5) {
        ent.unstuckCd = 0.55;
        return true;
      }

      const free = findNearestFreePosition(
        ent.x,
        ent.y,
        ent.r || 9,
        ent.boss || isNemesisKind(ent.kind) ? 9 : 7
      );
      if (free) {
        ent.x = free.x;
        ent.y = free.y;
        ent.unstuckCd = 0.75;
        return true;
      }
      return false;
    }

    function getPathStepForEntity(ent, tx, ty, dt) {
      const blockFn = entityPathBlockFn(ent);
      const startCell = nearestWalkableCell(grid, worldToCell(ent.x, ent.y), 4, blockFn);
      const goalCell = nearestWalkableCell(grid, worldToCell(tx, ty), 6, blockFn);
      if (!startCell || !goalCell) return null;

      const goalKey = goalCell.x + "," + goalCell.y;
      ent.pathT = Math.max(0, (ent.pathT || 0) - dt);
      if (!ent.path || ent.pathGoalKey !== goalKey || ent.pathT <= 0) {
        ent.path = shortestPathCells(grid, startCell, goalCell, blockFn);
        ent.pathGoalKey = goalKey;
        ent.pathT = (isSuperCharacter() && superCombatHeavy()) ? (0.95 + rand() * 0.55) : (0.55 + rand() * 0.35);
        ent.pathIndex = 1;
      }
      if (!ent.path || ent.path.length < 2) return null;

      let idx = ent.pathIndex || 1;
      idx = clamp(idx, 1, ent.path.length - 1);
      const stepReach = TILE * 0.42;
      while (idx < ent.path.length - 1) {
        const c = cellCenter(ent.path[idx]);
        if (dist(ent.x, ent.y, c.x, c.y) > stepReach) break;
        idx += 1;
      }
      ent.pathIndex = idx;
      return cellCenter(ent.path[idx]);
    }

    function moveTo(ent, tx, ty, dt, speedMul, opts = {}) {
      let targetX = tx;
      let targetY = ty;
      const blocked = rayBlocked(ent.x, ent.y, tx, ty);
      const farEnoughForPath = dist(ent.x, ent.y, tx, ty) > TILE * 1.35;
      const isBoss = !!(ent.boss || (ent.kind && isNemesisKind(ent.kind)));
      const stuckThreshold = isSuperCharacter() && superCombatHeavy()
        ? (isBoss ? 0.85 : 1.05)
        : (isBoss ? 0.5 : 0.62);
      const wantPath = opts.path === true || (opts.path !== false && blocked);
      const usePath = wantPath && farEnoughForPath && ((ent.stuckT || 0) > 0.22 || blocked);
      if (usePath) {
        const step = getPathStepForEntity(ent, tx, ty, dt);
        if (step) {
          targetX = step.x;
          targetY = step.y;
        }
      } else if (!blocked) {
        clearEntityPath(ent);
      }

      const ang = angleTo(ent.x, ent.y, targetX, targetY);
      const sp = ent.speed * speedMul;
      const moved = moveWithCollide(ent, ent.x + Math.cos(ang) * sp * dt, ent.y + Math.sin(ang) * sp * dt);
      const minMove = Math.max(0.55, sp * dt * 0.18);
      const farFromTarget = dist(ent.x, ent.y, targetX, targetY) > 14;
      if (moved < minMove && farFromTarget) {
        ent.stuckT = (ent.stuckT || 0) + dt;
        if ((ent.stuckT || 0) > stuckThreshold * 0.5) {
          if (!ent.stuckFacingLocked) {
            ent.stuckFacingLocked = true;
            ent.stuckFaceDir = ent.dir;
          }
          ent.dir = ent.stuckFaceDir;
        } else {
          ent.dir = ang;
          ent.stuckFacingLocked = false;
        }
        if (ent.stuckT > stuckThreshold) {
          if (blocked || isBoss) {
            const step = getPathStepForEntity(ent, tx, ty, 0);
            if (step) {
              ent.pathT = 0;
            }
          }
          if (ent.stuckT > stuckThreshold + 0.18) {
            tryUnstuckEntity(ent, tx, ty);
          }
          ent.stuckT = 0;
          ent.stuckFacingLocked = false;
        }
      } else {
        ent.stuckT = Math.max(0, (ent.stuckT || 0) - dt * 1.8);
        ent.stuckFacingLocked = false;
        if (moved > minMove * 0.35 || !farFromTarget) ent.dir = ang;
      }
      ent.lastX = ent.x;
      ent.lastY = ent.y;
    }

    function guardSeesPlayer(g) {
      if (g.sleepT > 0) return false;
      const dx = player.x - g.x;
      const dy = player.y - g.y;
      const d = Math.hypot(dx, dy);
      const visionFactor = g.visionDebuffT > 0 ? 0.42 : 1;
      const fovFactor = g.visionDebuffT > 0 ? 0.68 : 1;
      if (isMeleeEnemyKind(g.kind) && d < (isNemesisKind(g.kind) ? 62 : (isClownKind(g.kind) ? 48 : 42)) && !rayBlocked(g.x, g.y, player.x, player.y)) return true;
      if (d > g.viewDist * visionFactor) return false;

      const visFactor = player.crouch ? 0.66 : ((actionDown("run") || touchInput.run) ? 1.0 : 0.84);
      const effective = g.viewDist * visionFactor * visFactor;
      if (d > effective) return false;

      const ang = Math.atan2(dy, dx);
      const da = Math.abs(normAngle(ang - g.dir));
      if (da > (g.fov * fovFactor) / 2) return false;

      if (rayBlocked(g.x, g.y, player.x, player.y)) return false;
      return true;
    }

    function patrolMove(g, dt) {
      if (g.pauseT > 0) {
        g.pauseT = Math.max(0, g.pauseT - dt);
        // Olha ao redor enquanto pausado para nao ficar totalmente estatico.
        g.sweepDir = g.sweepDir || 1;
        g.dir = (g.lookDir || g.dir) + Math.sin(g.stateT * 2.4) * 0.55 * g.sweepDir;
        return;
      }

      const wp = g.wp[g.wpIndex];
      const needPath = rayBlocked(g.x, g.y, wp.x, wp.y);
      moveTo(g, wp.x, wp.y, dt, 1, { path: needPath });
      if (dist(g.x, g.y, wp.x, wp.y) < 9) {
        g.wpIndex = (g.wpIndex + 1) % g.wp.length;
        const nextWp = g.wp[g.wpIndex];
        g.lookDir = angleTo(g.x, g.y, nextWp.x, nextWp.y);
        g.sweepDir = rand() < 0.5 ? 1 : -1;
        // Pausas mais curtas e menos frequentes: inimigos mais ativos.
        if (rand() < 0.32) {
          g.pauseT = 0.3 + rand() * 0.7;
        }
      }
    }

    function suspiciousMove(g, dt) {
      if (!g.target) {
        g.state = "SEARCH";
        g.stateT = 0;
        return;
      }

      const lureTarget = g.target.source === "LURE" || g.target.source === "LURE_USED";
      const tx = g.target.x;
      const ty = g.target.y;
      const needPath = rayBlocked(g.x, g.y, tx, ty);
      moveTo(g, tx, ty, dt, lureTarget ? 0.88 : 0.96, { path: needPath });
      const d = dist(g.x, g.y, g.target.x, g.target.y);
      if (lureTarget && d < 18) {
        g.visionDebuffT = Math.max(g.visionDebuffT, 7.2);
        g.sleepT = Math.max(g.sleepT, 3.8 + rand() * 0.8);
        g.lureHoldT = Math.max(g.lureHoldT, 3.1 + rand() * 0.9);
        g.suspicion = Math.max(0, g.suspicion - 0.35);
        g.stateT = 0;
        g.target.source = "LURE_USED";
      }

      if (g.lureHoldT > 0 && d < 20) {
        g.lureHoldT = Math.max(0, g.lureHoldT - dt);
        g.dir += dt * 1.65 * g.sweepDir;
        return;
      }

      if (d < 11 && g.stateT > (lureTarget ? 2.2 : 1)) {
        g.state = "SEARCH";
        g.stateT = 0;
      }
    }

    function nemesisAlertMove(g, dt) {
      // Enquanto mira bazuca ou tentáculo, para no lugar.
      if (g.bazookaState === "aim" || g.tentacleState === "aim") {
        g.target = { x: player.x, y: player.y, source: "CHASE" };
        if (g.tentacleState === "aim") g.dir = angleTo(g.x, g.y, g.tentacleX, g.tentacleY);
        return;
      }
      const bossFury = g.hp <= g.maxHp * 0.5 ? 0.18 : 0;
      g.nemesisBurstT = Math.max(0, (g.nemesisBurstT || 0) - dt);
      if (g.nemesisBurstT <= 0 && Math.random() < dt * 0.95) {
        g.nemesisBurstT = 0.5 + rand() * 0.85;
        maybePlayNemesisAttackVoice(g);
      }
      const bursting = g.nemesisBurstT > 0;
      let speedMul = bursting ? (1.42 + bossFury + (g.dashT > 0 ? 0.12 : 0)) : 0.68;
      // Leve lentidao momentanea ao tomar tiro (no lugar de dormir).
      if ((g.slowT || 0) > 0) speedMul *= 0.5;

      const targetAng = angleTo(g.x, g.y, player.x, player.y);
      const turnRate = bursting ? 2.1 : 0.92;
      const delta = normAngle(targetAng - (g.nemesisTurn || g.dir));
      const step = clamp(delta, -turnRate * dt, turnRate * dt);
      g.nemesisTurn = normAngle((g.nemesisTurn || g.dir) + step);
      g.dir = g.nemesisTurn;

      const side = Math.PI / 2 * g.sweepDir;
      const weave = Math.sin(performance.now() / (bursting ? 210 : 360) + g.x * 0.025) * (bursting ? 28 : 46);
      const tx = player.x + Math.cos(g.nemesisTurn + side) * weave;
      const ty = player.y + Math.sin(g.nemesisTurn + side) * weave;

      const needPath = rayBlocked(g.x, g.y, tx, ty) || rayBlocked(g.x, g.y, player.x, player.y);
      updateNemesisWorldPressure(g, dt);
      moveTo(g, tx, ty, dt, speedMul, { path: needPath });
      g.target = { x: player.x, y: player.y, source: "CHASE" };
    }

    function alertMove(g, dt) {
      if (isNemesisKind(g.kind)) {
        nemesisAlertMove(g, dt);
        return;
      }

      let speedMul = 1.25;
      let tx = player.x;
      let ty = player.y;
      if (isZombieKind(g.kind)) speedMul = g.dashT > 0 ? 1.62 : 0.98;
      else if (isClownKind(g.kind)) {
        speedMul = g.dashT > 0 ? 1.82 : 1.36;
        const side = angleTo(g.x, g.y, player.x, player.y) + Math.PI / 2 * g.sweepDir;
        const weave = Math.sin((performance.now() / 120) + g.x * 0.03) * 24;
        tx += Math.cos(side) * weave;
        ty += Math.sin(side) * weave;
      }
      let needPath = rayBlocked(g.x, g.y, tx, ty) || rayBlocked(g.x, g.y, player.x, player.y);
      if (isSuperCharacter() && superCombatHeavy()) {
        needPath = (g.stuckT || 0) > 0.55;
      }
      moveTo(g, tx, ty, dt, speedMul, { path: needPath });
      g.target = { x: player.x, y: player.y };
    }

    function searchMove(g, dt) {
      const speedMul = isNemesisKind(g.kind) ? 0.56 : 1.05;
      if (isNemesisKind(g.kind)) updateNemesisWorldPressure(g, dt);
      if (g.target) {
        const tx = g.target.x;
        const ty = g.target.y;
        const needPath = rayBlocked(g.x, g.y, tx, ty);
        moveTo(g, tx, ty, dt, speedMul, { path: needPath });
        if (dist(g.x, g.y, g.target.x, g.target.y) < 11) {
          if (!g.lookDir) g.lookDir = g.dir;
          g.dir = g.lookDir + Math.sin(g.stateT * 2.1) * 0.35 * g.sweepDir;
        } else {
          g.lookDir = g.dir;
        }
      } else {
        if (!g.lookDir) g.lookDir = g.dir;
        g.dir = g.lookDir + Math.sin(g.stateT * 2.1) * 0.35 * g.sweepDir;
      }
    }

    function updateNemesisPropPressure(g, dt) {
      if (!isNemesisKind(g.kind)) return;
      g.nemesisPropT = Math.max(0, (g.nemesisPropT || 0) - dt);
      const breakRadius = TILE * 2.4;
      for (let i = mapProps.length - 1; i >= 0; i--) {
        const p = mapProps[i];
        if (!p.blocks) continue;
        const pr = p.r || 8;
        const d = dist(g.x, g.y, p.x, p.y);
        if (d > breakRadius + pr) continue;
        if (!Number.isFinite(p.hp)) p.hp = p.kind === "tree" ? 2.4 : 1.5;
        const rate = g.state === "ALERT" ? 2.0 : 1.1;
        p.hp -= dt * rate;
        if (g.nemesisPropT <= 0) {
          g.nemesisPropT = 0.16;
          playTone("sine", 56 + rand() * 16, 0.045, 0.024, 40);
        }
        if (p.hp <= 0) {
          addBloodStain(p.x, p.y, angleTo(g.x, g.y, p.x, p.y), p.kind === "tree" ? 0.55 : 0.35);
          spawnExplosionAt(p.x, p.y, {
            clear: false,
            count: 10,
            speedMin: 60,
            speedRange: 140,
            sizeMin: 2,
            sizeRange: 4,
            palette: ["#6a5238", "#8a6838", "#4a4a52", "#3f2d1e"]
          });
          mapProps.splice(i, 1);
          playSfx("gunImpact", 0.38, { rate: 0.78 });
        }
      }
    }

    function updateNemesisWorldPressure(g, dt) {
      updateNemesisDoorPressure(g, dt);
      updateNemesisPropPressure(g, dt);
    }

    function updateNemesisDoorPressure(g, dt) {
      if (!isNemesisKind(g.kind)) return;
      g.nemesisDoorT = Math.max(0, (g.nemesisDoorT || 0) - dt);
      const cell = worldToCell(g.x, g.y);
      for (const door of levelDoors) {
        if (door.open || door.broken) continue;
        const center = doorCenterWorld(door);
        let near = false;
        for (const t of doorTileCoords(door)) {
          if (Math.abs(t.x - cell.x) + Math.abs(t.y - cell.y) <= 1) near = true;
        }
        const d = dist(g.x, g.y, center.x, center.y);
        if (!near && d > TILE * 3.4) continue;
        const breakRate = g.state === "ALERT" ? 1.55 : 0.85;
        door.hp -= dt * breakRate;
        if (g.nemesisDoorT <= 0) {
          g.nemesisDoorT = 0.22;
          playTone("sine", 72 + rand() * 18, 0.05, 0.028, 48);
        }
        if (door.hp <= 0) openDoor(door, true);
      }
    }

    function coverMove(g, dt) {
      if (!g.coverTarget) {
        g.state = "SEARCH";
        g.stateT = 0;
        return;
      }

      const cx = g.coverTarget.x;
      const cy = g.coverTarget.y;
      moveTo(g, cx, cy, dt, 1.38, { path: rayBlocked(g.x, g.y, cx, cy) });
      if (dist(g.x, g.y, g.coverTarget.x, g.coverTarget.y) < 10) {
        g.dir = angleTo(g.x, g.y, player.x, player.y) + Math.PI + (rand() - 0.5) * 0.4;
        g.pauseT = Math.max(g.pauseT, 1.1);
      }

      if (g.stateT > 3.2) {
        g.state = "SEARCH";
        g.stateT = 0;
        g.coverTarget = null;
        g.target = { x: player.x, y: player.y };
      }
    }

    function triggerEnemyAlertAbility(g) {
      if (!g || (g.abilityT || 0) > 0) return;
      if (isZombieKind(g.kind)) {
        g.dashT = Math.max(g.dashT || 0, 0.46);
        g.abilityT = 1.8;
      } else if (isClownKind(g.kind)) {
        g.dashT = Math.max(g.dashT || 0, 0.75);
        g.sweepDir = rand() < 0.5 ? -1 : 1;
        g.abilityT = 2.2;
      } else if (isNemesisKind(g.kind)) {
        g.dashT = Math.max(g.dashT || 0, 0.38);
        g.abilityT = 2.6;
        syncMusicState();
      } else {
        g.abilityT = 4.5;
        for (const other of guards) {
          if (other === g || other.kind !== "agent" || other.state === "ALERT") continue;
          if (dist(g.x, g.y, other.x, other.y) > 250 || rayBlocked(g.x, g.y, other.x, other.y)) continue;
          other.state = "SUSPICIOUS";
          other.target = { x: player.x, y: player.y, source: "RADIO" };
          other.stateT = 0;
          other.suspicion = Math.max(other.suspicion || 0, 0.62);
        }
      }
    }

    function updateGuards(dt) {
      if (isSurvivalRun()) survivalAmbientVoiceT = Math.max(0, survivalAmbientVoiceT - dt);
      nemesisStarsVoiceCd = Math.max(0, nemesisStarsVoiceCd - dt);
      nemesisScreamCd = Math.max(0, nemesisScreamCd - dt);
      for (const g of guards) {
        g.visionDebuffT = Math.max(0, g.visionDebuffT - dt);
        g.sleepT = Math.max(0, (g.sleepT || 0) - dt);
        g.shootCooldown = Math.max(0, g.shootCooldown - dt);
        g.muzzleFlashT = Math.max(0, g.muzzleFlashT - dt);
        g.abilityT = Math.max(0, (g.abilityT || 0) - dt);
        g.dashT = Math.max(0, (g.dashT || 0) - dt);
        g.attackVoiceT = Math.max(0, (g.attackVoiceT || 0) - dt);
        g.meleeCd = Math.max(0, (g.meleeCd || 0) - dt);
        if ((g.shootWindup || 0) > 0) g.shootWindup = Math.max(0, g.shootWindup - dt);
        if (isNemesisKind(g.kind)) updateNemesisAbilities(g, dt);
        if (isMeleeEnemyKind(g.kind)) {
          g.voiceT = Math.max(0, (g.voiceT || 0) - dt);
          if (g.voiceT <= 0) {
            const heard = playEnemyAmbientVoice(g);
            g.voiceT = enemyVoiceInterval(g, heard);
          }
        }

        if (g.sleepT > 0) {
          g.stateT += dt;
          g.suspicion = Math.max(0, g.suspicion - dt * 0.45);
          g.dir += dt * 0.28 * g.sweepDir;
          continue;
        }

        g.unstuckCd = Math.max(0, (g.unstuckCd || 0) - dt);
        if (isSurvivalRun()) {
          g.state = "ALERT";
          g.target = { x: player.x, y: player.y, source: "SURVIVAL_CHASE" };
          g.lastSeen = { x: player.x, y: player.y, t: 0 };
          if (isNemesisKind(g.kind)) {
            g.chaseLocked = true;
            nemesis.chaseLocked = true;
          }
        }

        if (isSuperCharacter() && g.sleepT <= 0) {
          g.state = "ALERT";
          g.target = { x: player.x, y: player.y, source: "SUPER_CHASE" };
          g.lastSeen = { x: player.x, y: player.y, t: 0 };
        }

        const sees = isSuperCharacter() ? true : guardSeesPlayer(g);
        if (sees) {
          if (g.state !== "ALERT") {
            const alertVol = Math.max(0.28, enemyVoiceVolume(g, isNemesisKind(g.kind) ? 460 : 320));
            if (isNemesisKind(g.kind)) {
              sfxNemesisRoar(alertVol, "alert");
              g.chaseLocked = true;
              nemesis.chaseLocked = true;
              syncMusicState();
            } else if (isClownKind(g.kind)) sfxClownAlert(alertVol);
            else if (isZombieKind(g.kind)) sfxZombieAttack(alertVol);
            else sfxAlert();
            triggerEnemyAlertAbility(g);
          }
          g.state = "ALERT";
          g.lastSeen = { x: player.x, y: player.y, t: 0 };
          g.target = { x: player.x, y: player.y };
          g.pauseT = 0;
          g.lureHoldT = 0;
          g.coverTarget = null;
        }

        if (isNemesisKind(g.kind) && (g.chaseLocked || nemesis.chaseLocked) && g.state !== "ALERT" && g.state !== "SLEEP") {
          g.state = "ALERT";
          g.target = { x: player.x, y: player.y, source: "CHASE" };
        }

        g.stateT += dt;
        if (g.lastSeen) g.lastSeen.t += dt;

        if (g.state === "PATROL") {
          g.suspicion = Math.max(0, g.suspicion - dt * 0.25);
          patrolMove(g, dt);
        } else if (g.state === "SUSPICIOUS") {
          suspiciousMove(g, dt);
          const suspiciousMax = g.target && g.target.source === "LURE_USED" ? 7.2 : 3.8;
          if (g.stateT > suspiciousMax) {
            g.state = "SEARCH";
            g.stateT = 0;
          }
        } else if (g.state === "COVER") {
          coverMove(g, dt);
        } else if (g.state === "ALERT") {
          const dPlayer = dist(g.x, g.y, player.x, player.y);
          const shooting = g.armed && sees && g.ammo > 0 && dPlayer >= 14 && dPlayer <= 270;

          if (shooting) {
            if (g.shootCooldown <= 0) {
              if ((g.shootWindup || 0) > 0) {
                g.dir = angleTo(g.x, g.y, player.x, player.y);
              } else if (g.shootQueued) {
                guardShoot(g);
                g.shootQueued = false;
              } else {
                g.shootWindup = 0.22 + rand() * 0.08;
                g.shootQueued = true;
                g.dir = angleTo(g.x, g.y, player.x, player.y);
                playTone("triangle", 260, 0.04, 0.022, 180);
              }
            }
            if (mode !== MODE_PLAYING) return;
          } else {
            g.shootQueued = false;
            if (tryEnemyMeleeAttack(g, dt, dPlayer)) {
              if (mode !== MODE_PLAYING) return;
            } else {
              alertMove(g, dt);
            }
          }

          if (!isMeleeEnemyKind(g.kind) && dPlayer < player.r + g.r + 2) {
            if (isSuperCharacter()) {
              const ang = angleTo(player.x, player.y, g.x, g.y);
              moveWithCollide(g, g.x + Math.cos(ang) * 14, g.y + Math.sin(ang) * 14);
              damageHomelander(1, "melee");
            } else if (isOperativeCampaign()) {
              damageOperative(1, "melee");
            } else {
              onDetected("melee");
              return;
            }
          }

          if (!isSurvivalRun() && !isNemesisKind(g.kind) && !sees && g.lastSeen && g.lastSeen.t > 0.45 && g.stateT > 0.9) {
            g.state = "SEARCH";
            g.stateT = 0;
            g.target = g.lastSeen ? { x: g.lastSeen.x, y: g.lastSeen.y } : null;
          } else if (isNemesisKind(g.kind)) {
            g.lastSeen = { x: player.x, y: player.y, t: 0 };
            g.target = { x: player.x, y: player.y, source: "CHASE" };
          }
        } else if (g.state === "SEARCH") {
          searchMove(g, dt);
          const searchTimeout = isNemesisKind(g.kind) ? 18 : 4.7;
          if (g.stateT > searchTimeout) {
            if (isNemesisKind(g.kind)) {
              g.target = pickNemesisHuntTarget();
              g.stateT = 0;
            } else {
              g.state = "PATROL";
              g.stateT = 0;
              g.target = null;
              g.lastSeen = null;
              g.lureHoldT = 0;
              g.coverTarget = null;
            }
          }
        }
      }
    }

    function updateLures(dt) {
      for (let i = lures.length - 1; i >= 0; i--) {
        const l = lures[i];
        l.ttl -= dt;

        if (!l.landed) {
          const nx = l.x + l.vx * dt;
          const ny = l.y + l.vy * dt;

          if (isWall(nx, ny)) {
            l.landed = true;
            l.vx = 0;
            l.vy = 0;
            broadcastNoise(l.x, l.y, l.noiseRadius, 1, "LURE");
          } else {
            l.x = nx;
            l.y = ny;
            l.vx *= (1 - dt * 1.8);
            l.vy *= (1 - dt * 1.8);
            if (Math.hypot(l.vx, l.vy) < 50) {
              l.landed = true;
              l.vx = 0;
              l.vy = 0;
              broadcastNoise(l.x, l.y, l.noiseRadius, 1, "LURE");
            }
          }
        } else if (Math.random() < dt * 1.5) {
          broadcastNoise(l.x, l.y, l.noiseRadius * 0.6, 0.6, "LURE");
        }

        if (l.ttl <= 0) lures.splice(i, 1);
      }
    }

    function spawnExplosionAt(x, y, opts = {}) {
      const shardCount = opts.count || 28;
      const palette = opts.palette || ["#e5fbff", "#84e9ff", "#63d9ff", "#ffd887", "#ff8f8f"];
      const speedMin = opts.speedMin || 120;
      const speedRange = opts.speedRange || 240;
      const sizeMin = opts.sizeMin || 2;
      const sizeRange = opts.sizeRange || 4.5;
      const clear = opts.clear !== false;

      if (clear) fx.shards.length = 0;
      // Sem isto o array cresce sem limite com explosoes continuas (voo/laser do
      // Homelander), enchendo de particulas e causando quedas de FPS.
      else {
        const maxShards = maxFxShards();
        if (fx.shards.length > maxShards) fx.shards.splice(0, fx.shards.length - maxShards);
      }

      for (let i = 0; i < shardCount; i++) {
        const a = (Math.PI * 2 * i) / shardCount + (Math.random() - 0.5) * 0.46;
        const speed = speedMin + Math.random() * speedRange;
        const maxLife = 0.42 + Math.random() * 0.58;
        fx.shards.push({
          x,
          y,
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed - Math.random() * 55,
          size: sizeMin + Math.random() * sizeRange,
          life: maxLife,
          maxLife,
          spin: (Math.random() - 0.5) * 14,
          rot: Math.random() * Math.PI * 2,
          color: palette[Math.floor(Math.random() * palette.length)]
        });
      }
    }

    function survivalDamageMul() {
      return (survival.stats.damage || 1) * (isThorCharacter() && thorStormActive() ? 1.18 : 1);
    }

    function damageGuardSurvival(g, amount, opts = {}) {
      if (!g || guards.indexOf(g) < 0) return false;
      const dmg = Math.max(0.05, (amount || 1) * survivalDamageMul());
      if (isNemesisKind(g.kind)) {
        return damageNemesis(g, dmg * 0.62, { stunSec: opts.stunSec || 0.18, strong: !!opts.strong });
      }
      const maxHp = g.maxHp || (isZombieKind(g.kind) ? 1.75 : (isClownKind(g.kind) ? 1.25 : 1));
      g.maxHp = maxHp;
      g.hp = Math.max(0, (Number.isFinite(g.hp) ? g.hp : maxHp) - dmg);
      if (opts.blood !== false && Math.random() < 0.4) addBloodStain(g.x, g.y, opts.dir || angleTo(player.x, player.y, g.x, g.y), 0.45);
      if (opts.push) {
        const a = angleTo(player.x, player.y, g.x, g.y);
        moveWithCollide(g, g.x + Math.cos(a) * opts.push, g.y + Math.sin(a) * opts.push);
      }
      if (g.hp <= 0) {
        homelanderKill(g, opts.dir || angleTo(player.x, player.y, g.x, g.y), false);
        return true;
      }
      g.state = "ALERT";
      g.target = { x: player.x, y: player.y, source: "SURVIVAL_POWER" };
      g.lastSeen = { x: player.x, y: player.y, t: 0 };
      return false;
    }

    function survivalTargets(radius, maxTargets = 999, fromX = player.x, fromY = player.y) {
      const out = [];
      for (const g of guards) {
        const d = dist(fromX, fromY, g.x, g.y);
        if (d <= radius) out.push({ g, d });
      }
      out.sort((a, b) => a.d - b.d);
      return out.slice(0, maxTargets).map((row) => row.g);
    }

    function survivalNearestEnemy(radius = 900) {
      const list = survivalTargets(radius, 1);
      return list[0] || null;
    }

    function survivalCooldown(id, base, level) {
      return Math.max(0.16, base * (survival.stats.cooldown || 1) * (1 - Math.min(0.38, (level - 1) * 0.035)));
    }

    function survivalAbilityReady(id, dt, base, level) {
      survival.cooldowns[id] = Math.max(0, (survival.cooldowns[id] || 0) - dt);
      if (survival.cooldowns[id] > 0) return false;
      survival.cooldowns[id] = survivalCooldown(id, base, level);
      return true;
    }

    function spawnSurvivalRing(x, y, maxRadius, color, opts = {}) {
      if (fx.rings.length > 28) fx.rings.shift();
      const life = opts.life || 0.5;
      fx.rings.push({
        x,
        y,
        maxRadius,
        color: color || "255,200,80",
        life,
        maxLife: life,
        width: opts.width || 4,
        fill: !!opts.fill,
        kind: opts.kind || "expand"
      });
    }

    function fireSurvivalLine(id, target, damage, color, width, rangeMul = 1) {
      if (!target) return;
      const dir = angleTo(player.x, player.y, target.x, target.y);
      const range = dist(player.x, player.y, target.x, target.y) * rangeMul;
      const end = rayEndBeforeMapBlock(player.x, player.y, dir, range);
      const traceLife = 0.32;
      fx.traces.push({
        x0: player.x,
        y0: player.y,
        x1: end.x,
        y1: end.y,
        life: traceLife,
        maxLife: traceLife,
        color,
        width: width * 1.5,
        glow: true
      });
      fx.traces.push({
        x0: player.x,
        y0: player.y,
        x1: end.x,
        y1: end.y,
        life: traceLife * 0.9,
        maxLife: traceLife,
        color,
        width: width * 3.8,
        glow: true,
        soft: true
      });
      spawnSurvivalRing(end.x, end.y, 18 + width * 4, color, { life: 0.22, width: 2.2 });
      const lane = 16 + width * 2;
      for (const g of guards.slice()) {
        const dx = g.x - player.x;
        const dy = g.y - player.y;
        const f = dx * Math.cos(dir) + dy * Math.sin(dir);
        if (f < 0 || f > range) continue;
        const side = Math.abs(dx * -Math.sin(dir) + dy * Math.cos(dir));
        if (side <= lane && !rayBlockedByMap(player.x, player.y, g.x, g.y)) {
          damageGuardSurvival(g, damage, { dir, push: id === "sonicBoom" ? 20 : 0 });
        }
      }
    }

    function updateSurvivalAbilities(dt) {
      if (!isSurvivalRun() || survival.pendingChoices || !player.alive) return;
      survival.elapsed += dt;
      if (survival.stats.regen > 0 && player.health < player.maxHealth) {
        player.health = Math.min(player.maxHealth, player.health + survival.stats.regen * dt);
      }
      const areaMul = (survival.stats.area || 1);
      const lvl = (id) => survivalAbilityLevel(id);

      if (lvl("flameAura") > 0) {
        const l = lvl("flameAura");
        const radius = (58 + l * 11) * areaMul;
        for (const g of survivalTargets(radius, 999)) damageGuardSurvival(g, (0.55 + l * 0.13) * dt, { blood: false });
        if (Math.random() < dt * (7 + l * 1.4)) {
          spawnFire(player.x + (Math.random() - 0.5) * radius, player.y + (Math.random() - 0.5) * radius, 1.1 + l * 0.08);
        }
        if (Math.random() < dt * (1.6 + l * 0.25)) {
          spawnSurvivalRing(player.x, player.y, radius, "255,140,50", { life: 0.38, width: 3.8, fill: true });
        }
      }
      if (lvl("orbitalBlades") > 0) {
        const l = lvl("orbitalBlades");
        const radius = (72 + l * 8) * areaMul;
        for (const g of survivalTargets(radius, 2 + Math.floor(l / 2))) damageGuardSurvival(g, (0.85 + l * 0.16) * dt * 4, { push: 6 });
      }
      if (lvl("acidTrail") > 0 && player.moving && Math.random() < dt * (5 + lvl("acidTrail"))) {
        spawnFire(player.x, player.y, 0.9 + lvl("acidTrail") * 0.08);
        spawnSurvivalRing(player.x, player.y, 28 + lvl("acidTrail") * 4, "120,255,90", { life: 0.28, width: 2.6, fill: true });
        for (const g of survivalTargets(42 + lvl("acidTrail") * 5, 999)) damageGuardSurvival(g, 0.38 + lvl("acidTrail") * 0.08, { blood: false });
      }
      if (lvl("boomerang") > 0 && survivalAbilityReady("boomerang", dt, 1.8, lvl("boomerang"))) {
        const target = survivalNearestEnemy(760);
        playSurvivalAbilitySfx("boomerang", "whoosh", 0.75);
        fireSurvivalLine("boomerang", target, 1.35 + lvl("boomerang") * 0.28, "210,240,255", 2.4, 1.25);
      }
      if (lvl("chainLightning") > 0 && survivalAbilityReady("chainLightning", dt, 2.25, lvl("chainLightning"))) {
        playSurvivalAbilitySfx("chainLightning", "zap", 0.95);
        let from = { x: player.x, y: player.y };
        for (let i = 0; i < 2 + Math.floor(lvl("chainLightning") / 2); i++) {
          const target = survivalTargets(250 + lvl("chainLightning") * 24, 1, from.x, from.y)[0];
          if (!target) break;
          fx.traces.push({ x0: from.x, y0: from.y, x1: target.x, y1: target.y, life: 0.28, maxLife: 0.28, color: "110,210,255", width: 4.2, glow: true });
          fx.traces.push({ x0: from.x, y0: from.y, x1: target.x, y1: target.y, life: 0.24, maxLife: 0.28, color: "200,245,255", width: 8.5, glow: true, soft: true });
          spawnSurvivalRing(target.x, target.y, 34 + lvl("chainLightning") * 4, "120,220,255", { life: 0.26, width: 3, fill: true });
          damageGuardSurvival(target, 1.05 + lvl("chainLightning") * 0.22, { blood: false, stunSec: 0.08 });
          from = target;
        }
      }
      if (lvl("meteor") > 0 && survivalAbilityReady("meteor", dt, 3.1, lvl("meteor"))) {
        const target = survivalNearestEnemy(900);
        if (target) {
          const r = (48 + lvl("meteor") * 7) * areaMul;
          spawnExplosionAt(target.x, target.y, { clear: false, count: 36, palette: ["#ffd887", "#ff9b4f", "#ff553a", "#fff2b8"], speedMin: 160, speedRange: 320 });
          spawnSurvivalRing(target.x, target.y, r, "255,170,60", { life: 0.55, width: 5.5, fill: true });
          spawnSurvivalRing(target.x, target.y, r * 0.65, "255,240,180", { life: 0.38, width: 3.2 });
          playSurvivalAbilitySfx("meteor", "blast", 1);
          shakeScreen(5, 0.14);
          for (const g of survivalTargets(r, 999, target.x, target.y)) damageGuardSurvival(g, 1.55 + lvl("meteor") * 0.35, { strong: true, push: 12 });
        }
      }
      if (lvl("bloodWave") > 0 && survivalAbilityReady("bloodWave", dt, 2.8, lvl("bloodWave"))) {
        const r = (86 + lvl("bloodWave") * 13) * areaMul;
        fx.slashes.push({ x: player.x, y: player.y, dir: player.dir, kind: "fist", hit: true, range: r, width: Math.PI * 2, color: "255,85,80", life: 0.42, maxLife: 0.42 });
        spawnSurvivalRing(player.x, player.y, r, "255,70,65", { life: 0.48, width: 5, fill: true });
        spawnSurvivalRing(player.x, player.y, r * 0.72, "255,150,120", { life: 0.32, width: 3.2 });
        playSurvivalAbilitySfx("bloodWave", "whoosh", 0.85);
        for (const g of survivalTargets(r, 999)) damageGuardSurvival(g, 0.92 + lvl("bloodWave") * 0.2, { push: 24 });
      }
      if (lvl("homingShard") > 0 && survivalAbilityReady("homingShard", dt, 1.5, lvl("homingShard"))) {
        for (const g of survivalTargets(780, 2 + Math.floor(lvl("homingShard") / 2))) {
          fireSurvivalLine("homingShard", g, 0.82 + lvl("homingShard") * 0.14, "190,245,220", 1.8, 1);
        }
      }
      if (lvl("vortex") > 0 && survivalAbilityReady("vortex", dt, 4.2, lvl("vortex"))) {
        const target = survivalNearestEnemy(620);
        if (target) {
          const r = (82 + lvl("vortex") * 11) * areaMul;
          for (const g of survivalTargets(r, 999, target.x, target.y)) {
            const a = angleTo(g.x, g.y, target.x, target.y);
            moveWithCollide(g, g.x + Math.cos(a) * 20, g.y + Math.sin(a) * 20);
            damageGuardSurvival(g, 0.8 + lvl("vortex") * 0.18, { blood: false });
          }
          spawnExplosionAt(target.x, target.y, { clear: false, count: 28, palette: ["#75f7ff", "#9c7cff", "#ffffff", "#c8f0ff"], speedMin: 140, speedRange: 280 });
          spawnSurvivalRing(target.x, target.y, r, "140,220,255", { life: 0.52, width: 4.8, fill: true, kind: "contract" });
          spawnSurvivalRing(target.x, target.y, r * 0.55, "180,120,255", { life: 0.4, width: 3.4 });
          playSurvivalAbilitySfx("vortex", "whoosh", 0.8);
        }
      }
      if (lvl("laserTurret") > 0 && survivalAbilityReady("laserTurret", dt, 1.25, lvl("laserTurret"))) {
        playSurvivalAbilitySfx("laserTurret", "zap", 0.7);
        fireSurvivalLine("laserTurret", survivalNearestEnemy(820), 1.1 + lvl("laserTurret") * 0.24, isButcherCharacter() ? "255,220,80" : "255,55,55", 3.1, 1);
      }
      if (lvl("knifeFan") > 0 && survivalAbilityReady("knifeFan", dt, 1.75, lvl("knifeFan"))) {
        const count = 3 + Math.floor(lvl("knifeFan") / 2);
        for (let i = 0; i < count; i++) {
          const dir = player.dir + (i - (count - 1) / 2) * 0.28;
          const end = rayEndBeforeMapBlock(player.x, player.y, dir, 360 + lvl("knifeFan") * 22);
          fireSurvivalLine("knifeFan", { x: end.x, y: end.y }, 0.78 + lvl("knifeFan") * 0.16, "235,245,255", 1.7, 1);
        }
      }
      if (lvl("shockNova") > 0 && survivalAbilityReady("shockNova", dt, 3.4, lvl("shockNova"))) {
        const r = (110 + lvl("shockNova") * 14) * areaMul;
        spawnSurvivalRing(player.x, player.y, r, "180,235,255", { life: 0.58, width: 6.5, fill: true });
        spawnSurvivalRing(player.x, player.y, r * 0.78, "255,255,255", { life: 0.42, width: 4 });
        fx.slashes.push({ x: player.x, y: player.y, dir: 0, kind: "fist", hit: true, range: r, width: Math.PI * 2, color: "200,240,255", life: 0.35, maxLife: 0.35 });
        playSurvivalAbilitySfx("shockNova", "blast", 1);
        for (const g of survivalTargets(r, 999)) damageGuardSurvival(g, 1.05 + lvl("shockNova") * 0.22, { blood: false, push: 16 });
        shakeScreen(7, 0.22);
      }
      if (lvl("blackTendrils") > 0 && survivalAbilityReady("blackTendrils", dt, 2.05, lvl("blackTendrils"))) {
        playSurvivalAbilitySfx("blackTendrils", "whoosh", 0.9);
        sfxTentacleWhip(0.72);
        for (const g of survivalTargets(300 + lvl("blackTendrils") * 24, 1 + Math.floor(lvl("blackTendrils") / 2))) {
          const dir = angleTo(player.x, player.y, g.x, g.y);
          spawnButcherTentacleLine(player.x, player.y, g.x, g.y, Math.random() < 0.5 ? 1 : -1, dir);
          damageGuardSurvival(g, 1.12 + lvl("blackTendrils") * 0.2, { dir, push: 10 });
          g.sleepT = Math.max(g.sleepT || 0, 0.22 + lvl("blackTendrils") * 0.03);
        }
      }
      if (lvl("sonicBoom") > 0 && survivalAbilityReady("sonicBoom", dt, 2.55, lvl("sonicBoom"))) {
        playSurvivalAbilitySfx("sonicBoom", "blast", 0.95);
        fireSurvivalLine("sonicBoom", { x: player.x + Math.cos(player.dir) * 640, y: player.y + Math.sin(player.dir) * 640 }, 1.3 + lvl("sonicBoom") * 0.25, "180,235,255", 5.2, 1);
      }
      if (lvl("sawDisc") > 0 && survivalAbilityReady("sawDisc", dt, 2.0, lvl("sawDisc"))) {
        playSurvivalAbilitySfx("sawDisc", "whoosh", 0.8);
        for (const g of survivalTargets(650, 2 + Math.floor(lvl("sawDisc") / 3))) {
          damageGuardSurvival(g, 1.25 + lvl("sawDisc") * 0.22, { push: 8 });
          fx.slashes.push({ x: g.x, y: g.y, dir: angleTo(player.x, player.y, g.x, g.y), kind: "knife", hit: true, range: 48, width: Math.PI * 1.1, color: "230,245,255", life: 0.34, maxLife: 0.34 });
          spawnSurvivalRing(g.x, g.y, 38, "210,240,255", { life: 0.24, width: 2.8 });
        }
      }
    }

    // ===================== HOMELANDER =====================
    let homelanderLaserAccum = 0;
    let homelanderLaserDamageT = 0;
    let homelanderLaserEnvT = 0;
    let homelanderFlightBreakT = 0;
    let homelanderFlightKillT = 0;
    let homelanderLaserSfxT = 0;
    const homelanderBeams = [];
    const homelanderShockwaves = [];
    let homelanderShockLeg = 0;

    function superLaserVisuals() {
      if (isButcherCharacter()) {
        return {
          beamHot: "255,210,32",
          beamWarm: "255,232,80",
          core: "255,252,190",
          glow: "255,210,42",
          scorchFireChance: 0.78
        };
      }
      if (isThorCharacter()) {
        const storm = thorStormActive();
        return {
          beamHot: storm ? "160,235,255" : "120,210,255",
          beamWarm: storm ? "100,200,255" : "90,185,255",
          core: storm ? "235,250,255" : "210,240,255",
          glow: storm ? "80,220,255" : "70,200,255",
          scorchFireChance: storm ? 0.35 : 0.22
        };
      }
      return {
        beamHot: "255,22,22",
        beamWarm: "255,64,52",
        core: "255,150,140",
        glow: "255,40,40",
        scorchFireChance: 0.42
      };
    }

    function getSuperEyeLocalKey() {
      if (isThorCharacter()) {
        return player.flying && spriteUsable(sprites.thorFly) ? "thorFly" : "thor";
      }
      if (isButcherCharacter()) {
        return player.flying && spriteUsable(sprites.butcherDash) ? "butcherDash" : "butcher";
      }
      return player.flying && spriteUsable(sprites.homelanderFly) ? "homelanderFly" : "homelander";
    }

    function getSuperEyeFrameScaleForKey(key, stormActive = false) {
      if (key === "thorFly") return stormActive ? 1.16 : 1.1;
      if (key === "butcherDash") return 1.08;
      if (key === "homelanderFly") return 1.07;
      return 1;
    }

    function getSuperEyeFrameScale() {
      return getSuperEyeFrameScaleForKey(getSuperEyeLocalKey(), isThorCharacter() && thorStormActive());
    }

    function superSpriteLocalToWorld(lx, ly, dir) {
      const rot = dir - Math.PI / 2;
      const cos = Math.cos(rot);
      const sin = Math.sin(rot);
      return {
        x: player.x + lx * cos - ly * sin,
        y: player.y + lx * sin + ly * cos
      };
    }

    function getHomelanderEyePositions() {
      const key = getSuperEyeLocalKey();
      const cfg = getSuperEyeConfig(key);
      const dir = player.dir;
      const scale = getSuperEyeFrameScale();
      return [
        superSpriteLocalToWorld(cfg.left.lx * scale, cfg.left.ly * scale, dir),
        superSpriteLocalToWorld(cfg.right.lx * scale, cfg.right.ly * scale, dir)
      ];
    }

    function addScorch(x, y, r) {
      const cap = superCombatHeavy() ? 280 : 460;
      if (fx.scorch.length > cap) fx.scorch.splice(0, 40);
      fx.scorch.push({ x, y, r, life: 3 + Math.random() * 2.5, maxLife: 5.5 });
    }

    // Pequena chama (que vira fumaca leve e some). Usada onde o laser do
    // Homelander destroi paredes/objetos.
    function spawnFire(x, y, scale = 1) {
      if (fx.fires.length > 52) fx.fires.shift();
      const maxLife = (4.2 + Math.random() * 2.8) * scale;
      fx.fires.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        life: maxLife,
        maxLife,
        r: 5 + Math.random() * 5,
        seed: Math.random() * 1000
      });
    }

    // Emissor que respinga sangue por um tempo (ex.: morte por laser).
    function addBloodSpray(x, y, dir, seconds = 1.5) {
      if (fx.bloodSprays.length > 24) fx.bloodSprays.shift();
      fx.bloodSprays.push({
        x, y,
        dir: Number.isFinite(dir) ? dir : 0,
        life: seconds,
        maxLife: seconds
      });
    }

    // Destroi objetos do cenario (props) num raio, com detritos, marca de queimado
    // e, as vezes, fogo leve. Retorna quantos foram destruidos.
    function destroyPropsNear(x, y, radius, igniteChance = 0, sfx = "default") {
      let count = 0;
      for (let i = mapProps.length - 1; i >= 0; i--) {
        const p = mapProps[i];
        if (dist(x, y, p.x, p.y) > radius + (p.r || 10)) continue;
        mapProps.splice(i, 1);
        count++;
        addScorch(p.x, p.y, 11);
        spawnExplosionAt(p.x, p.y, {
          clear: false,
          count: 9,
          speedMin: 70,
          speedRange: 180,
          sizeMin: 2,
          sizeRange: 5,
          palette: ["#6a5238", "#8a6838", "#4a4a52", "#3f2d1e", "#9a8a6a"]
        });
        if (Math.random() < igniteChance) spawnFire(p.x, p.y, 1);
      }
      if (count > 0) {
        if (sfx === "mjolnir") sfxMjolnirDestroy();
        else playSfx("gunImpact", 0.45, { rate: 0.85 });
      }
      return count;
    }

    function spawnGoreSplit(x, y, dir) {
      const scale = DEATH_GORE_SCALE;
      const pieces = 1 + (Math.random() < 0.35 ? 1 : 0);
      const baseDir = Number.isFinite(dir) ? dir : 0;
      if (fx.gore.length > 400) fx.gore.splice(0, fx.gore.length - 400);
      for (let i = 0; i < pieces; i++) {
        const a = baseDir + Math.PI * 0.5 + (i - (pieces - 1) / 2) * 0.9 + (Math.random() - 0.5) * 0.5;
        const speed = (70 + Math.random() * 130) * scale;
        fx.gore.push({
          x: x + (Math.random() - 0.5) * 4,
          y: y + (Math.random() - 0.5) * 4,
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed,
          rot: baseDir,
          spin: (Math.random() - 0.5) * 7,
          w: (8 + Math.random() * 8) * scale,
          h: (3 + Math.random() * 3) * scale,
          life: 0.7 + Math.random() * 0.5,
          maxLife: 1.2,
          color: Math.random() < 0.5 ? "#8a0f12" : "#b3161a"
        });
      }
      const stainCount = 3 + Math.floor(2 * scale);
      for (let i = 0; i < stainCount; i++) {
        addBloodStain(
          x + (Math.random() - 0.5) * 14,
          y + (Math.random() - 0.5) * 14,
          baseDir + (Math.random() - 0.5) * 1.6,
          (0.65 + Math.random() * 0.45) * scale
        );
      }
      const chunkCount = Math.max(1, Math.round((pieces + 1) * scale));
      for (let i = 0; i < chunkCount; i++) {
        if (fx.gibs.length > 320) fx.gibs.shift();
        const ca = Math.random() * Math.PI * 2;
        const cd = (3 + Math.random() * 12) * scale;
        fx.gibs.push({
          x: x + Math.cos(ca) * cd,
          y: y + Math.sin(ca) * cd,
          rot: Math.random() * Math.PI * 2,
          w: (5 + Math.random() * 7) * scale,
          h: (2 + Math.random() * 3) * scale,
          color: Math.random() < 0.5 ? "#7a0d10" : "#9c1318"
        });
      }
      spawnExplosionAt(x, y, {
        clear: false,
        count: Math.max(6, Math.round(12 * scale)),
        speedMin: 55,
        speedRange: 120,
        sizeMin: 1.4,
        sizeRange: 2.4,
        palette: ["#b3161a", "#8a0f12", "#d83a2c", "#5c0a0c", "#3a0808"]
      });
    }

    // Fatia o ASSET do inimigo em tiras (2-3) que voam e ficam no chao, em vez de
    // gerar blocos vermelhos novos. Mantem o sangue manchado.
    function spawnSpriteGore(g, dir, fromLaser = false, light = false) {
      const baseDir = Number.isFinite(dir) ? dir : angleTo(player.x, player.y, g.x, g.y);
      const frame = pickGuardFrame(g, performance.now());
      const x = g.x;
      const y = g.y;
      const lite = light || superCombatHeavy();

      // Sangue manchado generoso ao redor do corte.
      const stainCount = lite ? 1 : Math.max(2, Math.round(3 * DEATH_GORE_SCALE));
      for (let i = 0; i < stainCount; i++) {
        addBloodStain(
          x + (Math.random() - 0.5) * 14,
          y + (Math.random() - 0.5) * 14,
          baseDir + (Math.random() - 0.5) * 1.6,
          lite ? (0.45 + Math.random() * 0.35) : ((0.65 + Math.random() * 0.45) * DEATH_GORE_SCALE)
        );
      }

      // Morte por laser: o corpo respinga sangue por um tempo.
      if (fromLaser) addBloodSpray(x, y, baseDir, lite ? 1.0 + Math.random() * 0.7 : 1.8 + Math.random() * 1.0);

      if (frame && frame.img && spriteUsable(frame.img)) {
        const bands = lite ? 2 : (2 + (Math.random() < 0.6 ? 1 : 0));
        const rot = frame.topdown ? (player.dir) : (g.dir + Math.PI * 1.5);
        for (let b = 0; b < bands; b++) {
          if (fx.spriteGore.length > 90) fx.spriteGore.shift();
          // As tiras se separam na perpendicular ao laser.
          const sep = (b - (bands - 1) / 2);
          const a = baseDir + Math.PI * 0.5 + sep * 0.55 + (Math.random() - 0.5) * 0.4;
          const speed = 90 + Math.random() * 170;
          fx.spriteGore.push({
            img: frame.img,
            rect: frame.rect || null,
            scale: frame.scale,
            anchor: frame.anchor || null,
            band: b,
            bands,
            rot,
            x,
            y,
            vx: Math.cos(a) * speed,
            vy: Math.sin(a) * speed - Math.random() * 40,
            spin: (Math.random() - 0.5) * 3.4,
            life: 0.55 + Math.random() * 0.4,
            maxLife: 0.95
          });
        }
      } else {
        // Fallback caso o sprite nao esteja disponivel.
        spawnGoreSplit(x, y, baseDir);
        return;
      }

      // Faiscas de sangue rapidas (sem virar blocos permanentes).
      spawnExplosionAt(x, y, {
        clear: false,
        count: lite ? 4 : Math.max(5, Math.round(8 * DEATH_GORE_SCALE)),
        speedMin: 60,
        speedRange: lite ? 90 : 130,
        sizeMin: 1.4,
        sizeRange: lite ? 2.2 : 2.8,
        palette: ["#b3161a", "#8a0f12", "#d83a2c", "#5c0a0c"]
      });
    }

    function homelanderKill(g, dir, fromFlight) {
      if (guards.indexOf(g) < 0) return;
      if (isNemesisKind(g.kind)) {
        const androidMul = isThorCharacter() ? (thorStormActive() ? 1.55 : 1.22) : 1;
        damageNemesis(g, (fromFlight ? 4.5 : 1.6) * androidMul, { stunSec: 0.5 });
        return;
      }
      const killDir = Number.isFinite(dir) ? dir : angleTo(player.x, player.y, g.x, g.y);
      const lite = superCombatHeavy();
      const fromLaser = !fromFlight;
      spawnSpriteGore(g, killDir, fromLaser, lite);
      if (fromLaser) {
        spawnFire(g.x, g.y, 1.15);
        if (Math.random() < 0.72) {
          spawnFire(g.x + (Math.random() - 0.5) * 14, g.y + (Math.random() - 0.5) * 14, 0.95);
        }
      }
      playSuperKillSfx(g);
      removeGuard(g);
      if (isSurvivalRun()) run.survivorKills += 1;
      run.score += 60 + run.level * 6;
      grantSurvivalXp((isClownKind(g.kind) ? 4 : (isZombieKind(g.kind) ? 3 : 3.5)) * (g.leader ? 2.4 : 1), g.x, g.y);
      healThorOnKill();
    }

    function fireHomelanderLaser(dt) {
      const dir = player.dir;
      const heat = player.laserHeat;
      const visuals = superLaserVisuals();
      const androidLaserMul = isThorCharacter() ? (thorStormActive() ? 1.38 : 1.18) : 1;
      const basicLaser = isSurvivalRun() ? survivalAbilityLevel("basicLaser") : 0;
      const range = (230 + heat * 320) * androidLaserMul * (1 + basicLaser * 0.055);
      const radius = (9 + heat * 10) * (isThorCharacter() ? (thorStormActive() ? 1.35 : 1.16) : 1) * (1 + basicLaser * 0.035);
      const eyes = getHomelanderEyePositions();
      const originX = (eyes[0].x + eyes[1].x) / 2;
      const originY = (eyes[0].y + eyes[1].y) / 2;
      const end = rayEndBeforeMapBlock(originX, originY, dir, range);
      homelanderLaserEnvT = Math.max(0, homelanderLaserEnvT - dt);
      const canDamageWorld = homelanderLaserEnvT <= 0;
      if (canDamageWorld) homelanderLaserEnvT = qualityAtLeast("medium") ? 0.085 : 0.12;

      // O laser arromba portas: se o feixe parar numa porta, ela explode.
      const probeX = end.x + Math.cos(dir) * TILE * 0.5;
      const probeY = end.y + Math.sin(dir) * TILE * 0.5;
      const doorProbe = worldToCell(probeX, probeY);
      const hitDoor = getDoorAtCell(doorProbe.x, doorProbe.y);
      if (canDamageWorld && hitDoor && !hitDoor.broken) {
        openDoor(hitDoor, true, true);
        addScorch(end.x, end.y, 13);
        spawnFire(end.x, end.y, 1.05);
        if (Math.random() < 0.45) spawnFire(probeX, probeY, 0.9);
        playSfx("gunImpact", 0.7, { rate: 0.7 });
        spawnExplosionAt(end.x, end.y, {
          clear: false,
          count: 16,
          speedMin: 80,
          speedRange: 200,
          sizeMin: 2,
          sizeRange: 5,
          palette: ["#caa36a", "#8a6838", "#5a4226", "#ffae4f", "#3a2a18"]
        });
      } else if (canDamageWorld &&
        doorProbe.x > 0 && doorProbe.y > 0 && doorProbe.x < W - 1 && doorProbe.y < H - 1 &&
        grid[doorProbe.y] && grid[doorProbe.y][doorProbe.x] === CELL_WALL
      ) {
        // O laser tambem perfura paredes: derruba a parede onde o feixe bate.
        grid[doorProbe.y][doorProbe.x] = CELL_FLOOR;
        addScorch(end.x, end.y, 10 + heat * 6);
        if (Math.random() < visuals.scorchFireChance) spawnFire(probeX, probeY, isButcherCharacter() ? 1.25 : 1);
        if (Math.random() < 0.35) {
          spawnExplosionAt(probeX, probeY, {
            clear: false,
            count: 5,
            speedMin: 60,
            speedRange: 180,
            sizeMin: 2,
            sizeRange: 4.5,
            palette: ["#6a6a72", "#8a8a92", "#4a4a52", "#9a8a6a", "#3a3a42"]
          });
        }
        // Remenda so a celula afetada no cache (sem reconstruir o mapa todo).
        if (!patchMapCacheCells([{ x: doorProbe.x, y: doorProbe.y }])) {
          invalidateMapCache();
        }
      }

      // Os feixes ficam em uma lista propria desenhada DEPOIS do player (por cima do corpo).
      // Sempre vermelho; quanto mais carregado, mais fino e concentrado.
      const beamColor = heat > 0.5 ? visuals.beamHot : visuals.beamWarm;
      const beamWidth = Math.max(2, 5.6 - heat * 3.2);
      for (const eye of eyes) {
        homelanderBeams.push({
          x0: eye.x,
          y0: eye.y,
          x1: end.x,
          y1: end.y,
          color: beamColor,
          coreColor: visuals.core,
          width: beamWidth
        });
      }

      const heavy = superCombatHeavy();
      const scorchEvery = heavy ? 0.095 : 0.055;
      homelanderLaserAccum += dt;
      if (homelanderLaserAccum >= scorchEvery) {
        homelanderLaserAccum = 0;
        const steps = heavy ? 2 : 4;
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          addScorch(originX + (end.x - originX) * t, originY + (end.y - originY) * t, 2.5 + heat * 3.5);
        }
        addScorch(end.x, end.y, 7 + heat * 7);
        if (!heavy || Math.random() < 0.4) shakeScreen(1.4 + heat * 2.2, 0.05);
      }

      homelanderLaserDamageT -= dt;
      const damageTick = !heavy || homelanderLaserDamageT <= 0;
      if (heavy && damageTick) homelanderLaserDamageT = 0.05;
      if (!damageTick) return;

      const ux = Math.cos(dir);
      const uy = Math.sin(dir);
      const beamLen = dist(originX, originY, end.x, end.y);
      let killBudget = heavy ? 14 : guards.length;
      for (let i = guards.length - 1; i >= 0; i--) {
        const g = guards[i];
        const dx = g.x - originX;
        const dy = g.y - originY;
        const forward = dx * ux + dy * uy;
        if (forward < -4 || forward > beamLen + 8) continue;
        const perp = Math.abs(dx * -uy + dy * ux);
        if (perp > radius + (g.r || 9)) continue;
        // Inimigos no nucleo do feixe nao precisam de raycast extra.
        if (perp > radius * 0.45 && rayBlockedByMap(originX, originY, g.x, g.y)) continue;
        homelanderKill(g, dir, false);
        if (--killBudget <= 0) break;
      }

      // O laser tambem destroi objetos do cenario no caminho do feixe,
      // deixando alguns pegando fogo levemente.
      if (canDamageWorld) {
        let propHits = 0;
        for (let i = mapProps.length - 1; i >= 0; i--) {
          const p = mapProps[i];
          const dx = p.x - originX;
          const dy = p.y - originY;
          const forward = dx * ux + dy * uy;
          if (forward < -4 || forward > beamLen + 8) continue;
          const perp = Math.abs(dx * -uy + dy * ux);
          if (perp > radius + (p.r || 10)) continue;
          if (rayBlockedByMap(originX, originY, p.x, p.y)) continue;
          mapProps.splice(i, 1);
          addScorch(p.x, p.y, 12);
          spawnFire(p.x, p.y, isButcherCharacter() ? 1.25 : 1.05);
          if (Math.random() < 0.42) spawnFire(p.x + (Math.random() - 0.5) * 10, p.y + (Math.random() - 0.5) * 10, 0.85);
          spawnExplosionAt(p.x, p.y, {
            clear: false,
            count: 5,
            speedMin: 70,
            speedRange: 190,
            sizeMin: 2,
            sizeRange: 5,
            palette: ["#6a5238", "#8a6838", "#4a4a52", "#3f2d1e", "#9a8a6a"]
          });
          propHits++;
          if (propHits >= (qualityAtLeast("medium") ? 8 : 5)) break;
        }
      }
    }

    function drawThorAuraBolt(ctx, x1, y1, x2, y2, now, seed, alpha) {
      const segs = 4;
      const dx = x2 - x1;
      const dy = y2 - y1;
      const plen = Math.hypot(dx, dy) || 1;
      const nx = -dy / plen;
      const ny = dx / plen;
      const jitter = 5.5;
      ctx.strokeStyle = "rgba(175,240,255," + alpha + ")";
      ctx.lineWidth = 1.15;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      for (let s = 1; s < segs; s++) {
        const t = s / segs;
        const wobble = Math.sin(now / 55 + seed + s * 2.4) * jitter;
        ctx.lineTo(x1 + dx * t + nx * wobble, y1 + dy * t + ny * wobble);
      }
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.strokeStyle = "rgba(235,250,255," + (alpha * 0.55) + ")";
      ctx.lineWidth = 0.55;
      ctx.stroke();
    }

    function pointSegmentDistance(px, py, x0, y0, x1, y1) {
      const dx = x1 - x0;
      const dy = y1 - y0;
      const len2 = dx * dx + dy * dy;
      if (len2 <= 0.0001) return dist(px, py, x0, y0);
      const t = clamp(((px - x0) * dx + (py - y0) * dy) / len2, 0, 1);
      return dist(px, py, x0 + dx * t, y0 + dy * t);
    }

    function thorHammerKill(g, dir) {
      if (!g || guards.indexOf(g) < 0) return;
      const lite = superCombatHeavy();
      spawnSpriteGore(g, dir, false, lite);
      playSuperKillSfx(g);
      removeGuard(g);
      if (isSurvivalRun()) run.survivorKills += 1;
      run.score += 70 + run.level * 7;
      grantSurvivalXp((isClownKind(g.kind) ? 4 : (isZombieKind(g.kind) ? 3 : 3.5)) * (g.leader ? 2.4 : 1), g.x, g.y);
      healThorOnKill();
    }

    function damageGuardWithMjolnir(g, amount, dir, strong = false) {
      if (!g || guards.indexOf(g) < 0) return false;
      sfxMjolnirHit();
      if (isNemesisKind(g.kind)) {
        return damageNemesis(g, amount * 1.15, { strong, stunSec: strong ? 0.5 : 0.18 });
      }
      const maxHp = g.maxHp || (isZombieKind(g.kind) ? 1.75 : (isClownKind(g.kind) ? 1.25 : 1));
      g.maxHp = maxHp;
      g.hp = Math.max(0, (Number.isFinite(g.hp) ? g.hp : maxHp) - amount * survivalDamageMul());
      addBloodStain(g.x, g.y, dir, strong ? 0.8 : 0.45);
      if (g.hp <= 0) {
        thorHammerKill(g, dir);
        return true;
      }
      g.state = "ALERT";
      g.target = { x: player.x, y: player.y, source: "MJOLNIR" };
      g.lastSeen = { x: player.x, y: player.y, t: 0 };
      if (strong) {
        const pushDir = angleTo(player.mjolnirX, player.mjolnirY, g.x, g.y);
        moveWithCollide(g, g.x + Math.cos(pushDir) * 18, g.y + Math.sin(pushDir) * 18);
      }
      return false;
    }

    function breakWorldAlongMjolnirSegment(x0, y0, x1, y1) {
      const length = Math.max(1, dist(x0, y0, x1, y1));
      const steps = Math.max(1, Math.ceil(length / (TILE * 0.35)));
      const changed = [];
      const seen = new Set();
      let brokeWorld = false;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = x0 + (x1 - x0) * t;
        const y = y0 + (y1 - y0) * t;
        const c = worldToCell(x, y);
        for (let oy = -1; oy <= 1; oy++) {
          for (let ox = -1; ox <= 1; ox++) {
            if (Math.abs(ox) + Math.abs(oy) > 1) continue;
            const cx = c.x + ox;
            const cy = c.y + oy;
            if (cx <= 0 || cy <= 0 || cx >= W - 1 || cy >= H - 1) continue;
            const key = cx + "," + cy;
            if (seen.has(key)) continue;
            seen.add(key);
            const cell = grid[cy] ? grid[cy][cx] : undefined;
            if (cell === CELL_WALL) {
              grid[cy][cx] = CELL_FLOOR;
              changed.push({ x: cx, y: cy });
              brokeWorld = true;
              const wx = (cx + 0.5) * TILE;
              const wy = (cy + 0.5) * TILE;
              spawnExplosionAt(wx, wy, {
                clear: false,
                count: superCombatHeavy() ? 3 : 6,
                speedMin: 70,
                speedRange: 190,
                sizeMin: 2,
                sizeRange: 5,
                palette: ["#777780", "#9999a2", "#4a4a52", "#a89572", "#35353d"]
              });
            } else if (cell === CELL_DOOR_CLOSED) {
              const door = getDoorAtCell(cx, cy);
              if (door && !door.broken) {
                openDoor(door, true, true);
                brokeWorld = true;
              }
            }
          }
        }
        if (destroyPropsNear(x, y, 24, 0, "mjolnir") > 0) brokeWorld = true;
      }
      if (brokeWorld) sfxMjolnirDestroy();
      if (changed.length && !patchMapCacheCells(changed)) invalidateMapCache();
      return changed.length;
    }

    function emitThorLightning(x, y, maxTargets = 3, radius = 135, damage = 1.15) {
      const targets = guards
        .filter((g) => dist(x, y, g.x, g.y) <= radius)
        .sort((a, b) => dist(x, y, a.x, a.y) - dist(x, y, b.x, b.y))
        .slice(0, maxTargets);
      for (const g of targets) {
        const gx = g.x;
        const gy = g.y;
        fx.traces.push({ x0: x, y0: y, x1: gx, y1: gy, life: 0.18, maxLife: 0.18, color: "125,225,255", width: 3.4, glow: true });
        fx.traces.push({ x0: x, y0: y, x1: gx, y1: gy, life: 0.14, maxLife: 0.18, color: "235,252,255", width: 7.5, glow: true, soft: true });
        damageGuardWithMjolnir(g, damage, angleTo(x, y, gx, gy), true);
      }
      sfxMjolnirLightning();
    }

    function triggerThorStormStrike() {
      if (!thorStormActive() || !player.alive) return;
      const angle = Math.random() * Math.PI * 2;
      const radius = 45 + Math.random() * 155;
      let tx = player.x + Math.cos(angle) * radius;
      let ty = player.y + Math.sin(angle) * radius;
      let target = null;
      let best = 92;
      for (const g of guards) {
        const d = dist(tx, ty, g.x, g.y);
        if (d < best) {
          best = d;
          target = g;
        }
      }
      if (target) {
        tx = target.x;
        ty = target.y;
      }
      fx.traces.push({ x0: tx - 18, y0: ty - 190, x1: tx, y1: ty, life: 0.24, maxLife: 0.24, color: "115,220,255", width: 5.5, glow: true });
      fx.traces.push({ x0: tx + 8, y0: ty - 188, x1: tx, y1: ty, life: 0.18, maxLife: 0.24, color: "245,253,255", width: 11, glow: true, soft: true });
      spawnSurvivalRing(tx, ty, 42, "120,225,255", { life: 0.3, width: 3.4, fill: true });
      for (const g of guards.slice()) {
        if (dist(tx, ty, g.x, g.y) <= 44 + (g.r || 9)) {
          damageGuardWithMjolnir(g, 1.65, angleTo(tx, ty, g.x, g.y), true);
        }
      }
      shakeSuperScreen(2.5, 0.08, 0.033);
      sfxThorStormStrike();
    }

    function damageMjolnirPath(x0, y0, x1, y1, returning) {
      const dir = angleTo(x0, y0, x1, y1);
      for (const g of guards.slice()) {
        if (g.mjolnirHitLeg === player.mjolnirLeg) continue;
        if (pointSegmentDistance(g.x, g.y, x0, y0, x1, y1) > 22 + (g.r || 9)) continue;
        g.mjolnirHitLeg = player.mjolnirLeg;
        damageGuardWithMjolnir(g, returning ? 4.6 : 4.1, dir, true);
      }
    }

    function launchThorMjolnir() {
      const chargeFrac = clamp(player.mjolnirCharge / THOR_MJOLNIR_MAX_CHARGE, 0, 1);
      const rangeBonus = isSurvivalRun() ? survivalAbilityLevel("basicLaser") * 26 : 0;
      const range = THOR_MJOLNIR_MIN_RANGE + (THOR_MJOLNIR_MAX_RANGE - THOR_MJOLNIR_MIN_RANGE) * chargeFrac + rangeBonus;
      player.mjolnirState = "outbound";
      player.mjolnirX = player.x + Math.cos(player.dir) * 24;
      player.mjolnirY = player.y + Math.sin(player.dir) * 24;
      player.mjolnirTargetX = player.x + Math.cos(player.dir) * range;
      player.mjolnirTargetY = player.y + Math.sin(player.dir) * range;
      player.mjolnirLeg += 1;
      player.mjolnirLightningT = 0;
      sfxMjolnirThrow(chargeFrac);
      broadcastNoise(player.x, player.y, 330, 0.9, "MJOLNIR");
    }

    function recallThorMjolnir() {
      if (player.mjolnirState !== "outbound" && player.mjolnirState !== "parked") return;
      player.mjolnirState = "returning";
      player.mjolnirLeg += 1;
      player.mjolnirLightningT = 0;
      player.mjolnirRequireRelease = true;
      sfxMjolnirRecall();
    }

    function moveThorMjolnir(dt, targetX, targetY, speed, returning) {
      const x0 = player.mjolnirX;
      const y0 = player.mjolnirY;
      const dx = targetX - x0;
      const dy = targetY - y0;
      const d = Math.hypot(dx, dy);
      const step = Math.min(d, speed * dt);
      if (d > 0.001) {
        player.mjolnirX += dx / d * step;
        player.mjolnirY += dy / d * step;
      }
      damageMjolnirPath(x0, y0, player.mjolnirX, player.mjolnirY, returning);
      breakWorldAlongMjolnirSegment(x0, y0, player.mjolnirX, player.mjolnirY);
      player.mjolnirSpin += dt * (returning ? 16 : 13);
      if (thorStormActive()) {
        player.mjolnirLightningT -= dt;
        if (player.mjolnirLightningT <= 0) {
          emitThorLightning(player.mjolnirX, player.mjolnirY, returning ? 4 : 3, returning ? 155 : 130, returning ? 1.5 : 1.2);
          player.mjolnirLightningT = returning ? 0.12 : 0.18;
        }
      }
      return d <= speed * dt + 0.001;
    }

    function updateThorMjolnir(dt, pressed, holding) {
      if (player.mjolnirCooldown > 0) {
        player.mjolnirCooldown = Math.max(0, player.mjolnirCooldown - dt);
        if (player.mjolnirCooldown <= 0) {
          player.mjolnirEnergy = player.mjolnirMaxEnergy;
          pushHint("Energia do Mjolnir recarregada.", 0.8);
        }
      }

      if ((player.mjolnirState === "outbound" || player.mjolnirState === "parked") && pressed) {
        recallThorMjolnir();
      }

      if (player.mjolnirState === "held") {
        player.mjolnirX = player.x;
        player.mjolnirY = player.y;
        if (player.mjolnirRequireRelease) {
          if (!holding) player.mjolnirRequireRelease = false;
        } else if (player.mjolnirCooldown <= 0 && holding && player.mjolnirEnergy > 0) {
          player.mjolnirState = "charging";
          player.mjolnirCharge = 0;
          player.mjolnirDamageT = 0;
        } else if (player.mjolnirCooldown <= 0 && !holding) {
          player.mjolnirEnergy = Math.min(player.mjolnirMaxEnergy, player.mjolnirEnergy + dt * 0.62);
        }
      } else if (player.mjolnirState === "charging") {
        if (!holding || player.mjolnirEnergy <= 0) {
          if (player.mjolnirEnergy <= 0 && player.mjolnirCooldown <= 0) {
            player.mjolnirCooldown = thorMjolnirCooldownSeconds();
            pushHint("Energia esgotada. Mjolnir em recarga.", 0.9);
          }
          launchThorMjolnir();
        } else {
          const drain = thorStormActive() ? 0.78 : 1;
          player.mjolnirEnergy = Math.max(0, player.mjolnirEnergy - dt * drain);
          player.mjolnirCharge = Math.min(THOR_MJOLNIR_MAX_CHARGE, player.mjolnirCharge + dt);
          player.mjolnirSpin += dt * (12 + player.mjolnirCharge * 3.5);
          const chargeFrac = clamp(player.mjolnirCharge / THOR_MJOLNIR_MAX_CHARGE, 0, 1);
          player.mjolnirDamageT -= dt;
          if (player.mjolnirDamageT <= 0) {
            const spinRadius = 34 + chargeFrac * 10;
            for (const g of guards.slice()) {
              if (dist(player.x, player.y, g.x, g.y) <= spinRadius + (g.r || 9)) {
                damageGuardWithMjolnir(g, 0.62 + chargeFrac * 0.28, angleTo(player.x, player.y, g.x, g.y), false);
              }
            }
            destroyPropsNear(player.x, player.y, spinRadius, 0, "mjolnir");
            player.mjolnirDamageT = 0.13;
          }
          if (thorStormActive()) {
            player.mjolnirLightningT -= dt;
            if (player.mjolnirLightningT <= 0) {
              emitThorLightning(player.x, player.y, 2, 95, 0.85);
              player.mjolnirLightningT = 0.22;
            }
          }
        }
      } else if (player.mjolnirState === "outbound") {
        if (moveThorMjolnir(dt, player.mjolnirTargetX, player.mjolnirTargetY, THOR_MJOLNIR_OUT_SPEED, false)) {
          player.mjolnirState = "parked";
          sfxMjolnirImpact(true);
          shakeScreen(5, 0.12);
        }
      } else if (player.mjolnirState === "returning") {
        if (moveThorMjolnir(dt, player.x, player.y, THOR_MJOLNIR_RETURN_SPEED, true)) {
          player.mjolnirState = "held";
          player.mjolnirX = player.x;
          player.mjolnirY = player.y;
          sfxMjolnirCatch();
        }
      }

    }

    function updateHomelanderLaser(dt, firing) {
      player.shootCooldown = Math.max(0, player.shootCooldown - dt);

      // Recarga forcada apos esgotar a energia do laser.
      if (player.laserCooldown > 0) {
        player.laserCooldown = Math.max(0, player.laserCooldown - dt);
        if (player.laserCooldown <= 0) {
          player.laserFuel = player.laserMaxFuel;
          pushHint("Laser recarregado.", 0.7);
        }
        firing = false;
      }

      const canFire = firing && mode === MODE_PLAYING && player.laserFuel > 0;
      if (canFire) {
        const butcher = isButcherCharacter();
        const laserDrain = (isThorCharacter() && thorStormActive() ? 0.78 : 1) * (isSurvivalRun() ? Math.max(0.72, 1 - survivalAbilityLevel("basicLaser") * 0.045) : 1);
        player.laserFuel = Math.max(0, player.laserFuel - dt * laserDrain);
        player.laserActive = true;
        player.laserHeat = Math.min(1, player.laserHeat + dt * 1.9);
        player.muzzleFlashT = 0.08;
        fireHomelanderLaser(dt);
        if (butcher) {
          setSuperLaserLoop(0.82 + player.laserHeat * 0.14, 0.78 + player.laserHeat * 0.2);
        } else if (isThorCharacter()) {
          setSuperLaserLoop(1.05 + player.laserHeat * 0.22, 0.96 + player.laserHeat * 0.4);
        } else {
          setSuperLaserLoop(0.95 + player.laserHeat * 0.18, 0.9 + player.laserHeat * 0.35);
        }
        homelanderLaserSfxT -= dt;
        if (homelanderLaserSfxT <= 0) {
          broadcastNoise(player.x, player.y, 260, 0.7, "LASER");
          homelanderLaserSfxT = 0.22;
        }
        if (player.laserFuel <= 0) {
          player.laserCooldown = superLaserCooldownSeconds();
          player.laserActive = false;
          setSuperLaserLoop(0);
          pushHint("Laser superaquecido. Recarregando...", 0.9);
        }
      } else {
        player.laserActive = false;
        player.laserHeat = Math.max(0, player.laserHeat - dt * 2.4);
        setSuperLaserLoop(0);
        // Regenera devagar quando nao esta atirando nem em recarga forcada.
        if (player.laserCooldown <= 0 && !firing) {
          player.laserFuel = Math.min(player.laserMaxFuel, player.laserFuel + dt * 0.85);
        }
      }
    }

    // Gerencia o combustivel de voo: 3s de voo continuo, depois 5s de recarga.
    // Retorna se o Homelander esta efetivamente voando neste frame.
    function manageHomelanderFlyFuel(dt, wantsFly) {
      if (player.flyCooldown > 0) {
        player.flyCooldown = Math.max(0, player.flyCooldown - dt);
        if (player.flyCooldown <= 0) {
          player.flyFuel = player.flyMaxFuel;
          // Recarga concluida: o som de voo pode tocar novamente.
          player.flySoundDone = false;
          pushHint("Voo recarregado.", 0.6);
        }
        return false;
      }
      if (wantsFly && player.flyFuel > 0) {
        // O som toca UMA vez por carga; so libera de novo apos a recarga.
        if (!player.flySoundDone) {
          playSfx("fly", 1, { rate: 1 });
          player.flySoundDone = true;
        }
        player.flyFuel = Math.max(0, player.flyFuel - dt);
        if (player.flyFuel <= 0) {
          player.flyCooldown = superMoveCooldownSeconds();
          pushHint("Voo esgotado. Recarregando...", 0.8);
          return false;
        }
        return true;
      }
      // Regenera devagar quando nao esta voando.
      if (!wantsFly) {
        player.flyFuel = Math.min(player.flyMaxFuel, player.flyFuel + dt * 0.6);
        // Se reabasteceu totalmente sem entrar em recarga, libera o som de novo.
        if (player.flyFuel >= player.flyMaxFuel) player.flySoundDone = false;
      }
      return false;
    }

    function playButcherDashSfx() {
      playSfx("fly", 0.82, { rate: 0.74 });
      playSfx("gunImpact", 0.42, { rate: 0.72 });
      playTone("sawtooth", 118, 0.12, 0.06, 58);
      playDelayedTone(34, "triangle", 260, 0.06, 0.026, 120);
    }

    function manageButcherDashFuel(dt, wantsDash, vx, vy) {
      if (player.butcherDashT > 0) {
        player.butcherDashT = Math.max(0, player.butcherDashT - dt);
        if (player.butcherDashT <= 0) {
          player.butcherDashPairs = 0;
          player.butcherDashPairT = 0;
          if (player.flyFuel <= 0) {
            player.flyCooldown = superMoveCooldownSeconds();
            pushHint("Dash esgotado. Recarregando...", 0.75);
          }
        }
        return true;
      }

      if (player.flyCooldown > 0) {
        player.flyCooldown = Math.max(0, player.flyCooldown - dt);
        if (player.flyCooldown <= 0) {
          player.flyFuel = player.flyMaxFuel;
          pushHint("Dash recarregado.", 0.6);
        }
        return false;
      }

      if (wantsDash && mode === MODE_PLAYING && player.flyFuel > 0) {
        player.flyFuel -= 1;
        player.butcherDashDir = (vx !== 0 || vy !== 0) ? Math.atan2(vy, vx) : player.dir;
        player.butcherDashT = BUTCHER_DASH_DURATION * (1 + (isSurvivalRun() ? survivalAbilityLevel("basicMove") * 0.05 : 0));
        player.butcherDashPairs = 0;
        player.butcherDashPairT = 0;
        playButcherDashSfx();
        broadcastNoise(player.x, player.y, 300, 0.9, "DASH");
        return true;
      }

      return false;
    }

    function butcherKill(g, dir, source = "dash") {
      if (guards.indexOf(g) < 0) return;
      if (isNemesisKind(g.kind)) {
        damageNemesis(g, source === "tentacle" ? 3.4 : 4.2, { stunSec: 0.45 });
        return;
      }
      const splitDir = Number.isFinite(dir) ? dir : angleTo(player.x, player.y, g.x, g.y);
      const lite = superCombatHeavy();
      spawnSpriteGore(g, splitDir, true, lite);
      if (!lite) {
        addBloodSpray(g.x, g.y, splitDir + Math.PI * 0.5, 1.2);
        addBloodSpray(g.x, g.y, splitDir - Math.PI * 0.5, 1.2);
      }
      playSuperKillSfx(g);
      removeGuard(g);
      run.score += 70 + run.level * 7;
      grantSurvivalXp((isClownKind(g.kind) ? 4 : (isZombieKind(g.kind) ? 3 : 3.5)) * (g.leader ? 2.4 : 1), g.x, g.y);
      healThorOnKill();
    }

    function spawnButcherTentacleLine(x0, y0, x1, y1, side, dir) {
      if (fx.tentacles.length > 36) fx.tentacles.splice(0, fx.tentacles.length - 36);
      const px = Math.cos(dir + Math.PI / 2);
      const py = Math.sin(dir + Math.PI / 2);
      fx.tentacles.push({
        x0, y0, x1, y1,
        cx: (x0 + x1) * 0.5 + px * side * (18 + Math.random() * 16),
        cy: (y0 + y1) * 0.5 + py * side * (18 + Math.random() * 16),
        life: 0.28,
        maxLife: 0.28,
        width: 4.5 + Math.random() * 2.5,
        seed: Math.random() * 1000
      });
    }

    function findButcherTentacleTarget(dir) {
      const ux = Math.cos(dir);
      const uy = Math.sin(dir);
      let best = null;
      for (const g of guards) {
        const dx = g.x - player.x;
        const dy = g.y - player.y;
        const d = Math.hypot(dx, dy);
        if (d > 210 || d < 10) continue;
        const forward = dx * ux + dy * uy;
        if (forward < -24) continue;
        const perp = Math.abs(dx * -uy + dy * ux);
        if (perp > 150) continue;
        if (rayBlockedByMap(player.x, player.y, g.x, g.y)) continue;
        const score = d + perp * 0.45 - Math.max(0, forward) * 0.12;
        if (!best || score < best.score) best = { g, score };
      }
      return best ? best.g : null;
    }

    function launchButcherTentaclePair(dir) {
      const g = findButcherTentacleTarget(dir);
      if (!g) return false;
      const px = Math.cos(dir + Math.PI / 2);
      const py = Math.sin(dir + Math.PI / 2);
      const sx = player.x - Math.cos(dir) * 4;
      const sy = player.y - Math.sin(dir) * 4;
      spawnButcherTentacleLine(sx + px * 9, sy + py * 9, g.x + px * 13, g.y + py * 13, 1, dir);
      spawnButcherTentacleLine(sx - px * 9, sy - py * 9, g.x - px * 13, g.y - py * 13, -1, dir);
      butcherKill(g, dir, "tentacle");
      sfxTentacleWhip(0.9);
      return true;
    }

    function findButcherBodyTentacleTargets(range, maxTargets) {
      return guards
        .filter((g) => {
          if (dist(player.x, player.y, g.x, g.y) > range + (g.r || 9)) return false;
          return !rayBlockedByMap(player.x, player.y, g.x, g.y);
        })
        .sort((a, b) => dist(player.x, player.y, a.x, a.y) - dist(player.x, player.y, b.x, b.y))
        .slice(0, maxTargets);
    }

    function launchButcherBodyTentacles() {
      if (!isButcherCharacter() || !player.alive || mode !== MODE_PLAYING) return false;
      if (player.superPowerCooldown > 0) return false;

      const moveBasic = isSurvivalRun() ? survivalAbilityLevel("basicMove") : 0;
      const laserBasic = isSurvivalRun() ? survivalAbilityLevel("basicLaser") : 0;
      const range = BUTCHER_TENTACLE_RANGE + laserBasic * 18;
      const maxTargets = BUTCHER_TENTACLE_MAX_TARGETS + Math.floor(moveBasic * 0.45);
      const targets = findButcherBodyTentacleTargets(range, maxTargets);

      if (targets.length === 0) {
        for (let i = -1; i <= 1; i++) {
          const dir = player.dir + i * 0.42;
          const reach = range * 0.62;
          const tx = player.x + Math.cos(dir) * reach;
          const ty = player.y + Math.sin(dir) * reach;
          const px = Math.cos(dir + Math.PI / 2);
          const py = Math.sin(dir + Math.PI / 2);
          spawnButcherTentacleLine(
            player.x + px * (8 + i * 3),
            player.y + py * (8 + i * 3),
            tx + px * 10,
            ty + py * 10,
            i >= 0 ? 1 : -1,
            dir
          );
        }
        sfxTentacleWhip(0.62);
      } else {
        targets.forEach((g, i) => {
          const dir = angleTo(player.x, player.y, g.x, g.y);
          const px = Math.cos(dir + Math.PI / 2);
          const py = Math.sin(dir + Math.PI / 2);
          const side = i % 2 === 0 ? 1 : -1;
          const spread = 7 + (i % 3) * 4;
          spawnButcherTentacleLine(
            player.x + px * spread * side,
            player.y + py * spread * side,
            g.x + px * 12 * side,
            g.y + py * 12 * side,
            side,
            dir
          );
          butcherKill(g, dir, "tentacle");
        });
        sfxTentacleWhip(0.88);
        playSfx("tentacleSquish", 0.52, { rate: 0.86 + Math.random() * 0.12 });
      }

      player.superPowerCooldown = butcherTentacleCooldownSeconds();
      shakeSuperScreen(2.2, 0.08, 0.03);
      broadcastNoise(player.x, player.y, 280, 0.82, "TENTACLE");
      setInteractionFeedback("TENTÁCULOS", "warn", 0.45);
      return true;
    }

    function applyHomelanderShockDestruction(x, y, radius) {
      const center = worldToCell(x, y);
      const cellR = Math.ceil(radius / TILE) + 1;
      const changed = [];
      for (let cy = center.y - cellR; cy <= center.y + cellR; cy++) {
        for (let cx = center.x - cellR; cx <= center.x + cellR; cx++) {
          if (cx <= 0 || cy <= 0 || cx >= W - 1 || cy >= H - 1) continue;
          const wx = (cx + 0.5) * TILE;
          const wy = (cy + 0.5) * TILE;
          if (dist(wx, wy, x, y) > radius) continue;
          const cell = grid[cy] ? grid[cy][cx] : undefined;
          if (cell === CELL_WALL) {
            grid[cy][cx] = CELL_FLOOR;
            changed.push({ x: cx, y: cy });
            if (Math.random() < 0.35) {
              spawnExplosionAt(wx, wy, {
                clear: false,
                count: 4,
                speedMin: 60,
                speedRange: 150,
                sizeMin: 2,
                sizeRange: 4.5,
                palette: ["#6a6a72", "#8a8a92", "#4a4a52", "#9a8a6a", "#3a3a42"]
              });
            }
          } else if (cell === CELL_DOOR_CLOSED || cell === CELL_DOOR_OPEN) {
            const door = getDoorAtCell(cx, cy);
            if (door && !door.broken) openDoor(door, true, true);
          }
        }
      }
      destroyPropsNear(x, y, radius, 0.12);
      if (changed.length && !patchMapCacheCells(changed)) invalidateMapCache();
    }

    function homelanderShockHit(g, wave) {
      if (g.shockWaveLeg === wave.leg) return;
      g.shockWaveLeg = wave.leg;
      const dir = angleTo(wave.x, wave.y, g.x, g.y);
      if (isNemesisKind(g.kind)) {
        damageNemesis(g, 2.85, { stunSec: 0.38, strong: true });
        moveWithCollide(g, g.x + Math.cos(dir) * 24, g.y + Math.sin(dir) * 24);
        return;
      }
      homelanderKill(g, dir, false);
    }

    function launchHomelanderShockwave() {
      if (!isHomelanderCharacter() || !player.alive || mode !== MODE_PLAYING) return false;
      if (player.flying) {
        pushHint("Aterrisse para soltar a onda de choque.", 0.65);
        return false;
      }
      if (player.superPowerCooldown > 0) return false;

      const moveBasic = isSurvivalRun() ? survivalAbilityLevel("basicMove") : 0;
      const laserBasic = isSurvivalRun() ? survivalAbilityLevel("basicLaser") : 0;
      const maxRadius = (HOMELANDER_SHOCK_MAX_RADIUS + laserBasic * 10) * (isSurvivalRun() ? (survival.stats.area || 1) : 1);
      homelanderShockLeg += 1;
      homelanderShockwaves.push({
        x: player.x,
        y: player.y,
        radius: 14,
        maxRadius,
        speed: HOMELANDER_SHOCK_SPEED * (1 + moveBasic * 0.04),
        life: 0.58,
        maxLife: 0.58,
        leg: homelanderShockLeg,
        destructT: 0
      });

      spawnSurvivalRing(player.x, player.y, maxRadius, "255,70,55", { life: 0.58, width: 5.4, fill: true });
      spawnSurvivalRing(player.x, player.y, maxRadius * 0.72, "255,180,120", { life: 0.44, width: 3.1 });
      fx.slashes.push({
        x: player.x,
        y: player.y,
        dir: player.dir,
        kind: "fist",
        hit: true,
        range: maxRadius,
        width: Math.PI * 2,
        color: "255,90,70",
        life: 0.42,
        maxLife: 0.42
      });
      applyHomelanderShockDestruction(player.x, player.y, 22);
      playSfx("survivalBlast", 0.72, { rate: 0.78 });
      playSfx("gunImpact", 0.58, { rate: 0.62 });
      playTone("sine", 72, 0.18, 0.07, 28);
      shakeScreen(5.5, 0.14);
      broadcastNoise(player.x, player.y, 250, 0.88, "SHOCK");
      player.superPowerCooldown = homelanderShockCooldownSeconds();
      setInteractionFeedback("ONDA DE CHOQUE", "warn", 0.55);
      return true;
    }

    function updateHomelanderShockwaves(dt) {
      if (!homelanderShockwaves.length) return;
      for (let i = homelanderShockwaves.length - 1; i >= 0; i--) {
        const w = homelanderShockwaves[i];
        const prevR = w.radius;
        w.radius = Math.min(w.maxRadius, w.radius + w.speed * dt);
        w.life -= dt;
        w.destructT -= dt;
        if (w.destructT <= 0) {
          w.destructT = 0.07;
          applyHomelanderShockDestruction(w.x, w.y, w.radius);
        }
        for (const g of guards.slice()) {
          const d = dist(w.x, w.y, g.x, g.y);
          if (d < prevR - 10 || d > w.radius + (g.r || 9) + 8) continue;
          homelanderShockHit(g, w);
        }
        if (w.life <= 0 || w.radius >= w.maxRadius) {
          applyHomelanderShockDestruction(w.x, w.y, w.maxRadius);
          homelanderShockwaves.splice(i, 1);
        }
      }
    }

    function updateSuperSpecialPower(dt, pressed) {
      if (!isButcherCharacter() && !isHomelanderCharacter()) return;
      if (player.superPowerCooldown > 0) {
        player.superPowerCooldown = Math.max(0, player.superPowerCooldown - dt);
      }
      if (!pressed || mode !== MODE_PLAYING || !player.alive) return;
      if (isButcherCharacter()) launchButcherBodyTentacles();
      else if (isHomelanderCharacter()) launchHomelanderShockwave();
    }

    function updateButcherDash(dt) {
      if (!player.flying) {
        player.flyT = Math.max(0, player.flyT - dt * 2.5);
        return;
      }

      const dir = player.butcherDashDir;
      player.flyT += dt;
      const heavy = superCombatHeavy();
      if (Math.random() < dt * (heavy ? 18 : 36)) {
        const spread = (Math.random() - 0.5) * 28;
        const ox = -Math.sin(dir) * spread;
        const oy = Math.cos(dir) * spread;
        const windCap = heavy ? 56 : 92;
        if (fx.wind.length > windCap) fx.wind.splice(0, fx.wind.length - windCap);
        fx.wind.push({
          x: player.x - Math.cos(dir) * 6 + ox,
          y: player.y - Math.sin(dir) * 6 + oy,
          vx: -Math.cos(dir) * 230 + (Math.random() - 0.5) * 90,
          vy: -Math.sin(dir) * 230 + (Math.random() - 0.5) * 90,
          life: 0.24 + Math.random() * 0.16,
          maxLife: 0.4,
          len: 18 + Math.random() * 24,
          dark: true
        });
      }

      homelanderFlightKillT -= dt;
      const killTick = !heavy || homelanderFlightKillT <= 0;
      if (heavy && killTick) homelanderFlightKillT = 0.055;
      if (killTick) {
        const killR = 34;
        let killBudget = heavy ? 10 : guards.length;
        for (let i = guards.length - 1; i >= 0; i--) {
          const g = guards[i];
          if (dist(g.x, g.y, player.x, player.y) < killR + (g.r || 9)) {
            butcherKill(g, dir, "dash");
            if (--killBudget <= 0) break;
          }
        }
      }

      player.butcherDashPairT -= dt;
      if (player.butcherDashPairs < BUTCHER_DASH_MAX_PAIRS && player.butcherDashPairT <= 0) {
        if (launchButcherTentaclePair(dir)) {
          player.butcherDashPairs += 1;
          player.butcherDashPairT = 0.13;
        } else {
          player.butcherDashPairT = 0.05;
        }
      }

      homelanderFlightBreakT += dt;
      const breakEvery = heavy
        ? (qualityAtLeast("high") ? 0.07 : 0.095)
        : (qualityAtLeast("high") ? 0.045 : (qualityAtLeast("medium") ? 0.06 : 0.085));
      if (homelanderFlightBreakT >= breakEvery) {
        homelanderFlightBreakT = 0;
        homelanderBreakWalls(dir);
        destroyPropsNear(player.x + Math.cos(dir) * 18, player.y + Math.sin(dir) * 18, 36, heavy ? 0.1 : 0.18);
        if (Math.random() < (heavy ? 0.45 : 0.9)) addScorch(player.x, player.y, 7 + Math.random() * 5);
      }
      shakeSuperScreen(1.6, 0.045, dt);
    }

    function updateHomelanderFlight(dt, vx, vy) {
      if (!player.flying) {
        player.flyT = Math.max(0, player.flyT - dt * 2.5);
        return;
      }
      player.flyT += dt;
      const dir = (vx !== 0 || vy !== 0) ? Math.atan2(vy, vx) : player.dir;

      const androidLightning = isThorCharacter();
      const heavy = superCombatHeavy();
      const windRate = heavy
        ? (androidLightning ? (thorStormActive() ? 18 : 14) : 12)
        : (androidLightning ? (thorStormActive() ? 42 : 30) : 22);
      if (Math.random() < dt * windRate) {
        const spread = (Math.random() - 0.5) * 26;
        const ox = -Math.sin(dir) * spread;
        const oy = Math.cos(dir) * spread;
        const windCap = heavy
          ? 44
          : (qualityAtLeast("high") ? 84 : (qualityAtLeast("medium") ? 68 : 48));
        if (fx.wind.length > windCap) fx.wind.splice(0, fx.wind.length - windCap);
        fx.wind.push({
          x: player.x - Math.cos(dir) * 8 + ox,
          y: player.y - Math.sin(dir) * 8 + oy,
          vx: -Math.cos(dir) * 150 + (Math.random() - 0.5) * 70,
          vy: -Math.sin(dir) * 150 + (Math.random() - 0.5) * 70,
          life: 0.32 + Math.random() * 0.2,
          maxLife: 0.52,
          len: 12 + Math.random() * (androidLightning ? 30 : 18),
          electric: androidLightning
        });
      }

      homelanderFlightKillT -= dt;
      const killTick = !heavy || homelanderFlightKillT <= 0;
      if (heavy && killTick) homelanderFlightKillT = 0.055;
      if (killTick) {
        const killR = 32;
        let killBudget = heavy ? 10 : guards.length;
        for (let i = guards.length - 1; i >= 0; i--) {
          const g = guards[i];
          if (dist(g.x, g.y, player.x, player.y) < killR + (g.r || 9)) {
            homelanderKill(g, dir, true);
            if (--killBudget <= 0) break;
          }
        }
      }
      // Voando, ele tambem arrebenta paredes e destroi objetos abrindo caminho.
      homelanderFlightBreakT += dt;
      const breakEvery = heavy
        ? (androidLightning ? 0.09 : 0.11)
        : (androidLightning
          ? (thorStormActive() ? 0.04 : 0.055)
          : (qualityAtLeast("high") ? 0.075 : (qualityAtLeast("medium") ? 0.095 : 0.13)));
      if (homelanderFlightBreakT >= breakEvery) {
        homelanderFlightBreakT = 0;
        homelanderBreakWalls(dir);
        destroyPropsNear(
          player.x + Math.cos(dir) * 14,
          player.y + Math.sin(dir) * 14,
          androidLightning ? 38 : 30,
          heavy ? 0.08 : (androidLightning ? 0.26 : 0.1)
        );
        if (Math.random() < (heavy ? 0.35 : 0.7)) addScorch(player.x, player.y, 5 + Math.random() * 4);
      }
      shakeSuperScreen(androidLightning ? (thorStormActive() ? 1.9 : 1.45) : 1.15, 0.04, dt);
    }

    function homelanderBreakWalls(dir) {
      const heavy = superCombatHeavy();
      const fx2 = Math.cos(dir);
      const fy2 = Math.sin(dir);
      const px = Math.cos(dir + Math.PI / 2);
      const py = Math.sin(dir + Math.PI / 2);
      const brokenCells = [];
      // Abre um corredor de ~3 tiles de largura a frente do voo.
      for (let f = -1; f <= 2; f++) {
        for (let s = -1; s <= 1; s++) {
          const wx = player.x + fx2 * f * TILE + px * s * TILE;
          const wy = player.y + fy2 * f * TILE + py * s * TILE;
          const c = worldToCell(wx, wy);
          if (c.x <= 0 || c.y <= 0 || c.x >= W - 1 || c.y >= H - 1) continue;
          const cell = grid[c.y] ? grid[c.y][c.x] : undefined;
          if (cell === CELL_WALL) {
            grid[c.y][c.x] = CELL_FLOOR;
            brokenCells.push({ x: c.x, y: c.y });
            if (Math.random() < (heavy ? 0.08 : 0.22)) {
              spawnExplosionAt(wx, wy, {
                clear: false,
                count: heavy ? 3 : 4,
                speedMin: 60,
                speedRange: 150,
                sizeMin: 2,
                sizeRange: 4.5,
                palette: ["#6a6a72", "#8a8a92", "#4a4a52", "#9a8a6a", "#3a3a42"]
              });
            }
          } else if (cell === CELL_DOOR_CLOSED || cell === CELL_DOOR_OPEN) {
            // Voando ele tambem arromba as portas no caminho.
            const door = getDoorAtCell(c.x, c.y);
            if (door && !door.broken) {
              openDoor(door, true, true);
            }
          }
        }
      }
      // Remenda apenas as celulas quebradas no cache (sem reconstruir o mapa todo).
      if (brokenCells.length && !patchMapCacheCells(brokenCells)) {
        invalidateMapCache();
      }
      return brokenCells.length > 0;
    }

    let homelanderSpawnT = 2;
    function findHomelanderSpawnCell(entRadius = 9) {
      const minDist = TILE * 9;
      const maxDist = TILE * 22;
      for (let t = 0; t < 56; t++) {
        const ang = Math.random() * Math.PI * 2;
        const r = minDist + Math.random() * (maxDist - minDist);
        const wx = player.x + Math.cos(ang) * r;
        const wy = player.y + Math.sin(ang) * r;
        const resolved = resolveEnemySpawnPosition(wx, wy, entRadius);
        if (!resolved) continue;
        const c = worldToCell(resolved.x, resolved.y);
        if (c.x <= 1 || c.y <= 1 || c.x >= W - 2 || c.y >= H - 2) continue;
        return resolved;
      }
      return null;
    }

    function currentSurvivalWave() {
      let wave = SURVIVAL_WAVES[0];
      for (let i = 0; i < SURVIVAL_WAVES.length; i++) {
        if (survival.elapsed >= SURVIVAL_WAVES[i].at) wave = SURVIVAL_WAVES[i];
      }
      return wave;
    }

    function spawnSurvivalEnemy(kind, leader = false) {
      const spawnR = kind === "nemesis" ? 12.5 : (leader ? 13.5 : 9);
      const cell = findHomelanderSpawnCell(spawnR);
      if (!cell) return false;
      const levelScale = Math.max(1, survival.level);
      const speedBase = kind === "nemesis"
        ? 128 + levelScale * 2.2
        : (kind === "clown" ? 152 : (kind === "zombie" ? 122 : 142)) + Math.min(80, survival.elapsed * 0.08);
      const wps = [{ x: cell.x, y: cell.y }, { x: player.x, y: player.y }];
      addGuard({
        x: cell.x,
        y: cell.y,
        kind,
        leader,
        waypoints: wps,
        speed: speedBase,
        fov: Math.PI * 0.75,
        viewDist: 260,
        hearDist: 420,
        maxHp: kind === "nemesis" ? calcNemesisMaxHp() * (1 + survival.elapsed / 260) : undefined,
        armed: false,
        ammo: 0
      });
      const g = guards[guards.length - 1];
      if (g) {
        g.state = "ALERT";
        g.target = { x: player.x, y: player.y, source: "SURVIVAL_WAVE" };
        g.lastSeen = { x: player.x, y: player.y, t: 0 };
      }
      return true;
    }

    function updateSurvivalSpawns(dt) {
      if (!isSurvivalRun() || survival.pendingChoices) return;
      const wave = currentSurvivalWave();
      const nextWaveIndex = SURVIVAL_WAVES.indexOf(wave);
      if (nextWaveIndex !== survival.waveIndex) {
        survival.waveIndex = nextWaveIndex;
        shakeScreen(4, 0.16);
      }
      const difficulty = getDifficultyConfig();
      const plat = superPlatformEnemyMul();
      const capHigh = Math.round((qualityAtLeast("high") ? 150 : 110) * plat);
      const cap = clamp(Math.round((wave.cap || 120) * (difficulty.enemyCountMul || 1) * plat), Math.round(40 * plat), capHigh);
      if (guards.length >= cap) return;
      survival.spawnT -= dt;
      if (survival.spawnT > 0) return;
      const pressure = 1 + survival.elapsed / 360;
      survival.spawnT = Math.max(0.22, (wave.spawnEvery || 0.85) / pressure);
      const batch = Math.min(cap - guards.length, Math.round((wave.batch || 3) + survival.elapsed / 120));
      for (let i = 0; i < batch; i++) {
        const kinds = wave.kinds || SUPER_MIX_KINDS;
        let kind = kinds[(Math.random() * kinds.length) | 0];
        if (kind === "nemesis") kind = SUPER_MIX_KINDS[(Math.random() * SUPER_MIX_KINDS.length) | 0];
        const leader = kind !== "nemesis" && Math.random() < Math.min(0.16, 0.045 + survival.elapsed / 1800);
        spawnSurvivalEnemy(kind, leader);
      }
      if (wave.nemesis) {
        survival.bossT -= dt;
        if (survival.bossT <= 0) {
          survival.bossT = Math.max(70, 115 - survival.elapsed / 12);
          spawnSurvivalEnemy("nemesis", true);
          sfxNemesisRoar(0.45);
        }
      }
    }

    function updateHomelanderSpawns(dt) {
      if (!isSuperCharacter()) return;
      if (isSurvivalRun()) {
        updateSurvivalSpawns(dt);
        return;
      }
      homelanderSpawnT -= dt;
      if (homelanderSpawnT > 0) return;
      homelanderSpawnT = 1.6 + Math.random() * 1.9;
      const diff = getDifficultyConfig();
      const plat = superPlatformEnemyMul();
      const qualityCap = Math.round((qualityAtLeast("high") ? 56 : (qualityAtLeast("medium") ? 44 : 34)) * plat);
      const cap = clamp(Math.round(qualityCap * (diff.enemyCountMul || 1)), Math.round(20 * plat), Math.round(64 * plat));
      if (guards.length >= cap) return;
      const batch = 1 + ((Math.random() * (qualityAtLeast("medium") ? 3 : 2)) | 0);
      for (let i = 0; i < batch && guards.length < cap; i++) {
        const cell = findHomelanderSpawnCell(9);
        if (!cell) break;
        const kind = HOMELANDER_MIX_KINDS[(Math.random() * HOMELANDER_MIX_KINDS.length) | 0];
        const wps = [];
        for (let k = 0; k < 3; k++) {
          const ang = Math.random() * Math.PI * 2;
          const r = TILE * (1.5 + Math.random() * 2.2);
          const wx = cell.x + Math.cos(ang) * r;
          const wy = cell.y + Math.sin(ang) * r;
          if (!isWall(wx, wy)) wps.push({ x: wx, y: wy });
        }
        if (wps.length < 2) wps.push({ x: cell.x, y: cell.y }, { x: cell.x + TILE, y: cell.y });
        addGuard({
          x: cell.x,
          y: cell.y,
          kind,
          waypoints: wps,
          speed: clamp(108 + run.level * 5, 96, 205),
          fov: Math.PI * 0.6,
          viewDist: 200,
          hearDist: 220,
          armed: false,
          ammo: 0
        });
      }
    }

    function spawnRealisticDeathGore(x, y, dir) {
      const baseDir = Number.isFinite(dir) ? dir : Math.random() * Math.PI * 2;
      spawnGoreSplit(x, y, baseDir);
      if (Math.random() < 0.55) addBloodSpray(x, y, baseDir, 0.28 + Math.random() * 0.35);
    }

    function spawnPlayerExplosion() {
      spawnRealisticDeathGore(player.x, player.y, player.dir + Math.PI);
      addBloodSpray(player.x, player.y, player.dir + Math.PI, 1.35);
      shakeScreen(12, 0.32);
    }

    function spawnGuardDeathExplosion(x, y) {
      spawnRealisticDeathGore(x, y, getPlayerAimDir());
    }

    function updateEffects(dt) {
      if (!qualityAtLeast("medium")) {
        if (fx.shards.length > 72) fx.shards.splice(0, fx.shards.length - 72);
        if (fx.scorch.length > 84) fx.scorch.splice(0, fx.scorch.length - 84);
        if (fx.spriteGibs.length > 72) fx.spriteGibs.splice(0, fx.spriteGibs.length - 72);
      }
      const skipShardWall = isSuperCharacter() && fx.shards.length > 140;
      for (let i = fx.shards.length - 1; i >= 0; i--) {
        const s = fx.shards[i];
        s.life -= dt;
        if (s.life <= 0) {
          fx.shards.splice(i, 1);
          continue;
        }

        s.vy += 420 * dt;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        s.rot += s.spin * dt;
        s.vx *= (1 - dt * 1.7);
        s.vy *= (1 - dt * 0.35);

        if (!skipShardWall && isWall(s.x, s.y)) {
          s.vx *= -0.35;
          s.vy *= -0.32;
          s.x += s.vx * dt * 0.8;
          s.y += s.vy * dt * 0.8;
        }
      }

      for (let i = fx.traces.length - 1; i >= 0; i--) {
        const t = fx.traces[i];
        t.life -= dt;
        if (t.life <= 0) {
          fx.traces.splice(i, 1);
        }
      }

      for (let i = fx.punches.length - 1; i >= 0; i--) {
        const p = fx.punches[i];
        p.life -= dt;
        for (const bit of p.particles) {
          bit.x += bit.vx * dt;
          bit.y += bit.vy * dt;
          bit.vx *= (1 - dt * 8);
          bit.vy *= (1 - dt * 8);
          bit.rot += bit.spin * dt;
        }
        if (p.life <= 0) fx.punches.splice(i, 1);
      }

      for (let i = fx.slashes.length - 1; i >= 0; i--) {
        fx.slashes[i].life -= dt;
        if (fx.slashes[i].life <= 0) fx.slashes.splice(i, 1);
      }

      for (let i = fx.rings.length - 1; i >= 0; i--) {
        fx.rings[i].life -= dt;
        if (fx.rings[i].life <= 0) fx.rings.splice(i, 1);
      }

      updateHomelanderShockwaves(dt);

      for (let i = fx.alerts.length - 1; i >= 0; i--) {
        fx.alerts[i].life -= dt;
        if (fx.alerts[i].life <= 0) fx.alerts.splice(i, 1);
      }

      for (let i = fx.scorch.length - 1; i >= 0; i--) {
        fx.scorch[i].life -= dt;
        if (fx.scorch[i].life <= 0) fx.scorch.splice(i, 1);
      }

      for (let i = fx.gore.length - 1; i >= 0; i--) {
        const p = fx.gore[i];
        p.life -= dt;
        if (p.life <= 0) {
          fx.gore.splice(i, 1);
          continue;
        }
        p.vy += 360 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.spin * dt;
        p.vx *= (1 - dt * 2.2);
        p.vy *= (1 - dt * 0.6);
        if (isWall(p.x, p.y)) {
          p.vx *= -0.3;
          p.vy *= -0.3;
        }
      }

      for (let i = fx.spriteGore.length - 1; i >= 0; i--) {
        const p = fx.spriteGore[i];
        p.life -= dt;
        p.vy += 280 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.spin * dt;
        p.vx *= (1 - dt * 2.0);
        p.vy *= (1 - dt * 0.8);
        p.spin *= (1 - dt * 1.6);
        if (isWall(p.x, p.y)) {
          p.vx *= -0.3;
          p.vy *= -0.3;
        }
        if (p.life <= 0) {
          // Assenta como pedaco permanente no chao ate o fim da fase.
          if (fx.spriteGibs.length > 120) fx.spriteGibs.shift();
          fx.spriteGibs.push({
            img: p.img, rect: p.rect, scale: p.scale, anchor: p.anchor,
            band: p.band, bands: p.bands, rot: p.rot, x: p.x, y: p.y
          });
          fx.spriteGore.splice(i, 1);
        }
      }

      // Emissores de respingo de sangue (morte por laser): jorram gotas por ~1,5s.
      for (let i = fx.bloodSprays.length - 1; i >= 0; i--) {
        const s = fx.bloodSprays[i];
        s.life -= dt;
        if (Math.random() < dt * 52) {
          const a = s.dir + Math.PI * 0.5 + (Math.random() - 0.5) * Math.PI * 1.4;
          const speed = 50 + Math.random() * 150;
          fx.shards.push({
            x: s.x + (Math.random() - 0.5) * 8,
            y: s.y + (Math.random() - 0.5) * 8,
            vx: Math.cos(a) * speed,
            vy: Math.sin(a) * speed - 70,
            size: 2 + Math.random() * 3,
            life: 0.32 + Math.random() * 0.2,
            maxLife: 0.5,
            spin: 0,
            rot: 0,
            color: Math.random() < 0.5 ? "#b3161a" : "#7a0d10"
          });
          const maxShards = maxFxShards();
          if (fx.shards.length > maxShards) fx.shards.splice(0, fx.shards.length - maxShards);
        }
        if (Math.random() < dt * 7) {
          addBloodStain(s.x + (Math.random() - 0.5) * 16, s.y + (Math.random() - 0.5) * 16, s.dir, 0.6 + Math.random() * 0.5);
        }
        if (s.life <= 0) fx.bloodSprays.splice(i, 1);
      }

      // Focos de fogo leve (deixados pelo laser ao destruir paredes/objetos).
      for (let i = fx.fires.length - 1; i >= 0; i--) {
        fx.fires[i].life -= dt;
        if (fx.fires[i].life <= 0) fx.fires.splice(i, 1);
      }

      for (let i = fx.tentacles.length - 1; i >= 0; i--) {
        fx.tentacles[i].life -= dt;
        if (fx.tentacles[i].life <= 0) fx.tentacles.splice(i, 1);
      }

      for (let i = fx.wind.length - 1; i >= 0; i--) {
        const w = fx.wind[i];
        w.life -= dt;
        if (w.life <= 0) {
          fx.wind.splice(i, 1);
          continue;
        }
        w.x += w.vx * dt;
        w.y += w.vy * dt;
        w.vx *= (1 - dt * 2.4);
        w.vy *= (1 - dt * 2.4);
      }
    }

    function calcAlertLevel() {
      let alertLevel = 0;
      for (const g of guards) {
        if (g.state === "ALERT") alertLevel = Math.max(alertLevel, 1);
        else if (g.state === "SUSPICIOUS") alertLevel = Math.max(alertLevel, 0.6);
        else if (g.state === "SEARCH") alertLevel = Math.max(alertLevel, 0.4);
      }
      return alertLevel;
    }

    function getStealthState(alertLevel = calcAlertLevel()) {
      if (alertLevel >= 1) return { label: "ALERTA", css: "status-alert", body: "stealth-alert", color: "#ff5f68" };
      if (alertLevel > 0) return { label: "SUSPEITA", css: "status-suspicious", body: "stealth-suspicious", color: "#ffb45f" };
      if (player.crouch && player.noise <= 0.2) return { label: "OCULTO", css: "status-hidden", body: "stealth-hidden", color: "#88ffd1" };
      if (player.running || player.vis >= 0.78 || player.noise >= 0.58) return { label: "EXPOSTO", css: "status-exposed", body: "stealth-exposed", color: "#ffd166" };
      return { label: "INFILTRANDO", css: "", body: "", color: "#9bd8ff" };
    }

    function applyStealthBodyClass(state) {
      document.body.classList.remove("stealth-hidden", "stealth-exposed", "stealth-suspicious", "stealth-alert");
      if (state && state.body) document.body.classList.add(state.body);
    }

    function updateUI(now) {
      const gameplayFocus = mode === MODE_PLAYING && !document.body.classList.contains("mobile-gameplay");
      document.body.classList.toggle("gameplay-focus", gameplayFocus);

      phaseTxt.textContent = String(run.level);
      const livesLabel = formatLivesLabel();
      livesTxt.textContent = livesLabel;
      scoreTxt.textContent = String(run.score);
      objTxt.textContent = missionProgressText();
      const activeSeed = run.active ? run.seedText : (settings.preferredSeed || "AUTO");
      seedTxt.textContent = activeSeed;

      const secs = getLevelElapsedSec(now);
      timeTxt.textContent = formatTime(secs);
      if (ammoTxt) {
        syncActiveWeaponState();
        if (player.activeSlot === "weapon" && player.hasWeapon) {
          const slot = getActiveWeaponSlot();
          ammoTxt.textContent = "W" + (player.activeWeaponIndex + 1) + " " + player.ammo + "/" + player.maxAmmo + weaponReserveText(slot);
        }
        else if (player.meleeWeapon === "knife" && player.hasWeapon) ammoTxt.textContent = "Faca + " + weaponAmmoSummary();
        else ammoTxt.textContent = player.meleeWeapon === "knife" ? "Faca" : "--";
      }
      if (lureCdTxt) {
        if (isThorCharacter()) lureCdTxt.textContent = thorStormActive()
          ? ("Tempestade " + player.berserkT.toFixed(1))
          : ("Raios " + Math.round(player.rage) + "/" + player.rageMax);
        else if (isSuperCharacter()) lureCdTxt.textContent = "Vida " + player.health + "/" + player.maxHealth;
        else if (isOperativeCampaign()) lureCdTxt.textContent = "Vida " + player.health + "/" + player.maxHealth;
        else lureCdTxt.textContent = player.throwCooldown > 0 ? (player.throwCooldown.toFixed(1) + "s") : "PRONTO";
      }

      const vis = Math.round(player.vis * 100);
      const noi = Math.round(player.noise * 100);
      visTxt.textContent = vis + "%";
      noiTxt.textContent = noi + "%";
      visBar.style.width = vis + "%";
      noiBar.style.width = noi + "%";

      cfgPhase.textContent = String(run.level);
      cfgLives.textContent = livesLabel;
      cfgScore.textContent = String(run.score);
      cfgTime.textContent = formatTime(secs);
      cfgVis.textContent = vis + "%";
      cfgNoi.textContent = noi + "%";
      cfgObj.textContent = missionProgressText();
      cfgSeed.textContent = activeSeed;
      cfgStatus.textContent = statusTxt.textContent;

      pauseBtn.disabled = !(mode === MODE_PLAYING || mode === MODE_PAUSED);
      pauseBtn.textContent = mode === MODE_PAUSED ? "Retomar" : "Pausar";

      const hl = isSuperCharacter();
      syncTouchActionBarLayout();
      if (touchRun) {
        touchRun.classList.toggle("active", touchInput.run && mode === MODE_PLAYING);
        if (hl) {
          // Botao de correr vira habilidade de movimento e mostra recarga.
          const moveLabel = isButcherCharacter() ? TOUCH_LABELS.hlDash : TOUCH_LABELS.hlFly;
          const moveCooldownMax = superMoveCooldownSeconds();
          const cooling = player.flyCooldown > 0;
          touchRun.classList.toggle("cooldown", cooling);
          if (cooling) setTouchBtnCooldown(touchRun, player.flyCooldown, moveCooldownMax);
          touchRun.textContent = player.flyCooldown > 0
            ? (moveLabel + " " + player.flyCooldown.toFixed(1))
            : moveLabel;
        } else {
          touchRun.classList.remove("cooldown");
          touchRun.textContent = "Correr";
        }
      }
      if (touchCrouch) {
        const disabled = hl || mode !== MODE_PLAYING;
        if (disabled) touchInput.crouch = false;
        touchCrouch.classList.toggle("active", touchInput.crouch && mode === MODE_PLAYING);
        touchCrouch.classList.toggle("cooldown", disabled && !hl);
        touchCrouch.textContent = TOUCH_LABELS.crouch;
      }
      if (touchLure) {
        if (!hl) {
          const cooling = player.throwCooldown > 0;
          touchLure.classList.toggle("cooldown", cooling);
          if (cooling) setTouchBtnCooldown(touchLure, player.throwCooldown, 4);
          touchLure.textContent = player.throwCooldown > 0 ? (TOUCH_LABELS.lure + " " + player.throwCooldown.toFixed(1)) : TOUCH_LABELS.lure;
        }
      }
      if (touchReload && !touchReload.classList.contains("hidden")) {
        syncActiveWeaponState();
        const armed = player.activeSlot === "weapon" && player.hasWeapon;
        const slot = armed ? getActiveWeaponSlot() : null;
        const canReload = !!(armed && slot && slot.reserveAmmo > 0 && slot.ammo < slot.maxAmmo);
        touchReload.classList.toggle("cooldown", !canReload);
        touchReload.textContent = TOUCH_LABELS.reload;
      }
      if (touchUse) {
        const touchInter = mode === MODE_PLAYING ? nearestInteraction() : null;
        const usable = !!touchInter;
        touchUse.classList.toggle("active", usable);
        touchUse.classList.toggle("cooldown", !usable);
        touchUse.textContent = touchInput.enabled
          ? touchInteractShortLabel(touchInter)
          : TOUCH_LABELS.use;
      }
      if (touchShoot) {
        if (hl) {
          const laserCooldownMax = superLaserCooldownSeconds();
          const cooling = player.laserCooldown > 0;
          touchShoot.classList.toggle("cooldown", cooling);
          if (cooling) setTouchBtnCooldown(touchShoot, player.laserCooldown, laserCooldownMax);
          touchShoot.textContent = player.laserCooldown > 0
            ? (TOUCH_LABELS.hlLaser + " " + player.laserCooldown.toFixed(1))
            : TOUCH_LABELS.hlLaser;
        } else {
          syncActiveWeaponState();
          const armed = player.activeSlot === "weapon" && player.hasWeapon;
          const slot = armed ? getActiveWeaponSlot() : null;
          const canUse = armed ? (player.ammo > 0 || (slot && slot.reserveAmmo > 0) || player.meleeWeapon === "knife") : player.shootCooldown <= 0;
          touchShoot.classList.toggle("cooldown", !canUse);
          if (armed) {
            touchShoot.textContent = player.ammo > 0
              ? (TOUCH_LABELS.shoot + " " + player.ammo)
              : ((slot && slot.reserveAmmo > 0) ? "Recarregar" : TOUCH_LABELS.knife);
          } else if (player.meleeWeapon === "knife") {
            touchShoot.textContent = TOUCH_LABELS.knife;
          } else {
            touchShoot.textContent = TOUCH_LABELS.punch;
          }
        }
      }
      if (touchHammer && isSuperCharacter() && !touchHammer.classList.contains("hidden")) {
        if (isThorCharacter()) {
          const cooling = player.mjolnirCooldown > 0;
          const hammerOut = player.mjolnirState === "outbound" || player.mjolnirState === "parked";
          touchHammer.classList.toggle("cooldown", cooling);
          if (cooling) setTouchBtnCooldown(touchHammer, player.mjolnirCooldown, thorMjolnirCooldownSeconds());
          touchHammer.textContent = hammerOut
            ? "Voltar"
            : (cooling ? ("Mjolnir " + player.mjolnirCooldown.toFixed(1)) : "Mjolnir");
        } else {
          const cooling = player.superPowerCooldown > 0;
          const cooldownMax = isButcherCharacter()
            ? butcherTentacleCooldownSeconds()
            : homelanderShockCooldownSeconds();
          touchHammer.classList.toggle("cooldown", cooling);
          if (cooling) setTouchBtnCooldown(touchHammer, player.superPowerCooldown, cooldownMax);
          touchHammer.textContent = cooling
            ? ((isButcherCharacter() ? TOUCH_LABELS.hlTentacles : TOUCH_LABELS.hlShock) + " " + player.superPowerCooldown.toFixed(1))
            : (isButcherCharacter() ? TOUCH_LABELS.hlTentacles : TOUCH_LABELS.hlShock);
        }
      }
      if (touchSwitch && !touchSwitch.classList.contains("hidden")) {
        touchSwitch.textContent = touchSwitchLabel();
      }
      if (isGamePauseOpen()) updatePauseMenuUI();
      updateFullscreenButtons();

      if (mode !== MODE_PLAYING) {
        uiFeedback.prompt = "";
        if (statusTxt) statusTxt.className = "status";
        applyStealthBodyClass(null);
        return;
      }

      const stealthState = getStealthState(calcAlertLevel());
      statusTxt.textContent = stealthState.label;
      statusTxt.className = "status" + (stealthState.css ? " " + stealthState.css : "");
      applyStealthBodyClass(stealthState);

      cfgStatus.textContent = statusTxt.textContent;
    }

    function drawGuardVision(g) {
      // No modo Homelander (imortal, sem furtividade) os cones de visao sao inuteis
      // e custam caro com 5x inimigos; pular melhora muito o FPS.
      if (isSuperCharacter()) return;
      if (isMeleeEnemyKind(g.kind)) return;
      if (g.sleepT > 0) return;
      const saw = mode === MODE_PLAYING && guardSeesPlayer(g);
      const debuffed = g.visionDebuffT > 0;
      const visionFactor = debuffed ? 0.42 : 1;
      const fovFactor = debuffed ? 0.68 : 1;
      const effectiveFov = g.fov * fovFactor;
      const radius = g.viewDist * visionFactor;
      const a0 = g.dir - effectiveFov / 2;
      const a1 = g.dir + effectiveFov / 2;

      let rgb = "99,217,255";
      let alphaNear = g.state === "ALERT" ? 0.25 : 0.17;
      let alphaFar = g.state === "ALERT" ? 0.05 : 0.015;
      const cb = Meta() && Meta().COLORBLIND_VISION[settings.colorblindMode];
      if (saw) {
        if (settings.colorblindMode === "protanopia") rgb = "255,180,60";
        else if (settings.colorblindMode === "deuteranopia") rgb = "80,160,255";
        else if (settings.colorblindMode === "tritanopia") rgb = "255,100,200";
        else rgb = "255,120,120";
        alphaNear = 0.3;
        alphaFar = 0.08;
        if (cb && settings.colorblindMode !== "normal") {
          alphaNear = 0.28;
          alphaFar = 0.1;
        }
      } else if (debuffed) {
        rgb = "255,236,164";
        alphaNear = 0.23;
        alphaFar = 0.04;
      }

      if (!qualityAtLeast("medium")) {
        ctx.beginPath();
        ctx.moveTo(g.x, g.y);
        ctx.arc(g.x, g.y, radius, a0, a1);
        ctx.closePath();
        ctx.fillStyle = "rgba(" + rgb + "," + (alphaNear * 0.68) + ")";
        ctx.fill();
        ctx.beginPath();
        ctx.strokeStyle = "rgba(" + rgb + "," + (alphaNear * 0.78) + ")";
        ctx.lineWidth = 1;
        ctx.arc(g.x, g.y, radius * 0.98, a0, a1);
        ctx.stroke();
        return;
      }

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(g.x, g.y);
      ctx.arc(g.x, g.y, radius, a0, a1);
      ctx.closePath();
      ctx.clip();

      const cone = ctx.createRadialGradient(g.x, g.y, 6, g.x, g.y, radius);
      cone.addColorStop(0, "rgba(" + rgb + "," + alphaNear + ")");
      cone.addColorStop(1, "rgba(" + rgb + "," + alphaFar + ")");
      ctx.fillStyle = cone;
      ctx.fillRect(g.x - radius, g.y - radius, radius * 2, radius * 2);
      ctx.restore();

      ctx.beginPath();
      ctx.strokeStyle = "rgba(" + rgb + "," + (alphaNear * 0.8) + ")";
      ctx.lineWidth = 1;
      ctx.arc(g.x, g.y, radius * 0.98, a0, a1);
      ctx.stroke();
    }

    function drawLaserSight() {
      const wt = currentWeaponType;
      if (!player.alive || player.activeSlot !== "weapon" || !player.hasWeapon || !wt || !wt.laserSight) return;
      if (mode !== MODE_PLAYING && mode !== MODE_PAUSED) return;

      const aimDir = getPlayerAimDir();
      const startX = player.x + Math.cos(aimDir) * 12;
      const startY = player.y + Math.sin(aimDir) * 12;
      const end = rayEndBeforeWall(startX, startY, aimDir, wt.range);
      const pulse = 0.68 + 0.18 * Math.sin(performance.now() / 90);
      const color = wt.tracerColor || "255,38,48";

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = "rgba(" + color + ", " + pulse.toFixed(3) + ")";
      ctx.lineWidth = 1.25;
      ctx.shadowColor = "rgba(" + color + ", 0.85)";
      ctx.shadowBlur = qualityAtLeast("medium") ? 8 : 0;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();

      ctx.fillStyle = "rgba(" + color + ", 0.92)";
      ctx.beginPath();
      ctx.arc(end.x, end.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawWeaponSpriteModel(x, y, wt, dir, scaleMul = 1, shadow = true) {
      const cfg = wt ? WEAPON_PICKUP_SPRITES[wt.id] : null;
      if (!cfg) return false;
      const img = sprites[cfg.key];
      if (!spriteUsable(img)) return false;
      const rect = cfg.rect;
      const scale = (cfg.scale || 0.35) * scaleMul;
      const w = rect.w * scale;
      const h = rect.h * scale;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(dir);
      if (shadow && qualityAtLeast("medium")) {
        ctx.shadowColor = "rgba(0,0,0,0.72)";
        ctx.shadowBlur = 6;
        ctx.shadowOffsetY = 2;
      }
      ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h, -w * 0.5, -h * 0.5, w, h);
      ctx.restore();
      return true;
    }

    function drawWeaponPickup(x, y, wt, glowColor) {
      if (qualityAtLeast("medium")) {
        const gunGlow = ctx.createRadialGradient(x, y, 2, x, y, 24);
        gunGlow.addColorStop(0, glowColor);
        gunGlow.addColorStop(1, "rgba(255,140,140,0)");
        ctx.fillStyle = gunGlow;
        ctx.fillRect(x - 24, y - 24, 48, 48);
      }
      if (wt && wt.rarity) {
        const color = rarityColor(wt.rarity);
        const pulse = 0.55 + 0.45 * Math.sin(performance.now() / 180);
        ctx.save();
        ctx.strokeStyle = "rgba(" + color + "," + (0.62 + pulse * 0.24) + ")";
        ctx.lineWidth = wt.rarity === "especial" ? 2.4 : 1.8;
        ctx.shadowColor = "rgba(" + color + ",0.72)";
        ctx.shadowBlur = qualityAtLeast("medium") ? 10 : 0;
        ctx.beginPath();
        ctx.arc(x, y, wt.rarity === "especial" ? 18 : 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      if (drawWeaponSpriteModel(x, y, wt, -0.42, 1, true)) return;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-0.42);
      const barrel = wt.barrelLen || 15;
      const bw = wt.barrelW || 5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      if (wt.grenade) {
        ctx.fillStyle = "#22292e";
        ctx.fillRect(-barrel * 0.68, -bw * 0.72, barrel * 1.35, bw * 1.44);
        ctx.fillStyle = wt.bodyColor || "#68727a";
        ctx.fillRect(-barrel * 0.55, -bw * 0.52, barrel * 1.08, bw * 1.04);
        ctx.fillStyle = "#11171c";
        ctx.fillRect(barrel * 0.44, -bw * 0.42, barrel * 0.28, bw * 0.84);
        ctx.fillStyle = wt.gripColor || "#2a3035";
        ctx.fillRect(-barrel * 0.28, bw * 0.44, barrel * 0.28, bw * 0.95);
        ctx.fillRect(-barrel * 0.58, -bw * 0.18, barrel * 0.22, bw * 0.36);
        ctx.strokeStyle = "#05080a";
        ctx.lineWidth = 1.4;
        ctx.strokeRect(-barrel * 0.68, -bw * 0.72, barrel * 1.35, bw * 1.44);
        ctx.restore();
        return;
      }

      if (wt.id === "rifle" || wt.id === "sniper" || wt.id === "smg") {
        ctx.fillStyle = wt.gripColor || "#34404d";
        ctx.fillRect(-barrel * 0.86, -bw * 0.45, barrel * 0.34, bw * 0.9);
      }
      if (wt.id === "shotgun") {
        ctx.fillStyle = "#5b3e2b";
        ctx.fillRect(-barrel * 0.88, -bw * 0.45, barrel * 0.36, bw * 0.9);
      }

      ctx.fillStyle = wt.bodyColor || "#d9dee8";
      ctx.fillRect(-barrel * 0.55, -bw * 0.5, barrel, bw);
      ctx.fillStyle = "#101820";
      ctx.fillRect(barrel * 0.43, -bw * 0.28, barrel * 0.28, bw * 0.56);
      ctx.fillStyle = "#78879f";
      ctx.fillRect(barrel * 0.1, -bw * 0.66, barrel * 0.38, bw * 1.32);
      ctx.fillStyle = wt.gripColor || "#49566a";
      ctx.fillRect(-barrel * 0.42, bw * 0.4, barrel * 0.34, bw * 0.96);
      ctx.strokeStyle = "#111926";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(-barrel * 0.18, bw * 0.48, bw * 0.42, 0.15, Math.PI * 1.2);
      ctx.stroke();
      if (wt.id === "silencer") {
        ctx.fillStyle = "#5a6675";
        ctx.fillRect(barrel * 0.42, -bw * 0.35, barrel * 0.22, bw * 0.7);
      }
      if (wt.soundProfile === "silencer") {
        ctx.fillStyle = "#4c5968";
        ctx.fillRect(barrel * 0.45, -bw * 0.38, barrel * 0.34, bw * 0.76);
      }
      if (wt.laserSight) {
        ctx.fillStyle = "#ff2d3d";
        ctx.fillRect(barrel * 0.28, bw * 0.22, barrel * 0.2, bw * 0.36);
      }
      if (wt.tranquilizer) {
        ctx.fillStyle = "#8fffb1";
        ctx.fillRect(barrel * 0.28, -bw * 1.05, barrel * 0.28, bw * 0.42);
      }
      if (wt.id === "sniper" || wt.id === "plasma") {
        ctx.fillStyle = wt.id === "plasma" ? "#a892ff" : "#6d7b88";
        ctx.fillRect(-barrel * 0.15, -bw * 1.02, barrel * 0.5, bw * 0.36);
      }
      if (wt.id === "rifle") {
        ctx.fillStyle = "#2c342d";
        ctx.fillRect(-barrel * 0.18, bw * 0.48, barrel * 0.2, bw * 1.15);
        ctx.fillStyle = "#6f7f5e";
        ctx.fillRect(-barrel * 0.12, -bw * 1.02, barrel * 0.42, bw * 0.34);
      }
      if (wt.id === "smg") {
        ctx.fillStyle = "#252f3c";
        ctx.fillRect(-barrel * 0.08, bw * 0.48, barrel * 0.2, bw * 1.2);
      }
      if (wt.id === "shotgun") {
        ctx.fillStyle = "#6a5848";
        ctx.fillRect(-barrel * 0.15, -bw * 0.72, barrel * 0.55, bw * 0.36);
        ctx.fillStyle = "#b18d65";
        ctx.fillRect(-barrel * 0.22, bw * 0.38, barrel * 0.58, bw * 0.28);
      }
      ctx.strokeStyle = "#1e2836";
      ctx.lineWidth = 1.2;
      ctx.strokeRect(-barrel * 0.55, -bw * 0.5, barrel, bw);
      ctx.restore();
    }

    function drawBloodStains() {
      const bloodBounds = getVisibleWorldBounds(48);
      for (const b of fx.blood) {
        if (!inViewBounds(bloodBounds, b.x, b.y)) continue;
        const intensity = b.intensity || 1;
        const poolRx = 17 + 9 * (intensity - 1);
        const poolRy = 10.5 + 5.5 * (intensity - 1);
        const gradR = 18 + 10 * (intensity - 1);

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rot);
        ctx.scale(b.scale, b.scale);

        const pool = ctx.createRadialGradient(-1, -1, 1, 0, 0, gradR);
        pool.addColorStop(0, "rgba(126, 8, 18," + (0.66 * b.alpha) + ")");
        pool.addColorStop(0.58, "rgba(82, 4, 13," + (0.52 * b.alpha) + ")");
        pool.addColorStop(1, "rgba(44, 0, 7,0)");
        ctx.fillStyle = pool;
        ctx.beginPath();
        ctx.ellipse(0, 0, poolRx, poolRy, 0.18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(115, 7, 17," + (0.72 * b.alpha) + ")";
        for (const d of b.drops) {
          ctx.save();
          ctx.translate(d.x, d.y);
          ctx.rotate(d.rot);
          ctx.globalAlpha = d.alpha * b.alpha;
          ctx.beginPath();
          ctx.ellipse(0, 0, d.rx, d.ry, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        ctx.restore();
      }
    }

    // O cache do piso so muda visualmente entre "low" e o resto; normalizar evita
    // rebuilds totais quando a qualidade oscila entre "high" e "medium" sob carga.
    function mapQualityKey() {
      return renderQuality === "low" ? "low" : "hi";
    }

    function buildMapRenderEnv(s) {
      const theme = scenarioTheme || SCENARIO_THEMES[0];
      const floorImg = environmentTextures.floorByTheme[theme.id];
      const wallImg = environmentTextures.wallByTheme[theme.id];
      return {
        theme,
        floorBase: theme.floorBase,
        floorNoise: theme.floorNoise,
        wallBase: theme.wallBase,
        wallNoise: theme.wallNoise,
        accentRgb: theme.accent.join(","),
        warningRgb: theme.warning.join(","),
        floorPattern: floorImg && floorImg.complete && floorImg.naturalWidth > 0
          ? s.createPattern(floorImg, "repeat")
          : null,
        wallPattern: wallImg && wallImg.complete && wallImg.naturalWidth > 0
          ? s.createPattern(wallImg, "repeat")
          : null
      };
    }

    function paintMapCell(s, x, y, env) {
      const px = x * TILE;
      const py = y * TILE;
      const isWallCell = grid[y][x] === 1;
      const n = cellNoise(x, y, isWallCell ? 21 : 11) - 0.5;
      const { theme, floorBase, floorNoise, wallBase, wallNoise, accentRgb, warningRgb, floorPattern, wallPattern } = env;

      // Limpa a celula para suportar remendos (parede que virou chao).
      s.clearRect(px, py, TILE, TILE);

      if (isWallCell) {
        const baseR = clamp(Math.round((wallBase[0] + n * wallNoise[0]) * 0.84), 0, 255);
        const baseG = clamp(Math.round((wallBase[1] + n * wallNoise[1]) * 0.84), 0, 255);
        const baseB = clamp(Math.round((wallBase[2] + n * wallNoise[2]) * 0.84), 0, 255);
        s.fillStyle = "rgb(" + baseR + "," + baseG + "," + baseB + ")";
        s.fillRect(px, py, TILE, TILE);
        if (wallPattern) {
          s.save();
          s.globalAlpha = theme.textureWallAlpha;
          s.fillStyle = wallPattern;
          s.fillRect(px, py, TILE, TILE);
          s.restore();
        }
        s.fillStyle = "rgba(2,7,14,0.54)";
        s.fillRect(px + 1, py + 1, TILE - 2, TILE - 2);
        s.fillStyle = "rgba(" + accentRgb + ",0.16)";
        s.fillRect(px + 1, py + 1, TILE - 2, 1.5);
        if (y > 0 && grid[y - 1][x] === 0) {
          s.fillStyle = "rgba(" + warningRgb + ",0.42)";
          s.fillRect(px, py, TILE, 2.6);
        }
        if (x > 0 && grid[y][x - 1] === 0) {
          s.fillStyle = "rgba(" + warningRgb + ",0.33)";
          s.fillRect(px, py, 2.6, TILE);
        }
        s.strokeStyle = "rgba(2,6,11,0.88)";
        s.strokeRect(px + 0.5, py + 0.5, TILE - 1, TILE - 1);
      } else {
        const tint = floorTint[y][x] || 1;
        const fr = clamp(Math.round(floorBase[0] * tint * 1.11 + n * floorNoise[0]), 0, 255);
        const fg = clamp(Math.round(floorBase[1] * tint * 1.11 + n * floorNoise[1]), 0, 255);
        const fb = clamp(Math.round(floorBase[2] * tint * 1.11 + n * floorNoise[2]), 0, 255);
        s.fillStyle = "rgb(" + fr + "," + fg + "," + fb + ")";
        s.fillRect(px, py, TILE, TILE);
        if (floorPattern) {
          s.save();
          s.globalAlpha = theme.textureFloorAlpha;
          s.fillStyle = floorPattern;
          s.fillRect(px, py, TILE, TILE);
          s.restore();
        }
        s.fillStyle = "rgba(" + accentRgb + ",0.12)";
        s.fillRect(px, py + 1, TILE, 1);
        s.fillStyle = "rgba(4,11,18,0.25)";
        s.fillRect(px, py + TILE - 1, TILE, 1);
        s.fillRect(px + TILE - 1, py, 1, TILE);

        const nearWall =
          (x > 0 && grid[y][x - 1] === 1) ||
          (x < W - 1 && grid[y][x + 1] === 1) ||
          (y > 0 && grid[y - 1][x] === 1) ||
          (y < H - 1 && grid[y + 1][x] === 1);
        if (nearWall) {
          s.strokeStyle = "rgba(" + accentRgb + ",0.18)";
          s.lineWidth = 1;
          s.strokeRect(px + 0.5, py + 0.5, TILE - 1, TILE - 1);
        }

        if (renderQuality !== "low" && cellNoise(x, y, 37) > 0.955) {
          s.fillStyle = "rgba(" + accentRgb + ",0.24)";
          s.fillRect(px + 4, py + 4, 3, 3);
          s.fillStyle = "rgba(" + warningRgb + ",0.22)";
          s.fillRect(px + TILE - 7, py + TILE - 7, 3, 3);
        }
      }
    }

    // Remenda apenas as celulas afetadas (e vizinhas) no cache do mapa, evitando
    // redesenhar o mapa inteiro a cada parede/porta destruida (corrige travadas).
    function patchMapCacheCells(cells) {
      if (!cells || !cells.length) return false;
      if (!mapCache.canvas || !mapCache.ctx || mapCache.dirty) return false;
      if (mapCache.canvas.width !== WORLD_W || mapCache.canvas.height !== WORLD_H) return false;
      const theme = scenarioTheme || SCENARIO_THEMES[0];
      if (mapCache.themeId !== theme.id || mapCache.level !== run.level ||
          mapCache.seed !== run.seedText || mapCache.quality !== mapQualityKey()) {
        return false;
      }
      const s = mapCache.ctx;
      const env = buildMapRenderEnv(s);
      const seen = new Set();
      for (const c of cells) {
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            const x = c.x + dx;
            const y = c.y + dy;
            if (x < 0 || y < 0 || x >= W || y >= H) continue;
            const key = y * W + x;
            if (seen.has(key)) continue;
            seen.add(key);
            paintMapCell(s, x, y, env);
          }
        }
      }
      return true;
    }

    function rebuildMapCache() {
      if (!mapCache.canvas) {
        mapCache.canvas = document.createElement("canvas");
        mapCache.ctx = mapCache.canvas.getContext("2d");
      }
      // O mapa do Homelander muda de tamanho; o cache precisa acompanhar o WORLD atual.
      if (mapCache.canvas.width !== WORLD_W || mapCache.canvas.height !== WORLD_H) {
        mapCache.canvas.width = WORLD_W;
        mapCache.canvas.height = WORLD_H;
      }
      const s = mapCache.ctx;
      if (!s) return false;

      const env = buildMapRenderEnv(s);

      s.clearRect(0, 0, WORLD_W, WORLD_H);
      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          paintMapCell(s, x, y, env);
        }
      }

      mapCache.dirty = false;
      mapCache.quality = mapQualityKey();
      mapCache.themeId = env.theme.id;
      mapCache.level = run.level;
      mapCache.seed = run.seedText;
      return true;
    }

    function drawCachedFloor() {
      const theme = scenarioTheme || SCENARIO_THEMES[0];
      const needsRebuild = mapCache.dirty ||
        !mapCache.canvas ||
        mapCache.quality !== mapQualityKey() ||
        mapCache.themeId !== theme.id ||
        mapCache.level !== run.level ||
        mapCache.seed !== run.seedText;

      if (needsRebuild && !rebuildMapCache()) return false;
      ctx.drawImage(mapCache.canvas, 0, 0);
      drawBloodStains();
      return true;
    }

    function drawFloor(now) {
      if (drawCachedFloor()) return;

      const theme = scenarioTheme || SCENARIO_THEMES[0];
      const wave = 0.07 * Math.sin(now / 1200);
      const floorPattern = environmentTextures.floorPattern;
      const wallPattern = environmentTextures.wallPattern;
      const floorBase = theme.floorBase;
      const floorNoise = theme.floorNoise;
      const wallBase = theme.wallBase;
      const wallNoise = theme.wallNoise;
      const accent = theme.accent;
      const warning = theme.warning;
      const accentRgb = accent.join(",");
      const warningRgb = warning.join(",");

      for (let y = 0; y < H; y++) {
        for (let x = 0; x < W; x++) {
          const px = x * TILE;
          const py = y * TILE;

          if (grid[y][x] === 1) {
            const n = cellNoise(x, y, 21) - 0.5;
            const baseR = clamp(Math.round((wallBase[0] + n * wallNoise[0]) * 0.84), 0, 255);
            const baseG = clamp(Math.round((wallBase[1] + n * wallNoise[1]) * 0.84), 0, 255);
            const baseB = clamp(Math.round((wallBase[2] + n * wallNoise[2]) * 0.84), 0, 255);
            ctx.fillStyle = "rgb(" + baseR + "," + baseG + "," + baseB + ")";
            ctx.fillRect(px, py, TILE, TILE);

            if (wallPattern && qualityAtLeast("medium")) {
              ctx.globalAlpha = theme.textureWallAlpha;
              ctx.fillStyle = wallPattern;
              ctx.fillRect(px, py, TILE, TILE);
              ctx.globalAlpha = 1;
            }

            ctx.fillStyle = "rgba(2,7,14,0.52)";
            ctx.fillRect(px + 1, py + 1, TILE - 2, TILE - 2);
            ctx.fillStyle = "rgba(" + accentRgb + ",0.16)";
            ctx.fillRect(px + 1, py + 1, TILE - 2, 1.5);

            if (y > 0 && grid[y - 1][x] === 0) {
              ctx.fillStyle = "rgba(" + warningRgb + ",0.42)";
              ctx.fillRect(px, py, TILE, 2.6);
            }
            if (x > 0 && grid[y][x - 1] === 0) {
              ctx.fillStyle = "rgba(" + warningRgb + ",0.33)";
              ctx.fillRect(px, py, 2.6, TILE);
            }

            if (qualityAtLeast("medium") && cellNoise(x, y, 29) > 0.79) {
              ctx.fillStyle = "rgba(" + accentRgb + ",0.18)";
              ctx.fillRect(px + TILE - 5, py + 3, 2, 2);
              ctx.fillRect(px + 3, py + TILE - 5, 2, 2);
            }

            ctx.strokeStyle = "rgba(2,6,11,0.88)";
            ctx.strokeRect(px + 0.5, py + 0.5, TILE - 1, TILE - 1);
          } else {
            const tint = (floorTint[y][x] || 1) + wave;
            const n = cellNoise(x, y, 11) - 0.5;
            const grime = cellNoise(x, y, 17);
            const fr = clamp(Math.round(floorBase[0] * tint * 1.11 + n * floorNoise[0]), 0, 255);
            const fg = clamp(Math.round(floorBase[1] * tint * 1.11 + n * floorNoise[1]), 0, 255);
            const fb = clamp(Math.round(floorBase[2] * tint * 1.11 + n * floorNoise[2]), 0, 255);
            ctx.fillStyle = "rgb(" + fr + "," + fg + "," + fb + ")";
            ctx.fillRect(px, py, TILE, TILE);

            if (floorPattern && qualityAtLeast("medium")) {
              ctx.globalAlpha = theme.textureFloorAlpha;
              ctx.fillStyle = floorPattern;
              ctx.fillRect(px, py, TILE, TILE);
              ctx.globalAlpha = 1;
            }

            ctx.fillStyle = "rgba(" + accentRgb + ",0.12)";
            ctx.fillRect(px, py + 1, TILE, 1);
            ctx.fillStyle = "rgba(4,11,18,0.25)";
            ctx.fillRect(px, py + TILE - 1, TILE, 1);
            ctx.fillRect(px + TILE - 1, py, 1, TILE);

            if (qualityAtLeast("medium") && grime > 0.76) {
              ctx.strokeStyle = "rgba(" + accentRgb + ",0.1)";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(px + 3, py + 5);
              ctx.lineTo(px + TILE - 4, py + TILE - 6);
              ctx.stroke();
            }

            if (qualityAtLeast("high") && cellNoise(x, y, 33) > 0.93) {
              ctx.fillStyle = "rgba(" + warningRgb + ",0.25)";
              ctx.fillRect(px + 9, py + 9, 6, 6);
            }

            if (qualityAtLeast("medium") && cellNoise(x, y, 37) > 0.955) {
              ctx.fillStyle = "rgba(" + accentRgb + ",0.24)";
              ctx.fillRect(px + 4, py + 4, 3, 3);
              ctx.fillStyle = "rgba(" + warningRgb + ",0.22)";
              ctx.fillRect(px + TILE - 7, py + TILE - 7, 3, 3);
            }

            const nearWall =
              (x > 0 && grid[y][x - 1] === 1) ||
              (x < W - 1 && grid[y][x + 1] === 1) ||
              (y > 0 && grid[y - 1][x] === 1) ||
              (y < H - 1 && grid[y + 1][x] === 1);

            if (nearWall) {
              ctx.strokeStyle = "rgba(" + accentRgb + ",0.18)";
              ctx.lineWidth = 1;
              ctx.strokeRect(px + 0.5, py + 0.5, TILE - 1, TILE - 1);
            }

            if (qualityAtLeast("high") && nearWall && theme.id === "industrial" && cellNoise(x, y, 44) > 0.86) {
              ctx.strokeStyle = "rgba(" + warningRgb + ",0.24)";
              ctx.lineWidth = 1.2;
              ctx.beginPath();
              ctx.moveTo(px + 4, py + TILE - 4);
              ctx.lineTo(px + TILE - 4, py + 4);
              ctx.stroke();
            } else if (qualityAtLeast("medium") && theme.id === "lab" && cellNoise(x, y, 45) > 0.83) {
              ctx.fillStyle = "rgba(" + accentRgb + ",0.18)";
              ctx.beginPath();
              ctx.arc(px + TILE * 0.5, py + TILE * 0.5, 2.2, 0, Math.PI * 2);
              ctx.fill();
            } else if (qualityAtLeast("medium") && theme.id === "office" && cellNoise(x, y, 46) > 0.82) {
              ctx.fillStyle = "rgba(" + warningRgb + ",0.12)";
              ctx.fillRect(px + 2, py + TILE - 4, TILE - 4, 1.4);
            } else if (qualityAtLeast("medium") && theme.id === "reactor" && cellNoise(x, y, 47) > 0.84) {
              ctx.strokeStyle = "rgba(" + accentRgb + ",0.26)";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(px + 3, py + 4);
              ctx.lineTo(px + TILE - 4, py + 4);
              ctx.lineTo(px + TILE - 4, py + TILE - 4);
              ctx.stroke();
            } else if (qualityAtLeast("medium") && theme.id === "vault" && cellNoise(x, y, 48) > 0.83) {
              ctx.fillStyle = "rgba(" + warningRgb + ",0.2)";
              ctx.beginPath();
              ctx.arc(px + TILE * 0.5, py + TILE * 0.5, 2.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      drawBloodStains();
    }

    function drawPunchEffects() {
      for (const p of fx.punches) {
        const t = clamp(p.life / p.maxLife, 0, 1);
        const sweep = 0.7 + (1 - t) * 0.35;
        const radius = p.hit ? 23 : 19;
        const tone = p.hit ? "255,235,172" : "192,232,255";

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.dir);
        ctx.strokeStyle = "rgba(" + tone + "," + (0.82 * t) + ")";
        ctx.lineWidth = p.hit ? 4 : 3;
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(" + tone + ",0.72)";
        ctx.shadowBlur = qualityAtLeast("medium") ? 12 : 0;
        ctx.beginPath();
        ctx.arc(0, 0, radius, -sweep * 0.5, sweep * 0.5);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255,255,255," + (0.75 * t) + ")";
        ctx.lineWidth = 2;
        for (let i = -1; i <= 1; i++) {
          const a = i * 0.45;
          ctx.beginPath();
          ctx.moveTo(radius * 0.46, 0);
          ctx.lineTo(radius * 1.15, Math.sin(a) * radius * 0.42);
          ctx.stroke();
        }

        ctx.fillStyle = "rgba(" + tone + "," + (0.78 * t) + ")";
        ctx.beginPath();
        ctx.ellipse(radius * 0.72, 0, p.hit ? 8 : 6, p.hit ? 5.5 : 4.2, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(3, 12, 18," + (0.72 * t) + ")";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(radius * 0.72, 0, p.hit ? 8 : 6, p.hit ? 5.5 : 4.2, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(255,255,255," + (0.5 * t) + ")";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-2, 0);
        ctx.lineTo(radius * 0.96, 0);
        ctx.stroke();
        ctx.restore();

        for (const bit of p.particles) {
          ctx.save();
          ctx.translate(p.x + bit.x, p.y + bit.y);
          ctx.rotate(bit.rot);
          ctx.globalAlpha = t;
          ctx.fillStyle = p.hit ? "#ffe9a6" : "#c8ecff";
          ctx.fillRect(-bit.size * 0.5, -bit.size * 0.24, bit.size, bit.size * 0.48);
          ctx.restore();
        }
      }
    }

    function drawSlashEffects() {
      for (const s of fx.slashes) {
        const t = clamp(s.life / s.maxLife, 0, 1);
        const grow = 1 + (1 - t) * 0.22;
        const radius = (s.range || 44) * grow;
        const width = s.width || Math.PI * 0.42;
        const isFullRing = width >= Math.PI * 1.9;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.dir);
        ctx.globalCompositeOperation = qualityAtLeast("medium") ? "lighter" : "source-over";
        ctx.strokeStyle = "rgba(" + s.color + "," + (0.92 * t) + ")";
        ctx.lineWidth = s.kind === "knife" ? 5.2 : (s.kind === "nemesis" ? 6.4 : (isFullRing ? 4.8 : 3.8));
        ctx.lineCap = "round";
        ctx.shadowColor = "rgba(" + s.color + ",0.78)";
        ctx.shadowBlur = qualityAtLeast("medium") ? 18 : 0;
        ctx.beginPath();
        if (isFullRing) {
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
        } else {
          ctx.arc(0, 0, radius, -width * 0.5, width * 0.5);
        }
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255," + (0.62 * t) + ")";
        ctx.lineWidth = isFullRing ? 2.2 : 1.6;
        ctx.beginPath();
        if (isFullRing) {
          ctx.arc(0, 0, radius * 0.82, 0, Math.PI * 2);
        } else {
          ctx.arc(0, 0, radius * 0.72, -width * 0.35, width * 0.35);
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawSurvivalRings() {
      for (const r of fx.rings) {
        const progress = 1 - clamp(r.life / r.maxLife, 0, 1);
        const radius = r.maxRadius * (r.kind === "contract" ? (1 - progress * 0.85) : progress);
        const alpha = (1 - progress) * 0.95;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        if (r.fill) {
          const grad = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, Math.max(1, radius));
          grad.addColorStop(0, "rgba(" + r.color + "," + (alpha * 0.42) + ")");
          grad.addColorStop(0.55, "rgba(" + r.color + "," + (alpha * 0.18) + ")");
          grad.addColorStop(1, "rgba(" + r.color + ",0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(r.x, r.y, Math.max(1, radius), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.strokeStyle = "rgba(" + r.color + "," + alpha + ")";
        ctx.lineWidth = r.width * (1 - progress * 0.45);
        ctx.shadowColor = "rgba(" + r.color + ",0.85)";
        ctx.shadowBlur = qualityAtLeast("medium") ? 16 : 0;
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(1, radius), 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawSurvivalAbilityAuras(now) {
      if (!isSurvivalRun() || !player.alive) return;
      const areaMul = survival.stats.area || 1;
      const lvl = (id) => survivalAbilityLevel(id);

      if (lvl("flameAura") > 0) {
        const l = lvl("flameAura");
        const radius = (58 + l * 11) * areaMul;
        const pulse = 0.5 + 0.5 * Math.sin(now / 110);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const grad = ctx.createRadialGradient(player.x, player.y, 8, player.x, player.y, radius * (1.05 + pulse * 0.12));
        grad.addColorStop(0, "rgba(255,210,90," + (0.18 + pulse * 0.1) + ")");
        grad.addColorStop(0.45, "rgba(255,110,30," + (0.14 + pulse * 0.08) + ")");
        grad.addColorStop(1, "rgba(255,60,10,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(player.x, player.y, radius * (1.05 + pulse * 0.12), 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,170,60," + (0.42 + pulse * 0.28) + ")";
        ctx.lineWidth = 2.6 + pulse;
        ctx.shadowColor = "rgba(255,120,40,0.75)";
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(player.x, player.y, radius * (0.88 + pulse * 0.08), 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      if (lvl("orbitalBlades") > 0) {
        const l = lvl("orbitalBlades");
        const count = 2 + Math.floor(l / 2);
        const radius = (72 + l * 8) * areaMul;
        const spin = now / 240;
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";
        for (let i = 0; i < count; i++) {
          const a = spin + (Math.PI * 2 * i) / count;
          const bx = player.x + Math.cos(a) * radius;
          const by = player.y + Math.sin(a) * radius;
          const bladeA = a + Math.PI * 0.5;
          ctx.strokeStyle = "rgba(220,245,255,0.92)";
          ctx.lineWidth = 4.2 + l * 0.25;
          ctx.shadowColor = "rgba(180,230,255,0.9)";
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(bx - Math.cos(bladeA) * 16, by - Math.sin(bladeA) * 16);
          ctx.lineTo(bx + Math.cos(bladeA) * 16, by + Math.sin(bladeA) * 16);
          ctx.stroke();
          ctx.fillStyle = "rgba(255,255,255,0.85)";
          ctx.beginPath();
          ctx.arc(bx, by, 5 + l * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.strokeStyle = "rgba(180,220,255,0.22)";
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(player.x, player.y, radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    function drawSpriteCentered(img, x, y, rot, scale = 1, sourceRect = null, anchor = null) {
      if (!img) return;
      if (typeof HTMLImageElement !== "undefined" && img instanceof HTMLImageElement) {
        if (!img.complete || img.naturalWidth <= 0 || img.naturalHeight <= 0) return;
      }
      const iw = sourceRect ? sourceRect.w : (img.naturalWidth || img.width || 44);
      const ih = sourceRect ? sourceRect.h : (img.naturalHeight || img.height || 44);
      const w = iw * scale;
      const h = ih * scale;
      if (w <= 0 || h <= 0) return;
      const ax = anchor && typeof anchor.x === "number" ? anchor.x : 0.5;
      const ay = anchor && typeof anchor.y === "number" ? anchor.y : 0.5;
      const dx = -w * ax;
      const dy = -h * ay;
      ctx.save();
      ctx.imageSmoothingEnabled = false;
      ctx.translate(x, y);
      if (rot) ctx.rotate(rot);
      if (sourceRect) {
        ctx.drawImage(
          img,
          sourceRect.x,
          sourceRect.y,
          sourceRect.w,
          sourceRect.h,
          dx,
          dy,
          w,
          h
        );
      } else {
        ctx.drawImage(img, dx, dy, w, h);
      }
      ctx.restore();
    }

    // Desenha apenas uma tira (banda horizontal) de um sprite, para o efeito de
    // corte do laser do Homelander (o asset partido em pedacos).
    function drawSpriteBand(p, alpha = 1) {
      const img = p.img;
      if (!spriteUsable(img)) return;
      const iw = p.rect ? p.rect.w : (img.naturalWidth || img.width || 44);
      const ih = p.rect ? p.rect.h : (img.naturalHeight || img.height || 44);
      const w = iw * p.scale;
      const h = ih * p.scale;
      if (w <= 0 || h <= 0) return;
      const ax = p.anchor && typeof p.anchor.x === "number" ? p.anchor.x : 0.5;
      const ay = p.anchor && typeof p.anchor.y === "number" ? p.anchor.y : 0.5;
      const dx = -w * ax;
      const dy = -h * ay;
      const bandH = h / p.bands;
      const bandTop = dy + p.band * bandH;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.imageSmoothingEnabled = false;
      ctx.translate(p.x, p.y);
      if (p.rot) ctx.rotate(p.rot);
      ctx.beginPath();
      ctx.rect(dx - 1, bandTop, w + 2, bandH + 0.5);
      ctx.clip();
      if (p.rect) {
        ctx.drawImage(img, p.rect.x, p.rect.y, p.rect.w, p.rect.h, dx, dy, w, h);
      } else {
        ctx.drawImage(img, dx, dy, w, h);
      }
      // Mancha de sangue na linha do corte.
      ctx.fillStyle = "rgba(120,8,16,0.34)";
      ctx.fillRect(dx, bandTop, w, Math.min(3, bandH));
      ctx.fillRect(dx, bandTop + bandH - Math.min(3, bandH), w, Math.min(3, bandH));
      ctx.restore();
    }

    function drawSpriteRect(img, x, y, w, h, alpha = 1) {
      if (!img || w <= 0 || h <= 0) return;
      if (typeof HTMLImageElement !== "undefined" && img instanceof HTMLImageElement) {
        if (!img.complete || img.naturalWidth <= 0 || img.naturalHeight <= 0) return;
      }
      ctx.save();
      if (alpha < 1) ctx.globalAlpha = alpha;
      ctx.drawImage(img, x, y, w, h);
      ctx.restore();
    }

    function spriteUsable(img) {
      if (!img) return false;
      if (typeof HTMLImageElement !== "undefined" && img instanceof HTMLImageElement) {
        return img.complete && img.naturalWidth > 0 && img.naturalHeight > 0;
      }
      return (img.width || img.naturalWidth || 0) > 0 && (img.height || img.naturalHeight || 0) > 0;
    }

    function villainSpriteFrame(spriteKey, scaleMul = 1) {
      if (!spriteUsable(sprites[spriteKey])) return null;
      return {
        img: sprites[spriteKey],
        scale: (spriteScale[spriteKey] || 1) * scaleMul,
        rect: spriteSourceRect[spriteKey] || null,
        topdown: false,
        anchor: FEET_ENTITY_ANCHOR
      };
    }

    function playerSheetFrame(frameIndex, scaleMul = 1) {
      if (!usesPlayerOperativeSheet()) return null;
      const bakedFrames = playerOperativeRuntime.bakedFrames;
      const entry = bakedFrames[frameIndex] || bakedFrames[0];
      if (!entry || !entry.img) return null;
      return {
        img: entry.img,
        scale: (playerOperativeRuntime.scale || 1) * scaleMul,
        rect: null,
        topdown: true,
        anchor: PLAYER_SPRITE_ANCHOR
      };
    }

    function pickPlayerSheetFrame(now) {
      if (!spriteUsable(sprites.playerSheet)) return null;
      const moving = player.moving && mode === MODE_PLAYING;
      const usingWeapon = player.hasWeapon && player.activeSlot === "weapon";
      const attacking = player.shootCooldown > 0 && mode === MODE_PLAYING;
      const crouchMul = player.crouch ? 0.88 : 1;

      if (usingWeapon && player.muzzleFlashT > 0) {
        return playerSheetFrame(PLAYER_OPERATIVE_SHEET.shoot, 1.03 * crouchMul);
      }

      if (!usingWeapon && attacking) {
        const seq = PLAYER_OPERATIVE_SHEET.attack;
        const idx = Math.floor(now / 70) % seq.length;
        return playerSheetFrame(seq[idx], 1.04 * crouchMul);
      }

      if (moving) {
        const seq = player.crouch ? PLAYER_OPERATIVE_SHEET.crouch : (player.running ? PLAYER_OPERATIVE_SHEET.run : PLAYER_OPERATIVE_SHEET.walk);
        const frameMs = player.running ? 82 : (player.crouch ? 155 : 118);
        const idx = Math.floor(now / frameMs) % seq.length;
        return playerSheetFrame(seq[idx], (player.running ? 1.02 : 1) * crouchMul);
      }

      if (player.crouch) return playerSheetFrame(PLAYER_OPERATIVE_SHEET.crouch[0], crouchMul);

      const seq = PLAYER_OPERATIVE_SHEET.idle;
      const idx = Math.floor(now / 720) % seq.length;
      return playerSheetFrame(seq[idx], crouchMul);
    }

    function pickPlayerFrame(now) {
      if (isSuperCharacter()) {
        if (isThorCharacter() && spriteUsable(sprites.thor)) {
          const flyingNow = player.flying && spriteUsable(sprites.thorFly);
          const bob = player.flying ? (thorStormActive() ? 1.16 : 1.1) : 1;
          const key = flyingNow ? "thorFly" : "thor";
          return {
            img: sprites[key],
            scale: spriteScale[key] * bob,
            rect: spriteSourceRect[key] || null,
            topdown: true,
            anchor: PLAYER_SPRITE_ANCHOR
          };
        }
        if (isButcherCharacter() && spriteUsable(sprites.butcher)) {
          const dashingNow = player.flying && spriteUsable(sprites.butcherDash);
          const key = dashingNow ? "butcherDash" : "butcher";
          const bob = player.flying ? 1.08 : 1;
          return {
            img: sprites[key],
            scale: spriteScale[key] * bob,
            rect: spriteSourceRect[key] || null,
            topdown: true,
            anchor: PLAYER_SPRITE_ANCHOR
          };
        }
        if (spriteUsable(sprites.homelander)) {
          // Ao voar, usa o sprite "voando" (mesma proporcao e ajuste de vista do
          // asset normal); cai de volta no asset parado se ele nao estiver disponivel.
          const flyingNow = player.flying && spriteUsable(sprites.homelanderFly);
          const bob = player.flying ? 1.07 : 1;
          const key = flyingNow ? "homelanderFly" : "homelander";
          return {
            img: sprites[key],
            scale: spriteScale[key] * bob,
            rect: spriteSourceRect[key] || null,
            topdown: true,
            anchor: PLAYER_SPRITE_ANCHOR
          };
        }
      }
      const sheetFrame = pickPlayerSheetFrame(now);
      if (sheetFrame) return sheetFrame;
      if (spriteUsable(sprites.playerProcedural)) {
        return {
          img: sprites.playerProcedural,
          scale: 1,
          rect: null,
          topdown: false,
          anchor: FEET_ENTITY_ANCHOR
        };
      }
      return { img: sprites.player, scale: spriteScale.player, rect: null, topdown: false };
    }

    function pickGuardFrame(g, now) {
      if (isNemesisKind(g.kind)) {
        const alertMul = g.state === "ALERT" ? 1.05 : 1;
        const nemesisFrame = villainSpriteFrame("nemesis", alertMul);
        if (nemesisFrame) return nemesisFrame;
        const zombieFrame = villainSpriteFrame("zombie", 1.45);
        if (zombieFrame) return zombieFrame;
        return { img: sprites.zombie, scale: spriteScale.zombie, rect: null, topdown: false };
      }

      if (isClownKind(g.kind)) {
        const alertMul = g.state === "ALERT" || g.dashT > 0 ? 1.05 : 1;
        const clownFrame = villainSpriteFrame("clown", alertMul);
        if (clownFrame) return clownFrame;
        return { img: sprites.clown, scale: spriteScale.clown, rect: null, topdown: false, anchor: FEET_ENTITY_ANCHOR };
      }

      if (isZombieKind(g.kind)) {
        const alertMul = g.state === "ALERT" || g.dashT > 0 ? 1.06 : 1;
        const zombieFrame = villainSpriteFrame("zombie", alertMul);
        if (zombieFrame) return zombieFrame;
        return { img: sprites.zombie, scale: spriteScale.zombie, rect: null, topdown: false };
      }

      const guardKey =
        g.state === "ALERT"
          ? "guardAlert"
          : (g.state === "SUSPICIOUS" ? "guardSuspicious" : "guardPatrol");
      const alertMul = g.state === "ALERT" ? 1.05 : 1;
      const guardFrame = villainSpriteFrame(guardKey, alertMul);
      if (guardFrame) return guardFrame;

      const guardSprite = sprites[guardKey];
      const guardScale = spriteScale[guardKey] || 1;
      const guardRect = spriteSourceRect[guardKey] || null;
      return { img: guardSprite, scale: guardScale, rect: guardRect, topdown: false, anchor: FEET_ENTITY_ANCHOR };
    }

    function drawAnimatedEntityFrame(frame, x, y, rot, now, moving, phase = 0) {
      if (!frame || !frame.img) return;
      if (frame.topdown) {
        const bob = moving ? Math.sin(now / 95 + phase) * 0.85 : 0;
        drawSpriteCentered(frame.img, x, y + bob, rot, frame.scale, frame.rect, frame.anchor || null);
        return;
      }

      const bob = moving ? Math.sin(now / 105 + phase) * 1.15 : Math.sin(now / 620 + phase) * 0.35;
      const pulseScale = moving ? (1 + Math.sin(now / 150 + phase) * 0.028) : 1;
      drawSpriteCentered(frame.img, x, y + bob, rot, frame.scale * pulseScale, frame.rect, frame.anchor || null);
    }

    function drawScorchMarks() {
      const vb = getVisibleWorldBounds(64);
      const fastScorch = !qualityAtLeast("high") || (isSuperCharacter() && fx.scorch.length > 100);
      if (fx.scorch.length) {
        ctx.save();
        for (const s of fx.scorch) {
          if (!inViewBounds(vb, s.x, s.y)) continue;
          const a = clamp(s.life / s.maxLife, 0, 1);
          if (fastScorch) {
            ctx.fillStyle = "rgba(40,14,8," + (0.42 * a) + ")";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
          } else {
            const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
            grad.addColorStop(0, "rgba(20,12,8," + (0.62 * a) + ")");
            grad.addColorStop(0.6, "rgba(60,18,10," + (0.32 * a) + ")");
            grad.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        ctx.restore();
      }

      if (fx.gibs.length) {
        ctx.save();
        for (const p of fx.gibs) {
          if (!inViewBounds(vb, p.x, p.y)) continue;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w * 0.5, -p.h * 0.5, p.w, p.h);
          ctx.fillStyle = "rgba(35,4,6,0.55)";
          ctx.fillRect(-p.w * 0.5, p.h * 0.12, p.w, p.h * 0.34);
          ctx.restore();
        }
        ctx.restore();
      }

      // Pedacos do asset (tiras cortadas pelo laser) ja assentados no chao.
      if (fx.spriteGibs.length) {
        for (const p of fx.spriteGibs) {
          if (!inViewBounds(vb, p.x, p.y)) continue;
          drawSpriteBand(p, 0.95);
        }
      }

      // Fogo -> fumaca branca -> escurece e some (paredes/objetos/mortes por laser).
      if (fx.fires.length) {
        const now = performance.now();
        for (const f of fx.fires) {
          if (!inViewBounds(vb, f.x, f.y)) continue;
          const t = 1 - clamp(f.life / f.maxLife, 0, 1); // 0 inicio -> 1 fim
          if (t < 0.42) {
            const flick = 0.6 + 0.4 * Math.sin(now / 70 + f.seed) + 0.2 * Math.sin(now / 23 + f.seed * 2);
            const a = (1 - t / 0.42) * 0.58;
            const r = f.r * (0.8 + 0.25 * flick);
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            const grad = ctx.createRadialGradient(f.x, f.y - 2, 0, f.x, f.y - 2, r * 2.2);
            grad.addColorStop(0, "rgba(255,210,120," + (a * 0.9) + ")");
            grad.addColorStop(0.5, "rgba(255,120,40," + (a * 0.62) + ")");
            grad.addColorStop(1, "rgba(120,30,10,0)");
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.ellipse(f.x, f.y - 3 - flick * 2, r * 0.9, r * 1.5, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } else if (t < 0.72) {
            const st = (t - 0.42) / 0.3;
            const a = (1 - st) * 0.34;
            const rise = st * 18;
            ctx.save();
            ctx.fillStyle = "rgba(238,242,248," + a + ")";
            ctx.beginPath();
            ctx.ellipse(f.x, f.y - 6 - rise, f.r * (0.95 + st * 0.35), f.r * (0.8 + st * 0.9), 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } else {
            const st = (t - 0.72) / 0.28;
            const a = (1 - st) * 0.28;
            const rise = 18 + st * 22;
            const shade = Math.round(150 - st * 110);
            ctx.save();
            ctx.fillStyle = "rgba(" + shade + "," + shade + "," + (shade + 6) + "," + a + ")";
            ctx.beginPath();
            ctx.ellipse(f.x, f.y - 8 - rise, f.r * (1.1 + st * 0.5), f.r * (0.95 + st * 1.1), 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      }
    }

    function drawHomelanderEyeGlow() {
      if (!player.laserActive) return;
      const eyes = getHomelanderEyePositions();
      const heat = player.laserHeat;
      const visuals = superLaserVisuals();
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const eye of eyes) {
        const r = 2.2 + heat * 2.4;
        const glowR = r * 1.65;
        const glow = ctx.createRadialGradient(eye.x, eye.y, 0, eye.x, eye.y, glowR);
        const col = heat > 0.5 ? visuals.beamHot : visuals.glow;
        glow.addColorStop(0, "rgba(" + col + ",0.95)");
        glow.addColorStop(1, "rgba(" + col + ",0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(eye.x, eye.y, glowR, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    function drawThorLightningAura(now) {
      if (!isThorCharacter() || !player.alive) return;
      if (!player.flying && !thorStormActive() && !player.laserActive && player.mjolnirState !== "charging") return;
      const storm = thorStormActive();
      const pulse = 0.5 + 0.5 * Math.sin(now / (storm ? 135 : 190));
      const radius = storm ? 38 : 30;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      if (storm) {
        const glow = ctx.createRadialGradient(player.x, player.y, 4, player.x, player.y, radius * 1.1);
        glow.addColorStop(0, "rgba(210,245,255,0.08)");
        glow.addColorStop(0.45, "rgba(80,190,255,0.05)");
        glow.addColorStop(1, "rgba(20,80,180,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(player.x, player.y, radius * 1.1, 0, Math.PI * 2);
        ctx.fill();

        const boltCount = qualityAtLeast("high") ? 5 : (qualityAtLeast("medium") ? 4 : 3);
        for (let i = 0; i < boltCount; i++) {
          const seed = i * 17.31;
          const flicker = 0.22 + 0.18 * (0.5 + 0.5 * Math.sin(now / 95 + seed));
          const angle = (i / boltCount) * Math.PI * 2 + now / 480 + Math.sin(now / 310 + seed) * 0.35;
          const inner = 10 + Math.sin(now / 240 + i * 1.7) * 3;
          const len = 14 + (Math.sin(now / 170 + seed) + 1) * 10;
          const sx = player.x + Math.cos(angle) * inner;
          const sy = player.y + Math.sin(angle) * inner;
          const ex = player.x + Math.cos(angle) * (inner + len);
          const ey = player.y + Math.sin(angle) * (inner + len);
          drawThorAuraBolt(ctx, sx, sy, ex, ey, now, seed, flicker);
          if (qualityAtLeast("medium") && i % 2 === 0) {
            const branchA = angle + 0.55 + Math.sin(now / 200 + seed) * 0.2;
            const bl = len * 0.55;
            drawThorAuraBolt(
              ctx,
              sx + Math.cos(angle) * len * 0.45,
              sy + Math.sin(angle) * len * 0.45,
              sx + Math.cos(angle) * len * 0.45 + Math.cos(branchA) * bl,
              sy + Math.sin(angle) * len * 0.45 + Math.sin(branchA) * bl,
              now,
              seed + 4.2,
              flicker * 0.7
            );
          }
        }
        ctx.restore();
        return;
      }

      const aura = 0.62;
      const glow = ctx.createRadialGradient(player.x, player.y, 6, player.x, player.y, radius * (1.65 + pulse * 0.18));
      glow.addColorStop(0, "rgba(235,250,255," + (0.16 * aura) + ")");
      glow.addColorStop(0.22, "rgba(90,220,255," + (0.18 * aura) + ")");
      glow.addColorStop(0.58, "rgba(40,150,255," + (0.1 * aura) + ")");
      glow.addColorStop(1, "rgba(20,80,180,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(player.x, player.y, radius * (1.65 + pulse * 0.18), 0, Math.PI * 2);
      ctx.fill();

      ctx.lineCap = "round";
      for (let i = 0; i < 2; i++) {
        const ringPulse = 0.75 + 0.25 * Math.sin(now / 210 + i * 1.8);
        ctx.strokeStyle = "rgba(110,230,255," + (0.16 * ringPulse) + ")";
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.ellipse(
          player.x,
          player.y + Math.sin(now / 260 + i) * 1.5,
          radius * (0.56 + i * 0.18 + pulse * 0.05),
          radius * (0.33 + i * 0.1 + pulse * 0.03),
          now / 1200 + i * 1.05,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      const motes = qualityAtLeast("high") ? 6 : 4;
      for (let i = 0; i < motes; i++) {
        const seed = i * 12.989;
        const a = now / 430 + i * Math.PI * 2 / motes;
        const r = radius * (0.48 + 0.5 * ((Math.sin(now / 520 + seed) + 1) * 0.5));
        const x = player.x + Math.cos(a) * r;
        const y = player.y + Math.sin(a * 1.18 + seed) * r * 0.68;
        const size = 1.2 + Math.sin(now / 110 + seed) * 0.3;
        ctx.fillStyle = "rgba(140,230,255,0.38)";
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.8, size), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    function mjolnirSpriteVisible() {
      const state = player.mjolnirState;
      return state === "charging" || state === "outbound" || state === "parked" || state === "returning";
    }

    function drawThorMjolnir(now) {
      if (!isThorCharacter() || !player.alive || !spriteUsable(sprites.mjolnir)) return;
      if (!mjolnirSpriteVisible()) return;
      let x = player.mjolnirX;
      let y = player.mjolnirY;
      let rot = player.dir + Math.PI;
      if (player.mjolnirState === "charging") {
        const chargeFrac = clamp(player.mjolnirCharge / THOR_MJOLNIR_MAX_CHARGE, 0, 1);
        const orbit = 24 + chargeFrac * 7;
        const a = player.mjolnirSpin;
        x = player.x + Math.cos(a) * orbit;
        y = player.y + Math.sin(a) * orbit;
        rot = a + Math.PI * 0.5;
        if (qualityAtLeast("medium")) {
          ctx.save();
          ctx.strokeStyle = "rgba(135,225,255," + (0.22 + chargeFrac * 0.25) + ")";
          ctx.lineWidth = 2 + chargeFrac * 2;
          ctx.beginPath();
          ctx.arc(player.x, player.y, orbit, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      } else {
        rot = player.mjolnirSpin;
      }

      if (thorStormActive()) {
        const pulse = 0.5 + 0.5 * Math.sin(now / 75);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const glow = ctx.createRadialGradient(x, y, 2, x, y, 30 + pulse * 8);
        glow.addColorStop(0, "rgba(225,250,255,0.72)");
        glow.addColorStop(0.38, "rgba(85,205,255,0.35)");
        glow.addColorStop(1, "rgba(45,120,255,0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 38, 0, Math.PI * 2);
        ctx.fill();
        const bolts = qualityAtLeast("high") ? 3 : 2;
        for (let i = 0; i < bolts; i++) {
          const a = now / 210 + i * Math.PI * 2 / bolts;
          drawThorAuraBolt(ctx, x, y, x + Math.cos(a) * 24, y + Math.sin(a) * 24, now, i * 13.7, 0.4 + pulse * 0.28);
        }
        ctx.restore();
      }

      drawSpriteCentered(sprites.mjolnir, x, y, rot, spriteScale.mjolnir);
    }

    function drawHomelanderAirFx() {
      drawThorLightningAura(performance.now());
      drawThorMjolnir(performance.now());
      if (homelanderBeams.length) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";
        for (const b of homelanderBeams) {
          ctx.strokeStyle = "rgba(" + b.color + ",0.95)";
          ctx.lineWidth = b.width;
          if (qualityAtLeast("medium")) {
            ctx.shadowColor = "rgba(" + b.color + ",0.85)";
            ctx.shadowBlur = 12;
          }
          ctx.beginPath();
          ctx.moveTo(b.x0, b.y0);
          ctx.lineTo(b.x1, b.y1);
          ctx.stroke();
          // Nucleo quente do feixe (avermelhado, para manter o laser vermelho).
          ctx.shadowBlur = 0;
          ctx.strokeStyle = "rgba(" + (b.coreColor || "255,150,140") + ",0.92)";
          ctx.lineWidth = Math.max(0.8, b.width * 0.35);
          ctx.beginPath();
          ctx.moveTo(b.x0, b.y0);
          ctx.lineTo(b.x1, b.y1);
          ctx.stroke();
        }
        ctx.restore();
        homelanderBeams.length = 0;
      }

      if (fx.tentacles.length) {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (const t of fx.tentacles) {
          const a = clamp(t.life / t.maxLife, 0, 1);
          const pulse = 0.82 + 0.18 * Math.sin(performance.now() / 35 + t.seed);
          ctx.strokeStyle = "rgba(0,0,0," + (0.9 * a) + ")";
          ctx.lineWidth = t.width * pulse + 3;
          ctx.beginPath();
          ctx.moveTo(t.x0, t.y0);
          ctx.quadraticCurveTo(t.cx, t.cy, t.x1, t.y1);
          ctx.stroke();
          if (t.meat) {
            ctx.strokeStyle = "rgba(120,28,36," + (0.82 * a) + ")";
            ctx.lineWidth = Math.max(2, t.width * 0.55 * pulse);
            ctx.beginPath();
            ctx.moveTo(t.x0, t.y0);
            ctx.quadraticCurveTo(t.cx, t.cy, t.x1, t.y1);
            ctx.stroke();
            ctx.strokeStyle = "rgba(220,150,130," + (0.45 * a) + ")";
            ctx.lineWidth = Math.max(1, t.width * 0.28);
            ctx.beginPath();
            ctx.moveTo(t.x0, t.y0);
            ctx.quadraticCurveTo(t.cx, t.cy, t.x1, t.y1);
            ctx.stroke();
          } else {
            ctx.strokeStyle = "rgba(42,12,18," + (0.72 * a) + ")";
            ctx.lineWidth = Math.max(1.2, t.width * 0.42);
            ctx.beginPath();
            ctx.moveTo(t.x0, t.y0);
            ctx.quadraticCurveTo(t.cx, t.cy, t.x1, t.y1);
            ctx.stroke();
          }
        }
        ctx.restore();
      }

      if (fx.gore.length) {
        const goreBounds = getVisibleWorldBounds(64);
        ctx.save();
        for (const p of fx.gore) {
          if (!inViewBounds(goreBounds, p.x, p.y)) continue;
          const a = clamp(p.life / p.maxLife, 0, 1);
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.globalAlpha = clamp(a + 0.2, 0, 1);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.w * 0.5, -p.h * 0.5, p.w, p.h);
          ctx.fillStyle = "rgba(40,4,6,0.5)";
          ctx.fillRect(-p.w * 0.5, p.h * 0.18, p.w, p.h * 0.32);
          ctx.restore();
        }
        ctx.restore();
      }

      // Tiras do asset cortado voando (corte do laser do Homelander).
      if (fx.spriteGore.length) {
        const sgBounds = getVisibleWorldBounds(80);
        const liteGore = superCombatHeavy() && fx.spriteGore.length > 24;
        const goreStep = liteGore ? 2 : 1;
        for (let gi = 0; gi < fx.spriteGore.length; gi += goreStep) {
          const p = fx.spriteGore[gi];
          if (!inViewBounds(sgBounds, p.x, p.y)) continue;
          drawSpriteBand(p, clamp(p.life / p.maxLife + 0.25, 0, 1));
        }
      }

      if (fx.wind.length) {
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";
        for (const w of fx.wind) {
          const a = clamp(w.life / w.maxLife, 0, 1);
          const sp = Math.hypot(w.vx, w.vy) || 1;
          const ux = w.vx / sp;
          const uy = w.vy / sp;
          if (w.electric) {
            if (qualityAtLeast("high")) {
              const glow = ctx.createRadialGradient(w.x, w.y, 0, w.x, w.y, 12 + w.len * 0.18);
              glow.addColorStop(0, "rgba(140,230,255," + (0.28 * a) + ")");
              glow.addColorStop(0.48, "rgba(60,170,255," + (0.14 * a) + ")");
              glow.addColorStop(1, "rgba(20,80,180,0)");
              ctx.fillStyle = glow;
              ctx.beginPath();
              ctx.ellipse(w.x, w.y, 9 + w.len * 0.12, 5 + w.len * 0.04, Math.atan2(uy, ux), 0, Math.PI * 2);
              ctx.fill();
            } else {
              ctx.strokeStyle = "rgba(120,220,255," + (0.42 * a) + ")";
              ctx.lineWidth = 1.6;
              ctx.beginPath();
              ctx.moveTo(w.x, w.y);
              ctx.lineTo(w.x - ux * w.len, w.y - uy * w.len);
              ctx.stroke();
            }
            continue;
          }
          ctx.strokeStyle = w.electric
            ? "rgba(255,36,56," + (0.62 * a) + ")"
            : (w.dark
            ? "rgba(20,22,26," + (0.52 * a) + ")"
            : "rgba(210,235,255," + (0.4 * a) + ")");
          ctx.lineWidth = w.electric ? 2.6 : 2;
          ctx.beginPath();
          ctx.moveTo(w.x, w.y);
          ctx.lineTo(w.x - ux * w.len, w.y - uy * w.len);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    function drawTopDownAgent(x, y, dir, cfg) {
      ctx.save();
      ctx.translate(x, y);
      if (dir) ctx.rotate(dir);

      const body = ctx.createRadialGradient(-2, -2, 1, 0, 0, 11.8);
      body.addColorStop(0, cfg.bodyHi);
      body.addColorStop(1, cfg.bodyLo);
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, 10.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = cfg.edge;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = cfg.core;
      ctx.beginPath();
      ctx.arc(0, 0, 4.7, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = cfg.marker;
      if (cfg.markerShape === "bar") {
        ctx.fillRect(-4.2, 3.1, 8.4, 2.4);
      } else if (cfg.markerShape === "diamond") {
        ctx.beginPath();
        ctx.moveTo(0, 3.2);
        ctx.lineTo(2.6, 5.2);
        ctx.lineTo(0, 7.2);
        ctx.lineTo(-2.6, 5.2);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(0, 5.2, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function drawMapPropsAndDoors(now) {
      const pulse = 0.5 + 0.5 * Math.sin(now / 260);
      const accentRgb = (scenarioTheme && scenarioTheme.accent) ? scenarioTheme.accent.join(",") : "116,233,255";

      for (const door of levelDoors) {
        const orient = door.orient === "v" ? "v" : "h";
        const span = (door.width || DOOR_WIDTH) * TILE;
        const px = door.x * TILE;
        const py = door.y * TILE;
        const frame = "rgba(38,48,62,0.95)";
        const panel = "rgba(62,74,92,0.98)";
        const highlight = "rgba(" + accentRgb + ",0.55)";

        if (door.broken) {
          ctx.fillStyle = "rgba(70,38,28,0.72)";
          if (orient === "h") {
            ctx.fillRect(px + 2, py + TILE * 0.28, span - 4, TILE * 0.44);
          } else {
            ctx.fillRect(px + TILE * 0.28, py + 2, TILE * 0.44, span - 4);
          }
          ctx.fillStyle = "rgba(120,70,48,0.55)";
          for (let i = 0; i < 5; i++) {
            const ox = orient === "h" ? px + 6 + i * (span / 5) : px + 7;
            const oy = orient === "h" ? py + 7 : py + 6 + i * (span / 5);
            ctx.fillRect(ox, oy, 3, 3);
          }
          continue;
        }

        if (orient === "h") {
          ctx.fillStyle = frame;
          ctx.fillRect(px + 1, py + 1, 3, TILE - 2);
          ctx.fillRect(px + span - 4, py + 1, 3, TILE - 2);
          if (!door.open) {
            ctx.fillStyle = panel;
            ctx.fillRect(px + 4, py + TILE * 0.22, span - 8, TILE * 0.56);
            ctx.fillStyle = highlight;
            ctx.beginPath();
            ctx.arc(px + span - 8, py + TILE * 0.5, 2.4, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.strokeStyle = "rgba(" + accentRgb + ",0.5)";
            ctx.lineWidth = 1.4;
            ctx.strokeRect(px + 4, py + TILE * 0.2, span - 8, TILE * 0.6);
          }
        } else {
          ctx.fillStyle = frame;
          ctx.fillRect(px + 1, py + 1, TILE - 2, 3);
          ctx.fillRect(px + 1, py + span - 4, TILE - 2, 3);
          if (!door.open) {
            ctx.fillStyle = panel;
            ctx.fillRect(px + TILE * 0.22, py + 4, TILE * 0.56, span - 8);
            ctx.fillStyle = highlight;
            ctx.beginPath();
            ctx.arc(px + TILE * 0.5, py + span - 8, 2.4, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.strokeStyle = "rgba(" + accentRgb + ",0.5)";
            ctx.lineWidth = 1.4;
            ctx.strokeRect(px + TILE * 0.2, py + 4, TILE * 0.6, span - 8);
          }
        }
      }

      for (const p of mapProps) {
        ctx.fillStyle = "rgba(2,10,17,0.42)";
        ctx.beginPath();
        ctx.ellipse(p.x, p.y + (p.r || 10) * 0.55, (p.r || 10) * 0.95, (p.r || 10) * 0.42, 0, 0, Math.PI * 2);
        ctx.fill();

        if (p.kind === "tree") {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.fillStyle = "#4a2f1e";
          ctx.fillRect(-2.8, -2, 5.6, 13);
          const crown = ctx.createRadialGradient(-3, -7, 2, 0, -8, (p.r || 12) * 1.35);
          crown.addColorStop(0, "#6aa35f");
          crown.addColorStop(1, "#1f5a34");
          ctx.fillStyle = crown;
          ctx.beginPath();
          ctx.arc(0, -8, (p.r || 12) * 1.28, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "rgba(128,190,95,0.42)";
          ctx.beginPath();
          ctx.arc(-5, -12, (p.r || 12) * 0.42, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else if (p.kind === "grass") {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.strokeStyle = "rgba(80,150,76,0.72)";
          ctx.lineWidth = 1.4;
          const blades = 4 + ((p.r || 6) % 4);
          for (let i = 0; i < blades; i++) {
            const a = -Math.PI / 2 + (i - blades / 2) * 0.24 + Math.sin(now / 700 + (p.seed || 0)) * 0.08;
            const len = (p.r || 7) * (0.75 + i / blades * 0.35);
            ctx.beginPath();
            ctx.moveTo(0, 3);
            ctx.lineTo(Math.cos(a) * len, 3 + Math.sin(a) * len);
            ctx.stroke();
          }
          ctx.restore();
        } else if (p.kind === "desk") {
          ctx.fillStyle = "#5a4a38";
          ctx.fillRect(p.x - 14, p.y - 8, 28, 16);
          ctx.fillStyle = "#3f3428";
          ctx.fillRect(p.x - 12, p.y + 4, 4, 6);
          ctx.fillRect(p.x + 8, p.y + 4, 4, 6);
        } else if (p.kind === "locker" || p.kind === "cabinet") {
          ctx.fillStyle = "#4a5668";
          ctx.fillRect(p.x - 9, p.y - 14, 18, 28);
          ctx.fillStyle = "rgba(" + accentRgb + ",0.35)";
          ctx.fillRect(p.x - 1, p.y - 2, 2, 8);
        } else if (p.kind === "shelf") {
          ctx.fillStyle = "#4d4034";
          ctx.fillRect(p.x - 12, p.y - 12, 24, 24);
          ctx.fillStyle = "#6d5a48";
          ctx.fillRect(p.x - 10, p.y - 9, 20, 3);
          ctx.fillRect(p.x - 10, p.y - 1, 20, 3);
          ctx.fillRect(p.x - 10, p.y + 7, 20, 3);
        } else if (p.kind === "barrel") {
          ctx.fillStyle = "#6a4a2c";
          ctx.beginPath();
          ctx.ellipse(p.x, p.y, 10, 12, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#3c2818";
          ctx.stroke();
        } else if (p.kind === "chair") {
          ctx.fillStyle = "#4a4038";
          ctx.fillRect(p.x - 8, p.y - 4, 16, 10);
          ctx.fillStyle = "#5c5048";
          ctx.fillRect(p.x - 10, p.y + 2, 20, 6);
        } else if (p.kind === "sink") {
          ctx.fillStyle = "#6a7a88";
          ctx.fillRect(p.x - 10, p.y - 6, 20, 12);
          ctx.fillStyle = "#9ab0c0";
          ctx.beginPath();
          ctx.ellipse(p.x, p.y + 2, 7, 5, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.kind === "toilet") {
          ctx.fillStyle = "#d8dce4";
          ctx.fillRect(p.x - 7, p.y - 8, 14, 10);
          ctx.fillStyle = "#b8bcc8";
          ctx.beginPath();
          ctx.ellipse(p.x, p.y + 4, 8, 6, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = "#6a5238";
          ctx.fillRect(p.x - 11, p.y - 11, 22, 22);
          ctx.strokeStyle = "#3f2d1e";
          ctx.strokeRect(p.x - 11, p.y - 11, 22, 22);
        }

        if (p.loot && !p.searched && qualityAtLeast("medium")) {
          ctx.strokeStyle = "rgba(255,210,120," + (0.22 + pulse * 0.18) + ")";
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y - 14, 5 + pulse, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      for (const loot of lootCaches) {
        if (!loot.available) continue;
        const bob = loot.bob ? Math.sin(now / 220 + loot.bob) * 2 : 0;
        if (loot.kind === "nemesis") {
          if (qualityAtLeast("medium")) {
            const glow = ctx.createRadialGradient(loot.x, loot.y + bob, 2, loot.x, loot.y + bob, 24);
            glow.addColorStop(0, "rgba(255,120,80,0.42)");
            glow.addColorStop(0.55, "rgba(255,210,120,0.22)");
            glow.addColorStop(1, "rgba(255,80,40,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(loot.x - 24, loot.y + bob - 24, 48, 48);
          }
          ctx.save();
          ctx.translate(loot.x, loot.y + bob);
          ctx.fillStyle = "#6a1a18";
          ctx.fillRect(-8, -7, 16, 14);
          ctx.fillStyle = "#ffcc44";
          ctx.fillRect(-6, -5, 12, 10);
          ctx.fillStyle = "#ff5533";
          ctx.beginPath();
          ctx.moveTo(0, -11);
          ctx.lineTo(7, 2);
          ctx.lineTo(-7, 2);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
          continue;
        }
        if (qualityAtLeast("medium")) {
          const glow = ctx.createRadialGradient(loot.x, loot.y, 2, loot.x, loot.y, 18);
          glow.addColorStop(0, "rgba(255,210,120,0.34)");
          glow.addColorStop(1, "rgba(255,210,120,0)");
          ctx.fillStyle = glow;
          ctx.fillRect(loot.x - 18, loot.y - 18, 36, 36);
        }
        ctx.save();
        ctx.translate(loot.x, loot.y);
        ctx.fillStyle = "#9a7a42";
        ctx.fillRect(-6, -5, 12, 10);
        ctx.fillStyle = "#ffd070";
        ctx.fillRect(-4, -3, 8, 6);
        ctx.restore();
      }
    }

    function drawEntities(now) {
      const viewBounds = getVisibleWorldBounds(96);
      const visionBounds = getVisibleWorldBounds(280);
      const liteGuards = isSuperCharacter() && superCombatHeavy();
      const pulse = 0.5 + 0.5 * Math.sin(now / 220);
      const exitCx = exit.x + exit.w * 0.5;
      const exitCy = exit.y + exit.h * 0.5;
      const accentTriplet = (scenarioTheme && Array.isArray(scenarioTheme.accent)) ? scenarioTheme.accent : [116, 233, 255];
      const accentRgb = accentTriplet.join(",");
      const spriteDirOffset = Math.PI * 1.5;

      if (qualityAtLeast("medium")) {
        const exitGlow = ctx.createRadialGradient(exitCx, exitCy, 10, exitCx, exitCy, Math.max(exit.w, exit.h) * 0.9);
        exitGlow.addColorStop(0, "rgba(112,242,255," + (0.22 + pulse * 0.08) + ")");
        exitGlow.addColorStop(1, "rgba(38,96,148,0)");
        ctx.fillStyle = exitGlow;
        ctx.fillRect(exitCx - 64, exitCy - 64, 128, 128);
      }

      drawMapPropsAndDoors(now);
      drawScorchMarks();
      drawSurvivalAbilityAuras(now);
      drawSurvivalRings();
      drawSpriteRect(sprites.exit, exit.x, exit.y, exit.w, exit.h, 0.72 + pulse * 0.22);

      if (!item.taken) {
        if (qualityAtLeast("medium")) {
          const itemGlow = ctx.createRadialGradient(item.x, item.y, 3, item.x, item.y, 22);
          itemGlow.addColorStop(0, "rgba(255,228,146,0.36)");
          itemGlow.addColorStop(1, "rgba(255,228,146,0)");
          ctx.fillStyle = itemGlow;
          ctx.fillRect(item.x - 22, item.y - 22, 44, 44);
        }
        drawSpriteCentered(sprites.item, item.x, item.y, 0, spriteScale.item);
      }

      for (const o of objectives) {
        const locked = !canStartObjective(o);
        const holdNeed = o.holdNeed || 0;
        const holdPct = holdNeed > 0 ? clamp((o.holdT || 0) / holdNeed, 0, 1) : 0;
        const typeColor = o.type === "defend"
          ? "rgba(255,120,132,"
          : o.type === "upload"
            ? "rgba(170,140,255,"
            : o.type === "sabotage"
              ? "rgba(255,190,110,"
              : "rgba(143,225,255,";
        ctx.fillStyle = "rgba(2,10,17,0.45)";
        ctx.beginPath();
        ctx.ellipse(o.x, o.y + 11, 10, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        drawSpriteCentered(
          o.done ? sprites.terminalOn : sprites.terminalOff,
          o.x,
          o.y,
          0,
          o.done ? spriteScale.terminalOn : spriteScale.terminalOff
        );
        if (!o.done && qualityAtLeast("medium")) {
          const beacon = 0.5 + 0.5 * Math.sin(now / 300 + o.x * 0.03);
          ctx.beginPath();
          ctx.strokeStyle = typeColor + (locked ? "0.12)" : (0.14 + beacon * 0.12) + ")");
          ctx.lineWidth = 1.5;
          ctx.arc(o.x, o.y, 15 + beacon * 2.4, 0, Math.PI * 2);
          ctx.stroke();
          if (holdNeed > 0 && holdPct > 0 && !locked) {
            ctx.beginPath();
            ctx.strokeStyle = typeColor + "0.75)";
            ctx.lineWidth = 2;
            ctx.arc(o.x, o.y, 18, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * holdPct);
            ctx.stroke();
          }
        }
        if (!o.done && o.seq > 0 && locked && qualityAtLeast("low")) {
          ctx.fillStyle = "rgba(255,214,128,0.85)";
          ctx.font = "700 9px Bahnschrift, Trebuchet MS, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(o.seq + 1, o.x, o.y - 18);
          ctx.textAlign = "left";
        }
      }

      if (milks.length) {
        const compoundV = isButcherCharacter();
        const lightning = isThorCharacter();
        for (const m of milks) {
          if (m.taken) continue;
          if (!inViewBounds(viewBounds, m.x, m.y)) continue;
          const bob = Math.sin(now / 320 + m.bob) * 2;
          const mx = m.x;
          const my = m.y + bob;
          ctx.fillStyle = "rgba(2,10,17,0.4)";
          ctx.beginPath();
          ctx.ellipse(m.x, m.y + 9, 7, 3, 0, 0, Math.PI * 2);
          ctx.fill();
          if (qualityAtLeast("medium")) {
            const g = ctx.createRadialGradient(mx, my, 2, mx, my, 16);
            g.addColorStop(0, lightning ? "rgba(90,220,255,0.55)" : (compoundV ? "rgba(65,180,255,0.5)" : "rgba(245,250,255,0.4)"));
            g.addColorStop(1, lightning ? "rgba(90,220,255,0)" : (compoundV ? "rgba(65,180,255,0)" : "rgba(245,250,255,0)"));
            ctx.fillStyle = g;
            ctx.fillRect(mx - 16, my - 16, 32, 32);
          }
          if (lightning) {
            ctx.save();
            ctx.translate(mx, my);
            ctx.globalCompositeOperation = "lighter";
            ctx.fillStyle = "rgba(8,40,80,0.92)";
            ctx.beginPath();
            ctx.arc(0, 0, 7.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "rgba(120,230,255,0.95)";
            ctx.lineWidth = 1.4;
            for (let i = 0; i < 3; i++) {
              const a = now / 220 + m.bob + i * Math.PI * 2 / 3;
              ctx.beginPath();
              ctx.moveTo(Math.cos(a) * 2, Math.sin(a) * 2);
              ctx.lineTo(Math.cos(a + 0.6) * 11, Math.sin(a + 0.6) * 11);
              ctx.stroke();
            }
            ctx.restore();
          } else if (compoundV) {
            ctx.save();
            ctx.translate(mx, my);
            ctx.rotate(-0.18);
            ctx.fillStyle = "rgba(12,26,38,0.92)";
            ctx.fillRect(-4.5, -8, 9, 16);
            ctx.fillStyle = "#38bdf8";
            ctx.fillRect(-3.2, -4.5, 6.4, 10);
            ctx.fillStyle = "rgba(170,235,255,0.9)";
            ctx.fillRect(-2.2, -3.2, 2, 7.2);
            ctx.fillStyle = "#c9f4ff";
            ctx.fillRect(-3.2, -10, 6.4, 3);
            ctx.strokeStyle = "rgba(140,220,255,0.8)";
            ctx.lineWidth = 1;
            ctx.strokeRect(-4.5, -8, 9, 16);
            ctx.restore();
          } else {
            ctx.beginPath();
            ctx.moveTo(mx - 5, my - 7);
            ctx.lineTo(mx + 5, my - 7);
            ctx.lineTo(mx + 4, my + 7);
            ctx.lineTo(mx - 4, my + 7);
            ctx.closePath();
            ctx.fillStyle = "rgba(236,243,251,0.96)";
            ctx.fill();
            ctx.strokeStyle = "rgba(120,150,180,0.75)";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = "#fffdf6";
            ctx.fillRect(mx - 4.2, my - 6, 8.4, 3.2);
          }
        }
      }

      if (hearts.length) {
        for (const h of hearts) {
          if (h.taken) continue;
          if (!inViewBounds(viewBounds, h.x, h.y)) continue;
          const bob = Math.sin(now / 300 + h.bob) * 2;
          const hx = h.x;
          const hy = h.y + bob;
          ctx.save();
          ctx.translate(hx, hy);
          if (qualityAtLeast("medium")) {
            ctx.globalCompositeOperation = "lighter";
            const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 14);
            glow.addColorStop(0, "rgba(255,90,120,0.45)");
            glow.addColorStop(1, "rgba(255,90,120,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(-14, -14, 28, 28);
            ctx.globalCompositeOperation = "source-over";
          }
          ctx.fillStyle = "#ff3f62";
          ctx.beginPath();
          ctx.moveTo(0, 3);
          ctx.bezierCurveTo(-8, -4, -12, 4, 0, 11);
          ctx.bezierCurveTo(12, 4, 8, -4, 0, 3);
          ctx.fill();
          ctx.strokeStyle = "rgba(255,210,220,0.85)";
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

      if (weaponDrop.available) {
        const dropType = getWeaponDropType();
        drawWeaponPickup(weaponDrop.x, weaponDrop.y, dropType, "rgba(" + rarityColor(dropType.rarity) + ",0.36)");
      }

      if (grenadeLauncherDrop.available) {
        drawWeaponPickup(grenadeLauncherDrop.x, grenadeLauncherDrop.y, GRENADE_LAUNCHER, "rgba(255,186,104,0.42)");
      }

      if (ammoMagDrop.available) {
        if (qualityAtLeast("medium")) {
          const magGlow = ctx.createRadialGradient(ammoMagDrop.x, ammoMagDrop.y, 2, ammoMagDrop.x, ammoMagDrop.y, 20);
          magGlow.addColorStop(0, "rgba(255,210,120,0.34)");
          magGlow.addColorStop(1, "rgba(255,210,120,0)");
          ctx.fillStyle = magGlow;
          ctx.fillRect(ammoMagDrop.x - 20, ammoMagDrop.y - 20, 40, 40);
        }
        ctx.save();
        ctx.translate(ammoMagDrop.x, ammoMagDrop.y);
        ctx.rotate(0.25);
        ctx.fillStyle = "#c4a060";
        ctx.fillRect(-5, -7, 10, 14);
        ctx.fillStyle = "#8a6838";
        ctx.fillRect(-4, -5.5, 8, 9);
        ctx.fillStyle = "#ffd070";
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(-3.2, -4 + i * 2.8, 6.4, 1.6);
        }
        ctx.strokeStyle = "#3a2810";
        ctx.lineWidth = 1;
        ctx.strokeRect(-5, -7, 10, 14);
        ctx.restore();
      }

      for (const l of lures) {
        if (qualityAtLeast("medium")) {
          const lureGlow = ctx.createRadialGradient(l.x, l.y, 1, l.x, l.y, l.landed ? 18 : 12);
          lureGlow.addColorStop(0, "rgba(255,220,140,0.42)");
          lureGlow.addColorStop(1, "rgba(255,220,140,0)");
          ctx.fillStyle = lureGlow;
          ctx.fillRect(l.x - 20, l.y - 20, 40, 40);
        }

        ctx.beginPath();
        ctx.fillStyle = "#ffd887";
        ctx.arc(l.x, l.y, 4, 0, Math.PI * 2);
        ctx.fill();

        if (l.landed && qualityAtLeast("medium")) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(255,216,135,0.17)";
          ctx.lineWidth = 2;
          ctx.arc(l.x, l.y, 62, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      for (const t of fx.traces) {
        const alpha = clamp(t.life / t.maxLife, 0, 1);
        ctx.save();
        const traceColor = t.color || "255,198,132";
        const softMul = t.soft ? 0.38 : 0.9;
        ctx.strokeStyle = "rgba(" + traceColor + "," + (alpha * softMul) + ")";
        ctx.lineWidth = t.width || 2;
        if (t.glow) {
          ctx.globalCompositeOperation = "lighter";
          ctx.shadowColor = "rgba(" + traceColor + ", " + (t.soft ? 0.45 : 0.82) + ")";
          ctx.shadowBlur = qualityAtLeast("medium") ? (t.soft ? 18 : 14) : 0;
        }
        ctx.beginPath();
        ctx.moveTo(t.x0, t.y0);
        ctx.lineTo(t.x1, t.y1);
        ctx.stroke();
        if (!t.soft && t.glow && qualityAtLeast("medium")) {
          ctx.strokeStyle = "rgba(255,255,255," + (alpha * 0.55) + ")";
          ctx.lineWidth = Math.max(1, (t.width || 2) * 0.28);
          ctx.shadowBlur = 0;
          ctx.beginPath();
          ctx.moveTo(t.x0, t.y0);
          ctx.lineTo(t.x1, t.y1);
          ctx.stroke();
        }
        ctx.restore();
      }

      for (const g of guards) {
        if (!inViewBounds(visionBounds, g.x, g.y)) continue;
        drawGuardVision(g);
      }

      for (const g of guards) {
        if (!inViewBounds(viewBounds, g.x, g.y)) continue;
        if (!liteGuards) {
          ctx.fillStyle = "rgba(2,9,15,0.45)";
          ctx.beginPath();
          ctx.ellipse(g.x, g.y + 10, isNemesisKind(g.kind) ? 15 : 9, isNemesisKind(g.kind) ? 6.2 : 4.5, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        if (g.leader && !liteGuards) {
          ctx.save();
          ctx.globalCompositeOperation = "lighter";
          ctx.strokeStyle = isZombieKind(g.kind) ? "rgba(130,255,155,0.72)" : (isClownKind(g.kind) ? "rgba(255,120,230,0.72)" : "rgba(255,214,96,0.72)");
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(g.x, g.y - 2, (g.r || 10) + 7 + Math.sin(now / 140 + g.x) * 2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        let markerText = "";
        if (!liteGuards) {
          if (g.sleepT > 0) {
            markerText = "Z";
          } else if (g.state === "SUSPICIOUS") {
            markerText = "?";
          } else if (g.state === "ALERT") {
            markerText = "!";
          }
        }

        const guardFrame = pickGuardFrame(g, now);
        const guardMoving = g.sleepT <= 0 && g.pauseT <= 0 && g.state !== "COVER";
        const guardRot = guardFrame && guardFrame.topdown ? g.dir : g.dir + spriteDirOffset;
        drawAnimatedEntityFrame(
          guardFrame,
          g.x,
          g.y,
          guardRot,
          now,
          guardMoving,
          g.x * 0.07 + g.y * 0.04
        );
        if (markerText) {
          ctx.save();
          ctx.font = "700 12px Cascadia Mono, monospace";
          ctx.textAlign = "center";
          ctx.fillStyle = g.sleepT > 0 ? "#b7ffe1" : (g.state === "ALERT" ? "#ffd5d5" : "#fff0c3");
          ctx.fillText(markerText, g.x, g.y - 17);
          ctx.textAlign = "left";
          ctx.restore();
        }

        if (isNemesisKind(g.kind) && g.maxHp > 1) {
          const hpPct = clamp((Number.isFinite(g.hp) ? g.hp : g.maxHp) / g.maxHp, 0, 1);
          const bw = 42;
          const bh = 5;
          ctx.save();
          ctx.fillStyle = "rgba(18, 4, 8, 0.78)";
          ctx.fillRect(g.x - bw / 2, g.y - 32, bw, bh);
          ctx.fillStyle = hpPct > 0.45 ? "#ff6f6f" : "#ffd064";
          ctx.fillRect(g.x - bw / 2, g.y - 32, bw * hpPct, bh);
          ctx.strokeStyle = "rgba(255, 220, 220, 0.72)";
          ctx.lineWidth = 1;
          ctx.strokeRect(g.x - bw / 2, g.y - 32, bw, bh);
          ctx.restore();
        } else if (g.maxHp > 1 && g.hp < g.maxHp) {
          const hpPct = clamp(g.hp / g.maxHp, 0, 1);
          ctx.save();
          ctx.fillStyle = "rgba(10, 6, 8, 0.72)";
          ctx.fillRect(g.x - 13, g.y - 23, 26, 3.5);
          ctx.fillStyle = hpPct > 0.45 ? "#ffd166" : "#ff7a7a";
          ctx.fillRect(g.x - 13, g.y - 23, 26 * hpPct, 3.5);
          ctx.restore();
        }

        if (g.armed && g.ammo > 0) {
          ctx.save();
          ctx.translate(g.x + 10, g.y - 8);
          ctx.rotate(g.dir * 0.15);
          ctx.fillStyle = "#4a5568";
          ctx.fillRect(-4, -1.5, 8, 3);
          ctx.fillStyle = "#2a3340";
          ctx.fillRect(2, -2, 4, 4);
          ctx.restore();
        }

        if (g.muzzleFlashT > 0 && qualityAtLeast("medium")) {
          const flashAlpha = clamp(g.muzzleFlashT / 0.08, 0, 1);
          const fxX = g.x + Math.cos(g.dir) * 11;
          const fxY = g.y + Math.sin(g.dir) * 11;
          const flash = ctx.createRadialGradient(fxX, fxY, 2, fxX, fxY, 14);
          flash.addColorStop(0, "rgba(255,245,180," + (0.75 * flashAlpha) + ")");
          flash.addColorStop(1, "rgba(255,245,180,0)");
          ctx.fillStyle = flash;
          ctx.fillRect(fxX - 14, fxY - 14, 28, 28);
        }
      }

      const shardBounds = getVisibleWorldBounds(48);
      for (const s of fx.shards) {
        if (!inViewBounds(shardBounds, s.x, s.y)) continue;
        const t = clamp(s.life / s.maxLife, 0, 1);
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.globalAlpha = t;
        ctx.fillStyle = s.color;
        ctx.fillRect(-s.size * 0.62, -s.size * 0.26, s.size * 1.24, s.size * 0.52);
        ctx.restore();
      }

      if (player.alive) {
        ctx.fillStyle = "rgba(2,9,15,0.45)";
        ctx.beginPath();
        ctx.ellipse(player.x, player.y + 10, 9.5, 4.8, 0, 0, Math.PI * 2);
        ctx.fill();

        const playerFrame = pickPlayerFrame(now);
        const playerRot = playerFrame && playerFrame.topdown
          ? getPlayerDrawDir()
          : player.dir + spriteDirOffset;
        const playerDrawY = player.y + (playerFrame && playerFrame.topdown ? PLAYER_WORLD_FEET_OFFSET : 0);
        drawAnimatedEntityFrame(
          playerFrame,
          player.x,
          playerDrawY,
          playerRot,
          now,
          player.moving && mode === MODE_PLAYING,
          player.x * 0.05 + player.y * 0.03
        );
        if (player.hasWeapon && player.activeSlot === "weapon") {
          // O sprite do agente ja segura uma arma; nao desenhamos um modelo extra por cima.
          drawLaserSight();
        }

        if (player.muzzleFlashT > 0 && !isSuperCharacter()) {
          const flashAlpha = clamp(player.muzzleFlashT / 0.08, 0, 1);
          const aimDir = getPlayerAimDir();
          const fxX = player.x + Math.cos(aimDir) * 12;
          const fxY = player.y + Math.sin(aimDir) * 12;
          const flash = ctx.createRadialGradient(fxX, fxY, 2, fxX, fxY, 16);
          flash.addColorStop(0, "rgba(255,245,180," + (0.8 * flashAlpha) + ")");
          flash.addColorStop(1, "rgba(255,245,180,0)");
          ctx.fillStyle = flash;
          ctx.fillRect(fxX - 16, fxY - 16, 32, 32);
        }

        if (isSuperCharacter()) drawHomelanderEyeGlow();
      }

      drawHomelanderAirFx();
      drawSlashEffects();
      drawPunchEffects();
    }

    function drawPlayerEdgeIndicator(now) {
      if (!player.alive || !shouldUseFollowCamera() || camera.zoom <= 1) return;
      const p = projectWorldToScreen(player.x, player.y);
      const edgeThreshold = 72;
      const nearEdge = Math.min(p.x, canvas.width - p.x, p.y, canvas.height - p.y);
      if (nearEdge > edgeThreshold) return;

      const ix = clamp(p.x, 20, canvas.width - 20);
      const iy = clamp(p.y, 20, canvas.height - 20);
      const ang = Math.atan2(p.y - iy, p.x - ix);
      const pulse = 0.5 + 0.5 * Math.sin(now / 170);

      ctx.save();
      ctx.translate(ix, iy);
      ctx.rotate(ang);
      ctx.fillStyle = "rgba(220,245,255," + (0.66 + pulse * 0.28) + ")";
      ctx.strokeStyle = "rgba(5,20,30,0.9)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(-6, -9);
      ctx.lineTo(-6, 9);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    function drawInteractionPrompt() {
      if (mode !== MODE_PLAYING || !uiFeedback.prompt) return;
      const text = touchInput.enabled ? uiFeedback.prompt : uiFeedback.prompt.replace("USAR", "F");
      const y = canvas.height - 22;
      ctx.save();
      ctx.font = "700 13px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.textAlign = "center";
      const padX = 12;
      const w = Math.ceil(ctx.measureText(text).width) + padX * 2;
      const h = 24;
      const x = canvas.width * 0.5 - w * 0.5;
      ctx.fillStyle = "rgba(5, 20, 33, 0.8)";
      ctx.strokeStyle = "rgba(118, 206, 255, 0.78)";
      ctx.lineWidth = 1.4;
      ctx.fillRect(x, y - h + 2, w, h);
      ctx.strokeRect(x + 0.7, y - h + 2.7, w - 1.4, h - 1.4);
      ctx.fillStyle = "#dcf5ff";
      ctx.fillText(text, canvas.width * 0.5, y - 6);
      ctx.restore();
    }

    function drawInteractionFeedback(now) {
      if (uiFeedback.interactTimer <= 0 || !uiFeedback.interactText) return;
      const t = clamp(uiFeedback.interactTimer / 0.6, 0, 1);
      const alpha = t * (0.65 + 0.35 * (0.5 + 0.5 * Math.sin(now / 120)));
      const tone = uiFeedback.interactKind === "fail" ? "255,148,148" : "132,255,196";
      ctx.save();
      ctx.font = "700 14px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "rgba(" + tone + "," + alpha + ")";
      ctx.strokeStyle = "rgba(0,0,0," + (alpha * 0.66) + ")";
      ctx.lineWidth = 3;
      const y = canvas.height * 0.18;
      ctx.strokeText(uiFeedback.interactText, canvas.width * 0.5, y);
      ctx.fillText(uiFeedback.interactText, canvas.width * 0.5, y);
      ctx.restore();
    }

    function drawAlertBanners(now) {
      if (fx.alerts.length === 0) return;
      const a = fx.alerts[fx.alerts.length - 1];
      const t = clamp(a.life / a.maxLife, 0, 1);
      const alpha = Math.min(1, t * 1.7) * (0.82 + 0.18 * Math.sin(now / 70));
      ctx.save();
      ctx.fillStyle = "rgba(80, 5, 12," + (0.34 * alpha) + ")";
      ctx.fillRect(0, canvas.height * 0.38, canvas.width, 74);
      ctx.strokeStyle = "rgba(255, 86, 86," + (0.74 * alpha) + ")";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.38);
      ctx.lineTo(canvas.width, canvas.height * 0.38);
      ctx.moveTo(0, canvas.height * 0.38 + 74);
      ctx.lineTo(canvas.width, canvas.height * 0.38 + 74);
      ctx.stroke();
      ctx.textAlign = "center";
      ctx.font = "800 30px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = "rgba(255,238,238," + alpha + ")";
      ctx.fillText(a.text, canvas.width / 2, canvas.height * 0.38 + 34);
      if (a.sub) {
        ctx.font = "700 13px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillStyle = "rgba(255,205,205," + (0.82 * alpha) + ")";
        ctx.fillText(a.sub, canvas.width / 2, canvas.height * 0.38 + 55);
      }
      ctx.restore();
    }

    function drawThemeAtmosphere(now) {
      const theme = scenarioTheme || SCENARIO_THEMES[0];
      const weather = theme.weather || "";
      if (!weather) return;

      if (weather === "night") {
        ctx.fillStyle = "rgba(0, 6, 18, 0.42)";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        if (qualityAtLeast("medium")) {
          ctx.fillStyle = "rgba(143, 190, 255, 0.16)";
          for (let i = 0; i < 28; i++) {
            const x = (i * 211 + Math.sin(now / 1800 + i) * 18) % WORLD_W;
            const y = (i * 97 + Math.cos(now / 1600 + i * 1.7) * 12) % WORLD_H;
            ctx.fillRect(x, y, 2, 2);
          }
        }
        return;
      }

      if (weather === "rain") {
        ctx.fillStyle = "rgba(8, 18, 32, 0.22)";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        ctx.strokeStyle = "rgba(150, 205, 255, 0.22)";
        ctx.lineWidth = 1.1;
        const drops = qualityAtLeast("medium") ? 110 : 64;
        const speed = now * 0.09;
        for (let i = 0; i < drops; i++) {
          const x = (i * 61 + Math.sin(now / 500 + i) * 18 + WORLD_W) % WORLD_W;
          const y = (i * 37 + speed * (1.4 + (i % 4) * 0.2)) % WORLD_H;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - 4, y + 10);
          ctx.stroke();
        }
        if (qualityAtLeast("medium")) {
          ctx.fillStyle = "rgba(120, 180, 255, 0.05)";
          for (let i = 0; i < 8; i++) {
            const x = (i * 241 + now * 0.01) % WORLD_W;
            const y = (i * 131 + Math.sin(now / 900 + i) * 20 + WORLD_H) % WORLD_H;
            const mist = ctx.createRadialGradient(x, y, 8, x, y, 90);
            mist.addColorStop(0, "rgba(120,180,255,0.08)");
            mist.addColorStop(1, "rgba(120,180,255,0)");
            ctx.fillStyle = mist;
            ctx.fillRect(x - 90, y - 90, 180, 180);
          }
        }
        return;
      }

      if (weather === "snow") {
        ctx.fillStyle = "rgba(214, 242, 255, 0.12)";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        ctx.fillStyle = "rgba(238, 252, 255, 0.72)";
        const speed = now * 0.036;
        for (let i = 0; i < 90; i++) {
          const drift = Math.sin(now / 700 + i * 1.31) * 14;
          const x = (i * 83 + drift + WORLD_W) % WORLD_W;
          const y = (i * 47 + speed * (1.2 + (i % 5) * 0.18)) % WORLD_H;
          const r = 1 + (i % 3) * 0.45;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
        return;
      }

      if (weather === "beach") {
        ctx.fillStyle = "rgba(255, 221, 151, 0.08)";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        ctx.strokeStyle = "rgba(128, 236, 255, 0.16)";
        ctx.lineWidth = 1.4;
        for (let y = 24; y < WORLD_H; y += 72) {
          ctx.beginPath();
          for (let x = 0; x <= WORLD_W; x += 18) {
            const yy = y + Math.sin((x + now * 0.04) / 38) * 3;
            if (x === 0) ctx.moveTo(x, yy);
            else ctx.lineTo(x, yy);
          }
          ctx.stroke();
        }
        return;
      }

      if (weather === "autumn") {
        ctx.fillStyle = "rgba(236, 177, 103, 0.07)";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        for (let i = 0; i < 44; i++) {
          const x = (i * 137 + Math.sin(now / 900 + i) * 20 + WORLD_W) % WORLD_W;
          const y = (i * 67 + now * 0.018 * (1 + (i % 4) * 0.18)) % WORLD_H;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(now / 900 + i);
          ctx.fillStyle = i % 2 ? "rgba(229, 151, 75, 0.5)" : "rgba(150, 203, 111, 0.38)";
          ctx.fillRect(-2.5, -1.4, 5, 2.8);
          ctx.restore();
        }
        return;
      }

      if (weather === "summer") {
        const pulse = 0.5 + 0.5 * Math.sin(now / 1700);
        ctx.fillStyle = "rgba(255, 225, 113, " + (0.08 + pulse * 0.04) + ")";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        if (qualityAtLeast("medium")) {
          const sunX = WORLD_W * 0.18;
          const sunY = WORLD_H * 0.08;
          const sunRadius = Math.max(WORLD_W, WORLD_H) * 0.95;
          const sun = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius);
          sun.addColorStop(0, "rgba(255, 244, 200, " + (0.14 + pulse * 0.06) + ")");
          sun.addColorStop(1, "rgba(255, 244, 200, 0)");
          ctx.fillStyle = sun;
          ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        }
        return;
      }

      if (weather === "fog") {
        ctx.fillStyle = currentEnemyKind === "zombie" ? "rgba(5, 12, 9, 0.34)" : "rgba(23, 54, 40, 0.18)";
        ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        if (qualityAtLeast("medium")) {
          for (let i = 0; i < (currentEnemyKind === "zombie" ? 18 : 12); i++) {
            const x = (i * 173 + now * 0.018) % WORLD_W;
            const y = (i * 89 + Math.sin(now / 1100 + i) * 28 + WORLD_H) % WORLD_H;
            const fog = ctx.createRadialGradient(x, y, 10, x, y, 130);
            fog.addColorStop(0, currentEnemyKind === "zombie" ? "rgba(120, 180, 130, 0.12)" : "rgba(116, 255, 166, 0.1)");
            fog.addColorStop(1, "rgba(116, 255, 166, 0)");
            ctx.fillStyle = fog;
            ctx.fillRect(x - 130, y - 130, 260, 260);
          }
        }
        if (hasActiveNemesis()) {
          const pulse = 0.5 + 0.5 * Math.sin(now / 260);
          ctx.fillStyle = "rgba(80, 0, 0, " + (0.08 + pulse * 0.04) + ")";
          ctx.fillRect(0, 0, WORLD_W, WORLD_H);
        }
      }
    }

    function drawAtmosphere(now) {
      const qualityMul = renderQuality === "high" ? 1 : (renderQuality === "medium" ? 0.78 : 0.56);
      const baseShade = (0.08 + 0.03 * (0.5 + 0.5 * Math.sin(now / 1500))) * qualityMul;
      const vb = isSuperCharacter() ? getVisibleWorldBounds(180) : null;
      const ax = vb ? vb.minX : 0;
      const ay = vb ? vb.minY : 0;
      const aw = vb ? (vb.maxX - vb.minX) : WORLD_W;
      const ah = vb ? (vb.maxY - vb.minY) : WORLD_H;
      ctx.fillStyle = "rgba(5,12,20," + baseShade + ")";
      ctx.fillRect(ax, ay, aw, ah);

      const fxX = player.alive ? player.x : WORLD_W * 0.5;
      const fxY = player.alive ? player.y : WORLD_H * 0.5;
      if (qualityAtLeast("medium")) {
        const halo = ctx.createRadialGradient(fxX, fxY, 34, fxX, fxY, 230);
        halo.addColorStop(0, "rgba(0,0,0,0)");
        halo.addColorStop(1, "rgba(0,0,0,0.28)");
        ctx.fillStyle = halo;
        ctx.fillRect(ax, ay, aw, ah);
      }

      drawThemeAtmosphere(now);

    }

    function drawOverlay(title, subtitle) {
      ctx.fillStyle = "rgba(2, 8, 14, 0.58)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#effaff";
      ctx.textAlign = "center";
      ctx.font = "700 30px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 12);
      ctx.font = "15px Trebuchet MS, sans-serif";
      ctx.fillStyle = "#b7d6eb";
      ctx.fillText(subtitle, canvas.width / 2, canvas.height / 2 + 20);
      ctx.textAlign = "left";
    }

    function drawSurvivalLevelChoices() {
      if (!survival.pendingChoices) return;
      ctx.save();
      ctx.fillStyle = "rgba(2, 8, 14, 0.76)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.fillStyle = "#effaff";
      ctx.font = "800 28px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillText("NÍVEL " + survival.level, canvas.width / 2, canvas.height * 0.23);
      ctx.font = "600 14px Trebuchet MS, sans-serif";
      ctx.fillStyle = "#b7d6eb";
      ctx.fillText("Escolha uma habilidade automática", canvas.width / 2, canvas.height * 0.23 + 28);

      const cardW = Math.min(250, Math.max(180, canvas.width * 0.25));
      const cardH = 150;
      const gap = 18;
      const totalW = cardW * 3 + gap * 2;
      const startX = (canvas.width - totalW) / 2;
      const y = canvas.height * 0.42;
      survival.choiceRects.length = 0;
      for (let i = 0; i < survival.pendingChoices.length; i++) {
        const def = survival.pendingChoices[i];
        const display = survivalAbilityDisplay(def);
        const x = startX + i * (cardW + gap);
        survival.choiceRects.push({ x, y, w: cardW, h: cardH, index: i });
        const current = survivalAbilityLevel(def.id);
        ctx.fillStyle = "rgba(7, 16, 25, 0.92)";
        ctx.fillRect(x, y, cardW, cardH);
        ctx.strokeStyle = i === 0 ? "rgba(255,216,92,0.8)" : "rgba(125,210,255,0.48)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 0.5, y + 0.5, cardW - 1, cardH - 1);
        ctx.fillStyle = "rgba(255,216,92,0.95)";
        ctx.font = "800 17px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillText((i + 1) + ". " + display.name, x + cardW / 2, y + 30);
        ctx.fillStyle = "#dff4ff";
        ctx.font = "700 13px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillText("Nv " + current + " -> " + (current + 1) + " / " + def.max, x + cardW / 2, y + 56);
        ctx.fillStyle = "rgba(188,210,225,0.9)";
        ctx.font = "12px Trebuchet MS, sans-serif";
        wrapCanvasText(display.desc, x + 18, y + 86, cardW - 36, 17);
      }
      ctx.restore();
    }

    function wrapCanvasText(text, x, y, maxWidth, lineHeight) {
      const words = String(text || "").split(/\s+/);
      let line = "";
      ctx.textAlign = "center";
      for (const word of words) {
        const test = line ? line + " " + word : word;
        if (ctx.measureText(test).width > maxWidth && line) {
          ctx.fillText(line, x + maxWidth / 2, y);
          line = word;
          y += lineHeight;
        } else {
          line = test;
        }
      }
      if (line) ctx.fillText(line, x + maxWidth / 2, y);
    }

    function drawStealthHud() {
      if (isSuperCharacter()) return;
      if (mode !== MODE_PLAYING && mode !== MODE_PAUSED) return;

      const state = getStealthState(calcAlertLevel());
      const x = 14;
      const y = 14;
      const w = document.body.classList.contains("mobile-gameplay") ? 174 : 206;
      const h = isOperativeCampaign() ? 68 : 52;
      const pad = 9;
      const barW = w - pad * 2;
      const vis = clamp(player.vis, 0, 1);
      const noi = clamp(player.noise, 0, 1);

      ctx.save();
      ctx.fillStyle = "rgba(5, 13, 21, 0.66)";
      ctx.fillRect(x, y, w, h);
      ctx.strokeStyle = state.color;
      ctx.globalAlpha = 0.55;
      ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
      ctx.globalAlpha = 1;

      ctx.font = "700 12px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = state.color;
      ctx.textAlign = "left";
      ctx.fillText(state.label, x + pad, y + 15);
      ctx.font = "600 10px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = "rgba(208,229,242,0.86)";
      ctx.textAlign = "right";
      ctx.fillText("VIS " + Math.round(vis * 100) + "%", x + w - pad, y + 15);

      const drawBar = (label, value, by, color) => {
        ctx.fillStyle = "rgba(4, 10, 17, 0.82)";
        ctx.fillRect(x + pad, by, barW, 5);
        ctx.fillStyle = color;
        ctx.fillRect(x + pad, by, barW * value, 5);
        ctx.font = "600 9px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillStyle = "rgba(191,212,226,0.82)";
        ctx.textAlign = "left";
        ctx.fillText(label, x + pad, by + 14);
      };

      drawBar("VISIBILIDADE", vis, y + 24, state.color);
      drawBar("RUIDO", noi, y + 39, noi > 0.58 ? "#ff9d54" : "#72d7ff");
      if (isOperativeCampaign()) {
        const segW = 14;
        const segH = 8;
        const gap = 2;
        const by = y + 54;
        ctx.font = "600 9px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillStyle = "rgba(191,212,226,0.82)";
        ctx.textAlign = "left";
        ctx.fillText("VIDA", x + pad, by + 7);
        for (let i = 0; i < player.maxHealth; i++) {
          const sx = x + pad + 34 + i * (segW + gap);
          ctx.fillStyle = i < player.health ? "#ff5f74" : "rgba(48,16,18,0.72)";
          ctx.fillRect(sx, by, segW, segH);
        }
      }
      ctx.restore();
    }

    // Painel de ajuda dos controles (modo PC) no canto direito.
    function drawDesktopControlsHelp() {
      if (touchInput.enabled) return;
      if (mode !== MODE_PLAYING && mode !== MODE_PAUSED) return;
      const hl = isSuperCharacter();
      const rows = hl
        ? [
            ["WASD / Setas", "Mover"],
            ["Mouse", "Girar / mirar"],
            ["Clique Esq. / Q", "Laser"],
            ...(isThorCharacter() ? [["E", "Mjolnir: girar / voltar"]] : []),
            ["Clique Dir. / Shift", superMoveAbilityLabel()],
            ...(isThorCharacter() ? [] : [["E", "Usar " + superHealItemLabel()]]),
            ["F", "Usar / interagir"],
            ["P / Esc", "Pausar"],
            ["H", showControlsHelp ? "Ocultar ajuda" : "Mostrar ajuda"]
          ]
        : [
            ["WASD / Setas", "Mover"],
            ["Mouse", "Girar / mirar"],
            ["Clique Esq.", "Atirar / soco"],
            ["Clique Dir. / Shift", "Correr"],
            ["C", "Agachar"],
            ["F", "Usar / interagir"],
            ["E", "Isca"],
            ["X", "Trocar faca/arma"],
            ["R", "Recarregar"],
            ["P / Esc", "Pausar"],
            ["H", showControlsHelp ? "Ocultar ajuda" : "Mostrar ajuda"]
          ];

      const pad = 10;
      const lineH = 16;
      const titleH = 18;
      // Quando recolhido, mostra so uma dica curta.
      if (!showControlsHelp) {
        ctx.save();
        ctx.font = "600 11px Bahnschrift, Trebuchet MS, sans-serif";
        const txt = "H: ajuda dos controles";
        const w = ctx.measureText(txt).width + pad * 2;
        const x = canvas.width - w - 12;
        const y = 12;
        ctx.fillStyle = "rgba(8,16,24,0.55)";
        ctx.fillRect(x, y, w, titleH + 4);
        ctx.fillStyle = "rgba(190,214,230,0.85)";
        ctx.textAlign = "left";
        ctx.fillText(txt, x + pad, y + 15);
        ctx.restore();
        return;
      }

      ctx.save();
      ctx.font = "600 12px Bahnschrift, Trebuchet MS, sans-serif";
      let maxKey = 0;
      let maxVal = 0;
      for (const [k, v] of rows) {
        maxKey = Math.max(maxKey, ctx.measureText(k).width);
        maxVal = Math.max(maxVal, ctx.measureText(v).width);
      }
      const gap = 12;
      const innerW = maxKey + gap + maxVal;
      const boxW = innerW + pad * 2;
      const boxH = titleH + rows.length * lineH + pad;
      const x = canvas.width - boxW - 12;
      const y = 12;

      ctx.fillStyle = "rgba(8,16,24,0.62)";
      ctx.fillRect(x, y, boxW, boxH);
      ctx.strokeStyle = "rgba(120,180,230,0.25)";
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, boxW - 1, boxH - 1);

      ctx.textAlign = "left";
      ctx.font = "700 12px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = "rgba(127,244,188,0.95)";
      ctx.fillText("CONTROLES", x + pad, y + 14);

      let ry = y + titleH + 12;
      for (const [k, v] of rows) {
        ctx.textAlign = "left";
        ctx.font = "700 12px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillStyle = "rgba(232,246,255,0.96)";
        ctx.fillText(k, x + pad, ry);
        ctx.font = "500 12px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillStyle = "rgba(186,206,222,0.9)";
        ctx.fillText(v, x + pad + maxKey + gap, ry);
        ry += lineH;
      }
      ctx.restore();
    }

    function drawMobileAimIndicator(now) {
      if (!touchInput.enabled) return;
      if (mode !== MODE_PLAYING) return;
      if (!document.body.classList.contains("mobile-gameplay")) return;

      const x = canvas.width - 26;
      const y = 28;
      const ang = player.dir || 0;
      const pulse = 0.65 + 0.35 * Math.sin(now / 220);

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(ang);

      ctx.fillStyle = "rgba(130, 235, 255, " + (0.18 + pulse * 0.18) + ")";
      ctx.strokeStyle = "rgba(0, 0, 0, 0.35)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "rgba(210, 248, 255, 0.85)";
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(6.5, 8);
      ctx.lineTo(-6.5, 8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    // Barra de vida dos super modos, com medidores de habilidade.
    function drawHomelanderHud(now) {
      if (!isSuperCharacter() || !run.active) return;
      if (mode !== MODE_PLAYING && mode !== MODE_PAUSED && mode !== MODE_LEVEL_FAIL && mode !== MODE_LEVEL_CLEAR) return;

      const x0 = 16;
      let y = 16;
      const segs = player.maxHealth;
      const segW = 16;
      const segH = 12;
      const gap = 3;

      ctx.save();
      ctx.textAlign = "left";
      ctx.font = "700 12px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = "rgba(232,246,255,0.95)";
      ctx.fillText(superCharacterName(), x0, y);
      y += 6;

      for (let i = 0; i < segs; i++) {
        const x = x0 + i * (segW + gap);
        const filled = i < player.health;
        ctx.fillStyle = filled
          ? (player.health <= 3 ? "#ff6a4a" : "#ff2f2f")
          : "rgba(48,16,18,0.72)";
        ctx.fillRect(x, y, segW, segH);
        ctx.strokeStyle = "rgba(0,0,0,0.7)";
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, segW - 1, segH - 1);
        if (filled) {
          ctx.fillStyle = "rgba(255,255,255,0.28)";
          ctx.fillRect(x + 1, y + 1, segW - 2, 2);
        }
      }
      y += segH + 7;

      const barW = segs * (segW + gap) - gap;
      const barH = 7;
      const butcher = isButcherCharacter();
      const thor = isThorCharacter();
      const laserReadyColor = butcher ? "#ffd84a" : (thor ? "#7ee8ff" : "#ff5252");
      const laserCooldownColor = butcher ? "#7a6330" : (thor ? "#3a6a7a" : "#7a3a3a");
      const moveReadyColor = butcher ? "#d6d9df" : (thor ? "#7ee8ff" : "#5ac2ff");
      const moveCooldownColor = butcher ? "#3f434c" : (thor ? "#3a6a7a" : "#3a557a");
      const moveCooldownMax = superMoveCooldownSeconds();
      const laserCooldownMax = superLaserCooldownSeconds();

      drawHlMeter(x0, y, barW, barH, "Laser",
        player.laserCooldown > 0 ? 1 - player.laserCooldown / laserCooldownMax : player.laserFuel / player.laserMaxFuel,
        player.laserCooldown > 0 ? laserCooldownColor : laserReadyColor,
        player.laserCooldown > 0 ? ("recarga " + player.laserCooldown.toFixed(1) + "s") : "");
      y += barH + 13;

      if (thor) {
        let hammerNote = player.mjolnirCooldown > 0 ? ("recarga " + player.mjolnirCooldown.toFixed(1) + "s") : "";
        if (!hammerNote) {
          if (player.mjolnirState === "charging") hammerNote = "carregando";
          else if (player.mjolnirState === "returning") hammerNote = "voltando";
          else if (player.mjolnirState === "outbound" || player.mjolnirState === "parked") hammerNote = "aperte E para voltar";
        }
        drawHlMeter(x0, y, barW, barH, "Mjolnir",
          player.mjolnirCooldown > 0
            ? 1 - player.mjolnirCooldown / thorMjolnirCooldownSeconds()
            : player.mjolnirEnergy / player.mjolnirMaxEnergy,
          player.mjolnirCooldown > 0 ? "#3a6a7a" : "#7ee8ff",
          hammerNote);
        y += barH + 13;
      }

      // Medidor de voo (azul) — energia ou recarga.
      drawHlMeter(x0, y, barW, barH, superMoveAbilityLabel(),
        player.flyCooldown > 0 ? 1 - player.flyCooldown / moveCooldownMax : player.flyFuel / player.flyMaxFuel,
        player.flyCooldown > 0 ? moveCooldownColor : moveReadyColor,
        player.flyCooldown > 0 ? ("recarga " + player.flyCooldown.toFixed(1) + "s") : "");
      y += barH + 13;

      ctx.font = "700 12px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = "rgba(236,243,251,0.95)";
      if (thor) {
        const stormMax = THOR_BERSERK_SECONDS + (isSurvivalRun() ? survivalAbilityLevel("basicLightning") * 1.2 : 0);
        drawHlMeter(x0, y, barW, barH, thorStormActive() ? "Tempestade" : "Raios",
          thorStormActive() ? player.berserkT / stormMax : player.rage / player.rageMax,
          thorStormActive() ? "#6ee0ff" : "#4db8ff",
          thorStormActive() ? (player.berserkT.toFixed(1) + "s") : "");
        y += barH + 13;
      }
      if (isSurvivalRun()) {
        drawHlMeter(x0, y, barW, barH, "XP Nv " + survival.level,
          survival.xp / Math.max(1, survival.nextXp),
          "#7df3cf",
          "");
        y += barH + 13;
        const wave = currentSurvivalWave();
        ctx.font = "700 11px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.fillStyle = "rgba(236,243,251,0.9)";
        ctx.fillText("Onda: " + wave.label + " | " + Math.floor(survival.elapsed) + "s", x0, y);
      }
      ctx.restore();
    }

    function drawHlMeter(x, y, w, h, label, frac, color, note) {
      frac = clamp(frac, 0, 1);
      ctx.font = "600 10px Bahnschrift, Trebuchet MS, sans-serif";
      ctx.fillStyle = "rgba(210,228,240,0.85)";
      ctx.fillText(label + (note ? "  (" + note + ")" : ""), x, y - 2);
      ctx.fillStyle = "rgba(10,16,22,0.7)";
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w * frac, h);
      ctx.strokeStyle = "rgba(0,0,0,0.6)";
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    }

    function draw(now) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      if (screenShake.t > 0) ctx.translate(screenShake.x, screenShake.y);
      applyFollowCameraTransform();
      drawFloor(now);
      drawAtmosphere(now);
      drawEntities(now);
      drawNemesisMissiles();
      drawWeatherVisionLimit();
      ctx.restore();
      ctx.save();
      if (screenShake.t > 0) ctx.translate(screenShake.x, screenShake.y);
      drawPlayerEdgeIndicator(now);
      drawInteractionPrompt();
      drawInteractionFeedback(now);
      drawAlertBanners(now);
      drawHomelanderHud(now);
      drawStealthHud();
      drawMobileAimIndicator(now);
      drawDesktopControlsHelp();

      const m = Meta();
      if (m && mode === MODE_PLAYING && run.active && !isSuperCharacter()) {
        m.drawMinimap(ctx, {
          grid,
          TILE,
          CELL_FLOOR,
          CELL_WALL,
          CELL_DOOR_CLOSED,
          CELL_DOOR_OPEN,
          objectives,
          item,
          exit,
          playerX: player.x,
          playerY: player.y,
          size: document.body.classList.contains("mobile-gameplay") ? 96 : 118
        });
      }
      if (m && tutorialActive && tutorialStep >= 0 && mode === MODE_PLAYING && !shouldSkipDesktopTutorial()) {
        m.drawTutorialOverlay(ctx, tutorialStep, { mobile: touchInput.enabled });
      }
      const tutProg = m && m.loadTutorialProgress();
      if (m && tutProg && !tutProg.seenControls && run.active && run.level === 1 && mode === MODE_PLAYING && levelIntroFlash <= 0) {
        m.drawFirstRunControls(ctx, touchInput.enabled);
      }
      if (m && stealthFeedbackText) {
        m.drawStealthFeedback(ctx, stealthFeedbackText, stealthFeedbackT);
      }
      if (m && survivorStatsOverlayT > 0 && mode === MODE_RUN_OVER) {
        m.drawSurvivorStatsOverlay(ctx, {
          level: survival.level,
          time: formatTime(Math.floor(survival.elapsed)),
          kills: run.survivorKills,
          xp: run.survivorXpTotal || survival.xp,
          abilities: Object.keys(survival.abilities || {}).length
        });
      }

      if (levelIntroFlash > 0 && mode === MODE_PLAYING) {
        const alpha = clamp(levelIntroFlash, 0, 1) * 0.36;
        ctx.fillStyle = "rgba(0,0,0," + alpha + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(228,247,255," + clamp(levelIntroFlash * 1.1, 0, 1) + ")";
        ctx.font = "700 34px Bahnschrift, Trebuchet MS, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(isSurvivalRun() ? "SURVIVAL" : ("FASE " + run.level), canvas.width / 2, canvas.height / 2);
        ctx.textAlign = "left";
      }

      if (mode === MODE_PAUSED) {
        drawOverlay("PAUSADO", "Pressione P, Esc ou Retomar.");
      } else if (mode === MODE_LEVEL_CLEAR) {
        drawOverlay("FASE CONCLUÍDA", "Preparando a próxima infiltração...");
      } else if (mode === MODE_LEVEL_FAIL) {
        if (modeTimer > 0.26) {
          drawOverlay("DETECTADO", (hasUnlimitedRespawns() || run.lives > 0) ? "Reposicionando..." : "Run encerrada.");
        }
      } else if (mode === MODE_RUN_OVER) {
        drawOverlay("FIM DA RUN", "Abra o menu para iniciar novamente.");
      } else if (mode === MODE_MENU && menuModal.classList.contains("hidden") && !shouldShowMobilePlayGate()) {
        drawOverlay("STEALTH OPS", "Abra o menu para iniciar.");
      }
      drawSurvivalLevelChoices();
      ctx.restore();
    }

    function processStateTransitions() {
      if (mode === MODE_LEVEL_CLEAR && modeTimer > 2) {
        nextLevel();
      }

      if (mode === MODE_LEVEL_FAIL) {
        if (modeTimer > 1.05) {
          if (hasUnlimitedRespawns() || run.lives > 0) {
            setupLevel(run.level);
            mode = MODE_PLAYING;
            modeTimer = 0;
          } else {
            finalizeRun();
          }
        }
      }
    }

    function handleGlobalInput() {
      if (survival.pendingChoices) {
        if (pressed.has("1")) {
          pressed.delete("1");
          chooseSurvivalCard(0);
          return;
        }
        if (pressed.has("2")) {
          pressed.delete("2");
          chooseSurvivalCard(1);
          return;
        }
        if (pressed.has("3")) {
          pressed.delete("3");
          chooseSurvivalCard(2);
          return;
        }
      }
      // Alterna o painel de ajuda dos controles (PC).
      if (pressed.has("h")) {
        pressed.delete("h");
        showControlsHelp = !showControlsHelp;
      }

      if (consumeActionPress("reload") || consumeTouchFlag("reloadTap")) {
        tryReloadWeapon();
      }

      if (consumeActionPress("pause")) {
        if (mode === MODE_PLAYING || mode === MODE_PAUSED) {
          if (touchInput.enabled && isLikelyMobileViewport()) {
            if (isGamePauseOpen()) resumeFromGamePause();
            else openGamePauseMenu();
          } else {
            togglePause();
          }
        }
      }

      if (consumeTouchFlag("startTap")) {
        if (isGamePauseOpen()) resumeFromGamePause();
        else openGamePauseMenu();
      }

      if (consumeActionPress("confirm")) {
        if (tutorialActive && mode === MODE_PLAYING) {
          advanceTutorial();
          return;
        }
        if (mode === MODE_MENU) {
          if (menuModal.classList.contains("hidden")) {
            openMenu();
            return;
          }
          startRun();
        } else if (mode === MODE_RUN_OVER) {
          openMenu();
        }
      }
    }

    function stepSimulation(dt, now) {
      superKillSfxBudget = superCombatHeavy() ? 3 : 8;
      modeTimer += dt;
      levelIntroFlash = Math.max(0, levelIntroFlash - dt);
      hintCooldown = Math.max(0, hintCooldown - dt);
      uiFeedback.interactTimer = Math.max(0, uiFeedback.interactTimer - dt);
      if (uiFeedback.interactTimer <= 0) uiFeedback.interactText = "";

      if (mode === MODE_PLAYING || mode === MODE_PAUSED) {
        run.levelFreezeSec = getLevelElapsedSec(now);
      }

      if (mode === MODE_PLAYING) {
        if (!survival.pendingChoices) {
          updatePlayer(dt);
          updateLures(dt);
          updateNemesisSpawn(dt);
          updateHomelanderSpawns(dt);
          updateSurvivalAbilities(dt);
          updateGuards(dt);
          updateNemesisMissiles(dt);
        }
        stealthFeedbackT = Math.max(0, stealthFeedbackT - dt);
        if (isSurvivalRun()) run.survivorXpTotal = survival.xp;
        const m = Meta();
        if (m && !isSuperCharacter()) {
          const reason = m.computeStealthThreatReason(guards, player, 0.42);
          if (reason && calcAlertLevel() > 0) {
            stealthFeedbackText = reason;
            stealthFeedbackT = Math.max(stealthFeedbackT, 0.35);
          }
        }
        if (survivorStatsOverlayT > 0) survivorStatsOverlayT = Math.max(0, survivorStatsOverlayT - dt);
        midRunSaveTimer += dt;
        if (midRunSaveTimer >= 8) {
          midRunSaveTimer = 0;
          saveMidRunSnapshot();
        }
      } else {
        updateLures(dt);
      }
      updateEffects(dt);
      updateScreenShake(dt);
      processStateTransitions();
      updateUI(now);
    }

    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      handleGlobalInput();

      const modalBlocking = !menuModal.classList.contains("hidden") ||
        isSettingsOverlayOpen() ||
        isGamePauseOpen();
      const orientationBlocking = document.body.classList.contains("mobile-portrait-blocked");

      if (!modalBlocking && !orientationBlocking) {
        stepSimulation(dt, now);
      }
      if (modalBlocking || orientationBlocking) stopLoopingSfx();
      else updateFootstepAudio();

      updateMobileGameplayLayout();
      updateRenderQuality(dt);
      updateFollowCamera(dt);
      updateCardioPulseState();
      syncMusicState();
      draw(now);

      requestAnimationFrame(frame);
    }

    function installAutotestApi() {
      const params = new URLSearchParams(location.search);
      // "perf" expoe a API mantendo o loop de renderizacao ativo (medicao de FPS).
      if (!params.has("autotest") && !params.has("perf")) return;

      function isFinitePos(n) {
        return Number.isFinite(n) && Math.abs(n) < 1e6;
      }

      function validateConnectivity() {
        const start = worldToCell(player.x, player.y);
        const exitCell = worldToCell(exit.x + exit.w * 0.5, exit.y + exit.h * 0.5);
        const saved = levelDoors.map((d) => ({ open: d.open, broken: d.broken }));
        for (const d of levelDoors) openDoor(d, false);
        const closedOk = pathExists(grid, start, exitCell);
        for (let i = 0; i < levelDoors.length; i++) {
          const d = levelDoors[i];
          d.open = saved[i].open;
          d.broken = saved[i].broken;
          setDoorGridCells(d, grid, d.broken || !d.open ? CELL_DOOR_CLOSED : CELL_DOOR_OPEN);
        }
        return closedOk;
      }

      function measureAlertGuardMotion(ticks = 150) {
        const tracked = guards.map((g) => ({
          kind: g.kind,
          startX: g.x,
          startY: g.y,
          moved: 0,
          alertTicks: 0
        }));
        const nearest = guards.reduce((best, g) => {
          const d = dist(player.x, player.y, g.x, g.y);
          return !best || d < best.d ? { g, d } : best;
        }, null);

        for (let i = 0; i < ticks; i++) {
          if (nearest) {
            const ang = angleTo(player.x, player.y, nearest.g.x, nearest.g.y);
            touchInput.moveX = Math.cos(ang);
            touchInput.moveY = Math.sin(ang);
            keys.add("shift");
          }
          stepSimulation(1 / 30, performance.now() + i);
          for (let gi = 0; gi < guards.length; gi++) {
            const g = guards[gi];
            const t = tracked[gi];
            if (g.state === "ALERT") t.alertTicks += 1;
            t.moved = Math.max(t.moved, dist(t.startX, t.startY, g.x, g.y));
          }
        }
        keys.delete("shift");
        touchInput.moveX = 0;
        touchInput.moveY = 0;
        return tracked;
      }

      function objectiveDoneCount() {
        return objectives.filter((o) => o.done).length;
      }

      function openAllDoorsForTest() {
        for (const door of levelDoors) {
          if (!door.broken) openDoor(door, false);
        }
      }

      function clearNonNemesisEnemiesForTest() {
        for (let i = guards.length - 1; i >= 0; i--) {
          if (!isNemesisKind(guards[i].kind)) guards.splice(i, 1);
        }
      }

      function clearAllEnemiesForTest() {
        guards.length = 0;
        homelanderSpawnT = Infinity;
        nemesis.enabled = false;
        nemesis.spawned = false;
        nemesis.warned = false;
        nemesis.chaseLocked = false;
        nemesis.spawnT = 0;
        syncMusicState();
      }

      function walkPlayerToWorldForTest(tx, ty, opts = {}) {
        const dt = opts.dt || 1 / 30;
        const maxTicksPerCell = opts.maxTicksPerCell || 42;
        const targetRadius = opts.targetRadius || 7;
        const startedMode = mode;
        if (opts.openDoors !== false) openAllDoorsForTest();

        const goalCell = nearestWalkableCell(grid, worldToCell(tx, ty), 6) || worldToCell(tx, ty);
        const startCell = worldToCell(player.x, player.y);
        const avoidProps = opts.avoidProps !== false;
        let path = shortestPathCells(grid, startCell, goalCell, (cx, cy) => cellBlockedForEntity(grid, cx, cy, player.r, avoidProps));
        if (!path) path = shortestPathCells(grid, startCell, goalCell);
        if (!path) {
          return { reached: false, reason: "sem rota", ticks: 0, from: startCell, to: goalCell };
        }

        let ticks = 0;
        let stuckTicks = 0;
        for (let i = 1; i < path.length; i++) {
          const waypoint = cellCenter(path[i]);
          for (let t = 0; t < maxTicksPerCell; t++) {
            if (mode !== MODE_PLAYING) {
              keys.clear();
              pressed.clear();
              touchInput.moveX = 0;
              touchInput.moveY = 0;
              touchInput.run = false;
              return { reached: mode === MODE_LEVEL_CLEAR, reason: "modo " + mode, ticks, mode, startedMode };
            }

            const dx = waypoint.x - player.x;
            const dy = waypoint.y - player.y;
            const d = Math.hypot(dx, dy);
            if (d <= targetRadius) break;

            const prevX = player.x;
            const prevY = player.y;
            keys.clear();
            pressed.clear();
            if (dx < -1) keys.add("a");
            if (dx > 1) keys.add("d");
            if (dy < -1) keys.add("w");
            if (dy > 1) keys.add("s");
            if (opts.run !== false) keys.add("shift");
            touchInput.moveX = dx / d;
            touchInput.moveY = dy / d;
            touchInput.run = opts.run !== false;
            stepSimulation(dt, performance.now() + ticks * dt * 1000);
            ticks += 1;

            const moved = dist(prevX, prevY, player.x, player.y);
            stuckTicks = moved < 0.24 ? stuckTicks + 1 : 0;
            if (stuckTicks > 26) {
              keys.clear();
              pressed.clear();
              touchInput.moveX = 0;
              touchInput.moveY = 0;
              touchInput.run = false;
              return { reached: false, reason: "travou no caminho", ticks, waypoint: path[i], mode };
            }
          }
        }

        for (let t = 0; t < 10 && mode === MODE_PLAYING; t++) {
          const dx = tx - player.x;
          const dy = ty - player.y;
          const d = Math.hypot(dx, dy);
          if (d <= Math.max(12, targetRadius)) break;
          keys.clear();
          pressed.clear();
          if (dx < -1) keys.add("a");
          if (dx > 1) keys.add("d");
          if (dy < -1) keys.add("w");
          if (dy > 1) keys.add("s");
          if (opts.run !== false) keys.add("shift");
          touchInput.moveX = dx / d;
          touchInput.moveY = dy / d;
          touchInput.run = opts.run !== false;
          stepSimulation(dt, performance.now() + ticks * dt * 1000);
          ticks += 1;
        }

        keys.clear();
        pressed.clear();
        touchInput.moveX = 0;
        touchInput.moveY = 0;
        touchInput.run = false;

        return {
          reached: dist(player.x, player.y, tx, ty) <= Math.max(24, targetRadius * 2) || mode === MODE_LEVEL_CLEAR,
          reason: "ok",
          ticks,
          pathCells: path.length,
          mode
        };
      }

      function completeCurrentLevelForTest(opts = {}) {
        if (opts.disableEnemies !== false) clearAllEnemiesForTest();
        if (opts.openDoors !== false) openAllDoorsForTest();

        const startLevel = run.level;
        const startedCleared = run.cleared;
        const legs = [];
        if (isSurvivalRun()) {
          for (let i = 0; i < 180 && mode === MODE_PLAYING; i++) stepSimulation(1 / 30, performance.now() + i);
          return {
            level: startLevel,
            completed: mode === MODE_PLAYING,
            survival: true,
            mode,
            cleared: run.cleared,
            objectivesDone: 0,
            objectivesTotal: 0,
            itemTaken: true,
            ticks: 180,
            legs
          };
        }

        for (const o of objectives) {
          if (o.done) continue;
          const leg = walkPlayerToWorldForTest(o.x, o.y, opts);
          legs.push(Object.assign({ target: "objective" }, leg));
          if (!leg.reached || mode !== MODE_PLAYING) break;
        }

        if (mode === MODE_PLAYING && !item.taken) {
          const leg = walkPlayerToWorldForTest(item.x, item.y, opts);
          legs.push(Object.assign({ target: "item" }, leg));
        }

        if (mode === MODE_PLAYING && item.taken && allObjectivesDone()) {
          const leg = walkPlayerToWorldForTest(exit.x + exit.w * 0.5, exit.y + exit.h * 0.5, Object.assign({}, opts, { targetRadius: 14 }));
          legs.push(Object.assign({ target: "exit" }, leg));
        }

        return {
          level: startLevel,
          completed: mode === MODE_LEVEL_CLEAR && run.cleared > startedCleared,
          mode,
          cleared: run.cleared,
          objectivesDone: objectiveDoneCount(),
          objectivesTotal: objectives.length,
          itemTaken: item.taken,
          ticks: legs.reduce((sum, leg) => sum + (leg.ticks || 0), 0),
          legs
        };
      }

      window.__stealthOpsTest = {
        ready: false,
        setEnemyMode(modeId) {
          selectEnemyMode(modeId, false);
          if (isScenarioMode(modeId)) {
            settings.character = "operative";
            settings.runType = "campaign";
          }
        },
        startLevel(level, opts = {}) {
          if (opts.mode) this.setEnemyMode(opts.mode);
          if (isScenarioMode(opts.scenario)) settings.enemyMode = opts.scenario;
          if (isCharacterId(opts.character)) settings.character = opts.character;
          if (isRunType(opts.runType)) settings.runType = opts.runType;
          if (settings.character === "operative") settings.runType = "campaign";
          if (isDifficultyMode(opts.difficulty)) settings.difficultyMode = opts.difficulty;
          const seed = opts.seed || ("SIM-L" + level + "-" + (opts.mode || settings.enemyMode));
          run.seedText = seed;
          settings.preferredSeed = seed;
          resetRunData();
          run.level = Math.max(1, level | 0);
          setupLevel(run.level);
          mode = MODE_PLAYING;
          modeTimer = 0;
          run.active = true;
          menuModal.classList.add("hidden");
          settingsModal.classList.add("hidden");
          return this.snapshot();
        },
        tick(dt = 1 / 30, input = {}) {
          keys.clear();
          pressed.clear();
          for (const k of input.hold || []) keys.add(k);
          for (const k of input.press || []) pressed.add(k);
          touchInput.moveX = input.moveX || 0;
          touchInput.moveY = input.moveY || 0;
          touchInput.run = !!input.run;
          touchInput.crouch = !!input.crouch;
          const now = performance.now();
          stepSimulation(dt, now);
          return this.snapshot();
        },
        render() {
          draw(performance.now());
          return this.snapshot();
        },
        snapshot() {
          return {
            mode,
            level: run.level,
            cleared: run.cleared,
            score: run.score,
            enemyMode: settings.enemyMode,
            character: getSelectedCharacter(),
            runType: settings.runType,
            difficultyMode: run.difficultyMode,
            player: {
              x: player.x,
              y: player.y,
              alive: player.alive,
              crouch: player.crouch,
              mjolnirState: player.mjolnirState,
              mjolnirX: player.mjolnirX,
              mjolnirY: player.mjolnirY,
              laserActive: player.laserActive,
              laserEnergy: player.laserFuel,
              mjolnirEnergy: player.mjolnirEnergy,
              mjolnirCooldown: player.mjolnirCooldown,
              stormActive: thorStormActive()
            },
            survival: {
              active: isSurvivalRun(),
              level: survival.level,
              xp: survival.xp,
              nextXp: survival.nextXp,
              pendingChoices: survival.pendingChoices ? survival.pendingChoices.map((c) => c.id) : null,
              elapsed: survival.elapsed,
              wave: isSurvivalRun() ? currentSurvivalWave().label : ""
            },
            guards: guards.length,
            alertGuards: guards.filter((g) => g.state === "ALERT").length,
            doors: levelDoors.length,
            doorsClosed: levelDoors.filter((d) => !d.open && !d.broken).length,
            essentialDoors: levelDoors.filter((d) => d.essential).length,
            nemesis: {
              enabled: nemesis.enabled,
              spawned: nemesis.spawned,
              warned: nemesis.warned,
              chaseLocked: nemesis.chaseLocked,
              spawnT: nemesis.spawnT,
              guards: guards.filter((g) => isNemesisKind(g.kind)).length
            },
            objectives: objectives.length,
            objectivesDone: objectiveDoneCount(),
            itemTaken: item.taken
          };
        },
        openAllDoors() {
          openAllDoorsForTest();
          return this.snapshot();
        },
        clearAllEnemies() {
          clearAllEnemiesForTest();
          return this.snapshot();
        },
        clearNonNemesisEnemies() {
          clearNonNemesisEnemiesForTest();
          return this.snapshot();
        },
        walkTo(x, y, opts = {}) {
          return walkPlayerToWorldForTest(x, y, opts);
        },
        completeCurrentLevel(opts = {}) {
          return completeCurrentLevelForTest(opts);
        },
        grantSurvivalXp(amount) {
          grantSurvivalXp(amount || 0, player.x, player.y);
          return this.snapshot();
        },
        activateThorStorm() {
          if (isThorCharacter()) enterThorStorm();
          return this.snapshot();
        },
        chooseSurvival(index = 0) {
          chooseSurvivalCard(index | 0);
          return this.snapshot();
        },
        runBattery() {
          const issues = [];
          const warnings = [];
          const levels = [1, 4, 8];
          const modes = ["agent", "zombie", "clown"];

          for (const lvl of levels) {
            for (const m of modes) {
              const tag = "L" + lvl + "/" + m;
              this.startLevel(lvl, { mode: m, seed: "BATTERY-" + tag });
              if (!validateConnectivity()) {
                issues.push(tag + ": sem rota startâ†’exit com portas abertas");
              }
              if (levelDoors.length < 2) {
                issues.push(tag + ": menos de 2 portas no mapa (" + levelDoors.length + ")");
              } else if (levelDoors.filter((d) => d.essential).length < 1 && lvl >= 2) {
                warnings.push(tag + ": nenhuma porta essencial na rota");
              }
              for (let t = 0; t < 90; t++) this.tick(1 / 30);
              const snap = this.snapshot();
              if (!isFinitePos(player.x) || !isFinitePos(player.y)) {
                issues.push(tag + ": posicao do player invalida");
              }
              for (const g of guards) {
                if (!isFinitePos(g.x) || !isFinitePos(g.y)) {
                  issues.push(tag + ": posicao de inimigo invalida");
                  break;
                }
              }
            }
          }

          this.startLevel(4, { mode: "agent", seed: "BATTERY-DOORS" });
          const essential = levelDoors.filter((d) => d.essential && !d.broken);
          if (essential.length === 0) {
            issues.push("L4/agent: nenhuma porta essencial na rota principal");
          } else {
            const start = worldToCell(player.x, player.y);
            const exitCell = worldToCell(exit.x + exit.w * 0.5, exit.y + exit.h * 0.5);
            const d0 = essential[0];
            const wall = new Set(doorTileCoords(d0).map((t) => t.x + "," + t.y));
            if (pathExists(grid, start, exitCell, wall)) {
              warnings.push("porta essencial L4 nao bloqueia rota principal (pode haver atalho)");
            }
          }
          if (levelDoors.length < 2) {
            issues.push("L4/agent: menos de 2 portas no mapa");
          }

          this.startLevel(2, { mode: "zombie", seed: "BATTERY-MOVE" });
          for (let t = 0; t < 60; t++) this.tick(1 / 30);
          const motion = measureAlertGuardMotion(150);
          const sluggish = motion.filter((m) => m.alertTicks > 40 && m.moved < 28);
          if (sluggish.length > 0) {
            issues.push("zombie L2: " + sluggish.length + " inimigo(s) em ALERT quase parado(s) (moved<28px em ~5s)");
          }

          this.startLevel(4, { mode: "agent", seed: "BATTERY-NEMESIS" });
          nemesis.spawnT = 0.1;
          nemesis.warned = false;
          for (let t = 0; t < 240; t++) this.tick(1 / 30);
          if (nemesis.enabled && !nemesis.spawned) {
            issues.push("L4: Nemesis nao spawnou apos 8s de simulacao");
          }

          return {
            ok: issues.length === 0,
            issues,
            warnings,
            ranAt: new Date().toISOString()
          };
        }
      };
    }

    function handleSurvivalChoicePointer(e) {
      if (!survival.pendingChoices || !canvas) return false;
      const p = clientToCanvas(e.clientX, e.clientY);
      for (const r of survival.choiceRects) {
        if (p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h) {
          chooseSurvivalCard(r.index);
          e.preventDefault();
          return true;
        }
      }
      return false;
    }

    function bindUIEvents() {
      document.addEventListener("pointerdown", (e) => {
        if (handleSurvivalChoicePointer(e)) return;
        handleMobilePauseDoubleTap(e);
      }, { passive: false });

      document.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();
        if (key === "f11") {
          e.preventDefault();
          ensureAudio();
          toggleFullscreenMode();
          return;
        }
        if (key === "escape") {
          if (modeLoreModal && !modeLoreModal.classList.contains("hidden")) {
            e.preventDefault();
            closeModeLore();
            return;
          }
          if (isGamePauseOpen()) {
            e.preventDefault();
            resumeFromGamePause();
            return;
          }
          if (isLaserCalibOpen()) {
            e.preventDefault();
            closeLaserCalib(true);
            return;
          }
          if (!settingsModal.classList.contains("hidden")) {
            e.preventDefault();
            closeSettings();
            return;
          }
          if (!menuModal.classList.contains("hidden")) {
            e.preventDefault();
            closeMenu();
            return;
          }
        }
        if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(key)) {
          e.preventDefault();
        }

        if (key === "x" && mode === MODE_PLAYING &&
            menuModal.classList.contains("hidden") &&
            settingsModal.classList.contains("hidden") &&
            !isLaserCalibOpen() &&
            !isGamePauseOpen()) {
          e.preventDefault();
          if (!switchActiveSlot()) pushHint("Equipe uma arma para alternar com a faca.", 0.7);
          return;
        }

        if (!keys.has(key)) {
          pressed.add(key);
        }
        keys.add(key);

        ensureAudio();
      });

      document.addEventListener("keyup", (e) => {
        const key = e.key.toLowerCase();
        keys.delete(key);
        pressed.delete(key);
      });

      // ===== Mouse (modo PC): mira pelo cursor, clique esquerdo atira/laser,
      // clique direito corre/voa. =====
      const updateMouseAimFromEvent = (e) => {
        if (touchInput.enabled) return;
        const cc = clientToCanvas(e.clientX, e.clientY);
        const w = screenToWorld(cc.x, cc.y);
        mouseInput.worldX = w.x;
        mouseInput.worldY = w.y;
        mouseInput.aimActive = true;
      };

      canvas.addEventListener("mousemove", updateMouseAimFromEvent);

      canvas.addEventListener("mousedown", (e) => {
        if (survival.pendingChoices) return;
        if (touchInput.enabled) return;
        updateMouseAimFromEvent(e);
        ensureAudio();
        if (e.button === 0) {
          mouseInput.shoot = true;
          mouseInput.shootTap = true;
          e.preventDefault();
        } else if (e.button === 2) {
          mouseInput.run = true;
          e.preventDefault();
        }
      });

      window.addEventListener("mouseup", (e) => {
        if (e.button === 0) mouseInput.shoot = false;
        else if (e.button === 2) mouseInput.run = false;
      });

      // Impede o menu de contexto no canvas para liberar o clique direito (voo).
      canvas.addEventListener("contextmenu", (e) => {
        if (!touchInput.enabled) e.preventDefault();
      });

      window.addEventListener("blur", () => {
        keys.clear();
        pressed.clear();
        mouseInput.shoot = false;
        mouseInput.run = false;
        mouseInput.shootTap = false;
      });

      const onViewportResize = () => {
        updateTouchVisibility();
        updateCanvasViewportSize();
        if (mobileStartTapCount > 0) syncMobilePlayStepText();
      };

      window.addEventListener("resize", onViewportResize);
      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          onViewportResize();
          forceViewportResync();
          if (mobileStartTapCount > 0) syncMobilePlayStepText();
        }, 40);
      });
      const onFullscreenChange = () => {
        syncFullscreenLayout();
        updateFullscreenButtons();
        forceViewportResync();
      };
      document.addEventListener("fullscreenchange", onFullscreenChange);
      document.addEventListener("webkitfullscreenchange", onFullscreenChange);

      startBtn.addEventListener("click", () => {
        ensureAudio();
        if (touchInput.enabled && isLikelyMobileViewport()) {
          handleMobilePlayTap();
          return;
        }
        openMenu();
      });

      if (quickPlayBtn) {
        quickPlayBtn.addEventListener("click", () => startQuickPlay());
      }
      if (dailyChallengeBtn) {
        dailyChallengeBtn.addEventListener("click", () => {
          ensureAudio();
          startDailyChallenge();
        });
      }
      if (shareRunBtn) {
        shareRunBtn.addEventListener("click", () => {
          ensureAudio();
          shareCurrentRun();
          sfxClick();
        });
      }
      if (keybindResetBtn) {
        keybindResetBtn.addEventListener("click", () => {
          settings.keybinds = null;
          keybindCaptureAction = null;
          applyKeybindSettings();
          syncKeybindUI();
          saveSettings();
          setHint("Teclas restauradas ao padrão.", 1.2);
          sfxClick();
        });
      }
      bindKeybindUI();

      pauseBtn.addEventListener("click", () => {
        ensureAudio();
        if (mode === MODE_PLAYING || mode === MODE_PAUSED) {
          if (touchInput.enabled && isLikelyMobileViewport()) {
            if (isGamePauseOpen()) resumeFromGamePause();
            else openGamePauseMenu();
          } else {
            togglePause();
          }
        }
      });

      if (pauseResumeBtn) {
        pauseResumeBtn.addEventListener("click", () => {
          ensureAudio();
          resumeFromGamePause();
        });
      }

      if (pauseMenuBtn) {
        pauseMenuBtn.addEventListener("click", () => {
          ensureAudio();
          closeGamePauseMenu();
          openMenu();
        });
      }

      if (pauseExitBtn) {
        pauseExitBtn.addEventListener("click", () => {
          ensureAudio();
          closeGamePauseMenu();
          if (isFullscreenActive()) {
            toggleFullscreenMode();
          } else {
            openMenu();
          }
        });
      }

      menuBtn.addEventListener("click", () => {
        ensureAudio();
        openMenu();
      });

      settingsBtn.addEventListener("click", () => {
        ensureAudio();
        openSettings();
      });

      if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", () => {
          ensureAudio();
          toggleFullscreenMode();
        });
      }

      if (menuCoverBtn) {
        menuCoverBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          showMenuScreen("home");
        });
      }
      if (towerPlayBtn) {
        towerPlayBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          syncMenuWizardUI();
          showMenuScreen("family");
        });
      }
      if (towerMenuBtn) {
        towerMenuBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          showMenuScreen("records");
        });
      }
      if (familyBackBtn) {
        familyBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen("home");
        });
      }
      if (familyNextBtn) {
        familyNextBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          advanceMenuWizard("family");
        });
      }
      if (runtypeBackBtn) {
        runtypeBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen(getMenuWizardBack("runtype"));
        });
      }
      if (runtypeNextBtn) {
        runtypeNextBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          advanceMenuWizard("runtype");
        });
      }
      if (scenarioBackBtn) {
        scenarioBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen(getMenuWizardBack("scenario"));
        });
      }
      if (scenarioNextBtn) {
        scenarioNextBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          advanceMenuWizard("scenario");
        });
      }
      if (characterBackBtn) {
        characterBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen(getMenuWizardBack("character"));
        });
      }
      if (characterNextBtn) {
        characterNextBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          advanceMenuWizard("character");
        });
      }
      if (levelBackBtn) {
        levelBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen(getMenuWizardBack("level"));
        });
      }
      const difficultyBackBtn = document.getElementById("difficultyBackBtn");
      if (difficultyBackBtn) {
        difficultyBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen(getMenuWizardBack("difficulty"));
        });
      }
      if (difficultyNextBtn) {
        difficultyNextBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          advanceMenuWizard("difficulty");
        });
      }
      if (recordsBackBtn) {
        recordsBackBtn.addEventListener("click", () => {
          sfxClick();
          showMenuScreen("home");
        });
      }
      if (shopPrevBtn) {
        shopPrevBtn.addEventListener("click", () => shiftShopCarousel(-1));
      }
      if (shopNextBtn) {
        shopNextBtn.addEventListener("click", () => shiftShopCarousel(1));
      }
      if (shopArtLightboxCloseBtn) {
        shopArtLightboxCloseBtn.addEventListener("click", () => {
          closeShopArtLightbox();
          sfxClick();
        });
      }
      if (shopArtLightbox) {
        shopArtLightbox.addEventListener("click", (e) => {
          if (e.target === shopArtLightbox) closeShopArtLightbox();
        });
      }
      document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        if (shopArtLightbox && !shopArtLightbox.classList.contains("hidden")) closeShopArtLightbox();
      });
      window.addEventListener("resize", () => {
        if (shopGrid && shopGrid.childElementCount) syncShopCarousel(false);
      });

      if (mobilePlayBtn) {
        mobilePlayBtn.addEventListener("click", () => {
          handleMobilePlayTap();
        });
      }

      if (mobilePlayMenuBtn) {
        mobilePlayMenuBtn.addEventListener("click", () => {
          ensureAudio();
          openMenu();
        });
      }

      if (menuStartRunBtn) {
        menuStartRunBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          launchMenuRun();
        });
      }

      if (menuDifficultySelect) {
        menuDifficultySelect.addEventListener("change", () => {
          updateMenuDifficultyHint();
          sfxClick();
        });
      }

      for (const card of menuFamilyCards) {
        card.addEventListener("click", () => {
          ensureAudio();
          setMenuWizardFamily(card.dataset.menuFamily);
          setHint(card.dataset.menuFamily === "supers" ? "Modo Supers selecionado." : "Modo Agente selecionado.");
          sfxClick();
        });
        card.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          card.click();
        });
      }

      for (const card of menuRunTypeCards) {
        card.addEventListener("click", () => {
          if (card.classList.contains("disabled")) return;
          ensureAudio();
          setMenuWizardRunType(card.dataset.runType);
          setHint("Formato: " + (card.dataset.runType === "survivor" ? "Survivor" : "Campanha") + ".");
          sfxClick();
        });
        card.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          card.click();
        });
      }

      for (const card of menuScenarioCards) {
        card.addEventListener("click", () => {
          ensureAudio();
          setMenuWizardScenario(card.dataset.scenarioMode);
          const cfg = getEnemyModeConfig(card.dataset.scenarioMode);
          setHint("Cenário: " + cfg.label + ".");
          sfxClick();
        });
        card.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          card.click();
        });
        const loreBtn = card.querySelector(".menu-mode-lore-btn");
        if (loreBtn) {
          loreBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            ensureAudio();
            openModeLore(card.dataset.scenarioMode);
            sfxClick();
          });
        }
      }

      for (const card of menuCharacterCards) {
        card.addEventListener("click", () => {
          if (!audio.unlocked) ensureAudio();
          setMenuWizardCharacter(card.dataset.superMode);
          const cfg = getEnemyModeConfig(card.dataset.superMode);
          setHint("Super: " + cfg.label + ".");
          sfxClick();
        });
        card.addEventListener("keydown", (e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          card.click();
        });
        const loreBtn = card.querySelector(".menu-mode-lore-btn");
        if (loreBtn) {
          loreBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            ensureAudio();
            openModeLore(card.dataset.superMode);
            sfxClick();
          });
        }
      }

      if (modeLoreCloseBtn) {
        modeLoreCloseBtn.addEventListener("click", () => {
          closeModeLore();
          sfxClick();
        });
      }
      if (modeLoreModal) {
        modeLoreModal.addEventListener("click", (e) => {
          if (e.target === modeLoreModal) closeModeLore();
        });
      }

      menuResumeBtn.addEventListener("click", () => {
        ensureAudio();
        requestMobileImmersiveMode();
        closeMenu();
        if (mode === MODE_PAUSED) {
          mode = MODE_PLAYING;
          run.levelStartMs = performance.now() - run.levelFreezeSec * 1000;
          statusTxt.textContent = "INFILTRANDO";
          setHint("Retomado. Continue a infiltração.");
          pauseBtn.textContent = "Pausar";
        } else if (Meta() && Meta().loadMidRunSave()) {
          resumeMidRun();
        }
        sfxClick();
      });

      menuSettingsBtn.addEventListener("click", () => {
        ensureAudio();
        openSettings();
      });

      if (menuFullscreenBtn) {
        menuFullscreenBtn.addEventListener("click", () => {
          ensureAudio();
          toggleFullscreenMode();
        });
      }

      if (downloadMobileBtn) {
        downloadMobileBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          openOfflineDownloadModal("mobile");
        });
      }
      if (downloadPcBtn) {
        downloadPcBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          openOfflineDownloadModal("pc");
        });
      }
      if (offlineInstallBtn) {
        offlineInstallBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          promptInstallApp();
        });
      }
      if (offlineCacheBtn) {
        offlineCacheBtn.addEventListener("click", () => {
          ensureAudio();
          sfxClick();
          downloadOfflineContent();
        });
      }
      if (offlineDownloadCloseBtn) {
        offlineDownloadCloseBtn.addEventListener("click", () => {
          sfxClick();
          closeOfflineDownloadModal();
        });
      }
      if (offlineDownloadModal) {
        offlineDownloadModal.addEventListener("click", (e) => {
          if (e.target === offlineDownloadModal) closeOfflineDownloadModal();
        });
      }

      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        deferredInstallPrompt = e;
        refreshOfflineInstallButton();
      });
      window.addEventListener("appinstalled", () => {
        deferredInstallPrompt = null;
        refreshOfflineInstallButton();
        setOfflineStatus("App instalado. Baixe o conteúdo offline para jogar sem internet.");
      });

      settingsCloseBtn.addEventListener("click", () => {
        closeSettings();
      });

      settingsModal.addEventListener("click", (e) => {
        if (e.target === settingsModal) closeSettings();
      });

      if (laserCalibOpenBtn) {
        syncLaserCalibDevButton();
        laserCalibOpenBtn.addEventListener("click", () => {
          ensureAudio();
          openLaserCalib();
        });
      }
      if (laserCalibCloseBtn) {
        laserCalibCloseBtn.addEventListener("click", () => closeLaserCalib(true));
      }
      if (laserCalibSaveBtn) {
        laserCalibSaveBtn.addEventListener("click", () => {
          applyLaserCalibSlidersToKey(laserCalibDraftKey);
          saveSettings();
          setHint("Calibração de laser salva.", 1.1);
          sfxClick();
        });
      }
      if (laserCalibResetBtn) {
        laserCalibResetBtn.addEventListener("click", () => {
          resetLaserCalibCurrent();
          sfxClick();
        });
      }
      if (laserCalibMirrorBtn) {
        laserCalibMirrorBtn.addEventListener("click", () => {
          mirrorLaserCalibEyes();
          sfxClick();
        });
      }
      if (laserCalibCopyBtn) {
        laserCalibCopyBtn.addEventListener("click", () => {
          copyLaserCalibExport();
          sfxClick();
        });
      }
      if (laserCalibModal) {
        laserCalibModal.addEventListener("click", (e) => {
          if (e.target === laserCalibModal) closeLaserCalib(true);
        });
      }
      if (laserCalibCharacter) laserCalibCharacter.addEventListener("change", onLaserCalibSelectionChanged);
      if (laserCalibPose) laserCalibPose.addEventListener("change", onLaserCalibSelectionChanged);
      for (const el of [laserCalibLeftLx, laserCalibLeftLy, laserCalibRightLx, laserCalibRightLy, laserCalibDir]) {
        if (!el) continue;
        el.addEventListener("input", () => {
          applyLaserCalibSlidersToKey(laserCalibDraftKey);
          drawLaserCalibPreview();
        });
      }

      seedApplyBtn.addEventListener("click", () => {
        const cleaned = normalizeFixedSeed(seedInput.value);
        seedInput.value = cleaned;
        settings.preferredSeed = cleaned;
        seedTxt.textContent = seedModeLabel();
        saveSettings();
        setHint(cleaned ? ("Seed fixa definida para a próxima run: " + cleaned) : "Seed em AUTO: cada nova run gera mapa novo.");
        sfxClick();
      });

      clearRankBtn.addEventListener("click", clearRankings);
      clearRankFromSettingsBtn.addEventListener("click", clearRankings);

      [
        masterVolume,
        musicVolume,
        sfxEnabled,
        musicEnabled,
        qualityMode,
        difficultyMode,
        touchMode,
        handedness,
        touchLayout,
        touchBtnOffsetX,
        touchBtnOffsetY,
        hapticEnabled,
        joyDeadzone,
        joySensitivity,
        mobileZoom,
        hudScale,
        hudContrast,
        colorblindMode
      ].filter(Boolean).forEach((el) => {
        el.addEventListener("input", applySettingsFromUI);
        el.addEventListener("change", applySettingsFromUI);
      });
    }

    function installBrowserLifecycleHooks() {
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          stopLoopingSfx();
          if (audio.ctx && isBrowserMobilePlay() && audio.ctx.state === "running") {
            audio.ctx.suspend().catch(() => {});
          }
          return;
        }
        ensureAudio();
        syncMusicState();
      });
      window.addEventListener("pagehide", () => stopLoopingSfx());
    }

    function installCanvasViewportObserver() {
      if (typeof ResizeObserver === "undefined" || !stage) return;

      const viewport = canvas.closest(".stage-viewport");
      const observer = new ResizeObserver(() => {
        updateCanvasViewportSize();
      });

      observer.observe(stage);
      if (viewport && viewport !== stage) observer.observe(viewport);
    }

    async function init() {
      loadSettings();
      syncPausePortrait();
      applyKeybindSettings();
      applyUrlBootstrap();
      syncMenuModeCardCopy();
      renderQuality = settings.qualityMode || "high";
      loadProgress();
      loadRankings();
      syncSettingsUI();
      syncMenuEnemyModeUI();
      applyMenuModeVisuals(settings.enemyMode);
      createSprites();
      await loadVisualAssets().catch(() => {
        // keep procedural fallback visuals
      });
      bindUIEvents();
      initTouchControls();
      installBrowserLifecycleHooks();
      installCanvasViewportObserver();
      updateTouchVisibility();
      syncTouchActionBarLayout();
      updateFullscreenButtons();
      updateCanvasViewportSize();
      renderRankings();
      renderAchievementsList();
      tryResumeMidRun();
      syncLaserCalibDevButton();

      const fixedInitialSeed = normalizeFixedSeed(settings.preferredSeed);
      settings.preferredSeed = fixedInitialSeed;
      seedInput.value = fixedInitialSeed;
      seedTxt.textContent = seedModeLabel();
      saveSettings();

      installAutotestApi();
      const autotest = new URLSearchParams(location.search).has("autotest");

      if (!autotest) {
        resetRunData();
        run.seedText = fixedInitialSeed || makeRandomSeed();
        run.level = clamp(progress.lastLevel, 1, Math.max(1, progress.highestLevel));
        setupLevel(run.level);
        run.active = false;
        mode = MODE_MENU;
        modeTimer = 0;
        statusTxt.textContent = "MENU";
        if (touchInput.enabled && isLikelyMobileViewport()) {
          setHint("Toque JOGAR duas vezes para iniciar em paisagem.");
        } else {
          setHint("Escolha Agentes, Zumbis ou Palhaços para começar.");
        }
        openMenu();
        primeMenuMusicAutoplay();
      } else if (window.__stealthOpsTest) {
        window.__stealthOpsTest.ready = true;
        statusTxt.textContent = "AUTOTEST";
        return;
      }

      if (autotest) return;

      requestAnimationFrame(() => {
        updateCanvasViewportSize();
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => updateCanvasViewportSize()).catch(() => {});
        }
        requestAnimationFrame(frame);
      });
    }

    init();
  })();
