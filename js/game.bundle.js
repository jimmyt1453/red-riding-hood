const DIFFICULTIES = {
  easy: {
    label: "Easy",
    playerHealth: 125,
    enemySpeed: 0.7,
    enemyDamage: 8,
    enemyHealth: 30,
    bossHealth: 180,
    fireCooldown: 350,
  },
  normal: {
    label: "Normal",
    playerHealth: 100,
    enemySpeed: 1,
    enemyDamage: 12,
    enemyHealth: 40,
    bossHealth: 240,
    fireCooldown: 430,
  },
  nightmare: {
    label: "Nightmare",
    playerHealth: 90,
    enemySpeed: 1.12,
    enemyDamage: 13,
    enemyHealth: 48,
    bossHealth: 282,
    fireCooldown: 490,
  },
};

const VISUAL_STYLES = {
  storybook: {
    label: "Storybook Paint",
    stagePalettes: {
      "forest-trail": { sky: ["#f5ab82", "#db7856", "#30433d"], floor: ["#2a3a33", "#1d2724"] },
      "lantern-ruins": { sky: ["#e38b70", "#8c5e55", "#202828"], floor: ["#465348", "#232d2b"] },
      "boss-lair": { sky: ["#62394a", "#2c2834", "#121215"], floor: ["#403235", "#1f1d22"] },
    },
    walls: {
      "forest-trail": { barkA: "#65503a", barkB: "#57412f", trunkA: "#8a6d4c", trunkB: "#745a3d", leafA: "#6f8858", leafB: "#5d734a" },
      "lantern-ruins": { barkA: "#64584d", barkB: "#55493f", trunkA: "#8d8377", trunkB: "#70665e", leafA: "#566a58", leafB: "#475748" },
      "boss-lair": { barkA: "#614853", barkB: "#4f3b44", trunkA: "#7d5e6d", trunkB: "#674d5a", leafA: "#47353f", leafB: "#392b34" },
    },
    wolf: { body: "#81685d", bossBody: "#6c5660", bruteBody: "#72634b", mane: "#ead4b8", bossMane: "#d5a56f", eye: "#fff5e4", bossEye: "#ffd38d" },
    prop: { trunk: "#6b4f37", treeLeaf: "#6f8d5b", mushroomCap: "#cf5a4d", mushroomStem: "#f7ead0", shrineStone: "#a7a193", shrineGlow: "#ffd48a" },
    minimap: { wall: "rgba(69, 98, 67, 0.9)", empty: "rgba(99, 136, 92, 0.08)", wolf: "#ff8d7a", boss: "#ffd38d", gate: "rgba(255, 217, 126, 0.95)", hint: "rgba(255, 243, 186, 0.95)", shrine: "#ffe7a8" },
    sparkle: "rgba(255, 239, 200, 0.08)",
  },
  cartoon: {
    label: "Cartoon Action",
    stagePalettes: {
      "forest-trail": { sky: ["#ffd074", "#ff8f54", "#2d4f86"], floor: ["#3a7546", "#21462c"] },
      "lantern-ruins": { sky: ["#ffc064", "#ff6f52", "#334a77"], floor: ["#5a7760", "#2a3d35"] },
      "boss-lair": { sky: ["#ff8a7a", "#7a468d", "#171d40"], floor: ["#4b445d", "#24273a"] },
    },
    walls: {
      "forest-trail": { barkA: "#7c492e", barkB: "#64381f", trunkA: "#b56f3f", trunkB: "#95592d", leafA: "#65b954", leafB: "#3f9d41" },
      "lantern-ruins": { barkA: "#7b614c", barkB: "#674e39", trunkA: "#ae9477", trunkB: "#8f765d", leafA: "#72a365", leafB: "#548553" },
      "boss-lair": { barkA: "#734260", barkB: "#5c314b", trunkA: "#a86b94", trunkB: "#864f72", leafA: "#5f3e73", leafB: "#482d5d" },
    },
    wolf: { body: "#8f6d5f", bossBody: "#7b5878", bruteBody: "#806341", mane: "#ffe4a7", bossMane: "#ffcc68", eye: "#fff8e5", bossEye: "#fff4a0" },
    prop: { trunk: "#7b5033", treeLeaf: "#67ba54", mushroomCap: "#ff6358", mushroomStem: "#fff0d7", shrineStone: "#af9f8d", shrineGlow: "#ffe47c" },
    minimap: { wall: "rgba(77, 126, 72, 0.95)", empty: "rgba(111, 177, 104, 0.1)", wolf: "#ff6e57", boss: "#ffe47c", gate: "rgba(255, 228, 124, 0.98)", hint: "rgba(255, 248, 162, 0.98)", shrine: "#fff39c" },
    sparkle: "rgba(255, 248, 197, 0.14)",
  },
  paper: {
    label: "Paper Theater",
    stagePalettes: {
      "forest-trail": { sky: ["#d6b291", "#8f7a6a", "#314746"], floor: ["#55665c", "#2d3b39"] },
      "lantern-ruins": { sky: ["#c49d85", "#76685f", "#263335"], floor: ["#62645b", "#353b38"] },
      "boss-lair": { sky: ["#8d6771", "#544756", "#1a1820"], floor: ["#514750", "#29262d"] },
    },
    walls: {
      "forest-trail": { barkA: "#6e5846", barkB: "#584536", trunkA: "#8a745f", trunkB: "#705c49", leafA: "#72806d", leafB: "#5f6b58" },
      "lantern-ruins": { barkA: "#6a6258", barkB: "#565047", trunkA: "#8a8278", trunkB: "#6f685f", leafA: "#73786d", leafB: "#5e6458" },
      "boss-lair": { barkA: "#64565f", barkB: "#51454c", trunkA: "#88717f", trunkB: "#6d5a66", leafA: "#4c434c", leafB: "#3f3640" },
    },
    wolf: { body: "#7f7269", bossBody: "#6f6473", bruteBody: "#736455", mane: "#e7d8c1", bossMane: "#cab495", eye: "#faf0e4", bossEye: "#f9dea8" },
    prop: { trunk: "#6c5947", treeLeaf: "#75806f", mushroomCap: "#b35e53", mushroomStem: "#f2e4d0", shrineStone: "#93887e", shrineGlow: "#f2cd97" },
    minimap: { wall: "rgba(97, 106, 94, 0.95)", empty: "rgba(143, 152, 136, 0.08)", wolf: "#d58476", boss: "#f2cd97", gate: "rgba(242, 205, 151, 0.95)", hint: "rgba(248, 233, 196, 0.95)", shrine: "#f6deb4" },
    sparkle: "rgba(255, 241, 203, 0.05)",
  },
};

const ENEMY_ARCHETYPES = {
  wolf: {
    renderType: "wolf",
    label: "Wolf",
    healthMultiplier: 1,
    speedMultiplier: 1,
    damageMultiplier: 1,
    cooldownMultiplier: 1,
    attackRange: 1.4,
    moveStop: 1.15,
    aimTolerance: 0.12,
    radius: 0.26,
    score: 100,
  },
  wolf_fast: {
    renderType: "wolf",
    label: "Swift Wolf",
    healthMultiplier: 0.72,
    speedMultiplier: 1.36,
    damageMultiplier: 0.9,
    cooldownMultiplier: 0.78,
    attackRange: 1.25,
    moveStop: 0.95,
    aimTolerance: 0.11,
    radius: 0.24,
    score: 100,
  },
  wolf_brute: {
    renderType: "wolf",
    label: "Brute Wolf",
    healthMultiplier: 1.65,
    speedMultiplier: 0.72,
    damageMultiplier: 1.45,
    cooldownMultiplier: 1.2,
    attackRange: 1.55,
    moveStop: 1.28,
    aimTolerance: 0.14,
    radius: 0.32,
    score: 100,
  },
  wolf_pouncer: {
    renderType: "wolf",
    label: "Pouncer Wolf",
    healthMultiplier: 0.92,
    speedMultiplier: 1.05,
    damageMultiplier: 1,
    cooldownMultiplier: 1,
    attackRange: 1.45,
    moveStop: 1.12,
    aimTolerance: 0.125,
    radius: 0.25,
    score: 100,
  },
  boss: {
    renderType: "boss",
    label: "Big Bad Wolf",
    healthMultiplier: 1,
    speedMultiplier: 1,
    damageMultiplier: 1,
    cooldownMultiplier: 1,
    attackRange: 2.1,
    moveStop: 1.7,
    aimTolerance: 0.18,
    radius: 0.42,
    score: 500,
  },
};

const UPGRADE_POOL = [
  {
    id: "quick-sparks",
    title: "Quick Sparks",
    description: "Spark charge returns 20% faster for the rest of the run.",
  },
  {
    id: "heartier-hood",
    title: "Heartier Hood",
    description: "Gain 25 max health and heal 25 immediately.",
  },
  {
    id: "wide-burst",
    title: "Wide Burst",
    description: "Your spark shot catches regular wolves with a wider cone.",
  },
  {
    id: "guardian-charm",
    title: "Guardian Charm",
    description: "One time only: avoid defeat and recover 40% health instead.",
  },
];

const UPGRADE_LABELS = Object.fromEntries(UPGRADE_POOL.map((upgrade) => [upgrade.id, upgrade.title]));

const STAGES = [
  {
    key: "forest-trail",
    name: "Stage 1",
    title: "Forest Trail",
    objective: "Clear the forest trail and reach the lantern gate.",
    transitionTitle: "The trail opens to old ruins",
    transitionBody: "Little Red lights the lantern gate and finds a blessing before heading toward forgotten stones where stronger wolves are waiting.",
    exit: { x: 12.5, y: 1.5 },
    map: [
      "##############",
      "#....#......E#",
      "#.##.#.###...#",
      "#....#...#...#",
      "#.######.#.#.#",
      "#.#......#.#.#",
      "#.#.######.#.#",
      "#.#........#.#",
      "#.######.###.#",
      "#...........##",
      "#S########...#",
      "##############",
    ],
    enemies: [
      { archetype: "wolf", x: 3.5, y: 3.5 },
      { archetype: "wolf_fast", x: 8.5, y: 7.5 },
      { archetype: "wolf", x: 10.5, y: 2.5 },
      { archetype: "wolf_pouncer", x: 11.5, y: 8.5 },
    ],
    encounters: [
      {
        id: "trail-ambush",
        triggerKills: 3,
        message: "Tree-line ambush",
        objective: "Fresh wolves burst from the trees. Clear the ambush and push to the gate.",
        enemies: [
          { archetype: "wolf_fast", x: 9.5, y: 9.5, speedMultiplier: 0.94 },
          { archetype: "wolf", x: 6.5, y: 2.5, healthMultiplier: 0.92 },
        ],
      },
    ],
    pickups: [
      { type: "health", x: 2.5, y: 8.5, amount: 25 },
      { type: "spark", x: 6.5, y: 5.5, amount: 0.2 },
    ],
    props: [
      { type: "tree", x: 1.8, y: 8.1 },
      { type: "tree", x: 4.7, y: 3.5 },
      { type: "tree", x: 7.4, y: 7.8 },
      { type: "tree", x: 10.8, y: 6.8 },
      { type: "mushroom", x: 3.1, y: 8.6 },
      { type: "mushroom", x: 9.2, y: 4.5 },
    ],
  },
  {
    key: "lantern-ruins",
    name: "Stage 2",
    title: "Lantern Ruins",
    objective: "Defeat the wolves and relight both lantern shrines to open the lair gate.",
    transitionTitle: "The wolves fall back to the lair",
    transitionBody: "The old ruins glow warm again. One more blessing waits before Little Red steps into the Big Bad Wolf's lair.",
    exit: { x: 13.5, y: 2.5 },
    shrines: [
      { x: 2.5, y: 10.5 },
      { x: 11.5, y: 3.5 },
    ],
    map: [
      "################",
      "#...#.......#..#",
      "#.#.#.#####.#.E#",
      "#.#.#.#...#.#..#",
      "#.#...#.###.##.#",
      "#.#####...#....#",
      "#.....###.#.##.#",
      "###.#.....#.#..#",
      "#...#.#####.#.##",
      "#.###.#.....#..#",
      "#.....#.###.#..#",
      "#.#####.#...##.#",
      "#S......#......#",
      "################",
    ],
    enemies: [
      { archetype: "wolf_fast", x: 3.5, y: 1.5 },
      { archetype: "wolf_brute", x: 5.5, y: 6.5 },
      { archetype: "wolf", x: 10.5, y: 5.5 },
      { archetype: "wolf_pouncer", x: 12.5, y: 10.5 },
      { archetype: "wolf_brute", x: 8.5, y: 11.5, healthMultiplier: 1.15 },
      { archetype: "wolf_fast", x: 13.5, y: 7.5 },
    ],
    encounters: [
      {
        id: "ruin-ambush",
        triggerShrinesLit: 1,
        message: "Ruins stirred",
        objective: "The first shrine wakes the ruins. Survive the new pack and relight the last shrine.",
        enemies: [
          { archetype: "wolf_pouncer", x: 8.5, y: 2.5, speedMultiplier: 0.94 },
          { archetype: "wolf_fast", x: 4.5, y: 11.5, speedMultiplier: 0.92 },
        ],
      },
    ],
    pickups: [
      { type: "health", x: 2.5, y: 10.5, amount: 25 },
      { type: "health", x: 11.5, y: 3.5, amount: 20 },
      { type: "spark", x: 7.5, y: 8.5, amount: 0.25 },
    ],
    props: [
      { type: "tree", x: 2.4, y: 2.1 },
      { type: "tree", x: 6.4, y: 9.5 },
      { type: "tree", x: 11.4, y: 6.5 },
      { type: "tree", x: 13.1, y: 11.2 },
      { type: "mushroom", x: 4.2, y: 6.6 },
      { type: "mushroom", x: 9.2, y: 11.3 },
      { type: "mushroom", x: 12.4, y: 3.6 },
    ],
  },
  {
    key: "boss-lair",
    name: "Stage 3",
    title: "Big Bad Lair",
    objective: "Defeat the Big Bad Wolf and save Granny.",
    map: [
      "##################",
      "#.......#........#",
      "#.###...#...###..#",
      "#.#...........#..#",
      "#.#.###...###.#..#",
      "#...#.......#....#",
      "###.#.#####.#.####",
      "#...#.#...#.#....#",
      "#.###.#...#.###..#",
      "#.....#...#......#",
      "#.##############.#",
      "#................#",
      "#.######..######.#",
      "#S...............#",
      "##################",
    ],
    enemies: [
      { archetype: "wolf_fast", x: 14.5, y: 2.5 },
      { archetype: "wolf_brute", x: 13.5, y: 9.5 },
      { archetype: "wolf_pouncer", x: 4.5, y: 11.5 },
    ],
    boss: { x: 9.5, y: 8.5 },
    pickups: [
      { type: "health", x: 2.5, y: 11.5, amount: 30 },
      { type: "health", x: 15.5, y: 11.5, amount: 30 },
    ],
    props: [
      { type: "tree", x: 3.4, y: 11.2 },
      { type: "tree", x: 14.4, y: 11.2 },
      { type: "tree", x: 6.6, y: 5.5 },
      { type: "mushroom", x: 4.4, y: 12.3 },
      { type: "mushroom", x: 13.8, y: 3.1 },
    ],
  },
];

const MOVE_SPEED = 2.5;
const TURN_SPEED = 2.5;
const TOUCH_TURN_SPEED = 3.15;
const TOUCH_MOVE_DEADZONE = 0.14;
const PLAYER_RADIUS = 0.22;
const TAU = Math.PI * 2;
const FRAME_TIME = 1000 / 60;
const SCORE_PICKUP = 25;
const STORAGE_KEYS = {
  progress: "rrh-progress-v2",
  settings: "rrh-settings-v1",
};
const MEDAL_RANK = {
  None: 0,
  Bronze: 1,
  Silver: 2,
  Gold: 3,
};
const QUALITY_LEVELS = {
  balanced: {
    label: "Balanced",
    dprDesktop: 1.5,
    dprMobile: 1.25,
    rayDivisor: 4,
    minRays: 160,
    minimapScale: 16,
    atmosphereParticles: 10,
    worldGuides: true,
    fancyEffects: true,
  },
  performance: {
    label: "Performance",
    dprDesktop: 1.05,
    dprMobile: 1,
    rayDivisor: 5,
    minRays: 120,
    minimapScale: 13,
    atmosphereParticles: 5,
    worldGuides: false,
    fancyEffects: false,
  },
};

function createDefaultProgress() {
  return {
    bestScore: 0,
    totalRuns: 0,
    totalVictories: 0,
    clearedDifficulties: [],
    difficulties: {
      easy: { bestScore: 0, bestTime: null, bestMedal: "None", clears: 0 },
      normal: { bestScore: 0, bestTime: null, bestMedal: "None", clears: 0 },
      nightmare: { bestScore: 0, bestTime: null, bestMedal: "None", clears: 0 },
    },
  };
}

function loadProgress() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.progress) || "null");
    if (!parsed || typeof parsed !== "object") return createDefaultProgress();
    const defaults = createDefaultProgress();
    return {
      ...defaults,
      ...parsed,
      difficulties: {
        easy: { ...defaults.difficulties.easy, ...(parsed.difficulties?.easy || {}) },
        normal: { ...defaults.difficulties.normal, ...(parsed.difficulties?.normal || {}) },
        nightmare: { ...defaults.difficulties.nightmare, ...(parsed.difficulties?.nightmare || {}) },
      },
      clearedDifficulties: Array.isArray(parsed.clearedDifficulties) ? parsed.clearedDifficulties : [],
    };
  } catch (error) {
    return createDefaultProgress();
  }
}

function saveProgress(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  } catch (error) {
    // Ignore storage failures in private or restricted browsing contexts.
  }
}

function loadSettings() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEYS.settings) || "null");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveSettings(settings) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
  } catch (error) {
    // Ignore storage failures in private or restricted browsing contexts.
  }
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTime(seconds) {
  const total = Math.max(0, Math.floor(seconds));
  const mins = String(Math.floor(total / 60)).padStart(2, "0");
  const secs = String(total % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function formatScore(value) {
  return `${Math.max(0, Math.round(value))}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function shuffle(array) {
  const next = [...array];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function smallestAngleDifference(a, b) {
  let diff = (b - a + Math.PI) % TAU;
  if (diff < 0) diff += TAU;
  return diff - Math.PI;
}

function shadeColor(hex, shade) {
  const clean = hex.replace("#", "");
  const num = Number.parseInt(clean, 16);
  const r = Math.round(((num >> 16) & 255) * shade);
  const g = Math.round(((num >> 8) & 255) * shade);
  const b = Math.round((num & 255) * shade);
  return `rgb(${r}, ${g}, ${b})`;
}

function createSparkBurst(scale = 1, tone = "gold") {
  const color = tone === "cool" ? [141, 231, 255] : tone === "warm" ? [255, 208, 143] : [255, 226, 138];
  return {
    type: "sparkBurst",
    ttl: 0.18 * scale,
    maxTtl: 0.18 * scale,
    color,
    particles: Array.from({ length: 16 }, () => ({
      x: (Math.random() - 0.5) * 0.28,
      y: (Math.random() - 0.5) * 0.28,
      vx: (Math.random() - 0.5) * 4.8 * scale,
      vy: (Math.random() - 0.5) * 4.8 * scale,
      alpha: 1,
      radius: 1 + Math.random() * 3,
    })),
  };
}

function createScreenFlash(alpha = 0.08, ttl = 0.08, color = "255, 241, 190") {
  return { type: "screenFlash", alpha, ttl, baseColor: color };
}

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.musicNodes = [];
    this.musicScene = "title";
  }

  ensure() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      this.ctx = new AudioContextClass();
      this.playSceneMusic(this.musicScene);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  beep({ frequency = 440, duration = 0.12, type = "sine", gain = 0.02, sweep = 0, when = 0 }) {
    const ctx = this.ensure();
    if (!ctx) return;
    const now = ctx.currentTime + when;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    if (sweep) oscillator.frequency.linearRampToValueAtTime(frequency + sweep, now + duration);
    gainNode.gain.setValueAtTime(gain, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  play(name) {
    if (name === "shoot") {
      this.beep({ frequency: 680, duration: 0.08, type: "triangle", gain: 0.03, sweep: -180 });
      this.beep({ frequency: 930, duration: 0.04, type: "sine", gain: 0.015, sweep: -140, when: 0.01 });
    } else if (name === "hit") {
      this.beep({ frequency: 420, duration: 0.07, type: "square", gain: 0.018, sweep: 80 });
    } else if (name === "pickup") {
      this.beep({ frequency: 640, duration: 0.08, type: "triangle", gain: 0.018, sweep: 160 });
      this.beep({ frequency: 860, duration: 0.09, type: "sine", gain: 0.016, sweep: 80, when: 0.03 });
    } else if (name === "hurt") {
      this.beep({ frequency: 180, duration: 0.1, type: "sawtooth", gain: 0.028, sweep: -70 });
    } else if (name === "stageClear") {
      this.beep({ frequency: 520, duration: 0.14, type: "triangle", gain: 0.02, sweep: 80 });
      this.beep({ frequency: 740, duration: 0.16, type: "triangle", gain: 0.02, sweep: 120, when: 0.08 });
    } else if (name === "bossEnrage") {
      this.beep({ frequency: 120, duration: 0.22, type: "sawtooth", gain: 0.035, sweep: 40 });
      this.beep({ frequency: 210, duration: 0.18, type: "square", gain: 0.02, sweep: -20, when: 0.05 });
    }
  }

  stopMusic() {
    this.musicNodes.forEach(({ oscillator, gain }) => {
      gain.gain.cancelScheduledValues(0);
      gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.08);
      oscillator.stop(this.ctx.currentTime + 0.18);
    });
    this.musicNodes = [];
  }

  setScene(scene) {
    this.musicScene = scene;
    if (!this.ctx) return;
    this.playSceneMusic(scene);
  }

  playSceneMusic(scene) {
    const ctx = this.ensure();
    if (!ctx) return;
    this.stopMusic();
    const scenes = {
      title: [
        { frequency: 196, type: "triangle", gain: 0.012 },
        { frequency: 293.66, type: "sine", gain: 0.007 },
      ],
      "forest-trail": [
        { frequency: 220, type: "triangle", gain: 0.01 },
        { frequency: 329.63, type: "sine", gain: 0.005 },
      ],
      "lantern-ruins": [
        { frequency: 174.61, type: "triangle", gain: 0.012 },
        { frequency: 261.63, type: "sine", gain: 0.006 },
      ],
      "boss-lair": [
        { frequency: 146.83, type: "sawtooth", gain: 0.012 },
        { frequency: 220, type: "triangle", gain: 0.005 },
      ],
      victory: [
        { frequency: 261.63, type: "triangle", gain: 0.012 },
        { frequency: 392, type: "sine", gain: 0.007 },
      ],
      defeat: [
        { frequency: 155.56, type: "triangle", gain: 0.01 },
        { frequency: 207.65, type: "sine", gain: 0.004 },
      ],
    };
    (scenes[scene] || scenes.title).forEach((layer) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = layer.type;
      oscillator.frequency.setValueAtTime(layer.frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(layer.gain, ctx.currentTime + 0.3);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start();
      this.musicNodes.push({ oscillator, gain });
    });
  }
}

class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.shake = 0;
    this.depthBuffer = new Float32Array(0);
    this.spriteEntries = [];
    this.qualityKey = "balanced";
    this.quality = QUALITY_LEVELS.balanced;
    this.resize();
  }

  setQuality(key) {
    this.qualityKey = QUALITY_LEVELS[key] ? key : "balanced";
    this.quality = QUALITY_LEVELS[this.qualityKey];
    this.resize();
  }

  resize() {
    const dprCap = window.innerWidth <= 720 ? this.quality.dprMobile : this.quality.dprDesktop;
    const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
    this.width = Math.floor(window.innerWidth * dpr);
    this.height = Math.floor(window.innerHeight * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
  }

  addShake(intensity) {
    this.shake = Math.max(this.shake, intensity);
  }

  render(game) {
    const { ctx, width, height } = this;
    const halfHeight = height / 2;
    const stage = game.currentStage;
    const fov = game.fov;
    const player = game.player;
    const rayCount = Math.max(this.quality.minRays, Math.floor(width / this.quality.rayDivisor));
    const sliceWidth = width / rayCount;
    if (this.depthBuffer.length !== rayCount) this.depthBuffer = new Float32Array(rayCount);
    const depthBuffer = this.depthBuffer;

    const stagePalette = game.getStagePalette();
    const shakeX = (Math.random() - 0.5) * this.shake * 10;
    const shakeY = (Math.random() - 0.5) * this.shake * 8;
    this.shake *= 0.82;

    ctx.save();
    ctx.translate(shakeX, shakeY);

    const sky = ctx.createLinearGradient(0, 0, 0, halfHeight);
    sky.addColorStop(0, stagePalette.sky[0]);
    sky.addColorStop(0.5, stagePalette.sky[1]);
    sky.addColorStop(1, stagePalette.sky[2]);
    ctx.fillStyle = sky;
    ctx.fillRect(-40, -40, width + 80, halfHeight + 80);

    const floor = ctx.createLinearGradient(0, halfHeight, 0, height);
    floor.addColorStop(0, stagePalette.floor[0]);
    floor.addColorStop(1, stagePalette.floor[1]);
    ctx.fillStyle = floor;
    ctx.fillRect(-40, halfHeight, width + 80, halfHeight + 80);

    this.drawAtmosphere(game);

    for (let column = 0; column < rayCount; column += 1) {
      const cameraX = (column / rayCount) * 2 - 1;
      const rayAngle = player.angle + cameraX * (fov / 2);
      const ray = castRay(stage.map, player.x, player.y, rayAngle, stage, game.visualStyle);
      const correctedDistance = ray.distance * Math.cos(rayAngle - player.angle);
      depthBuffer[column] = correctedDistance;
      const wallHeight = Math.min(height, (height / Math.max(correctedDistance, 0.001)) * 0.9);
      const y = halfHeight - wallHeight / 2;
      const shade = Math.max(0.24, 1 - correctedDistance / 14);
      const wallX = column * sliceWidth;
      drawForestWallSlice(ctx, stage, ray, wallX, y, sliceWidth + 1, wallHeight, shade, game.visualStyle);
      ctx.fillStyle = shadeColor(ray.trunkColor, Math.max(0.12, shade - 0.12));
      ctx.fillRect(wallX, y, 1, wallHeight);
    }

    this.drawSprites(game, depthBuffer, sliceWidth, rayCount);
    if (this.quality.worldGuides) this.drawWorldGuides(game);
    this.drawEffects(game);
    this.drawMinimap(game);

    ctx.restore();
  }

  drawAtmosphere(game) {
    const { ctx, width, height } = this;
    const t = performance.now() * 0.001;
    const lightX = width * (0.7 + Math.sin(t * 0.12) * 0.05);
    const lightY = height * 0.18;
    const glow = ctx.createRadialGradient(lightX, lightY, 0, lightX, lightY, width * 0.34);
    glow.addColorStop(0, "rgba(255, 217, 144, 0.32)");
    glow.addColorStop(1, "rgba(255, 217, 144, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    for (let index = 0; index < this.quality.atmosphereParticles; index += 1) {
      const x = ((index * 217 + t * 16) % (width + 160)) - 80;
      const y = 80 + (index % 4) * 30;
      ctx.fillStyle = "rgba(255, 239, 187, 0.08)";
      ctx.beginPath();
      ctx.arc(x, y, 1.5 + (index % 3), 0, TAU);
      ctx.fill();
    }
  }

  drawSprites(game, depthBuffer, sliceWidth, rayCount) {
    const { ctx, width, height } = this;
    const player = game.player;
    const entries = this.spriteEntries;
    entries.length = 0;

    const pushSprite = (sprite) => {
      const dx = sprite.x - player.x;
      const dy = sprite.y - player.y;
      const distance = Math.hypot(dx, dy);
      let angle = Math.atan2(dy, dx) - player.angle;
      while (angle < -Math.PI) angle += TAU;
      while (angle > Math.PI) angle -= TAU;
      if (Math.abs(angle) >= game.fov * 0.72 || distance <= 0.2) return;
      entries.push({ sprite, distance, angle });
    };

    if (game.stageGate) pushSprite(game.stageGate);
    for (const prop of game.props) pushSprite(prop);
    for (const shrine of game.lanternShrines) pushSprite(shrine);
    for (const enemy of game.enemies) {
      if (enemy.alive) pushSprite(enemy);
    }
    for (const pickup of game.pickups) {
      if (!pickup.collected) pushSprite(pickup);
    }

    entries.sort((a, b) => b.distance - a.distance);

    for (const entry of entries) {
      const { sprite, distance, angle } = entry;
      const isBoss = sprite.renderType === "boss" || sprite.type === "boss";
      const size = Math.min(height * 0.72, (height / distance) * (isBoss ? 1.25 : sprite.type === "tree" ? 0.72 : 0.65));
      const screenX = (0.5 + angle / game.fov) * width;
      const left = screenX - size / 2;
      const top = height / 2 - size * 0.5 + size * 0.18;
      const startColumn = Math.max(0, Math.floor(left / sliceWidth));
      const endColumn = Math.min(rayCount - 1, Math.ceil((left + size) / sliceWidth));
      let visible = false;

      for (let col = startColumn; col <= endColumn; col += 1) {
        if (depthBuffer[col] > distance - 0.15) {
          visible = true;
          break;
        }
      }

      if (!visible) continue;

      if (sprite.renderType === "wolf" || sprite.renderType === "boss" || sprite.type === "boss") {
        drawWolfSprite(ctx, sprite, left, top, size, game.visualStyle);
      } else if (sprite.type === "tree" || sprite.type === "mushroom" || sprite.type === "gate" || sprite.type === "shrine") {
        drawForestPropSprite(ctx, sprite, left, top, size, game.visualStyle);
      } else if (sprite.type === "health" || sprite.type === "spark") {
        drawPickupSprite(ctx, sprite, left, top + size * 0.15, size * 0.55, game.visualStyle);
      }
    }
  }

  drawEffects(game) {
    const { ctx, width, height } = this;

    game.effects.forEach((effect) => {
      if (effect.type === "sparkBurst") {
        if (!this.quality.fancyEffects) return;
        effect.particles.forEach((particle) => {
          ctx.fillStyle = `rgba(${effect.color.join(", ")}, ${particle.alpha})`;
          ctx.beginPath();
          ctx.arc(
            width * 0.5 + particle.x * width * 0.12,
            height * 0.5 + particle.y * height * 0.12,
            particle.radius,
            0,
            TAU,
          );
          ctx.fill();
        });
      } else if (effect.type === "screenFlash") {
        ctx.fillStyle = `rgba(${effect.baseColor}, ${effect.alpha})`;
        ctx.fillRect(0, 0, width, height);
      } else if (effect.type === "damagePip") {
        const projection = projectWorldToScreen(effect.x, effect.y, game, width, height);
        if (!projection) return;
        ctx.save();
        ctx.globalAlpha = effect.alpha;
        ctx.fillStyle = effect.color;
        ctx.font = `${Math.max(20, width * 0.018)}px Nunito`;
        ctx.textAlign = "center";
        ctx.fillText(effect.text, projection.x, projection.y + effect.offsetY);
        ctx.restore();
      }
    });

    game.shockwaves.forEach((shockwave) => {
      if (!this.quality.fancyEffects) return;
      const projection = projectWorldToScreen(shockwave.x, shockwave.y, game, width, height);
      if (!projection) return;
      const radius = (height / Math.max(shockwave.distanceFromPlayer, 1.4)) * 0.22 * shockwave.radius;
      ctx.strokeStyle = `rgba(255, 212, 144, ${0.45 * shockwave.alpha})`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(projection.x, projection.y, radius, 0, TAU);
      ctx.stroke();
    });

    const boss = game.enemies.find((enemy) => enemy.renderType === "boss" && enemy.alive);
    if (boss) {
      const projection = projectWorldToScreen(boss.x, boss.y, game, width, height);
      if (projection && boss.behaviorState.mode === "shockwave-windup" && this.quality.worldGuides) {
        const pulse = 1 + Math.sin(performance.now() * 0.02) * 0.14;
        ctx.strokeStyle = "rgba(255, 220, 150, 0.72)";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(projection.x, projection.y + 28, 44 * pulse, 0, TAU);
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 241, 198, 0.92)";
        ctx.font = `${Math.max(18, width * 0.014)}px Nunito`;
        ctx.textAlign = "center";
        ctx.fillText("Shockwave Incoming", projection.x, projection.y - 54);
      } else if (projection && boss.behaviorState.mode === "charge-windup" && this.quality.worldGuides) {
        const targetProjection = { x: width * 0.5, y: height * 0.7 };
        const dx = targetProjection.x - projection.x;
        const dy = targetProjection.y - (projection.y + 8);
        const length = Math.hypot(dx, dy) || 1;
        const lineLength = Math.min(width * 0.22, 180);
        ctx.strokeStyle = "rgba(255, 174, 138, 0.8)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(projection.x, projection.y + 8);
        ctx.lineTo(
          projection.x + (dx / length) * lineLength,
          projection.y + 8 + (dy / length) * lineLength,
        );
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 230, 205, 0.92)";
        ctx.font = `${Math.max(18, width * 0.014)}px Nunito`;
        ctx.textAlign = "center";
        ctx.fillText("Boss Charge", projection.x, projection.y - 54);
      }
    }

    if (game.hurtFlash > 0) {
      ctx.fillStyle = `rgba(216, 82, 68, ${game.hurtFlash * 0.25})`;
      ctx.fillRect(0, 0, width, height);
    }
  }

  drawWorldGuides(game) {
    const { ctx, width, height } = this;

    if (game.stageCleared && game.stageGate) {
      const gateProjection = projectWorldToScreen(game.stageGate.x, game.stageGate.y, game, width, height);
      if (gateProjection) {
        const pulse = 1 + Math.sin(performance.now() * 0.012) * 0.12;
        ctx.strokeStyle = "rgba(255, 223, 156, 0.72)";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(gateProjection.x, gateProjection.y + 30, 34 * pulse, 0, TAU);
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 239, 202, 0.92)";
        ctx.font = `${Math.max(16, width * 0.012)}px Nunito`;
        ctx.textAlign = "center";
        ctx.fillText("Lantern Gate", gateProjection.x, gateProjection.y - 34);
      }
    }

    game.lanternShrines
      .filter((shrine) => !shrine.active)
      .forEach((shrine) => {
        const projection = projectWorldToScreen(shrine.x, shrine.y, game, width, height);
        if (!projection) return;
        const pulse = 1 + Math.sin((performance.now() + shrine.x * 100) * 0.01) * 0.1;
        ctx.strokeStyle = `rgba(255, 226, 166, ${0.42 + shrine.charge * 0.28})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(projection.x, projection.y + 28, (24 + shrine.charge * 10) * pulse, 0, TAU);
        ctx.stroke();
        if (shrine.charge > 0) {
          ctx.fillStyle = "rgba(255, 239, 202, 0.9)";
          ctx.font = `${Math.max(15, width * 0.011)}px Nunito`;
          ctx.textAlign = "center";
          ctx.fillText(`${Math.ceil(shrine.charge * 100)}%`, projection.x, projection.y - 28);
        }
      });
  }

  drawMinimap(game) {
    const { ctx, width, height } = this;
    const scale = this.quality.minimapScale;
    const padding = 18;
    const map = game.currentStage.map;
    const mapWidth = map[0].length * scale + 16;
    const mapHeight = map.length * scale + 16;
    const startX = width - mapWidth - padding + 8;
    const startY = height - mapHeight - padding + 8;

    ctx.save();
    ctx.globalAlpha = 0.88;
    ctx.fillStyle = "rgba(9, 13, 15, 0.58)";
    ctx.fillRect(startX - 8, startY - 8, mapWidth, mapHeight);
    ctx.strokeStyle = "rgba(255, 226, 168, 0.24)";
    ctx.lineWidth = 2;
    ctx.strokeRect(startX - 8, startY - 8, mapWidth, mapHeight);

    for (let y = 0; y < map.length; y += 1) {
      for (let x = 0; x < map[y].length; x += 1) {
        const tile = map[y][x];
        ctx.fillStyle = tile === "#" ? game.visualStyle.minimap.wall : game.visualStyle.minimap.empty;
        if (tile === "E") ctx.fillStyle = "rgba(255, 210, 134, 0.85)";
        ctx.fillRect(startX + x * scale, startY + y * scale, scale - 1, scale - 1);
      }
    }

    const playerX = startX + game.player.x * scale;
    const playerY = startY + game.player.y * scale;
    const coneRadius = 18;
    ctx.fillStyle = "rgba(255, 244, 212, 0.16)";
    ctx.beginPath();
    ctx.moveTo(playerX, playerY);
    ctx.arc(playerX, playerY, coneRadius, game.player.angle - 0.32, game.player.angle + 0.32);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#f05d46";
    ctx.beginPath();
    ctx.arc(playerX, playerY, 3, 0, TAU);
    ctx.fill();

    if (game.stageGate) {
      const gateX = startX + game.stageGate.x * scale;
      const gateY = startY + game.stageGate.y * scale;
      const pulse = game.stageCleared ? 1 + Math.sin(performance.now() * 0.01) * 0.2 : 1;
      ctx.fillStyle = game.visualStyle.minimap.gate;
      ctx.fillRect(gateX - 3 * pulse, gateY - 5 * pulse, 6 * pulse, 10 * pulse);
      ctx.beginPath();
      ctx.arc(gateX, gateY - 5 * pulse, 5 * pulse, Math.PI, 0);
      ctx.strokeStyle = game.visualStyle.minimap.gate;
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    game.lanternShrines.forEach((shrine) => {
      const shrineX = startX + shrine.x * scale;
      const shrineY = startY + shrine.y * scale;
      ctx.fillStyle = shrine.active ? game.visualStyle.minimap.shrine : "rgba(255, 227, 168, 0.35)";
      ctx.beginPath();
      ctx.arc(shrineX, shrineY, 3.2, 0, TAU);
      ctx.fill();
    });

    if (game.lastWolfHint) {
      const hintX = startX + game.lastWolfHint.x * scale;
      const hintY = startY + game.lastWolfHint.y * scale;
      ctx.strokeStyle = game.visualStyle.minimap.hint;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(hintX, hintY, 9, 0, TAU);
      ctx.stroke();
      ctx.strokeStyle = game.visualStyle.minimap.hint.replace("0.95", "0.45").replace("0.98", "0.45");
      ctx.beginPath();
      ctx.arc(hintX, hintY, 13, 0, TAU);
      ctx.stroke();
    }

    game.enemies.filter((enemy) => enemy.alive).forEach((enemy) => {
      ctx.fillStyle = enemy.renderType === "boss" ? game.visualStyle.minimap.boss : game.visualStyle.minimap.wolf;
      ctx.beginPath();
      ctx.arc(startX + enemy.x * scale, startY + enemy.y * scale, enemy.renderType === "boss" ? 3.6 : 2.6, 0, TAU);
      ctx.fill();
    });

    ctx.restore();
  }
}

class Game {
  constructor(renderer, ui) {
    this.renderer = renderer;
    this.ui = ui;
    this.audio = new SoundEngine();
    this.progress = loadProgress();
    this.fov = Math.PI / 3;
    this.running = false;
    this.paused = false;
    this.difficultyKey = "easy";
    this.difficulty = DIFFICULTIES.easy;
    this.styleKey = "storybook";
    this.visualStyle = VISUAL_STYLES.storybook;
    this.stageIndex = 0;
    this.lastTime = 0;
    this.rafId = 0;
    this.keys = new Set();
    this.touchState = new Set();
    this.touchMove = { x: 0, y: 0 };
    this.effects = [];
    this.shockwaves = [];
    this.hurtFlash = 0;
    this.pointerLocked = false;
    this.currentObjective = "";
    this.eventBanner = { text: "", ttl: 0 };
    this.resetRunState();
    this.bindInputs();
  }

  resetRunState() {
    this.runStats = {
      elapsedTime: 0,
      shotsFired: 0,
      hitsLanded: 0,
      wolvesDefeated: 0,
      pickupsCollected: 0,
      damageTaken: 0,
      score: 0,
      healthBudget: 0,
    };
    this.selectedUpgrades = [];
    this.availableUpgradePool = [...UPGRADE_POOL.map((upgrade) => upgrade.id)];
    this.guardianUsed = false;
    this.pendingUpgradeChoices = [];
    this.pendingUpgradeStage = null;
    this.pendingTransition = false;
    this.lastWolfHint = null;
    this.stageKillCount = 0;
    this.stageEncounters = [];
  }

  bindInputs() {
    window.addEventListener("keydown", (event) => {
      if (["KeyW", "KeyA", "KeyS", "KeyD", "ArrowLeft", "ArrowRight", "Space", "KeyR"].includes(event.code)) {
        event.preventDefault();
      }
      if ((event.code === "KeyP" || event.code === "Escape") && this.running) {
        this.togglePause();
        return;
      }
      if (event.code === "Space") {
        this.audio.ensure();
        this.shoot();
      } else if (event.code === "KeyR" && this.running) {
        this.restart();
        return;
      }
      this.keys.add(event.code);
    });

    window.addEventListener("keyup", (event) => {
      this.keys.delete(event.code);
    });

    window.addEventListener("blur", () => {
      this.keys.clear();
      this.touchState.clear();
      this.setTouchMove(0, 0);
      if (this.running && !this.paused && !this.pendingTransition && this.pendingUpgradeChoices.length === 0) {
        this.paused = true;
        this.ui.togglePause(true);
      }
    });

    window.addEventListener("mousemove", (event) => {
      if (!this.running || this.paused || !this.pointerLocked) return;
      this.player.angle += event.movementX * 0.0026;
    });

    document.addEventListener("pointerlockchange", () => {
      this.pointerLocked = document.pointerLockElement === this.renderer.canvas;
    });

    this.renderer.canvas.addEventListener("click", () => {
      this.audio.ensure();
      if (!this.running || this.paused) return;
      if (!this.pointerLocked && window.innerWidth > 720) {
        this.renderer.canvas.requestPointerLock();
      }
      this.shoot();
    });
  }

  setDifficulty(key) {
    this.difficultyKey = key;
    this.difficulty = DIFFICULTIES[key];
  }

  setStyle(key) {
    this.styleKey = key;
    this.visualStyle = VISUAL_STYLES[key] || VISUAL_STYLES.storybook;
  }

  getStagePalette() {
    return this.visualStyle.stagePalettes[this.currentStage.key] || {
      sky: this.currentStage.sky,
      floor: this.currentStage.floor,
    };
  }

  getPlayerMaxHealth() {
    return this.difficulty.playerHealth + (this.selectedUpgrades.includes("heartier-hood") ? 25 : 0);
  }

  getFireCooldownMs() {
    return this.difficulty.fireCooldown * (this.selectedUpgrades.includes("quick-sparks") ? 0.8 : 1);
  }

  getAccuracy() {
    return this.runStats.shotsFired === 0 ? 0 : (this.runStats.hitsLanded / this.runStats.shotsFired) * 100;
  }

  start() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.running = true;
    this.paused = false;
    this.keys.clear();
    this.touchState.clear();
    this.setTouchMove(0, 0);
    this.stageIndex = 0;
    this.effects = [];
    this.shockwaves = [];
    this.hurtFlash = 0;
    this.eventBanner = { text: "", ttl: 0 };
    this.resetRunState();
    this.loadStage(0, true);
    this.audio.setScene("forest-trail");
    this.ui.showGame();
    this.refreshProgressUi(this.difficultyKey);
    this.ui.updateEvent("");
    this.ui.togglePause(false);
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame((time) => this.loop(time));
  }

  restart() {
    this.start();
  }

  loadStage(index, fresh = false) {
    this.stageIndex = index;
    this.currentStage = STAGES[index];
    this.map = this.currentStage.map;
    const spawn = this.findSpawn(this.map);
    const reachableTiles = this.buildReachableTiles(this.map, spawn);
    const maxHealth = this.getPlayerMaxHealth();
    const carriedHealth = fresh
      ? maxHealth
      : Math.min((this.player?.health ?? maxHealth) + 20, maxHealth);

    this.player = {
      x: spawn.x,
      y: spawn.y,
      angle: -Math.PI / 2,
      health: carriedHealth,
      maxHealth,
      fireCooldown: 0,
    };

    this.runStats.healthBudget += maxHealth;

    this.enemies = this.currentStage.enemies.map((enemy, enemyIndex) =>
      this.createEnemy(enemy, enemyIndex, reachableTiles),
    );

    if (this.currentStage.boss) {
      this.enemies.push(
        this.createEnemy(
          { archetype: "boss", x: this.currentStage.boss.x, y: this.currentStage.boss.y },
          "boss",
          reachableTiles,
        ),
      );
    }

    this.pickups = this.currentStage.pickups.map((pickup, pickupIndex) => ({
      id: `${this.currentStage.key}-pickup-${pickupIndex}`,
      ...pickup,
      ...this.snapEntityToReachableTile(pickup, reachableTiles),
      collected: false,
    }));

    this.props = (this.currentStage.props || []).map((prop, propIndex) => ({
      id: `${this.currentStage.key}-prop-${propIndex}`,
      ...prop,
      ...this.snapEntityToReachableTile(prop, reachableTiles),
    }));

    this.lanternShrines = (this.currentStage.shrines || []).map((shrine, indexShrine) => ({
      id: `${this.currentStage.key}-shrine-${indexShrine}`,
      type: "shrine",
      ...this.snapEntityToReachableTile(shrine, reachableTiles),
      active: false,
      charge: 0,
    }));

    this.stageGate = this.currentStage.exit
      ? {
          id: `${this.currentStage.key}-gate`,
          type: "gate",
          ...this.snapEntityToReachableTile(this.currentStage.exit, reachableTiles),
        }
      : null;

    this.projectileCharge = 1;
    this.stageCleared = false;
    this.stageKillCount = 0;
    this.pendingTransition = false;
    this.pendingUpgradeChoices = [];
    this.pendingUpgradeStage = null;
    this.victory = false;
    this.lastWolfHint = null;
    this.eventBanner = { text: "", ttl: 0 };
    this.effects = [];
    this.shockwaves = [];
    this.stageEncounters = (this.currentStage.encounters || []).map((encounter) => ({
      ...encounter,
      triggered: false,
    }));
    this.ui.updateStage(this.currentStage, this.difficulty);
    this.setObjective(this.currentStage.objective);
    this.ui.updateUpgrades(this.selectedUpgrades.map((id) => UPGRADE_LABELS[id] || id));
    this.ui.updateEvent("");
    this.ui.showBoss(null);
    this.ui.updateShrines(this.lanternShrines);
    this.audio.setScene(this.currentStage.key);
  }

  createEnemy(enemy, enemyIndex, reachableTiles) {
    const archetypeKey = enemy.archetype || "wolf";
    const archetype = ENEMY_ARCHETYPES[archetypeKey];
    const isBoss = archetype.renderType === "boss";
    const baseHealth = isBoss ? this.difficulty.bossHealth : this.difficulty.enemyHealth;
    const baseDamage = isBoss ? this.difficulty.enemyDamage + 10 : this.difficulty.enemyDamage;
    const snapped = this.snapEntityToReachableTile(enemy, reachableTiles);
    return {
      id: `${this.currentStage.key}-${enemyIndex}`,
      x: snapped.x,
      y: snapped.y,
      archetype: archetypeKey,
      renderType: archetype.renderType,
      label: archetype.label,
      alive: true,
      radius: archetype.radius,
      speed: MOVE_SPEED * 0.33 * this.difficulty.enemySpeed * archetype.speedMultiplier * (enemy.speedMultiplier || 1),
      health: baseHealth * archetype.healthMultiplier * (enemy.healthMultiplier || 1),
      maxHealth: baseHealth * archetype.healthMultiplier * (enemy.healthMultiplier || 1),
      damage: baseDamage * archetype.damageMultiplier,
      attackCooldown: 0,
      hitTimer: 0,
      phase: 1,
      moveStop: archetype.moveStop,
      attackRange: archetype.attackRange,
      aimTolerance: archetype.aimTolerance,
      cooldownMultiplier: archetype.cooldownMultiplier,
      score: archetype.score,
      behaviorState: {
        mode: "idle",
        timer: 0,
        cooldown: 0,
        vx: 0,
        vy: 0,
        specialCooldown: 3.2,
        chargeCooldown: 5.4,
        spawnedAdds: false,
      },
    };
  }

  setObjective(text) {
    this.currentObjective = text;
    this.ui.updateObjective(text);
  }

  showEvent(text, ttl = 1.8) {
    this.eventBanner = { text, ttl };
    this.ui.updateEvent(text);
  }

  findSpawn(map) {
    for (let y = 0; y < map.length; y += 1) {
      const x = map[y].indexOf("S");
      if (x >= 0) return { x: x + 0.5, y: y + 0.5 };
    }
    return { x: 1.5, y: 1.5 };
  }

  buildReachableTiles(map, spawn) {
    const queue = [[Math.floor(spawn.x), Math.floor(spawn.y)]];
    const visited = new Set();

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const key = `${x},${y}`;
      if (visited.has(key)) continue;
      const tile = map[y]?.[x];
      if (!tile || tile === "#") continue;
      visited.add(key);
      queue.push([x + 1, y]);
      queue.push([x - 1, y]);
      queue.push([x, y + 1]);
      queue.push([x, y - 1]);
    }

    return [...visited].map((key) => {
      const [x, y] = key.split(",").map(Number);
      return { x: x + 0.5, y: y + 0.5 };
    });
  }

  snapEntityToReachableTile(entity, reachableTiles) {
    let bestTile = reachableTiles[0] || { x: entity.x, y: entity.y };
    let bestDistance = Infinity;
    reachableTiles.forEach((tile) => {
      const distance = Math.hypot(tile.x - entity.x, tile.y - entity.y);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestTile = tile;
      }
    });
    return { x: bestTile.x, y: bestTile.y };
  }

  updateLastWolfHint() {
    if (this.stageCleared) {
      this.lastWolfHint = null;
      return;
    }

    const aliveWolves = this.enemies.filter((enemy) => enemy.alive && enemy.renderType === "wolf");
    if (aliveWolves.length !== 1) {
      this.lastWolfHint = null;
      return;
    }

    const wolf = aliveWolves[0];
    const direction = this.describeDirectionTo(wolf.x, wolf.y);
    this.lastWolfHint = { x: wolf.x, y: wolf.y, direction };
    if (!this.lanternShrines.length || this.lanternShrines.every((shrine) => shrine.active)) {
      this.setObjective(`Last wolf hint: head ${direction}. Follow the glowing ring on the minimap.`);
    }
  }

  describeDirectionTo(x, y) {
    const dx = x - this.player.x;
    const dy = y - this.player.y;
    const angle = Math.atan2(dy, dx) - this.player.angle;
    const normalized = ((angle + Math.PI) % TAU + TAU) % TAU - Math.PI;

    if (normalized > -0.35 && normalized < 0.35) return "straight ahead";
    if (normalized >= 0.35 && normalized < 1.2) return "to your right";
    if (normalized <= -0.35 && normalized > -1.2) return "to your left";
    return "behind you";
  }

  loop(time) {
    if (!this.running) return;
    if (time - this.lastTime < FRAME_TIME) {
      this.rafId = requestAnimationFrame((nextTime) => this.loop(nextTime));
      return;
    }

    const delta = Math.min(0.033, (time - this.lastTime) / 1000);
    this.lastTime = time;

    if (!this.paused) {
      this.update(delta);
      this.renderer.render(this);
      this.ui.updateHud(this);
    }

    this.rafId = requestAnimationFrame((nextTime) => this.loop(nextTime));
  }

  update(delta) {
    this.runStats.elapsedTime += delta;
    this.handleInput(delta);
    this.updateEnemies(delta);
    this.updatePickups();
    this.updateShrines(delta);
    this.updateStageEncounters();
    this.updateEffects(delta);

    this.player.fireCooldown = Math.max(0, this.player.fireCooldown - delta);
    this.projectileCharge = Math.min(1, this.projectileCharge + delta / (this.getFireCooldownMs() / 1000));
    this.hurtFlash = Math.max(0, this.hurtFlash - delta * 2);
    this.updateLastWolfHint();

    if (this.eventBanner.ttl > 0) {
      this.eventBanner.ttl = Math.max(0, this.eventBanner.ttl - delta);
      if (this.eventBanner.ttl === 0) this.ui.updateEvent("");
    }

    if (!this.stageCleared && this.isStageObjectiveComplete()) {
      this.stageCleared = true;
      this.audio.play("stageClear");
      this.showEvent("Stage Clear");
      if (this.stageIndex < STAGES.length - 1) {
        this.setObjective("The path is safe. Reach the glowing lantern gate marked in gold on the minimap.");
      } else {
        this.setObjective("Granny is safe. Step into the cottage light.");
        this.finishGame(true);
      }
    }

    if (this.stageCleared && this.stageIndex < STAGES.length - 1 && !this.pendingTransition) {
      const dx = this.currentStage.exit.x - this.player.x;
      const dy = this.currentStage.exit.y - this.player.y;
      if (Math.hypot(dx, dy) < 0.65) {
        this.pendingTransition = true;
        this.paused = true;
        this.ui.showTransition(this.currentStage.transitionTitle, this.currentStage.transitionBody);
      }
    }
  }

  isStageObjectiveComplete() {
    const enemiesDefeated = this.enemies.every((enemy) => !enemy.alive);
    const shrinesLit = this.lanternShrines.every((shrine) => shrine.active);
    return enemiesDefeated && shrinesLit;
  }

  handleInput(delta) {
    let moveX = 0;
    let moveY = 0;

    if (this.keys.has("KeyW")) moveY += 1;
    if (this.keys.has("KeyS")) moveY -= 1;
    if (this.keys.has("KeyA")) moveX -= 1;
    if (this.keys.has("KeyD")) moveX += 1;

    const touchMagnitude = Math.hypot(this.touchMove.x, this.touchMove.y);
    if (touchMagnitude >= TOUCH_MOVE_DEADZONE) {
      moveX += this.touchMove.x;
      moveY += this.touchMove.y;
    }

    if (this.keys.has("ArrowLeft")) this.player.angle -= TURN_SPEED * delta;
    if (this.keys.has("ArrowRight")) this.player.angle += TURN_SPEED * delta;
    if (this.touchState.has("turnLeft")) this.player.angle -= TOUCH_TURN_SPEED * delta;
    if (this.touchState.has("turnRight")) this.player.angle += TOUCH_TURN_SPEED * delta;

    const moveLength = Math.hypot(moveX, moveY) || 1;
    moveX /= moveLength;
    moveY /= moveLength;

    const forwardX = Math.cos(this.player.angle);
    const forwardY = Math.sin(this.player.angle);
    const strafeX = Math.cos(this.player.angle + Math.PI / 2);
    const strafeY = Math.sin(this.player.angle + Math.PI / 2);
    const speed = MOVE_SPEED * delta;
    const nextX = this.player.x + (forwardX * moveY + strafeX * moveX) * speed;
    const nextY = this.player.y + (forwardY * moveY + strafeY * moveX) * speed;
    this.tryMove(nextX, nextY);

    if (this.touchState.has("shoot")) this.shoot();
  }

  tryMove(nextX, nextY) {
    if (this.isWalkable(nextX, this.player.y)) this.player.x = nextX;
    if (this.isWalkable(this.player.x, nextY)) this.player.y = nextY;
  }

  isWalkable(x, y) {
    const tiles = [
      this.map[Math.floor(y)]?.[Math.floor(x)],
      this.map[Math.floor(y)]?.[Math.floor(x + PLAYER_RADIUS)],
      this.map[Math.floor(y)]?.[Math.floor(x - PLAYER_RADIUS)],
      this.map[Math.floor(y + PLAYER_RADIUS)]?.[Math.floor(x)],
      this.map[Math.floor(y - PLAYER_RADIUS)]?.[Math.floor(x)],
    ];
    return tiles.every((tile) => tile && tile !== "#");
  }

  shoot() {
    if (!this.running || this.paused) return;
    if (this.player.fireCooldown > 0 || this.projectileCharge < 1) return;

    this.runStats.shotsFired += 1;
    this.player.fireCooldown = this.getFireCooldownMs() / 1000;
    this.projectileCharge = 0;
    this.effects.push(createSparkBurst());
    this.effects.push(createScreenFlash());
    this.audio.play("shoot");

    let target = null;
    let bestDistance = Infinity;

    this.enemies.forEach((enemy) => {
      if (!enemy.alive) return;
      const dx = enemy.x - this.player.x;
      const dy = enemy.y - this.player.y;
      const distance = Math.hypot(dx, dy);
      const angleToEnemy = Math.atan2(dy, dx);
      const diff = smallestAngleDifference(this.player.angle, angleToEnemy);
      const tolerance =
        enemy.renderType === "boss"
          ? enemy.aimTolerance
          : enemy.aimTolerance + (this.selectedUpgrades.includes("wide-burst") ? 0.045 : 0);
      if (Math.abs(diff) > tolerance) return;
      if (!this.hasLineOfSight(enemy.x, enemy.y)) return;
      if (distance < bestDistance) {
        target = enemy;
        bestDistance = distance;
      }
    });

    if (!target) return;

    const damage = target.renderType === "boss" ? 22 : 26;
    target.health -= damage;
    target.hitTimer = 0.12;
    this.runStats.hitsLanded += 1;
    this.renderer.addShake(0.22);
    this.audio.play("hit");
    this.effects.push({
      type: "damagePip",
      x: target.x,
      y: target.y,
      text: `-${damage}`,
      color: target.renderType === "boss" ? "#ffe59e" : "#fff2cf",
      alpha: 1,
      ttl: 0.55,
      offsetY: 0,
    });

    this.updateBossPhase(target);

    if (target.health <= 0) {
      target.alive = false;
      this.stageKillCount += 1;
      this.runStats.wolvesDefeated += 1;
      this.runStats.score += target.score;
      this.renderer.addShake(target.renderType === "boss" ? 0.65 : 0.38);
      this.effects.push(createSparkBurst(1.2, target.renderType === "boss" ? "warm" : "gold"));
      this.showEvent(target.renderType === "boss" ? "Boss Down" : "Wolf Defeated", 1.2);
    }
  }

  updateBossPhase(enemy) {
    if (!enemy || enemy.renderType !== "boss" || !enemy.alive) return;
    const healthRatio = enemy.health / enemy.maxHealth;
    if (enemy.phase === 1 && healthRatio <= 0.45) {
      enemy.phase = 2;
      enemy.behaviorState.specialCooldown = 2.5;
      this.showEvent("Boss Enraged");
      this.audio.play("bossEnrage");
      this.effects.push(createScreenFlash(0.12, 0.12, "255, 196, 150"));
    } else if (enemy.phase === 2 && healthRatio <= 0.2) {
      enemy.phase = 3;
      enemy.behaviorState.specialCooldown = 2;
      enemy.behaviorState.chargeCooldown = 2.3;
      this.showEvent("Boss Frenzy");
      this.audio.play("bossEnrage");
      if (!enemy.behaviorState.spawnedAdds) {
        enemy.behaviorState.spawnedAdds = true;
        this.spawnBossAdds(enemy);
      }
    }
  }

  spawnBossAdds(boss) {
    const offsets = [
      { x: -1.4, y: -1.2 },
      { x: 1.4, y: 1.2 },
    ];
    offsets.forEach((offset, index) => {
      const spawn = this.findNearestOpenTile(boss.x + offset.x, boss.y + offset.y) || { x: boss.x, y: boss.y };
      this.enemies.push(
        this.createEnemy(
          {
            archetype: "wolf_fast",
            x: spawn.x,
            y: spawn.y,
            speedMultiplier: 1.08,
          },
          `boss-add-${index}-${Math.round(performance.now())}`,
          this.buildReachableTiles(this.map, this.findSpawn(this.map)),
        ),
      );
    });
  }

  findNearestOpenTile(x, y) {
    for (let radius = 0; radius < 4; radius += 1) {
      for (let dx = -radius; dx <= radius; dx += 1) {
        for (let dy = -radius; dy <= radius; dy += 1) {
          const candidateX = Math.floor(x + dx) + 0.5;
          const candidateY = Math.floor(y + dy) + 0.5;
          const tile = this.map[Math.floor(candidateY)]?.[Math.floor(candidateX)];
          if (tile && tile !== "#" && tile !== "E") return { x: candidateX, y: candidateY };
        }
      }
    }
    return null;
  }

  hasLineOfSight(x, y) {
    const dx = x - this.player.x;
    const dy = y - this.player.y;
    const distance = Math.hypot(dx, dy);
    const stepCount = Math.ceil(distance / 0.08);
    for (let i = 1; i < stepCount; i += 1) {
      const px = this.player.x + (dx * i) / stepCount;
      const py = this.player.y + (dy * i) / stepCount;
      const tile = this.map[Math.floor(py)]?.[Math.floor(px)];
      if (!tile || tile === "#") return false;
    }
    return true;
  }

  updateEnemies(delta) {
    this.enemies.forEach((enemy) => {
      if (!enemy.alive) return;

      enemy.hitTimer = Math.max(0, enemy.hitTimer - delta);
      enemy.attackCooldown = Math.max(0, enemy.attackCooldown - delta);
      enemy.behaviorState.cooldown = Math.max(0, enemy.behaviorState.cooldown - delta);
      enemy.behaviorState.specialCooldown = Math.max(0, enemy.behaviorState.specialCooldown - delta);
      enemy.behaviorState.chargeCooldown = Math.max(0, enemy.behaviorState.chargeCooldown - delta);

      const dx = this.player.x - enemy.x;
      const dy = this.player.y - enemy.y;
      const distance = Math.hypot(dx, dy);
      const direction = Math.atan2(dy, dx);
      const lineOfSight = this.enemyHasLineOfSight(enemy, this.player.x, this.player.y);

      if (enemy.renderType === "boss") {
        this.updateBossEnemy(enemy, delta, distance, direction, lineOfSight);
      } else if (enemy.archetype === "wolf_pouncer") {
        this.updatePouncerEnemy(enemy, delta, distance, direction, lineOfSight);
      } else {
        this.updateStandardEnemy(enemy, delta, distance, direction, lineOfSight);
      }

      const canContactAttack =
        enemy.behaviorState.mode !== "charging" &&
        enemy.behaviorState.mode !== "windup" &&
        enemy.behaviorState.mode !== "recover" &&
        enemy.behaviorState.mode !== "shockwave-windup" &&
        enemy.behaviorState.mode !== "charge-windup";
      if (distance <= enemy.attackRange && enemy.attackCooldown <= 0 && lineOfSight && canContactAttack) {
        this.damagePlayer(enemy.damage);
        enemy.attackCooldown =
          (enemy.renderType === "boss" ? (enemy.phase >= 2 ? 0.78 : 1.1) : 1.05) * enemy.cooldownMultiplier;
      }
    });

    const boss = this.enemies.find((enemy) => enemy.renderType === "boss" && enemy.alive);
    this.ui.showBoss(boss);
  }

  updateStandardEnemy(enemy, delta, distance, direction, lineOfSight) {
    if (lineOfSight && distance > enemy.moveStop) {
      const nextX = enemy.x + Math.cos(direction) * enemy.speed * delta;
      const nextY = enemy.y + Math.sin(direction) * enemy.speed * delta;
      if (this.canEnemyOccupy(nextX, enemy.y, enemy)) enemy.x = nextX;
      if (this.canEnemyOccupy(enemy.x, nextY, enemy)) enemy.y = nextY;
    }
  }

  updatePouncerEnemy(enemy, delta, distance, direction, lineOfSight) {
    if (enemy.behaviorState.mode === "windup") {
      enemy.behaviorState.timer -= delta;
      if (enemy.behaviorState.timer <= 0) {
        enemy.behaviorState.mode = "pouncing";
        enemy.behaviorState.timer = 0.26;
        enemy.behaviorState.vx = Math.cos(direction);
        enemy.behaviorState.vy = Math.sin(direction);
      }
      return;
    }

    if (enemy.behaviorState.mode === "pouncing") {
      enemy.behaviorState.timer -= delta;
      const pounceSpeed = enemy.speed * 2.5;
      const nextX = enemy.x + enemy.behaviorState.vx * pounceSpeed * delta;
      const nextY = enemy.y + enemy.behaviorState.vy * pounceSpeed * delta;
      if (this.canEnemyOccupy(nextX, enemy.y, enemy)) enemy.x = nextX;
      if (this.canEnemyOccupy(enemy.x, nextY, enemy)) enemy.y = nextY;
      if (enemy.behaviorState.timer <= 0) {
        enemy.behaviorState.mode = "recover";
        enemy.behaviorState.timer = 0.45;
      }
      return;
    }

    if (enemy.behaviorState.mode === "recover") {
      enemy.behaviorState.timer -= delta;
      if (enemy.behaviorState.timer <= 0) enemy.behaviorState.mode = "idle";
      return;
    }

    if (lineOfSight && distance > enemy.moveStop) {
      const nextX = enemy.x + Math.cos(direction) * enemy.speed * delta;
      const nextY = enemy.y + Math.sin(direction) * enemy.speed * delta;
      if (this.canEnemyOccupy(nextX, enemy.y, enemy)) enemy.x = nextX;
      if (this.canEnemyOccupy(enemy.x, nextY, enemy)) enemy.y = nextY;
    }

    if (lineOfSight && distance < 3.2 && enemy.behaviorState.cooldown <= 0) {
      enemy.behaviorState.mode = "windup";
      enemy.behaviorState.timer = 0.32;
      enemy.behaviorState.cooldown = 3;
    }
  }

  updateBossEnemy(enemy, delta, distance, direction, lineOfSight) {
    this.updateBossPhase(enemy);

    if (enemy.behaviorState.mode === "shockwave-windup") {
      enemy.behaviorState.timer -= delta;
      if (enemy.behaviorState.timer <= 0) {
        enemy.behaviorState.mode = "idle";
        this.spawnShockwave(enemy);
      }
      return;
    }

    if (enemy.behaviorState.mode === "charge-windup") {
      enemy.behaviorState.timer -= delta;
      if (enemy.behaviorState.timer <= 0) {
        enemy.behaviorState.mode = "charging";
        enemy.behaviorState.timer = 0.46;
        enemy.behaviorState.vx = Math.cos(direction);
        enemy.behaviorState.vy = Math.sin(direction);
      }
      return;
    }

    if (enemy.behaviorState.mode === "charging") {
      enemy.behaviorState.timer -= delta;
      const speedMultiplier = enemy.phase === 3 ? 3.8 : 3;
      const nextX = enemy.x + enemy.behaviorState.vx * enemy.speed * speedMultiplier * delta;
      const nextY = enemy.y + enemy.behaviorState.vy * enemy.speed * speedMultiplier * delta;
      if (this.canEnemyOccupy(nextX, enemy.y, enemy)) enemy.x = nextX;
      if (this.canEnemyOccupy(enemy.x, nextY, enemy)) enemy.y = nextY;
      if (Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y) < 1.1) {
        this.damagePlayer(enemy.damage + 6);
        enemy.attackCooldown = 1.15;
        enemy.behaviorState.mode = "recover";
        enemy.behaviorState.timer = 0.42;
      } else if (enemy.behaviorState.timer <= 0) {
        enemy.behaviorState.mode = "recover";
        enemy.behaviorState.timer = 0.35;
      }
      return;
    }

    if (enemy.behaviorState.mode === "recover") {
      enemy.behaviorState.timer -= delta;
      if (enemy.behaviorState.timer <= 0) enemy.behaviorState.mode = "idle";
      return;
    }

    if (enemy.phase >= 2 && enemy.behaviorState.specialCooldown <= 0) {
      enemy.behaviorState.specialCooldown = enemy.phase === 3 ? 4.4 : 5.4;
      enemy.behaviorState.mode = "shockwave-windup";
      enemy.behaviorState.timer = enemy.phase === 3 ? 0.65 : 0.72;
      return;
    }

    if (enemy.phase === 3 && enemy.behaviorState.chargeCooldown <= 0 && distance > 2.6) {
      enemy.behaviorState.chargeCooldown = 6.8;
      enemy.behaviorState.mode = "charge-windup";
      enemy.behaviorState.timer = 0.5;
      return;
    }

    if (lineOfSight && distance > enemy.moveStop) {
      const speedMultiplier = enemy.phase === 1 ? 1 : enemy.phase === 2 ? 1.28 : 1.45;
      const nextX = enemy.x + Math.cos(direction) * enemy.speed * speedMultiplier * delta;
      const nextY = enemy.y + Math.sin(direction) * enemy.speed * speedMultiplier * delta;
      if (this.canEnemyOccupy(nextX, enemy.y, enemy)) enemy.x = nextX;
      if (this.canEnemyOccupy(enemy.x, nextY, enemy)) enemy.y = nextY;
    }
  }

  spawnShockwave(enemy) {
    this.shockwaves.push({
      x: enemy.x,
      y: enemy.y,
      radius: 0.2,
      alpha: 1,
      ttl: 0.7,
      maxTtl: 0.7,
      hitPlayer: false,
      distanceFromPlayer: Math.hypot(enemy.x - this.player.x, enemy.y - this.player.y),
    });
    this.effects.push(createScreenFlash(0.06, 0.08, "255, 224, 168"));
    this.audio.play("bossEnrage");
  }

  enemyHasLineOfSight(enemy, x, y) {
    const dx = x - enemy.x;
    const dy = y - enemy.y;
    const distance = Math.hypot(dx, dy);
    const stepCount = Math.ceil(distance / 0.1);
    for (let i = 1; i < stepCount; i += 1) {
      const px = enemy.x + (dx * i) / stepCount;
      const py = enemy.y + (dy * i) / stepCount;
      const tile = this.map[Math.floor(py)]?.[Math.floor(px)];
      if (!tile || tile === "#") return false;
    }
    return true;
  }

  canEnemyOccupy(x, y, enemy) {
    const tile = this.map[Math.floor(y)]?.[Math.floor(x)];
    if (!tile || tile === "#" || tile === "E") return false;
    const collision = this.enemies.some(
      (other) => other.id !== enemy.id && other.alive && Math.hypot(other.x - x, other.y - y) < other.radius + enemy.radius,
    );
    if (collision) return false;
    return Math.hypot(this.player.x - x, this.player.y - y) > enemy.radius + PLAYER_RADIUS;
  }

  damagePlayer(amount) {
    const nextHealth = Math.max(0, this.player.health - amount);
    const appliedDamage = Math.max(0, this.player.health - nextHealth);
    this.runStats.damageTaken += appliedDamage;
    if (nextHealth <= 0 && this.selectedUpgrades.includes("guardian-charm") && !this.guardianUsed) {
      this.guardianUsed = true;
      this.player.health = Math.max(1, this.player.maxHealth * 0.4);
      this.showEvent("Guardian Charm");
      this.effects.push(createScreenFlash(0.16, 0.16, "255, 237, 170"));
      this.audio.play("stageClear");
      return;
    }

    this.player.health = nextHealth;
    this.hurtFlash = 1;
    this.audio.play("hurt");
    if (this.player.health <= 0) this.finishGame(false);
  }

  updatePickups() {
    this.pickups.forEach((pickup) => {
      if (pickup.collected) return;
      const distance = Math.hypot(this.player.x - pickup.x, this.player.y - pickup.y);
      if (distance < 0.6) {
        pickup.collected = true;
        this.runStats.pickupsCollected += 1;
        this.runStats.score += SCORE_PICKUP;
        this.audio.play("pickup");
        if (pickup.type === "health") {
          this.player.health = Math.min(this.player.maxHealth, this.player.health + pickup.amount);
          this.effects.push(createSparkBurst(1, "warm"));
          this.showEvent(`+${pickup.amount} Health`, 1.2);
        } else if (pickup.type === "spark") {
          this.projectileCharge = Math.min(1, this.projectileCharge + pickup.amount);
          this.effects.push(createSparkBurst(1, "cool"));
          this.showEvent("+Spark Charge", 1.2);
        }
      }
    });
  }

  updateShrines(delta) {
    if (!this.lanternShrines.length || this.stageCleared) return;

    let focusedShrine = null;
    this.lanternShrines.forEach((shrine) => {
      if (shrine.active) return;
      const distance = Math.hypot(this.player.x - shrine.x, this.player.y - shrine.y);
      if (distance < 0.85) {
        shrine.charge = clamp(shrine.charge + delta / 1.2, 0, 1);
        focusedShrine = shrine;
        if (shrine.charge >= 1 && !shrine.active) {
          shrine.active = true;
          shrine.charge = 1;
          this.effects.push(createSparkBurst(1.2, "warm"));
          this.audio.play("stageClear");
          this.showEvent("Shrine Lit", 1.3);
        }
      } else if (!shrine.active) {
        shrine.charge = clamp(shrine.charge - delta * 0.4, 0, 1);
      }
    });

    if (focusedShrine && !focusedShrine.active) {
      this.setObjective(`Stand in the lantern glow to relight the shrine. ${Math.ceil(focusedShrine.charge * 100)}% charged.`);
    } else if (this.lanternShrines.some((shrine) => !shrine.active)) {
      this.setObjective("Defeat the wolves and relight both lantern shrines to open the lair gate.");
    }

    this.ui.updateShrines(this.lanternShrines);
  }

  updateEffects(delta) {
    this.effects = this.effects
      .map((effect) => {
        if (effect.type === "sparkBurst") {
          effect.ttl -= delta;
          effect.particles.forEach((particle) => {
            particle.x += particle.vx * delta;
            particle.y += particle.vy * delta;
            particle.alpha = Math.max(0, effect.ttl / effect.maxTtl);
          });
        } else if (effect.type === "screenFlash") {
          effect.ttl -= delta;
          effect.alpha = Math.max(0, effect.ttl * 1.8);
        } else if (effect.type === "damagePip") {
          effect.ttl -= delta;
          effect.alpha = Math.max(0, effect.ttl / 0.55);
          effect.offsetY -= 24 * delta;
        }
        return effect;
      })
      .filter((effect) => effect.ttl > 0);

    this.shockwaves = this.shockwaves
      .map((shockwave) => {
        shockwave.ttl -= delta;
        shockwave.radius += delta * 4.4;
        shockwave.alpha = Math.max(0, shockwave.ttl / shockwave.maxTtl);
        shockwave.distanceFromPlayer = Math.hypot(shockwave.x - this.player.x, shockwave.y - this.player.y);
        if (!shockwave.hitPlayer && shockwave.distanceFromPlayer <= shockwave.radius + 0.15) {
          shockwave.hitPlayer = true;
          this.damagePlayer(6 + this.difficulty.enemyDamage * 0.28);
          this.showEvent("Shockwave Hit", 1);
        }
        return shockwave;
      })
      .filter((shockwave) => shockwave.ttl > 0);
  }

  updateStageEncounters() {
    this.stageEncounters.forEach((encounter, encounterIndex) => {
      if (encounter.triggered) return;
      const shrinesLit = this.lanternShrines.filter((shrine) => shrine.active).length;
      const killsReady = encounter.triggerKills != null && this.stageKillCount >= encounter.triggerKills;
      const shrinesReady = encounter.triggerShrinesLit != null && shrinesLit >= encounter.triggerShrinesLit;
      if (!killsReady && !shrinesReady) return;

      encounter.triggered = true;
      const reachableTiles = this.buildReachableTiles(this.map, this.findSpawn(this.map));
      encounter.enemies.forEach((enemy, enemyOffset) => {
        this.enemies.push(
          this.createEnemy(
            enemy,
            `${encounter.id}-${encounterIndex}-${enemyOffset}-${Math.round(performance.now())}`,
            reachableTiles,
          ),
        );
      });
      this.showEvent(encounter.message || "Ambush", 1.5);
      this.audio.play("bossEnrage");
      this.effects.push(createScreenFlash(0.08, 0.12, "255, 224, 168"));
      if (encounter.objective) this.setObjective(encounter.objective);
    });
  }

  advanceStageFlow() {
    if (this.stageIndex >= STAGES.length - 1) return;
    const shouldOfferUpgrade = this.availableUpgradePool.length > 0 && this.stageIndex <= 1;
    if (shouldOfferUpgrade) {
      this.pendingUpgradeStage = this.stageIndex;
      this.pendingUpgradeChoices = shuffle(
        UPGRADE_POOL.filter((upgrade) => this.availableUpgradePool.includes(upgrade.id)),
      ).slice(0, Math.min(3, this.availableUpgradePool.length));
      this.ui.hideTransition();
      this.ui.showUpgradeChoices(this.pendingUpgradeChoices);
      return;
    }
    this.continueToNextStage();
  }

  chooseUpgrade(id) {
    if (!this.pendingUpgradeChoices.some((upgrade) => upgrade.id === id)) return;
    if (!this.selectedUpgrades.includes(id)) this.selectedUpgrades.push(id);
    this.availableUpgradePool = this.availableUpgradePool.filter((upgradeId) => upgradeId !== id);

    if (id === "heartier-hood") {
      this.player.maxHealth = this.getPlayerMaxHealth();
      this.player.health = Math.min(this.player.maxHealth, this.player.health + 25);
      this.runStats.healthBudget += 25;
    }

    this.pendingUpgradeChoices = [];
    this.ui.updateUpgrades(this.selectedUpgrades.map((upgradeId) => UPGRADE_LABELS[upgradeId] || upgradeId));
    this.ui.hideUpgradeChoices();
    this.continueToNextStage();
  }

  getProgressSnapshot(selectedDifficulty = this.difficultyKey) {
    const fallback = createDefaultProgress().difficulties.easy;
    const difficultyData = this.progress.difficulties[selectedDifficulty] || fallback;
    return {
      bestScore: this.progress.bestScore,
      bestTime: difficultyData.bestTime,
      clearCount: this.progress.clearedDifficulties.length,
      clearedDifficulties: [...this.progress.clearedDifficulties],
      difficulties: this.progress.difficulties,
      selectedDifficulty,
    };
  }

  refreshProgressUi(selectedDifficulty = this.difficultyKey) {
    this.ui.updateProgress(this.getProgressSnapshot(selectedDifficulty), selectedDifficulty);
  }

  continueToNextStage() {
    if (this.stageIndex < STAGES.length - 1) {
      this.paused = false;
      this.ui.hideTransition();
      this.ui.hideUpgradeChoices();
      this.loadStage(this.stageIndex + 1);
    }
  }

  togglePause() {
    if (!this.running) return;
    if (this.pendingTransition || this.pendingUpgradeChoices.length > 0) return;
    this.paused = !this.paused;
    this.ui.togglePause(this.paused);
  }

  calculateTimeBonus() {
    return Math.max(0, 1400 - Math.floor(this.runStats.elapsedTime * 7));
  }

  calculateAccuracyBonus() {
    const accuracy = this.getAccuracy();
    if (this.runStats.shotsFired < 8) return 0;
    if (accuracy >= 75) return 300;
    if (accuracy >= 60) return 180;
    if (accuracy >= 45) return 80;
    return 0;
  }

  calculateDifficultyBonus() {
    if (this.difficultyKey === "nightmare") return 500;
    if (this.difficultyKey === "normal") return 250;
    return 0;
  }

  getMedal(victory) {
    if (!victory) return "None";
    const accuracyMet = this.getAccuracy() >= 58;
    const damageMet = this.runStats.damageTaken < this.runStats.healthBudget * 0.38;
    const reviveMet = !this.guardianUsed;
    const paceMet = this.runStats.elapsedTime <= 330;
    const passed = [accuracyMet, damageMet, reviveMet, paceMet].filter(Boolean).length;
    if (reviveMet && passed >= 3) return "Gold";
    if (passed >= 2) return "Silver";
    return "Bronze";
  }

  finishGame(victory) {
    this.running = false;
    this.paused = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    this.victory = victory;
    this.keys.clear();
    this.touchState.clear();
    this.setTouchMove(0, 0);
    this.ui.updateEvent("");
    if (document.pointerLockElement) document.exitPointerLock();
    const timeBonus = victory ? this.calculateTimeBonus() : 0;
    const accuracyBonus = victory ? this.calculateAccuracyBonus() : 0;
    const difficultyBonus = victory ? this.calculateDifficultyBonus() : 0;
    const bonusTotal = timeBonus + accuracyBonus + difficultyBonus;
    const finalScore = this.runStats.score + bonusTotal;
    const summary = {
      time: formatTime(this.runStats.elapsedTime),
      finalScore,
      timeBonus,
      accuracyBonus,
      difficultyBonus,
      bonusTotal,
      baseScore: this.runStats.score,
      upgrades: this.selectedUpgrades.map((id) => UPGRADE_LABELS[id] || id),
      difficulty: this.difficulty.label,
      shotsFired: this.runStats.shotsFired,
      accuracy: `${Math.round(this.getAccuracy())}%`,
      damageTaken: Math.round(this.runStats.damageTaken),
      pickupsCollected: this.runStats.pickupsCollected,
      wolvesDefeated: this.runStats.wolvesDefeated,
      medal: this.getMedal(victory),
    };
    summary.records = this.updateProgressRecords(victory, summary);
    this.audio.setScene(victory ? "victory" : "defeat");
    this.refreshProgressUi(this.difficultyKey);
    this.ui.showEnding(victory, this.stageIndex, this.difficulty, summary);
  }

  showTitle() {
    this.running = false;
    this.paused = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    this.keys.clear();
    this.touchState.clear();
    this.setTouchMove(0, 0);
    this.eventBanner = { text: "", ttl: 0 };
    this.ui.updateEvent("");
    if (document.pointerLockElement) document.exitPointerLock();
    this.audio.setScene("title");
    this.refreshProgressUi(this.difficultyKey);
    this.ui.showTitle();
  }

  setTouchAction(action, active) {
    if (active) this.touchState.add(action);
    else this.touchState.delete(action);
  }

  setTouchMove(x, y) {
    this.touchMove.x = x;
    this.touchMove.y = y;
  }

  updateProgressRecords(victory, summary) {
    const records = [];
    this.progress.totalRuns += 1;

    if (summary.finalScore > this.progress.bestScore) {
      this.progress.bestScore = summary.finalScore;
      records.push({ type: "new-record", text: "New Best Score", value: formatScore(summary.finalScore) });
    }

    const difficultyProgress = this.progress.difficulties[this.difficultyKey];
    if (summary.finalScore > difficultyProgress.bestScore) {
      difficultyProgress.bestScore = summary.finalScore;
      records.push({ type: "new-record", text: `${this.difficulty.label} Score`, value: formatScore(summary.finalScore) });
    }

    if (victory) {
      this.progress.totalVictories += 1;
      difficultyProgress.clears += 1;
      if (!this.progress.clearedDifficulties.includes(this.difficultyKey)) {
        this.progress.clearedDifficulties.push(this.difficultyKey);
        records.push({ type: "cleared", text: `${this.difficulty.label} Cleared`, value: "Tracked" });
      }
      if (difficultyProgress.bestTime == null || this.runStats.elapsedTime < difficultyProgress.bestTime) {
        difficultyProgress.bestTime = this.runStats.elapsedTime;
        records.push({
          type: "new-record",
          text: `${this.difficulty.label} Best Time`,
          value: formatTime(this.runStats.elapsedTime),
        });
      }
      if (MEDAL_RANK[summary.medal] > MEDAL_RANK[difficultyProgress.bestMedal]) {
        difficultyProgress.bestMedal = summary.medal;
        records.push({ type: "new-record", text: `${this.difficulty.label} Medal`, value: summary.medal });
      }
    }

    saveProgress(this.progress);
    return records;
  }
}

function castRay(map, startX, startY, angle, stage, visualStyle) {
  const step = 0.02;
  let distance = 0;
  let hit = false;
  let x = startX;
  let y = startY;

  while (!hit && distance < 20) {
    x = startX + Math.cos(angle) * distance;
    y = startY + Math.sin(angle) * distance;
    const tile = map[Math.floor(y)]?.[Math.floor(x)];
    if (!tile || tile === "#") hit = true;
    distance += step;
  }

  return pickWallStyle(stage, distance, x, y, visualStyle);
}

function pickWallStyle(stage, distance, x, y, visualStyle) {
  const vertical = Math.abs(x - Math.round(x)) < Math.abs(y - Math.round(y));
  const palette = visualStyle.walls[stage.key];
  return {
    distance,
    barkColor: vertical ? palette.barkA : palette.barkB,
    trunkColor: vertical ? palette.trunkA : palette.trunkB,
    leafColor: vertical ? palette.leafA : palette.leafB,
  };
}

function drawForestWallSlice(ctx, stage, ray, x, y, width, height, shade, visualStyle) {
  const canopyHeight = stage.key === "boss-lair" ? height * 0.18 : height * 0.28;
  const trunkHeight = height - canopyHeight;
  ctx.fillStyle = shadeColor(ray.trunkColor, shade);
  ctx.fillRect(x, y + canopyHeight * 0.2, width, trunkHeight);
  ctx.fillStyle = shadeColor(ray.barkColor, shade * 0.92);
  ctx.fillRect(x + width * 0.18, y + canopyHeight * 0.22, Math.max(1, width * 0.24), trunkHeight);
  ctx.fillStyle = shadeColor(ray.leafColor, Math.min(1, shade * 1.08));
  ctx.fillRect(x, y, width, canopyHeight);
  ctx.fillStyle = shadeColor(ray.leafColor, Math.min(1, shade * 1.18));
  ctx.fillRect(x, y + canopyHeight * 0.18, width, canopyHeight * 0.18);
  ctx.fillStyle = visualStyle.sparkle;
  ctx.fillRect(x, y + canopyHeight * 0.08, width, Math.max(1, canopyHeight * 0.06));
}

function drawWolfSprite(ctx, sprite, left, top, size, visualStyle) {
  const isBoss = sprite.renderType === "boss";
  const isBrute = sprite.archetype === "wolf_brute";
  const bodyColor = isBoss ? visualStyle.wolf.bossBody : isBrute ? visualStyle.wolf.bruteBody : visualStyle.wolf.body;
  const maneColor = isBoss ? visualStyle.wolf.bossMane : visualStyle.wolf.mane;
  const glow = sprite.hitTimer > 0 ? "rgba(255, 226, 150, 0.45)" : "rgba(0, 0, 0, 0.18)";
  const eyeColor = isBoss ? visualStyle.wolf.bossEye : visualStyle.wolf.eye;

  ctx.save();
  ctx.translate(left, top);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.ellipse(size * 0.5, size * 0.62, size * 0.22, size * 0.09, 0, 0, TAU);
  ctx.fill();
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.ellipse(size * 0.5, size * 0.56, size * (isBrute ? 0.21 : 0.18), size * (isBrute ? 0.27 : 0.23), 0, 0, TAU);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(size * 0.31, size * 0.27);
  ctx.lineTo(size * 0.22, size * 0.12);
  ctx.lineTo(size * 0.4, size * 0.18);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(size * 0.69, size * 0.27);
  ctx.lineTo(size * 0.78, size * 0.12);
  ctx.lineTo(size * 0.6, size * 0.18);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.3, size * 0.18, 0, TAU);
  ctx.fill();
  ctx.fillStyle = maneColor;
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.3, size * 0.1, 0, TAU);
  ctx.fill();
  ctx.fillStyle = eyeColor;
  ctx.beginPath();
  ctx.arc(size * 0.45, size * 0.28, size * 0.014 * (isBoss ? 1.6 : 1.1), 0, TAU);
  ctx.arc(size * 0.55, size * 0.28, size * 0.014 * (isBoss ? 1.6 : 1.1), 0, TAU);
  ctx.fill();
  ctx.fillStyle = "#2c2121";
  ctx.beginPath();
  ctx.arc(size * 0.5, size * 0.335, size * 0.017, 0, TAU);
  ctx.fill();
  ctx.strokeStyle = "#2c2121";
  ctx.lineWidth = Math.max(1, size * 0.012);
  ctx.beginPath();
  ctx.moveTo(size * 0.47, size * 0.36);
  ctx.quadraticCurveTo(size * 0.5, size * 0.38, size * 0.53, size * 0.36);
  ctx.stroke();

  if (isBoss) {
    ctx.fillStyle = "rgba(255, 211, 141, 0.2)";
    ctx.fillRect(size * 0.22, size * 0.03, size * 0.56, size * 0.08);
  }

  ctx.restore();
}

function drawPickupSprite(ctx, sprite, left, top, size, visualStyle) {
  ctx.save();
  ctx.translate(left, top);
  if (sprite.type === "health") {
    ctx.fillStyle = "rgba(255, 236, 201, 0.18)";
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.5, size * 0.3, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#f8f1de";
    ctx.fillRect(size * 0.42, size * 0.24, size * 0.16, size * 0.52);
    ctx.fillRect(size * 0.24, size * 0.42, size * 0.52, size * 0.16);
  } else {
    ctx.fillStyle = visualStyle === VISUAL_STYLES.cartoon ? "rgba(173, 243, 255, 0.3)" : "rgba(173, 243, 255, 0.18)";
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.5, size * 0.3, 0, TAU);
    ctx.fill();
    ctx.fillStyle = "#8de7ff";
    ctx.beginPath();
    ctx.moveTo(size * 0.5, size * 0.15);
    ctx.lineTo(size * 0.62, size * 0.42);
    ctx.lineTo(size * 0.54, size * 0.42);
    ctx.lineTo(size * 0.66, size * 0.84);
    ctx.lineTo(size * 0.38, size * 0.51);
    ctx.lineTo(size * 0.47, size * 0.51);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawForestPropSprite(ctx, sprite, left, top, size, visualStyle) {
  ctx.save();
  ctx.translate(left, top);

  if (sprite.type === "tree") {
    const canopy = size * 0.34;
    ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.86, size * 0.18, size * 0.06, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = visualStyle.prop.trunk;
    ctx.fillRect(size * 0.42, size * 0.42, size * 0.16, size * 0.38);
    ctx.fillStyle = visualStyle.prop.treeLeaf;
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.4, canopy, 0, TAU);
    ctx.arc(size * 0.38, size * 0.5, canopy * 0.72, 0, TAU);
    ctx.arc(size * 0.62, size * 0.5, canopy * 0.72, 0, TAU);
    ctx.fill();
  } else if (sprite.type === "mushroom") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.76, size * 0.14, size * 0.05, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = visualStyle.prop.mushroomStem;
    ctx.fillRect(size * 0.45, size * 0.48, size * 0.1, size * 0.22);
    ctx.fillStyle = visualStyle.prop.mushroomCap;
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.46, size * 0.18, Math.PI, 0);
    ctx.closePath();
    ctx.fill();
  } else if (sprite.type === "gate") {
    ctx.fillStyle = "rgba(255, 209, 129, 0.16)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.66, size * 0.28, size * 0.12, 0, 0, TAU);
    ctx.fill();
    ctx.strokeStyle = visualStyle.minimap.gate;
    ctx.lineWidth = Math.max(2, size * 0.02);
    ctx.beginPath();
    ctx.moveTo(size * 0.3, size * 0.68);
    ctx.lineTo(size * 0.3, size * 0.3);
    ctx.arc(size * 0.5, size * 0.3, size * 0.2, Math.PI, 0);
    ctx.lineTo(size * 0.7, size * 0.68);
    ctx.stroke();
    ctx.fillStyle = "rgba(255, 227, 160, 0.22)";
    ctx.fillRect(size * 0.34, size * 0.3, size * 0.32, size * 0.38);
  } else if (sprite.type === "shrine") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.84, size * 0.2, size * 0.08, 0, 0, TAU);
    ctx.fill();
    ctx.fillStyle = visualStyle.prop.shrineStone;
    ctx.fillRect(size * 0.34, size * 0.36, size * 0.32, size * 0.34);
    ctx.fillRect(size * 0.42, size * 0.2, size * 0.16, size * 0.18);
    if (sprite.active) {
      ctx.fillStyle = visualStyle.prop.shrineGlow;
      ctx.beginPath();
      ctx.arc(size * 0.5, size * 0.22, size * 0.12, 0, TAU);
      ctx.fill();
    } else {
      ctx.strokeStyle = "rgba(255, 228, 170, 0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(size * 0.5, size * 0.22, size * 0.1, 0, TAU);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function projectWorldToScreen(x, y, game, width, height) {
  const dx = x - game.player.x;
  const dy = y - game.player.y;
  const distance = Math.hypot(dx, dy);
  let angle = Math.atan2(dy, dx) - game.player.angle;
  while (angle < -Math.PI) angle += TAU;
  while (angle > Math.PI) angle -= TAU;
  if (Math.abs(angle) > game.fov * 0.7 || distance < 0.2) return null;
  return {
    x: (0.5 + angle / game.fov) * width,
    y: height / 2 - (height / Math.max(distance, 0.2)) * 0.08,
  };
}

function createUiBindings() {
  const titleScreen = document.getElementById("titleScreen");
  const hud = document.getElementById("hud");
  const transitionScreen = document.getElementById("transitionScreen");
  const upgradeScreen = document.getElementById("upgradeScreen");
  const pauseScreen = document.getElementById("pauseScreen");
  const gameOverScreen = document.getElementById("gameOverScreen");
  const touchControls = document.getElementById("touchControls");
  const bossHud = document.getElementById("bossHud");
  const victoryScene = document.getElementById("victoryScene");
  const eventBanner = document.getElementById("eventBanner");
  const shrineCard = document.getElementById("shrineCard");
  const upgradeHudCard = document.getElementById("upgradeHudCard");
  const upgradeHudList = document.getElementById("upgradeHudList");
  const upgradeChoices = document.getElementById("upgradeChoices");
  const summaryGrid = document.getElementById("summaryGrid");
  const upgradeSummary = document.getElementById("upgradeSummary");
  const bonusSummary = document.getElementById("bonusSummary");
  const recordSummary = document.getElementById("recordSummary");
  const difficultyTracks = document.getElementById("difficultyTracks");

  return {
    onUpgradeSelect: null,

    showTitle() {
      titleScreen.classList.remove("hidden");
      titleScreen.classList.add("active");
      hud.classList.add("hidden");
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
      upgradeScreen.classList.add("hidden");
      upgradeScreen.classList.remove("active");
      pauseScreen.classList.add("hidden");
      pauseScreen.classList.remove("active");
      gameOverScreen.classList.add("hidden");
      gameOverScreen.classList.remove("active");
      victoryScene.classList.add("hidden");
      document.getElementById("storyModal").classList.add("hidden");
      document.getElementById("storyModal").classList.remove("active");
      this.updateTouchVisibility(false);
      this.updateUpgrades([]);
      document.getElementById("startButtonHero").disabled = false;
      document.getElementById("startButtonHero").textContent = "Start The Rescue";
    },

    showGame() {
      titleScreen.classList.remove("active");
      titleScreen.classList.add("hidden");
      hud.classList.remove("hidden");
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
      upgradeScreen.classList.add("hidden");
      upgradeScreen.classList.remove("active");
      pauseScreen.classList.add("hidden");
      pauseScreen.classList.remove("active");
      gameOverScreen.classList.add("hidden");
      gameOverScreen.classList.remove("active");
      victoryScene.classList.add("hidden");
      document.getElementById("storyModal").classList.add("hidden");
      document.getElementById("storyModal").classList.remove("active");
      this.updateTouchVisibility(true);
    },

    updateStage(stage, difficulty) {
      document.getElementById("stageName").textContent = stage.title;
      document.getElementById("difficultyName").textContent = difficulty.label;
    },

    updateObjective(text) {
      document.getElementById("objectiveText").textContent = text;
    },

    updateEvent(text) {
      eventBanner.textContent = text;
      eventBanner.classList.toggle("hidden", !text);
    },

    updateShrines(shrines) {
      const total = shrines.length;
      const active = shrines.filter((shrine) => shrine.active).length;
      shrineCard.classList.toggle("hidden", total === 0);
      if (!total) return;
      const focused = shrines.find((shrine) => !shrine.active && shrine.charge > 0);
      const progress = focused ? focused.charge : active / total;
      document.getElementById("shrineFill").style.transform = `scaleX(${progress})`;
      document.getElementById("shrineText").textContent = `${active} / ${total} Lit`;
    },

    updateUpgrades(upgrades) {
      upgradeHudList.innerHTML = "";
      upgradeHudCard.classList.toggle("hidden", upgrades.length === 0);
      upgrades.forEach((upgrade) => {
        const chip = document.createElement("div");
        chip.className = "upgrade-hud-chip";
        chip.textContent = upgrade;
        upgradeHudList.appendChild(chip);
      });
    },

    updateProgress(progress, selectedDifficulty) {
      document.getElementById("bestScoreText").textContent = formatScore(progress.bestScore);
      document.getElementById("bestTimeText").textContent = progress.bestTime == null ? "--:--" : formatTime(progress.bestTime);
      document.getElementById("clearCountText").textContent = `${progress.clearCount} / ${Object.keys(progress.difficulties).length}`;
      difficultyTracks.innerHTML = "";
      Object.entries(DIFFICULTIES).forEach(([key, difficulty]) => {
        const record = progress.difficulties[key];
        const row = document.createElement("div");
        row.className = "difficulty-track";
        row.innerHTML = `
          <div class="difficulty-track-name">
            <strong>${difficulty.label}</strong>
            <span>${record.bestTime == null ? "No clear yet" : `Best ${formatTime(record.bestTime)}`}</span>
          </div>
          <div class="track-badges">
            <div class="track-badge ${record.clears > 0 ? "cleared" : ""}">${record.clears > 0 ? `${record.clears} clears` : "Uncleared"}</div>
            <div class="track-badge">Score ${formatScore(record.bestScore)}</div>
          </div>
          <div class="track-medal ${record.bestMedal.toLowerCase()}">${record.bestMedal}</div>
        `;
        if (key === selectedDifficulty) row.style.borderColor = "rgba(255, 211, 141, 0.35)";
        difficultyTracks.appendChild(row);
      });
    },

    updateHud(gameState) {
      document.getElementById("healthText").textContent = `${Math.ceil(gameState.player.health)} / ${gameState.player.maxHealth}`;
      document.getElementById("healthFill").style.transform = `scaleX(${gameState.player.health / gameState.player.maxHealth})`;
      document.getElementById("cooldownFill").style.transform = `scaleX(${gameState.projectileCharge})`;
      document.getElementById("cooldownText").textContent = gameState.projectileCharge >= 1 ? "Ready" : "Recharging";
      document.getElementById("wolfCount").textContent = `${gameState.enemies.filter((enemy) => enemy.alive).length}`;
      document.getElementById("scoreText").textContent = formatScore(gameState.runStats.score);
      document.getElementById("timerText").textContent = formatTime(gameState.runStats.elapsedTime);
    },

    showBoss(boss) {
      if (!boss || !boss.alive) {
        bossHud.classList.add("hidden");
        return;
      }
      bossHud.classList.remove("hidden");
      document.getElementById("bossBarFill").style.transform = `scaleX(${boss.health / boss.maxHealth})`;
    },

    showTransition(title, body) {
      document.getElementById("transitionTitle").textContent = title;
      document.getElementById("transitionBody").textContent = body;
      transitionScreen.classList.remove("hidden");
      transitionScreen.classList.add("active");
    },

    hideTransition() {
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
    },

    showUpgradeChoices(choices) {
      upgradeChoices.innerHTML = "";
      choices.forEach((choice) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "upgrade-option";
        button.innerHTML = `<strong>${choice.title}</strong><span>${choice.description}</span>`;
        button.addEventListener("click", () => {
          if (this.onUpgradeSelect) this.onUpgradeSelect(choice.id);
        });
        upgradeChoices.appendChild(button);
      });
      upgradeScreen.classList.remove("hidden");
      upgradeScreen.classList.add("active");
    },

    hideUpgradeChoices() {
      upgradeScreen.classList.add("hidden");
      upgradeScreen.classList.remove("active");
    },

    togglePause(paused) {
      pauseScreen.classList.toggle("active", paused);
      pauseScreen.classList.toggle("hidden", !paused);
    },

    showEnding(victory, stageIndex, difficulty, summary) {
      hud.classList.add("hidden");
      pauseScreen.classList.add("hidden");
      pauseScreen.classList.remove("active");
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
      upgradeScreen.classList.add("hidden");
      upgradeScreen.classList.remove("active");
      gameOverScreen.classList.remove("hidden");
      gameOverScreen.classList.add("active");
      this.updateTouchVisibility(false);
      const eyebrow = document.getElementById("endEyebrow");
      const title = document.getElementById("endTitle");
      const body = document.getElementById("endBody");
      document.getElementById("medalText").textContent = summary.medal;
      document.getElementById("medalText").parentElement.className = `summary-medal ${summary.medal.toLowerCase()}`;
      bonusSummary.innerHTML = "";
      [
        ["Time", summary.timeBonus],
        ["Accuracy", summary.accuracyBonus],
        ["Difficulty", summary.difficultyBonus],
      ].forEach(([label, value]) => {
        const chip = document.createElement("div");
        chip.className = "bonus-chip";
        chip.innerHTML = `${label} <strong>+${formatScore(value)}</strong>`;
        bonusSummary.appendChild(chip);
      });
      upgradeSummary.innerHTML = "";
      upgradeSummary.classList.toggle("hidden", summary.upgrades.length === 0);
      summary.upgrades.forEach((upgrade) => {
        const chip = document.createElement("div");
        chip.className = "upgrade-chip";
        chip.textContent = upgrade;
        upgradeSummary.appendChild(chip);
      });
      recordSummary.innerHTML = "";
      recordSummary.classList.toggle("hidden", !summary.records || summary.records.length === 0);
      (summary.records || []).forEach((record) => {
        const chip = document.createElement("div");
        chip.className = `record-chip ${record.type || ""}`;
        chip.innerHTML = `${record.text} <strong>${record.value}</strong>`;
        recordSummary.appendChild(chip);
      });
      summaryGrid.innerHTML = "";
      [
        ["Score", formatScore(summary.finalScore)],
        ["Bonuses", formatScore(summary.bonusTotal)],
        ["Time", summary.time],
        ["Difficulty", summary.difficulty],
        ["Accuracy", summary.accuracy],
        ["Shots", `${summary.shotsFired}`],
        ["Damage Taken", `${summary.damageTaken}`],
        ["Base Score", formatScore(summary.baseScore)],
        ["Wolves", `${summary.wolvesDefeated}`],
        ["Pickups", `${summary.pickupsCollected}`],
      ].forEach(([label, value]) => {
        const card = document.createElement("div");
        card.className = "summary-stat";
        card.innerHTML = `<span class="label">${label}</span><strong>${value}</strong>`;
        summaryGrid.appendChild(card);
      });

      if (victory) {
        victoryScene.classList.remove("hidden");
        eyebrow.textContent = "Granny is safe";
        title.textContent = "The Big Bad Wolf is defeated";
        body.textContent = `Little Red clears all three stages on ${difficulty.label}. Bonuses: ${formatScore(summary.bonusTotal)} total from time, accuracy, and difficulty.`;
      } else {
        victoryScene.classList.add("hidden");
        eyebrow.textContent = "The wolves push back";
        title.textContent = "Try the rescue again";
        body.textContent = `You made it to ${stageIndex + 1} stage${stageIndex === 0 ? "" : "s"}, but the wolf pack was too strong this time.`;
      }
    },

    updateTouchVisibility(inGame = !titleScreen.classList.contains("active")) {
      const shouldShow = inGame && window.matchMedia("(max-width: 720px)").matches;
      touchControls.classList.toggle("hidden", !shouldShow);
    },
  };
}

const canvas = document.getElementById("gameCanvas");
const renderer = new Renderer(canvas);
const ui = createUiBindings();
const game = new Game(renderer, ui);
ui.onUpgradeSelect = (id) => game.chooseUpgrade(id);

const savedSettings = loadSettings();
let selectedDifficulty = DIFFICULTIES[savedSettings.difficulty] ? savedSettings.difficulty : "easy";
let selectedStyle = VISUAL_STYLES[savedSettings.style] ? savedSettings.style : "storybook";
let selectedQuality = QUALITY_LEVELS[savedSettings.quality] ? savedSettings.quality : "balanced";

function persistSelections() {
  saveSettings({
    difficulty: selectedDifficulty,
    style: selectedStyle,
    quality: selectedQuality,
  });
}

function syncSelectionUi() {
  document.querySelectorAll("[data-difficulty]").forEach((item) => {
    item.classList.toggle("active", item.dataset.difficulty === selectedDifficulty);
  });
  document.querySelectorAll("[data-style]").forEach((item) => {
    item.classList.toggle("selected", item.dataset.style === selectedStyle);
  });
  document.querySelectorAll("[data-quality]").forEach((item) => {
    item.classList.toggle("active", item.dataset.quality === selectedQuality);
  });
}

document.querySelectorAll("[data-difficulty]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.difficulty;
    persistSelections();
    syncSelectionUi();
    game.setDifficulty(selectedDifficulty);
    game.refreshProgressUi(selectedDifficulty);
  });
});

document.querySelectorAll("[data-style]").forEach((card) => {
  card.addEventListener("click", () => {
    selectedStyle = card.dataset.style;
    persistSelections();
    syncSelectionUi();
    game.setStyle(selectedStyle);
  });
});

document.querySelectorAll("[data-quality]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedQuality = button.dataset.quality;
    persistSelections();
    syncSelectionUi();
    renderer.setQuality(selectedQuality);
  });
});

function startSelectedGame() {
  const startButton = document.getElementById("startButtonHero");
  startButton.textContent = "Starting...";
  startButton.disabled = true;

  try {
    game.audio.ensure();
    game.setDifficulty(selectedDifficulty);
    game.setStyle(selectedStyle);
    renderer.setQuality(selectedQuality);
    game.start();
  } catch (error) {
    console.error(error);
    startButton.textContent = "Start The Rescue";
    startButton.disabled = false;
  }
}

window.startSelectedGame = startSelectedGame;
document.getElementById("startButtonHero").addEventListener("click", startSelectedGame);

function startDebugRun(mode) {
  if (mode === "nightmareboss") {
    game.setDifficulty("nightmare");
  } else {
    game.setDifficulty(selectedDifficulty);
  }
  game.setStyle(selectedStyle);
  game.start();

  if (mode === "stage2") {
    game.selectedUpgrades = ["quick-sparks"];
    game.availableUpgradePool = game.availableUpgradePool.filter((id) => id !== "quick-sparks");
    game.loadStage(1);
    game.runStats.elapsedTime = 75;
    game.runStats.score = 425;
    game.runStats.shotsFired = 14;
    game.runStats.hitsLanded = 10;
    game.runStats.wolvesDefeated = 4;
    game.runStats.pickupsCollected = 2;
    game.runStats.damageTaken = 18;
  } else if (mode === "stage3") {
    game.selectedUpgrades = ["quick-sparks", "wide-burst"];
    game.availableUpgradePool = game.availableUpgradePool.filter((id) => !game.selectedUpgrades.includes(id));
    game.loadStage(2);
    game.runStats.elapsedTime = 150;
    game.runStats.score = 1080;
    game.runStats.shotsFired = 31;
    game.runStats.hitsLanded = 20;
    game.runStats.wolvesDefeated = 9;
    game.runStats.pickupsCollected = 4;
    game.runStats.damageTaken = 46;
  } else if (mode === "nightmareboss") {
    game.selectedUpgrades = ["quick-sparks", "wide-burst", "guardian-charm"];
    game.availableUpgradePool = game.availableUpgradePool.filter((id) => !game.selectedUpgrades.includes(id));
    game.loadStage(2);
    game.player.health = Math.min(game.player.maxHealth, 62);
    game.projectileCharge = 1;
    game.runStats.elapsedTime = 215;
    game.runStats.score = 1280;
    game.runStats.shotsFired = 37;
    game.runStats.hitsLanded = 24;
    game.runStats.wolvesDefeated = 9;
    game.runStats.pickupsCollected = 4;
    game.runStats.damageTaken = 58;
    const boss = game.enemies.find((enemy) => enemy.renderType === "boss");
    if (boss) {
      boss.health = boss.maxHealth * 0.34;
      boss.phase = 2;
      boss.behaviorState.specialCooldown = 0.8;
      boss.behaviorState.chargeCooldown = 2.2;
    }
  }
}

document.getElementById("howToButton").addEventListener("click", () => {
  document.getElementById("storyModal").classList.remove("hidden");
  document.getElementById("storyModal").classList.add("active");
});

document.getElementById("closeStoryButton").addEventListener("click", () => {
  document.getElementById("storyModal").classList.add("hidden");
  document.getElementById("storyModal").classList.remove("active");
});

document.getElementById("nextStageButton").addEventListener("click", () => {
  game.advanceStageFlow();
});

document.getElementById("resumeButton").addEventListener("click", () => {
  game.togglePause();
});

document.getElementById("restartButtonPause").addEventListener("click", () => {
  game.audio.ensure();
  game.setDifficulty(selectedDifficulty);
  game.setStyle(selectedStyle);
  game.restart();
});

document.getElementById("restartButtonEnd").addEventListener("click", () => {
  game.audio.ensure();
  game.setDifficulty(selectedDifficulty);
  game.setStyle(selectedStyle);
  game.restart();
});

document.getElementById("backToTitleButton").addEventListener("click", () => {
  game.showTitle();
});

window.addEventListener("resize", () => {
  renderer.resize();
  ui.updateTouchVisibility();
});

document.querySelectorAll("[data-touch]").forEach((button) => {
  const action = button.dataset.touch;
  const on = (event) => {
    event.preventDefault();
    game.audio.ensure();
    game.setTouchAction(action, true);
  };
  const off = (event) => {
    event.preventDefault();
    game.setTouchAction(action, false);
  };

  button.addEventListener("touchstart", on, { passive: false });
  button.addEventListener("touchend", off, { passive: false });
  button.addEventListener("touchcancel", off, { passive: false });
  button.addEventListener("mousedown", on);
  button.addEventListener("mouseup", off);
  button.addEventListener("mouseleave", off);
});

const joystickPad = document.getElementById("joystickPad");
const joystickKnob = document.getElementById("joystickKnob");

function updateJoystick(clientX, clientY) {
  const rect = joystickPad.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const dx = clientX - centerX;
  const dy = clientY - centerY;
  const maxRadius = rect.width * 0.28;
  const distance = Math.hypot(dx, dy);
  const limitedDistance = Math.min(distance, maxRadius);
  const angle = Math.atan2(dy, dx);
  const knobX = Math.cos(angle) * limitedDistance;
  const knobY = Math.sin(angle) * limitedDistance;
  joystickKnob.style.transform = `translate(${knobX}px, ${knobY}px)`;
  game.setTouchMove(clamp(knobX / maxRadius, -1, 1), clamp(knobY / maxRadius, -1, 1));
}

function resetJoystick() {
  joystickKnob.style.transform = "translate(0px, 0px)";
  game.setTouchMove(0, 0);
}

joystickPad.addEventListener("pointerdown", (event) => {
  event.preventDefault();
  joystickPad.setPointerCapture(event.pointerId);
  updateJoystick(event.clientX, event.clientY);
});

joystickPad.addEventListener("pointermove", (event) => {
  if (event.buttons === 0 && event.pointerType === "mouse") return;
  updateJoystick(event.clientX, event.clientY);
});

joystickPad.addEventListener("pointerup", resetJoystick);
joystickPad.addEventListener("pointercancel", resetJoystick);
joystickPad.addEventListener("pointerleave", (event) => {
  if (event.pointerType !== "mouse") return;
  resetJoystick();
});

ui.updateTouchVisibility();
syncSelectionUi();
renderer.setQuality(selectedQuality);
game.setDifficulty(selectedDifficulty);
game.setStyle(selectedStyle);
game.showTitle();

const debugMode = new URLSearchParams(window.location.search).get("debug");
if (debugMode === "win") {
  game.setDifficulty(selectedDifficulty);
  game.setStyle(selectedStyle);
  ui.showEnding(true, 2, game.difficulty, {
    time: "03:28",
    finalScore: 2340,
    timeBonus: 420,
    accuracyBonus: 180,
    difficultyBonus: 250,
    bonusTotal: 850,
    baseScore: 1490,
    difficulty: game.difficulty.label,
    shotsFired: 42,
    accuracy: "67%",
    damageTaken: 38,
    pickupsCollected: 5,
    wolvesDefeated: 14,
    medal: "Gold",
    upgrades: ["Quick Sparks", "Wide Burst"],
    records: [{ type: "new-record", text: "New Best Score", value: "2,340" }],
  });
} else if (debugMode === "stage2" || debugMode === "stage3" || debugMode === "nightmareboss") {
  startDebugRun(debugMode);
}
