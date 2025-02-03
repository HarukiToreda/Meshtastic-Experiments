---
layout: default
title: InkHUD UI Manual
permalink: /InkHUD-UI-Manual/
---

<h1>InkHUD UI Manual</h1>

<h2>Main Menu Structure</h2>
<p>The <strong>InkHUD UI</strong> features a menu system that allows users to configure display settings, manage notifications, and access messages efficiently. Below is a breakdown of its functions.</p>

<hr>

<h2>Menu</h2>
<p>The <strong>Menu</strong> provides access to different settings and options to configure the display and message preferences.</p>

<h3>Options (InkHUD Settings)</h3>
<p>Customize the InkHUD display behavior.</p>

<h4>Applet (Select Screen to Display)</h4>
<p>Choose what type of data appears on the screen.</p>
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

<h4>Auto-Show (Auto-Switch to New Data)</h4>
<p>Automatically displays the selected screen when new data is received.</p>
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

<h4>Recent Duration (Filter Recents List by Time)</h4>
<p>Set the duration for filtering recently heard nodes when <strong>Recents List</strong> is selected.</p>
<ul>
    <li>2 Minutes</li>
    <li>5 Minutes</li>
    <li>10 Minutes</li>
    <li>30 Minutes</li>
    <li>60 Minutes</li>
    <li>120 Minutes</li>
</ul>

<h4>Layout</h4>
<p>Splits the screen into different sections for improved data visualization.</p>

<h4>Rotate</h4>
<p>Rotates the screen clockwise for different orientations.</p>

<h4>Notification</h4>
<p>Enables a notification banner when a new message is received.</p>

<h4>Battery Icon</h4>
<p>Displays the battery level on all screens.</p>

<h4>Exit</h4>
<p>Closes the <strong>Options</strong> menu.</p>

<hr>

<h2>Shutdown</h2>
<p>Puts the device into <strong>Deep Sleep</strong> while saving all current settings and messages.</p>

<hr>

<h2>Exit</h2>
<p>Closes the menu screen.</p>

<hr>

<h2>InkHUD UI Menu Structure (Tree View)</h2>

<pre>
Menu  
 ├── Options (InkHUD Settings)  
 │   ├── Applet (Type of screens data to display)  
 │   │   ├── All Messages  
 │   │   ├── DMs  
 │   │   ├── Channel 0  
 │   │   ├── Channel 1  
 │   │   ├── Positions  
 │   │   ├── Recents List  
 │   │   ├── Heard  
 │   │   ├── Exit  
 │   ├── Auto-Show (Automatically switch to new data screen)  
 │   │   ├── All Messages  
 │   │   ├── DMs  
 │   │   ├── Channel 0  
 │   │   ├── Channel 1  
 │   │   ├── Positions  
 │   │   ├── Recents List  
 │   │   ├── Heard  
 │   │   ├── Exit  
 │   ├── Recent Duration (Filter Recents List by time)  
 │   │   ├── 2 Mins  
 │   │   ├── 5 Mins  
 │   │   ├── 10 Mins  
 │   │   ├── 30 Mins  
 │   │   ├── 60 Mins  
 │   │   ├── 120 Mins  
 │   ├── Layout  
 │   ├── Rotate  
 │   ├── Notification  
 │   ├── Battery Icon  
 │   ├── Exit  
 ├── Shutdown (Deep sleep mode, saves settings/messages)  
 ├── Exit (Close menu screen)  
</pre>

<hr>

<h2>Add the Page to Navigation</h2>
<p>To make this new page accessible from your site’s navigation menu, edit <strong>_config.yml</strong> and add this under <code>navbar:</code>.</p>

<pre>
  - title: InkHUD UI Manual
    url: "InkHUD-UI-Manual"
</pre>
