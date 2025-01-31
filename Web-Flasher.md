---
layout: default
title: Web Flasher
---

# Meshtastic Web Flasher

<div id="flasher-container">
  <div class="flash-controls">
    <div class="connect-box">
      <button id="connect-btn" onclick="connect()">Connect Device</button>
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

    <button id="flash-btn" onclick="beginFlash()" disabled>Flash Firmware</button>
  </div>

  <div id="progress-container" style="display: none;">
    <progress id="progress-bar" value="0" max="100"></progress>
    <span id="progress-text">0%</span>
  </div>

  <div id="log-container">
    <pre id="log"></pre>
  </div>
</div>

<script src="https://unpkg.com/esptool-js@1.3.0/dist/web/esptool.js"></script>

<script>
const REPO = 'HarukiToreda/Meshtastic-Experiments';
const BRANCH = 'main';
const FIRMWARES_PATH = 'Meshtastic-Experiments/firmwares';
const CORS_PROXY = 'https://api.allorigins.win/get?url=';

let port = null;
let selectedFirmware = null;

async function loadDevices() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) {
      throw new Error(`GitHub error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const contents = JSON.parse(data.contents);
    
    const deviceSelect = document.getElementById('device-select');
    deviceSelect.innerHTML = '<option value="">Select a device</option>';
    
    if (Array.isArray(contents)) {
      contents.forEach(item => {
        if (item.type === 'dir') {
          const option = document.createElement('option');
          option.value = item.name;
          option.textContent = item.name;
          deviceSelect.appendChild(option);
        }
      });
      
      if (deviceSelect.options.length > 1) {
        deviceSelect.disabled = false;
        log('Devices loaded successfully');
      } else {
        log('No devices found in firmware directory');
      }
    } else {
      throw new Error('Unexpected response format from GitHub');
    }
  } catch (error) {
    log(`Device loading failed: ${error.message}`);
    console.error('Error details:', error);
  }
}

async function loadFirmwares(device) {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}/${device}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) throw new Error(`GitHub error: ${response.status}`);
    
    const data = await response.json();
    const contents = JSON.parse(data.contents);
    
    const firmwareSelect = document.getElementById('firmware-select');
    firmwareSelect.innerHTML = '<option value="">Select a firmware</option>';
    
    if (Array.isArray(contents)) {
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
    }
  } catch (error) {
    log(`Firmware loading failed: ${error.message}`);
  }
}

async function connect() {
  try {
    port = await navigator.serial.requestPort();
    document.getElementById('connect-btn').disabled = true;
    document.getElementById('connection-status').textContent = '✅ Connected';
    document.getElementById('flash-btn').disabled = false;
    log('Connected to device');
    await loadDevices();
  } catch (error) {
    log(`Connection error: ${error.message}`);
  }
}

document.getElementById('device-select').addEventListener('change', function(e) {
  const device = e.target.value;
  if (device) {
    loadFirmwares(device);
  }
});

document.getElementById('firmware-select').addEventListener('change', function(e) {
  selectedFirmware = e.target.value;
});

async function beginFlash() {
  if (!selectedFirmware) {
    log('Please select a firmware first');
    return;
  }

  try {
    document.getElementById('progress-container').style.display = 'block';
    const options = { baudRate: 115200 };
    
    log(`Downloading firmware: ${selectedFirmware}`);
    const response = await fetch(selectedFirmware);
    const firmwareBuffer = await response.arrayBuffer();
    
    await port.open(options);
    const esptool = new ESPTool(port);
    
    await esptool.connect();
    log('Starting flash process...');
    
    await esptool.flash_file(new Uint8Array(firmwareBuffer), (progress) => {
      const percent = Math.round(progress * 100);
      document.getElementById('progress-bar').value = percent;
      document.getElementById('progress-text').textContent = `${percent}%`;
    });
    
    log('Flash complete! Resetting device...');
    await esptool.hard_reset();
    log('Device ready to use');
  } catch (error) {
    log(`Flash failed: ${error.message}`);
  } finally {
    document.getElementById('progress-container').style.display = 'none';
    if (port) await port.close();
  }
}

function log(message) {
  const logElement = document.getElementById('log');
  logElement.textContent += `${new Date().toLocaleTimeString()}: ${message}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
</script>

<style>
.flash-controls {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
}

.connect-box {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}

#connect-btn {
  padding: 10px 20px;
  background: #FFD700;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

#connection-status {
  color: #00FFFF;
  font-size: 0.9em;
}

.selection-box {
  background: #1a1a1a;
  padding: 15px;
  border-radius: 5px;
}

select {
  width: 100%;
  padding: 8px;
  background: #333;
  color: #fff;
  border: 1px solid #FFD700;
  border-radius: 4px;
  margin-top: 5px;
}

label {
  color: #00FFFF;
  font-size: 0.9em;
}

#flash-btn {
  padding: 12px 24px;
  background: #00FF00;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 200px;
}

#log-container {
  background: #1a1a1a;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
}

#log {
  color: #00FF00;
  height: 200px;
  overflow-y: auto;
  margin: 0;
  font-family: monospace;
}

progress {
  width: 100%;
  height: 20px;
  margin-top: 10px;
  accent-color: #FFD700;
}

#progress-text {
  color: #00FFFF;
  margin-left: 10px;
}
</style>
