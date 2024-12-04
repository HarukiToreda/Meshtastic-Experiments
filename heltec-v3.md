---
title: Heltec V3
layout: default
tabs:
  - label: LoRa32 V3/V3.1
    content: |
      ## V3/V3.1

      ::::info
      This device may have issues charging a connected battery if utilizing a USB-C to USB-C cable. It's recommended to use a USB-A to USB-C cable.

      :::caution
      Be careful when interacting with the USB-C port. This device does not have ESD protection for the CP2102 USB to UART bridge chip.
      :::

      ::::
      
      - **MCU:**
        - ESP32-S3FN8 (WiFi & Bluetooth)
      - **LoRa Transceiver:**
        - Semtech SX1262
      - **Frequency Options:**
        - 433 MHz
        - 470 - 510 MHz
        - 863 - 870 MHz
        - 902 - 928 MHz
      - **Connectors:**
        - USB-C
        - Antenna:
          - Dedicated 2.4 GHz metal spring antenna for WiFi/Bluetooth
          - U.FL/IPEX antenna connector for LoRa

      ### V3.1 Differences

      Firmware remains the same as V3. Key differences:

      - Removal of [FDG6322C](https://www.mouser.com/datasheet/2/308/1/FDG6322C_D-2312203.pdf).
      - Antenna filter values updated to match ESP32-S3 reference design.

      ### Features

      - Built-in 0.96 inch OLED display
      - User and Reset Buttons
      - No GPS

      ### Resources

      - Firmware file: `firmware-heltec-v3-X.X.X.xxxxxxx.bin`
      - Purchase links:
        - US: [Rokland](https://store.rokland.com/collections/heltec-products/products/heltec-wifi-lora-32v3)
        - International: [Heltec](https://heltec.org/project/wifi-lora-32-v3/)
  - label: Wireless Stick Lite V3
    content: |
      ## Wireless Stick Lite V3

      - **MCU:** ESP32-S3FN8
      - **LoRa Transceiver:** Semtech SX1262
      - **Frequency Options:** 433 MHz - 928 MHz
      - **Features:** No display, additional GPIO availability, no GPS
      - **Resources:** 
        - Firmware: `firmware-heltec-wsl-v3-X.X.X.xxxxxxx.bin`
        - Purchase Links: [Rokland](https://store.rokland.com)
  # Add other tabs similarly
---

{% include tabs.html tabs=page.tabs %}
