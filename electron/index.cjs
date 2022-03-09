const { app, BrowserWindow } = require('electron');
const { join } = require('path');

app.whenReady().then(() => {
  /** @type Electron.BrowserWindow */
  const window = new BrowserWindow({
    width: 800,
    height: 800,
  });
  if (process.env.NODE_ENV === 'development') {
    window.loadURL('http://localhost:3000');
    return;
  }

  window.loadFile(join(__dirname, 'dist', 'index.html'));
});
