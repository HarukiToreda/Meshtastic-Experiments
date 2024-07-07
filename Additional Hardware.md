---
layout: default
title: Hardware Comparison Table
---

# Hardware Comparison Table

## Filter Hardware

<div style="display: flex; flex-wrap: wrap;">
  <div style="margin-right: 20px;">
    <label>Type:</label>
    <div>
      <input type="checkbox" class="typeFilter" value="Temperature & Pressure"> Temperature & Pressure<br>
      <input type="checkbox" class="typeFilter" value="Temperature & Humidity"> Temperature & Humidity<br>
      <input type="checkbox" class="typeFilter" value="Temperature, Humidity & Pressure"> Temperature, Humidity & Pressure<br>
      <input type="checkbox" class="typeFilter" value="Temperature, Humidity, Pressure & Gas"> Temperature, Humidity, Pressure & Gas<br>
      <input type="checkbox" class="typeFilter" value="Weather Station"> Weather Station<br>
      <input type="checkbox" class="typeFilter" value="Current & Power"> Current & Power<br>
      <input type="checkbox" class="typeFilter" value="Pressure"> Pressure<br>
      <input type="checkbox" class="typeFilter" value="Temperature"> Temperature<br>
      <input type="checkbox" class="typeFilter" value="Weight"> Weight<br>
      <input type="checkbox" class="typeFilter" value="Motion"> Motion<br>
      <input type="checkbox" class="typeFilter" value="Ambient Light"> Ambient Light<br>
      <input type="checkbox" class="typeFilter" value="OLED Display"> OLED Display<br>
      <input type="checkbox" class="typeFilter" value="LCD Display"> LCD Display<br>
      <input type="checkbox" class="typeFilter" value="Real-Time Clock"> Real-Time Clock<br>
      <input type="checkbox" class="typeFilter" value="Input Module"> Input Module<br>
      <input type="checkbox" class="typeFilter" value="Magnetometer"> Magnetometer<br>
      <input type="checkbox" class="typeFilter" value="Particulate Matter Sensor"> Particulate Matter Sensor<br>
      <input type="checkbox" class="typeFilter" value="Accelerometer"> Accelerometer<br>
      <input type="checkbox" class="typeFilter" value="I/O Expander"> I/O Expander<br>
      <input type="checkbox" class="typeFilter" value="Motion Sensor"> Motion Sensor<br>
      <input type="checkbox" class="typeFilter" value="IMU"> IMU<br>
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
        <td data-type="Temperature & Pressure">Temperature & Pressure</td>
        <td>BMP085</td>
        <td>-40°C to 85°C, 300hPa to 1100hPa</td>
        <td>±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Barometric pressure and temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature & Pressure">Temperature & Pressure</td>
        <td>BMP280</td>
        <td>-40°C to 85°C, 300hPa to 1100hPa</td>
        <td>±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Barometric pressure and temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature & Humidity">Temperature & Humidity</td>
        <td>AHT10</td>
        <td>-40°C to 85°C, 0% to 100% RH</td>
        <td>±0.3°C, ±2% RH</td>
        <td>I2C</td>
        <td>Low power consumption, High precision temperature and humidity measurement</td>
      </tr>
      <tr>
        <td data-type="Current & Power">Current & Power</td>
        <td>INA219</td>
        <td>0-26V, 0-3.2A</td>
        <td>±0.5%</td>
        <td>I2C</td>
        <td>Measures current and voltage, Can calculate power, High-side measurement, High accuracy</td>
      </tr>
      <!-- Continue filling in the rows for the rest of the hardware -->
      <!-- Make sure each row has the appropriate data-type attribute -->
    </tbody>
  </table>
</div>

<script>
document.querySelectorAll('.typeFilter').forEach(filter => {
  filter.addEventListener('change', filterTable);
});

function filterTable() {
  const typeFilters = Array.from(document.querySelectorAll('.typeFilter:checked')).map(cb => cb.value);

  const rows = document.querySelectorAll('#comparisonTable tbody tr');

  rows.forEach(row => {
    const typeCell = row.children[0];
    const typeMatch = typeFilters.length === 0 || typeFilters.includes(typeCell.getAttribute('data-type'));
    row.style.display = typeMatch ? '' : 'none';
  });
}
</script>
