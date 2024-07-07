---
layout: default
title: Hardware Comparison Table
---

# Hardware Comparison Table

## Filter Hardware

<div style="display: flex; flex-wrap: wrap;">
  <div style="margin-right: 20px;">
    <label>Sensors:</label>
    <div>
      <input type="checkbox" class="sensorFilter" value="Temperature"> Temperature<br>
      <input type="checkbox" class="sensorFilter" value="Pressure"> Pressure<br>
      <input type="checkbox" class="sensorFilter" value="Humidity"> Humidity<br>
      <input type="checkbox" class="sensorFilter" value="Gas"> Gas<br>
      <input type="checkbox" class="sensorFilter" value="Current & Power"> Current & Power<br>
      <input type="checkbox" class="sensorFilter" value="Weight"> Weight<br>
      <input type="checkbox" class="sensorFilter" value="Motion"> Motion<br>
      <input type="checkbox" class="sensorFilter" value="Ambient Light"> Ambient Light<br>
      <input type="checkbox" class="sensorFilter" value="Magnetometer"> Magnetometer<br>
      <input type="checkbox" class="sensorFilter" value="Particulate Matter Sensor"> Particulate Matter Sensor<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Others:</label>
    <div>
      <input type="checkbox" class="otherFilter" value="Weather Station"> Weather Station<br>
      <input type="checkbox" class="otherFilter" value="OLED Display"> OLED Display<br>
      <input type="checkbox" class="otherFilter" value="LCD Display"> LCD Display<br>
      <input type="checkbox" class="otherFilter" value="Real-Time Clock"> Real-Time Clock<br>
      <input type="checkbox" class="otherFilter" value="Input Module"> Input Module<br>
      <input type="checkbox" class="otherFilter" value="I/O Expander"> I/O Expander<br>
      <input type="checkbox" class="otherFilter" value="IMU"> IMU<br>
    </div>
  </div>
</div>

<div style="overflow-x: auto;">
  <table id="comparisonTable">
    <thead>
      <tr>
        <th>Type</th>
        <th>Sensor</th>
        <th>Range</th>
        <th>Accuracy</th>
        <th>Interface</th>
        <th>Key Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-type="Temperature">Temperature & Pressure</td>
        <td>BMP085</td>
        <td>-40°C to 85°C, 300hPa to 1100hPa</td>
        <td>±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Barometric pressure and temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature">Temperature & Pressure</td>
        <td>BMP280</td>
        <td>-40°C to 85°C, 300hPa to 1100hPa</td>
        <td>±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Barometric pressure and temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature">Temperature & Humidity</td>
        <td>AHT10</td>
        <td>-40°C to 85°C, 0% to 100% RH</td>
        <td>±0.3°C, ±2% RH</td>
        <td>I2C</td>
        <td>Low power consumption, High precision temperature and humidity measurement</td>
      </tr>
      <!-- Continue filling in the rows for the rest of the hardware -->
      <!-- Make sure each row has the appropriate data-type attribute -->
    </tbody>
  </table>
</div>

<script>
document.querySelectorAll('.sensorFilter, .otherFilter').forEach(filter => {
  filter.addEventListener('change', filterTable);
});

function filterTable() {
  const sensorFilters = Array.from(document.querySelectorAll('.sensorFilter:checked')).map(cb => cb.value);
  const otherFilters = Array.from(document.querySelectorAll('.otherFilter:checked')).map(cb => cb.value);

  const rows = document.querySelectorAll('#comparisonTable tbody tr');

  rows.forEach(row => {
    const typeCell = row.children[0];
    const type = typeCell.getAttribute('data-type').split(' & ');

    const sensorMatch = sensorFilters.length === 0 || sensorFilters.some(filter => type.includes(filter));
    const otherMatch = otherFilters.length === 0 || otherFilters.includes(typeCell.getAttribute('data-type'));

    row.style.display = sensorMatch || otherMatch ? '' : 'none';
  });
}
</script>
