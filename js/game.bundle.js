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
    playerHealth: 85,
    enemySpeed: 1.2,
    enemyDamage: 15,
    enemyHealth: 48,
    bossHealth: 310,
    fireCooldown: 520,
  },
};

const STAGES = [
  {
    key: "forest-trail",
    name: "Stage 1",
    title: "Forest Trail",
    objective: "Clear the forest trail and reach the lantern gate.",
    transitionTitle: "The trail opens to old ruins",
    transitionBody:
      "Little Red lights the lantern gate, and the path bends toward the forgotten stones where tougher wolves are waiting.",
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
    sky: ["#f5ab82", "#db7856", "#30433d"],
    floor: ["#2a3a33", "#1d2724"],
    enemies: [
      { type: "wolf", x: 3.5, y: 3.5 },
      { type: "wolf", x: 8.5, y: 7.5 },
      { type: "wolf", x: 10.5, y: 2.5 },
      { type: "wolf", x: 11.5, y: 8.5 },
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
    objective: "Survive the ruins and find the lair gate.",
    transitionTitle: "The wolves fall back to the lair",
    transitionBody:
      "The old ruins go still. Beyond the broken archway, the Big Bad Wolf is growling near Granny's cottage.",
    exit: { x: 13.5, y: 2.5 },
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
    sky: ["#e38b70", "#8c5e55", "#202828"],
    floor: ["#465348", "#232d2b"],
    enemies: [
      { type: "wolf", x: 3.5, y: 1.5 },
      { type: "wolf", x: 5.5, y: 6.5 },
      { type: "wolf", x: 10.5, y: 5.5 },
      { type: "wolf", x: 12.5, y: 10.5 },
      { type: "wolf", x: 8.5, y: 11.5 },
      { type: "wolf", x: 13.5, y: 7.5 },
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
    sky: ["#62394a", "#2c2834", "#121215"],
    floor: ["#403235", "#1f1d22"],
    enemies: [
      { type: "wolf", x: 14.5, y: 2.5 },
      { type: "wolf", x: 13.5, y: 9.5 },
      { type: "wolf", x: 4.5, y: 11.5 },
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
const PLAYER_RADIUS = 0.22;
const TAU = Math.PI * 2;

class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.resize();
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.width = Math.floor(window.innerWidth * dpr);
    this.height = Math.floor(window.innerHeight * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
  }

  render(game) {
    const { ctx, width, height } = this;
    const halfHeight = height / 2;
    const stage = game.currentStage;
    const fov = game.fov;
    const player = game.player;
    const rayCount = Math.max(180, Math.floor(width / 3));
    const sliceWidth = width / rayCount;
    const depthBuffer = new Array(rayCount);

    const sky = ctx.createLinearGradient(0, 0, 0, halfHeight);
    sky.addColorStop(0, stage.sky[0]);
    sky.addColorStop(0.5, stage.sky[1]);
    sky.addColorStop(1, stage.sky[2]);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, width, halfHeight);

    const floor = ctx.createLinearGradient(0, halfHeight, 0, height);
    floor.addColorStop(0, stage.floor[0]);
    floor.addColorStop(1, stage.floor[1]);
    ctx.fillStyle = floor;
    ctx.fillRect(0, halfHeight, width, halfHeight);

    this.drawAtmosphere(game);

    for (let column = 0; column < rayCount; column += 1) {
      const cameraX = (column / rayCount) * 2 - 1;
      const rayAngle = player.angle + cameraX * (fov / 2);
      const ray = castRay(stage.map, player.x, player.y, rayAngle, stage);
      const correctedDistance = ray.distance * Math.cos(rayAngle - player.angle);
      depthBuffer[column] = correctedDistance;

      const wallHeight = Math.min(height, (height / Math.max(correctedDistance, 0.001)) * 0.9);
      const y = halfHeight - wallHeight / 2;
      const shade = Math.max(0.24, 1 - correctedDistance / 14);
      const wallX = column * sliceWidth;
      drawForestWallSlice(ctx, stage, ray, wallX, y, sliceWidth + 1, wallHeight, shade);
      const bevel = Math.max(0.12, shade - 0.12);
      ctx.fillStyle = shadeColor(ray.trunkColor, bevel);
      ctx.fillRect(wallX, y, 1, wallHeight);
    }

    this.drawSprites(game, depthBuffer, sliceWidth, rayCount);
    this.drawEffects(game);
    this.drawMinimap(game);
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

    for (let i = 0; i < 10; i += 1) {
      const x = ((i * 217 + t * 16) % (width + 160)) - 80;
      const y = 80 + (i % 4) * 30;
      ctx.fillStyle = "rgba(255, 239, 187, 0.08)";
      ctx.beginPath();
      ctx.arc(x, y, 1.5 + (i % 3), 0, TAU);
      ctx.fill();
    }
  }

  drawSprites(game, depthBuffer, sliceWidth, rayCount) {
    const { ctx, width, height } = this;
    const player = game.player;
    const sprites = [
      ...(game.stageGate ? [game.stageGate] : []),
      ...game.props,
      ...game.enemies.filter((enemy) => enemy.alive),
      ...game.pickups.filter((pickup) => !pickup.collected),
    ];

    sprites
      .map((sprite) => {
        const dx = sprite.x - player.x;
        const dy = sprite.y - player.y;
        const distance = Math.hypot(dx, dy);
        let angle = Math.atan2(dy, dx) - player.angle;
        while (angle < -Math.PI) angle += TAU;
        while (angle > Math.PI) angle -= TAU;
        return { sprite, distance, angle };
      })
      .filter(({ angle, distance }) => Math.abs(angle) < game.fov * 0.7 && distance > 0.2)
      .sort((a, b) => b.distance - a.distance)
      .forEach(({ sprite, distance, angle }) => {
        const size = Math.min(height * 0.72, (height / distance) * (sprite.type === "boss" ? 1.25 : 0.65));
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

        if (!visible) return;

        if (sprite.type === "wolf" || sprite.type === "boss") {
          drawWolfSprite(ctx, sprite, left, top, size);
        } else if (sprite.type === "tree" || sprite.type === "mushroom" || sprite.type === "gate") {
          drawForestPropSprite(ctx, sprite, left, top, size);
        } else if (sprite.type === "health" || sprite.type === "spark") {
          drawPickupSprite(ctx, sprite, left, top + size * 0.15, size * 0.55);
        }
      });
  }

  drawEffects(game) {
    const { ctx, width, height } = this;

    game.effects.forEach((effect) => {
      if (effect.type === "sparkBurst") {
        effect.particles.forEach((particle) => {
          ctx.fillStyle = `rgba(255, 226, 138, ${particle.alpha})`;
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
      }

      if (effect.type === "screenFlash") {
        ctx.fillStyle = `rgba(255, 241, 190, ${effect.alpha})`;
        ctx.fillRect(0, 0, width, height);
      }
    });

    if (game.hurtFlash > 0) {
      ctx.fillStyle = `rgba(216, 82, 68, ${game.hurtFlash * 0.25})`;
      ctx.fillRect(0, 0, width, height);
    }
  }

  drawMinimap(game) {
    const { ctx, width, height } = this;
    const scale = 16;
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
        ctx.fillStyle = tile === "#" ? "rgba(69, 98, 67, 0.9)" : "rgba(99, 136, 92, 0.08)";
        if (tile === "E") {
          ctx.fillStyle = "rgba(255, 210, 134, 0.85)";
        }
        ctx.fillRect(startX + x * scale, startY + y * scale, scale - 1, scale - 1);
      }
    }

    ctx.fillStyle = "#f05d46";
    ctx.beginPath();
    ctx.arc(startX + game.player.x * scale, startY + game.player.y * scale, 3, 0, TAU);
    ctx.fill();

    if (game.stageGate) {
      const gateX = startX + game.stageGate.x * scale;
      const gateY = startY + game.stageGate.y * scale;
      ctx.fillStyle = "rgba(255, 217, 126, 0.95)";
      ctx.fillRect(gateX - 3, gateY - 5, 6, 10);
      ctx.beginPath();
      ctx.arc(gateX, gateY - 5, 5, Math.PI, 0);
      ctx.strokeStyle = "rgba(255, 217, 126, 0.95)";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    if (game.lastWolfHint) {
      const hintX = startX + game.lastWolfHint.x * scale;
      const hintY = startY + game.lastWolfHint.y * scale;
      ctx.strokeStyle = "rgba(255, 243, 186, 0.95)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(hintX, hintY, 9, 0, TAU);
      ctx.stroke();
      ctx.strokeStyle = "rgba(255, 243, 186, 0.45)";
      ctx.beginPath();
      ctx.arc(hintX, hintY, 13, 0, TAU);
      ctx.stroke();
    }

    game.enemies
      .filter((enemy) => enemy.alive)
      .forEach((enemy) => {
        ctx.fillStyle = enemy.type === "boss" ? "#ffd38d" : "#ff8d7a";
        ctx.beginPath();
        ctx.arc(startX + enemy.x * scale, startY + enemy.y * scale, enemy.type === "boss" ? 3.6 : 2.6, 0, TAU);
        ctx.fill();
        if (enemy.type !== "boss") {
          ctx.strokeStyle = "rgba(35, 15, 15, 0.9)";
          ctx.lineWidth = 1.4;
          const wolfX = startX + enemy.x * scale;
          const wolfY = startY + enemy.y * scale;
          ctx.beginPath();
          ctx.moveTo(wolfX - 2.2, wolfY + 1.5);
          ctx.lineTo(wolfX, wolfY - 2.2);
          ctx.lineTo(wolfX + 2.2, wolfY + 1.5);
          ctx.stroke();
        }
      });

    ctx.restore();
  }
}

class Game {
  constructor(renderer, ui) {
    this.renderer = renderer;
    this.ui = ui;
    this.fov = Math.PI / 3;
    this.running = false;
    this.paused = false;
    this.difficultyKey = "easy";
    this.difficulty = DIFFICULTIES.easy;
    this.stageIndex = 0;
    this.lastTime = 0;
    this.keys = new Set();
    this.touchState = new Set();
    this.effects = [];
    this.hurtFlash = 0;
    this.pointerLocked = false;
    this.bindInputs();
  }

  bindInputs() {
    window.addEventListener("keydown", (event) => {
      if (["KeyW", "KeyA", "KeyS", "KeyD", "ArrowLeft", "ArrowRight", "Space"].includes(event.code)) {
        event.preventDefault();
      }
      if (event.code === "KeyP" && this.running) {
        this.togglePause();
      } else if (event.code === "Space") {
        this.shoot();
      }
      this.keys.add(event.code);
    });

    window.addEventListener("keyup", (event) => {
      this.keys.delete(event.code);
    });

    window.addEventListener("mousemove", (event) => {
      if (!this.running || this.paused || !this.pointerLocked) return;
      this.player.angle += event.movementX * 0.0026;
    });

    document.addEventListener("pointerlockchange", () => {
      this.pointerLocked = document.pointerLockElement === this.renderer.canvas;
    });

    this.renderer.canvas.addEventListener("click", () => {
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

  start() {
    this.running = true;
    this.paused = false;
    this.stageIndex = 0;
    this.effects = [];
    this.hurtFlash = 0;
    this.loadStage(0, true);
    this.ui.showGame();
    this.lastTime = performance.now();
    requestAnimationFrame((time) => this.loop(time));
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

    this.player = {
      x: spawn.x,
      y: spawn.y,
      angle: -Math.PI / 2,
      health: fresh ? this.difficulty.playerHealth : Math.min(this.player.health + 20, this.difficulty.playerHealth),
      maxHealth: this.difficulty.playerHealth,
      fireCooldown: 0,
    };

    this.enemies = this.currentStage.enemies.map((enemy, enemyIndex) => ({
      ...this.snapEntityToReachableTile(enemy, reachableTiles),
      id: `${this.currentStage.key}-${enemyIndex}`,
      type: enemy.type,
      alive: true,
      radius: enemy.type === "boss" ? 0.45 : 0.26,
      speed: (enemy.type === "boss" ? 0.65 : 1) * MOVE_SPEED * 0.33 * this.difficulty.enemySpeed,
      health: enemy.type === "boss" ? this.difficulty.bossHealth : this.difficulty.enemyHealth,
      maxHealth: enemy.type === "boss" ? this.difficulty.bossHealth : this.difficulty.enemyHealth,
      damage: enemy.type === "boss" ? this.difficulty.enemyDamage + 8 : this.difficulty.enemyDamage,
      attackCooldown: 0,
      hitTimer: 0,
      phase: 1,
    }));

    if (this.currentStage.boss) {
      const bossSpawn = this.snapEntityToReachableTile(this.currentStage.boss, reachableTiles);
      this.enemies.push({
        id: `${this.currentStage.key}-boss`,
        type: "boss",
        x: bossSpawn.x,
        y: bossSpawn.y,
        alive: true,
        radius: 0.42,
        speed: MOVE_SPEED * 0.22 * this.difficulty.enemySpeed,
        health: this.difficulty.bossHealth,
        maxHealth: this.difficulty.bossHealth,
        damage: this.difficulty.enemyDamage + 10,
        attackCooldown: 0,
        hitTimer: 0,
        phase: 1,
      });
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

    this.stageGate = this.currentStage.exit
      ? {
          id: `${this.currentStage.key}-gate`,
          type: "gate",
          ...this.snapEntityToReachableTile(this.currentStage.exit, reachableTiles),
        }
      : null;

    this.projectileCharge = 1;
    this.stageCleared = false;
    this.pendingTransition = false;
    this.victory = false;
    this.lastWolfHint = null;
    this.ui.updateStage(this.currentStage, this.difficulty);
    this.ui.updateObjective(
      this.currentStage.exit
        ? `${this.currentStage.objective} Follow the gold gate on the minimap.`
        : this.currentStage.objective,
    );
    this.ui.showBoss(null);
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

    const aliveWolves = this.enemies.filter((enemy) => enemy.alive && enemy.type === "wolf");
    if (aliveWolves.length !== 1) {
      this.lastWolfHint = null;
      return;
    }

    const wolf = aliveWolves[0];
    const direction = this.describeDirectionTo(wolf.x, wolf.y);
    this.lastWolfHint = { x: wolf.x, y: wolf.y, direction };
    this.ui.updateObjective(`Last wolf hint: head ${direction}. Follow the glowing ring on the minimap.`);
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
    const delta = Math.min(0.033, (time - this.lastTime) / 1000);
    this.lastTime = time;

    if (!this.paused) {
      this.update(delta);
      this.renderer.render(this);
      this.ui.updateHud(this);
    }

    requestAnimationFrame((nextTime) => this.loop(nextTime));
  }

  update(delta) {
    this.handleInput(delta);
    this.updateEnemies(delta);
    this.updatePickups();
    this.updateEffects(delta);

    this.player.fireCooldown = Math.max(0, this.player.fireCooldown - delta);
    this.projectileCharge = Math.min(1, this.projectileCharge + delta / (this.difficulty.fireCooldown / 1000));
    this.hurtFlash = Math.max(0, this.hurtFlash - delta * 2);
    this.updateLastWolfHint();

    if (!this.stageCleared && this.enemies.every((enemy) => !enemy.alive)) {
      this.stageCleared = true;
      if (this.stageIndex < STAGES.length - 1) {
        this.ui.updateObjective("The path is safe. Reach the glowing lantern gate marked in gold on the minimap.");
      } else {
        this.ui.updateObjective("Granny is safe. Step forward into the cottage light.");
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

  handleInput(delta) {
    let moveX = 0;
    let moveY = 0;
    if (this.keys.has("KeyW") || this.touchState.has("forward")) moveY += 1;
    if (this.keys.has("KeyS") || this.touchState.has("back")) moveY -= 1;
    if (this.keys.has("KeyA") || this.touchState.has("left")) moveX -= 1;
    if (this.keys.has("KeyD") || this.touchState.has("right")) moveX += 1;
    if (this.keys.has("ArrowLeft") || this.touchState.has("turnLeft")) this.player.angle -= TURN_SPEED * delta;
    if (this.keys.has("ArrowRight") || this.touchState.has("turnRight")) this.player.angle += TURN_SPEED * delta;

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

    this.player.fireCooldown = this.difficulty.fireCooldown / 1000;
    this.projectileCharge = 0;
    this.effects.push(createSparkBurst());
    this.effects.push({ type: "screenFlash", alpha: 0.08, ttl: 0.08 });

    let target = null;
    let bestDistance = Infinity;

    this.enemies.forEach((enemy) => {
      if (!enemy.alive) return;
      const dx = enemy.x - this.player.x;
      const dy = enemy.y - this.player.y;
      const distance = Math.hypot(dx, dy);
      const angleToEnemy = Math.atan2(dy, dx);
      const diff = smallestAngleDifference(this.player.angle, angleToEnemy);
      const tolerance = enemy.type === "boss" ? 0.18 : 0.12;
      if (Math.abs(diff) > tolerance) return;
      if (!this.hasLineOfSight(enemy.x, enemy.y)) return;
      if (distance < bestDistance) {
        target = enemy;
        bestDistance = distance;
      }
    });

    if (target) {
      const damage = target.type === "boss" ? 22 : 26;
      target.health -= damage;
      target.hitTimer = 0.12;
      if (target.type === "boss" && target.health < target.maxHealth * 0.45) target.phase = 2;
      if (target.health <= 0) {
        target.alive = false;
        this.effects.push(createSparkBurst(1.2));
      }
    }
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
      const dx = this.player.x - enemy.x;
      const dy = this.player.y - enemy.y;
      const distance = Math.hypot(dx, dy);
      const direction = Math.atan2(dy, dx);
      const lineOfSight = this.enemyHasLineOfSight(enemy, this.player.x, this.player.y);

      if (lineOfSight && distance > (enemy.type === "boss" ? 1.7 : 1.15)) {
        const speedMultiplier = enemy.type === "boss" && enemy.phase === 2 ? 1.35 : 1;
        const nextX = enemy.x + Math.cos(direction) * enemy.speed * speedMultiplier * delta;
        const nextY = enemy.y + Math.sin(direction) * enemy.speed * speedMultiplier * delta;
        if (this.canEnemyOccupy(nextX, enemy.y, enemy)) enemy.x = nextX;
        if (this.canEnemyOccupy(enemy.x, nextY, enemy)) enemy.y = nextY;
      }

      if (distance <= (enemy.type === "boss" ? 2.2 : 1.4) && enemy.attackCooldown <= 0 && lineOfSight) {
        this.damagePlayer(enemy.damage);
        enemy.attackCooldown = enemy.type === "boss" ? (enemy.phase === 2 ? 0.75 : 1.1) : 1.05;
      }
    });

    const boss = this.enemies.find((enemy) => enemy.type === "boss" && enemy.alive);
    this.ui.showBoss(boss);
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
    this.player.health = Math.max(0, this.player.health - amount);
    this.hurtFlash = 1;
    if (this.player.health <= 0) this.finishGame(false);
  }

  updatePickups() {
    this.pickups.forEach((pickup) => {
      if (pickup.collected) return;
      const distance = Math.hypot(this.player.x - pickup.x, this.player.y - pickup.y);
      if (distance < 0.6) {
        pickup.collected = true;
        if (pickup.type === "health") {
          this.player.health = Math.min(this.player.maxHealth, this.player.health + pickup.amount);
        } else if (pickup.type === "spark") {
          this.projectileCharge = Math.min(1, this.projectileCharge + pickup.amount);
        }
      }
    });
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
        }
        return effect;
      })
      .filter((effect) => effect.ttl > 0);
  }

  continueToNextStage() {
    if (this.stageIndex < STAGES.length - 1) {
      this.paused = false;
      this.loadStage(this.stageIndex + 1);
      this.ui.hideTransition();
    }
  }

  togglePause() {
    if (!this.running) return;
    this.paused = !this.paused;
    this.ui.togglePause(this.paused);
  }

  finishGame(victory) {
    this.running = false;
    this.paused = false;
    this.victory = victory;
    if (document.pointerLockElement) document.exitPointerLock();
    this.ui.showEnding(victory, this.stageIndex, this.difficulty);
  }

  showTitle() {
    this.running = false;
    this.paused = false;
    if (document.pointerLockElement) document.exitPointerLock();
    this.ui.showTitle();
  }

  setTouchAction(action, active) {
    if (active) this.touchState.add(action);
    else this.touchState.delete(action);
  }
}

function castRay(map, startX, startY, angle, stage) {
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

  return pickWallStyle(stage, distance, x, y);
}

function pickWallStyle(stage, distance, x, y) {
  const vertical = Math.abs(x - Math.round(x)) < Math.abs(y - Math.round(y));
  if (stage.key === "boss-lair") {
    return {
      distance,
      barkColor: vertical ? "#614853" : "#4f3b44",
      trunkColor: vertical ? "#7d5e6d" : "#674d5a",
      leafColor: vertical ? "#47353f" : "#392b34",
    };
  }
  if (stage.key === "lantern-ruins") {
    return {
      distance,
      barkColor: vertical ? "#64584d" : "#55493f",
      trunkColor: vertical ? "#8d8377" : "#70665e",
      leafColor: vertical ? "#566a58" : "#475748",
    };
  }
  return {
    distance,
    barkColor: vertical ? "#65503a" : "#57412f",
    trunkColor: vertical ? "#8a6d4c" : "#745a3d",
    leafColor: vertical ? "#6f8858" : "#5d734a",
  };
}

function drawForestWallSlice(ctx, stage, ray, x, y, width, height, shade) {
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

  ctx.fillStyle = "rgba(255, 239, 200, 0.08)";
  ctx.fillRect(x, y + canopyHeight * 0.08, width, Math.max(1, canopyHeight * 0.06));
}

function shadeColor(hex, shade) {
  const clean = hex.replace("#", "");
  const num = Number.parseInt(clean, 16);
  const r = Math.round(((num >> 16) & 255) * shade);
  const g = Math.round(((num >> 8) & 255) * shade);
  const b = Math.round((num & 255) * shade);
  return `rgb(${r}, ${g}, ${b})`;
}

function drawWolfSprite(ctx, sprite, left, top, size) {
  const earWiggle = sprite.type === "boss" ? 1.1 : 1;
  const bodyColor = sprite.type === "boss" ? "#6c5660" : "#81685d";
  const maneColor = sprite.type === "boss" ? "#d5a56f" : "#ead4b8";
  const glow = sprite.hitTimer > 0 ? "rgba(255, 226, 150, 0.45)" : "rgba(0, 0, 0, 0.18)";
  const eyeColor = sprite.type === "boss" ? "#ffd38d" : "#fff5e4";

  ctx.save();
  ctx.translate(left, top);
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.ellipse(size * 0.5, size * 0.62, size * 0.22, size * 0.09, 0, 0, TAU);
  ctx.fill();
  ctx.fillStyle = bodyColor;
  ctx.beginPath();
  ctx.ellipse(size * 0.5, size * 0.56, size * 0.18, size * 0.23, 0, 0, TAU);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(size * 0.31, size * 0.27);
  ctx.lineTo(size * 0.22, size * 0.05 * earWiggle + size * 0.08);
  ctx.lineTo(size * 0.4, size * 0.18);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(size * 0.69, size * 0.27);
  ctx.lineTo(size * 0.78, size * 0.05 * earWiggle + size * 0.08);
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
  ctx.arc(size * 0.45, size * 0.28, size * 0.014 * (sprite.type === "boss" ? 1.6 : 1.1), 0, TAU);
  ctx.arc(size * 0.55, size * 0.28, size * 0.014 * (sprite.type === "boss" ? 1.6 : 1.1), 0, TAU);
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

  if (sprite.type === "boss") {
    ctx.fillStyle = "rgba(255, 211, 141, 0.2)";
    ctx.fillRect(size * 0.22, size * 0.03, size * 0.56, size * 0.08);
  }

  ctx.restore();
}

function drawPickupSprite(ctx, sprite, left, top, size) {
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
    ctx.fillStyle = "rgba(173, 243, 255, 0.18)";
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

function drawForestPropSprite(ctx, sprite, left, top, size) {
  ctx.save();
  ctx.translate(left, top);

  if (sprite.type === "tree") {
    const canopy = size * 0.34;
    ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.86, size * 0.18, size * 0.06, 0, 0, TAU);
    ctx.fill();

    ctx.fillStyle = "#6b4f37";
    ctx.fillRect(size * 0.42, size * 0.42, size * 0.16, size * 0.38);

    ctx.fillStyle = "#6f8d5b";
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.4, canopy, 0, TAU);
    ctx.arc(size * 0.38, size * 0.5, canopy * 0.72, 0, TAU);
    ctx.arc(size * 0.62, size * 0.5, canopy * 0.72, 0, TAU);
    ctx.fill();

    ctx.fillStyle = "rgba(255, 241, 203, 0.1)";
    ctx.beginPath();
    ctx.arc(size * 0.45, size * 0.32, canopy * 0.34, 0, TAU);
    ctx.fill();
  } else if (sprite.type === "mushroom") {
    ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.76, size * 0.14, size * 0.05, 0, 0, TAU);
    ctx.fill();

    ctx.fillStyle = "#f7ead0";
    ctx.fillRect(size * 0.45, size * 0.48, size * 0.1, size * 0.22);
    ctx.fillStyle = "#cf5a4d";
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.46, size * 0.18, Math.PI, 0);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#fff4dc";
    ctx.beginPath();
    ctx.arc(size * 0.45, size * 0.41, size * 0.022, 0, TAU);
    ctx.arc(size * 0.55, size * 0.43, size * 0.018, 0, TAU);
    ctx.fill();
  } else if (sprite.type === "gate") {
    ctx.fillStyle = "rgba(255, 209, 129, 0.16)";
    ctx.beginPath();
    ctx.ellipse(size * 0.5, size * 0.66, size * 0.28, size * 0.12, 0, 0, TAU);
    ctx.fill();

    ctx.strokeStyle = "#ffd17b";
    ctx.lineWidth = Math.max(2, size * 0.02);
    ctx.beginPath();
    ctx.moveTo(size * 0.3, size * 0.68);
    ctx.lineTo(size * 0.3, size * 0.3);
    ctx.arc(size * 0.5, size * 0.3, size * 0.2, Math.PI, 0);
    ctx.lineTo(size * 0.7, size * 0.68);
    ctx.stroke();

    ctx.fillStyle = "rgba(255, 227, 160, 0.22)";
    ctx.fillRect(size * 0.34, size * 0.3, size * 0.32, size * 0.38);
    ctx.fillStyle = "#ffe7a8";
    ctx.beginPath();
    ctx.arc(size * 0.5, size * 0.18, size * 0.08, 0, TAU);
    ctx.fill();
  }

  ctx.restore();
}

function smallestAngleDifference(a, b) {
  let diff = (b - a + Math.PI) % TAU;
  if (diff < 0) diff += TAU;
  return diff - Math.PI;
}

function createSparkBurst(scale = 1) {
  return {
    type: "sparkBurst",
    ttl: 0.18 * scale,
    maxTtl: 0.18 * scale,
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

function createUiBindings() {
  const titleScreen = document.getElementById("titleScreen");
  const hud = document.getElementById("hud");
  const transitionScreen = document.getElementById("transitionScreen");
  const pauseScreen = document.getElementById("pauseScreen");
  const gameOverScreen = document.getElementById("gameOverScreen");
  const touchControls = document.getElementById("touchControls");
  const bossHud = document.getElementById("bossHud");

  return {
    showTitle() {
      titleScreen.classList.remove("hidden");
      titleScreen.classList.add("active");
      hud.classList.add("hidden");
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
      pauseScreen.classList.add("hidden");
      pauseScreen.classList.remove("active");
      gameOverScreen.classList.add("hidden");
      gameOverScreen.classList.remove("active");
      document.getElementById("storyModal").classList.add("hidden");
      document.getElementById("storyModal").classList.remove("active");
      this.updateTouchVisibility(false);
    },

    showGame() {
      titleScreen.classList.remove("active");
      titleScreen.classList.add("hidden");
      hud.classList.remove("hidden");
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
      pauseScreen.classList.add("hidden");
      pauseScreen.classList.remove("active");
      gameOverScreen.classList.add("hidden");
      gameOverScreen.classList.remove("active");
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

    updateHud(gameState) {
      document.getElementById("healthText").textContent = `${Math.ceil(gameState.player.health)} / ${gameState.player.maxHealth}`;
      document.getElementById("healthFill").style.transform = `scaleX(${gameState.player.health / gameState.player.maxHealth})`;
      document.getElementById("cooldownFill").style.transform = `scaleX(${gameState.projectileCharge})`;
      document.getElementById("cooldownText").textContent = gameState.projectileCharge >= 1 ? "Ready" : "Recharging";
      document.getElementById("wolfCount").textContent = `${gameState.enemies.filter((enemy) => enemy.alive).length}`;
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

    togglePause(paused) {
      pauseScreen.classList.toggle("active", paused);
      pauseScreen.classList.toggle("hidden", !paused);
    },

    showEnding(victory, stageIndex, difficulty) {
      hud.classList.add("hidden");
      pauseScreen.classList.add("hidden");
      pauseScreen.classList.remove("active");
      transitionScreen.classList.add("hidden");
      transitionScreen.classList.remove("active");
      gameOverScreen.classList.remove("hidden");
      gameOverScreen.classList.add("active");
      this.updateTouchVisibility(false);
      const eyebrow = document.getElementById("endEyebrow");
      const title = document.getElementById("endTitle");
      const body = document.getElementById("endBody");
      if (victory) {
        eyebrow.textContent = "Granny is safe";
        title.textContent = "The Big Bad Wolf is defeated";
        body.textContent = `Little Red clears all three stages on ${difficulty.label}. Granny steps out of the cottage and the forest glows warm again.`;
      } else {
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
let selectedDifficulty = "easy";

document.querySelectorAll("[data-difficulty]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.difficulty;
    document.querySelectorAll("[data-difficulty]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

function startSelectedGame() {
  const startButton = document.getElementById("startButtonHero");
  startButton.textContent = "Starting...";
  startButton.disabled = true;

  try {
    game.setDifficulty(selectedDifficulty);
    game.start();
  } catch (error) {
    console.error(error);
    startButton.textContent = "Start The Rescue";
    startButton.disabled = false;
  }
}

window.startSelectedGame = startSelectedGame;
document.getElementById("startButtonHero").addEventListener("click", startSelectedGame);

document.getElementById("howToButton").addEventListener("click", () => {
  document.getElementById("storyModal").classList.remove("hidden");
  document.getElementById("storyModal").classList.add("active");
});

document.getElementById("closeStoryButton").addEventListener("click", () => {
  document.getElementById("storyModal").classList.add("hidden");
  document.getElementById("storyModal").classList.remove("active");
});

document.getElementById("nextStageButton").addEventListener("click", () => {
  game.continueToNextStage();
});

document.getElementById("resumeButton").addEventListener("click", () => {
  game.togglePause();
});

document.getElementById("restartButtonPause").addEventListener("click", () => {
  game.setDifficulty(selectedDifficulty);
  game.restart();
});

document.getElementById("restartButtonEnd").addEventListener("click", () => {
  game.setDifficulty(selectedDifficulty);
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

ui.updateTouchVisibility();
game.showTitle();
