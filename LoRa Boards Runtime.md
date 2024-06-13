# Runtime Comparison Under Different Conditions

## Experiment #1 - Factory Settings

<details>
  <summary>Experiment conditions:</summary>
  <ul>
    <li>Factory Settings.</li>
    <li>Client Mode</li>
    <li>Frequency 906</li>
    <li>Connected to a phone via Bluetooth.</li>
  </ul>
  <p>Use case: Mobile Node/ Remote Node.</p>
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
          <td>3000mAh Battery</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</details>

---

## Experiment #2 - Best Power Saving Settings for Mobile Node/ Remote Node 

<details>
  <summary>Experiment conditions:</summary>
  <ul>
    <li>Client Mode</li>
    <li>Power Savemode Enabled. (RAK Cannot do Power Save Mode)</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Lite Sleep Duration: 1800 sec (30min)</li>
    <li>Frequency 906</li>
    <li>Connected to a phone via Bluetooth.</li>
  </ul>
  <p>Use case: Mobile Node/ Remote Node.</p>
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
          <td>3000mAh Battery</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</details>

---

## Experiment #3 - Best Power Saving Settings for Standalone Nodes 

<details>
  <summary>Experiment conditions:</summary>
  <ul>
    <li>Client Mode</li>
    <li>Power Savemode Enabled. (RAK Cannot do Power Save Mode)</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Lite Sleep Duration: 1800 sec (30min)</li>
    <li>Frequency 906</li>
    <li>CardKB Attached (Tdeck Comes with its own keyboard)</li>
  </ul>
  <p>Use case: Mobile Node/ Standalone</p>
  <div style="overflow-x: auto;">
    <table>
      <thead>
        <tr>
          <th>Device</th>
          <th>Heltec ESP32 V2</th>
          <th>Heltec ESP32 V3</th>
          <th>Heltec Wireless Tracker</th>
          <th>T-Deck</th>
          <th>RAK nRF52840</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1100mAh Battery</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3000mAh Battery</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4000mAh Battery</td>
          <td></td>
          <td>89 Hrs</td>
          <td></td>
          <td></td>
          <td>312 Hrs</td>
        </tr>
      </tbody>
    </table>
  </div>
</details>
