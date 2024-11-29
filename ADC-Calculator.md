<h3>Voltage Measurement Table</h3>
<table>
  <thead>
    <tr>
      <th>Measured Voltage (Multimeter) [V]</th>
      <th>Displayed Voltage (Screen) [V]</th>
      <th>Manual ADC Multiplier</th>
      <th>Adjusted ADC Multiplier</th>
    </tr>
  </thead>
  <tbody id="voltageTable">
    <!-- Rows will be dynamically added here -->
  </tbody>
</table>
<button onclick="addNewMeasurement()">Add Measurement</button>

<script>
  function addNewMeasurement() {
    var table = document.getElementById('voltageTable');
    var row = table.insertRow();

    var measuredCell = row.insertCell(0);
    var displayedCell = row.insertCell(1);
    var manualMultiplierCell = row.insertCell(2);
    var adjustedCell = row.insertCell(3);

    measuredCell.innerHTML = '<input type="text" class="measuredVoltage" placeholder="Enter measured voltage">';
    displayedCell.innerHTML = '<input type="text" class="displayedVoltage" placeholder="Enter displayed voltage">';
    manualMultiplierCell.innerHTML = '<input type="text" class="manualMultiplier" placeholder="Enter manual multiplier">';
    adjustedCell.innerHTML = '<input type="text" class="adjustedMultiplier" placeholder="Calculated multiplier" disabled>';

    // Add event listeners to dynamically calculate the adjusted multiplier
    measuredCell.querySelector('input').addEventListener('input', calculateRowMultiplier);
    displayedCell.querySelector('input').addEventListener('input', calculateRowMultiplier);
    manualMultiplierCell.querySelector('input').addEventListener('input', calculateRowMultiplier);
  }

  function calculateRowMultiplier(event) {
    var row = event.target.closest('tr');
    var measuredVoltage = parseFloat(row.querySelector('.measuredVoltage').value);
    var displayedVoltage = parseFloat(row.querySelector('.displayedVoltage').value);
    var manualMultiplier = parseFloat(row.querySelector('.manualMultiplier').value);

    // Ensure valid inputs for calculation
    if (isNaN(measuredVoltage) || measuredVoltage <= 0 || isNaN(displayedVoltage) || displayedVoltage <= 0 || isNaN(manualMultiplier) || manualMultiplier <= 0) {
      row.querySelector('.adjustedMultiplier').value = '';
      return;
    }

    // Adjusted multiplier calculation
    var adjustedMultiplier = manualMultiplier * (measuredVoltage / displayedVoltage);
    row.querySelector('.adjustedMultiplier').value = adjustedMultiplier.toFixed(3);
  }
</script>
