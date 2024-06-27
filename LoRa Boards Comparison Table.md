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
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>        
        <th>T-Deck</th>
        <th>RAK nRF52840</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MCU Chip</td>
        <td>ESP32-D0</td><!--Heltec V2-->
        <td>ESP32-S3</td><!--Heltec V3-->
        <td>ESP32-S3FN8</td><!--Wireless Paper-->
        <td>ESP32-S3</td><!--Wireless Stick Lite-->
        <td>ESP32-S3FN8</td><!--Wireless Tracker-->
        <td>ESP32-S3FN8</td><!--Capsule Sensor V3-->
        <td>ESP32-S3R8</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290--> 
        <td>ESP32-S3</td><!--T-Deck-->
        <td>RAK4631</td><!--RAKRAK19007-->
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
        <td>?</td><!--Vision Master E290-->         
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
        <td>?</td><!--Vision Master E290-->         
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
        <td>?</td><!--Vision Master E290-->         
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
        <td>?</td><!--Vision Master E290-->         
        <td>USB-C</td><!--T-Deck-->
        <td>USB-C</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Deep Sleep</td>
        <td>800μA</td><!--Heltec V2-->
        <td>&lt;10μA</td><!--Heltec V3-->
        <td>20μA</td><!--Wireless Paper-->
        <td>&lt;10μA</td><!--Wireless Stick Lite-->
        <td>15μA</td><!--Wireless Tracker-->
        <td>25μA</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>N/A</td><!--T-Deck-->
        <td>2μA</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Frequency</td>
        <td>470~510 MHz, 863~928 MHz</td><!--Heltec V2-->
        <td>470~510 MHz, 863~928 MHz</td><!--Heltec V3-->
        <td>470~510 MHz, 863~928 MHz</td><!--Wireless Paper-->
        <td>470~510 MHz, 863~928 MHz</td><!--Wireless Stick Lite-->
        <td>470~510 MHz, 863~928 MHz</td><!--Wireless Tracker-->
        <td>470~510 MHz, 863~928 MHz</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>470~510 MHz, 863~928 MHz</td><!--T-Deck-->
        <td>470~510 MHz, 863~928 MHz</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Max. TX Power</td>
        <td>19 ± 1dB</td><!--Heltec V2-->
        <td>21 ± 1dBm</td><!--Heltec V3-->
        <td>21 ± 1dBm</td><!--Wireless Paper-->
        <td>21 ± 1dBm</td><!--Wireless Stick Lite-->
        <td>21 ± 1dBm</td><!--Wireless Tracker-->
        <td>21 ± 1dBm</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>22 ± 1dBm</td><!--T-Deck-->
        <td>22 ± 1dBm</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Max. Receiving Sensitivity</td>
        <td>-135 dBm</td><!--Heltec V2-->
        <td>-136 dBm</td><!--Heltec V3-->
        <td>-134 dBm</td><!--Wireless Paper-->
        <td>-134 dBm</td><!--Wireless Stick Lite-->
        <td>-137 dBm</td><!--Wireless Tracker-->
        <td>-135 dBm</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>?</td><!--T-Deck-->
        <td>?</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Wi-Fi</td>
        <td>802.11 b/g/n 150M bps</td><!--Heltec V2-->
        <td>802.11 b/g/n 150 Mbps</td><!--Heltec V3-->
        <td>802.11 b/g/n 150 Mbps</td><!--Wireless Paper-->
        <td>802.11 b/g/n 150 Mbps</td><!--Wireless Stick Lite-->
        <td>802.11 b/g/n 150 Mbps</td><!--Wireless Tracker-->
        <td>802.11 b/g/n 150 Mbps</td><!--Capsule Sensor V3-->
        <td>802.11 b/g/n 150 Mbps</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>802.11 b/g/n 150 Mbps</td><!--T-Deck-->
        <td>N/A</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>BT-5 (LE)</td><!--Heltec V2-->
        <td>BT-5 (LE)</td><!--Heltec V3-->
        <td>BT-5 (LE)</td><!--Wireless Paper-->
        <td>BT-5, BT mesh</td><!--Wireless Stick Lite-->
        <td>BT-5 (LE), BT mesh</td><!--Wireless Tracker-->
        <td>BT-5 (LE), BT mesh</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>BT-5 (LE)</td><!--T-Deck-->
        <td>BT-5 (LE)</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Display Type</td>
        <td>OLED</td><!--Heltec V2-->
        <td>OLED</td><!--Heltec V3-->
        <td>E-ink</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>TFT</td><!--Wireless Tracker-->
        <td>N/A</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>LCD</td><!--T-Deck-->
        <td>N/A</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Display Size</td>
        <td>0.96 Inch</td><!--Heltec V2-->
        <td>0.96 Inch</td><!--Heltec V3-->
        <td>2.13 Inch</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>0.96-inch</td><!--Wireless Tracker-->
        <td>N/A</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>2.8 Inch</td><!--T-Deck-->
        <td>N/A</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Charging IC</td>
        <td>TP4054</td><!--Heltec V2-->
        <td>TP4054</td><!--Heltec V3-->
        <td>TP4054</td><!--Wireless Paper-->
        <td>TP4054</td><!--Wireless Stick Lite-->
        <td>TP4054</td><!--Wireless Tracker-->
        <td>TP4054</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>TP4054</td><!--T-Deck-->
        <td>-</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Diagram</td>
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WIFI_LoRa_32_V2.1(868-915).PDF">Diagram Link</a></td><!--Heltec V2-->
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32_V3/HTIT-WB32LA(F)_V3.1_Schematic_Diagram.pdf">Diagram Link</a></td><!--Heltec V3-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Paper/Wireless_Paper_V0.4_Schematic_Diagram.pdf">Diagram Link</a></td><!--Wireless Paper-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3_Schematic_Diagram.pdf">Diagram Link</a></td><!--Wireless Stick Lite-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Tracker/Wireless_Tacker1.1/HTIT-Tracker_V0.5.pdf">Diagram Link</a></td><!--Wireless Tracker-->
        <td><a href="https://resource.heltec.cn/download/Heltec%20Capsule%20Sensor%20V3/Capsule_Main_Esp32_Schematic_Diagram.pdf">Diagram Link</a></td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td><a href="https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf">Diagram Link</a></td><!--T-Deck-->
        <td><a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Datasheet/#hardware">Diagram Link</a></td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Input</td>
        <td>User Button, Reset Button</td><!--Heltec V2-->
        <td>User Button, Reset Button</td><!--Heltec V3-->
        <td>User Button, Reset Button</td><!--Wireless Paper-->
        <td>User Button, Reset Button</td><!--Wireless Stick Lite-->
        <td>User Button, Reset Button</td><!--Wireless Tracker-->
        <td>User Button, Reset Button</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>Touch Screen, Keyboard, trackball, Reset Button</td><!--T-Deck-->
        <td>Reset Button</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Price Range USD</td>
        <td>$15.47+</td><!--Heltec V2-->
        <td>$17.90 - $19.90</td><!--Heltec V3-->
        <td>$15.90</td><!--Wireless Paper-->
        <td>$14.90</td><!--Wireless Stick Lite-->
        <td>$19.90</td><!--Wireless Tracker-->
        <td>$25.99</td><!--Capsule Sensor V3-->
        <td>?</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>$52.66</td><!--T-Deck-->
        <td>$36.97</td><!--RAKRAK19007-->
      </tr>
    </tbody>
  </table>
</div>

### Storage

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
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>        
        <th>T-Deck</th>
        <th>RAK nRF52840</th>
      </tr>
    </thead>
    <tbody>      
      <tr>
        <td>Memory ROM</td>
        <td>?</td><!--Heltec V2-->
        <td>384KB ROM</td><!--Heltec V3-->
        <td>384KB ROM</td><!--Wireless Paper-->
        <td>384KB ROM</td><!--Wireless Stick Lite-->
        <td>384KB ROM</td><!--Wireless Tracker-->
        <td>?</td><!--Capsule Sensor V3-->
        <td>384KB ROM</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>384KB ROM</td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Memory SRAM</td>
        <td>?</td><!--Heltec V2-->
        <td>512KB SRAM</td><!--Heltec V3-->
        <td>512KB SRAM</td><!--Wireless Paper-->
        <td>512KB SRAM</td><!--Wireless Stick Lite-->
        <td>512KB SRAM</td><!--Wireless Tracker-->
        <td>?</td><!--Capsule Sensor V3-->
        <td>512KB SRAM</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>512 KB SRAM</td><!--T-Deck-->
        <td>?</td><!--RAKRAK19007-->
      </tr>      
      <tr>
        <td>Memory RTC SRAM</td>
        <td>?</td><!--Heltec V2-->
        <td>16KB RTC SRAM</td><!--Heltec V3-->
        <td>16KB RTC SRAM</td><!--Wireless Paper-->
        <td>16KB RTC SRAM</td><!--Wireless Stick Lite-->
        <td>16KB RTC SRAM</td><!--Wireless Tracker-->
        <td>?</td><!--Capsule Sensor V3-->
        <td>16KB RTC SRAM</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>16KB RTC SRAM</td><!--T-Deck-->
        <td>?</td><!--RAKRAK19007-->
      </tr>      
      <tr>
        <td>Memory SiP Flash</td>
        <td>?</td><!--Heltec V2-->
        <td>8MB SiP Flash</td><!--Heltec V3-->
        <td>8MB SiP Flash</td><!--Wireless Paper-->
        <td>8MB SiP Flash</td><!--Wireless Stick Lite-->
        <td>8MB SiP Flash</td><!--Wireless Tracker-->
        <td>?</td><!--Capsule Sensor V3-->
        <td>8MB SiP Flash</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>N/A</td><!--T-Deck-->
        <td>?</td><!--RAKRAK19007-->
      </tr>     
      <tr>
        <td>Memory PSRAM</td>
        <td>?</td><!--Heltec V2-->
        <td>N/A</td><!--Heltec V3-->
        <td>N/A</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>N/A</td><!--Wireless Tracker-->
        <td>N/A</td><!--Capsule Sensor V3-->
        <td>8MB PSRAM</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>8MB PSRAM</td><!--T-Deck-->
        <td>?</td><!--RAKRAK19007-->
      </tr>           
      <tr>
        <td>Memory Flash</td>
        <td>?</td><!--Heltec V2-->
        <td>N/A</td><!--Heltec V3-->
        <td>N/A</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>N/A</td><!--Wireless Tracker-->
        <td>?</td><!--Capsule Sensor V3-->
        <td>128MB Flash</td><!--Vision Master E213-->
        <td>?</td><!--Vision Master E290-->         
        <td>16MB Flash</td><!--T-Deck-->
        <td>1024KB Flash</td><!--RAKRAK19007-->
      </tr>                 
    </tbody>
  </table>
</div>
