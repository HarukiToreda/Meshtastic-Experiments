# Runtime Comparison Under Different Conditions

## Experiment #1 - Factory Settings

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Factory Settings.</li>
    <li>Client Mode</li>
    <li>Frequency 906</li>
    <li>Connected to a phone via Bluetooth.</li>
  </ul>
  <p>Use case: Mobile Node/ Remote Node.</p>
</details>
<details open>
  <summary style="cursor: pointer;">Results:</summary>
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
          <td></td><!--Heltec V2-->
          <td>30 Hrs</td><!--Heltec V3-->
          <td>29 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td></td><!--T-Deck-->
          <td></td><!--RAK-->
        </tr>
      </tbody>
    </table>
  </div>
</details>

---

## Experiment #2 - Best Power Saving Settings for Mobile Node/ Remote Node 

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</a></summary>
        <ul>
          <li>Note that RAK devices cannot support this mode.</li>
          <li>Power save mode is enabled to extend battery life, it does this by enabling Lite Sleep on ESP32 devices when there's no traffic on the mesh.</li>
          <li>The node will still retransmit any packets while on Lite Sleep and go back to sleep after.</li>
          <li>The Node will wake from Lite Sleep when activity is detected on the mesh, when button is pressed or when sleep duration setting is reached.</li>
          <li>During Lite sleep, the Bluetooth will go on Sleep Mode, making the node draw very low currents. But you will not be able to change settings with the app in this mode.</li>
          <li>After the node is awake. It will automatically reconnect to the app and notify if any messages have been received. You can change settings when this happens.</li>
        </ul>
      </details>
    </li>
    <li>Lite Sleep Duration: 1800 sec (30min)
      <details>
        <summary style="cursor: pointer;">Details:</a></summary>
        <ul>
          <li>This setting tells the node how long to maintain Lite Sleep for, this way you can time when you can reconnect to remote nodes with the app should you need to change settings.</li>
        </ul>
      </details>
    </li>
    <li>Frequency 906</li>
    <li>Connected to a phone via Bluetooth.</li>
  </ul>
  <p>Use case: Mobile Node/ Remote Node.</p>
  </details>
<details open>
  <summary style="cursor: pointer;">Results:</summary>
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
          <td></td><!--Heltec V2-->
          <td>in progress 43 Hrs</td><!--Heltec V3-->
          <td>95 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td></td><!--T-Deck-->
          <td></td><!--RAK-->
        </tr>
      </tbody>
    </table>
  </div>
</details>

---

## Experiment #3 - Best Power Saving Settings for Standalone Nodes 

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</a></summary>
        <ul>
          <li>Note that RAK devices cannot support this mode.</li>
          <li>Power save mode is enabled to extend battery life, it does this by enabling Lite Sleep on ESP32 devices when there's no traffic on the mesh.</li>
          <li>The node will still retransmit any packets while on Lite Sleep and go back to sleep after.</li>
          <li>The Node will wake from Lite Sleep when activity is detected on the mesh, when button is pressed or when sleep duration setting is reached.</li>
          <li>During Lite sleep, the Bluetooth will go on Sleep Mode, making the node draw very low currents. But you will not be able to change settings with the app in this mode.</li>
          <li>After the node is awake. It will automatically reconnect to the app and notify if any messages have been received. You can change settings when this happens.</li>
        </ul>
      </details>
    </li>
    <li>Lite Sleep Duration: 1800 sec (30min)
      <details>
        <summary style="cursor: pointer;">Details:</a></summary>
        <ul>
          <li>This setting tells the node how long to maintain Lite Sleep for, this way you can time when you can reconnect to remote nodes with the app should you need to change settings.</li>
        </ul>
      </details>
    </li>
    <li>Frequency 906</li>
    <li>Connected to a phone via Bluetooth.</li>
    <li>CardKB Attached (Tdeck Comes with its own keyboard)</li>
  </ul>
  <p>Use case: Mobile Node/ Standalone</p>
</details>
<details open>
  <summary style="cursor: pointer;">Results:</summary>
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
          <td></td><!--Heltec V2-->
          <td></td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td></td><!--RAK-->
        </tr>
        <tr>
          <td>3000mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td></td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td></td><!--RAK-->
        </tr>
        <tr>
          <td>4000mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td>89 Hrs</td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td>312 Hrs</td><!--RAK-->
        </tr>
      </tbody>
    </table>
  </div>
</details>
