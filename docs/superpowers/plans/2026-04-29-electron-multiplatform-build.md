# Electron Multi-Platform Build — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate platform icons from `favicon.svg`, commit them along with the rest of the `electron/` directory (which is currently untracked), clean up the conflicting `publish.yml` workflow, and sync version bumps across both `package.json` files so the CI pipeline can build and release Windows/macOS/Linux installers correctly.

**Architecture:** All three icon formats (PNG/ICO/ICNS) are generated once from `favicon.svg` using a Node.js script and committed to the repo. The `build-desktop.yml` GitHub Actions workflow already handles builds and releases correctly — the only CI changes needed are deleting the broken `publish.yml` and fixing version sync in `auto-release.yml`.

**Tech Stack:** Node.js, `@resvg/resvg-js` (SVG→PNG), `png2icons` (PNG→ICO/ICNS), electron-builder, GitHub Actions

---

### Task 1: Add devDependencies and commit core electron files

**Files:**
- Modify: `electron/package.json`
- Create: `electron/package-lock.json` (via npm install)

> **Note:** The entire `electron/` directory is currently untracked in git. This task commits all its core files for the first time.

- [ ] **Step 1: Update `electron/package.json`**

Replace the full contents of `electron/package.json` with:

```json
{
  "name": "jujutsu-hunters",
  "version": "1.0.8",
  "description": "Jujutsu Hunters — Desktop App",
  "main": "main.js",
  "author": "FurryCoder67",
  "license": "MIT",
  "private": true,
  "scripts": {
    "start": "electron .",
    "generate-icons": "node generate-icons.js",
    "build:win":   "electron-builder --win --x64",
    "build:mac":   "electron-builder --mac --x64 --arm64",
    "build:linux": "electron-builder --linux --x64"
  },
  "devDependencies": {
    "@resvg/resvg-js": "^2.6.2",
    "electron": "29.4.6",
    "electron-builder": "24.13.3",
    "png2icons": "^2.0.1"
  },
  "build": {
    "appId": "com.furryCoder67.jujutsuhunters",
    "productName": "Jujutsu Hunters",
    "copyright": "Fan-made. Not affiliated with Gege Akutami or MAPPA.",
    "directories": {
      "output": "../dist-electron"
    },
    "files": [
      "main.js",
      "preload.js",
      "icon.png",
      "icon.ico",
      "icon.icns"
    ],
    "win": {
      "target": [
        { "target": "nsis", "arch": ["x64"] }
      ],
      "icon": "icon.ico",
      "artifactName": "JujutsuHunters-Setup-${version}-win.exe"
    },
    "nsis": {
      "oneClick": false,
      "allowToChangeInstallationDirectory": true,
      "installerIcon": "icon.ico",
      "uninstallerIcon": "icon.ico",
      "installerHeaderIcon": "icon.ico",
      "createDesktopShortcut": true,
      "createStartMenuShortcut": true,
      "shortcutName": "Jujutsu Hunters"
    },
    "mac": {
      "target": [
        { "target": "dmg", "arch": ["x64", "arm64"] }
      ],
      "icon": "icon.icns",
      "artifactName": "JujutsuHunters-${version}-mac.dmg",
      "category": "public.app-category.games"
    },
    "linux": {
      "target": [
        { "target": "AppImage", "arch": ["x64"] }
      ],
      "icon": "icon.png",
      "artifactName": "JujutsuHunters-${version}-linux.AppImage",
      "category": "Game"
    }
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
cd electron
npm install
```

Expected: `package-lock.json` created, `node_modules/@resvg` and `node_modules/png2icons` appear.

- [ ] **Step 3: Verify packages installed**

```bash
node -e "require('@resvg/resvg-js'); require('png2icons'); console.log('OK')"
```

Expected output: `OK`

- [ ] **Step 4: Commit core electron files (first time adding to git)**

```bash
cd ..
git add electron/main.js electron/preload.js electron/package.json electron/package-lock.json
git commit -m "chore(electron): add electron app source and icon-gen devDeps"
```

---

### Task 2: Create and run the icon generation script

**Files:**
- Create: `electron/generate-icons.js`
- Create: `electron/icon.png`, `electron/icon.ico`, `electron/icon.icns`
- Delete: `electron/icon-placeholder.txt`

- [ ] **Step 1: Create `electron/generate-icons.js`**

```javascript
const { Resvg } = require('@resvg/resvg-js');
const png2icons = require('png2icons');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(__dirname, '..', 'favicon.svg');
const svgData = fs.readFileSync(svgPath);

const resvg = new Resvg(svgData, { fitTo: { mode: 'width', value: 512 } });
const pngBuffer = Buffer.from(resvg.render().asPng());

fs.writeFileSync(path.join(__dirname, 'icon.png'), pngBuffer);
console.log('wrote icon.png (512x512)');

const icoBuffer = png2icons.createICO(pngBuffer, png2icons.BILINEAR, 0, false);
if (!icoBuffer) throw new Error('ICO generation failed');
fs.writeFileSync(path.join(__dirname, 'icon.ico'), icoBuffer);
console.log('wrote icon.ico (multi-size)');

const icnsBuffer = png2icons.createICNS(pngBuffer, png2icons.BILINEAR, 0);
if (!icnsBuffer) throw new Error('ICNS generation failed');
fs.writeFileSync(path.join(__dirname, 'icon.icns'), icnsBuffer);
console.log('wrote icon.icns');
```

- [ ] **Step 2: Run the script**

```bash
cd electron
node generate-icons.js
```

Expected output:
```
wrote icon.png (512x512)
wrote icon.ico (multi-size)
wrote icon.icns
```

- [ ] **Step 3: Verify icon files exist and are non-empty**

```bash
ls -lh icon.png icon.ico icon.icns
```

Expected: all three files present, each >10KB.

- [ ] **Step 4: Delete the placeholder**

```bash
rm icon-placeholder.txt
```

- [ ] **Step 5: Commit**

```bash
cd ..
git add electron/generate-icons.js electron/icon.png electron/icon.ico electron/icon.icns
git rm electron/icon-placeholder.txt
git commit -m "feat(electron): generate icons from favicon.svg for all platforms"
```

---

### Task 3: Delete the conflicting `publish.yml` workflow

**Files:**
- Delete: `.github/workflows/publish.yml`

- [ ] **Step 1: Delete and commit**

```bash
git rm .github/workflows/publish.yml
git commit -m "chore(ci): remove outdated publish.yml (superseded by build-desktop.yml)"
```

---

### Task 4: Fix version sync in `auto-release.yml`

**Files:**
- Modify: `.github/workflows/auto-release.yml`

- [ ] **Step 1: Replace the `Bump patch version and push tag` run block**

In `.github/workflows/auto-release.yml`, find the step named `Bump patch version and push tag` (lines 33–40). Replace its `run` block:

**Before:**
```yaml
      - name: Bump patch version and push tag
        run: |
          npm version patch --no-git-tag-version
          VERSION=$(node -p "require('./package.json').version")
          git add package.json package-lock.json
          git commit -m "chore: bump version to $VERSION [skip ci]"
          git tag "v$VERSION"
          git push origin main --follow-tags
```

**After:**
```yaml
      - name: Bump patch version and push tag
        run: |
          npm version patch --no-git-tag-version
          VERSION=$(node -p "require('./package.json').version")
          npm --prefix electron version $VERSION --no-git-tag-version
          git add package.json package-lock.json electron/package.json electron/package-lock.json
          git commit -m "chore: bump version to $VERSION [skip ci]"
          git tag "v$VERSION"
          git push origin main --follow-tags
```

- [ ] **Step 2: Verify YAML syntax**

```bash
cat .github/workflows/auto-release.yml
```

Expected: clean YAML, no indentation errors.

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/auto-release.yml
git commit -m "fix(ci): sync electron/package.json version on auto-release"
```

---

### Task 5: Add `dist-electron/` to `.gitignore` and smoke-test

**Files:**
- Modify: `.gitignore` (if `dist-electron` not already present)

- [ ] **Step 1: Add dist-electron to .gitignore**

```bash
grep -q "dist-electron" .gitignore || echo "dist-electron/" >> .gitignore
```

- [ ] **Step 2: Commit if changed**

```bash
git diff --quiet .gitignore || (git add .gitignore && git commit -m "chore: ignore dist-electron build output")
```

- [ ] **Step 3: Smoke-test — launch the app locally**

```bash
cd electron
npm start
```

Expected: Jujutsu Hunters window opens and game loads. Close with the window X button.

---

### Task 6: Verify CI is ready and trigger a build

**Files:** none

- [ ] **Step 1: Confirm only the correct workflows exist**

```bash
ls .github/workflows/
```

Expected: `auto-release.yml`, `build-desktop.yml`, `deploy.yml`. `publish.yml` must NOT be present.

- [ ] **Step 2: Confirm artifact paths match electron-builder output dir**

```bash
grep "dist-electron" .github/workflows/build-desktop.yml
```

Expected: lines with `dist-electron/*.exe`, `dist-electron/*.dmg`, `dist-electron/*.AppImage` — matching `"output": "../dist-electron"` in `electron/package.json`.

- [ ] **Step 3: Push a release tag to trigger the build**

```bash
git tag v1.0.9
git push origin v1.0.9
```

Expected: `build-desktop.yml` fires on GitHub Actions, producing three jobs (windows/mac/linux) and a `release` job that creates a GitHub Release with the installer assets attached.

---

## Completion Checklist

- [ ] `electron/main.js`, `electron/preload.js` committed to git
- [ ] `electron/package.json` + `electron/package-lock.json` committed with new devDeps
- [ ] `electron/generate-icons.js` committed
- [ ] `electron/icon.png`, `electron/icon.ico`, `electron/icon.icns` committed
- [ ] `electron/icon-placeholder.txt` deleted
- [ ] `.github/workflows/publish.yml` deleted
- [ ] `.github/workflows/auto-release.yml` updated to sync both package.json files
- [ ] `dist-electron/` in `.gitignore`
- [ ] App launches locally with `npm start`
- [ ] Release tag pushed and CI build triggered
