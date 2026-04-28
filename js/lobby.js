'use strict';
/* ============================================================
   HUNTERS — Walkable 3D Lobby
   Zones the player can physically walk into:
     - MISSIONS  (north, blue portal)
     - BOSSES    (east, red portal)
     - TECHNIQUES (south, purple portal)
     - MARKET    (west, gold portal)
   ============================================================ */
(function () {

// ── Zone definitions ──────────────────────────────────────────
const ZONES = [
    {
        id: 'missions',
        label: 'MISSIONS',
        sub: 'Walk in for 3 random quests',
        pos: { x: 0, z: -22 },
        color: 0x2563eb,
        emissive: 0x1144ff,
        icon: '📋',
        radius: 3.5,
    },
    {
        id: 'bosses',
        label: 'BOSS HUNT',
        sub: 'Choose your JJK boss',
        pos: { x: 22, z: 0 },
        color: 0xdc2626,
        emissive: 0xff2200,
        icon: '👹',
        radius: 3.5,
    },
    {
        id: 'techniques',
        label: 'TECHNIQUES',
        sub: 'Cursed technique mastery',
        pos: { x: 0, z: 22 },
        color: 0x7c3aed,
        emissive: 0x8800ff,
        icon: '⚡',
        radius: 3.5,
    },
    {
        id: 'market',
        label: 'NPC MARKET',
        sub: 'Spend your coins',
        pos: { x: -22, z: 0 },
        color: 0xd97706,
        emissive: 0xffaa00,
        icon: '🏪',
        radius: 3.5,
    },
];

// ── Random quest pool ─────────────────────────────────────────
const QUEST_POOL = [
    { name: 'Cursed Spirit Purge', desc: 'Eliminate 5 cursed spirits in Jujutsu High', map: 'arena', bots: 5, diff: 'easy', mode: 'elimination', reward: 300 },
    { name: 'Zenin Estate Raid', desc: 'Clear the Zenin Estate of 8 enemies', map: 'warehouse', bots: 8, diff: 'medium', mode: 'elimination', reward: 500 },
    { name: 'Shibuya Survivor', desc: 'Survive 3 waves in Shibuya', map: 'rooftop', bots: 6, diff: 'medium', mode: 'survival', reward: 600 },
    { name: 'Cursed Tomb Hunt', desc: 'Hunt down 10 spirits in the desert tomb', map: 'desert', bots: 10, diff: 'hard', mode: 'elimination', reward: 700 },
    { name: 'Tokyo Colony Blitz', desc: 'Most kills in 2 minutes in Tokyo Colony', map: 'neon', bots: 8, diff: 'hard', mode: 'timed', reward: 650 },
    { name: 'Domain Siege', desc: 'Survive 5 waves in the Frost Domain', map: 'ice', bots: 6, diff: 'hard', mode: 'survival', reward: 800 },
    { name: 'Temple Exorcism', desc: 'Purge the Cursed Shrine of all spirits', map: 'temple', bots: 7, diff: 'medium', mode: 'elimination', reward: 550 },
    { name: 'Void Realm Escape', desc: 'Survive 3 waves in the Void Realm', map: 'space', bots: 5, diff: 'hard', mode: 'survival', reward: 750 },
    { name: 'Speed Exorcism', desc: 'Eliminate 6 spirits in under 90 seconds', map: 'arena', bots: 6, diff: 'medium', mode: 'timed', reward: 450 },
    { name: 'Culling Colony', desc: 'Dominate the Culling Arena', map: 'culling_arena', bots: 12, diff: 'extreme', mode: 'culling', reward: 1200 },
    { name: 'Mahito Encounter', desc: 'Survive waves of Mahito clones', map: 'warehouse', bots: 8, diff: 'hard', mode: 'survival', reward: 900 },
    { name: 'Geto Ritual', desc: 'Stop Geto\'s cursed spirit ritual', map: 'temple', bots: 10, diff: 'hard', mode: 'elimination', reward: 850 },
];

// ── Boss definitions ──────────────────────────────────────────
const BOSS_DEFS = [
    { id: 'gojo',   name: 'Satoru Gojo',   desc: 'Six Eyes · Infinity · Unlimited Void', map: 'arena',    diff: 'extreme', color: '#88ccff', icon: '🔵' },
    { id: 'sukuna', name: 'Ryomen Sukuna', desc: 'Malevolent Shrine · Dismantle · Cleave', map: 'temple',  diff: 'extreme', color: '#ff4444', icon: '🔴' },
    { id: 'mahito', name: 'Mahito',        desc: 'Idle Transfiguration · Soul Distortion', map: 'warehouse', diff: 'hard', color: '#aa66ff', icon: '🟣' },
    { id: 'toji',   name: 'Toji Fushiguro', desc: 'Heavenly Restriction · Inventory Curse', map: 'rooftop', diff: 'hard', color: '#222222', icon: '⚫' },
    { id: 'geto',   name: 'Suguru Geto',   desc: 'Cursed Spirit Manipulation · Maximum Uzumaki', map: 'neon', diff: 'hard', color: '#5500aa', icon: '🟤' },
    { id: 'yuta',   name: 'Yuta Okkotsu',  desc: 'Rika · Copy · Reverse Cursed Technique', map: 'ice',    diff: 'hard', color: '#ffffff', icon: '⚪' },
    { id: 'nanami', name: 'Kento Nanami',  desc: 'Ratio Technique · Overtime', map: 'desert',  diff: 'medium', color: '#ffdd88', icon: '🟡' },
    { id: 'megumi', name: 'Megumi Fushiguro', desc: 'Ten Shadows · Divine Dogs · Chimera Shadow Garden', map: 'temple', diff: 'medium', color: '#3333ff', icon: '🔷' },
    { id: 'yuji',   name: 'Yuji Itadori',  desc: 'Divergent Fist · Black Flash · Sukuna vessel', map: 'arena', diff: 'medium', color: '#ff8888', icon: '🟠' },
];

// ── Lobby state ───────────────────────────────────────────────
let lScene, lRenderer, lCamera, lAnimId;
let lobbyActive = false;
let playerPos = { x: 0, z: 0 };
let playerYaw = 0;
let keys = {};
let mouseDX = 0;
let pointerLocked = false;
let zoneMeshes = [];
let portalParticles = [];
let currentZoneOverlay = null;
let activeZone = null;
let lastZone = null;
let _questsForSession = [];

// ── Build lobby world ─────────────────────────────────────────
function buildLobbyWorld() {
    const THREE = window.THREE;
    lScene = new THREE.Scene();
    lScene.fog = new THREE.FogExp2(0x04020a, 0.018);
    lScene.background = new THREE.Color(0x04020a);

    // Lighting
    lScene.add(new THREE.AmbientLight(0x221133, 1.5));
    const sun = new THREE.DirectionalLight(0x8866ff, 2.0);
    sun.position.set(10, 20, 10);
    sun.castShadow = true;
    lScene.add(sun);

    // Floor — large dark stone
    const floorGeo = new THREE.PlaneGeometry(80, 80, 40, 40);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x0a0618, roughness: 0.95, metalness: 0.05 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    lScene.add(floor);

    // Ritual circle rings on floor
    [5, 10, 16, 22, 28].forEach((r, i) => {
        const geo = new THREE.RingGeometry(r - 0.08, r + 0.08, 80);
        const mat = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x7c3aed : 0x2563eb,
            side: THREE.DoubleSide, transparent: true, opacity: 0.3 - i * 0.04
        });
        const ring = new THREE.Mesh(geo, mat);
        ring.rotation.x = -Math.PI / 2;
        ring.position.y = 0.01;
        lScene.add(ring);
    });

    // Pillars around the outer ring
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const r = 26;
        const px = Math.cos(angle) * r;
        const pz = Math.sin(angle) * r;
        const pillarGeo = new THREE.CylinderGeometry(0.25, 0.3, 8, 8);
        const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1a0f2e, roughness: 0.7 });
        const pillar = new THREE.Mesh(pillarGeo, pillarMat);
        pillar.position.set(px, 4, pz);
        pillar.castShadow = true;
        lScene.add(pillar);
        // Orb on top
        const orbGeo = new THREE.SphereGeometry(0.3, 12, 12);
        const orbMat = new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0x7c3aed : i % 3 === 1 ? 0x2563eb : 0x06b6d4 });
        const orb = new THREE.Mesh(orbGeo, orbMat);
        orb.position.set(px, 8.3, pz);
        lScene.add(orb);
        // Point light from orb
        const orbLight = new THREE.PointLight(orbMat.color, 0.8, 8);
        orbLight.position.set(px, 8, pz);
        lScene.add(orbLight);
    }

    // Central platform
    const platGeo = new THREE.CylinderGeometry(2.5, 2.8, 0.3, 32);
    const platMat = new THREE.MeshStandardMaterial({ color: 0x2a1550, roughness: 0.5, metalness: 0.4, emissive: 0x7c3aed, emissiveIntensity: 0.2 });
    const plat = new THREE.Mesh(platGeo, platMat);
    plat.position.set(0, 0.15, 0);
    lScene.add(plat);

    // Zone portals
    ZONES.forEach(zone => {
        buildZonePortal(zone);
    });

    // Floating particles
    buildParticles();
}

function buildZonePortal(zone) {
    const THREE = window.THREE;
    const group = new THREE.Group();
    group.position.set(zone.pos.x, 0, zone.pos.z);

    // Portal arch — two pillars + top beam
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1a0f2e, roughness: 0.6 });
    [-1.2, 1.2].forEach(ox => {
        const pg = new THREE.CylinderGeometry(0.2, 0.25, 5, 8);
        const pm = new THREE.Mesh(pg, pillarMat);
        pm.position.set(ox, 2.5, 0);
        pm.castShadow = true;
        group.add(pm);
    });
    const beamGeo = new THREE.BoxGeometry(3.2, 0.3, 0.3);
    const beam = new THREE.Mesh(beamGeo, pillarMat);
    beam.position.set(0, 5.15, 0);
    group.add(beam);

    // Portal plane — glowing oval
    const portalGeo = new THREE.PlaneGeometry(2.2, 3.8);
    const portalMat = new THREE.MeshBasicMaterial({
        color: zone.color,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
    });
    const portal = new THREE.Mesh(portalGeo, portalMat);
    portal.position.set(0, 2.5, 0);
    group.add(portal);
    zone._portalMesh = portal;
    zone._portalMat = portalMat;

    // Portal glow light
    const light = new THREE.PointLight(zone.color, 2.5, 12);
    light.position.set(0, 2.5, 0);
    group.add(light);
    zone._light = light;

    // Zone label sprite
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, 512, 128);
    ctx.font = 'bold 52px Segoe UI';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(zone.icon + ' ' + zone.label, 256, 60);
    ctx.font = '28px Segoe UI';
    ctx.fillStyle = 'rgba(200,180,255,0.8)';
    ctx.fillText(zone.sub, 256, 100);
    const tex = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: tex, transparent: true });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(6, 1.5, 1);
    sprite.position.set(0, 6.5, 0);
    group.add(sprite);

    // Ground ring indicator
    const ringGeo = new THREE.RingGeometry(zone.radius - 0.1, zone.radius + 0.1, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: zone.color, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    group.add(ring);
    zone._ringMesh = ring;
    zone._ringMat = ringMat;

    lScene.add(group);
    zone._group = group;
    zoneMeshes.push(zone);
}

function buildParticles() {
    const THREE = window.THREE;
    const count = 300;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const r = 3 + Math.random() * 24;
        pos[i * 3]     = Math.cos(a) * r;
        pos[i * 3 + 1] = Math.random() * 10;
        pos[i * 3 + 2] = Math.sin(a) * r;
        vel[i * 3 + 1] = 0.5 + Math.random() * 1.5;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0x7c3aed, size: 0.1, transparent: true, opacity: 0.7 });
    const pts = new THREE.Points(geo, mat);
    lScene.add(pts);
    portalParticles = { geo, pos, vel, count };
}

// ── Renderer setup ────────────────────────────────────────────
function initLobbyRenderer() {
    const THREE = window.THREE;
    if (lRenderer) return;

    const canvas = document.getElementById('lobby-canvas');
    if (!canvas) return;

    lRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    lRenderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    lRenderer.setSize(innerWidth, innerHeight);
    lRenderer.shadowMap.enabled = true;
    lRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    lRenderer.toneMappingExposure = 1.3;

    lCamera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 200);
    lCamera.position.set(0, 1.7, 0);

    window.addEventListener('resize', () => {
        lRenderer.setSize(innerWidth, innerHeight);
        lCamera.aspect = innerWidth / innerHeight;
        lCamera.updateProjectionMatrix();
    });

    buildLobbyWorld();
    bindLobbyInput(canvas);
}

// ── Input ─────────────────────────────────────────────────────
function bindLobbyInput(canvas) {
    document.addEventListener('keydown', e => {
        keys[e.code] = true;
        if (e.code === 'Escape' && lobbyActive) {
            closeZoneOverlay();
        }
    });
    document.addEventListener('keyup', e => { keys[e.code] = false; });

    canvas.addEventListener('click', () => {
        if (lobbyActive && !currentZoneOverlay) {
            canvas.requestPointerLock();
        }
    });

    document.addEventListener('pointerlockchange', () => {
        pointerLocked = document.pointerLockElement === canvas;
    });

    document.addEventListener('mousemove', e => {
        if (!pointerLocked || !lobbyActive) return;
        playerYaw -= e.movementX * 0.002;
        mouseDX = e.movementX;
    });
}

// ── Lobby loop ────────────────────────────────────────────────
function lobbyLoop(t) {
    if (!lobbyActive) return;
    lAnimId = requestAnimationFrame(lobbyLoop);

    const dt = 0.016;
    const THREE = window.THREE;

    // Player movement
    if (!currentZoneOverlay) {
        const speed = 7;
        const fwd = new THREE.Vector3(-Math.sin(playerYaw), 0, -Math.cos(playerYaw));
        const right = new THREE.Vector3(Math.cos(playerYaw), 0, -Math.sin(playerYaw));
        const move = new THREE.Vector3();
        if (keys['KeyW'] || keys['ArrowUp'])    move.addScaledVector(fwd, speed * dt);
        if (keys['KeyS'] || keys['ArrowDown'])  move.addScaledVector(fwd, -speed * dt);
        if (keys['KeyA'] || keys['ArrowLeft'])  move.addScaledVector(right, -speed * dt);
        if (keys['KeyD'] || keys['ArrowRight']) move.addScaledVector(right, speed * dt);

        // Clamp to lobby bounds
        playerPos.x = Math.max(-28, Math.min(28, playerPos.x + move.x));
        playerPos.z = Math.max(-28, Math.min(28, playerPos.z + move.z));

        lCamera.position.set(playerPos.x, 1.7, playerPos.z);
        lCamera.rotation.order = 'YXZ';
        lCamera.rotation.y = playerYaw;
        lCamera.rotation.x = 0;
    }

    // Animate portals
    const pulse = Math.sin(t * 0.002) * 0.5 + 0.5;
    ZONES.forEach(zone => {
        if (zone._portalMat) zone._portalMat.opacity = 0.25 + pulse * 0.25;
        if (zone._light) zone._light.intensity = 1.5 + pulse * 2.0;
        if (zone._ringMat) {
            const dist = Math.sqrt(
                (playerPos.x - zone.pos.x) ** 2 +
                (playerPos.z - zone.pos.z) ** 2
            );
            const near = dist < zone.radius + 4;
            zone._ringMat.opacity = near ? 0.8 + pulse * 0.2 : 0.3 + pulse * 0.2;
        }
    });

    // Animate particles
    if (portalParticles.pos) {
        const p = portalParticles;
        for (let i = 0; i < p.count; i++) {
            p.pos[i * 3 + 1] += p.vel[i * 3 + 1] * dt;
            if (p.pos[i * 3 + 1] > 12) p.pos[i * 3 + 1] = 0;
        }
        p.geo.attributes.position.needsUpdate = true;
    }

    // Zone proximity check
    checkZoneProximity();

    lRenderer.render(lScene, lCamera);
}

// ── Zone proximity ────────────────────────────────────────────
function checkZoneProximity() {
    let nearZone = null;
    let nearDist = Infinity;

    ZONES.forEach(zone => {
        const dist = Math.sqrt(
            (playerPos.x - zone.pos.x) ** 2 +
            (playerPos.z - zone.pos.z) ** 2
        );
        if (dist < zone.radius && dist < nearDist) {
            nearDist = dist;
            nearZone = zone;
        }
    });

    if (nearZone && nearZone !== activeZone) {
        activeZone = nearZone;
        // Show proximity hint
        const hint = document.getElementById('lobby-zone-hint');
        if (hint) { hint.style.display = 'block'; hint.textContent = nearZone.icon + ' Walk into ' + nearZone.label + ' portal'; }
        triggerZone(nearZone);
    } else if (!nearZone && activeZone) {
        activeZone = null;
        const hint = document.getElementById('lobby-zone-hint');
        if (hint) hint.style.display = 'none';
    }
}

function triggerZone(zone) {
    if (currentZoneOverlay) return;
    document.exitPointerLock();

    switch (zone.id) {
        case 'missions':  showMissionsOverlay(); break;
        case 'bosses':    showBossesOverlay();   break;
        case 'techniques': showTechniquesOverlay(); break;
        case 'market':    closeAndGo('s-shop');  break;
    }
}

// ── Missions overlay ──────────────────────────────────────────
function getRandomQuests() {
    const shuffled = [...QUEST_POOL].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
}

function showMissionsOverlay() {
    _questsForSession = getRandomQuests();
    const html = `
    <div class="lob-overlay-inner">
        <div class="lob-ov-title">📋 MISSIONS</div>
        <div class="lob-ov-sub">Choose a mission — complete it to earn coins</div>
        <div style="display:flex;flex-direction:column;gap:14px;margin-top:20px;">
            ${_questsForSession.map((q, i) => `
            <div class="lob-quest-card" onclick="window._lobbyStartQuest(${i})">
                <div class="lob-quest-name">${q.name}</div>
                <div class="lob-quest-desc">${q.desc}</div>
                <div class="lob-quest-meta">
                    <span style="color:#ffcc00">💰 ${q.reward} coins</span>
                    <span style="color:#9d8ec4;margin-left:12px">${q.diff.toUpperCase()} · ${q.mode}</span>
                </div>
            </div>`).join('')}
        </div>
        <button class="lob-ov-close" onclick="window._lobbyCloseOverlay()">✕ LEAVE</button>
    </div>`;
    showOverlay(html);
}

window._lobbyStartQuest = function(idx) {
    const q = _questsForSession[idx];
    if (!q || typeof G === 'undefined') return;
    closeZoneOverlay();
    // Use G.showPreplay path so map lookup happens inside the game scope
    G.selDiff = q.diff;
    G.selBots = q.bots;
    G.selMode = q.mode;
    G._questReward = q.reward;
    G._questName = q.name;
    // Find map index — G has access to MDEFS internally
    if (typeof G._setMapByName === 'function') {
        G._setMapByName(q.map);
    } else {
        // Fallback: set via preplay then override
        G._pendingMapId = q.map;
    }
    G.startMatch();
};

// ── Bosses overlay ────────────────────────────────────────────
function showBossesOverlay() {
    const html = `
    <div class="lob-overlay-inner">
        <div class="lob-ov-title">👹 BOSS HUNT</div>
        <div class="lob-ov-sub">Choose your opponent — defeat them to earn coins</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:20px;">
            ${BOSS_DEFS.map(b => `
            <div class="lob-boss-card" onclick="window._lobbyStartBoss('${b.id}')">
                <div style="font-size:28px;margin-bottom:6px">${b.icon}</div>
                <div class="lob-boss-name" style="color:${b.color}">${b.name}</div>
                <div class="lob-boss-desc">${b.desc}</div>
                <div style="font-size:10px;color:#9d8ec4;margin-top:4px">${b.diff.toUpperCase()}</div>
            </div>`).join('')}
        </div>
        <button class="lob-ov-close" onclick="window._lobbyCloseOverlay()">✕ LEAVE</button>
    </div>`;
    showOverlay(html);
}

window._lobbyStartBoss = function(bossId) {
    const boss = BOSS_DEFS.find(b => b.id === bossId);
    if (!boss || typeof G === 'undefined') return;
    closeZoneOverlay();
    G.selDiff = boss.diff;
    G.selBots = 1;
    G.selMode = 'elimination';
    G._bossMode = true;
    G._bossType = bossId;
    G._questReward = 800;
    G._questName = 'Boss Hunt: ' + boss.name;
    if (typeof G._setMapByName === 'function') {
        G._setMapByName(boss.map);
    } else {
        G._pendingMapId = boss.map;
    }
    G.startMatch();
};

// ── Techniques overlay ────────────────────────────────────────
function showTechniquesOverlay() {
    if (typeof G === 'undefined') return;
    closeZoneOverlay();
    G.showScreen('s-customize');
}

// ── Overlay helpers ───────────────────────────────────────────
function showOverlay(html) {
    let el = document.getElementById('lobby-zone-overlay');
    if (!el) {
        el = document.createElement('div');
        el.id = 'lobby-zone-overlay';
        el.style.cssText = `
            position:fixed;inset:0;z-index:200;
            display:flex;align-items:center;justify-content:center;
            background:rgba(4,2,10,0.88);backdrop-filter:blur(12px);
        `;
        document.body.appendChild(el);
    }
    el.innerHTML = html;
    el.style.display = 'flex';
    currentZoneOverlay = el;
}

function closeZoneOverlay() {
    const el = document.getElementById('lobby-zone-overlay');
    if (el) el.style.display = 'none';
    currentZoneOverlay = null;
    activeZone = null;
}
window._lobbyCloseOverlay = closeZoneOverlay;

function closeAndGo(screenId) {
    closeZoneOverlay();
    if (typeof G !== 'undefined') G.showScreen(screenId);
}

// ── Lifecycle ─────────────────────────────────────────────────
window._lobbyScene = {
    start() {
        lobbyActive = true;
        playerPos = { x: 0, z: 0 };
        playerYaw = 0;
        keys = {};
        activeZone = null;
        currentZoneOverlay = null;
        closeZoneOverlay();
        initLobbyRenderer();
        if (!lAnimId) lobbyLoop(performance.now());
    },
    stop() {
        lobbyActive = false;
        if (lAnimId) { cancelAnimationFrame(lAnimId); lAnimId = null; }
        document.exitPointerLock();
        closeZoneOverlay();
    }
};

})();
