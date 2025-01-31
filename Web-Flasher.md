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

<script src="https://cdn.jsdelivr.net/npm/@espruino-tools/esptool-js@0.0.9/dist/esptool-js.min.js"></script>

<script>
const ESPTool = window.EspTool;
const REPO = 'HarukiToreda/Meshtastic-Experiments';
const BRANCH = 'main';
const FIRMWARES_PATH = 'Meshtastic-Experiments/firmwares'; // Corrected path
const CORS_PROXY = 'https://api.allorigins.win/raw?url='; // Changed proxy

let port = null;
let selectedFirmware = null;

async function loadDevices() {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) throw new Error(`GitHub error: ${response.status}`);
    
    const devices = await response.json();
    
    const deviceSelect = document.getElementById('device-select');
    deviceSelect.innerHTML = '<option value="">Select a device</option>';
    
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
    log(`Device loading failed: ${error.message}`);
    console.error('API Response:', error);
  }
}

async function loadFirmwares(device) {
  try {
    const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FIRMWARES_PATH}/${device}?ref=${BRANCH}`;
    const response = await fetch(`${CORS_PROXY}${encodeURIComponent(apiUrl)}`);
    
    if (!response.ok) throw new Error(`GitHub error: ${response.status}`);
    
    const files = await response.json();
    
    const firmwareSelect = document.getElementById('firmware-select');
    firmwareSelect.innerHTML = '<option value="">Select a firmware</option>';
    
    files.forEach(file => {
      if (file.name.endsWith('.bin')) {
        const option = document.createElement('option');
        option.value = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${FIRMWARES_PATH}/${device}/${file.name}`;
        option.textContent = file.name.replace(/_/g, ' ');
        firmwareSelect.appendChild(option);
      }
    });
    
    firmwareSelect.disabled = false;
    log(`Loaded firmwares for ${device}`);
  } catch (error) {
    log(`Firmware loading failed: ${error.message}`);
  }
}

// Keep the rest of the code the same
</script>

<style>
/* Keep existing styles */
</style>
