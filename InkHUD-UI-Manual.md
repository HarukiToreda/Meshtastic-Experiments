---
layout: default
title: InkHUD UI Manual
permalink: /InkHUD-UI-Manual/
---

<h1>InkHUD UI Manual</h1>

<p>Click on any menu item below to expand and view its options.</p>

<style>
  .menu-section {
    border: 1px solid #FFD700;
    background: #222;
    color: #FFD700;
    padding: 10px;
    margin: 5px 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
  }

  .menu-content {
    display: none;
    padding: 10px;
    border-left: 3px solid #FFD700;
    background: #111;
    color: white;
  }

  .menu-section.active {
    background: #FFD700;
    color: #111;
  }
</style>

<script>
  function toggleMenu(id) {
    var sections = document.getElementsByClassName('menu-content');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
  }
</script>

<!-- MAIN MENU -->
<div class="menu-section" onclick="toggleMenu('menu-options')">▶ Menu</div>
<div id="menu-options" class="menu-content">

  <!-- OPTIONS (InkHUD Settings) -->
  <div class="menu-section" onclick="toggleMenu('options-settings')">▶ Options (InkHUD Settings)</div>
  <div id="options-settings" class="menu-content">
    <div class="menu-section" onclick="toggleMenu('applet')">▶ Applet (Select Screen to Display)</div>
    <div id="applet" class="menu-content">
      <ul>
        <li>All Messages</li>
        <li>DMs</li>
        <li>Channel 0</li>
        <li>Channel 1</li>
        <li>Positions</li>
        <li>Recents List</li>
        <li>Heard</li>
        <li>Exit</li>
      </ul>
    </div>
    <div class="menu-section" onclick="toggleMenu('auto-show')">▶ Auto-Show (Auto-Switch to New Data)</div>
    <div id="auto-show" class="menu-content">
      <ul>
        <li>All Messages</li>
        <li>DMs</li>
        <li>Channel 0</li>
        <li>Channel 1</li>
        <li>Positions</li>
        <li>Recents List</li>
        <li>Heard</li>
        <li>Exit</li>
      </ul>
    </div>
    <div class="menu-section" onclick="toggleMenu('recent-duration')">▶ Recent Duration (Filter Recents List by Time)</div>
    <div id="recent-duration" class="menu-content">
      <ul>
        <li>2 Minutes</li>
        <li>5 Minutes</li>
        <li>10 Minutes</li>
        <li>30 Minutes</li>
        <li>60 Minutes</li>
        <li>120 Minutes</li>
      </ul>
    </div>
    <div class="menu-section" onclick="toggleMenu('layout')">▶ Layout</div>
    <div id="layout" class="menu-content"><p>Splits the screen into different sections for improved data visualization.</p></div>
    <div class="menu-section" onclick="toggleMenu('rotate')">▶ Rotate</div>
    <div id="rotate" class="menu-content"><p>Rotates the screen clockwise for different orientations.</p></div>
    <div class="menu-section" onclick="toggleMenu('notification')">▶ Notification</div>
    <div id="notification" class="menu-content"><p>Enables a notification banner when a new message is received.</p></div>
    <div class="menu-section" onclick="toggleMenu('battery-icon')">▶ Battery Icon</div>
    <div id="battery-icon" class="menu-content"><p>Displays the battery level on all screens.</p></div>
    <div class="menu-section" onclick="toggleMenu('options-exit')">▶ Exit</div>
    <div id="options-exit" class="menu-content"><p>Closes the <strong>Options</strong> menu.</p></div>
  </div> <!-- END OPTIONS -->

</div> <!-- END MENU -->

<!-- SHUTDOWN -->
<div class="menu-section" onclick="toggleMenu('shutdown')">▶ Shutdown</div>
<div id="shutdown" class="menu-content"><p>Puts the device into <strong>Deep Sleep</strong> while saving all current settings and messages.</p></div>

<!-- EXIT -->
<div class="menu-section" onclick="toggleMenu('exit')">▶ Exit</div>
<div id="exit" class="menu-content"><p>Closes the menu screen.</p></div>
