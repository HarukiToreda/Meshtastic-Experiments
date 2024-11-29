<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ADC Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f4f4f4;
    }
    input[type="text"] {
      width: 100%;
      padding: 6px;
      box-sizing: border-box;
    }
    button {
      padding: 8px 16px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>

<h1>ADC Calculator</h1>

<p>Ratio of voltage divider for battery pin e.g. 3.20 (R1=100k, R2=220k)</p>

<p>
  Overrides the ADC_MULTIPLIER defined in the firmware device variant file for battery voltage calculation.
  Should be set to a floating point value between 2 and 6.
</p>

<h2>Calibration Process</h2>
<ol>
  <li>Input the measured voltage using a multimeter and the displayed voltage from the screen.</li>
  <li>The system will calculate the new ADC multiplier automatically.</li>
  <li>Adjust the ADC multiplier in your device configuration to ensure accurate readings.</li>
</ol>

<h3>ADC Calculator</h3>
<div>
  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Battery Voltage (V)</th>
        <th>Current ADC Multiplier</th>
        <th>Calculated New ADC Multiplier</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <select id="deviceSelect" onchange="updateAdcMultiplier()">
            <option value="" data-multiplier="Choose"></option>          
            <option value="chatter2" data-multiplier="5.0">chatter2</option>
            <option value="diy" data-multiplier="1.85">diy</option>
            <option value="esp32-s3-pico" data-multiplier="3.1">esp32-s3-pico</option>
            <option value="heltec_v1" data-multiplier="3.2">heltec_v1</option>
            <option value="heltec_v2" data-multiplier="3.2">heltec_v2</option>
            <option value="heltec_v3" data-multiplier="5.1205">heltec_v3</option>
            <option value="rak4631" data-multiplier="1.73">rak4631</option>
          </select>
        </td>
        <td><input type="text" id="batteryVoltage" placeholder="Enter battery voltage"></td>
        <td><input type="text" id="operativeAdcMultiplier" disabled></td>
        <td><input type="text" id="newOperativeAdcMultiplier" disabled></td>
      </tr>
    </tbody>
  </table>
  <button onclick="calculateNewMultiplier()">Calculate</button>
</div>

<h3>Voltage Measurement Table</h3>
<table>
  <thead>
    <tr>
      <th>Measured Voltage (Multimeter) [V]</th>
      <th>Displayed Voltage (Screen) [V]</th>
      <th>Adjusted ADC Multiplier</th>
    </tr>
  </thead>
  <tbody id="voltageTable">
    <!-- Rows will be dynamically added here -->
  </tbody>
</table>
<button onclick="addNewMeasurement()">Add Measurement</button>

<script>
  function updateAdcMultiplier() {
    var select = document.getElementById('deviceSelect');
    var multiplier = select.options[select.selectedIndex].getAttribute('data-multiplier');
    document.getElementById('operativeAdcMultiplier').value = multiplier;
  }

  function calculateNewMultiplier() {
    var batteryVoltage = parseFloat(document.getElementById('batteryVoltage').value);
    var currentAdcMultiplier = parseFloat(document.getElementById('operativeAdcMultiplier').value);

    if (isNaN(batteryVoltage) || batteryVoltage <= 0 || isNaN(currentAdcMultiplier)) {
      alert("Please enter valid numbers.");
      return;
    }

    var targetVoltage = 4.19;
    var newAdcMultiplier = currentAdcMultiplier * (targetVoltage / batteryVoltage);

    document.getElementById('newOperativeAdcMultiplier').value = newAdcMultiplier.toFixed(3);
  }

  function addNewMeasurement() {
    var table = document.getElementById('voltageTable');
    var row = table.insertRow();

    var measuredCell = row.insertCell(0);
    var displayedCell = row.insertCell(1);
    var adjustedCell = row.insertCell(2);

    measuredCell.innerHTML = '<input type="text" class="measuredVoltage" placeholder="Enter measured voltage">';
    displayedCell.innerHTML = '<input type="text" class="displayedVoltage" placeholder="Enter displayed voltage">';
    adjustedCell.innerHTML = '<input type="text" class="adjustedMultiplier" placeholder="Calculated multiplier" disabled>';

    measuredCell.querySelector('input').addEventListener('input', calculateRowMultiplier);
    displayedCell.querySelector('input').addEventListener('input', calculateRowMultiplier);
  }

  function calculateRowMultiplier(event) {
    var row = event.target.closest('tr');
    var measuredVoltage = parseFloat(row.querySelector('.measuredVoltage').value);
    var displayedVoltage = parseFloat(row.querySelector('.displayedVoltage').value);

    if (isNaN(measuredVoltage) || measuredVoltage <= 0 || isNaN(displayedVoltage)) {
      return;
    }

    var currentMultiplier = measuredVoltage / displayedVoltage;
    row.querySelector('.adjustedMultiplier').value = currentMultiplier.toFixed(3);
  }
</script>

</body>
</html>
