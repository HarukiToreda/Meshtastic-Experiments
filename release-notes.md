---
layout: default
title: Meshtastic Firmware Release Notes
---

# Meshtastic Firmware Release Notes

Welcome to the release notes for Meshtastic Firmware. Below you'll find information about new hardware, features, enhancements, and bug fixes for each release.

## Meshtastic Firmware 2.5.6.ad8747d Alpha Pre-release

<details>
<summary><strong>New Hardware / Module / Features</strong></summary>

<table>
  <tr>
    <th>Feature</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>RAK4631 Ethernet Gateway with working JSON output to MQTT</td>
    <td>Alternate variant support for Ethernet Gateway module RAK13800 for MQTT+JSON uplink for RAK4631 (not on webflasher). [#4661](https://github.com/meshtastic/firmware/issues/4661)</td>
  </tr>
  <tr>
    <td>Preliminary Othernet Dreamcatcher Support</td>
    <td>Support for Othernet Dreamcatcher board. [#4933](https://github.com/meshtastic/firmware/issues/4933)</td>
  </tr>
  <tr>
    <td>Toggle Bluetooth with Fn+b shortcut</td>
    <td>New key combination to toggle Bluetooth on/off on Cardkb devices. [#4977](https://github.com/meshtastic/firmware/issues/4977)</td>
  </tr>
  <tr>
    <td>Add health telemetry module</td>
    <td>New Health Telemetry module using the MLX90614 IR temperature and MAX30102 temperature/oxygen saturation/heart rate sensors. [#4927](https://github.com/meshtastic/firmware/issues/4927)</td>
  </tr>
  <tr>
    <td>First version of a DeepSleep state for the RP2040</td>
    <td>Initial support for DeepSleep for RP2040 (Raspberry Pi) boards. [#4976](https://github.com/meshtastic/firmware/issues/4976)</td>
  </tr>
  <tr>
    <td>Add frequencies for the Philippines</td>
    <td>New frequency option including the Philippines. [#4951](https://github.com/meshtastic/firmware/issues/4951)</td>
  </tr>
</table>

</details>

<details>
<summary><strong>Enhancements</strong></summary>

<table>
  <tr>
    <th>Enhancement</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Which Module wants a UI Frame?</td>
    <td>Improvement to debug reporting. [#4967](https://github.com/meshtastic/firmware/issues/4967)</td>
  </tr>
  <tr>
    <td>UserPrefs - Preconfigure up to 3 channels, GPS Mode</td>
    <td>Improvement to firmware building. [#4930](https://github.com/meshtastic/firmware/issues/4930)</td>
  </tr>
  <tr>
    <td>Start of generating JSON manifest of macros in userPrefs.h</td>
    <td>Improvement to firmware building. [#4946](https://github.com/meshtastic/firmware/issues/4946)</td>
  </tr>
  <tr>
    <td>Coalesce duplicated method GetTimeSinceMeshPacket</td>
    <td>Cleanup for debug reporting. [#4968](https://github.com/meshtastic/firmware/issues/4968)</td>
  </tr>
  <tr>
    <td>Upgrade nanopb</td>
    <td>Improvement for Protobuf (Protocol Buffers, a data format used to serialize structured data). [#4973](https://github.com/meshtastic/firmware/issues/4973)</td>
  </tr>
</table>

</details>

<details>
<summary><strong>Bug Fixes and Maintenance</strong></summary>

<table>
  <tr>
    <th>Bug Fix / Maintenance</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Remove unused Jlink monitoring files</td>
    <td>Maintenance. [#4953](https://github.com/meshtastic/firmware/issues/4953)</td>
  </tr>
  <tr>
    <td>Retire PPR Boards</td>
    <td>PPR and PPR1 board variants removed. [#4956](https://github.com/meshtastic/firmware/issues/4956)</td>
  </tr>
  <tr>
    <td>Retire LoRa-relay boards</td>
    <td>LoRa-relay board variants removed. [#4957](https://github.com/meshtastic/firmware/issues/4957)</td>
  </tr>
  <tr>
    <td>Remove support for pca10056-rc-clock</td>
    <td>pca10056-rc-clock board variants removed. [#4955](https://github.com/meshtastic/firmware/issues/4955)</td>
  </tr>
  <tr>
    <td>Remove unused headers</td>
    <td>Cleanup. [#4954](https://github.com/meshtastic/firmware/issues/4954)</td>
  </tr>
  <tr>
    <td>Fix storage of admin key when installing default config</td>
    <td>Fix storage of admin key after reset issue. [#4995](https://github.com/meshtastic/firmware/issues/4995)</td>
  </tr>
</table>

</details>

<details>
<summary><strong>Future Releases</strong></summary>

Stay tuned for upcoming features and enhancements in future releases. We’ll keep this section updated as new improvements and modules are added.

</details>
