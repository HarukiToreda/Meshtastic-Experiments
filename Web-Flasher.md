---
layout: default
title: Web Flasher
---

# Squeezelite-ESP32 Web Flasher

<div class="flash-interface">
  <div class="device-selection">
    <div class="connect-box">
      <button id="connect-btn" class="btn-primary">Connect Device</button>
      <span id="connection-status">⛔ Not Connected</span>
    </div>

    <div class="device-list">
      <label>Select Device Type:</label>
      <select id="device-type">
        <option value="">Choose a device</option>
        <option value="squeezeamp">SqueezeAmp</option>
        <option value="muse">Muse</option>
        <option value="muse_proto">Muse Proto</option>
        <option value="i2s">I2S</option>
      </select>
    </div>
  </div>

  <div class="flash-controls">
    <button id="flash-btn" class="btn-flash" disabled>
      <span class="flash-icon">⚡</span> Flash Firmware
    </button>
    <div class="progress-container">
      <progress id="progress-bar" value="0" max="100"></progress>
      <span id="progress-text">0%</span>
    </div>
  </div>

  <div class="log-container">
    <pre id="flash-log"></pre>
  </div>
</div>

<script src="https://unpkg.com/esptool-js@1.3.0/dist/web/esptool.js"></script>
<script>
const ESPTool = window.ESPTool;
const MANIFEST_BASE = 'https://raw.githubusercontent.com/HarukiToreda/Meshtastic-Experiments/main/';
const CORS_PROXY = 'https://api.allorigins.win/get?url=';
const DEVICE_MANIFESTS = {
  squeezeamp: 'manifest_squeezeamp.json',
  muse: 'manifest_muse.json',
  muse_proto: 'manifest_muse_proto.json',
  i2s: 'manifest_i2s.json'
};

let port = null;
let firmwareParts = [];

document.getElementById('connect-btn').addEventListener('click', connectDevice);
document.getElementById('device-type').addEventListener('change', loadManifest);
document.getElementById('flash-btn').addEventListener('click', beginFlash);

async function connectDevice() {
  try {
    port = await navigator.serial.requestPort();
    document.getElementById('connection-status').textContent = '✅ Connected';
    document.getElementById('device-type').disabled = false;
    logMessage('Device connected successfully');
  } catch (error) {
    logMessage(`Connection error: ${error.message}`);
  }
}

async function loadManifest() {
  const deviceType = document.getElementById('device-type').value;
  if (!deviceType) return;

  try {
    const manifestPath = DEVICE_MANIFESTS[deviceType];
    const manifestUrl = `${MANIFEST_BASE}${manifestPath}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(manifestUrl)}`);
    const data = await response.json();
    
    firmwareParts = data.builds[0].parts;
    document.getElementById('flash-btn').disabled = false;
    
    logMessage(`Loaded manifest for: ${data.name}`);
    logMessage(`Firmware version: ${data.version}`);
  } catch (error) {
    logMessage(`Manifest load failed: ${error.message}`);
  }
}

async function beginFlash() {
  if (!firmwareParts.length) return;

  try {
    document.getElementById('progress-container').style.display = 'block';
    await port.open({ baudRate: 115200 });
    const esptool = new ESPTool(port);
    
    await esptool.connect();
    logMessage('Starting flash process...');

    for (const [index, part] of firmwareParts.entries()) {
      const firmwareUrl = `${MANIFEST_BASE}${part.path}`;
      const response = await fetch(firmwareUrl);
      const buffer = await response.arrayBuffer();
      
      await esptool.write_flash(
        part.offset,
        new Uint8Array(buffer),
        progress => updateProgress(progress, index + 1, firmwareParts.length)
      );
    }

    await esptool.hard_reset();
    logMessage('Flash completed successfully!');
  } catch (error) {
    logMessage(`Flash failed: ${error.message}`);
  } finally {
    if (port) await port.close();
    document.getElementById('progress-container').style.display = 'none';
  }
}

function updateProgress(progress, currentPart, totalParts) {
  const partProgress = Math.round(progress * 100);
  const overallProgress = Math.round(((currentPart - 1) + progress) / totalParts * 100);
  document.getElementById('progress-bar').value = overallProgress;
  document.getElementById('progress-text').textContent = `${overallProgress}%`;
  logMessage(`Flashing part ${currentPart}/${totalParts}: ${partProgress}%`);
}

function logMessage(message) {
  const logElement = document.getElementById('flash-log');
  logElement.textContent += `${new Date().toLocaleTimeString()}: ${message}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
</script>

<style>
/* Maintain the previous styling */
.flash-interface {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.device-selection {
  display: grid;
  gap: 15px;
  margin-bottom: 25px;
}

.connect-box {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.btn-primary {
  background: #FFD700;
  color: #000;
  padding: 10px 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.device-list {
  background: #333;
  padding: 15px;
  border-radius: 6px;
}

select {
  width: 100%;
  padding: 8px;
  background: #444;
  color: #fff;
  border: 1px solid #00FFFF;
  border-radius: 4px;
  margin-top: 8px;
}

.btn-flash {
  background: #00FF00;
  color: #000;
  padding: 12px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

.progress-container {
  background: #333;
  padding: 15px;
  border-radius: 6px;
  margin-top: 15px;
}

progress {
  width: 100%;
  height: 20px;
  accent-color: #FFD700;
}

#progress-text {
  color: #00FFFF;
  margin-left: 10px;
  font-weight: bold;
}

.log-container {
  background: #000;
  padding: 15px;
  border-radius: 6px;
  margin-top: 20px;
}

#flash-log {
  color: #00FF00;
  height: 200px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 0.9em;
}
</style>
