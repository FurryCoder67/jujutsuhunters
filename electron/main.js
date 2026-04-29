const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

// Keep a global reference so the window isn't garbage collected
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Jujutsu Hunters',
    icon: path.join(__dirname, 'icon.png'),
    backgroundColor: '#09090b',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    // Frameless feel — keep native frame for OS window controls
    autoHideMenuBar: true,
  });

  // Remove the default menu bar entirely
  Menu.setApplicationMenu(null);

  // Load the game
  mainWindow.loadURL('https://jujutsuhunters.vercel.app/hunters.html');

  // Open external links in the system browser, not a new Electron window
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
