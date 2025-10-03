"use strict";
const { app, BrowserWindow, shell, ipcMain } = require("electron");
const { spawn } = require("child_process");
const utils = require("@electron-toolkit/utils");
const path = require("path");
const fs = require("fs");

app.commandLine.appendSwitch("disable-http-cache");
app.commandLine.appendSwitch("disk-cache-size", "0");

let backendProcess;

/**
 * Create main Electron window
 */
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  mainWindow.on("ready-to-show", () => mainWindow.show());

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // DEBUG: DevTools
  mainWindow.webContents.openDevTools();

  mainWindow.webContents.on("did-fail-load", (_, errorCode, errorDescription) => {
    console.error("Failed to load:", errorCode, errorDescription);
  });

  mainWindow.webContents.on("did-finish-load", () => {
    console.log("✅ Page loaded successfully");
  });

  mainWindow.webContents.on("console-message", (event, level, message) => {
    console.log(`Renderer log [${level}]:`, message);
  });

  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    console.log("Loading dev URL:", process.env["ELECTRON_RENDERER_URL"]);
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    const rendererPath = path.join(__dirname, "../renderer/index.html");
    console.log("Loading production file:", rendererPath);
    console.log("File exists:", fs.existsSync(rendererPath));
    mainWindow.loadFile(rendererPath);
  }
}

/**
 * Check backend readiness
 */
async function checkBackendReady(port = 8000, maxRetries = 30) {
  const http = require("http");
  for (let i = 0; i < maxRetries; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(`http://localhost:${port}/tables/`, (res) => {
          resolve(true); // Any response means backend is up
        });
        req.on("error", reject);
        req.setTimeout(1000, () => {
          req.destroy();
          reject();
        });
      });
      console.log("✅ Backend is ready!");
      return true;
    } catch {
      console.log(`⏳ Waiting for backend... (${i + 1}/${maxRetries})`);
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
  console.error("❌ Backend failed to start in time");
  return false;
}

/**
 * Start backend process
 */
async function startBackendAndApp() {
  const backendExe = utils.is.dev
    ? path.join(__dirname, "../../Restaurant-System1/app/dist/backend.exe")
    : path.join(process.resourcesPath, "backend.exe");

  console.log("Backend path:", backendExe);
  if (!fs.existsSync(backendExe)) {
    console.error("❌ Backend executable not found!");
    createWindow();
    return;
  }

  try {
    backendProcess = spawn(backendExe, [], {
      detached: true,
      stdio: "pipe", // ✅ keeps stdout/stderr available
      env: {
        ...process.env,
        SECRET_KEY: "supersecret",
        DATABASE_URL: "sqlite:///./data.db",
      },
    });

    backendProcess.stdout?.on("data", (data) =>
      console.log("Backend stdout:", data.toString())
    );
    backendProcess.stderr?.on("data", (data) =>
      console.error("Backend stderr:", data.toString())
    );
    backendProcess.on("error", (err) =>
      console.error("Backend process error:", err)
    );
    backendProcess.on("exit", (code) =>
      console.log("Backend process exited with code:", code)
    );

    console.log("🚀 Backend process started, waiting for it...");

    const ready = await checkBackendReady(8000);
    if (ready) {
      console.log("✅ Backend ready, creating window...");
    } else {
      console.warn("⚠️ Backend not ready, creating window anyway...");
    }
    createWindow();
  } catch (err) {
    console.error("❌ Failed to start backend:", err);
    createWindow();
  }
}

/**
 * App lifecycle
 */
app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });

  ipcMain.on("ping", () => console.log("pong"));

  startBackendAndApp();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  if (backendProcess) {
    try {
      backendProcess.kill();
      console.log("🛑 Backend killed on exit");
    } catch (err) {
      console.error("Error killing backend:", err);
    }
  }
});