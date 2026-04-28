/**
 * HUNTERS - CSS & Three.js Graphics Generator
 * Replaces all image assets with procedurally generated graphics
 */

// Generate weapon icon using CSS
export function createWeaponIcon(type = 'gun') {
    const canvas = document.createElement('canvas');
    canvas.width = 88;
    canvas.height = 56;
    const ctx = canvas.getContext('2d');

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 88, 56);
    grad.addColorStop(0, '#1a0f2e');
    grad.addColorStop(1, '#0a0515');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 88, 56);

    // Gun silhouette
    ctx.fillStyle = '#7c3aed';
    ctx.shadowColor = '#a78bfa';
    ctx.shadowBlur = 8;

    if (type === 'gun') {
        // Pistol shape
        ctx.fillRect(12, 20, 30, 12); // grip
        ctx.fillRect(40, 16, 36, 8);  // barrel
        ctx.fillRect(36, 12, 8, 16);  // trigger guard
        ctx.fillRect(70, 14, 6, 12);  // muzzle
    }

    return canvas.toDataURL();
}

// Generate character avatar using CSS
export function createCharacterAvatar(character) {
    const colors = {
        gojo: { primary: '#00aaff', secondary: '#ffffff', accent: '#7700ff' },
        sukuna: { primary: '#ff0033', secondary: '#aa0066', accent: '#ff6688' },
        yuji: { primary: '#ff6600', secondary: '#ffaa44', accent: '#ff9900' },
        megumi: { primary: '#0044aa', secondary: '#0088ff', accent: '#00ccff' },
        toji: { primary: '#00aa44', secondary: '#44ff88', accent: '#88ffaa' },
        yuta: { primary: '#6600ff', secondary: '#aa44ff', accent: '#cc88ff' }
    };

    const color = colors[character] || colors.gojo;

    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <radialGradient id="bg-${character}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${color.primary}" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="${color.accent}" stop-opacity="0.1"/>
        </radialGradient>
        <filter id="glow-${character}">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Background circle -->
      <circle cx="100" cy="100" r="90" fill="url(#bg-${character})" opacity="0.8"/>
      
      <!-- Character silhouette -->
      <g filter="url(#glow-${character})">
        <!-- Head -->
        <circle cx="100" cy="70" r="25" fill="${color.primary}" opacity="0.9"/>
        
        <!-- Body -->
        <rect x="80" y="90" width="40" height="50" rx="8" fill="${color.primary}" opacity="0.85"/>
        
        <!-- Arms -->
        <rect x="60" y="95" width="20" height="35" rx="6" fill="${color.secondary}" opacity="0.8"/>
        <rect x="120" y="95" width="20" height="35" rx="6" fill="${color.secondary}" opacity="0.8"/>
        
        <!-- Energy aura -->
        <circle cx="100" cy="70" r="30" fill="none" stroke="${color.accent}" stroke-width="2" opacity="0.6"/>
        <circle cx="100" cy="70" r="35" fill="none" stroke="${color.accent}" stroke-width="1" opacity="0.3"/>
      </g>
      
      <!-- Character initial -->
      <text x="100" y="180" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="900" fill="${color.primary}" opacity="0.9">
        ${character.charAt(0).toUpperCase()}
      </text>
    </svg>
  `;

    return 'data:image/svg+xml;base64,' + btoa(svg);
}

// Create CSS-based weapon icon element
export function createCSSWeaponIcon() {
    const div = document.createElement('div');
    div.style.cssText = `
    width: 44px;
    height: 28px;
    background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
    border-radius: 6px;
    position: relative;
    box-shadow: 0 0 12px rgba(124, 58, 237, 0.5), inset 0 1px 0 rgba(255,255,255,0.2);
    overflow: hidden;
  `;

    // Add gun shape overlay
    const gunShape = document.createElement('div');
    gunShape.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 12px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 2px;
  `;

    const barrel = document.createElement('div');
    barrel.style.cssText = `
    position: absolute;
    right: -4px;
    top: 2px;
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1px;
  `;

    gunShape.appendChild(barrel);
    div.appendChild(gunShape);

    // Add energy glow effect
    const glow = document.createElement('div');
    glow.style.cssText = `
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    animation: pulse 2s ease-in-out infinite;
  `;
    div.appendChild(glow);

    return div;
}

// Create CSS-based character card
export function createCSSCharacterCard(character) {
    const colors = {
        gojo: { bg: 'rgba(0, 170, 255, 0.15)', border: '#00aaff', glow: 'rgba(0, 170, 255, 0.3)' },
        sukuna: { bg: 'rgba(255, 0, 51, 0.15)', border: '#ff0033', glow: 'rgba(255, 0, 51, 0.3)' },
        yuji: { bg: 'rgba(255, 102, 0, 0.15)', border: '#ff6600', glow: 'rgba(255, 102, 0, 0.3)' },
        megumi: { bg: 'rgba(0, 68, 170, 0.15)', border: '#0044aa', glow: 'rgba(0, 68, 170, 0.3)' },
        toji: { bg: 'rgba(0, 170, 68, 0.15)', border: '#00aa44', glow: 'rgba(0, 170, 68, 0.3)' },
        yuta: { bg: 'rgba(102, 0, 255, 0.15)', border: '#6600ff', glow: 'rgba(102, 0, 255, 0.3)' }
    };

    const color = colors[character] || colors.gojo;

    const div = document.createElement('div');
    div.style.cssText = `
    width: 100%;
    height: 200px;
    background: ${color.bg};
    border: 2px solid ${color.border};
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 20px ${color.glow};
  `;

    // Character silhouette
    const silhouette = document.createElement('div');
    silhouette.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 140px;
  `;

    // Head
    const head = document.createElement('div');
    head.style.cssText = `
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: ${color.border};
    border-radius: 50%;
    box-shadow: 0 0 15px ${color.glow};
  `;

    // Body
    const body = document.createElement('div');
    body.style.cssText = `
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 70px;
    background: ${color.border};
    border-radius: 8px;
    opacity: 0.85;
  `;

    // Energy aura
    const aura = document.createElement('div');
    aura.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, ${color.glow} 0%, transparent 70%);
    animation: pulse 3s ease-in-out infinite;
  `;

    silhouette.appendChild(aura);
    silhouette.appendChild(head);
    silhouette.appendChild(body);
    div.appendChild(silhouette);

    // Character initial
    const initial = document.createElement('div');
    initial.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: ${color.border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
    color: white;
    box-shadow: 0 0 10px ${color.glow};
  `;
    initial.textContent = character.charAt(0).toUpperCase();
    div.appendChild(initial);

    return div;
}

// Add animation styles
if (!document.getElementById('graphics-animations')) {
    const style = document.createElement('style');
    style.id = 'graphics-animations';
    style.textContent = `
    @keyframes pulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
  `;
    document.head.appendChild(style);
}
