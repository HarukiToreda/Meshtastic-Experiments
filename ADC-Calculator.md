---
layout: default
title: ADC Calculator
---

# ADC Calculator

## Overview

Meshtastic uses an ADC multiplier to convert raw readings into battery voltage and percentage. Because different boards reach different maximum charge voltages, the displayed percentage or voltage may not be accurate.  
This page provides two calculators, each serving a different purpose.

---

## Calculator 1: Adjust percentage to show 100 percent

Some boards never reach 4.20 volts and may stop around 4.15 volts. Meshtastic still treats 4.20 volts as a full battery, so the percentage may display below 100 percent even when the battery is fully charged.

This calculator adjusts the ADC multiplier so that your board’s actual maximum charge voltage is treated as “full,” allowing the battery percentage to reach 100 percent.

Use this if your priority is having the percentage display reflect a full charge.

---

## Calculator 2: Calibrate to show the true voltage

This calculator is used to correct the voltage shown by the device.  
Measure the battery voltage with a multimeter, compare it to the voltage displayed on the screen, and enter both values along with the current multiplier. The calculator will generate an adjusted ADC multiplier that produces an accurate voltage reading.

Use this if your priority is accurate voltage readings.  
Boards that charge below 4.20 volts may still show less than 100 percent after calibration. This is normal.

---

## Calibration Process

The calibration process uses a simple formula to adjust the ADC multiplier based on the battery voltage. Here’s a detailed breakdown:

1. Determine the target ADC value. The target value for a full battery (100 percent charge) is 4.19 volts.  
2. Adjust the ADC multiplier so Meshtastic treats the actual battery voltage as full.  
3. Apply the formula:

<pre>
New ADC Multiplier = Current ADC Multiplier × (4.19 / Battery Voltage)
</pre>

<details>
  <summary><strong>Example Calculation:</strong></summary>

  <table>
    <tr>
      <td>Initial Condition:</td>
      <td>Your device shows 3.82 volts using a current ADC multiplier of 2.</td>
    </tr>
    <tr>
      <td>Formula:</td>
      <td>New ADC Multiplier = 2 × (4.19 / 3.82)</td>
    </tr>
    <tr>
      <td>Ratio:</td>
      <td>4.19 / 3.82 ≈ 1.097</td>
    </tr>
    <tr>
      <td>Result:</td>
      <td>2 × 1.097 = 2.194</td>
    </tr>
    <tr>
      <td>Update:</td>
      <td>Set the new ADC multiplier (2.194) in your device configuration.</td>
    </tr>
  </table>
</details>

---

### ADC Calculator Form

<div>
  <table>
    <tr>
      <td>Device:</td>
      <td>
        <select id="deviceSelect" onchange="updateAdcMultiplier()"></select>
      </td>
    </tr>
    <tr>
      <td>Battery Voltage (V):</td>
      <td><input type="text" id="batteryVoltage" /></td>
    </tr>
    <tr>
      <td>Current ADC Multiplier:</td>
      <td><input type="text" id="operativeAdcMultiplier" /></td>
    </tr>
    <tr>
      <td>Calculated New Operative ADC Multiplier:</td>
      <td><input type="text" id="newOperativeAdcMultiplier" disabled /></td>
    </tr>
    <tr>
      <td></td>
      <td><button class="button button--outline button--lg cta--button" onclick="calculateNewMultiplier()">Calculate</button></td>
    </tr>
  </table>
</div>

---

<script>
// Shared device list (single source of truth)
const DEVICE_DATA = {
  chatter2: { multiplier: 5.0 },
  diy: { multiplier: 1.85 },
  "esp32-s3-pico": { multiplier: 3.1 },
  "heltec_v1/v2": { multiplier: 3.2 },
  heltec_v3: { multiplier: 5.1205, measured: 4.15 },
  heltec_wsl_v3: { multiplier: 5.1205 },
  heltec_wireless_paper: { multiplier: 2.0 },
  heltec_wireless_tracker: { multiplier: 4.9 },
  heltec_T114: { multiplier: 4.916, measured: 4.15 },
  lora_isp4520: { multiplier: 1.436 },
  m5stack_coreink: { multiplier: 5.0 },
  "nano-g1-explorer": { multiplier: 2.0 },
  "nano-g2-ultra": { multiplier: 2.0 },
  "picomputer-s3": { multiplier: 3.1 },
  rak4631: { multiplier: 1.73 },
  rpipico: { multiplier: 3.1 },
  rpipicow: { multiplier: 3.1 },
  "station-g1": { multiplier: 6.45 },
  "station-g2": { multiplier: 4.0 },
  tlora_v2_1_16: { multiplier: 2.0 },
  tlora_v2_1_18: { multiplier: 2.11 },
  tlora_t3s3_v1: { multiplier: 2.11 },
  "t-deck": { multiplier: 2.11 },
  "t-echo": { multiplier: 2.0 }
};

// Populate dropdowns
function populateDropdown(selectElement, includeMeasured = false) {
  selectElement.innerHTML = '<option value="">Choose</option>';
  Object.keys(DEVICE_DATA).forEach(device => {
    const opt = document.createElement("option");
    opt.value = device;
    opt.textContent = device;

    if (includeMeasured && DEVICE_DATA[device].measured !== undefined) {
      opt.setAttribute("data-measured", DEVICE_DATA[device].measured);
    }

    selectElement.appendChild(opt);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateDropdown(document.getElementById("deviceSelect"));
  document.querySelectorAll(".deviceSelect").forEach(drop =>
    populateDropdown(drop, true)
  );
});

// Calculator 1
function updateAdcMultiplier() {
  const device = document.getElementById('deviceSelect').value;
  if (DEVICE_DATA[device]) {
    document.getElementById('operativeAdcMultiplier').value = DEVICE_DATA[device].multiplier;
  }
}

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
</script>

---

### Voltage Measurement Calculator

## This calculator is used to correct the voltage shown by the device.

Measure the battery voltage with a multimeter, compare it to the voltage displayed on the screen, and enter both values along with the current multiplier. The calculator will generate an adjusted ADC multiplier that produces an accurate voltage reading.

<div>
  <table id="measurementTable">
    <thead>
      <tr>
        <th>Device</th>
        <th>Max Charge Voltage (Multimeter)</th>
        <th>Displayed Voltage (Screen)</th>
        <th>Manual ADC Multiplier</th>
        <th>Adjusted ADC Multiplier</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><select class="deviceSelect" onchange="updateManualMultiplier(this)"></select></td>
        <td><input type="text" class="measuredVoltage"></td>
        <td><input type="text" class="displayedVoltage"></td>
        <td><input type="text" class="manualMultiplier"></td>
        <td><input type="text" class="adjustedMultiplier" disabled></td>
      </tr>
    </tbody>
  </table>

  <button class="button button--outline button--lg cta--button" onclick="calculateTableMultipliers()">Calculate</button>
</div>

<script>
// Calculator 2
function updateManualMultiplier(dropdown) {
  const device = dropdown.value;
  const row = dropdown.closest('tr');

  const manualMultiplierField = row.querySelector('.manualMultiplier');
  const measuredField = row.querySelector('.measuredVoltage');

  if (DEVICE_DATA[device]) {
    manualMultiplierField.value = DEVICE_DATA[device].multiplier;

    if (DEVICE_DATA[device].measured !== undefined) {
      measuredField.value = DEVICE_DATA[device].measured;
    }
  }
}

function calculateTableMultipliers() {
  const rows = document.querySelectorAll('#measurementTable tbody tr');

  rows.forEach(row => {
    const measuredVoltage = parseFloat(row.querySelector('.measuredVoltage').value);
    const displayedVoltage = parseFloat(row.querySelector('.displayedVoltage').value);
    const manualMultiplier = parseFloat(row.querySelector('.manualMultiplier').value);

    if (
      isNaN(measuredVoltage) || measuredVoltage <= 0 ||
      isNaN(displayedVoltage) || displayedVoltage <= 0 ||
      isNaN(manualMultiplier) || manualMultiplier <= 0
    ) {
      row.querySelector('.adjustedMultiplier').value = 'Invalid Input';
      return;
    }

    const adjustedMultiplier =
      manualMultiplier * (measuredVoltage / displayedVoltage);

    row.querySelector('.adjustedMultiplier').value = adjustedMultiplier.toFixed(3);
  });
}
</script>
