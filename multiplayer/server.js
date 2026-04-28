// =============================================================================
// HUNTERS — Multiplayer WebSocket Server
// Standalone Node.js server. Deploy to Railway (uses process.env.PORT).
// Run: node multiplayer/server.js
// =============================================================================

'use strict';

const http   = require('http');
const crypto = require('crypto');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 8080;

// ── Utilities ─────────────────────────────────────────────────────────────────

function genCode() {
  return crypto.randomBytes(3).toString('hex').toUpperCase(); // 6-char hex
}

function send(ws, obj) {
  if (ws.readyState === 1 /* OPEN */) {
    try { ws.send(JSON.stringify(obj)); } catch (_) {}
  }
}

function broadcast(room, obj, excludeId) {
  const msg = JSON.stringify(obj);
  for (const [id, p] of room.players) {
    if (id === excludeId) continue;
    if (p.ws.readyState === 1) {
      try { p.ws.send(msg); } catch (_) {}
    }
  }
}

function broadcastAll(room, obj) {
  broadcast(room, obj, null);
}

function roomSummary(room) {
  return {
    code:        room.code,
    mode:        room.mode,
    map:         room.map,
    playerCount: room.players.size,
    maxPlayers:  room.maxPlayers,
    status:      room.status,
    difficulty:  room.difficulty,
  };
}

function roomStateMsg(room) {
  const players = [];
  for (const [id, p] of room.players) {
    players.push({ id, username: p.username, character: p.character, ready: p.ready, isHost: id === room.host });
  }
  return {
    type: 'roomState',
    room: {
      code:       room.code,
      mode:       room.mode,
      map:        room.map,
      difficulty: room.difficulty,
      maxPlayers: room.maxPlayers,
      isPublic:   room.isPublic,
      status:     room.status,
      host:       room.host,
      players,
    },
  };
}

// ── State ─────────────────────────────────────────────────────────────────────

/** @type {Map<string, Room>} */
const rooms = new Map();

/** @type {Map<string, Player>} */
const clients = new Map(); // playerId → Player

/**
 * @typedef {{
 *   id: string,
 *   username: string,
 *   character: string,
 *   ws: import('ws'),
 *   roomCode: string|null,
 *   ready: boolean,
 *   lastPing: number,
 *   pos: {x,y,z},
 *   rot: {x,y},
 *   anim: string,
 *   hp: number,
 *   weapon: string,
 *   kills: number,
 *   deaths: number,
 *   damage: number,
 * }} Player
 *
 * @typedef {{
 *   code: string,
 *   mode: 'coop'|'pvp',
 *   map: string,
 *   difficulty: string,
 *   maxPlayers: number,
 *   isPublic: boolean,
 *   status: 'lobby'|'playing'|'ended',
 *   host: string,
 *   players: Map<string, Player>,
 *   wave: number,
 *   waveTimer: NodeJS.Timeout|null,
 *   startTimer: NodeJS.Timeout|null,
 *   botIdCounter: number,
 * }} Room
 */

// ── Room helpers ──────────────────────────────────────────────────────────────

function createRoom(opts) {
  let code;
  do { code = genCode(); } while (rooms.has(code));

  /** @type {Room} */
  const room = {
    code,
    mode:         opts.mode        || 'coop',
    map:          opts.mapId       || 'default',
    difficulty:   opts.difficulty  || 'normal',
    maxPlayers:   Math.min(Math.max(parseInt(opts.maxPlayers) || 4, 1), 8),
    isPublic:     opts.isPublic !== false,
    status:       'lobby',
    host:         null,
    players:      new Map(),
    wave:         0,
    waveTimer:    null,
    startTimer:   null,
    botIdCounter: 0,
  };
  rooms.set(code, room);
  return room;
}

function removePlayerFromRoom(player) {
  if (!player.roomCode) return;
  const room = rooms.get(player.roomCode);
  if (!room) return;

  room.players.delete(player.id);
  player.roomCode = null;

  broadcastAll(room, { type: 'playerLeave', playerId: player.id, username: player.username });

  if (room.players.size === 0) {
    // Clean up empty room
    if (room.waveTimer) clearTimeout(room.waveTimer);
    if (room.startTimer) clearTimeout(room.startTimer);
    rooms.delete(room.code);
    return;
  }

  // Transfer host if needed
  if (room.host === player.id) {
    room.host = room.players.keys().next().value;
    broadcastAll(room, roomStateMsg(room));
  } else {
    broadcastAll(room, roomStateMsg(room));
  }
}

// ── Co-op wave logic ──────────────────────────────────────────────────────────

const BOT_TYPES = ['Curse_Weak', 'Curse_Medium', 'Curse_Strong', 'Curse_Elite'];

function spawnBotsForWave(room, wave) {
  const count = 3 + wave * 2;
  const bots = [];
  for (let i = 0; i < count; i++) {
    const typeIdx = Math.min(Math.floor(wave / 2), BOT_TYPES.length - 1);
    const tier = Math.random() < 0.2 ? Math.min(typeIdx + 1, BOT_TYPES.length - 1) : typeIdx;
    bots.push({
      id:   `bot_${room.code}_${++room.botIdCounter}`,
      type: BOT_TYPES[tier],
      pos:  {
        x: (Math.random() - 0.5) * 80,
        y: 0,
        z: (Math.random() - 0.5) * 80,
      },
      hp: 50 + tier * 40,
    });
  }
  return bots;
}

function startNextWave(room) {
  if (room.status !== 'playing') return;
  room.wave++;
  const bots = spawnBotsForWave(room, room.wave);
  broadcastAll(room, { type: 'waveStart', wave: room.wave, bots });

  // Schedule next wave after 60 + wave*10 seconds (server just provides timing; clients handle bot death tracking)
  const delay = (60 + room.wave * 10) * 1000;
  room.waveTimer = setTimeout(() => startNextWave(room), delay);
}

// ── Match start ───────────────────────────────────────────────────────────────

function startMatch(room) {
  if (room.status !== 'lobby') return;
  room.status = 'playing';
  room.wave   = 0;
  room.botIdCounter = 0;
  const seed = Math.floor(Math.random() * 0xFFFFFF);

  const initialBots = room.mode === 'coop' ? spawnBotsForWave(room, 1) : [];
  if (room.mode === 'coop') room.wave = 1;

  broadcastAll(room, { type: 'matchStart', seed, bots: initialBots });

  if (room.mode === 'coop') {
    const delay = (60 + room.wave * 10) * 1000;
    room.waveTimer = setTimeout(() => startNextWave(room), delay);
  }
}

// ── PvP distance check ────────────────────────────────────────────────────────

function dist3(a, b) {
  const dx = (a.x || 0) - (b.x || 0);
  const dy = (a.y || 0) - (b.y || 0);
  const dz = (a.z || 0) - (b.z || 0);
  return Math.sqrt(dx*dx + dy*dy + dz*dz);
}

const MAX_HIT_DIST = 40; // units — generous to accommodate latency

// ── State broadcast loop (20 Hz) ──────────────────────────────────────────────

setInterval(() => {
  for (const room of rooms.values()) {
    if (room.players.size < 2) continue;
    const playerStates = [];
    for (const [id, p] of room.players) {
      playerStates.push({
        id,
        pos:    p.pos    || { x: 0, y: 0, z: 0 },
        rot:    p.rot    || { x: 0, y: 0 },
        anim:   p.anim   || 'idle',
        hp:     p.hp     !== undefined ? p.hp : 100,
        weapon: p.weapon || 'default',
      });
    }
    broadcastAll(room, { type: 'states', players: playerStates });
  }
}, 50); // 20 Hz

// ── Heartbeat check (every 5s) ────────────────────────────────────────────────

setInterval(() => {
  const now = Date.now();
  for (const player of clients.values()) {
    if (now - player.lastPing > 10000) {
      console.log(`[WS] Heartbeat timeout: ${player.username} (${player.id})`);
      player.ws.terminate();
    }
  }
}, 5000);

// ── HTTP server ───────────────────────────────────────────────────────────────

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'hunters-multiplayer',
    rooms:   rooms.size,
    players: clients.size,
  }));
});

// ── WebSocket server ──────────────────────────────────────────────────────────

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws) => {
  const id = crypto.randomUUID();
  /** @type {Player} */
  const player = {
    id,
    username:  'Hunter',
    character: 'default',
    ws,
    roomCode:  null,
    ready:     false,
    lastPing:  Date.now(),
    pos:       { x: 0, y: 0, z: 0 },
    rot:       { x: 0, y: 0 },
    anim:      'idle',
    hp:        100,
    weapon:    'default',
    kills:     0,
    deaths:    0,
    damage:    0,
  };
  clients.set(id, player);
  console.log(`[WS] Connect: ${id}`);

  ws.on('message', (raw) => {
    let msg;
    try { msg = JSON.parse(raw); } catch { return; }

    player.lastPing = Date.now();

    switch (msg.type) {

      // ── Ping ──────────────────────────────────────────────────────────────
      case 'ping':
        send(ws, { type: 'pong' });
        break;

      // ── Create room ───────────────────────────────────────────────────────
      case 'createRoom': {
        if (player.roomCode) {
          send(ws, { type: 'error', msg: 'Already in a room' });
          break;
        }
        if (msg.username) {
          player.username  = String(msg.username).slice(0, 32);
          player.character = String(msg.character || 'default').slice(0, 32);
        }
        const room = createRoom(msg);
        room.host = id;
        room.players.set(id, player);
        player.roomCode = room.code;
        send(ws, roomStateMsg(room));
        console.log(`[Room] Created ${room.code} by ${player.username}`);
        break;
      }

      // ── Join room ─────────────────────────────────────────────────────────
      case 'joinRoom': {
        if (player.roomCode) {
          send(ws, { type: 'error', msg: 'Already in a room — leave first' });
          break;
        }
        const code = String(msg.roomCode || '').toUpperCase().trim();
        const room = rooms.get(code);
        if (!room) { send(ws, { type: 'error', msg: 'Room not found' }); break; }
        if (room.status !== 'lobby') { send(ws, { type: 'error', msg: 'Match already in progress' }); break; }
        if (room.players.size >= room.maxPlayers) { send(ws, { type: 'error', msg: 'Room is full' }); break; }

        if (msg.username) {
          player.username  = String(msg.username).slice(0, 32);
          player.character = String(msg.character || 'default').slice(0, 32);
        }
        room.players.set(id, player);
        player.roomCode = room.code;

        // Notify existing players
        broadcast(room, { type: 'playerJoin', player: { id, username: player.username, character: player.character } }, id);
        // Send full room state to the joiner
        send(ws, roomStateMsg(room));
        console.log(`[Room] ${player.username} joined ${room.code}`);
        break;
      }

      // ── Leave room ────────────────────────────────────────────────────────
      case 'leaveRoom':
        removePlayerFromRoom(player);
        break;

      // ── List public rooms ─────────────────────────────────────────────────
      case 'listRooms': {
        const list = [];
        for (const r of rooms.values()) {
          if (r.isPublic) list.push(roomSummary(r));
        }
        send(ws, { type: 'roomList', rooms: list });
        break;
      }

      // ── Ready toggle ──────────────────────────────────────────────────────
      case 'ready': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room) break;
        player.ready = !!msg.ready;
        broadcastAll(room, roomStateMsg(room));
        break;
      }

      // ── Start match (host only) ───────────────────────────────────────────
      case 'startMatch': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room) break;
        if (room.host !== id) { send(ws, { type: 'error', msg: 'Only the host can start the match' }); break; }
        if (room.status !== 'lobby') { send(ws, { type: 'error', msg: 'Match already started' }); break; }
        // Allow start regardless of ready state (host can force)
        startMatch(room);
        console.log(`[Room] Match started in ${room.code}`);
        break;
      }

      // ── Player state update ───────────────────────────────────────────────
      case 'state': {
        if (msg.pos)    player.pos    = msg.pos;
        if (msg.rot)    player.rot    = msg.rot;
        if (msg.anim)   player.anim   = msg.anim;
        if (msg.hp !== undefined) player.hp = msg.hp;
        if (msg.weapon) player.weapon = msg.weapon;
        break;
      }

      // ── Shot fired ────────────────────────────────────────────────────────
      case 'shoot': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room || room.status !== 'playing') break;
        broadcast(room, {
          type:     'shotFired',
          shooterId: id,
          origin:   msg.origin,
          dir:      msg.dir,
          weaponId: msg.weaponId,
        }, id);
        break;
      }

      // ── Hit player (PvP) ──────────────────────────────────────────────────
      case 'hitPlayer': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room || room.status !== 'playing') break;
        if (room.mode !== 'pvp') break;

        const target = room.players.get(msg.targetId);
        if (!target) break;

        // Server-side distance sanity check
        const d = dist3(player.pos, target.pos);
        if (d > MAX_HIT_DIST) {
          console.log(`[PvP] Hit rejected: distance ${d.toFixed(1)} > ${MAX_HIT_DIST}`);
          break;
        }

        const dmg = Math.min(Math.max(Number(msg.damage) || 0, 0), 200);
        target.hp = Math.max((target.hp || 100) - dmg, 0);
        target.damage = (target.damage || 0);
        player.damage = (player.damage || 0) + dmg;

        broadcastAll(room, {
          type:      'damageTaken',
          targetId:  msg.targetId,
          damage:    dmg,
          attackerId: id,
          newHp:     target.hp,
        });

        if (target.hp <= 0) {
          player.kills = (player.kills || 0) + 1;
          target.deaths = (target.deaths || 0) + 1;
          broadcastAll(room, {
            type:     'playerKilled',
            victimId: msg.targetId,
            killerId: id,
            weaponId: msg.weaponId,
          });

          // Check for match end (last player standing)
          const alive = [...room.players.values()].filter(p => (p.hp || 0) > 0);
          if (alive.length <= 1) {
            const scores = [...room.players.values()].map(p => ({
              id:     p.id,
              kills:  p.kills  || 0,
              deaths: p.deaths || 0,
              damage: p.damage || 0,
            }));
            const winners = alive.map(p => p.id);
            broadcastAll(room, { type: 'matchEnd', winners, scores });
            room.status = 'ended';
          }
        }
        break;
      }

      // ── Hit bot (co-op) ───────────────────────────────────────────────────
      case 'hitBot': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room || room.status !== 'playing') break;

        const dmg = Math.min(Math.max(Number(msg.damage) || 0, 0), 500);
        // Broadcast to other players so they can update their local bot HP
        broadcast(room, {
          type:     'botHit',
          botId:    msg.botId,
          damage:   dmg,
          attackerId: id,
        }, id);

        // Clients report bot kills separately
        break;
      }

      // ── Bot kill confirmed ────────────────────────────────────────────────
      case 'botKill': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room || room.status !== 'playing') break;
        player.kills = (player.kills || 0) + 1;
        broadcastAll(room, { type: 'botKilled', botId: msg.botId, killerId: id });
        break;
      }

      // ── Chat ──────────────────────────────────────────────────────────────
      case 'chat': {
        if (!player.roomCode) break;
        const room = rooms.get(player.roomCode);
        if (!room) break;
        const text = String(msg.text || '').slice(0, 256).trim();
        if (!text) break;
        broadcastAll(room, {
          type:      'chat',
          from:      player.username,
          text,
          timestamp: Date.now(),
        });
        break;
      }

      default:
        break;
    }
  });

  ws.on('close', () => {
    console.log(`[WS] Disconnect: ${player.username || id}`);
    removePlayerFromRoom(player);
    clients.delete(id);
  });

  ws.on('error', (err) => {
    console.error(`[WS] Error for ${player.username || id}:`, err.message);
  });
});

httpServer.listen(PORT, () => {
  console.log(`[HUNTERS] Multiplayer server listening on port ${PORT}`);
});
