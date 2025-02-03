---
layout: default
title: InkHUD Intro
permalink: /InkHUD/Intro/
---
# InkHUD UI  

The **InkHUD UI** is an unofficial user interface designed for e-ink display nodes running the Meshtastic firmware. It enhances usability with a structured menu system, allowing users to toggle features, customize display options, manage notifications, and efficiently access messages.  

This UI is currently under development, so users are advised to proceed with caution. InkHUD was created by **ToddHerbert** and is fully open-source, adhering to Meshtastic’s open-access principles.  

## Repository  
[GitHub - InkHUD UI](https://github.com/todd-herbert/meshtastic-firmware/tree/InkHUD)  

## Unofficial Flasher  

## Menu Guide  
Click on any menu item below to expand and view its options.  

---

<details>
  <summary><strong><span style="font-size: 18px;">Options</span></strong></summary>

  <span style="display: block; margin-top: 6px; font-size: 14px;">InkHUD Settings</span>

  <blockquote>
  <details>
    <summary><strong><span style="font-size: 18px;">Applet</span></strong></summary>

    <span style="display: block; margin-top: 6px; font-size: 14px;">Select Screen to Display</span>

    <blockquote>
    <details>
      <summary><strong><span style="font-size: 18px;">All Messages</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Displays the last heard message from DMs or channels.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">DMs</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Shows the last received direct message.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">Channel 0</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Displays all recent messages on Channel 0 in a threaded format.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">Channel 1</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Displays all recent messages on Channel 1 in a threaded format.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">Positions</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Shows the Node Map Position screen, with "X" markers for locations.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">Recents List</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Displays a list of last heard nodes within a specified time frame.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">Heard</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Lists all nodes heard within a certain time period.</span>
    </details>

    <details>
      <summary><strong><span style="font-size: 18px;">Exit</span></strong></summary>
      <span style="display: block; margin-top: 6px; font-size: 14px;">Closes the menu screen.</span>
    </details>
    </blockquote>

  </details>

  <details>
    <summary><strong><span style="font-size: 18px;">Auto-Show</span></strong></summary>

    <span style="display: block; margin-top: 6px; font-size: 14px;">Automatically switch to a screen when new data is received</span>

    <blockquote>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">All Messages</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">DMs</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">Channel 0</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">Channel 1</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">Positions</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">Recents List</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">Heard</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">Exit</div>
    </blockquote>

  </details>

  <details>
    <summary><strong><span style="font-size: 18px;">Recent Duration</span></strong></summary>

    <span style="display: block; margin-top: 6px; font-size: 14px;">Filter Recents List by Time</span>

    <blockquote>
    <div style="margin-top: 6px;">
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">2 Minutes</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">5 Minutes</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">10 Minutes</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">30 Minutes</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">60 Minutes</div>
      <div style="margin: 8px 20px; padding: 10px 15px; font-size: 16px; font-weight: bold; background: #FFD700; color: black; border-radius: 6px; cursor: pointer; display: block; text-align: center; width: 180px;">120 Minutes</div>
    </div>
    </blockquote>

  </details>

  <details>
    <summary><strong><span style="font-size: 18px;">Layout</span></strong></summary>

    Splits the screen into different sections for improved data visualization.

  </details>

  <details>
    <summary><strong><span style="font-size: 18px;">Rotate</span></strong></summary>

    Rotates the screen clockwise for different orientations.

  </details>

  <details>
    <summary><strong><span style="font-size: 18px;">Notification</span></strong></summary>

    Enables a notification banner when a new message is received.

  </details>

  <details>
    <summary><strong><span style="font-size: 18px;">Battery Icon</span></strong></summary>

    Displays the battery level on all screens.

  </details>

  </blockquote>
</details>

<details>
  <summary><strong><span style="font-size: 18px;">Shutdown</span></strong></summary>

  Puts the device into <strong>Deep Sleep</strong> while saving all current settings and messages.

</details>

<details>
  <summary><strong><span style="font-size: 18px;">Exit</span></strong></summary>

  Closes the menu screen.

</details>
