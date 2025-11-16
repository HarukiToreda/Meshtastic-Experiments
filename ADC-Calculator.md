---
layout: default
title: ADC Calculator
---

# ADC Calculator

## If you want to charge your battery to full and wish for the battery to display as 100% on the screen, then you can use this calculator. Just be aware that not all boards charge a battery to 4.2V so this calculator will not give you the true level that the battery is charged.

Ratio of voltage divider for battery pin e.g. 3.20 (R1=100k, R2=220k)

Overrides the ADC_MULTIPLIER defined in the firmware device variant file for battery voltage calculation.

Should be set to a floating point value between 2 and 6.

---

### Calibration Process

The calibration process uses a simple formula to adjust the ADC multiplier based on the battery voltage. Here’s a detailed breakdown of how the calculation is done:

1. **Determine the target ADC value**: The target ADC value for a full battery (100% charge) is known, which is 4.19V.
2. **Adjust the ADC Multiplier**: The formula adjusts the current ADC multiplier to make sure that the device reads 100% charge when the battery voltage is 4.19V.
3. **Calculate the new ADC Multiplier**: The new ADC multiplier is calculated by the following formula:

   \[
   \text{New ADC Multiplier} = \text{Current ADC Multiplier} \times \left( \frac{4.19}{\text{Battery Voltage at Current Multiplier}} \right)
   \]

<details>
  <summary><strong>Example Calculation:</strong></summary>

  <table>
    <tr>
      <td>Initial Condition:</td>
      <td>Your device shows a battery voltage of 3.82V using a current ADC multiplier of 2.</td>
    </tr>
    <tr>
      <td>Formula:</td>
      <td>New ADC Multiplier = 2 × (4.19 / 3.82)</td>
    </tr>
    <tr>
      <td>Calculate the Ratio:</td>
      <td>4.19 / 3.82 ≈ 1.097</td>
    </tr>
    <tr>
      <td>Multiply the Current ADC Multiplier by the Ratio:</td>
      <td>New ADC Multiplier = 2 × 1.097 = 2.194</td>
    </tr>
    <tr>
      <td>Update the Device:</td>
      <td>You then set the new ADC multiplier (2.194 in this case) in your device's configuration. This calculation adjusts the multiplier so that the battery charge readings are accurate, mapping 4.19V to 100% battery charge.</td>
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
        <!-- Auto-generated dropdown -->
        <select id="deviceSelect" onchange="updateAdcMultiplier()"></select>
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

// Auto-create dropdown options
function populateDropdown(selectElement, includeMeasured = false) {
  selectElement.innerHTML = '<option value="">Choose</option>';

  Object.keys(DEVICE_DATA).forEach(device => {
    const opt = document.createElement("option");
    opt.value = device;
    opt.textContent = device;

    // Include measured values ONLY for calculator 2
    if (includeMeasured && DEVICE_DATA[device].measured !== undefined) {
      opt.setAttribute("data-measured", DEVICE_DATA[device].measured);
    }

    selectElement.appendChild(opt);
  });
}

// Build dropdowns on page load
document.addEventListener("DOMContentLoaded", () => {
  populateDropdown(document.getElementById("deviceSelect"));
  document.querySelectorAll(".deviceSelect").forEach(drop =>
    populateDropdown(drop, true)
  );
});

// Calculator 1 (unchanged)
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

### Voltage Measurement Calculator

## If you want to display the real value of a battery on the screen and Mesh, use this calculator. You will need a multimeter to calculate everything.

<div>
  <table id="measurementTable">
    <thead>
      <tr>
        <th>Device</th>
        <th>Measured Voltage (Multimeter) [V]</th>
        <th>Displayed Voltage (Screen) [V]</th>
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
        <td><input type="text" class="measuredVoltage" placeholder="Measured Voltage"></td>
        <td><input type="text" class="displayedVoltage" placeholder="Displayed Voltage"></td>
        <td><input type="text" class="manualMultiplier" placeholder="Manual Multiplier"></td>
        <td><input type="text" class="adjustedMultiplier" placeholder="Adjusted Multiplier" disabled></td>
      </tr>
    </tbody>
  </table>

  <button class="button button--outline button--lg cta--button" onclick="calculateTableMultipliers()">Calculate</button>
</div>

<script>
// Calculator 2 (unchanged except for reading from DEVICE_DATA)
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

    const adjustedMultiplier = manualMultiplier * (measuredVoltage / displayedVoltage);
    row.querySelector('.adjustedMultiplier').value = adjustedMultiplier.toFixed(3);
  });
}
</script>
