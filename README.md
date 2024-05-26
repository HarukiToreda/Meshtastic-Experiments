# Meshtastic-Experiments
Just my own measurements and values

## Devices Comparison (Based on information by suppliers)

<div style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Heltec ESP32 V2</th>
        <th>Heltec ESP32 V3</th>
        <th>Heltec Wireless Paper</th>
        <th>Wireless Stick Lite (V3)</th>
        <th>Heltec Wireless Tracker</th>
        <th>Heltec Capsule Sensor V3</th>
        <th>T-Deck</th>
        <th>RAK nRF52840</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MCU Chip</td>
        <td>ESP32-D0</td>
        <td>ESP32-S3</td>
        <td>ESP32-S3FN8</td>
        <td>ESP32-S3</td>
        <td>ESP32-S3FN8</td>
        <td>ESP32-S3FN8</td>
        <td>ESP32-S3FN16R8</td>
        <td>RAK4631</td>
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1276</td>
        <td>SX1262</td>
        <td>SX1262</td>
        <td>SX1262</td>
        <td>SX1262</td>
        <td>SX1262</td>
        <td>SX1262</td>
        <td>SX1262</td>
      </tr>
      <tr>
        <td>GPS Chip</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>UC6580</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>GNSS Chip</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>L76k</td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>USB Socket</td>
        <td>Micro USB</td>
        <td>USB-C</td>
        <td>USB-C</td>
        <td>USB-C</td>
        <td>USB-C</td>
        <td>Wireless Boot</td>
        <td>USB-C</td>
        <td>USB-C</td>
      </tr>
      <tr>
        <td>Deep Sleep</td>
        <td>800uA</td>
        <td>&lt;10uA</td>
        <td>20uA</td>
        <td>&lt;10uA</td>
        <td>15μA</td>
        <td>25μA</td>
        <td>N/A</td>
        <td>2μA</td>
      </tr>
      <tr>
        <td>Frequency</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
        <td>470~510 MHz, 863~928 MHz</td>
      </tr>
      <tr>
        <td>Max. TX Power</td>
        <td>19 ± 1dB</td>
        <td>21 ± 1dBm</td>
        <td>21 ± 1 dBm</td>
        <td>21 ± 1 dBm</td>
        <td>21 ± 1 dBm</td>
        <td>21 ± 1 dBm</td>
        <td>22 ± 1 dBm</td>
        <td>22 ± 1 dBm</td>
      </tr>
      <tr>
        <td>Max. Receiving Sensitivity</td>
        <td>-135 dBm</td>
        <td>-136 dBm</td>
        <td>-134 dBm</td>
        <td>-134 dBm</td>
        <td>-137dBm</td>
        <td>-135dBm</td>
        <td>?</td>
        <td>?</td>
      </tr>
      <tr>
        <td>Wi-Fi</td>
        <td>802.11 b/g/n 150M bps</td>
        <td>802.11 b/g/n 150 Mbps</td>
        <td>802.11 b/g/n 150 Mbps</td>
        <td>802.11 b/g/n 150 Mbps</td>
        <td>802.11 b/g/n 150 Mbps</td>
        <td>802.11 b/g/n 150 Mbps</td>
        <td>802.11 b/g/n 150 Mbps</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>Bluetooth 5 (LE)</td>
        <td>Bluetooth 5 (LE)</td>
        <td>Bluetooth 5 (LE)</td>
        <td>Bluetooth 5, Bluetooth mesh</td>
        <td>Bluetooth 5 (LE), Bluetooth mesh</td>
        <td>Bluetooth 5 (LE), Bluetooth mesh</td>
        <td>Bluetooth 5 (LE)</td>
        <td>Bluetooth 5 (LE)</td>
      </tr>
      <tr>
        <td>Display Type</td>
        <td>OLED</td>
        <td>OLED</td>
        <td>E-ink</td>
        <td>-</td>
        <td>TFT</td>
        <td>-</td>
        <td>LCD</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Display Size</td>
        <td>0.96 Inch</td>
        <td>0.96 Inch</td>
        <td>2.13 Inch</td>
        <td>N/A</td>
        <td>0.96-inch</td>
        <td>N/A</td>
        <td>2.8 Inch</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>Charging IC</td>
        <td>TP4054</td>
        <td>TP4054</td>
        <td>TP4054</td>
        <td>TP4054</td>
        <td>TP4054</td>
        <td>TP4054</td>
        <td>TP4054</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Diagram</td>
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WIFI_LoRa_32_V2.1(868-915).PDF">Diagram Link</a></td>
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32_V3/HTIT-WB32LA(F)_V3.1_Schematic_Diagram.pdf">Diagram Link</a></td>
        <td><a href="https://resource.heltec.cn/download/Wireless_Paper/Wireless_Paper_V0.4_Schematic_Diagram.pdf">Diagram Link</a></td>
        <td><a href="https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3_Schematic_Diagram.pdf">Diagram Link</a></td>
        <td><a href="https://resource.heltec.cn/download/Wireless_Tracker/Wireless_Tacker1.1/HTIT-Tracker_V0.5.pdf">Diagram Link</a></td>
        <td><a href="https://resource.heltec.cn/download/Heltec%20Capsule%20Sensor%20V3/Capsule_Main_Esp32_Schematic_Diagram.pdf">Diagram Link</a></td>
        <td><a href="https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf">Diagram Link</a></td>
        <td><a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Datasheet/#hardware">Diagram Link</a></td>
      </tr>
      <tr>
        <td>Input</td>
        <td>User Button, Reset Button</td>
        <td>User Button, Reset Button</td>
        <td>User Button, Reset Button</td>
        <td>User Button, Reset Button</td>
        <td>User Button, Reset Button</td>
        <td>User Button, Reset Button</td>
        <td>Touch Screen, Keyboard, trackball, Reset Button</td>
        <td>Reset Button</td>
      </tr>
      <tr>
        <td>Price Range USD</td>
        <td>$15.47+</td>
        <td>$17.90 - $19.90</td>
        <td>$15.90</td>
        <td>$14.90</td>
        <td>$19.90</td>
        <td>$25.99</td>
        <td>$52.66</td>
        <td>$36.97</td>
      </tr>
    </tbody>
  </table>
</div>

## Power Measured on Meshtastic Firmware 2.3.10

<div style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Heltec ESP32 V2</th>
        <th>Heltec ESP32 V3</th>
        <th>Heltec Wireless Paper</th>
        <th>Wireless Stick Lite (V3)</th>
        <th>Heltec Wireless Tracker</th>
        <th>Heltec Capsule Sensor V3</th>
        <th>T-Deck</th>
        <th>RAK nRF52840</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Transmitting</td>
        <td>163mA</td>
        <td>267mA</td>
        <td>263mA</td>
        <td>?</td>
        <td>332mA</td>
        <td>?</td>
        <td>162mA</td>
        <td>88mA</td>
      </tr>
      <tr>
        <td>Standby (Screen On)</td>
        <td>57mA</td>
        <td>104mA</td>
        <td>101mA</td>
        <td>?</td>
        <td>168mA</td>
        <td>?</td>
        <td>138mA</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>Standby (Screen Off)</td>
        <td>54mA</td>
        <td>100mA</td>
        <td>101mA</td>
        <td>?</td>
        <td>148mA</td>
        <td>?</td>
        <td>113mA</td>
        <td>12mA</td>
      </tr>
      <tr>
        <td>Lite Sleep (Power Save Mode)</td>
        <td>14mA</td>
        <td>11mA</td>
        <td>12.5mA</td>
        <td>?</td>
        <td>55mA</td>
        <td>?</td>
        <td>29mA</td>
        <td>7mA</td>
      </tr>
      <tr>
        <td>Deep Sleep (Soft Shutdown)</td>
        <td>2.68mA</td>
        <td>34uA</td>
        <td>18mA</td>
        <td>?</td>
        <td>22uA</td>
        <td>?</td>
        <td>Has Power Switch</td>
        <td>2μA</td>
      </tr>
    </tbody>
  </table>
</div>
