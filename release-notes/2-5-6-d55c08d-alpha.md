---
layout: default
title: Meshtastic Firmware Release Notes
---

# Meshtastic Firmware Release Notes

This is where I will be adding my own understanding on what each release note does in a simple easy way to explain it.

## Meshtastic Firmware 2.5.6.ad8747d Alpha Pre-release

### New Hardware / Module / Features

- **RAK4631 Ethernet Gateway with working JSON output to MQTT** by [@beegee-tokyo](https://github.com/beegee-tokyo) in [#4661](https://github.com/meshtastic/firmware/issues/4661)  
  Alternate variant support for Ethernet Gateway module RAK13800 for MQTT+JSON uplink for RAK4631 (not on webflasher).

- **Preliminary Othernet Dreamcatcher Support** by [@caveman99](https://github.com/caveman99) in [#4933](https://github.com/meshtastic/firmware/issues/4933)  
  Support for Othernet Dreamcatcher board.

- **Toggle Bluetooth with Fn+b shortcut** by [@HarukiToreda](https://github.com/HarukiToreda) in [#4977](https://github.com/meshtastic/firmware/issues/4977)  
  New key combination to toggle Bluetooth on/off on Cardkb devices.

- **Add health telemetry module** by [@fifieldt](https://github.com/fifieldt) and [@thebentern](https://github.com/thebentern) in [#4927](https://github.com/meshtastic/firmware/issues/4927)  
  New Health Telemetry module using the MLX90614 IR temperature and MAX30102 temperature/oxygen saturation/heart rate sensors.

- **First version of a DeepSleep state for the RP2040** by [@TheMalkavien](https://github.com/TheMalkavien) in [#4976](https://github.com/meshtastic/firmware/issues/4976)  
  Initial support for DeepSleep for RP2040 (Raspberry Pi) boards.

- **Add frequencies for the Philippines** by [@fifieldt](https://github.com/fifieldt) in [#4951](https://github.com/meshtastic/firmware/issues/4951)

### Enhancements

- **Which Module wants a UI Frame?** by [@fifieldt](https://github.com/fifieldt) in [#4967](https://github.com/meshtastic/firmware/issues/4967)  
  Improvement to debug reporting.

- **UserPrefs - Preconfigure up to 3 channels, GPS Mode** by [@medentem](https://github.com/medentem) in [#4930](https://github.com/meshtastic/firmware/issues/4930)  
  Improvement to firmware building.

- **Start of generating JSON manifest of macros in userPrefs.h** by [@thebentern](https://github.com/thebentern) in [#4946](https://github.com/meshtastic/firmware/issues/4946)  
  Improvement to firmware building.

- **Coalesce duplicated method GetTimeSinceMeshPacket** by [@fifieldt](https://github.com/fifieldt) in [#4968](https://github.com/meshtastic/firmware/issues/4968)  
  Cleanup for debug reporting.

- **Upgrade nanopb** by [@thebentern](https://github.com/thebentern) in [#4973](https://github.com/meshtastic/firmware/issues/4973)  
  Improvement for Protobuf (Protocol Buffers, a data format used to serialize structured data).

### Bug Fixes and Maintenance

- **Remove unused Jlink monitoring files** by [@fifieldt](https://github.com/fifieldt) in [#4953](https://github.com/meshtastic/firmware/issues/4953)  
  Maintenance.

- **Retire PPR Boards** by [@fifieldt](https://github.com/fifieldt) in [#4956](https://github.com/meshtastic/firmware/issues/4956)  
  PPR and PPR1 board variants removed.

- **Retire LoRa-relay boards** by [@fifieldt](https://github.com/fifieldt) in [#4957](https://github.com/meshtastic/firmware/issues/4957)  
  LoRa-relay board variants removed.

- **Remove support for pca10056-rc-clock** by [@fifieldt](https://github.com/fifieldt) in [#4955](https://github.com/meshtastic/firmware/issues/4955)  
  pca10056-rc-clock board variants removed.

- **Remove unused headers** by [@fifieldt](https://github.com/fifieldt) in [#4954](https://github.com/meshtastic/firmware/issues/4954)  
  Cleanup.

- **Fix storage of admin key when installing default config** by [@Mictronics](https://github.com/Mictronics) in [#4995](https://github.com/meshtastic/firmware/issues/4995)  
  Fix storage of admin key after reset issue.


