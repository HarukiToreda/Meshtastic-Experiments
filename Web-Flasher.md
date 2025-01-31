---
layout: default
title: Web Flasher
---

# Meshtastic Web Flasher

<div id="flasher-container">
  <div class="flash-controls">
    <div class="connect-box">
      <button id="connect-btn">Connect Device</button>
      <span id="connection-status">⛔ Not Connected</span>
    </div>
    
    <div class="selection-box">
      <label>Select Device:</label>
      <select id="device-select" disabled>
        <option value="">First connect device</option>
      </select>
    </div>

    <div class="selection-box">
      <label>Select Firmware:</label>
      <select id="firmware-select" disabled>
        <option value="">Select device first</option>
      </select>
    </div>

    <button id="flash-btn" disabled>Flash Firmware</button>
  </div>

  <div id="progress-container" style="display: none;">
    <progress id="progress-bar" value="0" max="100"></progress>
    <span id="progress-text">0%</span>
  </div>

  <div id="log-container">
    <pre id="log"></pre>
  </div>
</div>

<script src="https://unpkg.com/@espruino-tools/esptool@0.0.9/dist/esptool.min.js"></script>
<script>
// Fix ESPTool initialization
const ESPTool = window.EspruinoTools.ESPTool;

// Keep your original configuration
const REPO = 'HarukiToreda/Meshtastic-Experiments';
const BRANCH = 'main';
const FIRMWARES_PATH = 'firmwares';
const CORS_PROXY = 'https://api.allorigins.win/get?url=';

// Modify loadDevices and loadFirmwares functions
async function loadDevices() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) throw new Error(`GitHub error: ${response.status}`);
    
    const data = await response.json();
    // Handle AllOrigins proxy format
    const contents = JSON.parse(data.contents); 
    
    const deviceSelect = document.getElementById('device-select');
    deviceSelect.innerHTML = '<option value="">Select a device</option>';
    
    contents.forEach(item => {
      if (item.type === 'dir') {
        const option = document.createElement('option');
        option.value = item.name;
        option.textContent = item.name;
        deviceSelect.appendChild(option);
      }
    });
    
    deviceSelect.disabled = false;
    log(`Loaded ${contents.length} devices`);
  } catch (error) {
    log(`Device loading failed: ${error.message}`);
  }
}

async function loadFirmwares(device) {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}/${device}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    const data = await response.json();
    const contents = JSON.parse(data.contents);
    
    const firmwareSelect = document.getElementById('firmware-select');
    firmwareSelect.innerHTML = '<option value="">Select a firmware</option>';
    
    contents.forEach(file => {
      if (file.name.endsWith('.bin')) {
        const option = document.createElement('option');
        option.value = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${FIRMWARES_PATH}/${device}/${file.name}`;
        option.textContent = file.name;
        firmwareSelect.appendChild(option);
      }
    });
    
    firmwareSelect.disabled = false;
    log(`Loaded ${contents.length} firmwares for ${device}`);
  } catch (error) {
    log(`Firmware loading failed: ${error.message}`);
  }
}

// Keep the rest of your original code unchanged
</script>

<style>
.flash-controls {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #1a1a1a;
  border-radius: 8px;
}

.connect-box {
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

#progress-container {
  background: #333;
  padding: 15px;
  border-radius: 6px;
  margin: 20px 0;
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

#log-container {
  background: #000;
  padding: 15px;
  border-radius: 6px;
}

#log {
  color: #00FF00;
  height: 200px;
  overflow-y: auto;
  font-family: monospace;
  font-size: 0.9em;
  white-space: pre-wrap;
}
</style>
