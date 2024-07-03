---
layout: default
title: LoRa Boards Comparison Table
---

# LoRa Boards Comparison Table

## Filter Boards

<div style="display: flex; flex-wrap: wrap;">
  <div style="margin-right: 20px;">
    <label>MCU Chip:</label>
    <div>
      <input type="checkbox" class="mcuFilter" value="ESP32"> ESP32<br>
      <input type="checkbox" class="mcuFilter" value="nRF"> nRF<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>LoRa Chip:</label>
    <div>
      <input type="checkbox" class="loraFilter" value="SX1276"> SX1276<br>
      <input type="checkbox" class="loraFilter" value="SX1262"> SX1262<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>GPS:</label>
    <div>
      <input type="checkbox" class="gpsFilter" value="Yes"> Present<br>
      <input type="checkbox" class="gpsFilter" value="No"> Absent<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>GNSS:</label>
    <div>
      <input type="checkbox" class="gnssFilter" value="Yes"> Present<br>
      <input type="checkbox" class="gnssFilter" value="No"> Absent<br>
    </div>
  </div>
  <div>
    <label>Screen:</label>
    <div>
      <input type="checkbox" class="screenFilter" value="Yes"> Present<br>
      <input type="checkbox" class="screenFilter" value="No"> Absent<br>
    </div>
  </div>
</div>

<button onclick="filterTable()">Search</button>

<div style="overflow-x: auto;">
  <table id="comparisonTable">
    <thead>
      <tr>
        <th>Device</th>
        <th>Heltec ESP32 V2</th>
        <th>Heltec ESP32 V3</th>
        <th>Heltec Wireless Paper</th>
        <th>Wireless Stick Lite (V3)</th>
        <th>Heltec Wireless Tracker</th>
        <th>Heltec Capsule Sensor V3</th>
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>        
        <th>T-Deck</th>
        <th>RAK nRF52840</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MCU Chip</td>
        <td data-mcu="ESP32" data-lora="SX1276" data-gps="No" data-gnss="No" data-screen="Yes">ESP32-D0</td><!--Heltec V2-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="Yes">ESP32-S3</td><!--Heltec V3-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="Yes">ESP32-S3FN8</td><!--Wireless Paper-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="No">ESP32-S3</td><!--Wireless Stick Lite-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-gnss="No" data-screen="Yes">ESP32-S3FN8</td><!--Wireless Tracker-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="Yes" data-screen="No">ESP32-S3FN8</td><!--Capsule Sensor V3-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="Yes">ESP32-S3R8</td><!--Vision Master E213-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="Yes">ESP32-S3R8</td><!--Vision Master E290--> 
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="Yes">ESP32-S3</td><!--T-Deck-->
        <td data-mcu="nRF" data-lora="SX1262" data-gps="No" data-gnss="No" data-screen="No">RAK4631</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1276</td><!--Heltec V2-->
        <td>SX1262</td><!--Heltec V3-->
        <td>SX1262</td><!--Wireless Paper-->
        <td>SX1262</td><!--Wireless Stick Lite-->
        <td>SX1262</td><!--Wireless Tracker-->
        <td>SX1262</td><!--Capsule Sensor V3-->
        <td>SX1262</td><!--Vision Master E213-->
        <td>SX1262</td><!--Vision Master E290-->         
        <td>SX1262</td><!--T-Deck-->
        <td>SX1262</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>GPS Chip</td>
        <td>N/A</td><!--Heltec V2-->
        <td>N/A</td><!--Heltec V3-->
        <td>N/A</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>UC6580</td><!--Wireless Tracker-->
        <td>N/A</td><!--Capsule Sensor V3-->
        <td>N/A</td><!--Vision Master E213-->
        <td>N/A</td><!--Vision Master E290-->         
        <td>N/A</td><!--T-Deck-->
        <td>N/A</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>GNSS Chip</td>
        <td>N/A</td><!--Heltec V2-->
        <td>N/A</td><!--Heltec V3-->
        <td>N/A</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>N/A</td><!--Wireless Tracker-->
        <td>L76k</td><!--Capsule Sensor V3-->
        <td>N/A</td><!--Vision Master E213-->
        <td>N/A</td><!--Vision Master E290-->         
        <td>N/A</td><!--T-Deck-->
        <td>N/A</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Charging Interface</td>
        <td>Micro USB</td><!--Heltec V2-->
        <td>USB-C</td><!--Heltec V3-->
        <td>USB-C</td><!--Wireless Paper-->
        <td>USB-C</td><!--Wireless Stick Lite-->
        <td>USB-C</td><!--Wireless Tracker-->
        <td>Wireless Boot</td><!--Capsule Sensor V3-->
        <td>USB-C</td><!--Vision Master E213-->
        <td>USB-C</td><!--Vision Master E290-->         
        <td>USB-C</td><!--T-Deck-->
        <td>USB-C</td><!--RAKRAK19007-->
      </tr>
    </tbody>
  </table>
</div>

<script>
function filterTable() {
  // Get all filter values
  const mcuFilters = Array.from(document.querySelectorAll('.mcuFilter:checked')).map(cb => cb.value);
  const loraFilters = Array.from(document.querySelectorAll('.loraFilter:checked')).map(cb => cb.value);
  const gpsFilters = Array.from(document.querySelectorAll('.gpsFilter:checked')).map(cb => cb.value);
  const gnssFilters = Array.from(document.querySelectorAll('.gnssFilter:checked')).map(cb => cb.value);
  const screenFilters = Array.from(document.querySelectorAll('.screenFilter:checked')).map(cb => cb.value);

  // Get all table rows
  const rows = document.querySelectorAll('#comparisonTable tbody tr');

  // Loop through each row and determine if it should be displayed
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    let showRow = true;

    cells.forEach(cell => {
      if (
        (mcuFilters.length > 0 && !mcuFilters.includes(cell.getAttribute('data-mcu'))) ||
        (loraFilters.length > 0 && !loraFilters.includes(cell.getAttribute('data-lora'))) ||
        (gpsFilters.length > 0 && !gpsFilters.includes(cell.getAttribute('data-gps'))) ||
        (gnssFilters.length > 0 && !gnssFilters.includes(cell.getAttribute('data-gnss'))) ||
