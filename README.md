# Red Riding Hood: Granny Rescue

A kid-friendly browser FPS where Little Red moves through a fairy-tale forest, shoots sparkling magic at runaway wolves, relights ancient lantern shrines, defeats the Big Bad Wolf, and saves Granny.

Repository:

- [https://github.com/jimmyt1453/red-riding-hood](https://github.com/jimmyt1453/red-riding-hood)

## Current Version

- `v0.2`
- Includes progression tracking, performance mode, ambient audio, stage ambushes, and post-QA difficulty tuning

## Features

- Browser-based 2.5D raycast FPS
- 3 playable stages with distinct objectives
- Difficulty selection: `Easy`, `Normal`, `Nightmare`
- 3 visual themes:
  - `Storybook Paint`
  - `Cartoon Action`
  - `Paper Theater`
- Enemy archetypes:
  - `Wolf`
  - `Swift Wolf`
  - `Brute Wolf`
  - `Pouncer Wolf`
  - `Big Bad Wolf`
- Stage 2 lantern shrine objective
- Between-stage upgrade choices:
  - `Quick Sparks`
  - `Heartier Hood`
  - `Wide Burst`
  - `Guardian Charm`
- Boss fight with multiple phases, shockwaves, charges, and summoned adds
- Surprise ambush encounters in Stage 1 and Stage 2
- Live HUD score and timer
- Event banner feedback for pickups, stage clears, ambushes, and boss phases
- End-of-run summary with medal rank
- Local progression tracking with high scores, best times, medal records, and cleared difficulties
- Improved minimap with player facing cone, shrine markers, and pulsing gate
- Performance toggle: `Balanced` or `Performance`
- Generated ambient scene music and feedback audio with Web Audio
- Mobile support with a virtual movement joystick
- Latest tuning pass softens ambush pacing, boss burst damage, and `Nightmare` difficulty spikes

## Gameplay Flow

1. Choose a visual style.
2. Choose a difficulty.
3. Choose `Balanced` or `Performance` mode.
4. Start the rescue.
5. Defeat wolves and complete the current stage objective.
6. Follow the glowing lantern gate and advance.
7. Choose one blessing after Stage 1 and Stage 2.
8. Defeat the Big Bad Wolf and rescue Granny.
9. Review your score, accuracy, medal rank, and any new record callouts.

## Objectives By Stage

### Stage 1: Forest Trail

- Clear the wolves.
- Survive a mid-stage tree-line ambush.
- Reach the lantern gate.

### Stage 2: Lantern Ruins

- Defeat the wolves.
- Relight both lantern shrines by standing in their glow.
- Survive the ruins ambush triggered by the first lit shrine.
- Reach the lantern gate.

### Stage 3: Big Bad Lair

- Survive the mixed wolf pack.
- Defeat the Big Bad Wolf through all boss phases.

## Controls

### Desktop

- `W` `A` `S` `D`: move
- Mouse: turn
- `Arrow Left` / `Arrow Right`: turn
- Click or `Space`: shoot
- `P` or `Esc`: pause
- `R`: restart run

### Mobile

- Left joystick: move
- Right controls: turn
- `Spark`: shoot

## Scoring And Rank

### Score

- `+100` per normal wolf defeat
- `+500` for defeating the Big Bad Wolf
- `+25` per pickup
- End-of-run bonus score from:
  - clear time
  - shooting accuracy
  - chosen difficulty

### Medal Rank

- `Gold`: win with a strong run across accuracy, damage control, pace, and no Guardian Charm revive use
- `Silver`: win with a solid run across at least two of those categories
- `Bronze`: any win
- `None`: loss

## Local Progression

- Best overall score is stored locally in the browser.
- Each difficulty tracks:
  - best score
  - best clear time
  - best medal earned
  - total clears
- Cleared difficulties are shown on the title screen and remain saved with `localStorage`.

## Run Locally

Use a local server from the project folder.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

If port `8000` is busy, use another port such as:

```bash
python3 -m http.server 8080
```

## Debug Routes

To preview key QA scenarios directly:

```text
index.html?debug=win
index.html?debug=stage2
index.html?debug=stage3
index.html?debug=nightmareboss
```

## Project Structure

- `index.html`: title screen, overlays, HUD, upgrade screen, and run summary markup
- `styles.css`: title layout, HUD styling, overlays, progression cards, summary panels, and touch controls
- `js/game.bundle.js`: stage data, local progression storage, game state, enemy behaviors, audio helpers, renderer, UI bindings, and ending logic

## Validation Notes

- JavaScript bundle syntax checked with `node --check`
- Gameplay is optimized for desktop first while keeping mobile controls playable
