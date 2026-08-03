---
layout: default
title: LoRa Boards Comparison Table
---

# LoRa Boards Comparison Table

Specifications and prices checked against manufacturer documentation: **August 1–2, 2026**.

<style>
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
</style>

## Filter Boards

<div style="display: flex; flex-wrap: wrap;">
  <div style="margin-right: 20px;">
    <label>MCU Chip:</label>
    <div>
      <input type="checkbox" class="mcuFilter" value="ESP32"> ESP32<br>
      <input type="checkbox" class="mcuFilter" value="nRF"> nRF52840<br>
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
      <input type="checkbox" class="loraFilter" value="None"> No LoRa option<br>
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
    <label>GNSS Hardware:</label>
    <div>
      <input type="checkbox" class="gpsFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="gpsFilter" value="No"> No<br>
      <input type="checkbox" class="gpsFilter" value="Optional"> Optional<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Screen:</label>
    <div>
      <input type="checkbox" class="screenFilter" value="Eink"> Eink<br>
      <input type="checkbox" class="screenFilter" value="LCD"> LCD<br>      
      <input type="checkbox" class="screenFilter" value="OLED"> OLED<br>      
      <input type="checkbox" class="screenFilter" value="TFT"> TFT<br>
      <input type="checkbox" class="screenFilter" value="None"> None<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>WiFi:</label>
    <div>
      <input type="checkbox" class="wifiFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="wifiFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Bluetooth:</label>
    <div>
      <input type="checkbox" class="bluetoothFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="bluetoothFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Input Interface:</label>
    <div>
      <input type="checkbox" class="inputFilter" value="Touch"> Touch<br>
      <input type="checkbox" class="inputFilter" value="Keyboard"> Keyboard<br>
      <input type="checkbox" class="inputFilter" value="User"> User Button<br>
      <input type="checkbox" class="inputFilter" value="None"> None<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Power / Charging:</label>
    <div>
      <input type="checkbox" class="powerFilter" value="USB-C"> USB-C<br>
      <input type="checkbox" class="powerFilter" value="Micro USB"> Micro USB<br>
      <input type="checkbox" class="powerFilter" value="Magnetic"> Magnetic / pogo<br>
      <input type="checkbox" class="powerFilter" value="Solar"> Solar<br>
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
    <label>Expansion Port:</label>
    <div>
      <input type="checkbox" class="portFilter" value="UART"> UART<br>
      <input type="checkbox" class="portFilter" value="I2C"> I²C / Qwiic / Grove<br>
      <input type="checkbox" class="portFilter" value="None"> No listed expansion port<br>
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
      <input type="checkbox" class="txPowerFilter" value="Unknown"> Not specified<br>
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
      <input type="checkbox" class="brandFilter" value="Indie"> Indie<br>
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
    <label>Battery Included:</label>
    <div>
      <input type="checkbox" class="batteryFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="batteryFilter" value="No"> No<br>
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
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-screen="TFT None" data-wifi="Yes" data-input="User" data-price="22.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Wireless Tracker V1.1</th>
        <th data-mcu="ESP32" data-lora="SX1262" data-gps="Optional" data-screen="None" data-wifi="Yes" data-input="User" data-price="25.90" data-brand="Heltec" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">Heltec Capsule Sensor V3</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="Eink" data-wifi="Yes" data-input="User" data-price="18.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Vision Master E213</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="Eink" data-wifi="Yes" data-input="User" data-price="19.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Vision Master E290</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="TFT" data-wifi="Yes" data-input="User" data-price="17.90" data-brand="Heltec" data-case="No" data-battery="No" data-meshtastic="No" data-ready="No">Heltec Vision Master T190</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="TFT" data-wifi="No" data-input="User" data-price="27.90 29.90 38.80" data-brand="Heltec" data-case="Yes" data-battery="No" data-meshtastic="Yes" data-ready="No">Heltec Mesh Node T114</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="No" data-input="None" data-price="27.99" data-brand="RAKwireless" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">WisBlock Starter Kit RAK4631 + RAK19003</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="No" data-input="None" data-price="29.99" data-brand="RAKwireless" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">WisBlock Starter Kit RAK4631 + RAK19007</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="OLED" data-wifi="No" data-input="User" data-price="89.97" data-brand="RAKwireless" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">WisMesh Pocket V2</th>
        <th data-mcu="ESP32" data-lora="SX1262 None" data-gps="No" data-screen="LCD" data-wifi="Yes" data-input="Touch, Keyboard, User" data-price="46.52" data-brand="LILYGO" data-case="No" data-battery="No" data-meshtastic="Yes" data-ready="No">T-Deck</th>
        <th data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="Eink" data-wifi="No" data-input="Touch, User" data-price="48.49" data-brand="LILYGO" data-case="Yes" data-battery="Yes" data-meshtastic="Yes" data-ready="Yes">T-Echo</th>
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
        <td>Base Price USD (last checked 2026-08-01/02)</td>
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
        <td>TFT</td><!--Wireless Tracker-->
        <td>-</td><!--Capsule Sensor V3-->
        <td>E-ink</td><!--Vision Master E213-->
        <td>E-ink</td><!--Vision Master E290-->
        <td>TFT</td><!--Vision Master T190-->
        <td>TFT</td><!--T114-->
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
        <td>Charging IC</td>
        <td>TP4054</td><!--Heltec V2-->
        <td>LP4056H</td><!--Heltec V3.2-->
        <td>TP4054</td><!--Wireless Paper-->
        <td>TP4054</td><!--Wireless Stick Lite-->
        <td>TP4054</td><!--Wireless Tracker-->
        <td>TP4054</td><!--Capsule Sensor V3-->
        <td>TP4054</td><!--Vision Master E213-->
        <td>TP4054</td><!--Vision Master E290-->
        <td>TP4054</td><!--Vision Master T190-->
        <td>LP4056H</td><!--T114-->
        <td>TP4054</td><!--RAKRAK19003-->
        <td>TP4054</td><!--RAKRAK19007-->
        <td>TP4054</td><!--WisMesh-->
        <td>TP4054</td><!--T-Deck-->
        <td>TP4054</td><!--T-Echo-->
        <td>AXP192</td><!--T-Beam-->            
        <td>AXP2101</td><!--T-Beam-Supreme-->            
        <td>TP4054</td><!--T3-S3-->
        <td>?</td><!--Station G2-->
        <td>?</td><!--Nano G2 Ultra-->
        <td>ETA6003</td><!--Wio Tracker 1110-->
        <td>ETA6003</td><!--WIO WM1110 Tracker-->
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
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Optional', screen: 'TFT None', wifi: 'Yes', input: 'Touch, User', price: '49.90', brand: 'Heltec', case: 'Yes', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/wifi-lora-32-v4-expansion-housing/',
    specs: {
      'MCU Chip': 'ESP32-S3R2', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Optional Quectel L76K',
      'Charging Interface': 'USB-C; solar input', 'Frequency': '433 / 470–510 / 863–928 MHz (variant)',
      'Max. TX Power': '21 or 28 dBm (variant)', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5', 'Display Type': 'Optional touch TFT front panel',
      'Display Size': '320×240 touch TFT', 'Charging IC': 'Not specified', 'Input': 'Touch screen, User and Reset buttons',
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
    meta: { mcu: 'nRF', lora: 'SX1262', gps: 'Yes', screen: 'TFT', wifi: 'No', input: 'User', price: '39.90', brand: 'Heltec', case: 'Yes', battery: 'Yes', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/mesh-node-t1/',
    specs: {
      'MCU Chip': 'nRF52840', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Built-in UC6580: GPS, BeiDou, GLONASS, Galileo',
      'Charging Interface': 'Waterproof USB-C, 5V', 'Frequency': '433 / 470–510 / 863–870 / 902–928 MHz (variant)',
      'Max. TX Power': '21 ± 1 dBm', 'Max. Receiving Sensitivity': 'Not specified', 'Wi-Fi': 'NO',
      'Bluetooth': 'BLE', 'Display Type': 'TFT LCD', 'Display Size': '0.96 in', 'Charging IC': 'Not specified',
      'Input': 'Side buttons and rear power button', 'Temp/ Humidity Sensor': '-', 'Air Pressure Sensor': '-',
      'Air Quality Sensor': '-', 'External Notification': 'Buzzer and TFT', 'UART Port': '-', 'I2C Port': '-',
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
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'TFT', wifi: 'Yes', input: 'Touch, User', price: '56.90', brand: 'Heltec', case: 'Yes', battery: 'No', meshtastic: 'No', ready: 'No' },
    productUrl: 'https://heltec.org/project/v4-r8-ex/',
    specs: {
      'MCU Chip': 'ESP32-S3R8', 'LoRa Chip': 'SX1262', 'GPS/GNSS': 'Built-in Quectel L76K',
      'Charging Interface': 'USB-C; solar input', 'Frequency': '433 / 470–510 / 863–928 MHz (variant)',
      'Max. TX Power': '21 or 28 dBm (variant)', 'Max. Receiving Sensitivity': 'Not specified',
      'Wi-Fi': '802.11 b/g/n', 'Bluetooth': 'BLE / Bluetooth 5 (mode-dependent with touch UI)',
      'Display Type': 'Touch TFT', 'Display Size': '2.8 in', 'Charging IC': 'Not specified',
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

  additionalHeltecDevices.forEach(device => {
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
    meta: { mcu: 'ESP32', lora: 'SX1262', gps: 'Yes', screen: 'Eink', wifi: 'Yes', input: 'Touch, Keyboard, User', price: '102.91', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'Yes', ready: 'Yes' },
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
    meta: { mcu: 'ESP32', lora: 'SX1262 SX1280', gps: 'No', screen: 'LCD', wifi: 'Yes', input: 'Touch, User', price: '42.98', brand: 'LILYGO', case: 'Yes', battery: 'Yes', meshtastic: 'No', ready: 'No' },
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
    ['Heltec WiFi LoRa 32 Expansion Kit V2', 'microSD / TF'],
    ['T-Deck', 'microSD / TF'],
    ['T-Beam Supreme', 'microSD / TF'],
    ['T3-S3', 'microSD / TF'],
    ['T-LoRa Pager', 'microSD / TF (up to 32 GB, FAT32)'],
    ['T-Deck Pro', 'microSD / TF'],
    ['T-Deck Plus', 'microSD / TF']
  ]);
  const flashOverrides = new Map([
    ['Heltec WiFi LoRa 32 V2.1 (phaseout)', '8 MB'],
    ['Heltec Mesh Node T114', '1 MB'],
    ['Nano G2 Ultra', '1 MB + 16 MB external']
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

    romRow.cells[column].textContent = chipMemory.rom;
    sramRow.cells[column].textContent = chipMemory.sram;
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
    'Air Pressure Sensor', 'Air Quality Sensor', 'External Notification', 'UART Port',
    'I2C Port', 'Battery', 'Enclosure', 'MCU ROM', 'MCU SRAM',
    'RTC / Low-power SRAM', 'PSRAM', 'Onboard Flash', 'Storage Expansion'
  ]);
  const notSpecifiedRows = new Set(['Max. Receiving Sensitivity', 'Charging IC']);

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
          .replace(/^(\d+×\d+) touch TFT$/i, '$1');
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

document.querySelectorAll('.mcuFilter, .loraFilter, .frequencyFilter, .gpsFilter, .screenFilter, .wifiFilter, .bluetoothFilter, .inputFilter, .powerFilter, .sensorFilter, .portFilter, .storageFilter, .txPowerFilter, .priceFilter, .brandFilter, .caseFilter, .batteryFilter, .meshtasticFilter, .readyFilter').forEach(filter => {
  filter.addEventListener('change', filterTable);
});

function filterTable() {
  const mcuFilters = Array.from(document.querySelectorAll('.mcuFilter:checked')).map(cb => cb.value);
  const loraFilters = Array.from(document.querySelectorAll('.loraFilter:checked')).map(cb => cb.value);
  const frequencyFilters = Array.from(document.querySelectorAll('.frequencyFilter:checked')).map(cb => cb.value);
  const gpsFilters = Array.from(document.querySelectorAll('.gpsFilter:checked')).map(cb => cb.value);
  const screenFilters = Array.from(document.querySelectorAll('.screenFilter:checked')).map(cb => cb.value);
  const wifiFilters = Array.from(document.querySelectorAll('.wifiFilter:checked')).map(cb => cb.value);
  const bluetoothFilters = Array.from(document.querySelectorAll('.bluetoothFilter:checked')).map(cb => cb.value);
  const inputFilters = Array.from(document.querySelectorAll('.inputFilter:checked')).map(cb => cb.value);
  const powerFilters = Array.from(document.querySelectorAll('.powerFilter:checked')).map(cb => cb.value);
  const sensorFilters = Array.from(document.querySelectorAll('.sensorFilter:checked')).map(cb => cb.value);
  const portFilters = Array.from(document.querySelectorAll('.portFilter:checked')).map(cb => cb.value);
  const storageFilters = Array.from(document.querySelectorAll('.storageFilter:checked')).map(cb => cb.value);
  const txPowerFilters = Array.from(document.querySelectorAll('.txPowerFilter:checked')).map(cb => cb.value);
  const priceFilters = Array.from(document.querySelectorAll('.priceFilter:checked')).map(cb => cb.value);
  const brandFilters = Array.from(document.querySelectorAll('.brandFilter:checked')).map(cb => cb.value);
  const caseFilters = Array.from(document.querySelectorAll('.caseFilter:checked')).map(cb => cb.value);
  const batteryFilters = Array.from(document.querySelectorAll('.batteryFilter:checked')).map(cb => cb.value);
  const meshtasticFilters = Array.from(document.querySelectorAll('.meshtasticFilter:checked')).map(cb => cb.value);
  const readyFilters = Array.from(document.querySelectorAll('.readyFilter:checked')).map(cb => cb.value);

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
    if (/Micro[\s-]?USB/i.test(value)) features.push('Micro USB');
    if (/Magnetic|Pogo/i.test(value)) features.push('Magnetic');
    if (/Solar|MPPT/i.test(value)) features.push('Solar');
    if (/\bPoE\b|802\.3af/i.test(value)) features.push('PoE');
    if (/Wireless charging|Wireless output/i.test(value)) features.push('Wireless');
    return features;
  }

  function getTxPowerTier(value) {
    const match = value.match(/(\d+(?:\.\d+)?)\s*(?:±\s*\d+(?:\.\d+)?)?\s*dB(?:m)?/i);
    if (!match) return 'Unknown';
    const txPower = Number(match[1]);
    if (txPower < 20) return 'Under20';
    if (txPower <= 22) return '20to22';
    return 'Over22';
  }

  function getPriceRange(price) {
    if (price <= 20) return '0-20';
    if (price <= 40) return '21-40';
    if (price <= 60) return '41-60';
    return '61+';
  }

  function shouldDisplayColumn(column) {
    const mcu = column.getAttribute('data-mcu');
    const lora = column.getAttribute('data-lora').split(' '); // Split LoRa chips into an array
    const frequency = getCellText('Frequency', column);
    const gps = column.getAttribute('data-gps');
    const screen = column.getAttribute('data-screen').split(' ');
    const wifi = column.getAttribute('data-wifi');
    const bluetooth = hasListedValue(getCellText('Bluetooth', column)) ? 'Yes' : 'No';
    const input = column.getAttribute('data-input').split(', ');
    const powerFeatures = getPowerFeatures(getCellText('Charging Interface', column));
    const sensorFeatures = [];
    if (hasListedValue(getCellText('Temp/ Humidity Sensor', column))) sensorFeatures.push('TempHumidity');
    if (hasListedValue(getCellText('Air Pressure Sensor', column))) sensorFeatures.push('Pressure');
    if (hasListedValue(getCellText('Air Quality Sensor', column))) sensorFeatures.push('AirQuality');
    const portFeatures = [];
    if (hasListedValue(getCellText('UART Port', column))) portFeatures.push('UART');
    if (hasListedValue(getCellText('I2C Port', column))) portFeatures.push('I2C');
    if (portFeatures.length === 0) portFeatures.push('None');
    const storage = hasListedValue(getCellText('Storage Expansion', column)) ? 'Card' : 'NoCard';
    const txPowerTier = getTxPowerTier(getCellText('Max. TX Power', column));
    const price = parseFloat(column.getAttribute('data-price'));
    const brand = column.getAttribute('data-brand');
    const caseIncluded = column.getAttribute('data-case');
    const batteryIncluded = column.getAttribute('data-battery');
    const meshtastic = column.getAttribute('data-meshtastic');
    const ready = column.getAttribute('data-ready');

    const mcuMatch = mcuFilters.length === 0 || mcuFilters.includes(mcu);
    const loraMatch = loraFilters.length === 0 || loraFilters.some(loraType => lora.includes(loraType)); // Updated to handle multiple LoRa chips
    const frequencyMatch = frequencyFilters.length === 0 || frequencyFilters.some(band => supportsFrequency(frequency, band));
    const gpsMatch = gpsFilters.length === 0 || gpsFilters.includes(gps);
    const screenMatch = screenFilters.length === 0 || screenFilters.some(screenType => screen.includes(screenType));
    const wifiMatch = wifiFilters.length === 0 || wifiFilters.includes(wifi);
    const bluetoothMatch = bluetoothFilters.length === 0 || bluetoothFilters.includes(bluetooth);
    const inputMatch = inputFilters.length === 0 || inputFilters.some(inputType => input.includes(inputType));
    const powerMatch = powerFilters.length === 0 || powerFilters.some(feature => powerFeatures.includes(feature));
    const sensorMatch = sensorFilters.length === 0 || sensorFilters.some(feature => sensorFeatures.includes(feature));
    const portMatch = portFilters.length === 0 || portFilters.some(feature => portFeatures.includes(feature));
    const storageMatch = storageFilters.length === 0 || storageFilters.includes(storage);
    const txPowerMatch = txPowerFilters.length === 0 || txPowerFilters.includes(txPowerTier);
    const priceMatch = priceFilters.length === 0 || priceFilters.includes(getPriceRange(price));
    const brandMatch = brandFilters.length === 0 || brandFilters.includes(brand);
    const caseMatch = caseFilters.length === 0 || caseFilters.includes(caseIncluded);
    const batteryMatch = batteryFilters.length === 0 || batteryFilters.includes(batteryIncluded);
    const meshtasticMatch = meshtasticFilters.length === 0 || meshtasticFilters.includes(meshtastic);
    const readyMatch = readyFilters.length === 0 || readyFilters.includes(ready);

    return mcuMatch && loraMatch && frequencyMatch && gpsMatch && screenMatch && wifiMatch && bluetoothMatch && inputMatch && powerMatch && sensorMatch && portMatch && storageMatch && txPowerMatch && priceMatch && brandMatch && caseMatch && batteryMatch && meshtasticMatch && readyMatch;
  }

  columns.forEach(column => {
    if (column.cellIndex === 0) return;
    const display = shouldDisplayColumn(column) ? '' : 'none';
    column.style.display = display;
    rows.forEach(row => {
      row.children[column.cellIndex].style.display = display;
    });
  });
}
</script>
