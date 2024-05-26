# Meshtastic-Experiments
Just my own measurements and values
# Your Project Name

## Compare Devices

<div style="overflow-x: auto;">
  <table id="comparison-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>
          <select id="device1" onchange="updateComparison()">
            <option value="Heltec ESP32 V2">Heltec ESP32 V2</option>
            <option value="Heltec ESP32 V3">Heltec ESP32 V3</option>
            <option value="Heltec Wireless Paper">Heltec Wireless Paper</option>
            <option value="Wireless Stick Lite V3">Wireless Stick Lite V3</option>
            <option value="Heltec Wireless Tracker">Heltec Wireless Tracker</option>
            <option value="Heltec Capsule Sensor V3">Heltec Capsule Sensor V3</option>
            <option value="T-Deck">T-Deck</option>
            <option value="RAK Micro Controller Unit">RAK Micro Controller Unit</option>
          </select>
        </th>
        <th>
          <select id="device2" onchange="updateComparison()">
            <option value="Heltec ESP32 V2">Heltec ESP32 V2</option>
            <option value="Heltec ESP32 V3">Heltec ESP32 V3</option>
            <option value="Heltec Wireless Paper">Heltec Wireless Paper</option>
            <option value="Wireless Stick Lite V3">Wireless Stick Lite V3</option>
            <option value="Heltec Wireless Tracker">Heltec Wireless Tracker</option>
            <option value="Heltec Capsule Sensor V3">Heltec Capsule Sensor V3</option>
            <option value="T-Deck">T-Deck</option>
            <option value="RAK Micro Controller Unit">RAK Micro Controller Unit</option>
          </select>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ESP32 Chip</td>
        <td id="device1-chip">ESP32-D0</td>
        <td id="device2-chip">ESP32-S3</td>
      </tr>
      <tr>
        <td>LoRa Node Chip</td>
        <td id="device1-lora">SX1276</td>
        <td id="device2-lora">SX1262</td>
      </tr>
      <tr>
        <td>GPS Chip</td>
        <td id="device1-gps">-</td>
        <td id="device2-gps">-</td>
      </tr>
      <tr>
        <td>GNSS Chip</td>
        <td id="device1-gnss">-</td>
        <td id="device2-gnss">-</td>
      </tr>
      <tr>
        <td>USB Socket</td>
        <td id="device1-usb">Micro USB</td>
        <td id="device2-usb">USB Type C</td>
      </tr>
      <tr>
        <td>Meshtastic - Transmitting</td>
        <td id="device1-transmit">163mA</td>
        <td id="device2-transmit">267mA</td>
      </tr>
      <tr>
        <td>Meshtastic - Standby (Screen On)</td>
        <td id="device1-standby-on">57mA</td>
        <td id="device2-standby-on">104mA</td>
      </tr>
      <tr>
        <td>Meshtastic - Standby (Screen Off)</td>
        <td id="device1-standby-off">54mA</td>
        <td id="device2-standby-off">100mA</td>
      </tr>
      <tr>
        <td>Meshtastic Lite Sleep (Power Save Mode)</td>
        <td id="device1-sleep">14mA</td>
        <td id="device2-sleep">11mA</td>
      </tr>
      <tr>
        <td>Meshtastic Deep Sleep (Soft Shutdown)</td>
        <td id="device1-deep-sleep">2.68mA</td>
        <td id="device2-deep-sleep">34uA</td>
      </tr>
      <tr>
        <td>Low Power Features in Deep Sleep</td>
        <td id="device1-low-power">800uA</td>
        <td id="device2-low-power">&lt;10uA</td>
      </tr>
      <tr>
        <td>Frequency</td>
        <td id="device1-frequency">470~510MHz, 863~928MHz</td>
        <td id="device2-frequency">470~510MHz, 863~928MHz</td>
      </tr>
      <tr>
        <td>Max. TX Power</td>
        <td id="device1-tx-power">19dB ± 1dB</td>
        <td id="device2-tx-power">21±1dBm</td>
      </tr>
      <tr>
        <td>Max. Receiving Sensitivity</td>
        <td id="device1-receive-sensitivity">-135 dBm</td>
        <td id="device2-receive-sensitivity">-136dBm@SF12 BW=125KHz</td>
      </tr>
      <tr>
        <td>Wi-Fi</td>
        <td id="device1-wifi">802.11 b/g/n, up to 150Mbps</td>
        <td id="device2-wifi">802.11 b/g/n, up to 150Mbps</td>
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td id="device1-bluetooth">Bluetooth V4.2 BR/EDR and Bluetooth (LE)</td>
        <td id="device2-bluetooth">Bluetooth 5 (LE)</td>
      </tr>
      <tr>
        <td>Display Type</td>
        <td id="device1-display-type">OLED</td>
        <td id="device2-display-type">OLED</td>
      </tr>
      <tr>
        <td>Display Size</td>
        <td id="device1-display-size">0.96-inch</td>
        <td id="device2-display-size">0.96-inch</td>
      </tr>
      <tr>
        <td>Charging IC</td>
        <td id="device1-charging-ic">TP4054</td>
        <td id="device2-charging-ic">TP4054</td>
      </tr>
      <tr>
        <td>Diagram</td>
        <td id="device1-diagram"><a href="#">Schematics Link</a></td>
        <td id="device2-diagram"><a href="#">Schematics Link</a></td>
      </tr>
      <tr>
        <td>Input</td>
        <td id="device1-input">-</td>
        <td id="device2-input">-</td>
      </tr>
      <tr>
        <td>Price Range USD</td>
        <td id="device1-price">$15.47+</td>
        <td id="device2-price">$17.90 - $19.90</td>
      </tr>
    </tbody>
  </table>
</div>

<script>
  const devices = {
    "Heltec ESP32 V2": {
      chip: "ESP32-D0",
      lora: "SX1276",
      gps: "-",
      gnss: "-",
      usb: "Micro USB",
      transmit: "163mA",
      standbyOn: "57mA",
      standbyOff: "54mA",
      sleep: "14mA",
      deepSleep: "2.68mA",
      lowPower: "800uA",
      frequency: "470~510MHz, 863~928MHz",
      txPower: "19dB ± 1dB",
      receiveSensitivity: "-135 dBm",
      wifi: "802.11 b/g/n, up to 150Mbps",
      bluetooth: "Bluetooth V4.2 BR/EDR and Bluetooth (LE)",
      displayType: "OLED",
      displaySize: "0.96-inch",
      chargingIC: "TP4054",
      diagram: "Schematics Link",
      input: "-",
      price: "$15.47+"
    },
    "Heltec ESP32 V3": {
      chip: "ESP32-S3",
      lora: "SX1262",
      gps: "-",
      gnss: "-",
      usb: "USB Type C",
      transmit: "267mA",
      standbyOn: "104mA",
      standbyOff: "100mA",
      sleep: "11mA",
      deepSleep: "34uA",
      lowPower: "<10uA",
      frequency: "470~510MHz, 863~928MHz",
      txPower: "21±1dBm",
      receiveSensitivity: "-136dBm@SF12 BW=125KHz",
      wifi: "802.11 b/g/n, up to 150Mbps",
      bluetooth: "Bluetooth 5 (LE)",
      displayType: "OLED",
      displaySize: "0.96-inch",
      chargingIC: "TP4054",
      diagram: "Schematics Link",
      input: "-",
      price: "$17.90 - $19.90"
    },
    // Add other devices similarly
  };

  function updateComparison() {
    const device1 = document.getElementById('device1').value;
    const device2 = document.getElementById('device2').value;

    document.getElementById('device1-chip').innerText = devices[device1].chip;
    document.getElementById('device2-chip').innerText = devices[device2].chip;

    document.getElementById('device1-lora').innerText = devices[device1].lora;
    document.getElementById('device2-lora').innerText = devices[device2].lora;

    document.getElementById('device1-gps').innerText = devices[device1].gps;
    document.getElementById('device2-gps').innerText = devices[device2].gps;

    document.getElementById('device1-gnss').innerText = devices[device1].gnss;
    document.getElementById('device2-gnss').innerText = devices[device2].gnss;

    document.getElementById('device1-usb').innerText = devices[device1].usb;
    document.getElementById('device2-usb').innerText = devices[device2].usb;

    document.getElementById('device1-transmit').innerText = devices[device1].transmit;
    document.getElementById('device2-transmit').innerText = devices[device2].transmit;

    document.getElementById('device1-standby-on').innerText = devices[device1].standbyOn;
    document.getElementById('device2-standby-on').innerText = devices[device2].standbyOn;

    document.getElementById('device1-standby-off').innerText = devices[device1].standbyOff;
    document.getElementById('device2-standby-off').innerText = devices[device2].standbyOff;

    document.getElementById('device1-sleep').innerText = devices[device1].sleep;
    document.getElementById('device2-sleep').innerText = devices[device2].sleep;

    document.getElementById('device1-deep-sleep').innerText = devices[device1].deepSleep;
    document.getElementById('device2-deep-sleep').innerText = devices[device2].deepSleep;

    document.getElementById('device1-low-power').innerText = devices[device1].lowPower;
    document.getElementById('device2-low-power').innerText = devices[device2].lowPower;

    document.getElementById('device1-frequency').innerText = devices[device1].frequency;
    document.getElementById('device2-frequency').innerText = devices[device2].frequency;

    document.getElementById('device1-tx-power').innerText = devices[device1].txPower;
    document.getElementById('device2-tx-power').innerText = devices[device2].txPower;

    document.getElementById('device1-receive-sensitivity').innerText = devices[device1].receiveSensitivity;
    document.getElementById('device2-receive-sensitivity').innerText = devices[device2].receiveSensitivity;

    document.getElementById('device1-wifi').innerText = devices[device1].wifi;
    document.getElementById('device2-wifi').innerText = devices[device2].wifi;

    document.getElementById('device1-bluetooth').innerText = devices[device1].bluetooth;
    document.getElementById('device2-bluetooth').innerText = devices[device2].bluetooth;

    document.getElementById('device1-display-type').innerText = devices[device1].displayType;
    document.getElementById('device2-display-type').innerText = devices[device2].displayType;

    document.getElementById('device1-display-size').innerText = devices[device1].displaySize;
    document.getElementById('device2-display-size').innerText = devices[device2].displaySize;

    document.getElementById('device1-charging-ic').innerText = devices[device1].chargingIC;
    document.getElementById('device2-charging-ic').innerText = devices[device2].chargingIC;

    document.getElementById('device1-diagram').innerHTML = `<a href="#">${devices[device1].diagram}</a>`;
    document.getElementById('device2-diagram').innerHTML = `<a href="#">${devices[device2].diagram}</a>`;

    document.getElementById('device1-input').innerText = devices[device1].input;
    document.getElementById('device2-input').innerText = devices[device2].input;

    document.getElementById('device1-price').innerText = devices[device1].price;
    document.getElementById('device2-price').innerText = devices[device2].price;
  }

  document.addEventListener('DOMContentLoaded', updateComparison);
</script>
