const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');
const { exec } = require('child_process');

app.whenReady().then(() => {
  /** @type Electron.BrowserWindow */
  const window = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.cjs'),
    },
  });
  if (process.env.NODE_ENV === 'development') {
    window.loadURL('http://localhost:3000');
    return;
  }

  window.loadFile(join(__dirname, 'dist', 'index.html'));
});

ipcMain.handle('upload-code', async (_, code) => {
  console.log(code);

  return 'success';
});
