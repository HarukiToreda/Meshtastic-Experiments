---
layout: default
title: Web Flasher
---

# Meshtastic Web Flasher

<div id="flasher-container">
  <!-- Keep the same HTML structure as before -->
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

<script src="https://cdn.jsdelivr.net/npm/@espruino-tools/esptool-js@0.0.9/dist/esptool-js.min.js"></script>
<script>
const ESPTool = window.ESPTool;
const REPO = 'HarukiToreda/Meshtastic-Experiments';
const BRANCH = 'main';
const FIRMWARES_PATH = 'firmwares';
const CORS_PROXY = 'https://api.allorigins.win/get?url=';

let port = null;
let selectedFirmware = null;
let esptool = null;

// Unified error handler
function handleError(error, context = 'operation') {
  console.error(`Error in ${context}:`, error);
  let message = error.message;
  if (error.cause) message += ` (${error.cause})`;
  log(`❌ ${message}`);
}

async function loadDevices() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) throw new Error(`GitHub error: ${response.status}`);
    
    const data = await response.json();
    const contents = data.contents ? JSON.parse(data.contents) : data;

    // Handle GitHub API errors
    if (contents.message) throw new Error(`GitHub: ${contents.message}`);
    if (!Array.isArray(contents)) throw new Error('Invalid directory structure');

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
    log(`Loaded ${contents.filter(i => i.type === 'dir').length} devices`);
  } catch (error) {
    handleError(error, 'loading devices');
  }
}

async function loadFirmwares(device) {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}/${encodeURIComponent(device)}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) throw new Error(`GitHub error: ${response.status}`);
    
    const data = await response.json();
    const contents = data.contents ? JSON.parse(data.contents) : data;

    if (contents.message) throw new Error(`GitHub: ${contents.message}`);
    
    const firmwareSelect = document.getElementById('firmware-select');
    firmwareSelect.innerHTML = '<option value="">Select a firmware</option>';
    
    contents.forEach(file => {
      if (file.name.endsWith('.bin')) {
        const option = document.createElement('option');
        option.value = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${FIRMWARES_PATH}/${encodeURIComponent(device)}/${encodeURIComponent(file.name)}`;
        option.textContent = file.name;
        firmwareSelect.appendChild(option);
      }
    });
    
    firmwareSelect.disabled = false;
    log(`Loaded ${contents.filter(f => f.name.endsWith('.bin')).length} firmwares`);
  } catch (error) {
    handleError(error, 'loading firmwares');
  }
}

// Port management
async function cleanup() {
  try {
    if (port) {
      await port.close();
      log('Port closed');
    }
  } catch (error) {
    handleError(error, 'cleanup');
  } finally {
    port = null;
    esptool = null;
    document.getElementById('connect-btn').disabled = false;
    document.getElementById('connection-status').textContent = '⛔ Not Connected';
    document.getElementById('flash-btn').disabled = true;
  }
}

// Event handlers
document.getElementById('connect-btn').addEventListener('click', async () => {
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    esptool = new ESPTool(port);
    
    // Validate chip type
    await esptool.connect();
    const chip = await esptool.get_chip_description();
    if (!chip.includes('ESP32')) throw new Error('Unsupported chip - only ESP32 supported');
    
    document.getElementById('connect-btn').disabled = true;
    document.getElementById('connection-status').textContent = '✅ Connected';
    document.getElementById('flash-btn').disabled = false;
    log(`Connected to ${chip}`);
    
    await loadDevices();
  } catch (error) {
    handleError(error, 'connection');
    await cleanup();
  }
});

document.getElementById('device-select').addEventListener('change', (e) => {
  const device = e.target.value;
  if (device) loadFirmwares(device);
});

document.getElementById('firmware-select').addEventListener('change', (e) => {
  selectedFirmware = e.target.value;
});

document.getElementById('flash-btn').addEventListener('click', async () => {
  if (!selectedFirmware) {
    log('Please select a firmware first');
    return;
  }

  try {
    document.getElementById('flash-btn').disabled = true;
    document.getElementById('progress-container').style.display = 'block';
    
    log(`Downloading firmware: ${selectedFirmware}`);
    const response = await fetch(selectedFirmware);
    if (!response.ok) throw new Error(`Failed to download firmware (${response.status})`);
    const firmwareBuffer = await response.arrayBuffer();
    
    log('Starting flash process...');
    await esptool.flash_file(new Uint8Array(firmwareBuffer), (progress) => {
      const percent = Math.round(progress * 100);
      document.getElementById('progress-bar').value = percent;
      document.getElementById('progress-text').textContent = `${percent}%`;
      if (percent % 10 === 0) log(`Flashing: ${percent}% complete`);
    });

    await esptool.hard_reset();
    log('✅ Flash completed successfully!');
  } catch (error) {
    handleError(error, 'flashing');
  } finally {
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('flash-btn').disabled = false;
    await cleanup();
  }
});

// Keep the same log function and CSS styles
function log(message) {
  const logElement = document.getElementById('log');
  logElement.textContent += `${new Date().toLocaleTimeString()}: ${message}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
</script>

<style>
/* Keep the same CSS styles as before */
.flash-controls { /* ... */ }
.connect-box { /* ... */ }
button { /* ... */ }
.selection-box { /* ... */ }
select { /* ... */ }
#progress-container { /* ... */ }
progress { /* ... */ }
#progress-text { /* ... */ }
#log-container { /* ... */ }
#log { /* ... */ }
</style>
