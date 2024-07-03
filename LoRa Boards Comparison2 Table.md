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
      <input type="checkbox" id="mcuEsp32" value="ESP32" onchange="filterTable()"> ESP32<br>
      <input type="checkbox" id="mcuNrf" value="nRF" onchange="filterTable()"> nRF<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>LoRa Chip:</label>
    <div>
      <input type="checkbox" id="loraSx1276" value="SX1276" onchange="filterTable()"> SX1276<br>
      <input type="checkbox" id="loraSx1262" value="SX1262" onchange="filterTable()"> SX1262<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>GPS:</label>
    <div>
      <input type="checkbox" id="gpsPresent" value="Yes" onchange="filterTable()"> Present<br>
      <input type="checkbox" id="gpsAbsent" value="No" onchange="filterTable()"> Absent<br>
    </div>
  </div>
  <div>
    <label>Screen:</label>
    <div>
      <input type="checkbox" id="screenPresent" value="Yes" onchange="filterTable()"> Present<br>
      <input type="checkbox" id="screenAbsent" value="No" onchange="filterTable()"> Absent<br>
    </div>
  </div>
</div>

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
        <td data-mcu="ESP32" data-lora="SX1276" data-gps="No" data-screen="Yes">ESP32-D0</td><!--Heltec V2-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Yes">ESP32-S3</td><!--Heltec V3-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Yes">ESP32-S3FN8</td><!--Wireless Paper-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="No">ESP32-S3</td><!--Wireless Stick Lite-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-screen="Yes">ESP32-S3FN8</td><!--Wireless Tracker-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="No">ESP32-S3FN8</td><!--Capsule Sensor V3-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Yes">ESP32-S3R8</td><!--Vision Master E213-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Yes">ESP32-S3R8</td><!--Vision Master E290--> 
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Yes">ESP32-S3</td><!--T-Deck-->
        <td data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="No">RAK4631</td><!--RAKRAK19007-->
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
      <!-- Add other rows as needed -->
    </tbody>
  </table>
</div>

<script>
  function getCheckedValues(name) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][id^="' + name + '"]');
    var checkedValues = [];
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkedValues.push(checkbox.value);
      }
    });
    return checkedValues;
  }

  function filterTable() {
    var mcuChip = getCheckedValues('mcu');
    var loraChip = getCheckedValues('lora');
    var gps = getCheckedValues('gps');
    var screen = getCheckedValues('screen');
    var table = document.getElementById('comparisonTable');
    var rows = table.getElementsByTagName('tr');
    var columnsToShow = new Array(rows[0].cells.length).fill(true);

    // Determine columns to show
    for (var j = 1; j < rows[0].cells.length; j++) {
      var showColumn = true;
      for (var i = 1; i < rows.length; i++) {
        var cell = rows[i].cells[j];
        if (mcuChip.length > 0 && !mcuChip.some(value => cell.getAttribute('data-mcu').includes(value))) {
          showColumn = false;
        }
        if (loraChip.length > 0 && !loraChip.some(value => cell.getAttribute('data-lora').includes(value))) {
          showColumn = false;
        }
        if (gps.length > 0 && !gps.includes(cell.getAttribute('data-gps'))) {
          showColumn = false;
        }
        if (screen.length > 0 && !screen.includes(cell.getAttribute('data-screen'))) {
          showColumn = false;
        }
      }
      columnsToShow[j] = showColumn;
    }

    // Show or hide columns based on filter
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('th');
      for (var j = 1; j < cells.length; j++) {
        cells[j].style.display = columnsToShow[j] ? "" : "none";
      }

      cells = rows[i].getElementsByTagName('td');
      for (var j = 1; j < cells.length; j++) {
        cells[j].style.display = columnsToShow[j] ? "" : "none";
      }
    }
  }
</script>
