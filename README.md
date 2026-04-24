# SORT//VIS

```text
+--------------------------------------------------------------+
| SORT//VIS :: RETRO SORTING LAB                               |
| STATUS  : ONLINE                                             |
| STACK   : HTML / CSS / JAVASCRIPT                            |
| MODE    : ZERO BUILD STEP                                    |
| DISPLAY : CRT-STYLE CANVAS VISUALIZER                        |
| CONTROL : START / PAUSE / STEP / HALT / RESET                |
+--------------------------------------------------------------+
```

A sorting visualizer with a classic phosphor-screen aesthetic, built in vanilla JavaScript and rendered on canvas.

## Overview

`SORT//VIS` is a single-page front-end project designed to look and feel like an old terminal workstation while still being useful as a modern portfolio piece.

It combines:

- 13 sorting algorithms
- real-time telemetry for comparisons, swaps, reads, writes, and elapsed time
- step-by-step execution controls
- multiple dataset presets
- responsive desktop and mobile layouts
- Playwright smoke tests plus GitHub Actions CI

## Command Set

- `Start`: begin execution
- `Pause`: freeze the current run
- `Step`: advance a single operation
- `Halt`: stop the current run
- `Reset`: regenerate the dataset

Keyboard shortcuts:

- `Space`: start or pause
- `S`: single-step
- `H` or `Esc`: halt
- `R`: reset

## Algorithm Set

| Algorithm | Time | Space | Stable |
| --- | --- | --- | --- |
| Bubble Sort | O(n²) | O(1) | Yes |
| Cocktail Shaker Sort | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(1) | No |
| Insertion Sort | O(n²) | O(1) | Yes |
| Gnome Sort | O(n²) | O(1) | Yes |
| Comb Sort | O(n²) avg | O(1) | No |
| Merge Sort | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) avg | O(log n) | No |
| Heap Sort | O(n log n) | O(1) | No |
| Shell Sort | O(n log² n) | O(1) | No |
| Odd-Even Sort | O(n²) | O(1) | Yes |
| Counting Sort | O(n + k) | O(k) | Yes |
| Radix Sort (LSD) | O(d * (n + b)) | O(n + b) | Yes |

## Launch

```bash
npm install
node scripts/ci-check.js
npm run test:e2e
```

To open the app directly:

```bash
open index.html
```

The Playwright suite starts a local static server automatically.

## Quality Control

The repository includes:

- a structural validation script in `scripts/ci-check.js`
- Playwright browser smoke tests for desktop and mobile
- a GitHub Actions workflow in `.github/workflows/ci.yml`

Current checks cover:

- embedded JavaScript syntax inside `index.html`
- main control presence and algorithm metadata consistency
- mobile layout guardrails
- browser-level interaction for desktop and mobile viewports

## GitHub Pages

This repository is static and can be deployed directly with GitHub Pages:

1. Push the repository to GitHub.
2. Open `Settings > Pages`.
3. Select the branch that contains `index.html`.
4. Publish from the repository root.

## Suggested GitHub Description

`Retro sorting visualizer built with vanilla JS, canvas, CRT aesthetics, and step-by-step execution controls.`

## License

MIT
