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

The calibration process uses a simple formula to adjust the ADC multiplier based on the battery voltage. Here’s a detailed breakdown of how the calculation is done:

1. **Determine the target ADC value**: The target ADC value for a full battery (100 percent charge) is known, which is 4.19V.
2. **Adjust the ADC Multiplier**: The formula adjusts the current ADC multiplier to make sure that the device reads 100 percent charge when the battery voltage is 4.19V.
3. **Calculate the new ADC Multiplier**:

\[
\text{New ADC Multiplier} = \text{Current ADC Multiplier} \times \left( \frac{4.19}{\text{Battery Voltage}} \right)
\]

<details>
  <summary><strong>Example Calculation:</strong></summary>

  <table>
    <tr><td>Initial Condition:</td><td>Your device shows 3.82V using a multiplier of 2.</td></tr>
    <tr><td>Formula:</td><td>2 × (4.19 / 3.82)</td></tr>
    <tr><td>Ratio:</td><td>1.097</td></tr>
    <tr><td>New Multiplier:</td><td>2.194</td></tr>
  </table>
</details>

---

### ADC Calculator Form

<div>
  <table>
    <tr>
      <td>Device:</td>
      <td>
        <select id="deviceSelect" onchange="updateAdcMultiplier()">
          <option value="" data-multiplier="Choose"></option>          
          <option value="chatter2" data-multiplier="5.0">chatter2</option>
          <option value="diy" data-multiplier="1.85">diy</option>
          <option value="esp32-s3-pico" data-multiplier="3.1">esp32-s3-pico</option>
          <option value="heltec_v1/v2" data-multiplier="3.2">heltec_v1/v2</option>
          <option value="heltec_v3" data-multiplier="5.1205">heltec_v3</option>
          <option value="heltec_wsl_v3" data-multiplier="5.1205">heltec_wsl_v3</option>
          <option value="heltec_wireless_paper" data-multiplier="2.0">heltec_wireless_paper</option>
          <option value="heltec_wireless_tracker" data-multiplier="4.9">heltec_wireless_tracker</option>
          <option value="heltec_T114" data-multiplier="4.916">heltec_T114</option>
          <option value="lora_isp4520" data-multiplier="1.436">lora_isp4520</option>
          <option value="m5stack_coreink" data-multiplier="5.0">m5stack_coreink</option>
          <option value="nano-g1-explorer" data-multiplier="2.0">nano-g1-explorer</option>
          <option value="nano-g2-ultra" data-multiplier="2.0">nano-g2-ultra</option>
          <option value="picomputer-s3" data-multiplier="3.1">picomputer-s3</option>
          <option value="rak4631" data-multiplier="1.73">rak4631</option>
          <option value="rpipico" data-multiplier="3.1">rpipico</option>
          <option value="rpipicow" data-multiplier="3.1">rpipicow</option>
          <option value="station-g1" data-multiplier="6.45">station-g1</option>
          <option value="station-g2" data-multiplier="4.0">station-g2</option>
          <option value="tlora_v2_1_16" data-multiplier="2.0">tlora_v2_1_16</option>
          <option value="tlora_v2_1_18" data-multiplier="2.11">tlora_v2_1_18</option>
          <option value="tlora_t3s3_v1" data-multiplier="2.11">tlora_t3s3_v1</option>
          <option value="t-deck" data-multiplier="2.11">t-deck</option>
          <option value="t-echo" data-multiplier="2.0">t-echo</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>Battery Voltage (V):</td>
      <td><input type="text" id="batteryVoltage"></td>
    </tr>
    <tr>
      <td>Current ADC Multiplier:</td>
      <td><input type="text" id="operativeAdcMultiplier"></td>
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

<script>
// SINGLE SOURCE OF TRUTH
// Both calculators use this same definition
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

// Calculator 1 uses shared table
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
</script>

---

### Voltage Measurement Calculator

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
          <select class="deviceSelect" onchange="updateManualMultiplier(this)">
            <option value="" data-multiplier="Choose"></option>          
            <option value="chatter2">chatter2</option>
            <option value="diy">diy</option>
            <option value="esp32-s3-pico">esp32-s3-pico</option>
            <option value="heltec_v1/v2">heltec_v1/v2</option>
            <option value="heltec_v3" data-measured="4.15">heltec_v3</option>
            <option value="heltec_wsl_v3">heltec_wsl_v3</option>
            <option value="heltec_wireless_paper">heltec_wireless_paper</option>
            <option value="heltec_wireless_tracker">heltec_wireless_tracker</option>
            <option value="heltec_T114" data-measured="4.15">heltec_T114</option>
            <option value="lora_isp4520">lora_isp4520</option>
            <option value="m5stack_coreink">m5stack_coreink</option>
            <option value="nano-g1-explorer">nano-g1-explorer</option>
            <option value="nano-g2-ultra">nano-g2-ultra</option>
            <option value="picomputer-s3">picomputer-s3</option>
            <option value="rak4631">rak4631</option>
            <option value="rpipico">rpipico</option>
            <option value="rpipicow">rpipicow</option>
            <option value="station-g1">station-g1</option>
            <option value="station-g2">station-g2</option>
            <option value="tlora_v2_1_16">tlora_v2_1_16</option>
            <option value="tlora_v2_1_18">tlora_v2_1_18</option>
            <option value="tlora_t3s3_v1">tlora_t3s3_v1</option>
            <option value="t-deck">t-deck</option>
            <option value="t-echo">t-echo</option>
          </select>
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
// Calculator 2 also uses shared table
function updateManualMultiplier(dropdown) {
  const device = dropdown.value;
  const row = dropdown.closest("tr");

  const manualField = row.querySelector(".manualMultiplier");

  if (DEVICE_DATA[device] !== undefined) {
    manualField.value = DEVICE_DATA[device];
  }

  const measured = dropdown.options[dropdown.selectedIndex].getAttribute("data-measured");
  if (measured) {
    row.querySelector(".measuredVoltage").value = measured;
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
