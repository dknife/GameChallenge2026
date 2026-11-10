# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, single-page promotional website for **제4회 TU 게임챌린지 2026** (Tongmyong University Game Challenge, 동명대학교 게임학부 × IEEE 부산섹션). No framework, no build step, no package manager, no tests — plain HTML/CSS/vanilla JS served as files.

Live: https://dknife.github.io/GameChallenge2026/

## Repository layout (two worlds)

- **`site/`** — the deployed website. **This is the git repository** (git was `init`'d inside `site/`, not the project root). The project root is intentionally *not* a git repo so that source materials below are never published.
- **`자료/`** and **`photos/`** — raw source materials (Korean folder names), NOT served. `자료/2026 제4회 TU게임챌린지 결과보고서_IEEE.pdf` (the official result report) is the **authoritative source** for winners, award tiers, schedule dates, and work screenshots — prefer it over the public web pages when facts conflict (e.g. 예선 결과일 is `9.14` per the report, not `9.11` from the notice).

## Content architecture — the key thing to understand

`site/index.html` is only a **scaffold**: static section wrappers plus empty containers with ids (`#timeline-list`, `#tracks-list`, `#winner-tabs`, `#winners-wrap`, `#gal-tabs`, `#gallery-wrap`, `#highlightStrip`, `#future-visual`). It contains almost no real content.

**All data lives in `site/assets/js/main.js`** as top-level consts, and the same file renders them into the DOM at load:
- `TIMELINE`, `TRACKS` — schedule and competition tracks
- `WINNERS` — the 28 awarded works, grouped by track key (`'1-A'`, `'1-B'`, `'2'`), each with medal/title/team/intent
- `WORK_SLUGS` — per-track arrays of image slugs for the work screenshots
- `GAL`, `HIGHLIGHT`, `FUTURE_IMGS` — photo lists for galleries / hero strip / G-STAR section

To edit copy, winners, dates, or which photos appear, **edit `main.js`**, not the HTML.

### Invariants that will silently break things
- **`WINNERS[k].items` order must stay index-aligned with `WORK_SLUGS[k]`** — the renderer pairs them by position (`WORK_SLUGS[k][wi]`). Reordering one without the other mismatches every work screenshot.
- **Track order is hardcoded** as `trackKeys = ['1-A','1-B','2']`. Do not derive it from `Object.keys(WINNERS)`: the key `'2'` is integer-like, so JS hoists it to the front and the tabs render out of order.
- **No photo should appear in more than one section.** Highlight strip, each gallery tab, the press image, and the G-STAR visuals use disjoint image sets by design (the article photo `ceremony-11` in the press card is the one intentional editorial reuse).

## Styling

`site/assets/css/style.css` is themed entirely through CSS custom properties in `:root` (verse8-inspired: cool-dark slate background + teal/`--p2` accent). **Re-theming = editing the `:root` variables**; components reference `var(--p1/--p2/--grad/--line/...)` so color changes cascade. `--gold` is reserved for the 대상 (grand prize) medal.

## Images

- Served images live under `site/assets/img/{ceremony,award,venue,exhibit,works}/` plus `poster.jpg`, `booth-1.jpg`, `booth-2.jpg`; the press article PDF is `site/assets/press/`.
- Photos were preprocessed with **Pillow** (`ImageOps.exif_transpose` to fix sideways phone photos, then resized to ≤1600px). New phone photos likely need the same treatment or they render rotated in-browser.
- Work screenshots were extracted from the result-report PDF with **PyMuPDF (`fitz`)**, sorted top-to-bottom by bbox per page, in winner order. If regenerating, keep that ordering so slugs stay aligned with `WINNERS`.

## Common tasks

Run everything from `site/` (that is the repo root for git).

```bash
# Local preview
cd site && python -m http.server 8080      # then open http://localhost:8080

# Visual verification (no browser GUI needed) — headless screenshot
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  --headless=new --disable-gpu --hide-scrollbars --window-size=1440,2000 \
  --screenshot="shot.png" "http://localhost:8080/"
# then Read shot.png. Crop tall pages with Pillow to inspect specific sections.

# JS sanity check (no test suite exists)
node --check assets/js/main.js

# Deploy — commit from inside site/; GitHub Pages redeploys main automatically
git -C site add -A
git -C site commit -m "..."
git -C site push
```

There is no lint, no test runner, and no CI beyond the GitHub Pages build.

## Deployment

GitHub Pages serves `main` branch root of `dknife/GameChallenge2026` (account `dknife` via `gh`). `.nojekyll` is present so paths are served verbatim without Jekyll processing. Pages was enabled with `gh api -X POST repos/dknife/GameChallenge2026/pages`.
