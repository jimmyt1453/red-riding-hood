# Red Riding Hood: Granny Rescue

A kid-friendly browser FPS game about Red Riding Hood blasting bad wolves with sparkling magic and saving Granny from the Big Bad Wolf.

## Features

- Browser-based 2.5D raycast FPS
- 3 stages
- Difficulty selection: `Easy`, `Normal`, `Nightmare`
- Final boss fight against the Big Bad Wolf
- Kid-safe visual style with no gore
- Minimap with wolf markers and exit gate marker
- Basic mobile touch controls

## How To Play

Clear each stage by defeating all wolves. After the stage is clear, follow the gold lantern gate marker and walk into it to move to the next stage.

When only one wolf remains, the game shows a hint in the objective area and highlights that wolf on the minimap.

## Controls

### Desktop

- `W` `A` `S` `D`: move
- Mouse: turn
- `Arrow Left` / `Arrow Right`: turn
- Click or `Space`: shoot
- `P`: pause

### Mobile

- Left buttons: move
- Right buttons: turn
- `Spark`: shoot

## Run Locally

You can open `index.html` directly, but running a local server is recommended.

Example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Project Structure

- `index.html`: game UI and menu layout
- `styles.css`: visual styling for menu and HUD
- `js/game.bundle.js`: game logic, rendering, AI, minimap, and stage data

## Current Gameplay Notes

- The maze walls are styled like a forest with tree-like rendering
- Trees, mushrooms, wolves, pickups, and gate markers are rendered as in-world sprites
- The minimap is placed at the bottom right to avoid the top HUD

## GitHub

Repository:

- [https://github.com/jimmyt1453/red-riding-hood](https://github.com/jimmyt1453/red-riding-hood)
