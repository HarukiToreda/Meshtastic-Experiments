---
layout: default
title: ADC Calculator
---

# ADC Calculator

## If you want to charge your battery to full and wish for the battery to display as 100% on the screen, then you can use this calculator. Just be aware that not all boards charge a battery to 4.2V so this calculator will not give you the true level that the battery is charged. 

Ratio of voltage divider for battery pin e.g. 3.20 (R1=100k, R2=220k)

Overrides the ADC_MULTIPLIER defined in the firmware device variant file for battery voltage calculation.

Should be set to a floating point value between 2 and 6

#### Calibration Process

The calibration process uses a simple formula to adjust the ADC multiplier based on the battery voltage. Here’s a detailed breakdown of how the calculation is done:

1. **Determine the target ADC value**: The target ADC value for a full battery (100% charge) is known, which is 4.19V.
2. **Adjust the ADC Multiplier**: The formula adjusts the current ADC multiplier to make sure that the device reads 100% charge when the battery voltage is 4.19V.
3. **Calculate the new ADC Multiplier**: The new ADC multiplier is calculated by the following formula:

New ADC Multiplier = Current ADC Multiplier × (4.19V / Battery Voltage at Current Multiplier)

---

### Shared ADC Device Dropdown Template

<template id="adcDeviceDropdown">
  <select class="adcDeviceSelect" onchange="updateAdcMultiplier(this)">
    <option value="" data-multiplier="Choose"></option>          
    <option value="chatter2" data-multiplier="5.0">chatter2</option>
    <option value="diy" data-multiplier="1.85">diy</option>
    <option value="esp32-s3-pico" data-multiplier="3.1">esp32-s3-pico</option>
    <option value="heltec_v1/v2" data-multiplier="3.2">heltec_v1/v2</option>
    <option value="heltec_v3" data-multiplier="5.1205">heltec_v3</option>
    <option value="heltec_wsl_v3" data-multiplier="5.1205">heltec_wsl_v3</option>
    <option value="heltec_wireless_paper" data-multiplier="2.0">heltec_wireless_paper</option>
    <option value="heltec_wireless_tracker" data-multiplier="4.9">heltec_wireless_tracker</option>
    <option value="lora_isp4520" data-multiplier="1.436">lora_isp4520</option>
    <option value="m5stack_coreink" data-multiplier="5.0">m5stack_coreink</option>
    <option value="nano-g1-explorer" data-multiplier="2.0">nano-g1-explorer</option>
    <option value="nano-g2-ultra" data-multiplier="2.0">nano-g2-ultra</option>
    <option value="picomputer-s3" data-multiplier="3.1">picomputer-s3</option>
    <option value="rak4631" data-multiplier="1.73">rak4631</option>
    <option value="rpipico" data-multiplier="3.1">rpipico</option>
    <option value="rpipicow" data-multiplier="3.1">rpipicow</option>
    <option value="station-g1" data-multiplier="6.45">station-g1</option>
    <option value="station-g2" data-multiplier="4.0">station-g1</option>
    <option value="tlora_v2_1_16" data-multiplier="2.0">tlora_v2_1_16</option>
    <option value="tlora_v2_1_18" data-multiplier="2.11">tlora_v2_1_18</option>
    <option value="tlora_t3s3_v1" data-multiplier="2.11">tlora_t3s3_v1</option>
    <option value="t-deck" data-multiplier="2.11">t-deck</option>
    <option value="t-echo" data-multiplier="2">t-echo</option>
  </select>
</template>

---

### ADC Calculator

<div>
  <Admonition type="info">
    <p>This calibration method only maps 4.19V to Battery Charge Percent 100%, and does not address the potential non-linearities of the ADC.</p>
  </Admonition>
  <table>
    <tr>
      <td>Device:</td>
      <td>
        <!-- Reuse the shared dropdown -->
        <div id="adcDeviceDropdownContainer1"></div>
      </td>
    </tr>
    <tr>
      <td>Battery Voltage (V):</td>
      <td><input type="text" id="batteryVoltage" value="" /></td>
    </tr>
    <tr>
      <td>Current ADC Multiplier:</td>
      <td><input type="text" id="operativeAdcMultiplier" value="" /></td>
    </tr>
    <tr>
      <td>Calculated New Operative ADC Multiplier:</td>
      <td><input type="text" id="newOperativeAdcMultiplier" value="" disabled="disabled" /></td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button class="button button--outline button--lg cta--button" onclick="calculateNewMultiplier()">Calculate</button>
      </td>
    </tr>
  </table>
</div>

---

### Voltage Measurement Table

<div>
  <table id="measurementTable">
    <thead>
      <tr>
        <th>Measured Voltage (Multimeter) [V]</th>
        <th>Displayed Voltage (Screen) [V]</th>
        <th>Manual ADC Multiplier</th>
        <th>Adjusted ADC Multiplier</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="text" class="measuredVoltage" placeholder="Measured Voltage"></td>
        <td><input type="text" class="displayedVoltage" placeholder="Displayed Voltage"></td>
        <td>
          <!-- Reuse the shared dropdown -->
          <div id="adcDeviceDropdownContainer2"></div>
        </td>
        <td><input type="text" class="adjustedMultiplier" placeholder="Adjusted Multiplier" disabled></td>
      </tr>
    </tbody>
  </table>
  <button class="button button--outline button--lg cta--button" onclick="calculateTableMultipliers()">Calculate</button>
</div>

---

### JavaScript Logic

<script>
  // Inject the shared ADC Device Dropdown in multiple places
  function injectDeviceDropdowns() {
    const dropdownTemplate = document.getElementById('adcDeviceDropdown').content;
    document.getElementById('adcDeviceDropdownContainer1').appendChild(dropdownTemplate.cloneNode(true));
    document.getElementById('adcDeviceDropdownContainer2').appendChild(dropdownTemplate.cloneNode(true));
  }

  // Updates the ADC Multiplier when the dropdown changes
  function updateAdcMultiplier(selectElement) {
    const multiplier = selectElement.options[selectElement.selectedIndex].getAttribute('data-multiplier');
    const inputField = selectElement.closest('tr').querySelector('.manualMultiplier') || document.getElementById('operativeAdcMultiplier');
    if (inputField) inputField.value = multiplier;
  }

  // Call the function to inject dropdowns when the page loads
  document.addEventListener('DOMContentLoaded', injectDeviceDropdowns);

  // Calculate for the ADC Calculator
  function calculateNewMultiplier() {
    const batteryVoltage = parseFloat(document.getElementById('batteryVoltage').value);
    const currentAdcMultiplier = parseFloat(document.getElementById('operativeAdcMultiplier').value);

    if (isNaN(batteryVoltage) || batteryVoltage <= 0 || isNaN(currentAdcMultiplier)) {
      alert("Please enter valid numbers.");
      return;
    }

    const targetVoltage = 4.19;
    const newAdcMultiplier = currentAdcMultiplier * (targetVoltage / batteryVoltage);
    document.getElementById('newOperativeAdcMultiplier').value = newAdcMultiplier.toFixed(3);
  }

  // Calculate for the Voltage Measurement Table
  function calculateTableMultipliers() {
    const rows = document.querySelectorAll('#measurementTable tbody tr');
    rows.forEach(row => {
      const measuredVoltage = parseFloat(row.querySelector('.measuredVoltage').value);
      const displayedVoltage = parseFloat(row.querySelector('.displayedVoltage').value);
      const manualMultiplier = parseFloat(row.querySelector('.manualMultiplier').value);

      if (isNaN(measuredVoltage) || measuredVoltage <= 0 || isNaN(displayedVoltage) || displayedVoltage <= 0 || isNaN(manualMultiplier) || manualMultiplier <= 0) {
        row.querySelector('.adjustedMultiplier').value = '';
        return;
      }

      const adjustedMultiplier = manualMultiplier * (measuredVoltage / displayedVoltage);
      row.querySelector('.adjustedMultiplier').value = adjustedMultiplier.toFixed(3);
    });
  }
</script>
