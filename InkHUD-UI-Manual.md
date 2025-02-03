---
layout: default
title: InkHUD UI Manual
permalink: /InkHUD-UI-Manual/
---

# InkHUD UI Manual

Click on any menu item below to expand and view its options.

---

<style>
  .menu-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
  }
  details {
    flex: 0 0 250px; /* Set a fixed width for the expandable section */
  }
  .description {
    flex: 1; /* Allows text to occupy remaining space */
    margin-left: 20px; /* Space between button and text */
  }
</style>

<div class="menu-container">
  <details>
    <summary><strong>Applet (Select Screen to Display)</strong></summary>
    <ul>
      <li><strong>All Messages</strong> – Displays the last heard message from DMs or channels.</li>
      <li><strong>DMs</strong> – Shows the last received direct message.</li>
      <li><strong>Channel 0</strong> – Displays all recent messages on Channel 0 in a threaded format.</li>
      <li><strong>Channel 1</strong> – Displays all recent messages on Channel 1 in a threaded format.</li>
      <li><strong>Positions</strong> – Shows the Node Map Position screen, with "X" markers for locations.</li>
      <li><strong>Recents List</strong> – Displays a list of last heard nodes within a specified time frame.</li>
      <li><strong>Heard</strong> – Lists all nodes heard within a certain time period.</li>
      <li><strong>Exit</strong> – Closes the menu screen.</li>
    </ul>
  </details>
  <span class="description">Select what type of screen data to display.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Auto-Show (Auto-Switch to New Data)</strong></summary>
    <ul>
      <li>All Messages</li>
      <li>DMs</li>
      <li>Channel 0</li>
      <li>Channel 1</li>
      <li>Positions</li>
      <li>Recents List</li>
      <li>Heard</li>
      <li>Exit – Closes the menu screen.</li>
    </ul>
  </details>
  <span class="description">Automatically switches to the selected screen when new data is received.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Recent Duration (Filter Recents List by Time)</strong></summary>
    <ul>
      <li>2 Minutes</li>
      <li>5 Minutes</li>
      <li>10 Minutes</li>
      <li>30 Minutes</li>
      <li>60 Minutes</li>
      <li>120 Minutes</li>
    </ul>
  </details>
  <span class="description">Filters recently heard nodes based on the selected time range.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Layout</strong></summary>
  </details>
  <span class="description">Splits the screen into different sections for better data organization.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Rotate</strong></summary>
  </details>
  <span class="description">Rotates the screen clockwise for better viewing angles.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Notification</strong></summary>
  </details>
  <span class="description">Enables a notification banner when a new message is received.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Battery Icon</strong></summary>
  </details>
  <span class="description">Displays the battery level on all screens.</span>
</div>

---

<div class="menu-container">
  <details>
    <summary><strong>Shutdown</strong></summary>
  </details>
  <span class="description">Puts the device into <strong>Deep Sleep</strong> while saving all current settings and messages.</span>
</div>

<div class="menu-container">
  <details>
    <summary><strong>Exit</strong></summary>
  </details>
  <span class="description">Closes the menu screen.</span>
</div>
