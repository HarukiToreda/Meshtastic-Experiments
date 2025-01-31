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
    <button id="flash-btn" onclick="beginFlash()" disabled>Flash Selected Firmware</button>
  </div>

  <div id="progress-container" style="display: none;">
    <progress id="progress-bar" value="0" max="100"></progress>
    <span id="progress-text">0%</span>
  </div>

  <div id="log-container">
    <pre id="log"></pre>
  </div>
</div>

<link href="https://cdn.jsdelivr.net/npm/@espruino-tools/esptool-js/dist/esptool-js.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@espruino-tools/esptool-js@0.0.9/dist/esptool-js.min.js"></script>

<script>
let espDevice = null;
let selectedFile = null;

async function connect() {
  try {
    const port = await navigator.serial.requestPort();
    espDevice = new EsptoolJS(port);
    
    document.getElementById('connect-btn').disabled = true;
    document.getElementById('firmware-file').disabled = false;
    document.getElementById('flash-btn').disabled = false;
    log('Connected to device');
  } catch (error) {
    log(`Connection error: ${error.message}`);
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
    
    await espDevice.connect();
    await espDevice.eraseFlash();
    
    const fileBuffer = await readFile(selectedFile);
    const flashOptions = {
      fileArray: [{ data: fileBuffer, address: 0x1000 }],
      flashSize: '4MB',
      flashMode: 'dio',
      flashFreq: '80m',
      erase: false
    };

    await espDevice.writeFlash(flashOptions, (progress) => {
      const progressPercent = Math.round(progress * 100);
      document.getElementById('progress-bar').value = progressPercent;
      document.getElementById('progress-text').textContent = `${progressPercent}%`;
    });

    log('Flash complete! Resetting device...');
    await espDevice.reset();
    log('Device ready to use');
  } catch (error) {
    log(`Flash failed: ${error.message}`);
  } finally {
    document.getElementById('progress-container').style.display = 'none';
  }
}

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
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
  gap: 10px;
  flex-wrap: wrap;
}

#log-container {
  background: #1a1a1a;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
}

#log {
  color: #00FF00;
  height: 300px;
  overflow-y: auto;
  margin: 0;
}

progress {
  width: 200px;
  height: 20px;
  margin-right: 10px;
}
</style>
