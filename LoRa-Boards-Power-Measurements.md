---
layout: default
title: LoRa Boards Power Measurements
---

# LoRa Boards Power Measurements

## Power Measured on Meshtastic Firmware 2.4.3 from 3.7V battery (Not USB)

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
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>
        <th>Heltec Vision Master T190</th>
        <th>Heltec Mesh Node T114</th>
        <th>T-Deck</th>
        <th>RAK nRF52840</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Transmitting</td>
        <td>?</td><!--Heltec V2-->
        <td>?</td><!--Heltec V3-->
        <td>195mA</td><!--Wireless Paper-->
        <td>187mA</td><!--Wireless Stick Lite-->
        <td>?</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>176mA</td><!--VME290-->
        <td>?</td><!--VMET190-->
        <td>?</td><!--T114-->
        <td>?</td><!--T-Deck-->
        <td>?</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Standby (Screen On)</td>
        <td>55.7mA</td><!--Heltec V2-->
        <td>110mA</td><!--Heltec V3-->
        <td>105mA</td><!--Wireless Paper-->
        <td>101.5mA</td><!--Wireless Stick Lite-->
        <td>163mA</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>110mA</td><!--VME290-->
        <td>128mA</td><!--VMET190-->
        <td>20.4mA</td><!--T114-->
        <td>140mA</td><!--T-Deck-->
        <td>-</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Standby (Bluetooth Off)</td>
        <td>44.1mA</td><!--Heltec V2-->
        <td>61.5mA</td><!--Heltec V3-->
        <td>57.7mA</td><!--Wireless Paper-->
        <td>36mA</td><!--Wireless Stick Lite-->
        <td>115mA</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>62mA</td><!--VME290-->
        <td>82.4mA</td><!--VMET190-->
        <td>20.1mA</td><!--T114-->
        <td>96.6mA</td><!--T-Deck-->
        <td>6.9mA</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Standby (Screen Off)</td>
        <td>53.2mA</td><!--Heltec V2-->
        <td>103.6mA</td><!--Heltec V3-->
        <td>105mA</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>144mA</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>110mA</td><!--VME290-->
        <td>114mA</td><!--VMET190-->
        <td>9.3mA</td><!--T114-->
        <td>113mA</td><!--T-Deck-->
        <td>7mA</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Standby (Bluetooth & Screen Off)</td>
        <td>41.5mAmA</td><!--Heltec V2-->
        <td>55.5mA</td><!--Heltec V3-->
        <td>57.7mA</td><!--Wireless Paper-->
        <td>36mA</td><!--Wireless Stick Lite-->
        <td>99mA</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>62mA</td><!--VME290-->
        <td>66.9mA</td><!--VMET190-->
        <td>9.2</td><!--T114-->
        <td>70mA</td><!--T-Deck-->
        <td>6.9mA</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Lite Sleep (Power Save Mode)</td>
        <td>13.8mA</td><!--Heltec V2-->
        <td>11.4mA</td><!--Heltec V3-->
        <td>11.8</td><!--Wireless Paper-->
        <td>10mA</td><!--Wireless Stick Lite-->
        <td>53mA</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>11.2mA</td><!--VME290-->
        <td>16.7mA</td><!--VMET190-->
        <td>?</td><!--T114-->
        <td>27.3mA</td><!--T-Deck-->
        <td>7mA</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Deep Sleep (Soft Shutdown)</td>
        <td>2.77mA</td><!--Heltec V2-->
        <td>45μA</td><!--Heltec V3-->
        <td>19μA</td><!--Wireless Paper-->
        <td>38μA</td><!--Wireless Stick Lite-->
        <td>20μA</td><!--Wireless Tracker-->
        <td>?</td><!--VME213-->
        <td>16μA</td><!--VME290-->
        <td>163μA</td><!--VMET190-->
        <td>1mA</td><!--T114-->
        <td>39.8mA</td><!--T-Deck-->
        <td>5μA</td><!--RAKRAK19007-->
      </tr>
      <tr>
        <td>Brownout Voltage</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td>2.8V</td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--VMET190-->
        <td></td><!--T114-->
        <td></td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
      </tr>
    </tbody>
  </table>
</div>

## Previous Measurements

<details>
  <summary>Power Measured on Meshtastic Firmware 2.3.10 from 3.7V battery (Not USB)</summary>
  
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
          <th>T-Deck</th>
          <th>RAK nRF52840</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Transmitting</td>
          <td>163mA</td><!--Heltec V2-->
          <td>267mA</td><!--Heltec V3-->
          <td>263mA</td><!--Wireless Paper-->
          <td>261mA</td><!--Wireless Stick Lite-->
          <td>332mA</td><!--Wireless Tracker-->
          <td>?</td><!--Capsule Sensor V3-->
          <td>226mA</td><!--VME213-->
          <td>162mA</td><!--T-Deck-->
          <td>88mA</td><!--RAKRAK19007-->
        </tr>
        <tr>
          <td>Standby (Screen On)</td>
          <td>57mA</td><!--Heltec V2-->
          <td>110mA</td><!--Heltec V3-->
          <td>101mA</td><!--Wireless Paper-->
          <td>N/A</td><!--Wireless Stick Lite-->
          <td>168mA</td><!--Wireless Tracker-->
          <td>?</td><!--Capsule Sensor V3-->
          <td>110mA</td><!--VME213-->
          <td>138mA</td><!--T-Deck-->
          <td>N/A</td><!--RAKRAK19007-->
        </tr>
        <tr>
          <td>Standby (Bluetooth Off)</td>
          <td>?</td><!--Heltec V2-->
          <td>43mA</td><!--Heltec V3-->
          <td>?</td><!--Wireless Paper-->
          <td>?</td><!--Wireless Stick Lite-->
          <td>?</td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td>?</td><!--VME213-->
          <td>?</td><!--T-Deck-->
          <td>?</td><!--RAKRAK19007-->
        </tr>
        <tr>
          <td>Standby (Screen Off)</td>
          <td>54mA</td><!--Heltec V2-->
          <td>103mA</td><!--Heltec V3-->
          <td>101mA</td><!--Wireless Paper-->
          <td>104.5mA</td><!--Wireless Stick Lite-->
          <td>148mA</td><!--Wireless Tracker-->
          <td>?</td><!--Capsule Sensor V3-->
          <td></td><!--VME213-->
          <td>113mA</td><!--T-Deck-->
          <td>12mA</td><!--RAKRAK19007-->
        </tr>
        <tr>
          <td>Lite Sleep (Power Save Mode)</td>
          <td>14mA</td><!--Heltec V2-->
          <td>11mA</td><!--Heltec V3-->
          <td>12.3mA</td><!--Wireless Paper-->
          <td>11.8mA</td><!--Wireless Stick Lite-->
          <td>55mA</td><!--Wireless Tracker-->
          <td>?</td><!--Capsule Sensor V3-->
          <td></td><!--VME213-->
          <td>29mA</td><!--T-Deck-->
          <td>7mA</td><!--RAKRAK19007-->
        </tr>
        <tr>
          <td>Deep Sleep (Soft Shutdown)</td>
          <td>2.68mA</td><!--Heltec V2-->
          <td>34μA</td><!--Heltec V3-->
          <td>16μA</td><!--Wireless Paper-->
          <td>30μA</td><!--Wireless Stick Lite-->
          <td>22μA</td><!--Wireless Tracker-->
          <td>?</td><!--Capsule Sensor V3-->
          <td></td><!--VME213-->
          <td>Has Power Switch</td><!--T-Deck-->
          <td>2μA</td><!--RAKRAK19007-->
        </tr>
      </tbody>
    </table>
  </div>
</details>
