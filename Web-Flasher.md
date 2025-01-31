---
layout: default
title: Web Flasher
---

# Meshtastic Web Flasher

<div class="flash-container">
  <div class="connection-box">
    <button id="connect-btn">Connect Device</button>
    <span id="connection-status">⛔ Not Connected</span>
  </div>

  <div class="selection-box">
    <label>Device Model:</label>
    <select id="device-select" disabled>
      <option value="">First connect device</option>
    </select>
  </div>

  <div class="selection-box">
    <label>Firmware Version:</label>
    <select id="firmware-select" disabled>
      <option value="">Select device first</option>
    </select>
  </div>

  <button id="flash-btn" disabled>Flash Selected Firmware</button>

  <div class="progress-container">
    <progress id="progress-bar" value="0" max="100"></progress>
    <span id="progress-text">0%</span>
  </div>

  <div class="log-container">
    <pre id="flash-log"></pre>
  </div>
</div>

<script src="https://unpkg.com/esptool-js@1.3.0/dist/web/esptool.js"></script>
<script>
const ESPTool = window.ESPTool;
const REPO = 'HarukiToreda/Meshtastic-Experiments';
const BRANCH = 'main';
const FIRMWARE_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/Meshtastic-Experiments/firmwares/`;
const CORS_PROXY = 'https://api.allorigins.win/get?url=';

let port = null;
let selectedFirmware = null;

async function loadDevices() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/Meshtastic-Experiments/firmwares?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    const data = await response.json();
    const devices = JSON.parse(data.contents);

    const deviceSelect = document.getElementById('device-select');
    deviceSelect.innerHTML = '<option value="">Select device</option>';
    
    devices.forEach(item => {
      if (item.type === 'dir') {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name.replace(/_/g, ' ');
        deviceSelect.appendChild(option);
      }
    });
    
    deviceSelect.disabled = false;
    log('Loaded available devices');
  } catch (error) {
    log(`Error loading devices: ${error.message}`);
  }
}

async function loadFirmwares(device) {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/Meshtastic-Experiments/firmwares/${device}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    const data = await response.json();
    const files = JSON.parse(data.contents);

    const firmwareSelect = document.getElementById('firmware-select');
    firmwareSelect.innerHTML = '<option value="">Select firmware</option>';
    
    files.forEach(file => {
      if (file.name.endsWith('.bin')) {
        const option = document.createElement('option');
        option.value = `${FIRMWARE_BASE}${device}/${file.name}`;
        option.textContent = file.name
          .replace(/_/g, ' ')
          .replace('.bin', '');
        firmwareSelect.appendChild(option);
      }
    });
    
    firmwareSelect.disabled = false;
    log(`Loaded firmwares for ${device}`);
  } catch (error) {
    log(`Error loading firmwares: ${error.message}`);
  }
}

document.getElementById('connect-btn').addEventListener('click', async () => {
  try {
    port = await navigator.serial.requestPort();
    document.getElementById('connect-btn').disabled = true;
    document.getElementById('connection-status').textContent = '✅ Connected';
    await loadDevices();
  } catch (error) {
    log(`Connection error: ${error.message}`);
  }
});

document.getElementById('device-select').addEventListener('change', (e) => {
  if (e.target.value) {
    loadFirmwares(e.target.value);
    document.getElementById('flash-btn').disabled = false;
  }
});

document.getElementById('firmware-select').addEventListener('change', (e) => {
  selectedFirmware = e.target.value;
});

document.getElementById('flash-btn').addEventListener('click', async () => {
  if (!selectedFirmware) return;

  try {
    document.getElementById('progress-container').style.display = 'block';
    await port.open({ baudRate: 115200 });
    const esptool = new ESPTool(port);
    
    await esptool.connect();
    log('Starting flash process...');
    
    const response = await fetch(selectedFirmware);
    const firmwareBuffer = await response.arrayBuffer();
    
    await esptool.flash_file(new Uint8Array(firmwareBuffer), (progress) => {
      const percent = Math.round(progress * 100);
      document.getElementById('progress-bar').value = percent;
      document.getElementById('progress-text').textContent = `${percent}%`;
    });

    await esptool.hard_reset();
    log('Flash completed successfully!');
  } catch (error) {
    log(`Flash failed: ${error.message}`);
  } finally {
    if (port) await port.close();
    document.getElementById('progress-container').style.display = 'none';
  }
});

function log(message) {
  const logElement = document.getElementById('flash-log');
  logElement.textContent += `${new Date().toLocaleTimeString()}: ${message}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
</script>

<style>
.flash-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 8px;
}

.connection-box {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}

button {
  background: #FFD700;
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.selection-box {
  margin: 15px 0;
  background: #333;
  padding: 15px;
  border-radius: 6px;
}

select {
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  background: #444;
  color: #fff;
  border: 1px solid #00FFFF;
  border-radius: 4px;
}

.progress-container {
  margin: 20px 0;
  background: #333;
  padding: 15px;
  border-radius: 6px;
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
  white-space: pre-wrap;
}
</style>
