---
layout: default
title: Web Flasher
---

# Meshtastic Web Flasher

<div id="flasher-container">
  <div id="status"></div>
  
  <div class="flash-controls">
    <button id="connect-btn" onclick="connect()">Connect Device</button>
    <input type="file" id="firmware-file" accept=".bin" disabled>
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
let port = null;
let selectedFile = null;

async function connect() {
  try {
    port = await navigator.serial.requestPort();
    document.getElementById('connect-btn').disabled = true;
    document.getElementById('firmware-file').disabled = false;
    document.getElementById('flash-btn').disabled = false;
    log('Connected to device');
  } catch (error) {
    log(`Connection error: ${error}`);
  }
}

document.getElementById('firmware-file').addEventListener('change', function(e) {
  selectedFile = e.target.files[0];
  log(`Selected firmware: ${selectedFile.name}`);
});

async function beginFlash() {
  if (!selectedFile) {
    log('Please select a firmware file first');
    return;
  }

  try {
    document.getElementById('progress-container').style.display = 'block';
    const options = {
      baudRate: 115200,
      autoDtrReset: false
    };
    
    await port.open(options);
    const esptool = new ESPTool(port);
    
    await esptool.connect();
    await esptool.flash_file(selectedFile, (progress) => {
      const percent = Math.round(progress * 100);
      document.getElementById('progress-bar').value = percent;
      document.getElementById('progress-text').textContent = `${percent}%`;
    });
    
    log('Flash complete! Resetting device...');
    await esptool.hard_reset();
    log('Device ready to use');
  } catch (error) {
    log(`Flash failed: ${error}`);
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
/* Keep your existing CSS styles */
</style>
