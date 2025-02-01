---
layout: default
title: Web-Flasher
---

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
    <select id="hardwareMenu">
      <option>Select Device</option>
      <option value="Vision_Master_E213">Heltec Vision Master E213</option>
      <option value="Vision_Master_E290">Heltec Vision Master E290</option>
      <option value="Wireless_Paper_V1_1">Heltec Wireless Paper V1.1</option>
    </select>
  </div>

  <div class="checkbox-container">
    <input id="eraseCheckbox" type="checkbox" checked="true" />
    <label for="eraseCheckbox" class="flasher-label">Full Erase</label>
  </div>

  <esp-web-install-button id="espWebTools" showLog="true">
    <button slot="activate" id="installButton" onclick="updateFlasherConfig()">Connect and Flash</button>
    <span slot="unsupported" id="unsupportedText">Unsupported browser message goes here</span>
  </esp-web-install-button>
</div>
