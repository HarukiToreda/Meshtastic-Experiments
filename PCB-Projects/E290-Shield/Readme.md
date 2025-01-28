# E290 Shield
A useful addon shield designed for the Heltec Vision Master E290, this shield allows the easy way to add a removable shield that can have a firmware controleed switching for GPS, Buzzer and Vibration motor as well as exposes the pins to allow easy solderdering of any addionalt components. 

# Pictures
<details><summary>Click to open</summary>

</details>

## Features
- GPS is controlled by a Mosfet via the firmware to allow power saving and easy power toggle
- Buzzer is controlled by a Transistor to protect the board's gpio pins and makes it very loud
- Vibration Motor is controlled by a Transistor to protect the board's gpio pins and makes it very loud
- The shield allows a 3000mAh battery to fit sandwhiched between the two boards.
- Exposed pins added to allow additional components.

# Bill of materials

| Part | Source | Cost&nbsp;(€) | Note |
| :------------ | :---------------------------- | :-----------------| :-----------------|
| ProMicro (aka NiceNano) | <a href="https://www.aliexpress.com/item/1005006446457448.html" target="_blank">AliExpress</a><br /> <a href="https://www.aliexpress.com/item/1005007738886550.html" target="_blank">AliExpress</a> | 5€ <br /> 2x for 5€ | |
| HT-RA62 | <a href="https://www.aliexpress.com/item/1005005543917617.html" target="_blank">AliExpress</a> | 5€ | You can also use <a href="https://www.aliexpress.com/item/1005002561194884.html">RA-01SH</a> |
| 2x Through Hole Resistors // SMD resistor | <a href="https://www.aliexpress.com/item/1005006044241818.html" target="_blank">AliExpress</a> | 3€ pack<br /> 0.1€/resistor | You can buy a package of multiple values for a few €.<br /> Choose depending on material you already have &/or soldering skills. I'm using 2x 1M ohms |
| OLED SSD1306 i2c (optional) | <a href="https://www.aliexpress.com/item/1005005970901119.html" target="_blank">AliExpress</a> | 1.5€ | No need to solder, just be careful and add some tape in between the boards to avoid a short. |
| Battery connection (optional) | <a href="https://www.aliexpress.com/item/1005002564191148.html" target="_blank">AliExpress</a> | 2€ pack<br /> 0.4€/unit | This is an example. |
| Antenna pigtail (recommended) | <a href="https://www.aliexpress.com/item/4001287491018.html" target="_blank">AliExpress</a> | 2€ | I saw that it underperformed with a cheap black pigtail, after using one of these, it worked fine. |
| PCB |  | 2€ pack of 5<br /> 0.4€/unit | Use your favourite company to get the PCB. |
| 2x Buttons | <a href="https://www.aliexpress.com/item/4001125532910.html" target="_blank">AliExpress</a> | 1.8€ pack<br /> 0.1€/button | You can buy a package of 100 for a few €.<br /> I couldn't find a part code, search for "3*4*2.0 2 Pin Button" |
| [#16](https://github.com/gargomoma/fakeTec_pcb/issues/16) lupusworax's v4<br /> Mosfets SI2312 | <a href="https://www.aliexpress.com/item/1005004676217612.html" target="_blank">AliExpress</a> | 9€ pack of 200<br /> | --- |
| [#16](https://github.com/gargomoma/fakeTec_pcb/issues/16) lupusworax's v4<br /> Resistors | <a href="https://www.aliexpress.com/item/1005002991902748.html" target="_blank">AliExpress</a> | 2.4€ pack of 100<br /> | --- |
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||||
| <strong>Total</strong> || 10€ | |

# Notes


# About Meshtastic
[Meshtastic](https://meshtastic.org/)® is a registered trademark of Meshtastic LLC. Meshtastic software components are released under various licenses, see github for details.

# Disclaimer
No warranty is provided.
You use it at your own risk and take the responsibility upon yourself.
