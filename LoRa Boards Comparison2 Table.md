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
  <div>
    <label>Screen:</label>
    <div>
      <input type="checkbox" class="screenFilter" value="Yes"> Present<br>
      <input type="checkbox" class="screenFilter" value="No"> Absent<br>
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
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-screen="No">ESP32-S3FN8</td><!--Capsule Sensor V3-->
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
    </tbody>
  </table>
</div>

<script>
document.querySelectorAll('.mcuFilter, .loraFilter, .gpsFilter, .screenFilter').forEach(filter => {
  filter.addEventListener('change', filterTable);
});

function filterTable() {
  const mcuFilters = Array.from(document.querySelectorAll('.mcuFilter:checked')).map(cb => cb.value);
  const loraFilters = Array.from(document.querySelectorAll('.loraFilter:checked')).map(cb => cb.value);
  const gpsFilters = Array.from(document.querySelectorAll('.gpsFilter:checked')).map(cb => cb.value);
  const screenFilters = Array.from(document.querySelectorAll('.screenFilter:checked')).map(cb => cb.value);

  const columns = document.querySelectorAll('#comparisonTable thead th');
  const rows = document.querySelectorAll('#comparisonTable tbody tr');

  function shouldDisplayColumn(columnIndex) {
    const mcuCell = rows[0].children[columnIndex];
    const loraCell = rows[1].children[columnIndex];
    const gpsCell = rows[2].children[columnIndex];

    const mcuMatch = mcuFilters.length === 0 || mcuFilters.includes(mcuCell.getAttribute('data-mcu'));
    const loraMatch = loraFilters.length === 0 || loraFilters.includes(loraCell.getAttribute('data-lora'));
    const gpsMatch = gpsFilters.length === 0 || gpsFilters.includes(gpsCell.getAttribute('data-gps'));
    const screenMatch = screenFilters.length === 0 || screenFilters.includes(mcuCell.getAttribute('data-screen'));

    return mcuMatch && loraMatch && gpsMatch && screenMatch;
  }

  columns.forEach((column, index) => {
    if (index === 0) return;
    const display = shouldDisplayColumn(index) ? '' : 'none';
    column.style.display = display;
    rows.forEach(row => {
      row.children[index].style.display = display;
    });
  });
}
</script>
