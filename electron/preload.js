const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe API to the game page
contextBridge.exposeInMainWorld('electronAPI', {
  // The game already checks for window.electronAPI.onUpdateAvailable
  onUpdateAvailable: (callback) => {
    ipcRenderer.on('update-available', (_event, version) => callback(version));
  },
  platform: process.platform,
  version: process.env.npm_package_version || '1.0.0',
});
