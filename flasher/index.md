---
layout: default
title: Web-Flasher
---
This flasher is for testing purposes only to get IRL feedback and it's manually updated when I can. For up to date firmware it is advised to compile your own version using the github repo [GitHub - InkHUD UI](https://github.com/todd-herbert/meshtastic-firmware/tree/InkHUD)  

<!-- Load the esp-web-tools script -->
<script type="module" src="./esp-web-tools/install-button.js?module"></script>

<!-- Script to configure esp-web-tools to match our selection -->
<script type="text/javascript" src="./configure-flasher.js"></script>

<!-- Custom styling for this page -->
<link rel="stylesheet" href="./style.css">

<div class="flasher-container">
  <h2 class="flasher-title">InkHUD Flasher</h2>

  <label for="hardwareMenu" class="flasher-label">Hardware</label>
  <div class="dropdown-container">
    <select id="hardwareMenu" onchange="updateFlasherConfig()">
      <option>Select Device</option>
      <option value="Vision_Master_E213">Heltec Vision Master E213</option>
      <option value="Vision_Master_E290">Heltec Vision Master E290</option>
      <option value="Wireless_Paper_V1_1">Heltec Wireless Paper V1.1</option>
      <option value="T-Echo">T-Echo</option>
    </select>
  </div>

  <div id="eraseContainer" class="checkbox-container">
    <input id="eraseCheckbox" type="checkbox" checked="true" onchange="updateFlasherConfig()" />
    <label for="eraseCheckbox" class="flasher-label">Full Erase</label>
  </div>

  <!-- Connect and Flash Button -->
  <esp-web-install-button id="espWebTools" showLog="true">
    <button slot="activate" id="installButton">Connect and Flash</button>
    <span slot="unsupported" id="unsupportedText">Your browser does not support the WebSerial API. Please switch to a compatible browser, such as Chrome or Edge, for full functionality.</span>
  </esp-web-install-button>

  <!-- Download Firmware Button -->
  <a id="downloadFirmware" 
     href="https://harukitoreda.github.io/Meshtastic-Experiments/flasher/firmware/T-Echo/InkHUD_2.5.20_firmware.uf2" 
     download 
     style="display: none;"
     onclick="showDownloadPopup(); return false;">
    <button id="downloadButton">Download Firmware</button>
  </a>
</div>
