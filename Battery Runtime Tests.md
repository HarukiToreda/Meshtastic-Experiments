---
layout: default
title: Battery Runtime Tests
---
<html>
<head>
  <title>Battery Runtime Tests</title>
  <script>
    function updateProgress() {
      const startTimes = [
        { id: 'progress1', start: new Date('2024-07-15T11:42:00') }, // RAK Mini
        { id: 'progress2', start: new Date('2024-06-26T03:00:00') }, // RAK
        { id: 'progress3', start: new Date('2024-06-26T03:00:00') }, // RAK
        { id: 'progress4', start: new Date('2024-06-26T03:00:00') }, // RAK
        { id: 'progress5', start: new Date('2024-07-12T14:55:00') }, // V2       
        { id: 'progress6', start: new Date('2024-07-11T02:36:00') }, // V2 1100        
        { id: 'progress7', start: new Date('2024-07-11T03:00:00') }, // WSL V3
        { id: 'progress8', start: new Date('2024-07-09T22:25:00') }, // Tracker
        { id: 'progress9', start: new Date('2024-07-07T21:51:00') }  // Paper
      ];

      const currentDate = new Date();

      startTimes.forEach(item => {
        const diffInHours = Math.floor((currentDate - item.start) / (1000 * 60 * 60));
        document.getElementById(item.id).innerText = `Started ${diffInHours} hrs ago`;
      });
    }

    window.onload = updateProgress;
    setInterval(updateProgress, 3600000); // Update every hour
  </script>
</head>
<body>

<h1>Battery Runtime Tests</h1>
<p>Runtime Comparison Under Different Conditions</p>

<h2>Experiment #1 - Default Settings</h2>

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Firmware 2.3.12</li>    
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Disabled.</li>
    <li>Frequency 906</li>
    <li>Connected to Android phone via Bluetooth.</li>
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
          <th>Lilygo T-Deck</th>
          <th>RAK19007 (RAK4631)</th>
          <th>RAK19003 (RAK4631)</th>          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1100mAh Battery</td>
          <td>21 Hrs</td><!--Heltec V2-->
          <td>10 Hrs</td><!--Heltec V3-->
          <td>9 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td>9 Hrs</td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td>10 Hrs</td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td></td><!--RAKRAK19003-->
        </tr>
        <tr>
          <td>2000mAh Battery</td>
          <td>41 Hrs</td><!--Heltec V2-->
          <td>21 Hrs</td><!--Heltec V3-->
          <td>20 Hrs</td><!--Wireless Paper-->
          <td>20 Hrs</td><!--Wireless Stick Lite-->
          <td>13 Hrs</td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td>19 Hrs</td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td></td><!--RAKRAK19003-->
        </tr>
        <tr>
          <td>3000mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td>30 Hrs</td><!--Heltec V3-->
          <td>30 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td>19 Hrs</td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td>26 Hrs</td><!--T-Deck-->
          <td>442 Hrs</td><!--RAKRAK19007-->
          <td>453 Hrs</td><!--RAKRAK19003-->   
        </tr>
      </tbody>
    </table>
  </div>
</details>

<hr>

<h2>Experiment #2 - Best Power Saving Settings for Mobile Node/ Remote Node</h2>

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Firmware 2.3.12</li>       
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</summary>
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
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>This setting tells the node how long to maintain Lite Sleep for, this way you can time when you can reconnect to remote nodes with the app should you need to change settings.</li>
        </ul>
      </details>
    </li>
    <li>Frequency 906</li>
    <li>Connected to Android phone via Bluetooth.</li>
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
          <th>Lilygo T-Deck</th>
          <th>RAK19007 (RAK4631)</th>
          <th>RAK19003 (RAK4631)</th>      
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1100mAh Battery</td>
          <td>30 Hrs</td><!--Heltec V2-->
          <td>19 Hrs</td><!--Heltec V3-->
          <td>20 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td>21 Hrs</td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td></td><!--RAKRAK19003-->          
        </tr>
        <tr>
          <td>2000mAh Battery</td>
          <td>74 Hrs</td><!--Heltec V2-->
          <td>44 Hrs</td><!--Heltec V3-->
          <td>45 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td></td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td></td><!--RAKRAK19003-->   
        </tr>
        <tr>
          <td>3000mAh Battery</td>
          <td>119 Hrs</td><!--Heltec V2-->
          <td>80 Hrs</td><!--Heltec V3-->
          <td>95 Hrs</td><!--Wireless Paper-->
          <td></td><!--Wireless Stick Lite-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--Capsule Sensor V3-->
          <td>71 Hrs</td><!--T-Deck-->
          <td>442 Hrs</td><!--RAKRAK19007-->
          <td>453 Hrs</td><!--RAKRAK19003-->    
        </tr>
      </tbody>
    </table>
  </div>
</details>

<hr>

<h2>Experiment #3 - Best Power Saving Settings for Standalone Nodes</h2>

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Firmware 2.3.12</li>       
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</summary>
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
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>This setting tells the node how long to maintain Lite Sleep for, this way you can time when you can reconnect to remote nodes with the app should you need to change settings.</li>
        </ul>
      </details>
    </li>
    <li>Frequency 906</li>
    <li>Connected to Android phone via Bluetooth.</li>
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
          <th>Lilygo T-Deck</th>
          <th>RAK19007 (RAK4631)</th>
          <th>RAK19003 (RAK4631)</th>    
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1100mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td></td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td id="progress1">In Progress</td><!--RAKRAK19003-->   
        </tr>
        <tr>
          <td>2000mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td></td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td></td><!--RAKRAK19003-->   
        </tr>
        <tr>
          <td>3000mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td></td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td></td><!--RAKRAK19003-->   
        </tr>
        <tr>
          <td>4000mAh Battery</td>
          <td></td><!--Heltec V2-->
          <td>89 Hrs</td><!--Heltec V3-->
          <td></td><!--Wireless Tracker-->
          <td></td><!--T-Deck-->
          <td></td><!--RAKRAK19007-->
          <td>312 Hrs</td><!--RAKRAK19003-->   
        </tr>
      </tbody>
    </table>
  </div>
</details>

</body>
</html>
