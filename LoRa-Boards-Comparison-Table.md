---
layout: default
title: LoRa Boards Comparison Table
---

# LoRa Boards Comparison Table

Specifications and prices checked against manufacturer documentation: **August 1–5, 2026**.

<style>
  .content {
    min-width: 0;
  }

  .comparison-table-scroll {
    overflow: visible;
    position: relative;
  }

  #comparisonTable {
    border-collapse: separate;
    border-spacing: 0;
    margin: 0;
  }

  #comparisonTable thead th {
    position: sticky;
    top: 0;
    z-index: 3;
    background: #1a1a1a;
  }

  #comparisonTable thead th:first-child,
  #comparisonTable tbody td:first-child {
    position: sticky;
    left: 240px;
    min-width: 150px;
    background: #1a1a1a;
    box-shadow: -20px 0 0 #1a1a1a;
    transition: left 0.3s ease;
  }

  .sidebar.hidden ~ .content #comparisonTable thead th:first-child,
  .sidebar.hidden ~ .content #comparisonTable tbody td:first-child {
    left: 15px;
  }

  #comparisonTable tbody td:first-child {
    z-index: 2;
  }

  #comparisonTable thead th:first-child {
    z-index: 4;
  }

  .filter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(145px, 100%), 1fr));
    gap: 16px 20px;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .filter-grid[hidden] {
    display: none;
  }

  .filter-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .filter-toggle {
    padding: 5px 10px;
    border: 0;
    border-radius: 5px;
    background: #FFD700;
    color: #000000;
    cursor: pointer;
    font: inherit;
  }

  .filter-grid > div {
    min-width: 0;
    margin-right: 0 !important;
    overflow-wrap: anywhere;
  }

  .filter-grid label,
  .filter-option {
    display: block;
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
  }
</style>

<div class="filter-heading">
  <h2>Filter Boards</h2>
  <button type="button" id="filterToggle" class="filter-toggle" aria-controls="filterGrid" aria-expanded="true">Hide filters</button>
</div>

<div id="filterGrid" class="filter-grid">
  <div style="margin-right: 20px;">
    <label>MCU Chip:</label>
    <div>
      <input type="checkbox" class="mcuFilter" value="ESP32"> ESP32<br>
      <input type="checkbox" class="mcuFilter" value="nRF"> nRF52840<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Node Type:</label>
    <div>
      <input type="checkbox" class="nodeTypeFilter" value="Companion"> Companion Node<br>
      <input type="checkbox" class="nodeTypeFilter" value="CompactCard"> Compact Card<br>
      <input type="checkbox" class="nodeTypeFilter" value="StandaloneKeyboard"> Standalone Keyboard<br>
      <input type="checkbox" class="nodeTypeFilter" value="InfrastructureSolar"> Infrastructure Solar<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>LoRa Chip:</label>
    <div>
      <input type="checkbox" class="loraFilter" value="SX1276"> SX1276<br>
      <input type="checkbox" class="loraFilter" value="SX1278"> SX1278<br>      
      <input type="checkbox" class="loraFilter" value="SX1262"> SX1262<br>
      <input type="checkbox" class="loraFilter" value="SX1280"> SX1280<br>
      <input type="checkbox" class="loraFilter" value="LR1110"> LR1110<br>
      <input type="checkbox" class="loraFilter" value="LR1121"> LR1121<br>
      <input type="checkbox" class="loraFilter" value="LR2021"> LR2021<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Frequency Band:</label>
    <div>
      <input type="checkbox" class="frequencyFilter" value="433"> 433 MHz<br>
      <input type="checkbox" class="frequencyFilter" value="868"> EU868<br>
      <input type="checkbox" class="frequencyFilter" value="915"> US915<br>
      <input type="checkbox" class="frequencyFilter" value="923"> AU/NZ923<br>
      <input type="checkbox" class="frequencyFilter" value="2400"> 2.4 GHz<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>GPS / GNSS:</label>
    <div>
      <input type="checkbox" class="gpsFilter" value="GPS"> GPS<br>
      <input type="checkbox" class="gpsFilter" value="GLONASS"> GLONASS<br>
      <input type="checkbox" class="gpsFilter" value="BeiDou"> BeiDou<br>
      <input type="checkbox" class="gpsFilter" value="Galileo"> Galileo<br>
      <input type="checkbox" class="gpsFilter" value="QZSS"> QZSS<br>
      <input type="checkbox" class="gpsFilter" value="NavIC"> NavIC<br>
      <input type="checkbox" class="gpsFilter" value="Optional"> Optional<br>
      <input type="checkbox" class="gpsFilter" value="None"> No GNSS<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Screen:</label>
    <div>
      <input type="checkbox" class="screenFilter" value="Eink"> E-Ink<br>
      <input type="checkbox" class="screenFilter" value="BacklitEink"> E-Ink(Backlit)<br>
      <input type="checkbox" class="screenFilter" value="LCD"> LCD<br>      
      <input type="checkbox" class="screenFilter" value="OLED"> OLED<br>      
      <input type="checkbox" class="screenFilter" value="None"> None<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Wi-Fi:</label>
    <div>
      <input type="checkbox" class="wifiFilter" value="Yes"> Yes<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Input Interface:</label>
    <div>
      <input type="checkbox" class="inputFilter" value="Touchscreen"> Touchscreen<br>
      <input type="checkbox" class="inputFilter" value="TouchButton"> Touch button<br>
      <input type="checkbox" class="inputFilter" value="Keyboard"> Keyboard<br>
      <input type="checkbox" class="inputFilter" value="User"> User Button<br>
      <input type="checkbox" class="inputFilter" value="Reset"> Reset button<br>
      <input type="checkbox" class="inputFilter" value="Power"> Power button<br>
      <input type="checkbox" class="inputFilter" value="Boot"> Boot button<br>
      <input type="checkbox" class="inputFilter" value="Third"> 3rd button<br>
      <input type="checkbox" class="inputFilter" value="Joystick"> Joystick<br>
      <input type="checkbox" class="inputFilter" value="Encoder"> Encoder<br>
      <input type="checkbox" class="inputFilter" value="Knob"> Knob<br>
      <input type="checkbox" class="inputFilter" value="Trackball"> Trackball<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Power / Charging:</label>
    <div>
      <input type="checkbox" class="powerFilter" value="USB-C"> USB-C<br>
      <input type="checkbox" class="powerFilter" value="Micro-USB"> Micro-USB<br>
      <input type="checkbox" class="powerFilter" value="Magnetic"> Magnetic<br>
      <input type="checkbox" class="powerFilter" value="Magnetic2Pin"> Magnetic 2-pin<br>
      <input type="checkbox" class="powerFilter" value="Pogo"> Pogo pins<br>
      <input type="checkbox" class="powerFilter" value="Solar"> Solar<br>
      <input type="checkbox" class="powerFilter" value="DC"> DC<br>
      <input type="checkbox" class="powerFilter" value="PoE"> PoE<br>
      <input type="checkbox" class="powerFilter" value="Wireless"> Wireless charging<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Sensor Capability:</label>
    <div>
      <input type="checkbox" class="sensorFilter" value="TempHumidity"> Temperature / humidity<br>
      <input type="checkbox" class="sensorFilter" value="Pressure"> Air pressure<br>
      <input type="checkbox" class="sensorFilter" value="AirQuality"> Air quality<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Motion / Compass:</label>
    <div>
      <input type="checkbox" class="motionFilter" value="Accelerometer"> Accelerometer<br>
      <input type="checkbox" class="motionFilter" value="Gyroscope"> Gyroscope<br>
      <input type="checkbox" class="motionFilter" value="Magnetometer"> Magnetometer / compass<br>
      <input type="checkbox" class="motionFilter" value="Optional"> Optional<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Expansion Connector:</label>
    <div>
      <input type="checkbox" class="portFilter" value="Qwiic"> Qwiic<br>
      <input type="checkbox" class="portFilter" value="Grove"> Grove<br>
      <input type="checkbox" class="portFilter" value="QuickLink"> QuickLink<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Storage Expansion:</label>
    <div>
      <input type="checkbox" class="storageFilter" value="Card"> microSD / TF card slot<br>
      <input type="checkbox" class="storageFilter" value="NoCard"> No listed card slot<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Transmit Power:</label>
    <div>
      <input type="checkbox" class="txPowerFilter" value="Under20"> Under 20 dBm<br>
      <input type="checkbox" class="txPowerFilter" value="20to22"> 20–22 dBm<br>
      <input type="checkbox" class="txPowerFilter" value="Over22"> Over 22 dBm<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Price Range USD:</label>
    <div>
      <input type="checkbox" class="priceFilter" value="0-20"> 0-20<br>
      <input type="checkbox" class="priceFilter" value="21-40"> 21-40<br>
      <input type="checkbox" class="priceFilter" value="41-60"> 41-60<br>
      <input type="checkbox" class="priceFilter" value="61+"> 61+<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Brand:</label>
    <div>
      <input type="checkbox" class="brandFilter" value="Heltec"> Heltec<br>
      <input type="checkbox" class="brandFilter" value="RAKwireless"> RAKwireless<br>
      <input type="checkbox" class="brandFilter" value="LILYGO"> LILYGO<br>
      <input type="checkbox" class="brandFilter" value="B&Q"> B&Q Consulting<br>
      <input type="checkbox" class="brandFilter" value="Seeed"> Seeed Studio<br>
      <input type="checkbox" class="brandFilter" value="Elecrow"> Elecrow<br>
      <input type="checkbox" class="brandFilter" value="Haruki Toreda"> Haruki Toreda<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Case Included:</label>
    <div>
      <input type="checkbox" class="caseFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="caseFilter" value="No"> No<br>
      <input type="checkbox" class="caseFilter" value="Optional"> Optional<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Battery Capacity:</label>
    <div>
      <input type="checkbox" class="batteryFilter" value="UpTo500"> Up to 500 mAh<br>
      <input type="checkbox" class="batteryFilter" value="501to1000"> 501-1000 mAh<br>
      <input type="checkbox" class="batteryFilter" value="1001to1500"> 1001-1500 mAh<br>
      <input type="checkbox" class="batteryFilter" value="1501to2000"> 1501-2000 mAh<br>
      <input type="checkbox" class="batteryFilter" value="2001to3000"> 2001-3000 mAh<br>
      <input type="checkbox" class="batteryFilter" value="3001to5000"> 3001-5000 mAh<br>
      <input type="checkbox" class="batteryFilter" value="5001to8000"> 5001-8000 mAh<br>
      <input type="checkbox" class="batteryFilter" value="Over8000"> Over 8000 mAh<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>External Notification:</label>
    <div>
      <input type="checkbox" class="notificationFilter" value="LED"> LED<br>
      <input type="checkbox" class="notificationFilter" value="Buzzer"> Buzzer<br>
      <input type="checkbox" class="notificationFilter" value="Speaker"> Speaker<br>
      <input type="checkbox" class="notificationFilter" value="Vibration"> Vibration<br>
      <input type="checkbox" class="notificationFilter" value="Emergency"> Emergency light<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Meshtastic Preloaded:</label>
    <div>
      <input type="checkbox" class="meshtasticFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="meshtasticFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Ready-to-use:</label>
    <div>
      <input type="checkbox" class="readyFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="readyFilter" value="No"> No<br>
    </div>
  </div>
</div>

<div class="comparison-table-scroll">
  <table id="comparisonTable">
    <thead>
      <tr>
        <th>Device</th>
        <th data-mcu="ESP32" data-lora="SX1276 SX1278" data-gps="No" data-screen="OLED" data-wifi="Yes" data-input="User" data-price="17.90" data-brand="Heltec" data-case="Optional" data-battery="No" data-meshtastic="No" data-ready="No">Heltec WiFi LoRa 32 V2.1 (phaseout)</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="OLED" data-wifi="Yes" data-input="User" data-price="17.90" data-brand="Heltec" data-case="Optional" data-battery="No" data-meshtastic="No" data-ready="No">Heltec WiFi LoRa 32 V3.2</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Eink" data-wifi="Yes" data-input="User" data-price="15.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Wireless Paper</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="Yes" data-input="User" data-price="14.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Wireless Stick Lite (V3)</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-screen="LCD None" data-wifi="Yes" data-input="User" data-price="22.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Wireless Tracker V1.1</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="Optional" data-screen="None" data-wifi="Yes" data-input="User" data-price="25.90" data-brand="Heltec" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">Heltec Capsule Sensor V3</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="Eink" data-wifi="Yes" data-input="User" data-price="18.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Vision Master E213</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="Eink" data-wifi="Yes" data-input="User" data-price="19.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Vision Master E290</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="LCD" data-wifi="Yes" data-input="User" data-price="17.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Vision Master T190</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="LCD" data-wifi="No" data-input="User" data-price="27.90 29.90 38.80" data-brand="Heltec" data-case="Yes" data-battery="No" data-meshtastic="Yes" data-ready="No">Heltec Mesh Node T114</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="No" data-input="None" data-price="27.99" data-brand="RAKwireless" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">WisBlock Starter Kit RAK4631 + RAK19003</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="No" data-input="None" data-price="29.99" data-brand="RAKwireless" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">WisBlock Starter Kit RAK4631 + RAK19007</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="OLED" data-wifi="No" data-input="User" data-price="89.97" data-brand="RAKwireless" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">WisMesh Pocket V2</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="LCD" data-wifi="Yes" data-input="Touchscreen, Keyboard, User" data-price="46.52" data-brand="LILYGO" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">T-Deck</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="Eink" data-wifi="No" data-input="TouchButton, User" data-price="48.49" data-brand="LILYGO" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">T-Echo</th>
        <th data-mcu="ESP32" data-lora="SX1276 SX1278" data-gps="Yes" data-screen="OLED None" data-wifi="Yes" data-input="User" data-price="30.77" data-brand="LILYGO" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">T-Beam</th>
        <th data-mcu="ESP32" data-lora="SX1262 LR1121" data-gps="Yes" data-screen="OLED" data-wifi="Yes" data-input="User" data-price="40.35" data-brand="LILYGO" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">T-Beam Supreme</th>
        <th data-mcu="ESP32" data-lora="SX1262 SX1276 SX1278 SX1280" data-gps="No" data-screen="OLED" data-wifi="Yes" data-input="User" data-price="25.71" data-brand="LILYGO" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">T3-S3</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="OLED" data-wifi="Yes" data-input="User" data-price="109.00" data-brand="B&Q" data-case="Yes" data-battery="No" data-meshtastic="Yes" data-ready="No">Station G2</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="OLED" data-wifi="No" data-input="User" data-price="86.00" data-brand="B&Q" data-case="Yes" data-battery="No" data-meshtastic="Yes" data-ready="No">Nano G2 Ultra</th>
        <th data-mcu="nRF" data-lora="LR1110" data-gps="Yes" data-screen="None" data-wifi="No" data-input="User" data-price="35.91" data-brand="Seeed" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">SenseCAP Card Tracker T1000-E</th>
        <th data-mcu="nRF" data-lora="LR1110" data-gps="Yes" data-screen="None" data-wifi="No" data-input="User" data-price="29.90" data-brand="Seeed" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Wio Tracker 1110 Dev Board</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Brand</td>
        <td>Heltec</td><!--Heltec V2-->
        <td>Heltec</td><!--Heltec V3.2-->
        <td>Heltec</td><!--Wireless Paper-->
        <td>Heltec</td><!--Wireless Stick Lite-->
        <td>Heltec</td><!--Wireless Tracker-->
        <td>Heltec</td><!--Capsule Sensor V3-->
        <td>Heltec</td><!--Vision Master E213-->
        <td>Heltec</td><!--Vision Master E290-->
        <td>Heltec</td><!--Vision Master T190-->
        <td>Heltec</td><!--T114-->
        <td>RAKwireless</td><!--RAKRAK19003-->
        <td>RAKwireless</td><!--RAKRAK19007-->
        <td>RAKwireless</td><!--WisMesh-->
        <td>LILYGO</td><!--T-Deck-->
        <td>LILYGO</td><!--T-Echo-->
        <td>LILYGO</td><!--T-Beam-->
        <td>LILYGO</td><!--T-Beam-Supreme-->
        <td>LILYGO</td><!--T3-S3-->
        <td>B&Q Consulting</td><!--Station G2-->
        <td>B&Q Consulting</td><!--Nano G2 Ultra-->
        <td>Seeed Studio</td><!--Wio Tracker 1110-->
        <td>Seeed Studio</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Base Price USD (last checked 2026-08-01/05)</td>
        <td><a href="https://heltec.org/project/wifi-lora-32v2/" target="_blank" rel="noopener noreferrer">$17.90</a></td><!--Heltec V2-->
        <td><a href="https://heltec.org/project/wifi-lora-32-v3/" target="_blank" rel="noopener noreferrer">$17.90</a></td><!--Heltec V3.2-->
        <td><a href="https://heltec.org/project/wireless-paper/" target="_blank" rel="noopener noreferrer">$15.90</a></td><!--Wireless Paper-->
        <td><a href="https://heltec.org/project/wireless-stick-lite-v2/" target="_blank" rel="noopener noreferrer">$14.90</a></td><!--Wireless Stick Lite-->
        <td><a href="https://heltec.org/project/wireless-tracker/" target="_blank" rel="noopener noreferrer">$22.90</a></td><!--Wireless Tracker-->
        <td><a href="https://heltec.org/project/heltec-capsule-sensor-v3/" target="_blank" rel="noopener noreferrer">$25.90</a></td><!--Capsule Sensor V3-->
        <td><a href="https://heltec.org/project/vision-master-e213/" target="_blank" rel="noopener noreferrer">$18.90</a></td><!--Vision Master E213-->
        <td><a href="https://heltec.org/project/vision-master-e290/" target="_blank" rel="noopener noreferrer">$19.90</a></td><!--Vision Master E290-->
        <td><a href="https://heltec.org/project/vision-master-t190/" target="_blank" rel="noopener noreferrer">$17.90</a></td><!--Vision Master T190-->
        <td><a href="https://heltec.org/project/mesh-node-t114/" target="_blank" rel="noopener noreferrer">$27.90/ $38.80</a></td><!--T114-->
        <td><a href="https://store.rakwireless.com/products/wisblock-meshtastic-starter-kit?variant=43884035113158" target="_blank" rel="noopener noreferrer">$27.99</a></td><!--RAKRAK19003-->
        <td><a href="https://store.rakwireless.com/products/wisblock-meshtastic-starter-kit?variant=43884034654406" target="_blank" rel="noopener noreferrer">$29.99</a></td><!--RAKRAK19007-->
        <td><a href="https://store.rakwireless.com/products/wismesh-pocket" target="_blank" rel="noopener noreferrer">$89.97</a></td><!--WisMesh-->
        <td><a href="https://lilygo.cc/products/t-deck-meshtastic" target="_blank" rel="noopener noreferrer">$46.52</a></td><!--T-Deck-->
        <td><a href="https://lilygo.cc/products/t-echo-meshtastic" target="_blank" rel="noopener noreferrer">$48.49</a></td><!--T-Echo-->
        <td><a href="https://lilygo.cc/products/t-beam-meshtastic" target="_blank" rel="noopener noreferrer">$30.77</a></td><!--T-Beam-->
        <td><a href="https://www.lilygo.cc/products/t-beamsupreme-m" target="_blank" rel="noopener noreferrer">$40.35</a></td><!--T-Beam-Supreme-->
        <td><a href="https://lilygo.cc/products/t3-s3-meshtastic" target="_blank" rel="noopener noreferrer">$25.71</a></td><!--T3-S3-->
        <td><a href="https://shop.uniteng.com/product/meshtastic-mesh-device-station-edition/" target="_blank" rel="noopener noreferrer">$109.00</a></td><!--Station G2-->
        <td><a href="https://shop.uniteng.com/product/meshtastic-mesh-device-nano-g2-ultra/" target="_blank" rel="noopener noreferrer">$86.00</a></td><!--Nano G2 Ultra-->
        <td><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html" target="_blank" rel="noopener noreferrer">$35.91</a></td><!--Wio Tracker 1110-->
        <td><a href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank" rel="noopener noreferrer">$29.90</a></td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>MCU Chip</td>
        <td>ESP32-D0WDQ6</td><!--Heltec V2-->
        <td>ESP32-S3FN8</td><!--Heltec V3.2-->
        <td>ESP32-S3FN8</td><!--Wireless Paper-->
        <td>ESP32-S3FN8</td><!--Wireless Stick Lite-->
        <td>ESP32-S3FN8</td><!--Wireless Tracker-->
        <td>ESP32-S3FN8</td><!--Capsule Sensor V3-->
        <td>ESP32-S3R8</td><!--Vision Master E213-->
        <td>ESP32-S3R8</td><!--Vision Master E290-->
        <td>ESP32-S3R8</td><!--Vision Master T190-->        
        <td>NRF52840</td><!--T114-->
        <td>NRF52840</td><!--RAKRAK19003-->
        <td>NRF52840</td><!--RAKRAK19007-->
        <td>NRF52840</td><!--WisMesh-->
        <td>ESP32-S3FN16R8</td><!--T-Deck-->
        <td>NRF52840</td><!--T-Echo-->
        <td>ESP32-D0WDQ6-V3</td><!--T-Beam-->        
        <td>ESP32-S3FN8</td><!--T-Beam Supreme-->
        <td>ESP32-S3FH4R2</td><!--T3-S3-->  
        <td>ESP32-S3 (16 MB flash, 8 MB PSRAM)</td><!--Station G2-->
        <td>NRF52840</td><!--Nano G2 Ultra-->
        <td>NRF52840</td><!--Wio Tracker 1110-->
        <td>NRF52840</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1276 SX1278</td><!--Heltec V2-->
        <td>SX1262</td><!--Heltec V3.2-->
        <td>SX1262</td><!--Wireless Paper-->
        <td>SX1262</td><!--Wireless Stick Lite-->
        <td>SX1262</td><!--Wireless Tracker-->
        <td>SX1262</td><!--Capsule Sensor V3-->
        <td>SX1262 (optional)</td><!--Vision Master E213-->
        <td>SX1262 (optional)</td><!--Vision Master E290-->
        <td>SX1262 (optional)</td><!--Vision Master T190-->
        <td>SX1262</td><!--T114-->
        <td>SX1262</td><!--RAKRAK19003-->
        <td>SX1262</td><!--RAKRAK19007-->
        <td>SX1262</td><!--WisMesh-->
        <td>SX1262 (optional)</td><!--T-Deck-->
        <td>SX1262</td><!--T-Echo-->
        <td>SX1276 SX1278</td><!--T-Beam-->
        <td>SX1262 / LR1121 (variant)</td><!--T-Beam-Supreme-->
        <td>SX1262 / SX1276 / SX1278 / SX1280 (variant)</td><!--T3-S3-->
        <td>SX1262</td><!--Station G2-->
        <td>SX1262</td><!--Nano G2 Ultra-->
        <td>LR1110</td><!--Wio Tracker 1110-->
        <td>LR1110</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>GPS/GNSS</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>UC6580</td><!--Wireless Tracker-->
        <td>L76K (optional sensor module)</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>L76k</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>u-blox ZOE-M8Q</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->
        <td>L76K</td><!--T-Echo-->
        <td>NEO-6M/M8N</td><!--T-Beam-->
        <td>L76K / MAX-M10S (variant)</td><!--T-Beam-Supreme-->
        <td>-</td><!--T3-S3-->          
        <td>-</td><!--Station G2-->
        <td>ATGM336H-5N</td><!--Nano G2 Ultra--> 
        <td>MediaTek AG3335 (built in)</td><!--Wio Tracker 1110-->
        <td>LR1110 GNSS scan (cloud-assisted)</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Charging Interface</td>
        <td>Micro USB</td><!--Heltec V2-->
        <td>USB-C</td><!--Heltec V3.2-->
        <td>USB-C</td><!--Wireless Paper-->
        <td>USB-C</td><!--Wireless Stick Lite-->
        <td>USB-C</td><!--Wireless Tracker-->
        <td>Magnetic 2-pin charging cable; WirelessBoot for firmware</td><!--Capsule Sensor V3-->
        <td>USB-C</td><!--Vision Master E213-->
        <td>USB-C</td><!--Vision Master E290-->
        <td>USB-C</td><!--Vision Master T190-->
        <td>USB-C</td><!--T114-->
        <td>USB-C</td><!--RAKRAK19003-->
        <td>USB-C</td><!--RAKRAK19007-->
        <td>USB-C</td><!--WisMesh-->
        <td>USB-C</td><!--T-Deck-->
        <td>USB-C</td><!--T-Echo-->
        <td>Micro USB</td><!--T-Beam-->
        <td>USB-C</td><!--T-Beam-Supreme-->            
        <td>USB-C</td><!--T3-S3-->
        <td>USB-C</td><!--Station G2-->
        <td>USB-C</td><!--Nano G2 Ultra-->
        <td>Pogo Pins</td><!--Wio Tracker 1110-->
        <td>USB-C</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Frequency</td>
        <td>433~510 MHz, 863~928 MHz</td><!--Heltec V2-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Heltec V3.2-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Wireless Paper-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Wireless Stick Lite-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Wireless Tracker-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Capsule Sensor V3-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Vision Master E213-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Vision Master E290-->
        <td>470–510 / 863–928 MHz (regional variant)</td><!--Vision Master T190-->
        <td>433~510 MHz, 863~928 MHz</td><!--T114-->
        <td>433 / 470 / 863–928 MHz (regional module)</td><!--RAKRAK19003-->
        <td>433 / 470 / 863–928 MHz (regional module)</td><!--RAKRAK19007-->
        <td>860–870 / 900–930 MHz (regional variant)</td><!--WisMesh-->
        <td>433 / 868 / 915 MHz (regional variant)</td><!--T-Deck-->
        <td>433 / 868 / 915 MHz (regional variant)</td><!--T-Echo-->
        <td>433 / 868 / 915 / 923 MHz (regional variant)</td><!--T-Beam-->
        <td>433 / 868 / 915 / 923 MHz (SX1262), or Sub-GHz + 2.4 GHz (LR1121)</td><!--T-Beam-Supreme-->
        <td>433 / 868 / 915 MHz, or 2.4 GHz SX1280 (variant)</td><!--T3-S3-->
        <td>815–940 MHz</td><!--Station G2-->
        <td>815–940 MHz</td><!--Nano G2 Ultra-->
        <td>863–928 MHz</td><!--Wio Tracker 1110-->
        <td>863–928 MHz</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Max. TX Power</td>
        <td>19 ± 1dB</td><!--Heltec V2-->
        <td>21 ± 1dBm</td><!--Heltec V3.2-->
        <td>21 ± 1dBm</td><!--Wireless Paper-->
        <td>21 ± 1dBm</td><!--Wireless Stick Lite-->
        <td>21 ± 1dBm</td><!--Wireless Tracker-->
        <td>21 ± 1dBm</td><!--Capsule Sensor V3-->
        <td>21 ± 1dBm</td><!--Vision Master E213-->
        <td>21 ± 1dBm</td><!--Vision Master E290-->
        <td>21 ± 1dBm</td><!--Vision Master T190-->
        <td>21 ± 1dBm</td><!--T114-->
        <td>22 ± 1dBm</td><!--RAKRAK19003-->
        <td>22 ± 1dBm</td><!--RAKRAK19007-->
        <td>22 ± 1dBm</td><!--WisMesh-->
        <td>22 ± 1dBm</td><!--T-Deck-->
        <td>22 ± 1dBm</td><!--T-Echo-->
        <td>20 dBm</td><!--T-Beam-->
        <td>22 ± 1dBm</td><!--T-Beam-Supreme-->         
        <td>Up to 22 dBm (radio-dependent)</td><!--T3-S3-->
        <td>36.5 dBm US915 / 37 dBm EU868 maximum; 35 dBm P1dB</td><!--Station G2-->
        <td>22 ± 1dBm</td><!--Nano G2 Ultra-->
        <td>20 ± 1dBm</td><!--Wio Tracker 1110-->
        <td>20 ± 1dBm</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Max. Receiving Sensitivity</td>
        <td>-148 dBm</td><!--Heltec V2-->
        <td>-136 dBm</td><!--Heltec V3.2-->
        <td>-134 dBm</td><!--Wireless Paper-->
        <td>-134 dBm</td><!--Wireless Stick Lite-->
        <td>-137 dBm</td><!--Wireless Tracker-->
        <td>-135 dBm</td><!--Capsule Sensor V3-->
        <td>-136 dBm</td><!--Vision Master E213-->
        <td>-136 dBm</td><!--Vision Master E290-->    
        <td>-136 dBm</td><!--Vision Master T190-->
        <td>-136 dBm</td><!--T114-->
        <td>-136 dBm</td><!--RAKRAK19003-->
        <td>-136 dBm</td><!--RAKRAK19007-->
        <td>-136 dBm</td><!--WisMesh-->
        <td>-136 dBm</td><!--T-Deck-->
        <td>-136 dBm</td><!--T-Echo-->     
        <td>-148 dBm</td><!--T-Beam-->
        <td>-136 dBm</td><!--T-Beam-Supreme-->            
        <td>-136 dBm</td><!--T3-S3-->   
        <td>Not specified (dedicated LNA; about 4 dB improvement claimed)</td><!--Station G2-->
        <td>Not specified</td><!--Nano G2 Ultra-->
        <td>-141 dBm</td><!--Wio Tracker 1110-->
        <td>-141 dBm</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Wi-Fi</td>
        <td>YES</td><!--Heltec V2-->
        <td>YES</td><!--Heltec V3.2-->
        <td>YES</td><!--Wireless Paper-->
        <td>YES</td><!--Wireless Stick Lite-->
        <td>YES</td><!--Wireless Tracker-->
        <td>YES</td><!--Capsule Sensor V3-->
        <td>YES</td><!--Vision Master E213-->
        <td>YES</td><!--Vision Master E290-->
        <td>YES</td><!--Vision Master T190-->
        <td>NO</td><!--T114-->
        <td>NO</td><!--RAKRAK19003-->
        <td>NO</td><!--RAKRAK19007-->
        <td>NO</td><!--WisMesh-->
        <td>YES</td><!--T-Deck-->
        <td>NO</td><!--T-Echo-->
        <td>YES</td><!--T-Beam-->   
        <td>YES</td><!--T-Beam-Supreme-->            
        <td>YES</td><!--T3-S3-->   
        <td>YES</td><!--Station G2-->
        <td>NO</td><!--Nano G2 Ultra-->
        <td>NO</td><!--Wio Tracker 1110-->
        <td>NO</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>BT-5 (LE)</td><!--Heltec V2-->
        <td>BT-5 (LE)</td><!--Heltec V3.2-->
        <td>BT-5 (LE)</td><!--Wireless Paper-->
        <td>BT-5 (LE)</td><!--Wireless Stick Lite-->
        <td>BT-5 (LE)</td><!--Wireless Tracker-->
        <td>BT-5 (LE)</td><!--Capsule Sensor V3-->
        <td>BT-5 (LE)</td><!--Vision Master E213-->
        <td>BT-5 (LE)</td><!--Vision Master E290-->
        <td>BT-5 (LE)</td><!--Vision Master T190-->
        <td>BT-5 (LE)</td><!--T114-->
        <td>BT-5 (LE)</td><!--RAKRAK19003-->
        <td>BT-5 (LE)</td><!--RAKRAK19007-->
        <td>BT-5 (LE)</td><!--WisMesh-->
        <td>BT-5 (LE)</td><!--T-Deck-->
        <td>BT-5 (LE)</td><!--T-Echo-->
        <td>BT-4.2 (LE)</td><!--T-Beam-->        
        <td>BT-5 (LE)</td><!--T-Beam-Supreme-->            
        <td>BT-5 (LE)</td><!--T3-S3-->   
        <td>BT-5 (LE)</td><!--Station G2-->
        <td>BT-5.4 (LE)</td><!--Nano G2 Ultra-->
        <td>BT-5.3 (LE)</td><!--Wio Tracker 1110-->
        <td>BT-5.3 (LE)</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Display Type</td>
        <td>OLED</td><!--Heltec V2-->
        <td>OLED</td><!--Heltec V3.2-->
        <td>E-ink</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>LCD</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>E-ink</td><!--Vision Master E213-->
        <td>E-ink</td><!--Vision Master E290-->
        <td>LCD</td><!--Vision Master T190-->
        <td>LCD</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>OLED</td><!--WisMesh-->
        <td>LCD</td><!--T-Deck-->
        <td>E-ink</td><!--T-Echo-->
        <td>OLED</td><!--T-Beam--> 
        <td>OLED</td><!--T-Beam-Supreme-->            
        <td>OLED</td><!--T3-S3-->       
        <td>OLED</td><!--Station G2-->
        <td>OLED</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Display Size</td>
        <td>0.96 Inch</td><!--Heltec V2-->
        <td>0.96 Inch</td><!--Heltec V3.2-->
        <td>2.13 Inch</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>0.96-inch</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>2.13 Inch</td><!--Vision Master E213-->
        <td>2.9 Inch</td><!--Vision Master E290-->
        <td>1.9 Inch</td><!--Vision Master T190-->
        <td>1.14 Inch</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>1.3 Inch</td><!--WisMesh-->
        <td>2.8 Inch</td><!--T-Deck-->
        <td>1.54 Inch</td><!--T-Echo-->
        <td>0.96 Inch</td><!--T-Beam-->      
        <td>1.3 Inch</td><!--T-Beam-Supreme-->            
        <td>0.96 Inch</td><!--T3-S3-->        
        <td>1.3 Inch</td><!--Station G2-->
        <td>1.3 Inch</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Diagram</td>
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WIFI_LoRa_32_V2.1(868-915).PDF">Diagram Link</a></td><!--Heltec V2-->
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32_V3/WiFi_LoRa_32_V3.2_Schematic_Diagram.pdf">Diagram Link</a></td><!--Heltec V3.2-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Paper/Wireless_Paper_V0.4_Schematic_Diagram.pdf">Diagram Link</a></td><!--Wireless Paper-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3_Schematic_Diagram.pdf">Diagram Link</a></td><!--Wireless Stick Lite-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Tracker/Wireless_Tacker1.1/HTIT-Tracker_V0.5.pdf">Diagram Link</a></td><!--Wireless Tracker-->
        <td><a href="https://resource.heltec.cn/download/Heltec%20Capsule%20Sensor%20V3/Capsule_Main_Esp32_Schematic_Diagram.pdf">Diagram Link</a></td><!--Capsule Sensor V3-->
        <td><a href="https://resource.heltec.cn/download/HT-VME213/HT-VME213%20Schematic%20Diagram.pdf">Diagram Link</a></td><!--Vision Master E213-->
        <td><a href="https://resource.heltec.cn/download/HT-VME290/HT-VME290%20Schematic_Diagram.pdf">Diagram Link</a></td><!--Vision Master E290-->
        <td><a href="https://resource.heltec.cn/download/HT-VMT190/HT-VMT90%20Schematic%20Diagram.pdf">Diagram Link</a></td><!--Vision Master T190-->     
        <td><a href="https://resource.heltec.cn/download/Mesh_Node_T114/MeshNode-T114_V2.0_SCH(2).pdf">Diagram Link</a></td><!--T114-->
        <td><a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Datasheet/#hardware">Diagram Link</a></td><!--RAKRAK19003-->        
        <td><a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Datasheet/#hardware">Diagram Link</a></td><!--RAKRAK19007-->        
        <td><a href="">-</a></td><!--WisMesh-->
        <td><a href="https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf">Diagram Link</a></td><!--T-Deck-->
        <td><a href="https://github.com/Xinyuan-LilyGO/T-Echo/blob/main/T-Echo_Schematic.pdf">Diagram Link</a></td><!--T-Echo-->
        <td><a href="https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_TBeam_V1.2.pdf">Diagram Link</a></td><!--T-Beam-->         
        <td><a href="https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_T-BeamS3Supreme.pdf">Diagram Link</a></td><!--T-Beam-Supreme-->         
        <td><a href="https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/T3_S3_V1.2.pdf">Diagram Link</a></td><!--T3-S3-->         
        <td><a href="https://wiki.uniteng.com/en/meshtastic/station-g2">Diagram Link</a></td><!--Station G2-->
        <td><a href="https://wiki.uniteng.com/meshtastic/nano-g2-ultra">Diagram Link</a></td><!--Nano G2 Ultra-->
        <td>not public</td><!--Wio Tracker 1110-->
        <td><a href="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio%20Tracker%201110%20v1.0_SCH_PDF_20230822.pdf">Diagram Link</a></td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Input</td>
        <td>User Button, Reset Button</td><!--Heltec V2-->
        <td>User Button, Reset Button</td><!--Heltec V3.2-->
        <td>User Button, Reset Button</td><!--Wireless Paper-->
        <td>User Button, Reset Button</td><!--Wireless Stick Lite-->
        <td>User Button, Reset Button</td><!--Wireless Tracker-->
        <td>User Button, Reset Button</td><!--Capsule Sensor V3-->
        <td>User Button, Reset Button, 3rd Button</td><!--Vision Master E213-->
        <td>User Button, Reset Button, 3rd Button</td><!--Vision Master E290-->
        <td>User Button, Reset Button</td><!--Vision Master T190-->
        <td>User Button, Reset Button</td><!--T114-->
        <td>Reset Button</td><!--RAKRAK19003-->
        <td>Reset Button</td><!--RAKRAK19007-->
        <td>User Button, Reset Button</td><!--WisMesh-->
        <td>Touch Screen, Keyboard, trackball, Reset Button</td><!--T-Deck-->
        <td>User Button, Reset Button, Touch Button</td><!--T-Echo-->
        <td>User Button, Reset Button, Power Button</td><!--T-Beam-->        
        <td>User Button, Reset Button, Power Button</td><!--T-Beam-Supreme-->            
        <td>User Button, Reset Button</td><!--T3-S3-->   
        <td>User Button, Reset Button, Boot Button</td><!--Station G2-->
        <td>4 Buttons</td><!--Nano G2 Ultra-->
        <td>User Button</td><!--Wio Tracker 1110-->
        <td>User Button, Reset Button</td><!--WIO WM1110 Tracker-->
      </tr>       
      <tr>
        <td>Temp/ Humidity Sensor</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>BME280 (temperature / humidity)</td><!--T-Beam-Supreme-->
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>SHT41</td><!--Wio Tracker 1110-->
        <td>SHT41</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Air Pressure Sensor</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>BME280</td><!--T-Beam-Supreme-->
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Air Quality Sensor</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>-</td><!--T-Beam-Supreme-->            
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td></td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>External Notification</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>Buzzer</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>OLED display</td><!--T-Beam-Supreme-->
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>Buzzer</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>UART Port</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>1x Quiic</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>UART1 on QWIIC header</td><!--T-Beam-Supreme-->
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>1X Grove</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>I2C Port</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>1x Quiic</td><!--Vision Master E213-->
        <td>1X Quiic</td><!--Vision Master E290-->
        <td>1X Quiic</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>QWIIC / STEMMA QT</td><!--T-Beam-Supreme-->
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>1X Grove</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Battery</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>250mAh</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--T114-->
        <td>-</td><!--Vision Master T190-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>3200mAh</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>850mAh</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>-</td><!--T-Beam-Supreme-->            
        <td>-</td><!--T3-S3-->                  
        <td>-</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>700mAh</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>      
      <tr>
        <td>Enclosure</td>
        <td>-</td><!--Heltec V2-->
        <td>ABS Case</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>ABS Case</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>Resin</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>?</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>ABS Case</td><!--T-Echo-->
        <td>-</td><!--T-Beam-->        
        <td>-</td><!--T-Beam-Supreme-->            
        <td>-</td><!--T3-S3-->                  
        <td>Resin</td><!--Station G2-->
        <td>Resin</td><!--Nano G2 Ultra-->
        <td>ABS Case</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Meshtastic Preloaded</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>Yes</td><!--Capsule Sensor V3-->
        <td>-</td><!--Vision Master E213-->
        <td>-</td><!--Vision Master E290-->
        <td>-</td><!--Vision Master T190-->
        <td>Yes</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>Yes</td><!--WisMesh-->
        <td>Yes</td><!--T-Deck-->
        <td>Yes</td><!--T-Echo-->
        <td>Yes</td><!--T-Beam-->        
        <td>Yes</td><!--T-Beam-Supreme-->            
        <td>Yes</td><!--T3-S3-->
        <td>Yes</td><!--Station G2-->
        <td>Yes</td><!--Nano G2 Ultra-->
        <td>Yes</td><!--Wio Tracker 1110-->
        <td>Yes</td><!--WIO WM1110 Tracker-->
      </tr>      
      <tr>
        <td>Memory ROM</td>
        <td>448KB ROM</td><!--Heltec V2-->
        <td>384KB ROM</td><!--Heltec V3.2-->
        <td>384KB ROM</td><!--Wireless Paper-->
        <td>384KB ROM</td><!--Wireless Stick Lite-->
        <td>384KB ROM</td><!--Wireless Tracker-->
        <td>384KB ROM</td><!--Capsule Sensor V3-->
        <td>384KB ROM</td><!--Vision Master E213-->
        <td>384KB ROM</td><!--Vision Master E290-->
        <td>384KB ROM</td><!--Vision Master T190-->
        <td>1M ROM</td><!--T114-->
        <td>?</td><!--RAKRAK19003-->
        <td>?</td><!--RAKRAK19007-->
        <td>?</td><!--WisMesh-->
        <td>384KB ROM</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>384KB ROM</td><!--T-Beam-->        
        <td>384KB ROM</td><!--T-Beam-Supreme-->            
        <td>384KB ROM</td><!--T3-S3-->            
        <td>384KB ROM</td><!--Station G2-->
        <td>?</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>
      <tr>
        <td>Memory SRAM</td>
        <td>520KB SRAM</td><!--Heltec V2-->
        <td>512KB SRAM</td><!--Heltec V3.2-->
        <td>512KB SRAM</td><!--Wireless Paper-->
        <td>512KB SRAM</td><!--Wireless Stick Lite-->
        <td>512KB SRAM</td><!--Wireless Tracker-->
        <td>512KB SRAM</td><!--Capsule Sensor V3-->
        <td>512KB SRAM</td><!--Vision Master E213-->
        <td>512KB SRAM</td><!--Vision Master E290-->
        <td>512KB SRAM</td><!--Vision Master T190-->
        <td>256KB SRAM</td><!--T114-->
        <td>?</td><!--RAKRAK19003-->
        <td>?</td><!--RAKRAK19007-->
        <td>?</td><!--WisMesh-->
        <td>512KB SRAM</td><!--T-Deck-->      
        <td>256KB</td><!--T-Echo-->
        <td>512KB SRAM</td><!--T-Beam-->        
        <td>512KB SRAM</td><!--T-Beam-Supreme-->            
        <td>512KB SRAM</td><!--T3-S3-->         
        <td>512KB SRAM</td><!--Station G2-->
        <td>?</td><!--Nano G2 Ultra-->
        <td></td><!--Wio Tracker 1110-->
        <td></td><!--WIO WM1110 Tracker-->
      </tr>      
      <tr>
        <td>Memory RTC SRAM</td>
        <td>16KB RTC SRAM</td><!--Heltec V2-->
        <td>16KB RTC SRAM</td><!--Heltec V3.2-->
        <td>16KB RTC SRAM</td><!--Wireless Paper-->
        <td>16KB RTC SRAM</td><!--Wireless Stick Lite-->
        <td>16KB RTC SRAM</td><!--Wireless Tracker-->
        <td>16KB RTC SRAM</td><!--Capsule Sensor V3-->
        <td>16KB RTC SRAM</td><!--Vision Master E213-->
        <td>16KB RTC SRAM</td><!--Vision Master E290-->
        <td>16KB RTC SRAM</td><!--Vision Master T190-->
        <td>?</td><!--T114-->
        <td>?</td><!--RAKRAK19003-->
        <td>?</td><!--RAKRAK19007-->
        <td>?</td><!--WisMesh-->
        <td>16KB RTC SRAM</td><!--T-Deck-->
        <td>-</td><!--T-Echo-->
        <td>16KB RTC SRAM</td><!--T-Beam-->
        <td>16KB RTC SRAM</td><!--T-Beam-Supreme-->
        <td>16KB RTC SRAM</td><!--T3-S3-->
        <td>16KB RTC SRAM</td><!--Station G2-->
        <td>?</td><!--Nano G2 Ultra-->
        <td></td><!--Wio Tracker 1110-->
        <td></td><!--WIO WM1110 Tracker-->
      </tr>      
      <tr>
        <td>Memory SiP Flash</td>
        <td>-</td><!--Heltec V2-->
        <td>8MB SiP Flash</td><!--Heltec V3.2-->
        <td>8MB SiP Flash</td><!--Wireless Paper-->
        <td>8MB SiP Flash</td><!--Wireless Stick Lite-->
        <td>8MB SiP Flash</td><!--Wireless Tracker-->
        <td>8MB SiP Flash</td><!--Capsule Sensor V3-->
        <td>8MB SiP Flash</td><!--Vision Master E213-->
        <td>8MB SiP Flash</td><!--Vision Master E290-->
        <td>8MB SiP Flash</td><!--Vision Master T190-->
        <td>?</td><!--T114-->
        <td>?</td><!--RAKRAK19003-->
        <td>?</td><!--RAKRAK19007-->
        <td>?</td><!--WisMesh-->
        <td>-</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td></td><!--T-Beam-->        
        <td></td><!--T-Beam-Supreme-->            
        <td></td><!--T3-S3-->          
        <td>8MB SiP Flash</td><!--Station G2-->
        <td>16MB SiP Flash</td><!--Nano G2 Ultra-->
        <td></td><!--Wio Tracker 1110-->
        <td></td><!--WIO WM1110 Tracker-->
      </tr>     
      <tr>
        <td>Memory PSRAM</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>8MB PSRAM</td><!--Vision Master E213-->
        <td>8MB PSRAM</td><!--Vision Master E290-->
        <td>8MB PSRAM</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--WisMesh-->
        <td>8MB PSRAM</td><!--T-Deck-->      
        <td>-</td><!--T-Echo-->
        <td>8MB PSRAM</td><!--T-Beam-->        
        <td>8MB PSRAM</td><!--T-Beam-Supreme-->            
        <td>2MB PSRAM</td><!--T3-S3-->
        <td>8MB PSRAM</td><!--Station G2-->
        <td>-</td><!--Nano G2 Ultra-->
        <td>-</td><!--Wio Tracker 1110-->
        <td>-</td><!--WIO WM1110 Tracker-->
      </tr>           
      <tr>
        <td>Memory Flash</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>16MB Flash</td><!--Vision Master E213-->
        <td>16MB Flash</td><!--Vision Master E290-->
        <td>16MB Flash</td><!--Vision Master T190-->
        <td>-</td><!--T114-->
        <td>1MB Flash</td><!--RAKRAK19003-->
        <td>1MB Flash</td><!--RAKRAK19007-->
        <td>1MB Flash</td><!--WisMesh-->
        <td>16MB Flash</td><!--T-Deck-->      
        <td>2MB Flash</td><!--T-Echo-->
        <td>4MB Flash</td><!--T-Beam-->        
        <td>8MB Flash</td><!--T-Beam-Supreme-->            
        <td>4MB Flash</td><!--T3-S3-->                  
        <td>16MB Flash</td><!--Station G2-->
        <td>1MB Flash	</td><!--Nano G2 Ultra-->
        <td>1MB Flash</td><!--Wio Tracker 1110-->
        <td>1MB Flash</td><!--WIO WM1110 Tracker-->
      </tr>                       
    </tbody>
  </table>
</div>

<script>
const additionalHeltecDevices = [
  {
    name: 'Heltec WiFi LoRa 32 V4.3.1',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Optional', screen: 'OLED None', wifi: 'Yes', input: 'User', price: '17.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wifi-lora-32-v4/',
    specs: {
      'MCU Chip': 'ESP32-S3R2 / ESP32-S3R8', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Optional L76K via 8-pin GNSS interface', 'Charging Interface': 'USB-C; 4.7–6V solar input',
      'Frequency': '433–510 MHz or 863–928 MHz (power variant)', 'Max. TX Power': '22 or 28 ± 1 dBm (variant)',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': '802.11 b/g/n',
      'Bluetooth': 'BLE / Bluetooth 5 / Bluetooth Mesh', 'Display Type': 'OLED or no-display variant',
      'Display Size': '0.96 in OLED (display variant)', 'Charging IC': 'Not specified',
      'Input': 'PRG and Reset buttons', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Status LED', 'UART Port': '3× UART',
      'I2C Port': '2× I2C', 'Battery': '3.3–4.4V lithium connector; battery not included',
      'Enclosure': 'Screen cover only; no full enclosure', 'Memory ROM': '384KB', 'Memory SRAM': '512KB',
      'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-', 'Memory PSRAM': '2MB or 8MB', 'Memory Flash': '16MB'
    }
  },
  {
    name: 'Heltec MeshPocket',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'No', screen: 'Eink', wifi: 'No', input: 'User', price: '49.00', brand: 'Heltec', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://heltec.org/project/meshpocket/',
    specs: {
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO',
      'Charging Interface': 'USB-C PD input/output; Qi2 wireless output', 'Frequency': '863–870 / 902–928 MHz (variant)',
      'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE', 'Display Type': 'E-paper', 'Display Size': '2.13 in', 'Charging IC': 'Not specified',
      'Input': 'User controls (details not specified)', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Display', 'UART Port': '-', 'I2C Port': '-',
      'Battery': '5000mAh or 10000mAh Li-polymer, included', 'Enclosure': 'ABS + tempered glass, included',
      'Memory ROM': '1MB', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'Heltec WiFi LoRa 32 Expansion Kit',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Optional', screen: 'LCD None', wifi: 'Yes', input: 'Touchscreen, User', price: '49.90', brand: 'Heltec', case: 'Yes', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wifi-lora-32-v4-expansion-housing/',
    specs: {
      'MCU Chip': 'ESP32-S3R2', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Optional Quectel L76K',
      'Charging Interface': 'USB-C; solar input', 'Frequency': '433 / 470–510 / 863–928 MHz (variant)',
      'Max. TX Power': '21 or 28 dBm (variant)', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5', 'Display Type': 'Optional touch LCD front panel',
      'Display Size': '320×240 touch LCD', 'Charging IC': 'Not specified', 'Input': 'Touch screen, User and Reset buttons',
      'Temp/ Humidity Sensor': 'Optional expansion sensor', 'Air Pressure Sensor': 'Optional expansion sensor',
      'Air Quality Sensor': 'Optional expansion sensor', 'External Notification': 'Buzzer and display',
      'UART Port': '3× UART on main board', 'I2C Port': 'B2B expansion / 2× I2C',
      'Battery': 'Optional 2800mAh flat-top 18650', 'Enclosure': 'Glass/aluminum/PC enclosure, included',
      'Memory ROM': '384KB', 'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-',
      'Memory PSRAM': '2MB', 'Memory Flash': '16MB'
    }
  },
  {
    name: 'Heltec HT-CT62',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'Yes', input: 'None', price: '6.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/ht-ct62/',
    specs: {
      'MCU Chip': 'ESP32-C3FN4', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO',
      'Charging Interface': '3.3V module supply; no onboard charger', 'Frequency': '433 / 470–510 / 863–870 / 902–928 MHz (variant)',
      'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE', 'Display Type': '-', 'Display Size': '-',
      'Charging IC': 'N/A', 'Input': '-', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': '-', 'UART Port': 'Stamp-edge UART pins',
      'I2C Port': 'Configurable GPIO', 'Battery': '-', 'Enclosure': '-', 'Memory ROM': 'Not specified',
      'Memory SRAM': 'Not specified', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '-',
      'Memory Flash': '4MB'
    }
  },
  {
    name: 'Heltec Mesh Node T096',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'None', wifi: 'No', input: 'User', price: '33.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/t096/',
    specs: {
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262 + PA', 'GPS/GNSS': 'Built-in UC6580 multi-constellation GNSS',
      'Charging Interface': 'USB-C; solar input', 'Frequency': '433 / 470–510 / 863–870 / 902–928 MHz (variant)',
      'Max. TX Power': '28 ± 1 dBm', 'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE / Bluetooth 5', 'Display Type': '-', 'Display Size': '-', 'Charging IC': 'Solar management (part not specified)',
      'Input': 'User and Reset buttons', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Status LED', 'UART Port': 'Header pins',
      'I2C Port': 'Header pins', 'Battery': 'Lithium connector; battery not included', 'Enclosure': '-',
      'Memory ROM': '1MB', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'Heltec Wireless Stick V3',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'OLED', wifi: 'Yes', input: 'User', price: '17.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wireless-stick-v3/',
    specs: {
      'MCU Chip': 'ESP32-S3FN8', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO', 'Charging Interface': 'USB-C',
      'Frequency': '470–510 / 863–928 MHz (variant)', 'Max. TX Power': '21 ± 1 dBm',
      'Max. Receiving Sensitivity': '-134 dBm', 'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5',
      'Display Type': 'OLED (not supported by Meshtastic display mode)', 'Display Size': '0.49 in, 64×32',
      'Charging IC': 'Not specified', 'Input': 'User and Reset buttons', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': 'OLED and status LED',
      'UART Port': 'USB-to-UART / header pins', 'I2C Port': 'Header pins',
      'Battery': 'Lithium connector; battery not included', 'Enclosure': '-', 'Memory ROM': '384KB',
      'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-', 'Memory PSRAM': '-',
      'Memory Flash': '8MB'
    }
  },
  {
    name: 'Heltec Mesh Node T1',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'LCD', wifi: 'No', input: 'User', price: '39.90', brand: 'Heltec', case: 'Yes', battery: 'Yes', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/mesh-node-t1/',
    specs: {
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Built-in UC6580: GPS, BeiDou, GLONASS, Galileo',
      'Charging Interface': 'Waterproof USB-C, 5V', 'Frequency': '433 / 470–510 / 863–870 / 902–928 MHz (variant)',
      'Max. TX Power': '21 ± 1 dBm', 'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE', 'Display Type': 'LCD', 'Display Size': '0.96 in', 'Charging IC': 'Not specified',
      'Input': 'Side buttons and rear power button', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Buzzer', 'UART Port': '-', 'I2C Port': '-',
      'Battery': '1850mAh lithium, included', 'Enclosure': 'IP65 enclosure, included',
      'Memory ROM': '1MB', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'Heltec Wireless Shell V3',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'Yes', input: 'None', price: '11.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wireless-shell-v3/',
    specs: {
      'MCU Chip': 'ESP32-S3FN8', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO', 'Charging Interface': 'USB-C',
      'Frequency': '470–510 / 863–870 / 902–928 MHz (variant)', 'Max. TX Power': 'Not specified',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5',
      'Display Type': '-', 'Display Size': '-', 'Charging IC': 'Not specified', 'Input': '-',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': '-',
      'UART Port': 'Stamp-edge pins', 'I2C Port': 'Configurable GPIO', 'Battery': '-', 'Enclosure': '-',
      'Memory ROM': '384KB', 'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '8MB'
    }
  },
  {
    name: 'Heltec Wireless Tracker V2',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'None', wifi: 'Yes', input: 'User', price: '30.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wireless-tracker-v2/',
    specs: {
      'MCU Chip': 'ESP32-S3FN8', 'LoRa Chip': 'SX1262 + PA',
      'GPS/GNSS': 'Built-in UC6580: GPS, GLONASS, BDS, Galileo, NavIC, QZSS',
      'Charging Interface': 'USB-C; solar input', 'Frequency': '863–928 MHz', 'Max. TX Power': '28 ± 1 dBm',
      'Max. Receiving Sensitivity': '-134 dBm', 'Wi-Fi': '802.11 b/g/n',
      'Bluetooth': 'BLE / Bluetooth 5 / Bluetooth Mesh', 'Display Type': '-', 'Display Size': '-',
      'Charging IC': 'Not specified', 'Input': 'User and Reset buttons', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': 'Status LED',
      'UART Port': '3× UART', 'I2C Port': '2× I2C', 'Battery': 'Lithium connector; battery not included',
      'Enclosure': '-', 'Memory ROM': '384KB', 'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB',
      'Memory SiP Flash': '-', 'Memory PSRAM': '-', 'Memory Flash': '8MB'
    }
  },
  {
    name: 'Heltec MeshTower V2',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Optional', screen: 'None', wifi: 'No', input: 'User', price: '109.00', brand: 'Heltec', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://heltec.org/project/meshtower/',
    specs: {
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262 + PA', 'GPS/GNSS': 'Optional GNSS sensor',
      'Charging Interface': '10W solar, 18–24V DC, USB-C PD', 'Frequency': '863–870 / 902–928 MHz (variant)',
      'Max. TX Power': '22 or 30 dBm (variant)', 'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE', 'Display Type': '-', 'Display Size': '-', 'Charging IC': 'Solar BMS / MPPT (part not specified)',
      'Input': 'Power and Reset buttons inside enclosure', 'Temp/ Humidity Sensor': 'External sensor support',
      'Air Pressure Sensor': 'External sensor support', 'Air Quality Sensor': 'External sensor support',
      'External Notification': 'Status indicators', 'UART Port': 'Expansion interface', 'I2C Port': 'Expansion interface',
      'Battery': '3× 2800mAh lithium, included', 'Enclosure': 'IP66 aluminum enclosure, included',
      'Memory ROM': '1MB', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'Heltec WiFi LoRa 32 Expansion Kit V2',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'LCD', wifi: 'Yes', input: 'Touchscreen, User', price: '56.90', brand: 'Heltec', case: 'Yes', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/v4-r8-ex/',
    specs: {
      'MCU Chip': 'ESP32-S3R8', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Built-in Quectel L76K',
      'Charging Interface': 'USB-C; solar input', 'Frequency': '433 / 470–510 / 863–928 MHz (variant)',
      'Max. TX Power': '21 or 28 dBm (variant)', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5 (mode-dependent with touch UI)',
      'Display Type': 'LCD', 'Display Size': '2.8 in', 'Charging IC': 'Not specified',
      'Input': 'Touch screen, User and Reset buttons', 'Temp/ Humidity Sensor': 'Optional expansion sensor',
      'Air Pressure Sensor': 'Optional expansion sensor', 'Air Quality Sensor': 'Optional expansion sensor',
      'External Notification': 'Buzzer and display', 'UART Port': '3× UART on main board',
      'I2C Port': 'B2B expansion / 2× I2C', 'Battery': 'Optional 2800mAh flat-top 18650',
      'Enclosure': 'Touch glass + aluminum enclosure, included', 'Memory ROM': '384KB',
      'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-',
      'Memory PSRAM': '8MB', 'Memory Flash': '16MB + microSD slot'
    }
  },
  {
    name: 'Heltec MeshSolar',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Optional', screen: 'None', wifi: 'No', input: 'User', price: '38.99', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/meshsolar/',
    specs: {
      'MCU Chip': 'nRF52840 (HT-N5262M)', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Optional expansion module',
      'Charging Interface': '18–24V solar MPPT, USB-C PD3.0, or 18–24V DC',
      'Frequency': '470–510 / 863–870 / 902–928 MHz (variant)', 'Max. TX Power': '21 ± 1 dBm',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO', 'Bluetooth': 'BLE / Bluetooth 5',
      'Display Type': 'Optional expansion display', 'Display Size': 'Not specified',
      'Charging IC': 'Solar MPPT/BMS (part not specified)', 'Input': 'Power/output control and Reset buttons',
      'Temp/ Humidity Sensor': 'External sensor support', 'Air Pressure Sensor': 'External sensor support',
      'Air Quality Sensor': 'External sensor support', 'External Notification': 'Battery-level LEDs',
      'UART Port': 'Expansion interface', 'I2C Port': 'Expansion interface',
      'Battery': 'Supports 1–4 Li-ion/LiPo/LiFePO4 cells; batteries not included', 'Enclosure': '-',
      'Memory ROM': '1MB', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'Heltec HT-N5262M',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'No', input: 'None', price: '14.90', brand: 'Heltec', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/ht-n5262m/',
    specs: {
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO',
      'Charging Interface': '3.3V module supply; no onboard charger',
      'Frequency': '470–510 / 863–870 / 902–928 MHz (variant)', 'Max. TX Power': 'Not specified',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE / Bluetooth 5 / Bluetooth Mesh', 'Display Type': '-', 'Display Size': '-',
      'Charging IC': 'N/A', 'Input': '-', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': '-', 'UART Port': '2× UART on stamp pins',
      'I2C Port': '2× I2C on stamp pins', 'Battery': '-', 'Enclosure': '-', 'Memory ROM': '1MB',
      'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '-',
      'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'Heltec SensorHub HRI-3621',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'Yes', input: 'User', price: '59.00', brand: 'Heltec', case: 'Yes', battery: 'Yes', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/sensorhub-temperature-humidity-sensor-meshtastic-and-lorawan-compatible/',
    specs: {
      'MCU Chip': 'Heltec Wireless Shell (revision not specified)', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO',
      'Charging Interface': 'Magnetic 2-pin charging, 5V',
      'Frequency': '433 / CN470 / EU868 / US915 / AU915 / AS923 / KR920 / RU864 variants',
      'Max. TX Power': '20 ± 2 dBm', 'Max. Receiving Sensitivity': '-135 to -136 dBm @ SF12/BW125',
      'Wi-Fi': 'Configuration/OTA Wi-Fi', 'Bluetooth': 'Not specified', 'Display Type': '-', 'Display Size': '-',
      'Charging IC': 'Not specified', 'Input': 'Power/configuration control',
      'Temp/ Humidity Sensor': 'Temperature and humidity probe', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Status LED', 'UART Port': 'Internal/service interface',
      'I2C Port': 'Internal sensor interface', 'Battery': '1100mAh 18350 Li-ion, included',
      'Enclosure': 'IP65/IP66 industrial enclosure, included', 'Memory ROM': 'Not specified',
      'Memory SRAM': 'Not specified', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': 'Not specified', 'Memory Flash': 'Not specified'
    }
  },
  {
    name: 'Heltec Wireless Bridge',
    meta: { mcu: 'ESP32', lora: 'SX1276', gps: 'No', screen: 'None', wifi: 'Yes', input: 'User', price: '28.90', brand: 'Heltec', case: 'Yes', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wireless-bridge/',
    specs: {
      'MCU Chip': 'ESP32-D0WDQ6', 'LoRa Chip': 'SX1276', 'GPS/GNSS': 'NO', 'Charging Interface': 'Micro USB',
      'Frequency': '470–510 / 863–928 MHz (variant)', 'Max. TX Power': '18 ± 1 dBm',
      'Max. Receiving Sensitivity': '-135 dBm', 'Wi-Fi': '802.11 b/g/n',
      'Bluetooth': 'Bluetooth 4.2 BR/EDR + BLE', 'Display Type': '-', 'Display Size': '-',
      'Charging IC': 'Not specified', 'Input': 'User/reset controls', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': 'Status LED',
      'UART Port': 'CP2102 USB-to-UART', 'I2C Port': 'Header pins',
      'Battery': 'Internal lithium connector; battery not included', 'Enclosure': 'Aluminum enclosure, included',
      'Memory ROM': '-', 'Memory SRAM': '520KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '8MB', 'Memory Flash': '8MB'
    }
  }
];

function addAdditionalHeltecDevices() {
  const headerRow = document.querySelector('#comparisonTable thead tr');
  const referenceHeader = Array.from(headerRow.children)
    .find(header => header.textContent.includes('WisBlock Starter Kit RAK4631 + RAK19003'));
  const rows = Array.from(document.querySelectorAll('#comparisonTable tbody tr'));
  const referenceCells = new Map(rows.map(row => [row, row.children[referenceHeader.cellIndex]]));

  const excludedStampDevices = new Set([
    'Heltec HT-CT62',
    'Heltec Wireless Shell V3',
    'Heltec HT-N5262M'
  ]);

  additionalHeltecDevices
    .filter(device => !excludedStampDevices.has(device.name))
    .forEach(device => {
    const header = document.createElement('th');
    header.textContent = device.name;
    Object.entries(device.meta).forEach(([key, value]) => header.dataset[key] = value);
    headerRow.insertBefore(header, referenceHeader);

    rows.forEach(row => {
      const label = row.cells[0].textContent.trim();
      const cell = document.createElement('td');
      if (label === 'Brand') {
        cell.textContent = 'Heltec';
      } else if (label.startsWith('Base Price USD')) {
        const link = document.createElement('a');
        link.href = device.productUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = `$${device.meta.price}`;
        cell.appendChild(link);
      } else if (label === 'Diagram') {
        const link = document.createElement('a');
        link.href = device.productUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Official documentation';
        cell.appendChild(link);
      } else if (label === 'Meshtastic Preloaded') {
        cell.textContent = device.meta.meshtastic;
      } else {
        cell.textContent = device.specs[label] ?? 'Not specified';
      }
      row.insertBefore(cell, referenceCells.get(row));
    });
  });
}

addAdditionalHeltecDevices();

const additionalLilygoDevices = [
  {
    name: 'T5 E-Paper S3 Pro',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Optional', screen: 'Eink', wifi: 'Yes', input: 'Touchscreen, User', price: '81.36', brand: 'LILYGO', case: 'No', battery: 'Yes', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://lilygo.cc/products/t5-e-paper-s3-pro',
    docsUrl: 'https://wiki.lilygo.cc/products/t5-series/t5-e-paper-s3-pro/',
    specs: {
      'MCU Chip': 'ESP32-S3-WROOM-1 @ 240 MHz', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Optional', 'Charging Interface': 'USB-C, Magnetic',
      'Frequency': '433 / 868 / 915 / 920 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Wi-Fi': '802.11 b/g/n',
      'Bluetooth': 'Bluetooth 5.0 LE', 'Display Type': 'E-paper',
      'Display Size': '4.7 in', 'Input': 'Touchscreen, User button, Power button, Boot button, Reset button',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': '-', 'UART Port': '-', 'I2C Port': '2× Qwiic',
      'Battery': '1500 mAh', 'Enclosure': '-', 'Memory ROM': '384 KB',
      'Memory SRAM': '512 KB', 'Memory RTC SRAM': '16 KB',
      'Memory SiP Flash': 'microSD / TF', 'Memory PSRAM': '8 MB', 'Memory Flash': '16 MB'
    }
  },
  {
    name: 'T3-S3 E-Paper',
    meta: { mcu: 'ESP32', lora: 'SX1262 SX1276 SX1280', gps: 'No', screen: 'Eink', wifi: 'Yes', input: 'User', price: '23.61', brand: 'LILYGO', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://lilygo.cc/products/ts-s3-epaper',
    docsUrl: 'https://wiki.lilygo.cc/products/t3-series/t3-s3-e-paper/',
    specs: {
      'MCU Chip': 'ESP32-S3FH4R2 @ 240 MHz', 'LoRa Chip': 'SX1262 / SX1276 / SX1280',
      'GPS/GNSS': '-', 'Charging Interface': 'USB-C',
      'Frequency': '868 / 915 / 2400 MHz', 'Max. TX Power': '12.5 / 20 / 22 dBm',
      'Max. Receiving Sensitivity': '-148 / -132 dBm', 'Wi-Fi': '802.11 b/g/n',
      'Bluetooth': 'Bluetooth 5.0 LE', 'Display Type': 'E-paper',
      'Display Size': '2.13 in', 'Input': 'Boot button, Reset button',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': 'Status LED', 'UART Port': '-', 'I2C Port': '1× Qwiic',
      'Battery': '-', 'Enclosure': '-', 'Memory ROM': '384 KB',
      'Memory SRAM': '512 KB', 'Memory RTC SRAM': '16 KB',
      'Memory SiP Flash': 'microSD / TF', 'Memory PSRAM': '2 MB', 'Memory Flash': '4 MB'
    }
  },
  {
    name: 'T-LoRa Pager',
    meta: { mcu: 'ESP32', lora: 'SX1262 LR1121', gps: 'Yes', screen: 'LCD', wifi: 'Yes', input: 'Keyboard, User', price: '88.00', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://lilygo.cc/products/t-lora-pager-meshtastic',
    docsUrl: 'https://wiki.lilygo.cc/products/t-lora-series/t-lora-pager/',
    specs: {
      'MCU Chip': 'ESP32-S3, dual-core LX7 @ 240MHz', 'LoRa Chip': 'SX1262 or LR1121 (variant)',
      'GPS/GNSS': 'Built-in u-blox MIA-M10Q', 'Charging Interface': 'USB-C, 5V/500mA',
      'Frequency': '433–920 MHz (SX1262), or 868 / 915 MHz + 2.4 GHz (LR1121)',
      'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '2.4GHz 802.11 b/g/n', 'Bluetooth': 'Bluetooth 5 LE',
      'Display Type': 'IPS LCD (ST7796)', 'Display Size': '2.33 in, 480×222',
      'Charging IC': 'BQ25896; BQ27220 fuel gauge',
      'Input': '34-key QWERTY keyboard, rotary encoder, Power and Boot buttons',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': 'Speaker, haptic motor and display', 'UART Port': 'USB serial/JTAG',
      'I2C Port': 'Internal I²C peripherals and GPIO expansion',
      'Battery': 'Built-in rechargeable battery; capacity not specified',
      'Enclosure': 'Handheld enclosure, included', 'Memory ROM': '384KB', 'Memory SRAM': '512KB',
      'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-', 'Memory PSRAM': '8MB', 'Memory Flash': '16MB'
    }
  },
  {
    name: 'T-Deck Pro',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'Eink', wifi: 'Yes', input: 'Touchscreen, Keyboard, User', price: '102.91', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://lilygo.cc/products/t-deck-pro-meshtastic',
    docsUrl: 'https://wiki.lilygo.cc/products/t-deck-series/t-deck-pro/',
    specs: {
      'MCU Chip': 'ESP32-S3FN16R8, dual-core LX7 @ 240MHz', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Built-in u-blox MIA-M10Q', 'Charging Interface': 'USB-C, 5V/500mA',
      'Frequency': '433–920 MHz', 'Max. TX Power': 'Not specified',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': '2.4GHz 802.11 b/g/n',
      'Bluetooth': 'Bluetooth 5 LE', 'Display Type': 'Touch E-paper (GDEQ031T10 / CST328)',
      'Display Size': '3.1 in, 320×240', 'Charging IC': 'BQ25896; BQ27220 fuel gauge',
      'Input': 'Capacitive touch, TCA8418 keyboard and Boot button',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': 'E-paper, speaker, microphone and vibration motor',
      'UART Port': 'USB CDC; internal GNSS and optional 4G UARTs', 'I2C Port': 'I²C peripheral bus',
      'Battery': '1500mAh Li-polymer, included', 'Enclosure': 'Enclosure, included',
      'Memory ROM': '384KB', 'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB',
      'Memory SiP Flash': '-', 'Memory PSRAM': '8MB', 'Memory Flash': '16MB'
    }
  },
  {
    name: 'T-Deck Plus',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'LCD', wifi: 'Yes', input: 'Keyboard, User', price: '77.16', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://lilygo.cc/products/t-deck-plus-meshtastic',
    docsUrl: 'https://wiki.lilygo.cc/products/t-deck-series/t-deck-plus/',
    specs: {
      'MCU Chip': 'ESP32-S3FN16R8, dual-core LX7 @ 240MHz', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Built-in u-blox MIA-M10Q', 'Charging Interface': 'USB-C',
      'Frequency': '433 / 868 / 915 / 920 MHz (regional variant)', 'Max. TX Power': '+22 dBm',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': '2.4GHz 802.11 b/g/n',
      'Bluetooth': 'Bluetooth 5 LE', 'Display Type': 'IPS LCD (ST7789; no touchscreen)',
      'Display Size': '2.8 in, 320×240', 'Charging IC': 'Not specified',
      'Input': 'Physical keyboard, trackball and Reset button', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': 'LCD, speaker and microphone', 'UART Port': 'Built-in GNSS UART',
      'I2C Port': 'Internal I²C bus; Grove pins are occupied by GNSS',
      'Battery': '2000mAh Li-polymer, included', 'Enclosure': 'Enclosure, included',
      'Memory ROM': '384KB', 'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB',
      'Memory SiP Flash': '-', 'Memory PSRAM': '8MB', 'Memory Flash': '16MB'
    }
  },
  {
    name: 'T-Watch S3',
    meta: { mcu: 'ESP32', lora: 'SX1262 SX1280', gps: 'No', screen: 'LCD', wifi: 'Yes', input: 'Touchscreen, User', price: '42.98', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://lilygo.cc/products/t-watch-s3',
    docsUrl: 'https://wiki.lilygo.cc/products/t-watch-series/t-watch-s3/',
    specs: {
      'MCU Chip': 'ESP32-S3, dual-core LX7 @ 240MHz', 'LoRa Chip': 'SX1262 or SX1280 (variant)',
      'GPS/GNSS': 'NO', 'Charging Interface': 'Micro USB + OTG, 5V/500mA',
      'Frequency': '433–923 MHz (SX1262), or 2.4 GHz (SX1280)',
      'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '2.4GHz 802.11 b/g/n', 'Bluetooth': 'Bluetooth 5 LE',
      'Display Type': 'Capacitive-touch LCD', 'Display Size': '1.54 in, 240×240',
      'Charging IC': 'AXP2101 PMU', 'Input': 'Capacitive touchscreen, Power and Boot buttons',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': 'Speaker, haptic motor and display', 'UART Port': 'USB serial',
      'I2C Port': 'Internal I²C peripherals', 'Battery': 'Built-in rechargeable battery; capacity not specified',
      'Enclosure': 'Watch enclosure and strap, included', 'Memory ROM': '384KB',
      'Memory SRAM': '512KB', 'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-',
      'Memory PSRAM': '8MB', 'Memory Flash': '16MB'
    }
  },
  {
    name: 'T-Echo Plus',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'Eink', wifi: 'No', input: 'User', price: '66.31', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://lilygo.cc/products/t-echo-plus',
    docsUrl: 'https://wiki.lilygo.cc/products/t-echo-series/t-echo-plus/',
    specs: {
      'MCU Chip': 'nRF52840 @ 64MHz', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Built-in L76K: GPS, BeiDou, GLONASS and QZSS', 'Charging Interface': 'USB-C',
      'Frequency': '433 / 868 / 915 / 920 MHz (regional variant)', 'Max. TX Power': '+22 dBm',
      'Max. Receiving Sensitivity': '-139 dBm', 'Wi-Fi': 'NO', 'Bluetooth': 'Bluetooth 5 LE',
      'Display Type': 'E-paper', 'Display Size': '1.54 in, 200×200', 'Charging IC': 'Not specified',
      'Input': 'User controls and capacitive touch button',
      'Temp/ Humidity Sensor': 'Optional BME280 variant', 'Air Pressure Sensor': 'Optional BME280 variant',
      'Air Quality Sensor': '-', 'External Notification': 'Buzzer, vibration motor and display',
      'UART Port': 'USB serial', 'I2C Port': 'Internal sensor bus',
      'Battery': '2400mAh Li-polymer, included', 'Enclosure': 'Enclosure, included',
      'Memory ROM': '-', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-',
      'Memory SiP Flash': '-', 'Memory PSRAM': '-', 'Memory Flash': '2MB'
    }
  }
];

function addAdditionalLilygoDevices() {
  const headerRow = document.querySelector('#comparisonTable thead tr');
  const referenceHeader = Array.from(headerRow.children)
    .find(header => header.textContent.trim() === 'Station G2');
  const rows = Array.from(document.querySelectorAll('#comparisonTable tbody tr'));
  const referenceCells = new Map(rows.map(row => [row, row.children[referenceHeader.cellIndex]]));

  additionalLilygoDevices.forEach(device => {
    const header = document.createElement('th');
    header.textContent = device.name;
    Object.entries(device.meta).forEach(([key, value]) => header.dataset[key] = value);
    headerRow.insertBefore(header, referenceHeader);

    rows.forEach(row => {
      const label = row.cells[0].textContent.trim();
      const cell = document.createElement('td');
      if (label === 'Brand') {
        cell.textContent = 'LILYGO';
      } else if (label.startsWith('Base Price USD')) {
        const link = document.createElement('a');
        link.href = device.productUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = `$${device.meta.price}`;
        cell.appendChild(link);
      } else if (label === 'Diagram') {
        const link = document.createElement('a');
        link.href = device.docsUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Official documentation';
        cell.appendChild(link);
      } else if (label === 'Meshtastic Preloaded') {
        cell.textContent = device.meta.meshtastic;
      } else {
        cell.textContent = device.specs[label] ?? 'Not specified';
      }
      row.insertBefore(cell, referenceCells.get(row));
    });
  });
}

addAdditionalLilygoDevices();

const elecrowDevices = [
  {
    name: 'ThinkNode M1',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'Eink', wifi: 'No', input: 'User', price: '53.90', brand: 'Elecrow', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m1-meshtastic-lora-signal-transceiver-powered-by-nrf52840-with-154-screen-support-gps.html',
    docsUrl: 'https://elecrow.com/wiki/ThinkNode-M1_Transceiver_Device%28Meshtastic%29_Power_By_nRF52840.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Built in: GPS, GLONASS, BeiDou, QZSS', 'Charging Interface': 'USB-C, 5V/1A',
      'Frequency': 'EU868 / US915', 'Max. TX Power': '+22 dBm', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': 'NO', 'Bluetooth': 'BLE / Bluetooth 5', 'Display Type': 'E-paper (monochrome)',
      'Display Size': '1.54 in, 200×200', 'Charging IC': 'Not specified',
      'Input': 'Knob switch, Function, Page, GPS, Reset', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': 'Buzzer and status LEDs',
      'UART Port': 'USB serial', 'I2C Port': '-', 'Battery': '1200mAh Li-ion, included',
      'Enclosure': 'ABS enclosure, included', 'Meshtastic Preloaded': 'Yes', 'Memory ROM': '-',
      'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '-',
      'Memory Flash': '1MB internal + 2MB external (3MB total)'
    }
  },
  {
    name: 'ThinkNode M2',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'OLED', wifi: 'Yes', input: 'User', price: '21.90', brand: 'Elecrow', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m2-meshtastic-lora-signal-transceiver-powered-by-esp32-s3-with-1-3-oled-display.html',
    docsUrl: 'https://static-cdn.elecrow.com/wiki/ThinkNode-M2_Transceiver_Device%28Meshtastic%29_Power_By_NRF52840.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'ESP32-S3', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'NO',
      'Charging Interface': 'USB-C, 5V/1A', 'Frequency': 'EU868 / US915', 'Max. TX Power': 'Not specified',
      'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': '2.4GHz 802.11 b/g/n',
      'Bluetooth': 'BLE / Bluetooth 5.0', 'Display Type': 'OLED (SH1106)', 'Display Size': '1.3 in, 128×64',
      'Charging IC': 'Not specified', 'Input': 'Power, Function, Reset, Boot', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': 'Buzzer and status/charge LEDs',
      'UART Port': 'USB-to-UART', 'I2C Port': '-', 'Battery': '1000mAh Li-ion, included variant',
      'Enclosure': 'ABS enclosure, included', 'Meshtastic Preloaded': 'Yes', 'Memory ROM': '384KB',
      'Memory SRAM': '512KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '8MB',
      'Memory Flash': '4MB'
    }
  },
  {
    name: 'ThinkNode M3',
    meta: { mcu: 'nRF', lora: 'LR1110', gps: 'Yes', screen: 'None', wifi: 'No', input: 'User', price: '39.90', brand: 'Elecrow', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m3-meshtastic-tracker-with-gps-wifi-ble-function-for-positioning.html',
    docsUrl: 'https://elecrow.com/wiki/ThinkNode_M3_Meshtastic_Tracker_With_GPSWiFiBLE_function_For_Indoor_and_Outdoor_Positioning.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'nRF52840', 'LoRa Chip': 'LR1110',
      'GPS/GNSS': 'Built in: GPS, GLONASS, Galileo, BDS; Wi-Fi/BLE scanning',
      'Charging Interface': 'Magnetic charging, 5V DC', 'Frequency': 'EU868 / US915',
      'Max. TX Power': '+20 dBm', 'Max. Receiving Sensitivity': '-140 dBm or better',
      'Wi-Fi': 'Scan only (positioning; no network connection)', 'Bluetooth': 'Bluetooth 5.0',
      'Display Type': '-', 'Display Size': '-', 'Charging IC': 'Not specified', 'Input': 'Power / SOS button',
      'Temp/ Humidity Sensor': 'Temperature and humidity sensors', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Buzzer and RGB status LED', 'UART Port': '-',
      'I2C Port': '-', 'Battery': '760mAh Li-ion, included', 'Enclosure': 'PC+ABS, IP66, included',
      'Meshtastic Preloaded': 'Yes', 'Memory ROM': '-', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-',
      'Memory SiP Flash': '-', 'Memory PSRAM': '-', 'Memory Flash': '1MB internal'
    }
  },
  {
    name: 'ThinkNode M4',
    meta: { mcu: 'nRF', lora: 'LR1110', gps: 'Yes', screen: 'None', wifi: 'No', input: 'User', price: '60.40', brand: 'Elecrow', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m4-power-bank-lora-device-with-meshtastic-lora-tracker-function-powered-by-nrf52840.html',
    docsUrl: 'https://media-cdn.elecrow.com/wiki/ThinkNode-M4_Power_Bank_LoRa_Device_with_Meshtastic_Function_Powered_By_nRF52840.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'nRF52840', 'LoRa Chip': 'LR1110',
      'GPS/GNSS': 'Built in: GPS, BeiDou, GLONASS, QZSS', 'Charging Interface': 'USB-C PD input; USB-C/cable/wireless output',
      'Frequency': 'EU868 / US915', 'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': 'NO', 'Bluetooth': 'BLE / Bluetooth 5.4', 'Display Type': '-', 'Display Size': '-',
      'Charging IC': 'Not specified', 'Input': 'Power-bank and LoRa touch buttons',
      'Temp/ Humidity Sensor': 'Temperature and humidity sensors', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Emergency/SOS light and status indicators',
      'UART Port': '-', 'I2C Port': '-', 'Battery': '7000mAh 18650 Li-ion pack, included',
      'Enclosure': 'ABS fireproof plastic + PC + TPE, included', 'Meshtastic Preloaded': 'Yes',
      'Memory ROM': '-', 'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '-', 'Memory Flash': '1MB internal + 2MB external (3MB total)'
    }
  },
  {
    name: 'ThinkNode M5',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'Eink', wifi: 'Yes', input: 'User', price: '53.90', brand: 'Elecrow', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m5-meshtastic-lora-signal-transceiver-esp32-s3-1-54-screen-gps-function.html',
    docsUrl: 'https://elecrow.com/wiki/ThinkNode_M5_Meshtastic_LoRa_Signal_Transceiver_ESP32-S3.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'ESP32-S3', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'Built in: GPS, GLONASS, BeiDou, QZSS', 'Charging Interface': 'USB-C, 5V/1A',
      'Frequency': 'EU868 / US915', 'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': 'Yes (ESP32-S3 hardware; firmware-dependent)', 'Bluetooth': 'BLE / Bluetooth 5.0',
      'Display Type': 'E-paper (monochrome)', 'Display Size': '1.54 in, 200×200', 'Charging IC': 'Not specified',
      'Input': 'Knob switch, Function, Page, GPS, Reset', 'Temp/ Humidity Sensor': '-',
      'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': 'Buzzer and status LEDs',
      'UART Port': 'USB serial', 'I2C Port': '-', 'Battery': '1200mAh Li-ion, included',
      'Enclosure': 'ABS enclosure, included', 'Meshtastic Preloaded': 'Yes', 'Memory ROM': '384KB',
      'Memory SRAM': '512KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '8MB',
      'Memory Flash': '4MB'
    }
  },
  {
    name: 'ThinkNode M6',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'None', wifi: 'No', input: 'User', price: '79.90', brand: 'Elecrow', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m6-outdoor-solar-power-for-meshtastic-powered-by-nrf52840-supports-gps.html',
    docsUrl: 'https://media-cdn.elecrow.com/wiki/ThinkNode_M6_Outdoor_Solar_Power_for_Meshtastic_Powered_By_nRF52840_Supports_GPS.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Built-in L76K GPS',
      'Charging Interface': '6W solar MPPT + USB-C, 5V/1A', 'Frequency': 'EU868 / US915',
      'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE / Bluetooth 5.4', 'Display Type': '-', 'Display Size': '-', 'Charging IC': 'MPPT (part not specified)',
      'Input': 'Function and Reset buttons', 'Temp/ Humidity Sensor': 'External sensor support',
      'Air Pressure Sensor': 'External sensor support', 'Air Quality Sensor': 'External sensor support',
      'External Notification': 'Power and GPS/LoRa LEDs', 'UART Port': '1× waterproof SP11',
      'I2C Port': '1× waterproof SP11', 'Battery': '7000mAh, 2× 18650 Li-ion, included',
      'Enclosure': 'Plastic, IP65, included', 'Meshtastic Preloaded': 'Yes', 'Memory ROM': '-',
      'Memory SRAM': '256KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '-',
      'Memory Flash': '1MB internal + 4MB external'
    }
  },
  {
    name: 'ThinkNode M7',
    meta: { mcu: 'ESP32', lora: 'LR1110', gps: 'No', screen: 'None', wifi: 'Yes', input: 'User', price: '54.90', brand: 'Elecrow', case: 'Yes', battery: 'No', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.elecrow.com/thinknode-m7-wireless-communication-gateway-for-meshtastic-support-poe-powered-powered-by-esp32-s3-and-lr1110.html',
    docsUrl: 'https://www.elecrow.com/thinknode-m7-wireless-communication-gateway-for-meshtastic-support-poe-powered-powered-by-esp32-s3-and-lr1110.html',
    specs: {
      'Brand': 'Elecrow', 'MCU Chip': 'ESP32-S3', 'LoRa Chip': 'LR1110', 'GPS/GNSS': 'NO',
      'Charging Interface': 'USB-C power or IEEE 802.3af PoE', 'Frequency': 'EU868 / US915',
      'Max. TX Power': 'Not specified', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '2.4GHz 802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5.0', 'Display Type': '-',
      'Display Size': '-', 'Charging IC': 'N/A (no battery)', 'Input': 'Reload and internal Boot buttons',
      'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-', 'Air Quality Sensor': '-',
      'External Notification': 'Power, LoRa and Bluetooth LEDs', 'UART Port': 'USB debug/serial',
      'I2C Port': '-', 'Battery': '-', 'Enclosure': 'Plastic enclosure, included', 'Meshtastic Preloaded': 'Yes',
      'Memory ROM': '384KB', 'Memory SRAM': '512KB', 'Memory RTC SRAM': '-', 'Memory SiP Flash': '-',
      'Memory PSRAM': '8MB', 'Memory Flash': '4MB'
    }
  },
  {
    name: 'HELTXT',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'OLED', wifi: 'Yes', input: 'Keyboard User', price: '79.99', brand: 'Haruki Toreda', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.etsy.com/listing/1729282449/heltxt-standalone-running-meshtastic',
    docsUrl: 'https://www.etsy.com/listing/1729282449/heltxt-standalone-running-meshtastic',
    specs: {
      'Brand': 'Haruki Toreda', 'MCU Chip': 'ESP32-S3FN8', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'ATGM336H: GPS, BeiDou', 'Charging Interface': 'USB-C', 'Frequency': '863–928 MHz',
      'Max. TX Power': '21 ± 1 dBm', 'Max. Receiving Sensitivity': '-136 dBm',
      'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'Bluetooth 5.0 LE', 'Display Type': 'OLED',
      'Display Size': '0.96 in, 128×64', 'Charging IC': 'LP4056H',
      'Input': 'Keyboard, User button, Reset button', 'Temp/ Humidity Sensor': 'Optional BME680',
      'Air Pressure Sensor': 'Optional BME680', 'Air Quality Sensor': 'Optional BME680',
      'External Notification': 'Buzzer, status LED', 'UART Port': '-', 'I2C Port': '-',
      'Battery': '4000mAh Li-ion, included', 'Enclosure': 'PLA+, included',
      'Meshtastic Preloaded': 'Yes', 'Memory ROM': '384KB', 'Memory SRAM': '512KB',
      'Memory RTC SRAM': '16KB', 'Memory SiP Flash': '-', 'Memory PSRAM': '-', 'Memory Flash': '8MB'
    }
  },
  {
    name: 'nRF-TXT',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'LCD', wifi: 'No', input: 'Keyboard User', price: '114.99', brand: 'Haruki Toreda', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://harutech.org/products/nrf-txt',
    docsUrl: 'https://harutech.org/products/nrf-txt',
    specs: {
      'Brand': 'Haruki Toreda', 'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'L76K: GPS, BeiDou, GLONASS, QZSS', 'Charging Interface': 'USB-C',
      'Frequency': '863–928 MHz', 'Max. TX Power': '21 ± 1 dBm',
      'Max. Receiving Sensitivity': '-135 dBm', 'Wi-Fi': '-', 'Bluetooth': 'Bluetooth 5.0 LE',
      'Display Type': 'LCD', 'Display Size': '1.14 in, 135×240', 'Charging IC': 'LP4056H',
      'Input': 'Keyboard, User button, Reset button', 'Temp/ Humidity Sensor': 'Optional BME680',
      'Air Pressure Sensor': 'Optional BME680', 'Air Quality Sensor': 'Optional BME680',
      'External Notification': 'Buzzer, status LEDs', 'UART Port': '-', 'I2C Port': '-',
      'Battery': '4000mAh Li-ion, included', 'Enclosure': '3D-printed',
      'Meshtastic Preloaded': 'Yes', 'Memory ROM': '-', 'Memory SRAM': '256KB',
      'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '-', 'Memory Flash': '1MB'
    }
  }
];

function addElecrowDevices() {
  const headerRow = document.querySelector('#comparisonTable thead tr');
  const rowsByLabel = new Map(
    Array.from(document.querySelectorAll('#comparisonTable tbody tr')).map(row => [row.cells[0].textContent.trim(), row])
  );

  elecrowDevices.forEach(device => {
    const header = document.createElement('th');
    header.textContent = device.name;
    Object.entries(device.meta).forEach(([key, value]) => header.dataset[key] = value);
    headerRow.appendChild(header);

    rowsByLabel.forEach((row, label) => {
      const cell = document.createElement('td');
      if (label.startsWith('Base Price USD')) {
        const link = document.createElement('a');
        link.href = device.productUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = `$${device.meta.price}`;
        cell.appendChild(link);
      } else if (label === 'Diagram') {
        const link = document.createElement('a');
        link.href = device.docsUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Official documentation';
        cell.appendChild(link);
      } else {
        cell.textContent = device.specs[label] ?? 'Not specified';
      }
      row.appendChild(cell);
    });
  });
}

addElecrowDevices();

function createSeeedSpecs(overrides) {
  return {
    'Brand': 'Seeed Studio', 'MCU Chip': '-', 'LoRa Chip': '-', 'GPS/GNSS': '-',
    'Charging Interface': '-', 'Frequency': '-', 'Max. TX Power': '-',
    'Max. Receiving Sensitivity': '-', 'Wi-Fi': '-', 'Bluetooth': 'Bluetooth 5.0 LE',
    'Display Type': '-', 'Display Size': '-', 'Input': '-', 'Temp/ Humidity Sensor': '-',
    'Air Pressure Sensor': '-', 'Air Quality Sensor': '-', 'External Notification': '-',
    'UART Port': '-', 'I2C Port': '-', 'Battery': '-', 'Enclosure': '-',
    'Meshtastic Preloaded': '-', 'Memory ROM': '-', 'Memory SRAM': '-',
    'Memory RTC SRAM': '-', 'Memory SiP Flash': '-', 'Memory PSRAM': '-',
    'Memory Flash': '-', ...overrides
  };
}

const additionalSeeedDevices = [
  {
    name: 'SenseCAP Indicator D1L',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'LCD', wifi: 'Yes', input: 'Touchscreen Boot', price: '60.90', brand: 'Seeed', case: 'Yes', battery: 'No', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.seeedstudio.com/SenseCAP-Indicator-D1L-for-Meshtastic-p-6304.html',
    docsUrl: 'https://wiki.seeedstudio.com/sensecap_indicator_meshtastic/',
    specs: createSeeedSpecs({
      'MCU Chip': 'ESP32-S3 + RP2040', 'LoRa Chip': 'SX1262',
      'Charging Interface': 'USB-C', 'Frequency': '862–930 MHz',
      'Max. TX Power': '22 dBm', 'Max. Receiving Sensitivity': '-148 dBm',
      'Wi-Fi': '802.11 b/g/n', 'Display Type': 'LCD', 'Display Size': '3.95 in, 480×480',
      'Input': 'Touchscreen, Boot button', 'External Notification': 'Buzzer',
      'I2C Port': '1× Grove', 'Enclosure': 'Included', 'Meshtastic Preloaded': 'Yes',
      'Memory ROM': '384 KB + 16 KB', 'Memory SRAM': '512 KB + 264 KB',
      'Memory RTC SRAM': '16 KB', 'Memory SiP Flash': 'microSD / TF',
      'Memory Flash': '8 MB + 2 MB'
    })
  },
  {
    name: 'XIAO nRF52840 & Wio-SX1262 Kit',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'No', input: 'Reset', price: '13.49', brand: 'Seeed', case: 'No', battery: 'No', meshtastic: 'Yes', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/XIAO-nRF52840-Wio-SX1262-Kit-for-Meshtastic-p-6400.html',
    docsUrl: 'https://wiki.seeedstudio.com/xiao_nrf52840%26_wio_SX1262_kit_for_meshtastic/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'Charging Interface': 'USB-C',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Input': 'Reset button',
      'External Notification': 'Status LED', 'Meshtastic Preloaded': 'Yes',
      'Memory SRAM': '256 KB', 'Memory Flash': '1 MB'
    })
  },
  {
    name: 'SenseCAP Solar Node P1',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'No', input: 'Power', price: '77.99', brand: 'Seeed', case: 'Yes', battery: 'No', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-for-Meshtastic-LoRa-p-6425.html',
    docsUrl: 'https://wiki.seeedstudio.com/meshtastic_solar_node/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'Charging Interface': 'USB-C, Solar',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Input': 'Power button',
      'External Notification': 'Status LED', 'I2C Port': '1× Grove',
      'Enclosure': 'Included', 'Meshtastic Preloaded': 'Yes', 'Memory SRAM': '256 KB',
      'Memory Flash': '1 MB + 2 MB external'
    })
  },
  {
    name: 'SenseCAP Solar Node P1-Pro',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'None', wifi: 'No', input: 'Power', price: '100.99', brand: 'Seeed', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.seeedstudio.com/SenseCAP-Solar-Node-P1-Pro-for-Meshtastic-LoRa-p-6412.html',
    docsUrl: 'https://wiki.seeedstudio.com/meshtastic_solar_node/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'GPS, GLONASS, BeiDou, Galileo', 'Charging Interface': 'USB-C, Solar',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Input': 'Power button',
      'External Notification': 'Status LED', 'I2C Port': '1× Grove',
      'Battery': '4 × 3350 mAh', 'Enclosure': 'Included', 'Meshtastic Preloaded': 'Yes',
      'Memory SRAM': '256 KB', 'Memory Flash': '1 MB + 2 MB external'
    })
  },
  {
    name: 'Wio Tracker 1110 Dev Kit',
    meta: { mcu: 'nRF', lora: 'LR1110', gps: 'Yes', screen: 'OLED', wifi: 'No', input: 'User Reset', price: '36.10', brand: 'Seeed', case: 'No', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Kit-for-Meshtastic.html',
    docsUrl: 'https://wiki.seeedstudio.com/meshtastic_kit_wio_tracker_1110/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'LR1110', 'GPS/GNSS': 'GPS, BeiDou',
      'Charging Interface': 'USB-C', 'Frequency': '863–928 MHz',
      'Max. TX Power': '20 dBm', 'Max. Receiving Sensitivity': '-141 dBm',
      'Bluetooth': 'Bluetooth 5.3 LE', 'Display Type': 'OLED',
      'Display Size': '0.96 in, 128×64', 'Input': 'User button, Reset button',
      'Temp/ Humidity Sensor': 'Temperature, humidity', 'External Notification': 'Status LED',
      'I2C Port': '6× Grove', 'Meshtastic Preloaded': 'No', 'Memory SRAM': '256 KB',
      'Memory Flash': '1 MB + 4 MB external'
    })
  },
  {
    name: 'Wio Tracker L1 Lite',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'None', wifi: 'No', input: 'User Reset Power', price: '31.99', brand: 'Seeed', case: 'No', battery: 'No', meshtastic: 'Yes', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/Wio-Tracker-L1-Lite-p-6455.html',
    docsUrl: 'https://wiki.seeedstudio.com/wio_tracker_l1_node/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'GPS, GLONASS, BeiDou, QZSS', 'Charging Interface': 'USB-C, Solar',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Input': 'User button, Reset button, Power button',
      'External Notification': 'Buzzer, status LED', 'I2C Port': '1× Grove',
      'Meshtastic Preloaded': 'Yes', 'Memory SRAM': '256 KB', 'Memory Flash': '1 MB'
    })
  },
  {
    name: 'Wio Tracker L1',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'OLED', wifi: 'No', input: 'User Reset Power', price: '33.99', brand: 'Seeed', case: 'No', battery: 'No', meshtastic: 'Yes', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/Wio-Tracker-L1-p-6453.html',
    docsUrl: 'https://wiki.seeedstudio.com/wio_tracker_l1_node/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'GPS, GLONASS, BeiDou, QZSS', 'Charging Interface': 'USB-C, Solar',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Display Type': 'OLED',
      'Display Size': '1.3 in, 128×64', 'Input': 'User button, Reset button, Power button',
      'External Notification': 'Buzzer, status LED', 'I2C Port': '1× Grove',
      'Meshtastic Preloaded': 'Yes', 'Memory SRAM': '256 KB', 'Memory Flash': '1 MB'
    })
  },
  {
    name: 'Wio Tracker L1 Pro',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'OLED', wifi: 'No', input: 'User Reset Power', price: '47.90', brand: 'Seeed', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.seeedstudio.com/Violet-Wio-Tracker-L1-Pro-for-Meshtastic-p-6926.html',
    docsUrl: 'https://wiki.seeedstudio.com/wio_tracker_l1_node/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'GPS, GLONASS, BeiDou, QZSS', 'Charging Interface': 'USB-C, Solar',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Display Type': 'OLED',
      'Display Size': '1.3 in, 128×64', 'Input': 'User button, Reset button, Power button',
      'External Notification': 'Buzzer, status LED', 'I2C Port': '1× Grove',
      'Battery': '2000 mAh', 'Enclosure': 'PC+ABS', 'Meshtastic Preloaded': 'Yes',
      'Memory SRAM': '256 KB', 'Memory Flash': '1 MB'
    })
  },
  {
    name: 'Wio Tracker L1 E-Ink',
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'Eink', wifi: 'No', input: 'Joystick Reset Power', price: '35.99', brand: 'Seeed', case: 'No', battery: 'No', meshtastic: 'Yes', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/Wio-Tracker-L1-E-ink-p-6456.html',
    docsUrl: 'https://wiki.seeedstudio.com/wio_tracker_l1_node/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262',
      'GPS/GNSS': 'GPS, GLONASS, BeiDou, QZSS', 'Charging Interface': 'USB-C, Solar',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Display Type': 'E-Ink',
      'Display Size': '2.13 in, 122×250', 'Input': 'Joystick, Reset button, Power button',
      'External Notification': 'Buzzer, status LED', 'I2C Port': '1× Grove',
      'Meshtastic Preloaded': 'Yes', 'Memory SRAM': '256 KB', 'Memory Flash': '1 MB'
    })
  },
  {
    name: 'SenseCAP MeshTracker X1',
    meta: { mcu: 'nRF', lora: 'LR2021', gps: 'Yes', screen: 'None', wifi: 'No', input: 'User', price: '42.90', brand: 'Seeed', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
    productUrl: 'https://www.seeedstudio.com/sensecap-meshtracker-x1-meshtastic-gps-tracker-p-6935.html',
    docsUrl: 'https://wiki.seeedstudio.com/meshtracker_x1_intro/',
    specs: createSeeedSpecs({
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'LR2021', 'GPS/GNSS': 'GPS',
      'Charging Interface': 'USB-C', 'Frequency': '863–928 MHz',
      'Max. TX Power': '22 dBm', 'Max. Receiving Sensitivity': '-141 dBm',
      'Input': 'User button', 'Temp/ Humidity Sensor': 'Temperature',
      'Air Pressure Sensor': 'Pressure', 'External Notification': 'Buzzer, vibration, RGB status LED',
      'Battery': '1100 mAh', 'Enclosure': 'IP66', 'Meshtastic Preloaded': 'Yes',
      'Memory SRAM': '256 KB', 'Memory Flash': '1 MB + 8 MB external'
    })
  },
  {
    name: 'XIAO ESP32S3 & Wio-SX1262 Kit',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'Yes', input: 'User Reset Boot', price: '10.90', brand: 'Seeed', case: 'No', battery: 'No', meshtastic: 'Yes', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html',
    docsUrl: 'https://wiki.seeedstudio.com/xiao_esp32s3_%26_wio_SX1262_kit_for_meshtastic/',
    specs: createSeeedSpecs({
      'MCU Chip': 'ESP32-S3R8', 'LoRa Chip': 'SX1262', 'Charging Interface': 'USB-C',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Wi-Fi': '802.11 b/g/n',
      'Input': 'User button, Reset button, Boot button', 'External Notification': 'Status LEDs',
      'Meshtastic Preloaded': 'Yes', 'Memory ROM': '384 KB', 'Memory SRAM': '512 KB',
      'Memory RTC SRAM': '16 KB', 'Memory PSRAM': '8 MB', 'Memory Flash': '8 MB'
    })
  },
  {
    name: 'XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case',
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'None', wifi: 'Yes', input: 'User Reset Boot', price: '17.90', brand: 'Seeed', case: 'Yes', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://www.seeedstudio.com/XIAO-ESP32S3-for-Meshtastic-LoRa-with-3D-Printed-Enclosure-p-6314.html',
    docsUrl: 'https://wiki.seeedstudio.com/wio_sx1262_and_xiao_esp32s3_kit_with_3dprinted_enclosure_introduction_and_assembly_guide/',
    specs: createSeeedSpecs({
      'MCU Chip': 'ESP32-S3R8', 'LoRa Chip': 'SX1262', 'Charging Interface': 'USB-C',
      'Frequency': '862–930 MHz', 'Max. TX Power': '22 dBm',
      'Max. Receiving Sensitivity': '-148 dBm', 'Wi-Fi': '802.11 b/g/n',
      'Input': 'User button, Reset button, Boot button', 'External Notification': 'Status LEDs',
      'Enclosure': '3D-printed', 'Meshtastic Preloaded': 'No', 'Memory ROM': '384 KB',
      'Memory SRAM': '512 KB', 'Memory RTC SRAM': '16 KB', 'Memory PSRAM': '8 MB',
      'Memory Flash': '8 MB'
    })
  }
];

function addAdditionalSeeedDevices() {
  const headerRow = document.querySelector('#comparisonTable thead tr');
  const referenceHeader = Array.from(headerRow.cells).find(header => header.dataset.brand === 'Elecrow');
  const rows = Array.from(document.querySelectorAll('#comparisonTable tbody tr'));
  const rowsByLabel = new Map(rows.map(row => [row.cells[0].textContent.trim(), row]));
  const referenceCells = new Map(rows.map(row => [row, row.children[referenceHeader.cellIndex]]));

  additionalSeeedDevices.forEach(device => {
    const header = document.createElement('th');
    header.textContent = device.name;
    Object.entries(device.meta).forEach(([key, value]) => header.dataset[key] = value);
    headerRow.insertBefore(header, referenceHeader);

    rowsByLabel.forEach((row, label) => {
      const cell = document.createElement('td');
      if (label.startsWith('Base Price USD')) {
        const link = document.createElement('a');
        link.href = device.productUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = `$${device.meta.price}`;
        cell.appendChild(link);
      } else if (label === 'Diagram') {
        const link = document.createElement('a');
        link.href = device.docsUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Official documentation';
        cell.appendChild(link);
      } else {
        cell.textContent = device.specs[label] ?? '-';
      }
      row.insertBefore(cell, referenceCells.get(row));
    });
  });
}

addAdditionalSeeedDevices();

function addMotionSensorRows() {
  const table = document.querySelector('#comparisonTable');
  const body = table.tBodies[0];
  const referenceRow = Array.from(body.rows).find(row =>
    row.cells[0].textContent.trim() === 'External Notification'
  );

  ['IMU', 'Magnetometer / Digital Compass'].forEach(label => {
    const row = document.createElement('tr');
    Array.from(table.tHead.rows[0].cells).forEach((_, column) => {
      const cell = document.createElement('td');
      cell.textContent = column === 0 ? label : '-';
      row.appendChild(cell);
    });
    body.insertBefore(row, referenceRow);
  });
}

addMotionSensorRows();

function normalizeMemoryStorage() {
  const table = document.querySelector('#comparisonTable');
  const headers = Array.from(table.querySelectorAll('thead th'));
  const rowsByLabel = new Map(Array.from(table.querySelectorAll('tbody tr')).map(row => [
    row.cells[0].textContent.trim(),
    row
  ]));
  const romRow = rowsByLabel.get('Memory ROM');
  const sramRow = rowsByLabel.get('Memory SRAM');
  const rtcRow = rowsByLabel.get('Memory RTC SRAM');
  const sipFlashRow = rowsByLabel.get('Memory SiP Flash');
  const psramRow = rowsByLabel.get('Memory PSRAM');
  const flashRow = rowsByLabel.get('Memory Flash');
  const mcuRow = rowsByLabel.get('MCU Chip');

  const storageExpansion = new Map([
    ['SenseCAP Indicator D1L', 'microSD / TF'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'microSD / TF'],
    ['T-Deck', 'microSD / TF'],
    ['T-Beam Supreme', 'microSD / TF'],
    ['T3-S3', 'microSD / TF'],
    ['T5 E-Paper S3 Pro', 'microSD / TF'],
    ['T3-S3 E-Paper', 'microSD / TF'],
    ['T-LoRa Pager', 'microSD / TF (up to 32 GB, FAT32)'],
    ['T-Deck Pro', 'microSD / TF'],
    ['T-Deck Plus', 'microSD / TF']
  ]);
  const flashOverrides = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '8 MB'],
    ['Heltec Mesh Node T114', '1 MB'],
    ['Nano G2 Ultra', '1 MB + 16 MB external']
  ]);
  const romOverrides = new Map([
    ['SenseCAP Indicator D1L', '384 KB + 16 KB']
  ]);
  const sramOverrides = new Map([
    ['SenseCAP Indicator D1L', '512 KB + 264 KB']
  ]);

  function architecture(mcu) {
    if (/nrf52840/i.test(mcu)) return 'nrf52840';
    if (/esp32-c3/i.test(mcu)) return 'esp32-c3';
    if (/esp32-s3/i.test(mcu)) return 'esp32-s3';
    if (/\besp32\b/i.test(mcu)) return 'esp32';
    return 'unknown';
  }

  function documented(value) {
    return value && !/^(?:-|\?|not specified)$/i.test(value.trim());
  }

  function cleanFlash(value) {
    return value
      .replace(/\s*\+\s*microSD slot$/i, '')
      .replace(/\s+SiP Flash$/i, '')
      .replace(/^(\d+(?:\.\d+)?\s*(?:KB|MB|GB))\s+Flash$/i, '$1')
      .replace(/\s+internal\b/gi, '')
      .trim();
  }

  headers.slice(1).forEach((header, index) => {
    const column = index + 1;
    const name = header.textContent.trim();
    const mcu = mcuRow.cells[column].textContent.trim();
    const family = architecture(mcu);
    const chipMemory = {
      esp32: { rom: '448 KB', sram: '520 KB', rtc: '16 KB' },
      'esp32-s3': { rom: '384 KB', sram: '512 KB', rtc: '16 KB' },
      'esp32-c3': { rom: '384 KB', sram: '400 KB', rtc: '8 KB' },
      nrf52840: { rom: '-', sram: '256 KB', rtc: '-' },
      unknown: { rom: '-', sram: '-', rtc: '-' }
    }[family];

    romRow.cells[column].textContent = romOverrides.get(name) || chipMemory.rom;
    sramRow.cells[column].textContent = sramOverrides.get(name) || chipMemory.sram;
    rtcRow.cells[column].textContent = chipMemory.rtc;

    const existingFlash = flashRow.cells[column].textContent.trim();
    const existingSipFlash = sipFlashRow.cells[column].textContent.trim();
    let onboardFlash = flashOverrides.get(name);
    if (!onboardFlash && documented(existingFlash)) onboardFlash = cleanFlash(existingFlash);
    if (!onboardFlash && documented(existingSipFlash)) onboardFlash = cleanFlash(existingSipFlash);
    if (!onboardFlash && family === 'nrf52840') onboardFlash = '1 MB';
    flashRow.cells[column].textContent = onboardFlash || '-';

    const existingPsram = psramRow.cells[column].textContent.trim();
    psramRow.cells[column].textContent = documented(existingPsram) ? existingPsram : '-';
    sipFlashRow.cells[column].textContent = storageExpansion.get(name) || '-';
  });

  romRow.cells[0].textContent = 'MCU ROM';
  sramRow.cells[0].textContent = 'MCU SRAM';
  rtcRow.cells[0].textContent = 'RTC / Low-power SRAM';
  psramRow.cells[0].textContent = 'PSRAM';
  flashRow.cells[0].textContent = 'Onboard Flash';
  sipFlashRow.cells[0].textContent = 'Storage Expansion';
  flashRow.after(sipFlashRow);
}

normalizeMemoryStorage();

function normalizeComparisonValues() {
  const table = document.querySelector('#comparisonTable');
  const headers = Array.from(table.querySelectorAll('thead th'));
  const rows = Array.from(table.querySelectorAll('tbody tr'));
  const noneRows = new Set([
    'GPS/GNSS', 'Display Type', 'Display Size', 'Input', 'Temp/ Humidity Sensor',
    'Air Pressure Sensor', 'Air Quality Sensor', 'IMU', 'Magnetometer / Digital Compass',
    'External Notification', 'UART Port',
    'I2C Port', 'Battery', 'Enclosure', 'MCU ROM', 'MCU SRAM',
    'RTC / Low-power SRAM', 'PSRAM', 'Onboard Flash', 'Storage Expansion'
  ]);
  const notSpecifiedRows = new Set(['Max. Receiving Sensitivity']);

  const bluetoothValues = new Map([
    ['bt-5 (le)', 'Bluetooth 5.0 LE'],
    ['bluetooth 5 le', 'Bluetooth 5.0 LE'],
    ['bluetooth 5.0', 'Bluetooth 5.0 LE'],
    ['ble / bluetooth 5', 'Bluetooth 5.0 LE'],
    ['ble / bluetooth 5.0', 'Bluetooth 5.0 LE'],
    ['ble / bluetooth 5 / bluetooth mesh', 'Bluetooth 5.0 LE + Mesh'],
    ['ble / bluetooth 5 (mode-dependent with touch ui)', 'Bluetooth 5.0 LE (mode-dependent)'],
    ['bt-4.2 (le)', 'Bluetooth 4.2 LE'],
    ['bluetooth 4.2 br/edr + ble', 'Bluetooth 4.2 BR/EDR + LE'],
    ['bt-5.3 (le)', 'Bluetooth 5.3 LE'],
    ['bt-5.4 (le)', 'Bluetooth 5.4 LE'],
    ['ble / bluetooth 5.4', 'Bluetooth 5.4 LE'],
    ['ble', 'Bluetooth LE (version not specified)']
  ]);

  function normalizeUnits(value) {
    return value
      .replace(/\b(\d+(?:\.\d+)?)\s*(KB|MB|GB|mAh|MHz|GHz|dBm|dB|mA|V|A)\b/g, '$1 $2')
      .replace(/\b(\d+)\s*[xX]\s*(\d+)\b/g, '$1×$2')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  function normalizeMemory(value, label) {
    let normalized = normalizeUnits(value)
      .replace(/^1M ROM$/i, '1 MB')
      .replace(/\s+(?:ROM|SRAM|PSRAM|SiP Flash)$/i, '');
    if (label === 'Onboard Flash') {
      normalized = normalized.replace(/^(\d+ (?:KB|MB|GB)) Flash$/i, '$1');
    }
    return normalized;
  }

  rows.forEach(row => {
    const label = row.cells[0].textContent.trim();
    if (label === 'Brand' || label.startsWith('Base Price USD') || label === 'Diagram') return;

    Array.from(row.cells).slice(1).forEach(cell => {
      const header = headers[cell.cellIndex];
      let value = cell.textContent.trim();

      if (value === '?' || value === '') value = 'Not specified';
      if (value === '-' && noneRows.has(label)) {
        if (label === 'GPS/GNSS') value = 'No';
        else value = label === 'Battery' || label === 'Enclosure' ? 'Not included' : '-';
      }
      if (value === '-' && notSpecifiedRows.has(label)) value = 'Not specified';

      if (label === 'Bluetooth') {
        value = bluetoothValues.get(value.toLowerCase()) ?? value;
        value = value.replace(/^Bluetooth\s+/i, '');
      } else if (label === 'Wi-Fi') {
        if (/^(?:YES|802\.11 b\/g\/n|2\.4GHz 802\.11 b\/g\/n)$/i.test(value)) {
          value = '2.4 GHz Wi-Fi (802.11 b/g/n)';
        } else if (/^NO$/i.test(value)) {
          value = 'No';
        } else if (/^Yes \(ESP32-S3 hardware; firmware-dependent\)$/i.test(value)) {
          value = '2.4 GHz Wi-Fi (firmware-dependent)';
        }
        value = value
          .replace(/^2\.4 GHz Wi-Fi/i, '2.4 GHz')
          .replace(/^Configuration\/OTA Wi-Fi$/i, 'Configuration / OTA');
      } else if (label === 'MCU Chip') {
        value = value
          .replace(/,\s*dual-core LX7 @ 240\s*MHz$/i, '')
          .replace(/\s*@\s*64\s*MHz$/i, '')
          .replace(/\s*\(16\s*MB flash, 8\s*MB PSRAM\)$/i, '')
          .replace(/^Heltec Wireless Shell \(revision not specified\)$/i, '-');
      } else if (label === 'GPS/GNSS') {
        if (/^(?:-|NO)$/i.test(value)) value = 'No';
        value = value
          .replace(/\bL76k\b/g, 'L76K')
          .replace(/\bBuilt in\b/gi, 'Built-in')
          .replace(/\bBDS\b/g, 'BeiDou');
      } else if (label === 'Charging Interface') {
        value = value
          .replace(/\bMicro USB\b/g, 'Micro-USB')
          .replace(/^Pogo Pins$/i, 'Pogo pins')
          .replace(/\bcharging cable\b/gi, 'cable')
          .replace(/^Magnetic 2-pin charging,/i, 'Magnetic 2-pin,')
          .replace(/^Magnetic charging\b/i, 'Magnetic');
      } else if (label === 'Frequency') {
        value = value
          .replace(/~/g, '–')
          .replace(/\s+\/\s+/g, ', ');
      } else if (label === 'Max. TX Power') {
        value = value
          .replace(/^\+/, '')
          .replace(/^19\s*±\s*1\s*dB$/i, '19 ± 1 dBm')
          .replace(/^Up to\s+/i, '')
          .replace(/\s+maximum(?=;|$)/i, '');
      } else if (label === 'Display Type') {
        value = value
          .replace(/^E-ink$/i, 'E-paper')
          .replace(/^E-paper \(monochrome\)$/i, 'E-paper');
      } else if (label === 'Display Size') {
        value = value
          .replace(/(\d+(?:\.\d+)?)\s*-?\s*inch\b/gi, '$1 in')
          .replace(/\s+OLED \(display variant\)$/i, ' (display variant)')
          .replace(/^(\d+×\d+) touch (?:TFT|LCD)$/i, '$1');
      } else if (label === 'Input') {
        value = value
          .replace(/^User Button, Reset Button$/i, 'User and Reset buttons')
          .replace(/^Reset Button$/i, 'Reset button')
          .replace(/\bButton\b/g, 'button')
          .replace(/\bButtons\b/g, 'buttons');
      } else if (label === 'Meshtastic Preloaded') {
        value = /^(?:Yes)$/i.test(value) ? 'Yes' : 'No';
      } else if (['MCU ROM', 'MCU SRAM', 'RTC / Low-power SRAM', 'PSRAM', 'Onboard Flash'].includes(label)) {
        value = normalizeMemory(value, label);
      }

      value = normalizeUnits(value);

      if (label === 'Battery' && /^\d+(?:\.\d+)? mAh$/i.test(value) && header?.dataset.battery === 'Yes') {
        value += ', included';
      }
      if (label === 'Battery') {
        value = value
          .replace(/; batter(?:y|ies) not included$/i, '; not included')
          .replace(/^Built-in rechargeable battery;/i, 'Rechargeable, built-in;');
      }
      if (label === 'Enclosure') {
        if (/^ABS Case$/i.test(value)) value = 'ABS, included';
        if (/^Resin$/i.test(value)) value = 'Resin, included';
        value = value
          .replace(/^IP65 enclosure, included$/i, 'IP65, included')
          .replace(/^IP66 aluminum enclosure, included$/i, 'Aluminum, IP66, included')
          .replace(/^Touch glass \+ aluminum enclosure, included$/i, 'Touch glass + aluminum, included')
          .replace(/^IP65\/IP66 industrial enclosure, included$/i, 'Industrial, IP65/IP66, included')
          .replace(/^Aluminum enclosure, included$/i, 'Aluminum, included')
          .replace(/^Handheld enclosure, included$/i, 'Handheld, included')
          .replace(/^Enclosure, included$/i, 'Included')
          .replace(/^Watch enclosure and strap, included$/i, 'Watch body and strap, included')
          .replace(/^ABS enclosure, included$/i, 'ABS, included')
          .replace(/^Plastic enclosure, included$/i, 'Plastic, included')
          .replace(/^Glass\/aluminum\/PC enclosure, included$/i, 'Glass/aluminum/PC, included')
          .replace(/^Screen cover only; no full enclosure$/i, 'Screen cover only; otherwise not included');
      }

      cell.textContent = value;
    });
  });
}

normalizeComparisonValues();

function normalizeDeviceDetails() {
  const table = document.querySelector('#comparisonTable');
  const headers = Array.from(table.querySelectorAll('thead th'));
  const rows = new Map(
    Array.from(table.querySelectorAll('tbody tr')).map(row => [row.cells[0].textContent.trim(), row])
  );
  const gpsRow = rows.get('GPS/GNSS');
  const chargingInterfaceRow = rows.get('Charging Interface');
  const batteryRow = rows.get('Battery');
  const loraRow = rows.get('LoRa Chip');
  const frequencyRow = rows.get('Frequency');
  const txPowerRow = rows.get('Max. TX Power');
  const rxSensitivityRow = rows.get('Max. Receiving Sensitivity');
  const wifiRow = rows.get('Wi-Fi');
  const displayTypeRow = rows.get('Display Type');
  const displaySizeRow = rows.get('Display Size');
  const tempHumidityRow = rows.get('Temp/ Humidity Sensor');
  const airPressureRow = rows.get('Air Pressure Sensor');
  const airQualityRow = rows.get('Air Quality Sensor');
  const imuRow = rows.get('IMU');
  const magnetometerRow = rows.get('Magnetometer / Digital Compass');
  const notificationRow = rows.get('External Notification');
  const inputRow = rows.get('Input');
  const bluetoothRow = rows.get('Bluetooth');
  const meshtasticRow = rows.get('Meshtastic Preloaded');
  const uartRow = rows.get('UART Port');
  const connectorRow = rows.get('I2C Port');

  const verifiedEnvironmentalCapabilities = new Map([
    ['Heltec Capsule Sensor V3', {
      types: ['TempHumidity', 'Pressure'],
      value: 'Temperature, humidity, pressure (optional)'
    }],
    ['WisBlock Starter Kit RAK4631 + RAK19003', {
      types: ['TempHumidity'],
      value: 'Temperature, humidity (optional)'
    }],
    ['WisBlock Starter Kit RAK4631 + RAK19007', {
      types: ['TempHumidity'],
      value: 'Temperature, humidity (optional)'
    }],
    ['T-Echo', {
      types: ['TempHumidity', 'Pressure'],
      value: 'Temperature, humidity, pressure (optional)'
    }],
    ['SenseCAP Card Tracker T1000-E', {
      types: ['TempHumidity'],
      value: 'Temperature'
    }],
    ['Wio Tracker 1110 Dev Kit', {
      types: ['TempHumidity'],
      value: 'Temperature, humidity'
    }],
    ['SenseCAP MeshTracker X1', {
      types: ['TempHumidity', 'Pressure'],
      value: 'Temperature, pressure'
    }]
  ]);

  const gpsCapabilities = new Map([
    ['Heltec Wireless Tracker V1.1', 'GPS, GLONASS, BeiDou, Galileo, QZSS, NavIC'],
    ['Heltec Capsule Sensor V3', 'GPS, GLONASS, BeiDou, QZSS (optional)'],
    ['Heltec Mesh Node T114', 'GPS, GLONASS, BeiDou, QZSS'],
    ['Heltec WiFi LoRa 32 V4.3.1', 'GPS, GLONASS, BeiDou, QZSS (optional)'],
    ['Heltec WiFi LoRa 32 Expansion Kit', 'GPS, GLONASS, BeiDou, QZSS (optional)'],
    ['Heltec Mesh Node T096', 'GPS, GLONASS, BeiDou, Galileo, QZSS, NavIC'],
    ['Heltec Mesh Node T1', 'GPS, GLONASS, BeiDou, Galileo, QZSS, NavIC'],
    ['Heltec Wireless Tracker V2', 'GPS, GLONASS, BeiDou, Galileo, QZSS, NavIC'],
    ['Heltec MeshTower V2', 'Optional'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'GPS, GLONASS, BeiDou, QZSS'],
    ['Heltec MeshSolar', 'Optional'],
    ['WisMesh Pocket V2', 'GPS, GLONASS, BeiDou, Galileo, QZSS'],
    ['T-Echo', 'GPS, GLONASS, BeiDou, QZSS'],
    ['T-Beam', 'GPS, GLONASS, BeiDou, Galileo, QZSS (variant)'],
    ['T-Beam Supreme', 'GPS, GLONASS, BeiDou, Galileo, QZSS (variant)'],
    ['T-LoRa Pager', 'GPS, GLONASS, BeiDou, Galileo, QZSS'],
    ['T-Deck Pro', 'GPS, GLONASS, BeiDou, Galileo, QZSS'],
    ['T-Deck Plus', 'GPS, GLONASS, BeiDou, Galileo, QZSS'],
    ['T-Echo Plus', 'GPS, GLONASS, BeiDou, QZSS'],
    ['T5 E-Paper S3 Pro', 'GPS, GLONASS, BeiDou, Galileo, QZSS (optional)'],
    ['Nano G2 Ultra', 'GPS, BeiDou'],
    ['SenseCAP Card Tracker T1000-E', 'GPS, GLONASS, BeiDou, Galileo, QZSS'],
    ['Wio Tracker 1110 Dev Board', 'GPS, BeiDou (cloud-assisted)'],
    ['SenseCAP Solar Node P1-Pro', 'GPS, GLONASS, BeiDou, Galileo'],
    ['Wio Tracker 1110 Dev Kit', 'GPS, BeiDou'],
    ['Wio Tracker L1 Lite', 'GPS, GLONASS, BeiDou, QZSS'],
    ['Wio Tracker L1', 'GPS, GLONASS, BeiDou, QZSS'],
    ['Wio Tracker L1 Pro', 'GPS, GLONASS, BeiDou, QZSS'],
    ['Wio Tracker L1 E-Ink', 'GPS, GLONASS, BeiDou, QZSS'],
    ['SenseCAP MeshTracker X1', 'GPS'],
    ['ThinkNode M1', 'GPS, GLONASS, BeiDou, QZSS'],
    ['ThinkNode M3', 'GPS, GLONASS, BeiDou, Galileo'],
    ['ThinkNode M4', 'GPS, GLONASS, BeiDou, QZSS'],
    ['ThinkNode M5', 'GPS, GLONASS, BeiDou, QZSS'],
    ['ThinkNode M6', 'GPS, GLONASS, BeiDou, QZSS'],
    ['HELTXT', 'GPS, BeiDou'],
    ['nRF-TXT', 'GPS, GLONASS, BeiDou, QZSS']
  ]);

  const imuCapabilities = new Map([
    ['Heltec Capsule Sensor V3', '3-axis accelerometer (optional)'],
    ['Heltec Mesh Node T1', '6-axis accelerometer, gyroscope'],
    ['T-Beam Supreme', '6-axis accelerometer, gyroscope'],
    ['T-LoRa Pager', '6-axis accelerometer, gyroscope'],
    ['T-Deck Pro', '6-axis accelerometer, gyroscope'],
    ['T-Watch S3', '3-axis accelerometer'],
    ['T-Echo Plus', '6-axis accelerometer, gyroscope'],
    ['SenseCAP Card Tracker T1000-E', '3-axis accelerometer'],
    ['Wio Tracker 1110 Dev Board', '3-axis accelerometer'],
    ['Wio Tracker 1110 Dev Kit', '3-axis accelerometer'],
    ['ThinkNode M4', '6-axis accelerometer, gyroscope'],
    ['nRF-TXT', '6-axis accelerometer, gyroscope (optional)']
  ]);

  const magnetometerCapabilities = new Map([
    ['Heltec Mesh Node T1', '3-axis'],
    ['T-Beam Supreme', '3-axis'],
    ['nRF-TXT', '3-axis (optional)']
  ]);

  const backlitEpaperDevices = new Set([
    'T-Echo',
    'T5 E-Paper S3 Pro',
    'T-Echo Plus',
    'ThinkNode M1',
    'ThinkNode M5'
  ]);

  const batteries = new Map([
    ['Heltec Capsule Sensor V3', '250 mAh'],
    ['Heltec MeshPocket', '5000 / 10000 mAh'],
    ['Heltec Mesh Node T1', '1850 mAh'],
    ['Heltec MeshTower V2', '3 × 2800 mAh'],
    ['Heltec SensorHub HRI-3621', '1100 mAh (18350)'],
    ['WisMesh Pocket V2', '3200 mAh'],
    ['T-Echo', '850 mAh'],
    ['T5 E-Paper S3 Pro', '1500 mAh'],
    ['T-Deck Pro', '1500 mAh'],
    ['T-Deck Plus', '2000 mAh'],
    ['T-Echo Plus', '2400 mAh'],
    ['SenseCAP Card Tracker T1000-E', '700 mAh'],
    ['SenseCAP Solar Node P1-Pro', '4 × 3350 mAh'],
    ['Wio Tracker L1 Pro', '2000 mAh'],
    ['SenseCAP MeshTracker X1', '1100 mAh'],
    ['ThinkNode M1', '1200 mAh'],
    ['ThinkNode M2', '1000 mAh'],
    ['ThinkNode M3', '760 mAh'],
    ['ThinkNode M4', '7000 mAh (18650)'],
    ['ThinkNode M5', '1200 mAh'],
    ['ThinkNode M6', '7000 mAh (2 × 18650)'],
    ['HELTXT', '4000 mAh'],
    ['nRF-TXT', '4000 mAh']
  ]);

  const notifications = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', 'Status LED'],
    ['Heltec WiFi LoRa 32 V3.2', 'Status LED'],
    ['Heltec Wireless Paper', 'Status LED'],
    ['Wireless Stick Lite (V3)', 'Status LED'],
    ['Heltec Wireless Tracker V1.1', 'Status LED'],
    ['Heltec Capsule Sensor V3', 'Status LEDs'],
    ['Heltec Vision Master E213', 'Status LED (revision-dependent)'],
    ['Heltec Vision Master E290', 'Status LED (revision-dependent)'],
    ['Heltec Mesh Node T114', 'Status LEDs'],
    ['Heltec WiFi LoRa 32 V4.3.1', 'Status LED'],
    ['Heltec MeshPocket', 'Status LEDs'],
    ['Heltec WiFi LoRa 32 Expansion Kit', 'Buzzer, status LED'],
    ['Heltec Mesh Node T096', 'Status LED'],
    ['Heltec Wireless Stick V3', 'Status LED'],
    ['Heltec Mesh Node T1', 'Buzzer, status LED'],
    ['Heltec Wireless Tracker V2', 'Status LED'],
    ['Heltec MeshTower V2', 'Status LED'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'Buzzer, status LED'],
    ['Heltec MeshSolar', 'Status LED, battery level LEDs'],
    ['Heltec SensorHub HRI-3621', 'RGB status LED'],
    ['Heltec Wireless Bridge', 'Status LEDs'],
    ['WisBlock Starter Kit RAK4631 + RAK19003', 'Status LEDs'],
    ['WisBlock Starter Kit RAK4631 + RAK19007', 'Status LEDs'],
    ['WisMesh Pocket V2', 'Status LEDs'],
    ['T-Deck', 'Buzzer'],
    ['T-Echo', 'Status LEDs'],
    ['T-Beam', 'Status LED'],
    ['T3-S3', 'Status LED'],
    ['T3-S3 E-Paper', 'Status LED'],
    ['T-LoRa Pager', 'Speaker, vibration motor, status LED'],
    ['T-Deck Pro', 'Speaker, vibration motor'],
    ['T-Watch S3', 'Speaker, vibration motor'],
    ['T-Echo Plus', 'Buzzer, vibration motor'],
    ['Nano G2 Ultra', 'Buzzer, status LEDs'],
    ['SenseCAP Card Tracker T1000-E', 'Buzzer, status LED'],
    ['Wio Tracker 1110 Dev Board', 'Status LED'],
    ['SenseCAP Indicator D1L', 'Buzzer'],
    ['XIAO nRF52840 & Wio-SX1262 Kit', 'Status LED'],
    ['SenseCAP Solar Node P1', 'Status LED'],
    ['SenseCAP Solar Node P1-Pro', 'Status LED'],
    ['Wio Tracker 1110 Dev Kit', 'Status LED'],
    ['Wio Tracker L1 Lite', 'Buzzer, status LED'],
    ['Wio Tracker L1', 'Buzzer, status LED'],
    ['Wio Tracker L1 Pro', 'Buzzer, status LED'],
    ['Wio Tracker L1 E-Ink', 'Buzzer, status LED'],
    ['SenseCAP MeshTracker X1', 'Buzzer, vibration motor, RGB status LED'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', 'Status LEDs'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', 'Status LEDs'],
    ['ThinkNode M1', 'Buzzer, status LEDs'],
    ['ThinkNode M2', 'Buzzer, status LED'],
    ['ThinkNode M3', 'Buzzer, RGB status LED'],
    ['ThinkNode M4', 'Emergency light, status LEDs, battery level LEDs'],
    ['ThinkNode M5', 'Buzzer, status LEDs'],
    ['ThinkNode M6', 'Status LEDs'],
    ['ThinkNode M7', 'Status LEDs'],
    ['HELTXT', 'Buzzer, status LED'],
    ['nRF-TXT', 'Buzzer, status LEDs']
  ]);

  const inputs = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', 'User button, Reset button'],
    ['Heltec WiFi LoRa 32 V3.2', 'User button, Reset button'],
    ['Heltec Wireless Paper', 'User button, Reset button'],
    ['Wireless Stick Lite (V3)', 'User button, Reset button'],
    ['Heltec Wireless Tracker V1.1', 'User button, Reset button'],
    ['Heltec Capsule Sensor V3', 'User button, Reset button'],
    ['Heltec Vision Master E213', 'User button, Reset button, 3rd button'],
    ['Heltec Vision Master E290', 'User button, Reset button, 3rd button'],
    ['Heltec Vision Master T190', 'User button, Reset button'],
    ['Heltec Mesh Node T114', 'User button, Reset button'],
    ['Heltec WiFi LoRa 32 V4.3.1', 'User button, Reset button'],
    ['Heltec MeshPocket', 'User controls'],
    ['Heltec WiFi LoRa 32 Expansion Kit', 'Touchscreen, User button, Reset button'],
    ['Heltec HT-CT62', '-'],
    ['Heltec Mesh Node T096', 'User button, Reset button'],
    ['Heltec Wireless Stick V3', 'User button, Reset button'],
    ['Heltec Mesh Node T1', 'Side buttons, Power button'],
    ['Heltec Wireless Shell V3', '-'],
    ['Heltec Wireless Tracker V2', 'User button, Reset button'],
    ['Heltec MeshTower V2', 'Power button, Reset button'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'Touchscreen, User button, Reset button'],
    ['Heltec MeshSolar', 'Power button, Output button, Reset button'],
    ['Heltec HT-N5262M', '-'],
    ['Heltec SensorHub HRI-3621', 'Power control, Configuration control'],
    ['Heltec Wireless Bridge', 'User button, Reset button'],
    ['WisBlock Starter Kit RAK4631 + RAK19003', 'Reset button'],
    ['WisBlock Starter Kit RAK4631 + RAK19007', 'Reset button'],
    ['WisMesh Pocket V2', 'User button, Reset button'],
    ['T-Deck', 'Keyboard, Touchscreen, Trackball, Reset button'],
    ['T-Echo', 'User button, Reset button, Touch button'],
    ['T-Beam', 'User button, Reset button, Power button'],
    ['T-Beam Supreme', 'User button, Reset button, Power button'],
    ['T3-S3', 'User button, Reset button'],
    ['T5 E-Paper S3 Pro', 'Touchscreen, User button, Power button, Boot button, Reset button'],
    ['T3-S3 E-Paper', 'Boot button, Reset button'],
    ['T-LoRa Pager', 'Keyboard, Encoder, Power button, Boot button'],
    ['T-Deck Pro', 'Keyboard, Touchscreen, Boot button'],
    ['T-Deck Plus', 'Keyboard, Trackball, Reset button'],
    ['T-Watch S3', 'Touchscreen, Power button, Boot button'],
    ['T-Echo Plus', 'User button, Touch button'],
    ['Station G2', 'User button, Reset button, Boot button'],
    ['Nano G2 Ultra', '4 buttons'],
    ['SenseCAP Card Tracker T1000-E', 'User button'],
    ['Wio Tracker 1110 Dev Board', 'User button, Reset button'],
    ['SenseCAP Indicator D1L', 'Touchscreen, Boot button'],
    ['XIAO nRF52840 & Wio-SX1262 Kit', 'Reset button'],
    ['SenseCAP Solar Node P1', 'Power button'],
    ['SenseCAP Solar Node P1-Pro', 'Power button'],
    ['Wio Tracker 1110 Dev Kit', 'User button, Reset button'],
    ['Wio Tracker L1 Lite', 'User button, Reset button, Power button'],
    ['Wio Tracker L1', 'User button, Reset button, Power button'],
    ['Wio Tracker L1 Pro', 'User button, Reset button, Power button'],
    ['Wio Tracker L1 E-Ink', 'Joystick, Reset button, Power button'],
    ['SenseCAP MeshTracker X1', 'User button'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', 'User button, Reset button, Boot button'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', 'User button, Reset button, Boot button'],
    ['ThinkNode M1', 'Knob, Function button, Page button, GPS button, Reset button'],
    ['ThinkNode M2', 'Power button, Function button, Reset button, Boot button'],
    ['ThinkNode M3', 'Power/SOS button'],
    ['ThinkNode M4', 'Power button, LoRa button'],
    ['ThinkNode M5', 'Knob, Function button, Page button, GPS button, Reset button'],
    ['ThinkNode M6', 'Function button, Reset button'],
    ['ThinkNode M7', 'Reload button, Boot button'],
    ['HELTXT', 'Keyboard, User button, Reset button'],
    ['nRF-TXT', 'Keyboard, User button, Reset button']
  ]);

  const connectors = new Map([
    ['Heltec Vision Master E213', '1× QuickLink'],
    ['Heltec Vision Master E290', '1× QuickLink'],
    ['Heltec Vision Master T190', '1× QuickLink'],
    ['T-Deck', '1× Grove'],
    ['T-Beam Supreme', '1× Qwiic'],
    ['T3-S3', '2× Qwiic'],
    ['T5 E-Paper S3 Pro', '2× Qwiic'],
    ['T3-S3 E-Paper', '1× Qwiic'],
    ['Wio Tracker 1110 Dev Board', '6× Grove'],
    ['SenseCAP Indicator D1L', '1× Grove'],
    ['SenseCAP Solar Node P1', '1× Grove'],
    ['SenseCAP Solar Node P1-Pro', '1× Grove'],
    ['Wio Tracker 1110 Dev Kit', '6× Grove'],
    ['Wio Tracker L1 Lite', '1× Grove'],
    ['Wio Tracker L1', '1× Grove'],
    ['Wio Tracker L1 Pro', '1× Grove'],
    ['Wio Tracker L1 E-Ink', '1× Grove']
  ]);

  const loraChips = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', 'SX1276 / SX1278'],
    ['Heltec WiFi LoRa 32 V3.2', 'SX1262'],
    ['Heltec Wireless Paper', 'SX1262'],
    ['Wireless Stick Lite (V3)', 'SX1262'],
    ['Heltec Wireless Tracker V1.1', 'SX1262'],
    ['Heltec Capsule Sensor V3', 'SX1262'],
    ['Heltec Vision Master E213', 'SX1262'],
    ['Heltec Vision Master E290', 'SX1262'],
    ['Heltec Vision Master T190', 'SX1262'],
    ['Heltec Mesh Node T114', 'SX1262'],
    ['Heltec WiFi LoRa 32 V4.3.1', 'SX1262'],
    ['Heltec MeshPocket', 'SX1262'],
    ['Heltec WiFi LoRa 32 Expansion Kit', 'SX1262'],
    ['Heltec HT-CT62', 'SX1262'],
    ['Heltec Mesh Node T096', 'SX1262'],
    ['Heltec Wireless Stick V3', 'SX1262'],
    ['Heltec Mesh Node T1', 'SX1262'],
    ['Heltec Wireless Shell V3', 'SX1262'],
    ['Heltec Wireless Tracker V2', 'SX1262'],
    ['Heltec MeshTower V2', 'SX1262'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'SX1262'],
    ['Heltec MeshSolar', 'SX1262'],
    ['Heltec HT-N5262M', 'SX1262'],
    ['Heltec SensorHub HRI-3621', 'SX1262'],
    ['Heltec Wireless Bridge', 'SX1276'],
    ['WisBlock Starter Kit RAK4631 + RAK19003', 'SX1262'],
    ['WisBlock Starter Kit RAK4631 + RAK19007', 'SX1262'],
    ['WisMesh Pocket V2', 'SX1262'],
    ['T-Deck', 'SX1262'],
    ['T-Echo', 'SX1262'],
    ['T-Beam', 'SX1276 / SX1278'],
    ['T-Beam Supreme', 'SX1262 / LR1121'],
    ['T3-S3', 'SX1262 / SX1276 / SX1278 / SX1280'],
    ['T5 E-Paper S3 Pro', 'SX1262'],
    ['T3-S3 E-Paper', 'SX1262 / SX1276 / SX1280'],
    ['T-LoRa Pager', 'SX1262 / SX1280 / LR1121'],
    ['T-Deck Pro', 'SX1262'],
    ['T-Deck Plus', 'SX1262'],
    ['T-Watch S3', 'SX1262 / SX1280'],
    ['T-Echo Plus', 'SX1262'],
    ['Station G2', 'SX1262'],
    ['Nano G2 Ultra', 'SX1262'],
    ['SenseCAP Card Tracker T1000-E', 'LR1110'],
    ['Wio Tracker 1110 Dev Board', 'LR1110'],
    ['SenseCAP Indicator D1L', 'SX1262'],
    ['XIAO nRF52840 & Wio-SX1262 Kit', 'SX1262'],
    ['SenseCAP Solar Node P1', 'SX1262'],
    ['SenseCAP Solar Node P1-Pro', 'SX1262'],
    ['Wio Tracker 1110 Dev Kit', 'LR1110'],
    ['Wio Tracker L1 Lite', 'SX1262'],
    ['Wio Tracker L1', 'SX1262'],
    ['Wio Tracker L1 Pro', 'SX1262'],
    ['Wio Tracker L1 E-Ink', 'SX1262'],
    ['SenseCAP MeshTracker X1', 'LR2021'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', 'SX1262'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', 'SX1262'],
    ['ThinkNode M1', 'SX1262'],
    ['ThinkNode M2', 'SX1262'],
    ['ThinkNode M3', 'LR1110'],
    ['ThinkNode M4', 'LR1110'],
    ['ThinkNode M5', 'SX1262'],
    ['ThinkNode M6', 'SX1262'],
    ['ThinkNode M7', 'LR1110'],
    ['HELTXT', 'SX1262'],
    ['nRF-TXT', 'SX1262']
  ]);

  const frequencies = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '433–510 / 863–928 MHz'],
    ['Heltec WiFi LoRa 32 V3.2', '470–510 / 863–928 MHz'],
    ['Heltec Wireless Paper', '470–510 / 863–928 MHz'],
    ['Wireless Stick Lite (V3)', '470–510 / 863–928 MHz'],
    ['Heltec Wireless Tracker V1.1', '470–510 / 863–928 MHz'],
    ['Heltec Capsule Sensor V3', '470–510 / 863–928 MHz'],
    ['Heltec Vision Master E213', '470–510 / 863–928 MHz'],
    ['Heltec Vision Master E290', '470–510 / 863–928 MHz'],
    ['Heltec Vision Master T190', '470–510 / 863–928 MHz'],
    ['Heltec Mesh Node T114', '433 / 470–510 / 863–870 / 902–928 MHz'],
    ['Heltec WiFi LoRa 32 V4.3.1', '433–510 / 863–928 MHz'],
    ['Heltec MeshPocket', '863–870 / 902–928 MHz'],
    ['Heltec WiFi LoRa 32 Expansion Kit', '433 / 470–510 / 863–928 MHz'],
    ['Heltec HT-CT62', '433 / 470–510 / 863–870 / 902–928 MHz'],
    ['Heltec Mesh Node T096', '433 / 470–510 / 863–870 / 902–928 MHz'],
    ['Heltec Wireless Stick V3', '470–510 / 863–928 MHz'],
    ['Heltec Mesh Node T1', '433 / 470–510 / 863–870 / 902–928 MHz'],
    ['Heltec Wireless Shell V3', '470–510 / 863–870 / 902–928 MHz'],
    ['Heltec Wireless Tracker V2', '863–928 MHz'],
    ['Heltec MeshTower V2', '863–870 / 902–928 MHz'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', '433 / 470–510 / 863–928 MHz'],
    ['Heltec MeshSolar', '470–510 / 863–870 / 902–928 MHz'],
    ['Heltec HT-N5262M', '470–510 / 863–870 / 902–928 MHz'],
    ['Heltec SensorHub HRI-3621', '433 / 470 / 864 / 868 / 915 / 920 / 923 MHz'],
    ['Heltec Wireless Bridge', '470–510 / 863–928 MHz'],
    ['WisBlock Starter Kit RAK4631 + RAK19003', '433–470 / 779–923 MHz'],
    ['WisBlock Starter Kit RAK4631 + RAK19007', '433–470 / 779–923 MHz'],
    ['WisMesh Pocket V2', '860–870 / 900–930 MHz'],
    ['T-Deck', '433–915 MHz'],
    ['T-Echo', '433 / 868 / 915 MHz'],
    ['T-Beam', '433 / 868 / 915 MHz'],
    ['T-Beam Supreme', '433 / 868 / 915 / 923 / 2400 MHz'],
    ['T3-S3', '433 / 868 / 915 / 2400 MHz'],
    ['T5 E-Paper S3 Pro', '433 / 868 / 915 / 920 MHz'],
    ['T3-S3 E-Paper', '868 / 915 / 2400 MHz'],
    ['T-LoRa Pager', '433–920 / 2400 MHz'],
    ['T-Deck Pro', '433–920 MHz'],
    ['T-Deck Plus', '433–915 MHz'],
    ['T-Watch S3', '433–923 / 2400 MHz'],
    ['T-Echo Plus', '433 / 868 / 915 MHz'],
    ['Station G2', '815–940 MHz'],
    ['Nano G2 Ultra', '815–940 MHz'],
    ['SenseCAP Card Tracker T1000-E', '863–928 MHz'],
    ['Wio Tracker 1110 Dev Board', '863–928 MHz'],
    ['SenseCAP Indicator D1L', '862–930 MHz'],
    ['XIAO nRF52840 & Wio-SX1262 Kit', '862–930 MHz'],
    ['SenseCAP Solar Node P1', '862–930 MHz'],
    ['SenseCAP Solar Node P1-Pro', '862–930 MHz'],
    ['Wio Tracker 1110 Dev Kit', '863–928 MHz'],
    ['Wio Tracker L1 Lite', '862–930 MHz'],
    ['Wio Tracker L1', '862–930 MHz'],
    ['Wio Tracker L1 Pro', '862–930 MHz'],
    ['Wio Tracker L1 E-Ink', '862–930 MHz'],
    ['SenseCAP MeshTracker X1', '863–928 MHz'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', '862–930 MHz'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', '862–930 MHz'],
    ['ThinkNode M1', '868 / 915 MHz'],
    ['ThinkNode M2', '868 / 915 MHz'],
    ['ThinkNode M3', '868 / 915 MHz'],
    ['ThinkNode M4', '868 / 915 MHz'],
    ['ThinkNode M5', '868 / 915 MHz'],
    ['ThinkNode M6', '868 / 915 MHz'],
    ['ThinkNode M7', '868 / 915 MHz'],
    ['HELTXT', '863–928 MHz'],
    ['nRF-TXT', '863–928 MHz']
  ]);

  const wifiProtocols = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '802.11 b/g/n'],
    ['Heltec WiFi LoRa 32 V3.2', '802.11 b/g/n'],
    ['Heltec Wireless Paper', '802.11 b/g/n'],
    ['Wireless Stick Lite (V3)', '802.11 b/g/n'],
    ['Heltec Wireless Tracker V1.1', '802.11 b/g/n'],
    ['Heltec Capsule Sensor V3', '802.11 b/g/n'],
    ['Heltec Vision Master E213', '802.11 b/g/n'],
    ['Heltec Vision Master E290', '802.11 b/g/n'],
    ['Heltec Vision Master T190', '802.11 b/g/n'],
    ['Heltec WiFi LoRa 32 V4.3.1', '802.11 b/g/n'],
    ['Heltec WiFi LoRa 32 Expansion Kit', '802.11 b/g/n'],
    ['Heltec HT-CT62', '802.11 b/g/n'],
    ['Heltec Wireless Stick V3', '802.11 b/g/n'],
    ['Heltec Wireless Shell V3', '802.11 b/g/n'],
    ['Heltec Wireless Tracker V2', '802.11 b/g/n'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', '802.11 b/g/n'],
    ['Heltec SensorHub HRI-3621', '802.11 b/g/n'],
    ['Heltec Wireless Bridge', '802.11 b/g/n'],
    ['T-Deck', '802.11 b/g/n'],
    ['T-Beam', '802.11 b/g/n'],
    ['T-Beam Supreme', '802.11 b/g/n'],
    ['T3-S3', '802.11 b/g/n'],
    ['T5 E-Paper S3 Pro', '802.11 b/g/n'],
    ['T3-S3 E-Paper', '802.11 b/g/n'],
    ['T-LoRa Pager', '802.11 b/g/n'],
    ['T-Deck Pro', '802.11 b/g/n'],
    ['T-Deck Plus', '802.11 b/g/n'],
    ['T-Watch S3', '802.11 b/g/n'],
    ['Station G2', '802.11 b/g/n'],
    ['SenseCAP Indicator D1L', '802.11 b/g/n'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', '802.11 b/g/n'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', '802.11 b/g/n'],
    ['ThinkNode M2', '802.11 b/g/n'],
    ['ThinkNode M5', '802.11 b/g/n'],
    ['ThinkNode M7', '802.11 b/g/n'],
    ['HELTXT', '802.11 b/g/n']
  ]);

  const displaySizes = new Map([
    ['SenseCAP Indicator D1L', '3.95 in, 480×480'],
    ['Wio Tracker 1110 Dev Kit', '0.96 in, 128×64'],
    ['Wio Tracker L1', '1.3 in, 128×64'],
    ['Wio Tracker L1 Pro', '1.3 in, 128×64'],
    ['Wio Tracker L1 E-Ink', '2.13 in, 122×250'],
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '0.96 in, 128×64'],
    ['Heltec WiFi LoRa 32 V3.2', '0.96 in, 128×64'],
    ['Heltec Wireless Paper', '2.13 in, 250×122'],
    ['Heltec Wireless Tracker V1.1', '0.96 in, 128×64'],
    ['Heltec Vision Master E213', '2.13 in, 250×122'],
    ['Heltec Vision Master E290', '2.9 in, 296×128'],
    ['Heltec Vision Master T190', '1.9 in, 170×320'],
    ['Heltec Mesh Node T114', '1.14 in, 135×240'],
    ['Heltec WiFi LoRa 32 V4.3.1', '0.96 in, 128×64'],
    ['Heltec MeshPocket', '2.13 in'],
    ['Heltec WiFi LoRa 32 Expansion Kit', '320×240'],
    ['Heltec Wireless Stick V3', '0.49 in, 64×32'],
    ['Heltec Mesh Node T1', '0.96 in'],
    ['Heltec Wireless Tracker V2', '0.96 in, 160×80'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', '2.8 in, 320×240'],
    ['WisMesh Pocket V2', '1.3 in, 128×64'],
    ['T-Deck', '2.8 in, 320×240'],
    ['T-Echo', '1.54 in, 200×200'],
    ['T-Beam', '0.96 in, 128×64'],
    ['T-Beam Supreme', '1.3 in, 128×64'],
    ['T3-S3', '0.96 in, 128×64'],
    ['T5 E-Paper S3 Pro', '4.7 in, 960×540'],
    ['T3-S3 E-Paper', '2.13 in, 250×122'],
    ['T-LoRa Pager', '2.33 in, 480×222'],
    ['T-Deck Pro', '3.1 in, 320×240'],
    ['T-Deck Plus', '2.8 in, 320×240'],
    ['T-Watch S3', '1.54 in, 240×240'],
    ['T-Echo Plus', '1.54 in, 200×200'],
    ['Station G2', '1.3 in, 128×64'],
    ['Nano G2 Ultra', '1.3 in, 128×64'],
    ['ThinkNode M1', '1.54 in, 200×200'],
    ['ThinkNode M2', '1.3 in, 128×64'],
    ['ThinkNode M5', '1.54 in, 200×200'],
    ['HELTXT', '0.96 in, 128×64'],
    ['nRF-TXT', '1.14 in, 135×240']
  ]);

  const txPowers = new Map([
    ['SenseCAP Indicator D1L', '22 dBm'],
    ['XIAO nRF52840 & Wio-SX1262 Kit', '22 dBm'],
    ['SenseCAP Solar Node P1', '22 dBm'],
    ['SenseCAP Solar Node P1-Pro', '22 dBm'],
    ['Wio Tracker 1110 Dev Kit', '20 dBm'],
    ['Wio Tracker L1 Lite', '22 dBm'],
    ['Wio Tracker L1', '22 dBm'],
    ['Wio Tracker L1 Pro', '22 dBm'],
    ['Wio Tracker L1 E-Ink', '22 dBm'],
    ['SenseCAP MeshTracker X1', '22 dBm'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', '22 dBm'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', '22 dBm'],
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '19 ± 1 dBm'],
    ['Heltec WiFi LoRa 32 V3.2', '21 ± 1 dBm'],
    ['Heltec Wireless Paper', '21 ± 1 dBm'],
    ['Wireless Stick Lite (V3)', '21 ± 1 dBm'],
    ['Heltec Wireless Tracker V1.1', '21 ± 1 dBm'],
    ['Heltec Capsule Sensor V3', '21 ± 1 dBm'],
    ['Heltec Vision Master E213', '21 ± 1 dBm'],
    ['Heltec Vision Master E290', '21 ± 1 dBm'],
    ['Heltec Vision Master T190', '21 ± 1 dBm'],
    ['Heltec Mesh Node T114', '21 ± 1 dBm'],
    ['Heltec WiFi LoRa 32 V4.3.1', '22 / 28 dBm'],
    ['Heltec MeshPocket', '22 dBm'],
    ['Heltec WiFi LoRa 32 Expansion Kit', '21 / 28 dBm'],
    ['Heltec HT-CT62', '21 ± 1 dBm'],
    ['Heltec Mesh Node T096', '28 ± 1 dBm'],
    ['Heltec Wireless Stick V3', '21 ± 1 dBm'],
    ['Heltec Mesh Node T1', '21 ± 1 dBm'],
    ['Heltec Wireless Shell V3', '21 ± 1 dBm'],
    ['Heltec Wireless Tracker V2', '28 ± 1 dBm'],
    ['Heltec MeshTower V2', '22 / 30 dBm'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', '21 / 28 dBm'],
    ['Heltec MeshSolar', '21 ± 1 dBm'],
    ['Heltec HT-N5262M', '22 dBm'],
    ['Heltec SensorHub HRI-3621', '20 ± 2 dBm'],
    ['Heltec Wireless Bridge', '18 ± 1 dBm'],
    ['WisBlock Starter Kit RAK4631 + RAK19003', '22 ± 1 dBm'],
    ['WisBlock Starter Kit RAK4631 + RAK19007', '22 ± 1 dBm'],
    ['WisMesh Pocket V2', '22 ± 1 dBm'],
    ['T-Deck', '22 ± 1 dBm'],
    ['T-Echo', '22 ± 1 dBm'],
    ['T-Beam', '20 dBm'],
    ['T-Beam Supreme', '11.5 / 22 dBm'],
    ['T3-S3', '12.5 / 20 / 22 dBm'],
    ['T5 E-Paper S3 Pro', '22 dBm'],
    ['T3-S3 E-Paper', '12.5 / 20 / 22 dBm'],
    ['T-LoRa Pager', '11.5 / 12.5 / 22 dBm'],
    ['T-Deck Pro', '22 dBm'],
    ['T-Deck Plus', '22 dBm'],
    ['T-Watch S3', '12.5 / 22 dBm'],
    ['T-Echo Plus', '22 dBm'],
    ['Station G2', '36.5 / 37 dBm'],
    ['Nano G2 Ultra', '22 ± 1 dBm'],
    ['SenseCAP Card Tracker T1000-E', '20 ± 1 dBm'],
    ['Wio Tracker 1110 Dev Board', '20 ± 1 dBm'],
    ['ThinkNode M1', '22 dBm'],
    ['ThinkNode M2', '22 dBm'],
    ['ThinkNode M3', '20 dBm'],
    ['ThinkNode M4', '22 dBm'],
    ['ThinkNode M5', '22 dBm'],
    ['ThinkNode M6', '22 dBm'],
    ['ThinkNode M7', '22 dBm'],
    ['HELTXT', '21 ± 1 dBm'],
    ['nRF-TXT', '21 ± 1 dBm']
  ]);

  const rxSensitivities = new Map([
    ['SenseCAP Indicator D1L', '-148 dBm'],
    ['XIAO nRF52840 & Wio-SX1262 Kit', '-148 dBm'],
    ['SenseCAP Solar Node P1', '-148 dBm'],
    ['SenseCAP Solar Node P1-Pro', '-148 dBm'],
    ['Wio Tracker 1110 Dev Kit', '-141 dBm'],
    ['Wio Tracker L1 Lite', '-148 dBm'],
    ['Wio Tracker L1', '-148 dBm'],
    ['Wio Tracker L1 Pro', '-148 dBm'],
    ['Wio Tracker L1 E-Ink', '-148 dBm'],
    ['SenseCAP MeshTracker X1', '-141 dBm'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit', '-148 dBm'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', '-148 dBm'],
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '-148 dBm'],
    ['Heltec WiFi LoRa 32 V3.2', '-136 dBm'],
    ['Heltec Wireless Paper', '-134 dBm'],
    ['Wireless Stick Lite (V3)', '-134 dBm'],
    ['Heltec Wireless Tracker V1.1', '-137 dBm'],
    ['Heltec Capsule Sensor V3', '-135 dBm'],
    ['Heltec Vision Master E213', '-136 dBm'],
    ['Heltec Vision Master E290', '-136 dBm'],
    ['Heltec Vision Master T190', '-136 dBm'],
    ['Heltec Mesh Node T114', '-135 dBm'],
    ['Heltec WiFi LoRa 32 V4.3.1', '-148 dBm'],
    ['Heltec MeshPocket', '-148 dBm'],
    ['Heltec WiFi LoRa 32 Expansion Kit', '-148 dBm'],
    ['Heltec HT-CT62', '-134 dBm'],
    ['Heltec Mesh Node T096', '-148 dBm'],
    ['Heltec Wireless Stick V3', '-134 dBm'],
    ['Heltec Mesh Node T1', '-148 dBm'],
    ['Heltec Wireless Shell V3', '-139 dBm'],
    ['Heltec Wireless Tracker V2', '-134 dBm'],
    ['Heltec MeshTower V2', '-148 dBm'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', '-148 dBm'],
    ['Heltec MeshSolar', '-148 dBm'],
    ['Heltec HT-N5262M', '-148 dBm'],
    ['Heltec SensorHub HRI-3621', '-136 dBm'],
    ['Heltec Wireless Bridge', '-135 dBm'],
    ['WisBlock Starter Kit RAK4631 + RAK19003', '-136 dBm'],
    ['WisBlock Starter Kit RAK4631 + RAK19007', '-136 dBm'],
    ['WisMesh Pocket V2', '-136 dBm'],
    ['T-Deck', '-136 dBm'],
    ['T-Echo', '-136 dBm'],
    ['T-Beam', '-148 dBm'],
    ['T-Beam Supreme', '-148 / -144 dBm'],
    ['T3-S3', '-148 / -132 dBm'],
    ['T5 E-Paper S3 Pro', '-148 dBm'],
    ['T3-S3 E-Paper', '-148 / -132 dBm'],
    ['T-LoRa Pager', '-148 / -144 / -132 dBm'],
    ['T-Deck Pro', '-148 dBm'],
    ['T-Deck Plus', '-148 dBm'],
    ['T-Watch S3', '-148 / -132 dBm'],
    ['T-Echo Plus', '-139 dBm'],
    ['Station G2', '-148 dBm'],
    ['Nano G2 Ultra', '-148 dBm'],
    ['SenseCAP Card Tracker T1000-E', '-141 dBm'],
    ['Wio Tracker 1110 Dev Board', '-141 dBm'],
    ['ThinkNode M1', '-148 dBm'],
    ['ThinkNode M2', '-148 dBm'],
    ['ThinkNode M3', '-140 dBm'],
    ['ThinkNode M4', '-144 dBm'],
    ['ThinkNode M5', '-148 dBm'],
    ['ThinkNode M6', '-148 dBm'],
    ['ThinkNode M7', '-144 dBm'],
    ['HELTXT', '-136 dBm'],
    ['nRF-TXT', '-135 dBm']
  ]);

  headers.slice(1).forEach((header, index) => {
    const column = index + 1;
    const device = header.textContent.trim();
    const battery = batteries.get(device) || '-';
    const gps = gpsCapabilities.get(device) || '-';
    const notification = notifications.get(device) || '-';
    const notificationTypes = [];
    if (/LED/i.test(notification)) notificationTypes.push('LED');
    if (/buzzer/i.test(notification)) notificationTypes.push('Buzzer');
    if (/speaker/i.test(notification)) notificationTypes.push('Speaker');
    if (/vibration/i.test(notification)) notificationTypes.push('Vibration');
    if (/emergency light/i.test(notification)) notificationTypes.push('Emergency');
    gpsRow.cells[column].textContent = gps;
    header.dataset.gps = gps === '-' ? 'No' : /optional/i.test(gps) ? 'Optional' : 'Yes';
    batteryRow.cells[column].textContent = battery;
    const chargingInterface = chargingInterfaceRow.cells[column].textContent.trim();
    const chargingInterfaces = [];
    if (/USB-C|Type-C/i.test(chargingInterface)) chargingInterfaces.push('USB-C');
    if (/Micro[\s-]?USB/i.test(chargingInterface)) chargingInterfaces.push('Micro-USB');
    if (/Magnetic 2-pin/i.test(chargingInterface)) chargingInterfaces.push('Magnetic 2-pin');
    else if (/Magnetic/i.test(chargingInterface)) chargingInterfaces.push('Magnetic');
    if (/\bPogo pins?\b/i.test(chargingInterface)) chargingInterfaces.push('Pogo pins');
    if (/Solar|MPPT/i.test(chargingInterface)) chargingInterfaces.push('Solar');
    if (/\b\d+\s*[–-]\s*\d+\s*V DC\b/i.test(chargingInterface)) chargingInterfaces.push('DC');
    if (/\bPoE\b|802\.3af/i.test(chargingInterface)) chargingInterfaces.push('PoE');
    if (/Qi2|Wireless (?:charging|output)/i.test(chargingInterface)) chargingInterfaces.push('Wireless');
    chargingInterfaceRow.cells[column].textContent = chargingInterfaces.join(', ') || '-';
    loraRow.cells[column].textContent = loraChips.get(device);
    frequencyRow.cells[column].textContent = frequencies.get(device);
    txPowerRow.cells[column].textContent = txPowers.get(device);
    rxSensitivityRow.cells[column].textContent = rxSensitivities.get(device);
    wifiRow.cells[column].textContent = wifiProtocols.get(device) || '-';
    displaySizeRow.cells[column].textContent = displaySizes.get(device)?.match(/^\d+(?:\.\d+)? in/)?.[0] || '-';
    const originalDisplayType = device === 'Heltec Wireless Tracker V2'
      ? 'LCD'
      : displayTypeRow.cells[column].textContent.trim();
    const optionalDisplay = /optional|no-display/i.test(originalDisplayType);
    let displayType = '-';
    if (/OLED/i.test(originalDisplayType)) displayType = 'OLED';
    else if (/E-paper|E-?ink/i.test(originalDisplayType)) displayType = 'E-Ink';
    else if (/TFT|LCD/i.test(originalDisplayType)) displayType = 'LCD';
    const backlitEpaper = backlitEpaperDevices.has(device);
    if (displayType === 'E-Ink' && backlitEpaper) displayType = 'E-Ink(Backlit)';
    displayTypeRow.cells[column].textContent = displayType === '-' || !optionalDisplay
      ? displayType
      : `${displayType} (optional)`;
    header.dataset.backlitEpaper = backlitEpaper ? 'Yes' : 'No';
    imuRow.cells[column].textContent = imuCapabilities.get(device) || '-';
    magnetometerRow.cells[column].textContent = magnetometerCapabilities.get(device) || '-';
    notificationRow.cells[column].textContent = notification;
    inputRow.cells[column].textContent = inputs.get(device) || '-';
    connectorRow.cells[column].textContent = connectors.get(device) || '-';
    if (device === 'Heltec SensorHub HRI-3621') {
      bluetoothRow.cells[column].textContent = 'LE (version not specified)';
    }
    if (header.dataset.brand === 'Heltec') {
      header.dataset.meshtastic = 'Yes';
      meshtasticRow.cells[column].textContent = 'Yes';
    }

    const environmentValues = [
      tempHumidityRow.cells[column].textContent.trim(),
      airPressureRow.cells[column].textContent.trim(),
      airQualityRow.cells[column].textContent.trim()
    ];
    const hasEnvironmentValue = value => !/^(?:-|No|None|N\/?A|Not specified|Unknown|Unavailable|\?|External sensor support)$/i.test(value);
    const environmentTypes = [];
    if (hasEnvironmentValue(environmentValues[0])) environmentTypes.push('TempHumidity');
    if (hasEnvironmentValue(environmentValues[1])) environmentTypes.push('Pressure');
    if (hasEnvironmentValue(environmentValues[2])) environmentTypes.push('AirQuality');
    header.dataset.environment = environmentTypes.join(' ');

    const environmentCapabilities = [];
    if (environmentTypes.includes('TempHumidity')) environmentCapabilities.push('Temperature', 'humidity');
    if (environmentTypes.includes('Pressure')) environmentCapabilities.push('pressure');
    if (environmentTypes.includes('AirQuality')) environmentCapabilities.push('air quality');
    const optionalEnvironment = environmentValues.filter(hasEnvironmentValue).some(value => /optional/i.test(value));
    tempHumidityRow.cells[column].textContent = environmentCapabilities.length
      ? `${environmentCapabilities.join(', ')}${optionalEnvironment ? ' (optional)' : ''}`
      : '-';
    const verifiedEnvironment = verifiedEnvironmentalCapabilities.get(device);
    if (verifiedEnvironment) {
      header.dataset.environment = verifiedEnvironment.types.join(' ');
      tempHumidityRow.cells[column].textContent = verifiedEnvironment.value;
    }
    header.dataset.battery = battery === '-' ? 'No' : 'Yes';
    header.dataset.notification = notificationTypes.join(' ');
  });

  connectorRow.cells[0].textContent = 'Expansion Connector';
  tempHumidityRow.cells[0].textContent = 'Environmental Sensors';
  airPressureRow.remove();
  airQualityRow.remove();
  uartRow.remove();

  const verifiedValues = new Map([
    ['Max. TX Power', new Map([
      ['Heltec HT-CT62', '21 ± 1 dBm'],
      ['Heltec Wireless Shell V3', '21 ± 1 dBm']
    ])],
    ['Max. Receiving Sensitivity', new Map([
      ['Heltec HT-CT62', '-134 dBm'],
      ['Heltec Wireless Shell V3', '-139 dBm']
    ])],
    ['Enclosure', new Map([
      ['Heltec WiFi LoRa 32 V4.3.1', 'Screen cover only'],
      ['WisMesh Pocket V2', 'Included']
    ])]
  ]);

  verifiedValues.forEach((deviceValues, rowLabel) => {
    const row = rows.get(rowLabel);
    deviceValues.forEach((value, device) => {
      const column = headers.findIndex(header => header.textContent.trim() === device);
      if (row && column > 0) row.cells[column].textContent = value;
    });
  });

  Array.from(table.querySelectorAll('tbody tr')).forEach(row => {
    Array.from(row.cells).slice(1).forEach(cell => {
      const originalValue = cell.textContent.trim();
      let value = originalValue
        .replace(/^LE \(version not specified\)$/i, 'LE')
        .replace(/^OLED or no-display variant$/i, 'OLED (optional)')
        .replace(/^OLED \(not supported by Meshtastic display mode\)$/i, 'OLED')
        .replace(/^IPS LCD \(ST7789; no touchscreen\)$/i, 'IPS LCD (ST7789)')
        .replace(/^Scan only \(positioning; no network connection\)$/i, 'Positioning scans only')
        .replace(/^Screen cover only; otherwise not included$/i, 'Screen cover only');

      const isEmptyValue = /^(?:No|None|N\/?A(?:\s*\(.*\))?|Not included|Not specified(?:\s*\(.*\))?|Unknown|Unavailable|\?|not public)$/i.test(value);
      const hasUnspecifiedPart = /\b(?:part|version) not specified\b/i.test(value);
      const isModuleSupplyNote = /^3\.3 V module supply; no onboard charger$/i.test(value);
      const normalizedValue = isEmptyValue || hasUnspecifiedPart || isModuleSupplyNote ? '-' : value;
      if (normalizedValue !== originalValue) cell.textContent = normalizedValue;
    });
  });
}

normalizeDeviceDetails();

function addHpWirelessPaper() {
  const table = document.querySelector('#comparisonTable');
  const headerRow = table.tHead.rows[0];
  const headers = Array.from(headerRow.cells);
  const sourceHeader = headers.find(header => header.textContent.trim() === 'Heltec Wireless Paper');
  const referenceHeader = headers.find(header => header.textContent.trim() === 'HELTXT');
  const rows = Array.from(table.tBodies[0].rows);
  const referenceCells = new Map(rows.map(row => [row, row.cells[referenceHeader.cellIndex]]));
  const productUrl = 'https://www.etsy.com/listing/1773279937/hp-esp32-eink-node-with-meshtastic';

  const header = sourceHeader.cloneNode(true);
  header.textContent = 'HP Wireless Paper';
  Object.assign(header.dataset, {
    mcu: 'ESP32', lora: 'SX1262', gps: 'No', screen: 'Eink', wifi: 'Yes', input: 'User',
    price: '50.00', brand: 'Haruki Toreda', case: 'Yes', battery: 'Yes',
    meshtastic: 'Yes', ready: 'Yes'
  });
  headerRow.insertBefore(header, referenceHeader);

  rows.forEach(row => {
    const label = row.cells[0].textContent.trim();
    const cell = row.cells[sourceHeader.cellIndex].cloneNode(true);
    if (label === 'Brand') {
      cell.textContent = 'Haruki Toreda';
    } else if (label.startsWith('Base Price USD')) {
      const link = document.createElement('a');
      link.href = productUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = '$50.00';
      cell.replaceChildren(link);
    } else if (label === 'Diagram') {
      const link = document.createElement('a');
      link.href = productUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Product listing';
      cell.replaceChildren(link);
    } else if (label === 'Battery') {
      cell.textContent = '3000 mAh';
    } else if (label === 'Enclosure') {
      cell.textContent = 'Included';
    } else if (label === 'Meshtastic Preloaded') {
      cell.textContent = 'Yes';
    }
    row.insertBefore(cell, referenceCells.get(row));
  });
}

addHpWirelessPaper();

function addHp2() {
  const table = document.querySelector('#comparisonTable');
  const headerRow = table.tHead.rows[0];
  const headers = Array.from(headerRow.cells);
  const sourceHeader = headers.find(header => header.textContent.trim() === 'Wio Tracker L1 E-Ink');
  const referenceHeader = headers.find(header => header.textContent.trim() === 'HELTXT');
  const rows = Array.from(table.tBodies[0].rows);
  const referenceCells = new Map(rows.map(row => [row, row.cells[referenceHeader.cellIndex]]));
  const productUrl = 'https://www.etsy.com/listing/4539509953/wio-l1-pro-eink-meshtastic-inkhud-ui';

  const header = sourceHeader.cloneNode(true);
  header.textContent = 'HP2';
  Object.assign(header.dataset, {
    price: '85.00', brand: 'Haruki Toreda', case: 'Yes', battery: 'Yes',
    meshtastic: 'Yes', ready: 'Yes'
  });
  headerRow.insertBefore(header, referenceHeader);

  rows.forEach(row => {
    const label = row.cells[0].textContent.trim();
    const cell = row.cells[sourceHeader.cellIndex].cloneNode(true);
    if (label === 'Brand') {
      cell.textContent = 'Haruki Toreda';
    } else if (label.startsWith('Base Price USD')) {
      const link = document.createElement('a');
      link.href = productUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = '$85.00';
      cell.replaceChildren(link);
    } else if (label === 'Diagram') {
      const link = document.createElement('a');
      link.href = productUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Product listing';
      cell.replaceChildren(link);
    } else if (label === 'Battery') {
      cell.textContent = '3000 mAh';
    } else if (label === 'Enclosure') {
      cell.textContent = 'Included';
    } else if (label === 'Meshtastic Preloaded') {
      cell.textContent = 'Yes';
    }
    row.insertBefore(cell, referenceCells.get(row));
  });
}

addHp2();

function standardizeEnclosures() {
  const table = document.querySelector('#comparisonTable');
  const headers = Array.from(table.tHead.rows[0].cells);
  const enclosureRow = Array.from(table.tBodies[0].rows)
    .find(row => row.cells[0].textContent.trim() === 'Enclosure');
  const enclosures = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', 'Plastic (optional)'],
    ['Heltec WiFi LoRa 32 V3.2', 'Plastic (optional)'],
    ['Heltec Capsule Sensor V3', 'High-strength plastic; IP65'],
    ['Heltec Mesh Node T114', 'Plastic (optional)'],
    ['Heltec MeshPocket', 'ABS + tempered glass'],
    ['Heltec WiFi LoRa 32 Expansion Kit', 'Tempered glass + aluminum + PC'],
    ['Heltec Mesh Node T1', 'IP65'],
    ['Heltec MeshTower V2', 'Aluminum; IP66'],
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'Glass + aluminum'],
    ['Heltec SensorHub HRI-3621', 'Plastic; IP65'],
    ['Heltec Wireless Bridge', 'Aluminum'],
    ['WisMesh Pocket V2', '3D-printed plastic'],
    ['T-Echo', 'ABS'],
    ['T-LoRa Pager', 'Plastic'],
    ['T-Deck Pro', 'Plastic'],
    ['T-Deck Plus', 'Plastic'],
    ['T-Watch S3', 'Plastic'],
    ['T-Echo Plus', 'ABS'],
    ['Station G2', 'Resin'],
    ['Nano G2 Ultra', 'Resin'],
    ['SenseCAP Card Tracker T1000-E', 'IP65'],
    ['SenseCAP Indicator D1L', 'Plastic'],
    ['SenseCAP Solar Node P1', 'IPX6'],
    ['SenseCAP Solar Node P1-Pro', 'IPX6'],
    ['Wio Tracker L1 Pro', 'PC+ABS'],
    ['SenseCAP MeshTracker X1', 'IP66'],
    ['XIAO ESP32S3 & Wio-SX1262 Kit with 3D Case', 'ABS'],
    ['ThinkNode M1', 'ABS'],
    ['ThinkNode M2', 'ABS+PC'],
    ['ThinkNode M3', 'PC+ABS; IP66'],
    ['ThinkNode M4', 'Fireproof ABS + PC + TPE'],
    ['ThinkNode M5', 'ABS'],
    ['ThinkNode M6', 'Plastic; IP65'],
    ['ThinkNode M7', 'Plastic'],
    ['HP Wireless Paper', 'PLA'],
    ['HP2', 'PLA'],
    ['HELTXT', 'PLA+'],
    ['nRF-TXT', '3D-printed plastic']
  ]);

  headers.slice(1).forEach(header => {
    const value = enclosures.get(header.textContent.trim()) ?? '-';
    enclosureRow.cells[header.cellIndex].textContent = value;
    header.dataset.case = value === '-' ? 'No' : value.includes('(optional)') ? 'Optional' : 'Yes';
  });
}

standardizeEnclosures();

function assignNodeTypes() {
  const infrastructureDevices = new Set([
    'Heltec MeshTower V2',
    'Heltec MeshSolar',
    'Station G2',
    'ThinkNode M6',
    'SenseCAP Solar Node P1',
    'SenseCAP Solar Node P1-Pro'
  ]);
  const compactCardDevices = new Set([
    'Heltec MeshPocket',
    'Heltec Mesh Node T1',
    'SenseCAP Card Tracker T1000-E',
    'ThinkNode M3'
  ]);
  const table = document.querySelector('#comparisonTable');
  const headers = Array.from(table.tHead.rows[0].cells);
  const inputRow = Array.from(table.tBodies[0].rows).find(row =>
    row.cells[0].textContent.trim() === 'Input'
  );

  headers.slice(1).forEach((header, index) => {
    const device = header.textContent.trim();
    const column = index + 1;
    const nodeTypes = [];
    if (infrastructureDevices.has(device)) nodeTypes.push('InfrastructureSolar');
    else if (device !== 'ThinkNode M7') nodeTypes.push('Companion');
    if (compactCardDevices.has(device)) nodeTypes.push('CompactCard');
    if (/\bKeyboard\b/i.test(inputRow.cells[column].textContent)) nodeTypes.push('StandaloneKeyboard');
    header.dataset.nodeType = nodeTypes.join(' ');
  });
}

assignNodeTypes();

const filterToggle = document.querySelector('#filterToggle');
const filterGrid = document.querySelector('#filterGrid');
filterToggle.addEventListener('click', () => {
  const shouldHide = !filterGrid.hidden;
  filterGrid.hidden = shouldHide;
  filterToggle.setAttribute('aria-expanded', String(!shouldHide));
  filterToggle.textContent = shouldHide ? 'Show filters' : 'Hide filters';
});

const filterSelector = '.mcuFilter, .nodeTypeFilter, .loraFilter, .frequencyFilter, .gpsFilter, .screenFilter, .wifiFilter, .inputFilter, .powerFilter, .sensorFilter, .motionFilter, .portFilter, .storageFilter, .txPowerFilter, .priceFilter, .brandFilter, .caseFilter, .batteryFilter, .notificationFilter, .meshtasticFilter, .readyFilter';
const filterGroupClasses = [
  'mcuFilter', 'nodeTypeFilter', 'loraFilter', 'frequencyFilter', 'gpsFilter', 'screenFilter',
  'wifiFilter', 'inputFilter', 'powerFilter', 'sensorFilter',
  'motionFilter', 'portFilter', 'storageFilter', 'txPowerFilter', 'priceFilter',
  'brandFilter', 'caseFilter', 'batteryFilter', 'notificationFilter',
  'meshtasticFilter', 'readyFilter'
];

function prepareFilterOptions() {
  document.querySelectorAll(filterSelector).forEach(filter => {
    if (filter.closest('.filter-option')) return;
    const parent = filter.parentNode;
    const wrapper = document.createElement('span');
    wrapper.className = 'filter-option';
    parent.insertBefore(wrapper, filter);

    let node = filter;
    while (node && node.nodeName !== 'BR') {
      const next = node.nextSibling;
      wrapper.appendChild(node);
      node = next;
    }
    if (node?.nodeName === 'BR') node.remove();
  });
}

prepareFilterOptions();

document.querySelectorAll(filterSelector).forEach(filter => {
  filter.addEventListener('change', filterTable);
});

function filterTable() {
  const mcuFilters = Array.from(document.querySelectorAll('.mcuFilter:checked')).map(cb => cb.value);
  const nodeTypeFilters = Array.from(document.querySelectorAll('.nodeTypeFilter:checked')).map(cb => cb.value);
  const loraFilters = Array.from(document.querySelectorAll('.loraFilter:checked')).map(cb => cb.value);
  const frequencyFilters = Array.from(document.querySelectorAll('.frequencyFilter:checked')).map(cb => cb.value);
  const gpsFilters = Array.from(document.querySelectorAll('.gpsFilter:checked')).map(cb => cb.value);
  const screenFilters = Array.from(document.querySelectorAll('.screenFilter:checked')).map(cb => cb.value);
  const wifiFilters = Array.from(document.querySelectorAll('.wifiFilter:checked')).map(cb => cb.value);
  const inputFilters = Array.from(document.querySelectorAll('.inputFilter:checked')).map(cb => cb.value);
  const powerFilters = Array.from(document.querySelectorAll('.powerFilter:checked')).map(cb => cb.value);
  const sensorFilters = Array.from(document.querySelectorAll('.sensorFilter:checked')).map(cb => cb.value);
  const motionFilters = Array.from(document.querySelectorAll('.motionFilter:checked')).map(cb => cb.value);
  const portFilters = Array.from(document.querySelectorAll('.portFilter:checked')).map(cb => cb.value);
  const storageFilters = Array.from(document.querySelectorAll('.storageFilter:checked')).map(cb => cb.value);
  const txPowerFilters = Array.from(document.querySelectorAll('.txPowerFilter:checked')).map(cb => cb.value);
  const priceFilters = Array.from(document.querySelectorAll('.priceFilter:checked')).map(cb => cb.value);
  const brandFilters = Array.from(document.querySelectorAll('.brandFilter:checked')).map(cb => cb.value);
  const caseFilters = Array.from(document.querySelectorAll('.caseFilter:checked')).map(cb => cb.value);
  const batteryFilters = Array.from(document.querySelectorAll('.batteryFilter:checked')).map(cb => cb.value);
  const notificationFilters = Array.from(document.querySelectorAll('.notificationFilter:checked')).map(cb => cb.value);
  const meshtasticFilters = Array.from(document.querySelectorAll('.meshtasticFilter:checked')).map(cb => cb.value);
  const readyFilters = Array.from(document.querySelectorAll('.readyFilter:checked')).map(cb => cb.value);

  const filterGroups = new Map([
    ['mcuFilter', mcuFilters], ['nodeTypeFilter', nodeTypeFilters],
    ['loraFilter', loraFilters],
    ['frequencyFilter', frequencyFilters], ['gpsFilter', gpsFilters],
    ['screenFilter', screenFilters], ['wifiFilter', wifiFilters],
    ['inputFilter', inputFilters],
    ['powerFilter', powerFilters], ['sensorFilter', sensorFilters],
    ['motionFilter', motionFilters], ['portFilter', portFilters],
    ['storageFilter', storageFilters], ['txPowerFilter', txPowerFilters],
    ['priceFilter', priceFilters], ['brandFilter', brandFilters],
    ['caseFilter', caseFilters], ['batteryFilter', batteryFilters],
    ['notificationFilter', notificationFilters],
    ['meshtasticFilter', meshtasticFilters], ['readyFilter', readyFilters]
  ]);

  const columns = document.querySelectorAll('#comparisonTable thead th');
  const rows = document.querySelectorAll('#comparisonTable tbody tr');
  const rowsByLabel = new Map(Array.from(rows).map(row => [row.cells[0].textContent.trim(), row]));

  function getCellText(label, column) {
    return rowsByLabel.get(label)?.children[column.cellIndex]?.textContent.trim() ?? '';
  }

  function hasListedValue(value) {
    return value !== '' && !/^(?:-|no|none|n\/a|not specified|\?)$/i.test(value);
  }

  function supportsFrequency(value, target) {
    if (target === '2400') return /2\.4\s*GHz|2400\s*MHz/i.test(value);
    const targetMhz = Number(target);
    if (new RegExp(`(^|\\D)${target}(?:\\D|$)`).test(value)) return true;
    return Array.from(value.matchAll(/(\d{3})\s*(?:–|-|~|to)\s*(\d{3})/gi))
      .some(match => targetMhz >= Number(match[1]) && targetMhz <= Number(match[2]));
  }

  function getPowerFeatures(value) {
    const features = [];
    if (/USB-C|Type-C/i.test(value)) features.push('USB-C');
    if (/Micro[\s-]?USB/i.test(value)) features.push('Micro-USB');
    if (/Magnetic 2-pin/i.test(value)) features.push('Magnetic2Pin');
    else if (/Magnetic/i.test(value)) features.push('Magnetic');
    if (/\bPogo pins?\b/i.test(value)) features.push('Pogo');
    if (/Solar|MPPT/i.test(value)) features.push('Solar');
    if (/\bDC\b/i.test(value)) features.push('DC');
    if (/\bPoE\b|802\.3af/i.test(value)) features.push('PoE');
    if (/\bWireless\b/i.test(value)) features.push('Wireless');
    return features;
  }

  function getLoRaFeatures(value) {
    const features = [];
    ['SX1276', 'SX1278', 'SX1262', 'SX1280', 'LR1110', 'LR1121', 'LR2021'].forEach(chip => {
      if (value.includes(chip)) features.push(chip);
    });
    return features;
  }

  function getScreenFeatures(value, listedFeatures) {
    const features = [...listedFeatures];
    if (/E-paper|E-?Ink/i.test(value)) features.push('Eink');
    if (/OLED/i.test(value)) features.push('OLED');
    if (/TFT|LCD/i.test(value)) features.push('LCD');
    if (/^(?:-|No)$/i.test(value) || /no-display|optional/i.test(value)) features.push('None');
    return [...new Set(features)];
  }

  function getInputFeatures(value) {
    const features = [];
    if (/Touchscreen/i.test(value)) features.push('Touchscreen');
    if (/Touch button/i.test(value)) features.push('TouchButton');
    if (/Keyboard/i.test(value)) features.push('Keyboard');
    if (/User button|User controls/i.test(value)) features.push('User');
    if (/Reset button/i.test(value)) features.push('Reset');
    if (/Power(?:\/SOS)? button/i.test(value)) features.push('Power');
    if (/Boot button/i.test(value)) features.push('Boot');
    if (/3rd button/i.test(value)) features.push('Third');
    if (/Joystick/i.test(value)) features.push('Joystick');
    if (/Encoder/i.test(value)) features.push('Encoder');
    if (/Knob/i.test(value)) features.push('Knob');
    if (/Trackball/i.test(value)) features.push('Trackball');
    if (value === '-') features.push('None');
    return features;
  }

  function getMotionFeatures(imu, magnetometer) {
    const features = [];
    if (/accelerometer/i.test(imu)) features.push('Accelerometer');
    if (/gyroscope/i.test(imu)) features.push('Gyroscope');
    if (hasListedValue(magnetometer)) features.push('Magnetometer');
    if (/optional/i.test(`${imu} ${magnetometer}`)) features.push('Optional');
    return features;
  }

  function getGpsFeatures(value) {
    if (/^(?:-|No)$/i.test(value)) return ['None'];
    const features = [];
    ['GPS', 'GLONASS', 'BeiDou', 'Galileo', 'QZSS', 'NavIC'].forEach(system => {
      if (value.includes(system)) features.push(system);
    });
    if (/optional/i.test(value)) features.push('Optional');
    return features;
  }

  function getWifiAvailability(value) {
    return /^(?:-|No)$/i.test(value) ? 'No' : 'Yes';
  }

  function getTxPowerTiers(value) {
    const cleaned = value.replace(/±\s*\d+(?:\.\d+)?/g, '');
    const powers = Array.from(cleaned.matchAll(/(\d+(?:\.\d+)?)\s*(?=dBm|\/)/gi))
      .map(match => Number(match[1]));
    if (powers.length === 0) return ['Unknown'];
    return [...new Set(powers.map(txPower => {
      if (txPower < 20) return 'Under20';
      if (txPower <= 22) return '20to22';
      return 'Over22';
    }))];
  }

  function getBatteryCapacities(value) {
    if (!hasListedValue(value)) return [];
    const capacityText = value.split(/mAh/i)[0];
    const capacities = Array.from(capacityText.matchAll(/\d+(?:\.\d+)?/g))
      .map(match => Number(match[0]));
    if ((capacityText.includes('\u00D7') || /x/i.test(capacityText)) && capacities.length >= 2) {
      return [capacities[0] * capacities[1]];
    }
    return capacities;
  }

  function getBatteryRange(capacity) {
    if (capacity <= 500) return 'UpTo500';
    if (capacity <= 1000) return '501to1000';
    if (capacity <= 1500) return '1001to1500';
    if (capacity <= 2000) return '1501to2000';
    if (capacity <= 3000) return '2001to3000';
    if (capacity <= 5000) return '3001to5000';
    if (capacity <= 8000) return '5001to8000';
    return 'Over8000';
  }

  function getPriceRange(price) {
    if (price <= 20) return '0-20';
    if (price <= 40) return '21-40';
    if (price <= 60) return '41-60';
    return '61+';
  }

  function shouldDisplayColumn(column) {
    const mcu = column.getAttribute('data-mcu');
    const nodeTypes = (column.getAttribute('data-node-type') || '').split(' ').filter(Boolean);
    const lora = getLoRaFeatures(getCellText('LoRa Chip', column));
    const frequency = getCellText('Frequency', column);
    const gps = getGpsFeatures(getCellText('GPS/GNSS', column));
    const screen = getScreenFeatures(getCellText('Display Type', column), column.getAttribute('data-screen').split(' '));
    if (column.getAttribute('data-backlit-epaper') === 'Yes') screen.push('BacklitEink');
    const wifi = getWifiAvailability(getCellText('Wi-Fi', column));
    const input = getInputFeatures(getCellText('Input', column));
    const powerFeatures = getPowerFeatures(getCellText('Charging Interface', column));
    const sensorFeatures = (column.getAttribute('data-environment') || '').split(' ').filter(Boolean);
    const motionFeatures = getMotionFeatures(
      getCellText('IMU', column),
      getCellText('Magnetometer / Digital Compass', column)
    );
    const connectorText = getCellText('Expansion Connector', column);
    const portFeatures = [];
    if (/\bQwiic\b/i.test(connectorText)) portFeatures.push('Qwiic');
    if (/\bGrove\b/i.test(connectorText)) portFeatures.push('Grove');
    if (/\bQuickLink\b/i.test(connectorText)) portFeatures.push('QuickLink');
    const storage = hasListedValue(getCellText('Storage Expansion', column)) ? 'Card' : 'NoCard';
    const txPowerTiers = getTxPowerTiers(getCellText('Max. TX Power', column));
    const price = parseFloat(column.getAttribute('data-price'));
    const brand = column.getAttribute('data-brand');
    const caseIncluded = column.getAttribute('data-case');
    const batteryCapacities = getBatteryCapacities(getCellText('Battery', column));
    const notificationTypes = (column.getAttribute('data-notification') || '').split(' ');
    const meshtastic = column.getAttribute('data-meshtastic');
    const ready = column.getAttribute('data-ready');

    const mcuMatch = mcuFilters.length === 0 || mcuFilters.includes(mcu);
    const nodeTypeMatch = nodeTypeFilters.length === 0 || nodeTypeFilters.some(type => nodeTypes.includes(type));
    const loraMatch = loraFilters.length === 0 || loraFilters.some(loraType => lora.includes(loraType)); // Updated to handle multiple LoRa chips
    const frequencyMatch = frequencyFilters.length === 0 || frequencyFilters.some(band => supportsFrequency(frequency, band));
    const gpsMatch = gpsFilters.length === 0 || gpsFilters.some(feature => gps.includes(feature));
    const screenMatch = screenFilters.length === 0 || screenFilters.some(screenType => screen.includes(screenType));
    const wifiMatch = wifiFilters.length === 0 || wifiFilters.includes(wifi);
    const inputMatch = inputFilters.length === 0 || inputFilters.some(inputType => input.includes(inputType));
    const powerMatch = powerFilters.length === 0 || powerFilters.some(feature => powerFeatures.includes(feature));
    const sensorMatch = sensorFilters.length === 0 || sensorFilters.some(feature => sensorFeatures.includes(feature));
    const motionMatch = motionFilters.length === 0 || motionFilters.some(feature => motionFeatures.includes(feature));
    const portMatch = portFilters.length === 0 || portFilters.some(feature => portFeatures.includes(feature));
    const storageMatch = storageFilters.length === 0 || storageFilters.includes(storage);
    const txPowerMatch = txPowerFilters.length === 0 || txPowerFilters.some(tier => txPowerTiers.includes(tier));
    const priceMatch = priceFilters.length === 0 || priceFilters.includes(getPriceRange(price));
    const brandMatch = brandFilters.length === 0 || brandFilters.includes(brand);
    const caseMatch = caseFilters.length === 0 || caseFilters.includes(caseIncluded);
    const batteryMatch = batteryFilters.length === 0 || batteryFilters.some(range =>
      batteryCapacities.some(capacity => getBatteryRange(capacity) === range)
    );
    const notificationMatch = notificationFilters.length === 0 || notificationFilters.some(type => notificationTypes.includes(type));
    const meshtasticMatch = meshtasticFilters.length === 0 || meshtasticFilters.includes(meshtastic);
    const readyMatch = readyFilters.length === 0 || readyFilters.includes(ready);

    return mcuMatch && nodeTypeMatch && loraMatch && frequencyMatch && gpsMatch && screenMatch && wifiMatch && inputMatch && powerMatch && sensorMatch && motionMatch && portMatch && storageMatch && txPowerMatch && priceMatch && brandMatch && caseMatch && batteryMatch && notificationMatch && meshtasticMatch && readyMatch;
  }

  columns.forEach(column => {
    if (column.cellIndex === 0) return;
    const display = shouldDisplayColumn(column) ? '' : 'none';
    column.style.display = display;
    rows.forEach(row => {
      row.children[column.cellIndex].style.display = display;
    });
  });

  const deviceColumns = Array.from(columns).filter(column => column.cellIndex > 0);
  document.querySelectorAll(filterSelector).forEach(filter => {
    const wrapper = filter.closest('.filter-option');
    if (filter.checked) {
      wrapper.style.display = '';
      return;
    }

    const groupClass = filterGroupClasses.find(className => filter.classList.contains(className));
    const selectedValues = filterGroups.get(groupClass);
    const originalValues = selectedValues.slice();
    selectedValues.splice(0, selectedValues.length, filter.value);
    const isAvailable = deviceColumns.some(shouldDisplayColumn);
    selectedValues.splice(0, selectedValues.length, ...originalValues);
    wrapper.style.display = isAvailable ? '' : 'none';
  });

  filterGroupClasses.forEach(groupClass => {
    const filters = Array.from(document.querySelectorAll(`.${groupClass}`));
    if (filters.length === 0) return;
    const optionsContainer = filters[0].closest('.filter-option')?.parentElement;
    const filterSection = optionsContainer?.parentElement;
    const hasVisibleOption = filters.some(filter =>
      filter.closest('.filter-option')?.style.display !== 'none'
    );
    if (filterSection) filterSection.style.display = hasVisibleOption ? '' : 'none';
  });
}

filterTable();
</script>
