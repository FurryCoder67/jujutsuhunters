# Electron Multi-Platform Build — Design Spec
**Date:** 2026-04-29  
**Status:** Approved

## Goal

Finish the Electron desktop app so it builds and releases installers for Windows, macOS, and Linux via the existing GitHub Actions CI pipeline.

---

## Section 1: Icon Generation

**Problem:** `electron/` has no icon files (`icon.png`, `icon.ico`, `icon.icns`). electron-builder will fail without them.

**Approach:** Generate all three formats once from `favicon.svg` using a Node.js script, commit the resulting binary files.

**New devDependencies in `electron/package.json`:**
- `@resvg/resvg-js` — renders SVG to PNG (Rust-based, prebuilt binaries for all platforms, no native compilation needed)
- `png2icons` — pure-JS PNG → ICO (multi-size 16/32/48/256) and PNG → ICNS conversion

**New file `electron/generate-icons.js`:**
1. Read `../favicon.svg`
2. Render at 512×512 using `@resvg/resvg-js` → PNG buffer
3. Write `icon.png` (512×512, used by Linux builds)
4. Call `png2icons.createICO(...)` → write `icon.ico` (multi-size, used by Windows builds)
5. Call `png2icons.createICNS(...)` → write `icon.icns` (used by macOS builds)

**Outcome:** Run `node generate-icons.js` once from `electron/`, commit the three icon files. The script stays in the repo for future icon updates. Delete `icon-placeholder.txt`.

---

## Section 2: Workflow Cleanup

**Problem 1 — `publish.yml` conflict:**  
`publish.yml` triggers on `v*` tags (same as `build-desktop.yml`), runs `npm ci` at the repo root (no electron-builder config there), and calls `npx electron-builder --publish=always` from root. This will fail on every tag push and create noise/confusion alongside the correct `build-desktop.yml` workflow.

**Fix:** Delete `.github/workflows/publish.yml`.

**Problem 2 — Version drift in `auto-release.yml`:**  
`auto-release.yml` bumps `package.json` (root) but not `electron/package.json`. After a few auto-releases the two versions diverge, so the installer filenames (which embed `${version}` from electron's package.json) won't match the GitHub release tag.

**Fix:** After the existing `npm version patch` step, add:
```bash
cd electron && npm version patch --no-git-tag-version
```
Then stage and commit `electron/package.json` alongside the root files.

---

## Section 3: Package Lock File

**Problem:** `build-desktop.yml` runs `npm ci` in `electron/`, which requires `electron/package-lock.json`. Adding the two new devDependencies requires running `npm install` in `electron/` and committing the resulting lockfile.

**Fix:** After adding devDeps to `electron/package.json`, run `npm install` in `electron/` and commit `electron/package-lock.json`.

---

## Deliverables

| File | Action |
|------|--------|
| `electron/package.json` | Add `@resvg/resvg-js`, `png2icons` devDeps; add `"generate-icons"` script |
| `electron/package-lock.json` | Create/update via `npm install` |
| `electron/generate-icons.js` | New — one-time icon generation script |
| `electron/icon.png` | Generated from favicon.svg |
| `electron/icon.ico` | Generated from favicon.svg |
| `electron/icon.icns` | Generated from favicon.svg |
| `electron/icon-placeholder.txt` | Delete |
| `.github/workflows/publish.yml` | Delete |
| `.github/workflows/auto-release.yml` | Fix version bump to include `electron/package.json` |

---

## Out of Scope

- Code signing (macOS notarization, Windows Authenticode) — requires paid certificates
- Auto-update (electron-updater) — not part of current app
- The `desktop/` C++ app — separate codebase, separate build
