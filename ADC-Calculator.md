---
layout: default
title: ADC Calculator
---

# ADC Calculator

## Understanding the Two Calculators

Meshtastic devices often do not charge batteries to the true chemistry maximum (4.20V). Some boards fully charge at lower voltages such as 4.15V, which can cause the displayed battery percentage or voltage to appear incorrect.

You may correct the behavior in two different ways:

- **100% Battery Display Calculator** — Adjusts the ADC multiplier so the device shows **100% when your battery reaches its actual full voltage**, even if that voltage is below 4.20V.
- **Accurate Voltage Calibration Calculator** — Adjusts the ADC multiplier so the **displayed voltage matches a multimeter reading**, providing true electrical accuracy.

These calculators solve different problems—choose the one that fits your needs.

---

# **100% Battery Display Calculator**
### Makes Meshtastic show 100% at your board’s actual max charge voltage  
Use this calculator if your device **never charges to 4.20V**, but you want the battery indicator to show **100% when it reaches its real maximum (e.g., 4.15V)**.

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
      <td>
        <button class="button button--outline button--lg cta--button"
                onclick="calculateNewMultiplier()">Calculate</button>
      </td>
    </tr>
  </table>
</div>

---

<script>
// Shared device list
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
    document.getElementById('operativeAdcMultiplier').value =
      DEVICE_DATA[device].multiplier;
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

  document.getElementById('newOperativeAdcMultiplier').value =
    newAdcMultiplier.toFixed(3);
}
</script>

---

# **Accurate Voltage Calibration Calculator**
### Makes the displayed voltage match your multimeter  
Use this calculator if you want **true electrical voltage accuracy**, even if the Meshtastic percentage ends up below 100%.  
(Example: A board that only charges to 4.15V may show ~97%.)

Measure the battery with a multimeter, enter what the device reports, and the calculator produces a corrected ADC multiplier.

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
        <td>
          <select class="deviceSelect" onchange="updateManualMultiplier(this)"></select>
        </td>
        <td><input type="text" class="measuredVoltage" placeholder="Measured Voltage"></td>
        <td><input type="text" class="displayedVoltage" placeholder="Displayed Voltage"></td>
        <td><input type="text" class="manualMultiplier" placeholder="Manual Multiplier"></td>
        <td><input type="text" class="adjustedMultiplier" disabled></td>
      </tr>
    </tbody>
  </table>

  <button class="button button--outline button--lg cta--button"
          onclick="calculateTableMultipliers()">Calculate</button>
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

    row.querySelector('.adjustedMultiplier').value =
      adjustedMultiplier.toFixed(3);
  });
}
</script>
