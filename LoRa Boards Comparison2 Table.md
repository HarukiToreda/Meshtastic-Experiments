---
layout: default
title: LoRa Boards Comparison Table
---

# LoRa Boards Comparison Table

## Filter Boards

<label>MCU Chip:</label>
<div>
  <input type="checkbox" id="mcuEsp32D0" value="ESP32-D0" onchange="filterTable()"> ESP32-D0<br>
  <input type="checkbox" id="mcuEsp32S3" value="ESP32-S3" onchange="filterTable()"> ESP32-S3<br>
  <input type="checkbox" id="mcuEsp32S3FN8" value="ESP32-S3FN8" onchange="filterTable()"> ESP32-S3FN8<br>
  <input type="checkbox" id="mcuEsp32S3R8" value="ESP32-S3R8" onchange="filterTable()"> ESP32-S3R8<br>
  <input type="checkbox" id="mcuRak4631" value="RAK4631" onchange="filterTable()"> RAK4631<br>
</div>

<label>LoRa Chip:</label>
<div>
  <input type="checkbox" id="loraSx1276" value="SX1276" onchange="filterTable()"> SX1276<br>
  <input type="checkbox" id="loraSx1262" value="SX1262" onchange="filterTable()"> SX1262<br>
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
        <td data-mcu="ESP32-D0" data-lora="SX1276">ESP32-D0</td><!--Heltec V2-->
        <td data-mcu="ESP32-S3" data-lora="SX1262">ESP32-S3</td><!--Heltec V3-->
        <td data-mcu="ESP32-S3FN8" data-lora="SX1262">ESP32-S3FN8</td><!--Wireless Paper-->
        <td data-mcu="ESP32-S3" data-lora="SX1262">ESP32-S3</td><!--Wireless Stick Lite-->
        <td data-mcu="ESP32-S3FN8" data-lora="SX1262">ESP32-S3FN8</td><!--Wireless Tracker-->
        <td data-mcu="ESP32-S3FN8" data-lora="SX1262">ESP32-S3FN8</td><!--Capsule Sensor V3-->
        <td data-mcu="ESP32-S3R8" data-lora="SX1262">ESP32-S3R8</td><!--Vision Master E213-->
        <td data-mcu="ESP32-S3R8" data-lora="SX1262">ESP32-S3R8</td><!--Vision Master E290--> 
        <td data-mcu="ESP32-S3" data-lora="SX1262">ESP32-S3</td><!--T-Deck-->
        <td data-mcu="RAK4631" data-lora="SX1262">RAK4631</td><!--RAKRAK19007-->
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
    var table = document.getElementById('comparisonTable');
    var rows = table.getElementsByTagName('tr');

    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('td');
      var showRow = true;

      for (var j = 1; j < cells.length; j++) {
        var cellMcu = cells[j].getAttribute('data-mcu');
        var cellLora = cells[j].getAttribute('data-lora');

        if (mcuChip.length && !mcuChip.includes(cellMcu)) {
          showRow = false;
        }
        if (loraChip.length && !loraChip.includes(cellLora)) {
          showRow = false;
        }
        if (!showRow) break;
      }

      rows[i].style.display = showRow ? "" : "none";
    }
  }
</script>
