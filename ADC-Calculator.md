---
layout: default
title: ADC Calculator
---

# ADC Calculator

## If you want to charge your battery to full and wish for the battery to display as 100 percent on the screen, then you can use this calculator. Just be aware that not all boards charge a battery to 4.2V so this calculator will not give you the true level that the battery is charged.

Ratio of voltage divider for battery pin e.g. 3.20 (R1=100k, R2=220k)

Overrides the ADC_MULTIPLIER defined in the firmware device variant file for battery voltage calculation.

Should be set to a floating point value between 2 and 6.

---

### Calibration Process

(Your original text remains exactly as-is...)

---

### ADC Calculator Form

<div>
  <table>
    <tr>
      <td>Device:</td>
      <td>
        <!-- Auto-generated dropdown -->
        <select id="deviceSelect" onchange="updateAdcMultiplier()"></select>
      </td>
    </tr>
    <tr>
      <td>Battery Voltage (V):</td>
      <td><input type="text" id="batteryVoltage" value=""></td>
    </tr>
    <tr>
      <td>Current ADC Multiplier:</td>
      <td><input type="text" id="operativeAdcMultiplier" value=""></td>
    </tr>
    <tr>
      <td>Calculated New Operative ADC Multiplier:</td>
      <td><input type="text" id="newOperativeAdcMultiplier" disabled></td>
    </tr>
    <tr>
      <td></td>
      <td><button onclick="calculateNewMultiplier()">Calculate</button></td>
    </tr>
  </table>
</div>

---

### Voltage Measurement Calculator

## If you want to display the real value of a battery on the screen and Mesh, use this calculator.

<div>
  <table id="measurementTable">
    <thead>
      <tr>
        <th>Device</th>
        <th>Measured Voltage</th>
        <th>Displayed Voltage</th>
        <th>Manual ADC Multiplier</th>
        <th>Adjusted ADC Multiplier</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <!-- Auto-generated dropdown -->
          <select class="deviceSelect" onchange="updateManualMultiplier(this)"></select>
        </td>
        <td><input class="measuredVoltage" placeholder="Measured Voltage"></td>
        <td><input class="displayedVoltage" placeholder="Displayed Voltage"></td>
        <td><input class="manualMultiplier" placeholder="Manual Multiplier"></td>
        <td><input class="adjustedMultiplier" disabled></td>
      </tr>
    </tbody>
  </table>

  <button onclick="calculateTableMultipliers()">Calculate</button>
</div>

<script>
// Shared device multipliers for both calculators
const DEVICE_DATA = {
  chatter2: 5.0,
  diy: 1.85,
  "esp32-s3-pico": 3.1,
  "heltec_v1/v2": 3.2,
  heltec_v3: 5.1205,
  heltec_wsl_v3: 5.1205,
  heltec_wireless_paper: 2.0,
  heltec_wireless_tracker: 4.9,
  heltec_T114: 4.916,
  lora_isp4520: 1.436,
  m5stack_coreink: 5.0,
  "nano-g1-explorer": 2.0,
  "nano-g2-ultra": 2.0,
  "picomputer-s3": 3.1,
  rak4631: 1.73,
  rpipico: 3.1,
  rpipicow: 3.1,
  "station-g1": 6.45,
  "station-g2": 4.0,
  tlora_v2_1_16: 2.0,
  tlora_v2_1_18: 2.11,
  tlora_t3s3_v1: 2.11,
  "t-deck": 2.11,
  "t-echo": 2.0
};

// -------- Auto-generate dropdowns --------

function populateDropdown(selectElement) {
  selectElement.innerHTML = '<option value="">Choose</option>';

  Object.keys(DEVICE_DATA).forEach(device => {
    const opt = document.createElement("option");
    opt.value = device;
    opt.textContent = device;
    selectElement.appendChild(opt);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateDropdown(document.getElementById("deviceSelect"));
  document.querySelectorAll(".deviceSelect").forEach(drop => populateDropdown(drop));
});

// -------- Calculator 1 --------

function updateAdcMultiplier() {
  const device = document.getElementById("deviceSelect").value;
  if (DEVICE_DATA[device] !== undefined) {
    document.getElementById("operativeAdcMultiplier").value = DEVICE_DATA[device];
  }
}

function calculateNewMultiplier() {
  const batteryVoltage = parseFloat(document.getElementById("batteryVoltage").value);
  const currentAdcMultiplier = parseFloat(document.getElementById("operativeAdcMultiplier").value);

  if (isNaN(batteryVoltage) || batteryVoltage <= 0 || isNaN(currentAdcMultiplier)) {
    alert("Please enter valid numbers.");
    return;
  }

  const targetVoltage = 4.19;
  const newAdcMultiplier = currentAdcMultiplier * (targetVoltage / batteryVoltage);
  document.getElementById("newOperativeAdcMultiplier").value = newAdcMultiplier.toFixed(3);
}

// -------- Calculator 2 --------

function updateManualMultiplier(dropdown) {
  const device = dropdown.value;
  const row = dropdown.closest("tr");

  const manualField = row.querySelector(".manualMultiplier");

  if (DEVICE_DATA[device] !== undefined) {
    manualField.value = DEVICE_DATA[device];
  }
}

function calculateTableMultipliers() {
  const rows = document.querySelectorAll("#measurementTable tbody tr");

  rows.forEach(row => {
    const measuredVoltage = parseFloat(row.querySelector(".measuredVoltage").value);
    const displayedVoltage = parseFloat(row.querySelector(".displayedVoltage").value);
    const manualMultiplier = parseFloat(row.querySelector(".manualMultiplier").value);

    if (
      isNaN(measuredVoltage) || measuredVoltage <= 0 ||
      isNaN(displayedVoltage) || displayedVoltage <= 0 ||
      isNaN(manualMultiplier) || manualMultiplier <= 0
    ) {
      row.querySelector(".adjustedMultiplier").value = "Invalid Input";
      return;
    }

    const adjusted = manualMultiplier * (measuredVoltage / displayedVoltage);
    row.querySelector(".adjustedMultiplier").value = adjusted.toFixed(3);
  });
}

</script>
