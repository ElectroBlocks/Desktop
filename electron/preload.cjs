const { contextBridge, ipcRenderer } = require('electron');

const api = {
  uploadCode: async (code) => ipcRenderer.invoke('upload-code', code),
};

contextBridge.exposeInMainWorld('api', api);
