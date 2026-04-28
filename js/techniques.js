/* ============================================================
   JJK CURSED TECHNIQUES — replaces WDEFS
   Each technique has:
     - moves: array of unlockable moves (mastery levels 0-4)
     - Each move has: id, name, desc, dmg, rpm, range, acc, mag,
       auto, color, laserColor, vfx (visual effect type),
       masteryReq (0-4), special properties
   ============================================================ */

const WDEFS = (function() {
    // ── Technique definitions ──────────────────────────────────
    const TECHNIQUES = [

    // ── LIMITLESS (Gojo) ──────────────────────────────────────
    {
        id: 'limitless_base', name: 'Limitless: Cursed Energy', cat: 'special', tier: 'common',
        dmg: 22, rpm: 600, range: 80, acc: 0.88, mag: 40, price: 0, auto: true,
        color: 0x88ccff, laserColor: 0x00aaff,
        vfx: 'infinity_wave', masteryReq: 0,
        desc: 'Basic cursed energy manipulation — infinite convergence',
        techFamily: 'limitless',
    },
    {
        id: 'blue', name: 'Limitless: Blue', cat: 'special', tier: 'rare',
        dmg: 55, rpm: 120, range: 120, acc: 0.95, mag: 8, price: 0, auto: false,
        color: 0x0066ff, laserColor: 0x0044ff,
        vfx: 'blue_pull', masteryReq: 1,
        status: 'knockback',
        desc: 'Negative Space — pulls targets toward the convergence point',
        techFamily: 'limitless',
    },
    {
        id: 'red', name: 'Limitless: Red', cat: 'special', tier: 'rare',
        dmg: 80, rpm: 60, range: 100, acc: 0.92, mag: 5, price: 0, auto: false,
        color: 0xff2200, laserColor: 0xff4400,
        vfx: 'red_repulse', masteryReq: 2,
        explosive: true, splashRadius: 5,
        desc: 'Reversed Limitless — explosive repulsion blast',
        techFamily: 'limitless',
    },
    {
        id: 'hollow_purple', name: 'Hollow Purple', cat: 'special', tier: 'legendary',
        dmg: 280, rpm: 15, range: 300, acc: 0.99, mag: 1, price: 0, auto: false,
        color: 0xaa00ff, laserColor: 0xcc44ff,
        vfx: 'hollow_purple', masteryReq: 3,
        explosive: true, splashRadius: 12, pierce: true,
        desc: 'Blue + Red convergence — erases everything in its path',
        techFamily: 'limitless',
    },
    {
        id: 'unlimited_void', name: 'Unlimited Void', cat: 'special', tier: 'legendary',
        dmg: 40, rpm: 1800, range: 60, acc: 1.0, mag: 200, price: 0, auto: true,
        color: 0x88ccff, laserColor: 0xffffff,
        vfx: 'unlimited_void', masteryReq: 4,
        status: 'slow',
        desc: 'Domain Expansion — infinite information paralyzes all enemies',
        techFamily: 'limitless',
    },

    // ── MALEVOLENT SHRINE (Sukuna) ────────────────────────────
    {
        id: 'dismantle', name: 'Dismantle', cat: 'melee', tier: 'common',
        dmg: 55, rpm: 360, range: 4.5, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xff4444, laserColor: 0xff2200,
        vfx: 'slash_red', masteryReq: 0,
        desc: 'Slashing cursed energy — precise cuts through anything',
        techFamily: 'shrine',
    },
    {
        id: 'cleave', name: 'Cleave', cat: 'melee', tier: 'rare',
        dmg: 95, rpm: 180, range: 6.0, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xff6600, laserColor: 0xff4400,
        vfx: 'cleave_arc', masteryReq: 1,
        desc: 'Adaptive slash — scales damage to target\'s durability',
        techFamily: 'shrine',
    },
    {
        id: 'shrine_flames', name: 'Shrine Flames', cat: 'special', tier: 'epic',
        dmg: 12, rpm: 900, range: 22, acc: 0.85, mag: 80, price: 0, auto: true,
        color: 0xff4400, laserColor: 0xff6600,
        vfx: 'black_flames', masteryReq: 2,
        status: 'burn',
        desc: 'Black flames — incinerates everything within the shrine\'s range',
        techFamily: 'shrine',
    },
    {
        id: 'malevolent_shrine', name: 'Malevolent Shrine', cat: 'special', tier: 'legendary',
        dmg: 35, rpm: 1200, range: 80, acc: 1.0, mag: 300, price: 0, auto: true,
        color: 0xff2200, laserColor: 0xff4400,
        vfx: 'malevolent_shrine', masteryReq: 3,
        status: 'burn', explosive: true, splashRadius: 3,
        desc: 'Domain Expansion — Dismantle and Cleave rain down on all enemies',
        techFamily: 'shrine',
    },

    // ── IDLE TRANSFIGURATION (Mahito) ─────────────────────────
    {
        id: 'soul_punch', name: 'Soul Punch', cat: 'melee', tier: 'common',
        dmg: 45, rpm: 480, range: 3.5, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xaa66ff, laserColor: 0x8844ff,
        vfx: 'soul_distort', masteryReq: 0,
        desc: 'Direct soul contact — distorts the target\'s shape',
        techFamily: 'idle_transf',
    },
    {
        id: 'body_repel', name: 'Body Repel', cat: 'special', tier: 'rare',
        dmg: 60, rpm: 120, range: 15, acc: 0.88, mag: 10, price: 0, auto: false,
        color: 0xcc88ff, laserColor: 0xaa66ff,
        vfx: 'body_repel', masteryReq: 1,
        status: 'knockback', explosive: true, splashRadius: 4,
        desc: 'Transfigures nearby souls — explosive repulsion',
        techFamily: 'idle_transf',
    },
    {
        id: 'polymorphic_soul', name: 'Polymorphic Soul Isomer', cat: 'special', tier: 'epic',
        dmg: 30, rpm: 300, range: 40, acc: 0.90, mag: 20, price: 0, auto: false,
        color: 0x8844ff, laserColor: 0xaa66ff,
        vfx: 'soul_isomer', masteryReq: 2,
        pierce: true,
        desc: 'Launches transfigured humans as projectiles',
        techFamily: 'idle_transf',
    },
    {
        id: 'self_embodiment', name: 'Self-Embodiment of Perfection', cat: 'special', tier: 'legendary',
        dmg: 25, rpm: 1500, range: 50, acc: 1.0, mag: 200, price: 0, auto: true,
        color: 0xaa44ff, laserColor: 0xcc88ff,
        vfx: 'transfig_domain', masteryReq: 3,
        status: 'slow',
        desc: 'Domain Expansion — all souls within are transfigured',
        techFamily: 'idle_transf',
    },

    // ── TEN SHADOWS (Megumi) ──────────────────────────────────
    {
        id: 'divine_dogs', name: 'Divine Dogs', cat: 'special', tier: 'common',
        dmg: 35, rpm: 480, range: 60, acc: 0.85, mag: 30, price: 0, auto: true,
        color: 0x3333ff, laserColor: 0x5555ff,
        vfx: 'shadow_dog', masteryReq: 0,
        desc: 'Summons Divine Dogs — shadow hounds that track enemies',
        techFamily: 'ten_shadows',
    },
    {
        id: 'nue', name: 'Nue', cat: 'special', tier: 'rare',
        dmg: 65, rpm: 180, range: 90, acc: 0.88, mag: 12, price: 0, auto: false,
        color: 0x4444ff, laserColor: 0x6666ff,
        vfx: 'nue_lightning', masteryReq: 1,
        chain: true,
        desc: 'Nue — winged shadow that strikes with lightning',
        techFamily: 'ten_shadows',
    },
    {
        id: 'great_serpent', name: 'Great Serpent', cat: 'special', tier: 'epic',
        dmg: 90, rpm: 90, range: 50, acc: 0.92, mag: 6, price: 0, auto: false,
        color: 0x2222aa, laserColor: 0x4444cc,
        vfx: 'serpent_bind', masteryReq: 2,
        status: 'slow', explosive: true, splashRadius: 5,
        desc: 'Great Serpent — constricts and crushes enemies',
        techFamily: 'ten_shadows',
    },
    {
        id: 'chimera_shadow', name: 'Chimera Shadow Garden', cat: 'special', tier: 'legendary',
        dmg: 45, rpm: 600, range: 70, acc: 0.95, mag: 100, price: 0, auto: true,
        color: 0x1111aa, laserColor: 0x3333ff,
        vfx: 'chimera_domain', masteryReq: 3,
        pierce: true, status: 'slow',
        desc: 'Domain Expansion — shadow world where all shikigami are amplified',
        techFamily: 'ten_shadows',
    },

    // ── BLOOD MANIPULATION (Nobara/Noritoshi) ─────────────────
    {
        id: 'straw_doll', name: 'Straw Doll Technique', cat: 'special', tier: 'common',
        dmg: 30, rpm: 360, range: 70, acc: 0.88, mag: 20, price: 0, auto: false,
        color: 0xff6688, laserColor: 0xff4466,
        vfx: 'nail_spike', masteryReq: 0,
        desc: 'Drives nails through a straw doll — damages the cursed target',
        techFamily: 'blood_manip',
    },
    {
        id: 'resonance', name: 'Resonance', cat: 'special', tier: 'rare',
        dmg: 70, rpm: 120, range: 80, acc: 0.92, mag: 8, price: 0, auto: false,
        color: 0xff4466, laserColor: 0xff2244,
        vfx: 'blood_resonance', masteryReq: 1,
        explosive: true, splashRadius: 4,
        desc: 'Amplifies the nail curse — resonates through the target\'s body',
        techFamily: 'blood_manip',
    },
    {
        id: 'blood_edge', name: 'Blood Edge', cat: 'melee', tier: 'epic',
        dmg: 85, rpm: 240, range: 5.0, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xcc2244, laserColor: 0xff4466,
        vfx: 'blood_blade', masteryReq: 2,
        status: 'burn',
        desc: 'Hardens blood into razor-sharp blades',
        techFamily: 'blood_manip',
    },
    {
        id: 'blood_meteor', name: 'Blood Meteor', cat: 'special', tier: 'legendary',
        dmg: 200, rpm: 20, range: 150, acc: 0.97, mag: 3, price: 0, auto: false,
        color: 0xff0044, laserColor: 0xff2266,
        vfx: 'blood_meteor', masteryReq: 3,
        explosive: true, splashRadius: 10,
        desc: 'Condenses blood into a massive projectile — catastrophic impact',
        techFamily: 'blood_manip',
    },

    // ── RATIO TECHNIQUE (Nanami) ──────────────────────────────
    {
        id: 'ratio_strike', name: 'Ratio Technique', cat: 'melee', tier: 'common',
        dmg: 60, rpm: 300, range: 4.0, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xffdd88, laserColor: 0xffcc44,
        vfx: 'ratio_line', masteryReq: 0,
        desc: 'Divides the target at the 7:3 ratio — guaranteed weak point strike',
        techFamily: 'ratio',
    },
    {
        id: 'overtime', name: 'Overtime', cat: 'melee', tier: 'rare',
        dmg: 110, rpm: 180, range: 5.0, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xffcc44, laserColor: 0xffaa00,
        vfx: 'overtime_slash', masteryReq: 1,
        desc: 'After-hours — removes the 7:3 limit, unleashing full power',
        techFamily: 'ratio',
    },
    {
        id: 'binding_vow', name: 'Binding Vow Strike', cat: 'special', tier: 'epic',
        dmg: 140, rpm: 90, range: 30, acc: 0.95, mag: 6, price: 0, auto: false,
        color: 0xffaa00, laserColor: 0xffcc44,
        vfx: 'binding_vow', masteryReq: 2,
        explosive: true, splashRadius: 6,
        desc: 'Binding vow amplifies the technique — massive cursed energy release',
        techFamily: 'ratio',
    },

    // ── CURSED SPEECH (Inumaki) ───────────────────────────────
    {
        id: 'dont_move', name: 'Don\'t Move', cat: 'special', tier: 'common',
        dmg: 15, rpm: 240, range: 50, acc: 0.90, mag: 20, price: 0, auto: false,
        color: 0x88ffcc, laserColor: 0x44ffaa,
        vfx: 'speech_wave', masteryReq: 0,
        status: 'slow',
        desc: 'Cursed speech — compels the target to stop moving',
        techFamily: 'cursed_speech',
    },
    {
        id: 'blast_away', name: 'Blast Away', cat: 'special', tier: 'rare',
        dmg: 50, rpm: 120, range: 60, acc: 0.88, mag: 10, price: 0, auto: false,
        color: 0x44ffcc, laserColor: 0x00ffaa,
        vfx: 'speech_blast', masteryReq: 1,
        status: 'knockback', explosive: true, splashRadius: 5,
        desc: 'Cursed speech — forces the target to be blown away',
        techFamily: 'cursed_speech',
    },
    {
        id: 'die', name: 'Die', cat: 'special', tier: 'legendary',
        dmg: 999, rpm: 10, range: 40, acc: 0.85, mag: 1, price: 0, auto: false,
        color: 0x00ffaa, laserColor: 0x44ffcc,
        vfx: 'speech_die', masteryReq: 3,
        desc: 'The ultimate cursed speech — instant death command',
        techFamily: 'cursed_speech',
    },

    // ── PROJECTION SORCERY (Naoya) ────────────────────────────
    {
        id: 'projection_rush', name: 'Projection Rush', cat: 'melee', tier: 'common',
        dmg: 40, rpm: 600, range: 3.5, acc: 1.0, mag: Infinity, price: 0, auto: true,
        color: 0xffff44, laserColor: 0xffff00,
        vfx: 'projection_blur', masteryReq: 0,
        desc: 'Divides movement into 24 frames — superhuman speed strikes',
        techFamily: 'projection',
    },
    {
        id: 'projection_freeze', name: 'Projection Freeze', cat: 'special', tier: 'rare',
        dmg: 25, rpm: 300, range: 20, acc: 0.92, mag: 15, price: 0, auto: false,
        color: 0xffff00, laserColor: 0xffff44,
        vfx: 'projection_freeze', masteryReq: 1,
        status: 'slow',
        desc: 'Locks targets in a single frame — frozen in time',
        techFamily: 'projection',
    },

    // ── TOOL MANIPULATION (Maki) ──────────────────────────────
    {
        id: 'spear_thrust', name: 'Dragon-Bone Spear', cat: 'melee', tier: 'common',
        dmg: 65, rpm: 240, range: 6.0, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xaaaacc, laserColor: 0x8888aa,
        vfx: 'spear_thrust', masteryReq: 0,
        desc: 'Special grade cursed tool — pierces through cursed energy',
        techFamily: 'tool_manip',
    },
    {
        id: 'playful_cloud', name: 'Playful Cloud', cat: 'melee', tier: 'epic',
        dmg: 120, rpm: 150, range: 5.5, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xccccee, laserColor: 0xaaaacc,
        vfx: 'cloud_strike', masteryReq: 2,
        desc: 'Special grade three-section staff — amplifies physical strength',
        techFamily: 'tool_manip',
    },

    // ── REVERSE CURSED TECHNIQUE (Yuta) ──────────────────────
    {
        id: 'rika_slash', name: 'Rika: Slash', cat: 'melee', tier: 'common',
        dmg: 70, rpm: 300, range: 5.0, acc: 1.0, mag: Infinity, price: 0, auto: false,
        color: 0xffffff, laserColor: 0xeeeeff,
        vfx: 'rika_claw', masteryReq: 0,
        desc: 'Rika\'s cursed energy manifests as devastating slashes',
        techFamily: 'copy',
    },
    {
        id: 'rika_beam', name: 'Rika: Cursed Beam', cat: 'special', tier: 'rare',
        dmg: 85, rpm: 120, range: 100, acc: 0.95, mag: 10, price: 0, auto: false,
        color: 0xeeeeff, laserColor: 0xffffff,
        vfx: 'rika_beam', masteryReq: 1,
        pierce: true,
        desc: 'Rika fires a concentrated beam of cursed energy',
        techFamily: 'copy',
    },
    {
        id: 'true_mutual_love', name: 'True Mutual Love', cat: 'special', tier: 'legendary',
        dmg: 50, rpm: 900, range: 80, acc: 1.0, mag: 150, price: 0, auto: true,
        color: 0xffffff, laserColor: 0xccccff,
        vfx: 'true_love_domain', masteryReq: 3,
        pierce: true, chain: true,
        desc: 'Domain Expansion — Rika\'s full power unleashed',
        techFamily: 'copy',
    },

    ];

    return TECHNIQUES;
})();
