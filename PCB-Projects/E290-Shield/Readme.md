# E290 Shield

The E290 Shield is an add-on board designed for the Heltec Vision Master E290. This shield provides a convenient and modular solution for integrating additional functionalities such as GPS, a buzzer, and a vibration motor. It also exposes pins for easy soldering of additional components, making it highly versatile for various projects.

## Key Features

- **GPS Control**: The GPS module is controlled via a MOSFET, allowing for power-saving and easy toggling through firmware.
- **Buzzer Control**: A transistor protects the board's GPIO pins while ensuring the buzzer operates at a high volume.
- **Vibration Motor Control**: Similar to the buzzer, the vibration motor is controlled by a transistor, safeguarding the GPIO pins and providing strong feedback.
- **Battery Compatibility**: The shield is designed to accommodate a 3000mAh battery, which can be sandwiched between the shield and the main board.
- **Expandability**: Exposed pins allow for the addition of custom components, enhancing the shield's functionality.

## Bill of Materials

For a detailed list of components required to assemble the E290 Shield, please refer to the [Bill of Materials](#bill-of-materials) section below.

## Pictures

<details><summary>Click to view images</summary>

</details>

## Bill of Materials

| Part | Designator | Footprint | Quantity | Manufacturer Part | Manufacturer | Supplier | Supplier Part | Price (€) | Note |
| :------------ | :------------ | :---------------------------- | :-----------------| :-----------------| :-----------------| :-----------------| :-----------------| :-----------------| :-----------------|
| AO3400A | Q4 | SOT-23-3_L2.9-W1.3-P1.90-LS2.4-BR | 1 | AO3400A | AOS | LCSC | C20917 | 0.09 | MOSFET for GPS control |
| MMBT2222A-1P | Q5, Q6 | SOT-23-3_L3.0-W1.7-P0.95-LS2.9-BR | 2 | MMBT2222A-1P | MDD(辰达半导体) | LCSC | C364315 | 0.015 | Transistor for Buzzer and Vibration Motor control |
| MTL9032 | U1 | BUZ-SMD_MLT-9032 | 1 | MTL9032 | null | LCSC | C9900004422 | - | Buzzer |
| LCM0827A3038F | U3 | VIBRATIONMOTOR-TH_LCM0827A3038F | 1 | LCM0827A3038F | LEADER(立得) | LCSC | C2759981 | - | Vibration Motor |
| Header-Male-2.54_2x20 | H1 | HDR-TH_40P-P2.54-V-M-R2-C20-S2.54 | 1 | 2.54mm 2*20P直排针 | BOOMELE(博穆精密) | LCSC | C50980 | 0.15 | Header for board connection |

**Total Cost**: ~0.255€ (excluding buzzer and vibration motor costs)

## About Meshtastic

[Meshtastic](https://meshtastic.org/)® is a registered trademark of Meshtastic LLC. Meshtastic software components are released under various licenses. For more details, please refer to the official GitHub repository.

## Disclaimer

This product is provided without any warranty. Use it at your own risk. The responsibility for any issues or damages lies solely with the user.
