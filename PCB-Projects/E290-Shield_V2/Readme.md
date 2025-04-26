# E290 Shield V2

The E290 Shield V2 is an add-on board designed for the Heltec Vision Master E290. This shield provides a convenient and modular solution for integrating additional functionalities such as GPS, a buzzer, and a vibration motor. It also exposes pins for easy soldering of additional components, making it highly versatile for various projects.

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

![E290 Shield](????)

</details>

## Order PCB or Fully Assembled Board

You can order the PCB or the fully assembled board directly from **PCBWay** by visiting the following link:

👉 **[Order E290 Shield on PCBWay](https://www.pcbway.com/project/shareproject/Heltec_Vision_Master_E290_Shield_for_Meshtastic_89cca901.html)**

This link will take you to the project page on PCBWay, where you can choose to order just the PCB or the fully assembled board.

If you prefer JLCPCB or other services you can download the gerber files inside Files


## Bill of Materials

For a detailed list of components required to assemble the E290 Shield, please refer to the table below.

---

## Bill of Materials

<div style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Type</th>
        <th>Designator</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MOSFET</td>
        <td>AO3400A</td>
        <td>1</td>
        <td>SMD</td>
        <td>Q4</td>
        <td>This will be in the BOM if you want to order assembled</td>
      </tr>
      <tr>
        <td>NPN Transistor</td>
        <td>MMBT2222A-1P</td>
        <td>2</td>
        <td>SMD</td>
        <td>Q5, Q6</td>
        <td>This will be in the BOM if you want to order assembled</td>
      </tr>
      <tr>
        <td>MOSFET</td>
        <td>2N7000</td>
        <td>1</td>
        <td>Through Hole</td>
        <td>Q1</td>
        <td>Not in BOM in case you want to solder by hand</td>
      </tr>
      <tr>
        <td>NPN Transistor</td>
        <td>2N2222A</td>
        <td>2</td>
        <td>Through Hole</td>
        <td>Q2, Q3</td>
        <td>Not in BOM in case you want to solder by hand</td>
      </tr>
      <tr>
        <td>Passive Buzzer</td>
        <td>MTL9032</td>
        <td>1</td>
        <td>SMD</td>
        <td>U1</td>
        <td>This will be in the BOM if you want to order assembled</td>
      </tr>
      <tr>
        <td>Vibra Motor</td>
        <td>LCM0827A3038F</td>
        <td>1</td>
        <td>Through Hole</td>
        <td>U3</td>
        <td>This will be in the BOM if you want to order assembled</td>
      </tr>
      <tr>
        <td>Header</td>
        <td>Header-Male-2.54_2x20</td>
        <td>1</td>
        <td>Through Hole</td>
        <td>H1</td>
        <td>This will be in the BOM if you want to order assembled</td>
      </tr>
      <tr>
        <td>GPS</td>
        <td>ATGN336H</td>
        <td>1</td>
        <td>SMD</td>
        <td>GPS</td>
        <td>Not in BOM in case you want to solder by hand</td>
      </tr>
    </tbody>
  </table>
</div>

---

## About Meshtastic

[Meshtastic](https://meshtastic.org/)® is a registered trademark of Meshtastic LLC. Meshtastic software components are released under various licenses. For more details, please refer to the official GitHub repository.

## Disclaimer

This product is provided without any warranty. Use it at your own risk. The responsibility for any issues or damages lies solely with the user.
