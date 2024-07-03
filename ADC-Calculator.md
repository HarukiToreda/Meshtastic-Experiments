---
layout: default
title: ADC Calculator
---

# ADC Calculator

Ratio of voltage divider for battery pin e.g. 3.20 (R1=100k, R2=220k)

Overrides the ADC_MULTIPLIER defined in the firmware device variant file for battery voltage calculation.

Should be set to a floating point value between 2 and 6

#### Calibration Process

The calibration process uses a simple formula to adjust the ADC multiplier based on the battery voltage. Here’s a detailed breakdown of how the calculation is done:

1. **Determine the target ADC value**: The target ADC value for a full battery (100% charge) is known, which is 4.19V.
2. **Adjust the ADC Multiplier**: The formula adjusts the current ADC multiplier to make sure that the device reads 100% charge when the battery voltage is 4.19V.
3. **Calculate the new ADC Multiplier**: The new ADC multiplier is calculated by the following formula:

New ADC Multiplier = Current ADC Multiplier × (4.19V / Battery Voltage at Current Multiplier)


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


#### ADC Calculator

<div>
  <Admonition type="info">
    <p>This calibration method only maps 4.19V to Battery Charge Percent 100%, and does not address the potential non-linearities of the ADC.</p>
  </Admonition>
  <table>
    <tr>
      <td>Device:</td>
      <td>
        <select id="deviceSelect" onchange="updateAdcMultiplier()">
          <option value="" data-multiplier="Choose"></option>          
          <option value="chatter2" data-multiplier="5.0">chatter2</option>
          <option value="diy" data-multiplier="1.85">diy</option>
          <option value="esp32-s3-pico" data-multiplier="3.1">esp32-s3-pico</option>
          <option value="heltec_v1" data-multiplier="3.2">heltec_v1</option>
          <option value="heltec_v2" data-multiplier="3.2">heltec_v2</option>
          <option value="heltec_v3" data-multiplier="5.1205">heltec_v3</option>
          <option value="heltec_wsl_v3" data-multiplier="5.1205">heltec_wsl_v3</option>
          <option value="heltec_wireless_paper" data-multiplier="2.0">heltec_wireless_paper</option>
          <option value="heltec_wireless_tracker" data-multiplier="5.1205">heltec_wireless_tracker</option>
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
      <td><input type="text" id="batteryVoltage" value="" /></td>
    </tr>
    <tr>
      <td>Current Adc Multiplier:</td>
      <td><input type="text" id="operativeAdcMultiplier" value="" /></td>
    </tr>
    <tr>
      <td>Calculated New Operative Adc Multiplier:</td>
      <td><input type="text" id="newOperativeAdcMultiplier" value="" disabled="disabled" /></td>
    </tr>
    <tr>
      <td></td>
      <td>
        <button class="button button--outline button--lg cta--button" onclick="calculateNewMultiplier()">Calculate</button>
      </td>
    </tr>
  </table>
  <script>
    function updateAdcMultiplier() {
      var select = document.getElementById('deviceSelect');
      var multiplier = select.options[select.selectedIndex].getAttribute('data-multiplier');
      document.getElementById('operativeAdcMultiplier').value = multiplier;
    }

    function calculateNewMultiplier() {
      var batteryVoltage = parseFloat(document.getElementById('batteryVoltage').value);
      var currentAdcMultiplier = parseFloat(document.getElementById('operativeAdcMultiplier').value);

      if (isNaN(batteryVoltage) || batteryVoltage <= 0 || isNaN(currentAdcMultiplier) || currentAdcMultiplier < 2 || currentAdcMultiplier > 6) {
        alert("Please enter valid numbers within the specified ranges.");
        return;
      }

      var targetVoltage = 4.19;
      var newAdcMultiplier = currentAdcMultiplier * (targetVoltage / batteryVoltage);

      document.getElementById('newOperativeAdcMultiplier').value = newAdcMultiplier.toFixed(3);
    }
  </script>
</div>






.
