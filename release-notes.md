---
layout: default
title: Meshtastic Firmware Release Notes
---

# Meshtastic Firmware Release Notes

Welcome to the release notes for Meshtastic Firmware. Below you'll find information about new hardware, features, enhancements, and bug fixes for each release.

<details>
<summary><strong>Meshtastic Firmware 2.5.6.ad8747d Alpha Pre-release</strong></summary>

### New Hardware / Module / Features

{% assign username = "beegee-tokyo" %}
- **RAK4631 Ethernet Gateway with working JSON output to MQTT** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4661" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Alternate variant support for Ethernet Gateway module RAK13800 for MQTT+JSON uplink for RAK4631 (not on webflasher).

{% assign username = "caveman99" %}
- **Preliminary Othernet Dreamcatcher Support** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4933" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Support for Othernet Dreamcatcher board.

{% assign username = "HarukiToreda" %}
- **Toggle Bluetooth with Fn+b shortcut** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4977" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - New key combination to toggle Bluetooth on/off on Cardkb devices.

{% assign username1 = "fifieldt" %}
{% assign username2 = "thebentern" %}
- **Add health telemetry module** by [@{{ username1 }}](https://github.com/{{ username1 }}) and [@{{ username2 }}](https://github.com/{{ username2 }}) in {% assign issue = "4927" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - New Health Telemetry module using the MLX90614 IR temperature and MAX30102 temperature/oxygen saturation/heart rate sensors.

{% assign username = "TheMalkavien" %}
- **First version of a DeepSleep state for the RP2040** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4976" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Initial support for DeepSleep for RP2040 (Raspberry Pi) boards.

{% assign username = "fifieldt" %}
- **Add frequencies for the Philippines** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4951" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})

### Enhancements

{% assign username = "fifieldt" %}
- **Which Module wants a UI Frame?** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4967" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Improvement to debug reporting.

{% assign username = "medentem" %}
- **UserPrefs - Preconfigure up to 3 channels, GPS Mode** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4930" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Improvement to firmware building.

{% assign username = "thebentern" %}
- **Start of generating JSON manifest of macros in userPrefs.h** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4946" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Improvement to firmware building.

{% assign username = "fifieldt" %}
- **Coalesce duplicated method GetTimeSinceMeshPacket** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4968" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Cleanup for debug reporting.

{% assign username = "thebentern" %}
- **Upgrade nanopb** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4973" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Improvement for Protobuf (Protocol Buffers, a data format used to serialize structured data).

### Bug Fixes and Maintenance

{% assign username = "fifieldt" %}
- **Remove unused Jlink monitoring files** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4953" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Maintenance.

- **Retire PPR Boards** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4956" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - PPR and PPR1 board variants removed.

- **Retire LoRa-relay boards** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4957" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - LoRa-relay board variants removed.

- **Remove support for pca10056-rc-clock** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4955" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - pca10056-rc-clock board variants removed.

- **Remove unused headers** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4954" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Cleanup.

{% assign username = "Mictronics" %}
- **Fix storage of admin key when installing default config** by [@{{ username }}](https://github.com/{{ username }}) in {% assign issue = "4995" %}[#{{ issue }}](https://github.com/meshtastic/firmware/issues/{{ issue }})
  - Fix storage of admin key after reset issue.

### Future Releases

Stay tuned for upcoming features and enhancements in future releases. We’ll keep this section updated as new improvements and modules are added.

</details>
