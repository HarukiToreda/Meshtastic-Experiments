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
      <input type="checkbox" class="gpsFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="gpsFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Screen:</label>
    <div>
      <input type="checkbox" class="screenFilter" value="OLED"> OLED<br>
      <input type="checkbox" class="screenFilter" value="Eink"> Eink<br>
      <input type="checkbox" class="screenFilter" value="TFT"> TFT<br>
      <input type="checkbox" class="screenFilter" value="None"> None<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>WiFi:</label>
    <div>
      <input type="checkbox" class="wifiFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="wifiFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Bluetooth:</label>
    <div>
      <input type="checkbox" class="bluetoothFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="bluetoothFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Touch Screen:</label>
    <div>
      <input type="checkbox" class="touchFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="touchFilter" value="No"> No<br>
    </div>
  </div>
  <div style="margin-right: 20px;">
    <label>Keyboard:</label>
    <div>
      <input type="checkbox" class="keyboardFilter" value="Yes"> Yes<br>
      <input type="checkbox" class="keyboardFilter" value="No"> No<br>
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
        <th>RAK RAK19007</th>        
        <th>T-Deck</th>
        <th>T-Echo</th>
        <th>T-Beam</th>            
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MCU Chip</td>
        <td data-mcu="ESP32" data-lora="SX1276" data-gps="No" data-screen="OLED" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-D0</td><!--Heltec V2-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="OLED" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3</td><!--Heltec V3-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Eink" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3FN8</td><!--Wireless Paper-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3</td><!--Wireless Stick Lite-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-screen="TFT" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3FN8</td><!--Wireless Tracker-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="Yes" data-screen="None" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3FN8</td><!--Capsule Sensor V3-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Eink" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3R8</td><!--Vision Master E213-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="Eink" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-S3R8</td><!--Vision Master E290-->
        <td data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="None" data-wifi="No" data-bluetooth="Yes" data-touch="No" data-keyboard="No">NRF52840</td><!--RAKRAK19007-->
        <td data-mcu="ESP32" data-lora="SX1262" data-gps="No" data-screen="LCD" data-wifi="Yes" data-bluetooth="Yes" data-touch="Yes" data-keyboard="Yes">ESP32-S3</td><!--T-Deck-->
        <td data-mcu="nRF" data-lora="SX1262" data-gps="Yes" data-screen="Eink" data-wifi="No" data-bluetooth="Yes" data-touch="No" data-keyboard="No">NRF52840</td><!--T-Echo-->
        <td data-mcu="nRF" data-lora="SX1262" data-gps="No" data-screen="OLED" data-wifi="Yes" data-bluetooth="Yes" data-touch="No" data-keyboard="No">ESP32-D0WDQ6-V3</td><!--T-Beam-->        
      </tr>
      <tr>
        <td>LoRa Chip</td>
        <td>SX1276 SX1278</td><!--Heltec V2-->
        <td>SX1262</td><!--Heltec V3-->
        <td>SX1262</td><!--Wireless Paper-->
        <td>SX1262</td><!--Wireless Stick Lite-->
        <td>SX1262</td><!--Wireless Tracker-->
        <td>SX1262</td><!--Capsule Sensor V3-->
        <td>SX1262</td><!--Vision Master E213-->
        <td>SX1262</td><!--Vision Master E290-->
        <td>SX1262</td><!--RAKRAK19007-->
        <td>SX1262</td><!--T-Deck-->
        <td>SX1262</td><!--T-Echo-->
        <td>SX1276 SX1278</td><!--T-Beam-->        
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
        <td>N/A</td><!--RAKRAK19007-->
        <td>N/A</td><!--T-Deck-->
        <td>N/A</td><!--T-Echo-->
        <td>NEO-6M/M8N</td><!--T-Beam-->
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
        <td>N/A</td><!--RAKRAK19007-->        
        <td>N/A</td><!--T-Deck-->
        <td>L76k</td><!--T-Echo-->
        <td>N/A</td><!--T-Beam-->        
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
        <td>USB-C</td><!--RAKRAK19007-->        
        <td>USB-C</td><!--T-Deck-->
        <td>USB-C</td><!--T-Echo-->
        <td>Micro USB</td><!--T-Beam-->
      </tr>
      <tr>
        <td>Deep Sleep</td>
        <td>800μA</td><!--Heltec V2-->
        <td>&lt;10μA</td><!--Heltec V3-->
        <td>20μA</td><!--Wireless Paper-->
        <td>&lt;10μA</td><!--Wireless Stick Lite-->
        <td>15μA</td><!--Wireless Tracker-->
        <td>25μA</td><!--Capsule Sensor V3-->
        <td>18μA</td><!--Vision Master E213-->
        <td>20μA</td><!--Vision Master E290-->
        <td>2μA</td><!--RAKRAK19007-->        
        <td>N/A</td><!--T-Deck-->
        <td>0.25 mA</td><!--T-Echo-->
        <td>?</td><!--T-Beam-->                
      </tr>
      <tr>
        <td>Frequency</td>
        <td>470~510 MHz, 863~928 MHz</td><!--Heltec V2-->
        <td>470~510 MHz, 863~928 MHz</td><!--Heltec V3-->
        <td>470~510 MHz, 863~928 MHz</td><!--Wireless Paper-->
        <td>470~510 MHz, 863~928 MHz</td><!--Wireless Stick Lite-->
        <td>470~510 MHz, 863~928 MHz</td><!--Wireless Tracker-->
        <td>470~510 MHz, 863~928 MHz</td><!--Capsule Sensor V3-->
        <td>470~510 MHz, 863~928 MHz</td><!--Vision Master E213-->
        <td>470~510 MHz, 863~928 MHz</td><!--Vision Master E290-->
        <td>470~510 MHz, 863~928 MHz</td><!--RAKRAK19007-->        
        <td>470~510 MHz, 863~928 MHz</td><!--T-Deck-->
        <td>470~510 MHz, 863~928 MHz</td><!--T-Echo-->
        <td>470~510 MHz, 863~928 MHz</td><!--T-Beam-->        
      </tr>
      <tr>
        <td>Max. TX Power</td>
        <td>19 ± 1dB</td><!--Heltec V2-->
        <td>21 ± 1dBm</td><!--Heltec V3-->
        <td>21 ± 1dBm</td><!--Wireless Paper-->
        <td>21 ± 1dBm</td><!--Wireless Stick Lite-->
        <td>21 ± 1dBm</td><!--Wireless Tracker-->
        <td>21 ± 1dBm</td><!--Capsule Sensor V3-->
        <td>21 ± 1dBm</td><!--Vision Master E213-->
        <td>21 ± 1dBm</td><!--Vision Master E290-->
        <td>22 ± 1dBm</td><!--RAKRAK19007-->
        <td>22 ± 1dBm</td><!--T-Deck-->
        <td>22 ± 1dBm</td><!--T-Echo-->
        <td>22 ± 1dBm</td><!--T-Beam-->        
      </tr>
      <tr>
        <td>Max. Receiving Sensitivity</td>
        <td>-148 dBm</td><!--Heltec V2-->
        <td>-136 dBm</td><!--Heltec V3-->
        <td>-134 dBm</td><!--Wireless Paper-->
        <td>-134 dBm</td><!--Wireless Stick Lite-->
        <td>-137 dBm</td><!--Wireless Tracker-->
        <td>-135 dBm</td><!--Capsule Sensor V3-->
        <td>-136 dBm</td><!--Vision Master E213-->
        <td>-136 dBm</td><!--Vision Master E290-->    
        <td>-136 dBm</td><!--RAKRAK19007-->        
        <td>-136 dBm</td><!--T-Deck-->
        <td>-136 dBm</td><!--T-Echo-->     
        <td>-148 dBm</td><!--T-Beam-->
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
        <td>802.11 b/g/n 150 Mbps</td><!--Vision Master E290-->
        <td>N/A</td><!--RAKRAK19007-->        
        <td>802.11 b/g/n 150 Mbps</td><!--T-Deck-->
        <td>N/A</td><!--T-Echo-->
        <td>802.11 b/g/n 150 Mbps</td><!--T-Beam-->        
      </tr>
      <tr>
        <td>Bluetooth</td>
        <td>BT-5 (LE)</td><!--Heltec V2-->
        <td>BT-5 (LE)</td><!--Heltec V3-->
        <td>BT-5 (LE)</td><!--Wireless Paper-->
        <td>BT-5 (LE)</td><!--Wireless Stick Lite-->
        <td>BT-5 (LE)</td><!--Wireless Tracker-->
        <td>BT-5 (LE)</td><!--Capsule Sensor V3-->
        <td>BT-5 (LE)</td><!--Vision Master E213-->
        <td>BT-5 (LE)</td><!--Vision Master E290-->
        <td>BT-5 (LE)</td><!--RAKRAK19007-->        
        <td>BT-5 (LE)</td><!--T-Deck-->
        <td>BT-5 (LE)</td><!--T-Echo-->
        <td>BT-4.2 (LE)</td><!--T-Beam-->        
      </tr>
      <tr>
        <td>Display Type</td>
        <td>OLED</td><!--Heltec V2-->
        <td>OLED</td><!--Heltec V3-->
        <td>E-ink</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>TFT</td><!--Wireless Tracker-->
        <td>N/A</td><!--Capsule Sensor V3-->
        <td>E-ink</td><!--Vision Master E213-->
        <td>E-ink</td><!--Vision Master E290-->
        <td>N/A</td><!--RAKRAK19007-->      
        <td>LCD</td><!--T-Deck-->
        <td>E-ink</td><!--T-Echo-->
        <td>OLED</td><!--T-Beam--> 
      </tr>
      <tr>
        <td>Display Size</td>
        <td>0.96 Inch</td><!--Heltec V2-->
        <td>0.96 Inch</td><!--Heltec V3-->
        <td>2.13 Inch</td><!--Wireless Paper-->
        <td>N/A</td><!--Wireless Stick Lite-->
        <td>0.96-inch</td><!--Wireless Tracker-->
        <td>N/A</td><!--Capsule Sensor V3-->
        <td>2.13 Inch</td><!--Vision Master E213-->
        <td>2.9 Inch</td><!--Vision Master E290-->
        <td>N/A</td><!--RAKRAK19007-->        
        <td>2.8 Inch</td><!--T-Deck-->
        <td>1.54 Inch</td><!--T-Echo-->
        <td>0.96 Inch</td><!--T-Beam-->      
      </tr>
      <tr>
        <td>Charging IC</td>
        <td>TP4054</td><!--Heltec V2-->
        <td>TP4054</td><!--Heltec V3-->
        <td>TP4054</td><!--Wireless Paper-->
        <td>TP4054</td><!--Wireless Stick Lite-->
        <td>TP4054</td><!--Wireless Tracker-->
        <td>TP4054</td><!--Capsule Sensor V3-->
        <td>TP4054</td><!--Vision Master E213-->
        <td>TP4054</td><!--Vision Master E290-->
        <td>TP4054</td><!--RAKRAK19007-->        
        <td>TP4054</td><!--T-Deck-->
        <td>TP4054</td><!--T-Echo-->
        <td>AXP192</td><!--T-Beam-->                
      </tr>
      <tr>
        <td>Diagram</td>
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32/V2.1/WIFI_LoRa_32_V2.1(868-915).PDF">Diagram Link</a></td><!--Heltec V2-->
        <td><a href="https://resource.heltec.cn/download/WiFi_LoRa_32_V3/HTIT-WB32LA(F)_V3.1_Schematic_Diagram.pdf">Diagram Link</a></td><!--Heltec V3-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Paper/Wireless_Paper_V0.4_Schematic_Diagram.pdf">Diagram Link</a></td><!--Wireless Paper-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Stick_Lite_V3/HTIT-WSL_V3_Schematic_Diagram.pdf">Diagram Link</a></td><!--Wireless Stick Lite-->
        <td><a href="https://resource.heltec.cn/download/Wireless_Tracker/Wireless_Tacker1.1/HTIT-Tracker_V0.5.pdf">Diagram Link</a></td><!--Wireless Tracker-->
        <td><a href="https://resource.heltec.cn/download/Heltec%20Capsule%20Sensor%20V3/Capsule_Main_Esp32_Schematic_Diagram.pdf">Diagram Link</a></td><!--Capsule Sensor V3-->
        <td><a href="https://resource.heltec.cn/download/HT-VME213/HT-VME213%20Schematic%20Diagram.pdf">Diagram Link</a></td><!--Vision Master E213-->
        <td><a href="https://resource.heltec.cn/download/HT-VME290/HT-VME290%20Schematic_Diagram.pdf">Diagram Link</a></td><!--Vision Master E290-->     
        <td><a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Datasheet/#hardware">Diagram Link</a></td><!--RAKRAK19007-->        
        <td><a href="https://github.com/Xinyuan-LilyGO/T-Deck/blob/master/schematic/schematic.pdf">Diagram Link</a></td><!--T-Deck-->
        <td><a href="https://github.com/Xinyuan-LilyGO/T-Echo/blob/main/T-Echo_Schematic.pdf">Diagram Link</a></td><!--T-Echo-->
        <td><a href="https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/schematic/LilyGo_TBeam_V1.2.pdf">Diagram Link</a></td><!--T-Beam-->              
      </tr>
      <tr>
        <td>Input</td>
        <td>User Button, Reset Button</td><!--Heltec V2-->
        <td>User Button, Reset Button</td><!--Heltec V3-->
        <td>User Button, Reset Button</td><!--Wireless Paper-->
        <td>User Button, Reset Button</td><!--Wireless Stick Lite-->
        <td>User Button, Reset Button</td><!--Wireless Tracker-->
        <td>User Button, Reset Button</td><!--Capsule Sensor V3-->
        <td>User Button, Reset Button, 3rd Button</td><!--Vision Master E213-->
        <td>User Button, Reset Button, 3rd Button</td><!--Vision Master E290-->
        <td>Reset Button</td><!--RAKRAK19007-->        
        <td>Touch Screen, Keyboard, trackball, Reset Button</td><!--T-Deck-->
        <td>User Button, Reset Button, Touch Button</td><!--T-Echo-->
        <td>User Button, Reset Button, Power Button</td><!--T-Beam-->        
      </tr>
      <tr>
        <td>Price Range USD</td>
        <td>$15.47+</td><!--Heltec V2-->
        <td>$17.90</td><!--Heltec V3-->
        <td>$15.90</td><!--Wireless Paper-->
        <td>$14.90</td><!--Wireless Stick Lite-->
        <td>$22.90</td><!--Wireless Tracker-->
        <td>$25.99</td><!--Capsule Sensor V3-->
        <td>$19.90</td><!--Vision Master E213-->
        <td>$20.90</td><!--Vision Master E290-->
        <td>$36.97</td><!--RAKRAK19007-->
        <td>$52.66</td><!--T-Deck-->
        <td>$54.41</td><!--T-Echo-->
        <td>$32.80</td><!--T-Beam-->        
      </tr>
    </tbody>
  </table>
</div>

<script>
document.querySelectorAll('.mcuFilter, .loraFilter, .gpsFilter, .screenFilter, .wifiFilter, .bluetoothFilter, .touchFilter, .keyboardFilter').forEach(filter => {
  filter.addEventListener('change', filterTable);
});

function filterTable() {
  const mcuFilters = Array.from(document.querySelectorAll('.mcuFilter:checked')).map(cb => cb.value);
  const loraFilters = Array.from(document.querySelectorAll('.loraFilter:checked')).map(cb => cb.value);
  const gpsFilters = Array.from(document.querySelectorAll('.gpsFilter:checked')).map(cb => cb.value);
  const screenFilters = Array.from(document.querySelectorAll('.screenFilter:checked')).map(cb => cb.value);
  const wifiFilters = Array.from(document.querySelectorAll('.wifiFilter:checked')).map(cb => cb.value);
  const bluetoothFilters = Array.from(document.querySelectorAll('.bluetoothFilter:checked')).map(cb => cb.value);
  const touchFilters = Array.from(document.querySelectorAll('.touchFilter:checked')).map(cb => cb.value);
  const keyboardFilters = Array.from(document.querySelectorAll('.keyboardFilter:checked')).map(cb => cb.value);

  const columns = document.querySelectorAll('#comparisonTable thead th');
  const rows = document.querySelectorAll('#comparisonTable tbody tr');

  function shouldDisplayColumn(columnIndex) {
    const mcuCell = rows[0].children[columnIndex];
    const loraCell = rows[1].children[columnIndex];
    const gpsCell = rows[2].children[columnIndex];

    const mcuMatch = mcuFilters.length === 0 || mcuFilters.some(filter => mcuCell.getAttribute('data-mcu').includes(filter));
    const loraMatch = loraFilters.length === 0 || loraFilters.some(filter => loraCell.textContent.includes(filter));
    const gpsMatch = gpsFilters.length === 0 || (gpsFilters.includes('Yes') && (gpsCell.textContent !== 'N/A' || mcuCell.getAttribute('data-gps') === 'Yes')) || (gpsFilters.includes('No') && gpsCell.textContent === 'N/A');
    const screenMatch = screenFilters.length === 0 || screenFilters.includes(mcuCell.getAttribute('data-screen'));
    const wifiMatch = wifiFilters.length === 0 || wifiFilters.includes(mcuCell.getAttribute('data-wifi'));
    const bluetoothMatch = bluetoothFilters.length === 0 || bluetoothFilters.includes(mcuCell.getAttribute('data-bluetooth'));
    const touchMatch = touchFilters.length === 0 || touchFilters.includes(mcuCell.getAttribute('data-touch'));
    const keyboardMatch = keyboardFilters.length === 0 || keyboardFilters.includes(mcuCell.getAttribute('data-keyboard'));

    return mcuMatch && loraMatch && gpsMatch && screenMatch && wifiMatch && bluetoothMatch && touchMatch && keyboardMatch;
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
