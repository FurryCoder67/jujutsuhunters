// =============================================================================
// HUNTERS — Multiplayer Client
// Attach as: window.MultiplayerClient
// Include before hunters-game.js:
//   <script src="/js/multiplayer-client.js"></script>
// =============================================================================

(function () {
  'use strict';

  // ── Internal state ──────────────────────────────────────────────────────────

  let _ws            = null;
  let _connected     = false;
  let _serverUrl     = null;
  let _retryCount    = 0;
  const MAX_RETRIES  = 3;
  let _retryTimer    = null;
  let _pingInterval  = null;

  let _inRoom    = false;
  let _isHost    = false;
  let _roomCode  = null;
  let _roomData  = null;
  let _username  = null;
  let _character = 'default';

  /** @type {Map<string, object>} playerId → state */
  const _players = new Map();

  /** Outbound message queue (used while connecting) */
  const _queue = [];

  // ── Helpers ─────────────────────────────────────────────────────────────────

  function emit(eventName, detail) {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  function _send(obj) {
    const msg = JSON.stringify(obj);
    if (_ws && _ws.readyState === WebSocket.OPEN) {
      _ws.send(msg);
    } else {
      _queue.push(msg);
    }
  }

  function _flushQueue() {
    while (_queue.length > 0 && _ws && _ws.readyState === WebSocket.OPEN) {
      _ws.send(_queue.shift());
    }
  }

  function _resetRoom() {
    _inRoom   = false;
    _isHost   = false;
    _roomCode = null;
    _roomData = null;
    _players.clear();
  }

  // ── Connection / reconnection ────────────────────────────────────────────────

  function _startPing() {
    _stopPing();
    _pingInterval = setInterval(() => {
      if (_connected) _send({ type: 'ping' });
    }, 5000);
  }

  function _stopPing() {
    if (_pingInterval) { clearInterval(_pingInterval); _pingInterval = null; }
  }

  function _connect(url) {
    _serverUrl = url;
    _ws = new WebSocket(url);

    _ws.onopen = () => {
      _connected  = true;
      _retryCount = 0;
      console.log('[MP] Connected to', url);
      _flushQueue();
      _startPing();
      emit('mp:connected', { url });
    };

    _ws.onclose = () => {
      _connected = false;
      _stopPing();
      console.log('[MP] Disconnected');
      emit('mp:disconnected', {});

      // Attempt reconnect with exponential backoff
      if (_retryCount < MAX_RETRIES) {
        const delay = Math.pow(2, _retryCount) * 1000;
        _retryCount++;
        console.log(`[MP] Reconnecting in ${delay}ms (attempt ${_retryCount}/${MAX_RETRIES})`);
        _retryTimer = setTimeout(() => _connect(_serverUrl), delay);
      } else {
        console.warn('[MP] Max retries reached. Give up.');
        _resetRoom();
      }
    };

    _ws.onerror = (err) => {
      console.error('[MP] WebSocket error', err);
    };

    _ws.onmessage = (event) => {
      let msg;
      try { msg = JSON.parse(event.data); } catch { return; }
      _handleMessage(msg);
    };
  }

  // ── Message handler ──────────────────────────────────────────────────────────

  function _handleMessage(msg) {
    switch (msg.type) {

      case 'pong':
        // Heartbeat acknowledged — nothing to do
        break;

      case 'roomState': {
        _roomData = msg.room;
        _roomCode = msg.room.code;
        _inRoom   = true;
        _isHost   = (msg.room.host === _getMyId());

        // Rebuild players map from room state
        _players.clear();
        if (msg.room.players) {
          for (const p of msg.room.players) {
            _players.set(p.id, p);
          }
        }
        emit('mp:roomUpdate', msg.room);
        break;
      }

      case 'playerJoin': {
        const p = msg.player;
        if (p) _players.set(p.id, p);
        emit('mp:playerJoin', p);
        break;
      }

      case 'playerLeave': {
        _players.delete(msg.playerId);
        emit('mp:playerLeave', { playerId: msg.playerId, username: msg.username });
        break;
      }

      case 'matchStart': {
        emit('mp:matchStart', { seed: msg.seed, bots: msg.bots });
        break;
      }

      case 'states': {
        if (msg.players) {
          for (const p of msg.players) {
            const existing = _players.get(p.id) || {};
            _players.set(p.id, Object.assign(existing, p));
          }
        }
        emit('mp:states', { players: msg.players });
        break;
      }

      case 'shotFired': {
        emit('mp:shot', {
          shooterId: msg.shooterId,
          origin:    msg.origin,
          dir:       msg.dir,
          weaponId:  msg.weaponId,
        });
        break;
      }

      case 'damageTaken': {
        // Update local player state
        const target = _players.get(msg.targetId);
        if (target) target.hp = msg.newHp;
        emit('mp:damage', {
          targetId:   msg.targetId,
          damage:     msg.damage,
          attackerId: msg.attackerId,
          newHp:      msg.newHp,
        });
        break;
      }

      case 'botHit': {
        emit('mp:botHit', {
          botId:      msg.botId,
          damage:     msg.damage,
          attackerId: msg.attackerId,
        });
        break;
      }

      case 'playerKilled': {
        emit('mp:kill', {
          victimId: msg.victimId,
          killerId: msg.killerId,
          weaponId: msg.weaponId,
        });
        break;
      }

      case 'botKilled': {
        emit('mp:botKill', { botId: msg.botId, killerId: msg.killerId });
        break;
      }

      case 'waveStart': {
        emit('mp:wave', { wave: msg.wave, bots: msg.bots });
        break;
      }

      case 'matchEnd': {
        emit('mp:matchEnd', { winners: msg.winners, scores: msg.scores });
        break;
      }

      case 'chat': {
        emit('mp:chat', { from: msg.from, text: msg.text, timestamp: msg.timestamp });
        break;
      }

      case 'roomList': {
        emit('mp:rooms', { rooms: msg.rooms });
        break;
      }

      case 'error': {
        console.warn('[MP] Server error:', msg.msg);
        emit('mp:error', { msg: msg.msg });
        break;
      }

      default:
        break;
    }
  }

  // ── Detect own player ID (stored after first roomState) ──────────────────────

  // The server assigns a UUID per connection. We discover it from the roomState
  // by cross-referencing the host flag with our _isHost tracking.
  // Simpler: store it on connect via the server sending us our id.
  // Since the current protocol doesn't send an explicit 'welcome' message,
  // we infer our id as the host id when we created the room, or match
  // username in playerJoin. We track _myId separately.

  let _myId = null;

  // Patch: override roomState handling to extract own id (host = our id when we createRoom).
  // After joinRoom the server sends roomState; we find ourselves in the players list by username.
  function _getMyId() { return _myId; }

  // We extract our own ID from roomState: after a createRoom the host is us.
  // After a joinRoom, we look for the player with our username that wasn't there before.
  // Store after first roomState resolution.

  const _originalHandleMessage = _handleMessage;

  // Augment roomState to detect own id
  const _baseHandle = _ws; // will be null here; actual patching happens in closure above

  // Simple approach: track id by listening for our own username in the players array
  // when the room list changes. On createRoom we become host so host===myId.
  function _detectMyId(room) {
    if (_myId) return;
    // If we are listed as host, store host as our id
    if (_isHost && room.host) {
      _myId = room.host;
      return;
    }
    // Otherwise find by username
    if (room.players) {
      for (const p of room.players) {
        if (p.username === _username && !_myId) {
          _myId = p.id;
        }
      }
    }
  }

  // Re-wire roomState to also detect id
  const _origOnMessage_backup = null;
  // We patch via the message handler switch — let's just inline it.

  // ── Public API ───────────────────────────────────────────────────────────────

  window.MultiplayerClient = {

    // ── Connection ──────────────────────────────────────────────────────────

    connect(serverUrl, username, character) {
      _username  = username  || 'Hunter';
      _character = character || 'default';
      if (_retryTimer) { clearTimeout(_retryTimer); _retryTimer = null; }
      if (_ws) {
        try { _ws.close(); } catch (_) {}
        _ws = null;
      }
      _retryCount = 0;
      _connect(serverUrl);
    },

    disconnect() {
      _stopPing();
      if (_retryTimer) { clearTimeout(_retryTimer); _retryTimer = null; }
      _retryCount = MAX_RETRIES; // prevent auto-reconnect
      if (_ws) {
        try { _ws.close(); } catch (_) {}
        _ws = null;
      }
      _connected = false;
      _resetRoom();
    },

    get connected() { return _connected; },
    get inRoom()    { return _inRoom; },
    get isHost()    { return _isHost; },
    get roomCode()  { return _roomCode; },
    get myId()      { return _myId; },
    get players()   { return _players; },
    get roomData()  { return _roomData; },

    setUsername(username, character) {
      _username  = username  || _username;
      _character = character || _character;
    },

    // ── Lobby ────────────────────────────────────────────────────────────────

    createRoom(opts) {
      _myId = null; // will be set when roomState arrives
      _send({
        type:       'createRoom',
        username:   _username,
        character:  _character,
        mode:       opts.mode       || 'coop',
        mapId:      opts.mapId      || 'default',
        difficulty: opts.difficulty || 'normal',
        maxPlayers: opts.maxPlayers || 4,
        isPublic:   opts.isPublic !== false,
      });
    },

    joinRoom(code) {
      _myId = null;
      _send({
        type:      'joinRoom',
        username:  _username,
        character: _character,
        roomCode:  String(code).toUpperCase().trim(),
      });
    },

    leaveRoom() {
      _send({ type: 'leaveRoom' });
      _resetRoom();
    },

    listRooms() {
      _send({ type: 'listRooms' });
    },

    setReady(bool) {
      _send({ type: 'ready', ready: !!bool });
    },

    startMatch() {
      if (!_isHost) { console.warn('[MP] Only host can start'); return; }
      _send({ type: 'startMatch' });
    },

    // ── In-game ──────────────────────────────────────────────────────────────

    sendState(pos, rot, anim, hp, weapon) {
      _send({ type: 'state', pos, rot, anim, hp, weapon });
    },

    sendShot(origin, dir, weaponId) {
      _send({ type: 'shoot', origin, dir, weaponId });
    },

    reportHitPlayer(targetId, damage, weaponId) {
      _send({ type: 'hitPlayer', targetId, damage, weaponId });
    },

    reportHitBot(botId, damage) {
      _send({ type: 'hitBot', botId, damage });
    },

    reportBotKill(botId) {
      _send({ type: 'botKill', botId });
    },

    sendChat(text) {
      _send({ type: 'chat', text });
    },
  };

  // ── Patch roomState handler to detect own id ─────────────────────────────────
  // We intercept the 'mp:roomUpdate' event to call _detectMyId.
  window.addEventListener('mp:roomUpdate', (e) => {
    if (e.detail) _detectMyId(e.detail);
  });

  console.log('[MP] MultiplayerClient ready');
})();
