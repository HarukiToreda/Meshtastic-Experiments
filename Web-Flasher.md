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

<!-- Use the correct ESPTool library -->
<script src="https://unpkg.com/@espruino-tools/core@0.0.9/dist/core.min.js"></script>
<script src="https://unpkg.com/@espruino-tools/esptool@0.0.9/dist/esptool.min.js"></script>
<script src="index.ts" type="module"></script>

<style>
/* Keep your original CSS styles */
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
