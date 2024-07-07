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
      <input type="checkbox" class="typeFilter" value="Temperature"> Temperature<br>
      <input type="checkbox" class="typeFilter" value="Humidity"> Humidity<br>
      <input type="checkbox" class="typeFilter" value="Pressure"> Pressure<br>
      <input type="checkbox" class="typeFilter" value="Gas"> Gas<br>
      <input type="checkbox" class="typeFilter" value="Current & Power"> Current & Power<br>
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
        <td data-type="Temperature, Pressure">Temperature & Pressure</td>
        <td>BMP085</td>
        <td>-40°C to 85°C, 300hPa to 1100hPa</td>
        <td>±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Barometric pressure and temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature, Pressure">Temperature & Pressure</td>
        <td>BMP280</td>
        <td>-40°C to 85°C, 300hPa to 1100hPa</td>
        <td>±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Barometric pressure and temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature, Humidity">Temperature & Humidity</td>
        <td>AHT10</td>
        <td>-40°C to 85°C, 0% to 100% RH</td>
        <td>±0.3°C, ±2% RH</td>
        <td>I2C</td>
        <td>Low power consumption, High precision temperature and humidity measurement</td>
      </tr>
      <tr>
        <td data-type="Temperature, Humidity">Temperature & Humidity</td>
        <td>SHT4X</td>
        <td>-40°C to 125°C, 0% to 100% RH</td>
        <td>±0.2°C, ±1.8% RH</td>
        <td>I2C</td>
        <td>High accuracy temperature and humidity measurement, Fast response time</td>
      </tr>
      <tr>
        <td data-type="Temperature, Humidity">Temperature & Humidity</td>
        <td>SHT31</td>
        <td>-40°C to 125°C, 0% to 100% RH</td>
        <td>±0.3°C, ±2% RH</td>
        <td>I2C</td>
        <td>High accuracy temperature and humidity measurement, Fast response time</td>
      </tr>
      <tr>
        <td data-type="Temperature, Humidity">Temperature & Humidity</td>
        <td>SHTC3</td>
        <td>-40°C to 85°C, 0% to 100% RH</td>
        <td>±0.2°C, ±1.8% RH</td>
        <td>I2C</td>
        <td>High accuracy temperature and humidity measurement, Low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature, Humidity, Pressure">Temperature, Humidity & Pressure</td>
        <td>BME280</td>
        <td>-40°C to 85°C, 0% to 100% RH, 300hPa to 1100hPa</td>
        <td>±1°C, ±3% RH, ±1 hPa</td>
        <td>I2C, SPI</td>
        <td>Integrated temperature, humidity, and pressure sensor with high accuracy</td>
      </tr>
      <tr>
        <td data-type="Temperature, Humidity, Pressure, Gas">Temperature, Humidity, Pressure & Gas</td>
        <td>BME680</td>
        <td>-40°C to 85°C, 0% to 100% RH, 300hPa to 1100hPa, Gas 0-1000ppm</td>
        <td>±1°C, ±3% RH, ±1 hPa, ±15% Gas</td>
        <td>I2C</td>
        <td>Integrated gas sensor with temperature, humidity, and pressure measurement, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Weather Station">Weather Station</td>
        <td>DFRobotLark</td>
        <td>1-5 VOC Index</td>
        <td>±15%</td>
        <td>I2C</td>
        <td>Comprehensive weather station measuring wind speed, wind direction, temperature, humidity, and atmospheric pressure. High-quality internal sensors, precise and stable data. Data output in standard physical quantities, 16M storage space. Modular shell design allows expansion with additional sensors.</td>
      </tr>
      <tr>
        <td data-type="Current & Power">Current & Power</td>
        <td>INA219</td>
        <td>0-26V, 0-3.2A</td>
        <td>±0.5%</td>
        <td>I2C</td>
        <td>Measures current and voltage, Can calculate power, High-side measurement, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Current & Power">Current & Power</td>
        <td>INA260</td>
        <td>0-36V, 0-15A</td>
        <td>±0.02%</td>
        <td>I2C</td>
        <td>Measures current, power, voltage, High precision</td>
      </tr>
      <tr>
        <td data-type="Current & Power">Current & Power</td>
        <td>INA3221</td>
        <td>0-26V, 0-3.2A</td>
        <td>±0.5%</td>
        <td>I2C</td>
        <td>Measures current and voltage on three channels, Can calculate power for each channel, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Pressure">Pressure</td>
        <td>LPS22</td>
        <td>260hPa to 1260hPa</td>
        <td>±0.1 hPa</td>
        <td>I2C, SPI</td>
        <td>High resolution pressure sensor, Ultra-small size, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Temperature">Temperature</td>
        <td>MCP9808</td>
        <td>-40°C to 125°C</td>
        <td>±0.25°C</td>
        <td>I2C</td>
        <td>High accuracy temperature sensor with low power consumption</td>
      </tr>
      <tr>
        <td data-type="Temperature">Temperature</td>
        <td>MLX90632</td>
        <td>-20°C to 200°C</td>
        <td>±1°C</td>
        <td>I2C</td>
        <td>Infrared temperature sensor, Non-contact measurement, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Weight">Weight</td>
        <td>Nau7802</td>
        <td>0-80mV</td>
        <td>±0.001%</td>
        <td>I2C</td>
        <td>High precision weight sensor, Low noise, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Weight">Weight</td>
        <td>NAU7802</td>
        <td>0-80mV</td>
        <td>±0.001%</td>
        <td>I2C</td>
        <td>High precision weight sensor, Low noise, High accuracy</td>
      </tr>
      <tr>
        <td data-type="Motion">Motion</td>
        <td>RCWL9620</td>
        <td>Motion Detection</td>
        <td>N/A</td>
        <td>Digital</td>
        <td>Microwave motion sensor, High sensitivity, Long range detection</td>
      </tr>
      <tr>
        <td data-type="Ambient Light">Ambient Light</td>
        <td>OPT3001</td>
        <td>0.01 - 83,000 lux</td>
        <td>±0.01 lux</td>
        <td>I2C</td>
        <td>High sensitivity ambient light sensor, Wide dynamic range</td>
      </tr>
      <tr>
        <td data-type="Ambient Light">Ambient Light</td>
        <td>TSL2591</td>
        <td>188uLux to 88,000 Lux</td>
        <td>±1%</td>
        <td>I2C</td>
        <td>High sensitivity ambient light sensor, Wide dynamic range</td>
      </tr>
      <tr>
        <td data-type="Ambient Light">Ambient Light</td>
        <td>VEML7700</td>
        <td>0.0036 - 220,000 lux</td>
        <td>±0.0003 lux</td>
        <td>I2C</td>
        <td>High sensitivity ambient light sensor, Wide dynamic range</td>
      </tr>
      <tr>
        <td data-type="OLED Display">OLED Display</td>
        <td>SSD1306</td>
        <td>128x64 pixels</td>
        <td>High contrast</td>
        <td>I2C</td>
        <td>Low power consumption, Wide viewing angle</td>
      </tr>
      <tr>
        <td data-type="OLED Display">OLED Display</td>
        <td>SH1106</td>
        <td>128x64 pixels</td>
        <td>High contrast</td>
        <td>I2C</td>
        <td>Low power consumption, Wide viewing angle</td>
      </tr>
      <tr>
        <td data-type="LCD Display">LCD Display</td>
        <td>ST7567</td>
        <td>128x64 pixels</td>
        <td>High contrast</td>
        <td>I2C</td>
        <td>Low power consumption, High contrast</td>
      </tr>
      <tr>
        <td data-type="Real-Time Clock">Real-Time Clock</td>
        <td>RV3028</td>
        <td>Year 2000 to 2099</td>
        <td>±2 ppm</td>
        <td>I2C</td>
        <td>Battery backup, Timestamping</td>
      </tr>
      <tr>
        <td data-type="Real-Time Clock">Real-Time Clock</td>
        <td>PCF8563</td>
        <td>Year 1900 to 2099</td>
        <td>±5 ppm</td>
        <td>I2C</td>
        <td>Low power, Battery backup</td>
      </tr>
      <tr>
        <td data-type="Input Module">Input Module</td>
        <td>RAK14004</td>
        <td>4x4 Matrix Keypad</td>
        <td>N/A</td>
        <td>Digital</td>
        <td>16 buttons, Easy integration</td>
      </tr>
      <tr>
        <td data-type="Magnetometer">Magnetometer</td>
        <td>QMC6310</td>
        <td>±8 Gauss</td>
        <td>±1.2 µT</td>
        <td>I2C</td>
        <td>High sensitivity, Low power consumption</td>
      </tr>
      <tr>
        <td data-type="Magnetometer">Magnetometer</td>
        <td>QMC5883L</td>
        <td>±8 Gauss</td>
        <td>±1.2 µT</td>
        <td>I2C</td>
        <td>High sensitivity, Low power consumption</td>
      </tr>
      <tr>
        <td data-type="Particulate Matter Sensor">Particulate Matter Sensor</td>
        <td>PMSA0031</td>
        <td>0.3 to 10 µm</td>
        <td>±15%</td>
        <td>UART</td>
        <td>Measures PM1.0, PM2.5, PM10</td>
      </tr>
      <tr>
        <td data-type="Accelerometer">Accelerometer</td>
        <td>LIS3DH</td>
        <td>±16g</td>
        <td>±0.1g</td>
        <td>I2C</td>
        <td>Low power consumption, High sensitivity</td>
      </tr>
      <tr>
        <td data-type="I/O Expander">I/O Expander</td>
        <td>TCA9555</td>
        <td>8-bit</td>
        <td>N/A</td>
        <td>I2C</td>
        <td>16-channel I/O expansion</td>
      </tr>
      <tr>
        <td data-type="Motion Sensor">Motion Sensor</td>
        <td>RCWL9620</td>
        <td>Motion Detection</td>
        <td>N/A</td>
        <td>Digital</td>
        <td>High sensitivity, Low power consumption</td>
      </tr>
      <tr>
        <td data-type="IMU">IMU</td>
        <td>LSM6DS3</td>
        <td>±16g, ±2000dps</td>
        <td>±0.02°/s</td>
        <td>I2C</td>
        <td>6-axis IMU, Integrated temperature sensor</td>
      </tr>
      <tr>
        <td data-type="IMU">IMU</td>
        <td>QMI8658</td>
        <td>±16g, ±2000dps</td>
        <td>±0.5°C, ±0.1°/s</td>
        <td>I2C</td>
        <td>9-axis IMU, Low power consumption</td>
      </tr>
      <tr>
        <td data-type="IMU">IMU</td>
        <td>MPU6050</td>
        <td>±16g, ±2000dps</td>
        <td>±0.02°/s</td>
        <td>I2C</td>
        <td>6-axis IMU, Integrated temperature sensor</td>
      </tr>
      <tr>
        <td data-type="IMU">IMU</td>
        <td>BMX160</td>
        <td>±16g, ±2000dps</td>
        <td>±0.5°C, ±0.02°/s</td>
        <td>I2C</td>
        <td>9-axis IMU, Low power consumption</td>
      </tr>
      <!-- Add more rows as needed -->
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
    const types = typeCell.getAttribute('data-type').split(',').map(type => type.trim());
    const typeMatch = typeFilters.length === 0 || typeFilters.every(filter => types.includes(filter));
    row.style.display = typeMatch ? '' : 'none';
  });
}
</script>
