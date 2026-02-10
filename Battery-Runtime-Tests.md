---
layout: default
title: Battery Runtime Tests
---
<head>
  <title>Battery Runtime Tests</title>

  <style>
    .gps-toggle-cell{
      text-align:center;
      padding:4px 2px;
      white-space:normal;
      vertical-align:middle;
    }
    .gps-mini-wrap{
      display:inline-flex;
      flex-direction:column;
      align-items:center;
      gap:4px;
      font-size:11px;
      font-weight:700;
      user-select:none;
      white-space:normal;
      line-height:1.1;
    }
    .gps-switch{
      position:relative;
      display:inline-block;
      width:44px;
      height:24px;
    }
    .gps-switch input{
      opacity:0;
      width:0;
      height:0;
    }
    .gps-slider{
      position:absolute;
      inset:0;
      cursor:pointer;
      background:#c9c9c9;
      border-radius:999px;
      transition:0.2s;
    }
    .gps-slider:before{
      content:"";
      position:absolute;
      width:18px;
      height:18px;
      left:3px;
      top:3px;
      background:#fff;
      border-radius:50%;
      transition:0.2s;
      box-shadow:0 2px 6px rgba(0,0,0,0.25);
    }
    .gps-switch input:checked + .gps-slider{
      background:#5aa9ff;
    }
    .gps-switch input:checked + .gps-slider:before{
      transform:translateX(20px);
    }
  </style>

  <script>
    function updateProgress() {
      const startTimes = [
        //{ id: 'progress1', start: new Date('2025-01-07T22:57:00') }, // V3.2 1100mAh
        //<td id="progress1">
        { id: 'progress2', start: new Date('2026-01-30T23:17:00') }, // V3.2 2000mAh
        //<td id="progress2">
        //{ id: 'progress3', start: new Date('2025-01-10T15:54:00') }, // V3.2 3000mAh
        //<td id="progress3">
        //{ id: 'progress4', start: new Date('2025-01-21T11:32:00') }, // Eink 1100mAh
        //<td id="progress4">
        //{ id: 'progress5', start: new Date('2025-01-21T11:11:00') }, // Heltxt
        //<td id="progress5">
        //{ id: 'progress6', start: new Date('2025-01-10T13:40:00') }, // Wireless Paper
        //<td id="progress6">
        //{ id: 'progress7', start: new Date('2024-07-11T03:00:00') }, //
        //{ id: 'progress8', start: new Date('2024-07-09T22:25:00') }, //
        //{ id: 'progress9', start: new Date('2024-07-07T21:51:00') }  //
      ];

      const currentDate = new Date();

      startTimes.forEach(item => {
        const el = document.getElementById(item.id);
        if (!el) return;
        const diffInHours = Math.floor((currentDate - item.start) / (1000 * 60 * 60));
        el.innerText = `Started ${diffInHours} hrs ago`;
      });
    }

    // Return the cell that occupies a given column index, respecting colSpan
    function getCellAtColumn(row, colIndex) {
      let colPos = 0;
      for (const cell of row.children) {
        const span = cell.colSpan || 1;
        if (colIndex >= colPos && colIndex < colPos + span) return cell;
        colPos += span;
      }
      return null;
    }

    // Set column visibility without changing layout (keeps column widths)
    function setColVisibility(table, colIndex, show) {
      const rows = table.querySelectorAll("thead tr, tbody tr");
      rows.forEach(row => {
        const cell = getCellAtColumn(row, colIndex);
        if (!cell) return;

        // Keep column count and width stable
        cell.style.visibility = show ? "visible" : "hidden";
        cell.style.pointerEvents = show ? "" : "none";
      });
    }

    // Find column indexes from the FIRST header row, respecting colSpans
    function findGroupColumnIndexes(table, group) {
      const firstHeaderRow = table.querySelector("thead tr");
      if (!firstHeaderRow) return { offIndex: -1, onIndex: -1 };

      let offIndex = -1;
      let onIndex = -1;

      let colPos = 0;
      Array.from(firstHeaderRow.children).forEach(cell => {
        const span = cell.colSpan || 1;

        const g = cell.getAttribute("data-gps-group");
        const mode = cell.getAttribute("data-gps");

        if (g === group && mode === "off") offIndex = colPos;
        if (g === group && mode === "on") onIndex = colPos;

        colPos += span;
      });

      return { offIndex, onIndex };
    }
    function initPerPairGpsToggles() {
      function collectRowPairs(table, offIndex, onIndex) {
        const rows = table.querySelectorAll("thead tr, tbody tr");
        const pairs = [];
    
        rows.forEach(row => {
          const offCell = getCellAtColumn(row, offIndex);
          const onCell = getCellAtColumn(row, onIndex);
          if (!offCell || !onCell) return;
    
          const inBody = !!row.closest("tbody");
    
          // Identify special header rows
          const isTitleRow =
            !inBody &&
            (offCell.getAttribute("data-gps") === "off" || onCell.getAttribute("data-gps") === "on");
    
          const offLabel = !inBody ? offCell.querySelector("label.gps-switch") : null;
          const onLabel = !inBody ? onCell.querySelector("label.gps-switch") : null;
          const isToggleRow = !inBody && (offLabel || onLabel);
    
          // Cache body HTML once
          if (inBody) {
            if (offCell.dataset.gpsOffHtml === undefined) offCell.dataset.gpsOffHtml = offCell.innerHTML;
            if (onCell.dataset.gpsOnHtml === undefined) onCell.dataset.gpsOnHtml = onCell.innerHTML;
          }
    
          // Cache title text once
          if (isTitleRow) {
            if (offCell.dataset.gpsOffTitle === undefined) offCell.dataset.gpsOffTitle = offCell.textContent;
            if (onCell.dataset.gpsOnTitle === undefined) onCell.dataset.gpsOnTitle = onCell.textContent;
          }
    
          pairs.push({
            row,
            offCell,
            onCell,
            inBody,
            isTitleRow,
            isToggleRow,
            offLabel,
            onLabel
          });
        });
    
        return pairs;
      }
    
      function applyToPairs(pairs, showOn) {
        pairs.forEach(p => {
          const offCell = p.offCell;
          const onCell = p.onCell;
    
          // Always expand back first
          offCell.style.display = "";
          onCell.style.display = "";
          offCell.colSpan = 1;
          onCell.colSpan = 1;
    
          // For toggle rows, put labels back where they belong before re-collapsing
          if (p.isToggleRow) {
            if (p.offLabel && !offCell.contains(p.offLabel)) offCell.appendChild(p.offLabel);
            if (p.onLabel && !onCell.contains(p.onLabel)) onCell.appendChild(p.onLabel);
          }
    
          // For body rows, restore original HTML before re-collapsing
          if (p.inBody) {
            offCell.innerHTML = offCell.dataset.gpsOffHtml || "";
            onCell.innerHTML = onCell.dataset.gpsOnHtml || "";
          }
    
          const keepCell = showOn ? onCell : offCell;
          const hideCell = showOn ? offCell : onCell;
    
          // Collapse
          hideCell.style.display = "none";
          keepCell.colSpan = 2;
    
          // Title row: swap just the text
          if (p.isTitleRow) {
            keepCell.textContent = showOn
              ? (onCell.dataset.gpsOnTitle || keepCell.textContent)
              : (offCell.dataset.gpsOffTitle || keepCell.textContent);
          }
    
          // Toggle row: move the correct label into the visible cell (keeps the real input and its listener)
          if (p.isToggleRow) {
            const keepLabel = showOn ? p.onLabel : p.offLabel;
            if (keepLabel && !keepCell.contains(keepLabel)) {
              keepCell.appendChild(keepLabel);
            }
            keepCell.style.textAlign = "center";
          }
    
          // Body row: swap the stored HTML into the visible cell
          if (p.inBody) {
            keepCell.innerHTML = showOn
              ? (onCell.dataset.gpsOnHtml || "")
              : (offCell.dataset.gpsOffHtml || "");
          }
        });
      }
    
      // Group inputs by data-gps-toggle so mirrors stay in sync
      const groups = new Map();
      document.querySelectorAll("input[data-gps-toggle]").forEach(input => {
        const group = input.getAttribute("data-gps-toggle");
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group).push(input);
      });
    
      groups.forEach((inputs, group) => {
        const tables = new Set(inputs.map(i => i.closest("table")).filter(Boolean));
    
        tables.forEach(table => {
          const tableInputs = inputs.filter(i => i.closest("table") === table);
          if (!tableInputs.length) return;
    
          const { offIndex, onIndex } = findGroupColumnIndexes(table, group);
          if (offIndex === -1 || onIndex === -1) return;
    
          // Cache real cell pairs ONCE, before we collapse anything
          const pairs = collectRowPairs(table, offIndex, onIndex);
    
          function apply(checked) {
            // Sync all toggles in this table
            tableInputs.forEach(i => (i.checked = checked));
            applyToPairs(pairs, !!checked);
          }
    
          // Default state
          apply(false);
    
          tableInputs.forEach(i => {
            i.addEventListener("change", () => apply(i.checked));
          });
        });
      });
    }

    window.addEventListener("load", () => {
      updateProgress();
      initPerPairGpsToggles();
    });

    setInterval(updateProgress, 3600000);
  </script>
</head>
<body>

<h1>Battery Runtime Tests</h1>
<p>Runtime Comparison Under Different Conditions</p>

<h2>Experiment #1 - Default Settings</h2>

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Firmware 2.5.7</li>
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Disabled.</li>
    <li>Frequency 906</li>
    <li>Connected to Android phone via Bluetooth.</li>
  </ul>
  <p>Use case: Mobile Node/ Remote Node.</p>
</details>

<div style="overflow-x: auto;">
  <table>
    <thead>
      <!-- HEADER ROW: column titles -->
      <tr>
        <th>Device</th>
        <th>Heltec ESP32 V2</th>
        <th>Heltec ESP32 V3.1</th>
        <th>Heltec ESP32 V3.2</th>
        <th>Heltec Wireless Paper</th>
        <th>Wireless Stick Lite (V3)</th>
        <th>Heltec Wireless Tracker</th>
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>
        <th data-gps-group="t114-exp1" data-gps="off">Heltec T114 (GPS Off)</th>
        <th data-gps-group="t114-exp1" data-gps="on">Heltec T114 (GPS On)</th>
        <th>Lilygo T-Deck</th>
        <th>RAK19007 (RAK4631)</th>
        <th>RAK19003 (RAK4631)</th>
        <th data-gps-group="t1000e-exp1" data-gps="off">T1000E (GPS Off)</th>
        <th data-gps-group="t1000e-exp1" data-gps="on">T1000E (GPS On)</th>
        <th data-gps-group="thinknode-exp1" data-gps="off">Thinknode M1 (GPS Off)</th>
        <th data-gps-group="thinknode-exp1" data-gps="on">Thinknode M1 (GPS On)</th>
        <th data-gps-group="wio-oled-exp1" data-gps="off">WIO Tracker L1 OLED (GPS Off)</th>
        <th data-gps-group="wio-oled-exp1" data-gps="on">WIO Tracker L1 OLED (GPS On)</th>
        <th data-gps-group="wio-eink-exp1" data-gps="off">WIO Tracker L1 Eink (GPS Off)</th>
        <th data-gps-group="wio-eink-exp1" data-gps="on">WIO Tracker L1 Eink (GPS On)</th>
      </tr>
      <!-- HEADER ROW: toggle placeholders (must match column count exactly) -->
      <tr>
        <th></th> <!-- Device -->
        <th></th> <!-- V2 -->
        <th></th> <!-- V3.1 -->
        <th></th> <!-- V3.2 -->
        <th></th> <!-- Paper -->
        <th></th> <!-- Stick Lite -->
        <th></th> <!-- Tracker -->
        <th></th> <!-- E213 -->
        <th></th> <!-- E290 -->
        <!-- Heltec T114 GPS toggle (OFF column only) -->
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t114-exp1" aria-label="Toggle Heltec T114 GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t114-exp1" aria-label="Toggle Heltec T114 GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th></th> <!-- T-Deck -->
        <th></th> <!-- RAK19007 -->
        <th></th> <!-- RAK19003 -->
        <!-- T1000E GPS toggle (OFF column only) -->
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t1000e-exp1" aria-label="Toggle T1000E GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t1000e-exp1" aria-label="Toggle T1000E GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <!-- Thinknode GPS toggle (OFF column only) -->
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="thinknode-exp1" aria-label="Toggle Thinknode M1 GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="thinknode-exp1" aria-label="Toggle Thinknode M1 GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <!-- WIO OLED GPS toggle (OFF column only) -->
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="wio-oled-exp1" aria-label="Toggle WIO Tracker L1 OLED GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="wio-oled-exp1" aria-label="Toggle WIO Tracker L1 OLED GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <!-- WIO Eink GPS toggle (OFF column only) -->
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="wio-eink-exp1" aria-label="Toggle WIO Tracker L1 Eink GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="wio-eink-exp1" aria-label="Toggle WIO Tracker L1 Eink GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>700mAh Battery</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td></td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>64 Hrs</td><!--T1000-E GPS Off-->
        <td>51 Hrs</td><!--T1000-E GPS On-->
        <td></td><!--Thinknode M1 (GPS Off)-->
        <td></td><!--Thinknode M1 (GPS On)-->
        <td></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td></td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
      <tr>
        <td>1100mAh Battery</td>
        <td>21 Hrs</td><!--Heltec V2-->
        <td>10 Hrs</td><!--Heltec V3-->
        <td>10 Hrs</td><!--Heltec V3.2-->
        <td>9 Hrs</td><!--Wireless Paper-->
        <td>10 Hrs</td><!--Wireless Stick Lite-->
        <td>9 Hrs</td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td>104 Hrs</td><!--Heltec T114 GPS OFF-->
        <td>62 Hrs</td><!--Heltec T114 GPS ON-->
        <td>10 Hrs</td><!--T-Deck-->
        <td>154 Hrs</td><!--RAKRAK19007-->
        <td>156 Hrs</td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
        <td></td><!--Thinknode M1 (GPS Off)-->
        <td></td><!--Thinknode M1 (GPS On)-->
        <td></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td></td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
      <tr>
        <td>1200mAh Battery</td>
        <td>-</td><!--Heltec V2-->
        <td>-</td><!--Heltec V3-->
        <td>-</td><!--Heltec V3.2-->
        <td>-</td><!--Wireless Paper-->
        <td>-</td><!--Wireless Stick Lite-->
        <td>-</td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td>-</td><!--Heltec T114 GPS OFF-->
        <td>-</td><!--Heltec T114 GPS ON-->
        <td>-</td><!--T-Deck-->
        <td>-</td><!--RAKRAK19007-->
        <td>-</td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
        <td>62 Hrs</td><!--Thinknode M1 (GPS Off)-->
        <td>52 Hrs</td><!--Thinknode M1 (GPS On)-->
        <td></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td></td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
      <tr>
        <td>2000mAh Battery</td>
        <td>41 Hrs</td><!--Heltec V2-->
        <td>21 Hrs</td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td>20 Hrs</td><!--Wireless Paper-->
        <td>20 Hrs</td><!--Wireless Stick Lite-->
        <td>13 Hrs</td><!--Wireless Tracker-->
        <td>19 Hrs</td><!--VME213-->
        <td></td><!--VME290-->
        <td>220 Hrs</td><!--Heltec T114 GPS OFF-->
        <td>119 Hrs</td><!--Heltec T114 GPS ON-->
        <td>18 Hrs</td><!--T-Deck-->
        <td>307 Hrs</td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
        <td></td><!--Thinknode M1 (GPS Off)-->
        <td></td><!--Thinknode M1 (GPS On)-->
        <td id="progress2"></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td></td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
      <tr>
        <td>3000mAh Battery</td>
        <td>60 Hrs</td><!--Heltec V2-->
        <td>30 Hrs</td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td>30 Hrs</td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td>19 Hrs</td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td>215 Hrs</td><!--Heltec T114 GPS ON-->
        <td>26 Hrs</td><!--T-Deck-->
        <td>442 Hrs</td><!--RAKRAK19007-->
        <td>453 Hrs</td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
        <td></td><!--Thinknode M1 (GPS Off)-->
        <td></td><!--Thinknode M1 (GPS On)-->
        <td></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td>183 Hrs</td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
      <tr>
        <td>4000mAh Battery</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td></td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
        <td></td><!--Thinknode M1 (GPS Off)-->
        <td></td><!--Thinknode M1 (GPS On)-->
        <td></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td></td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
      <tr>
        <td>5000mAh Battery</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td></td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
        <td></td><!--Thinknode M1 (GPS Off)-->
        <td></td><!--Thinknode M1 (GPS On)-->
        <td></td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td></td><!--WIO Tracker L1 OLED (GPS On)-->
        <td></td><!--WIO Tracker L1 Eink (GPS Off)-->
        <td></td><!--WIO Tracker L1 Eink (GPS On)-->
      </tr>
    </tbody>
  </table>
</div>

<!--<hr>-->

<h2>Experiment #2 - Best Power Saving Settings for Mobile Node/ Remote Node</h2>

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Firmware 2.3.17</li>
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>Note that RAK devices cannot support this mode.</li>
          <li>Power save mode is enabled to extend battery life, it does this by enabling Lite Sleep on ESP32 devices when there's no traffic on the mesh.</li>
          <li>The node will still retransmit any packets while on Lite Sleep and go back to sleep after.</li>
          <li>The Node will wake from Lite Sleep when activity is detected on the mesh, when button is pressed or when sleep duration setting is reached.</li>
          <li>During Lite sleep, the Bluetooth will go on Sleep Mode, making the node draw very low currents. But you will not be able to change settings with the app in this mode.</li>
          <li>After the node is awake. It will automatically reconnect to the app and notify if any messages have been received. You can change settings when this happens.</li>
        </ul>
      </details>
    </li>
    <li>Wait for Blutooth: 10 Sec
      <details>
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>The node will stay awake for this period of time if any packages are receiced to give the node time for the phone to reconnect.</li>
        </ul>
      </details>
    </li>
    <li>Lite Sleep Duration: 1800 sec (30min)
      <details>
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>This setting tells the node how long to maintain Lite Sleep for, this way you can time when you can reconnect to remote nodes with the app should you need to change settings.</li>
        </ul>
      </details>
    </li>
    <li>Frequency 906</li>
    <li>Connected to Android phone via Bluetooth.</li>
  </ul>
  <p>Use case: Mobile Node/ Remote Node.</p>
</details>

<div style="overflow-x: auto;">
  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Heltec ESP32 V2</th>
        <th>Heltec ESP32 V3.1</th>
        <th>Heltec ESP32 V3.2</th>
        <th>Heltec Wireless Paper</th>
        <th>Wireless Stick Lite (V3)</th>
        <th>Heltec Wireless Tracker</th>
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>
        <th data-gps-group="t114-exp2" data-gps="off">Heltec T114 (GPS Off)</th>
        <th data-gps-group="t114-exp2" data-gps="on">Heltec T114 (GPS On)</th>
        <th>Lilygo T-Deck</th>
        <th>RAK19007 (RAK4631)</th>
        <th>RAK19003 (RAK4631)</th>
        <th data-gps-group="t1000e-exp2" data-gps="off">T1000E (GPS Off)</th>
        <th data-gps-group="t1000e-exp2" data-gps="on">T1000E (GPS On)</th>
      </tr>
      <tr>
        <th></th>
        <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t114-exp2" aria-label="Toggle Heltec T114 GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t114-exp2" aria-label="Toggle Heltec T114 GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th></th>
        <th></th><th></th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t1000e-exp2" aria-label="Toggle T1000E GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
        <th class="gps-toggle-cell">
          <label class="gps-switch">
            <input type="checkbox" data-gps-toggle="t1000e-exp2" aria-label="Toggle T1000E GPS columns">
            <span class="gps-slider"></span>
          </label>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>700mAh Battery</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td></td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>66 Hrs</td><!--T1000-E GPS Off-->
        <td>53 Hr</td><!--T1000-E GPS On-->
      </tr>
      <tr>
        <td>1100mAh Battery</td>
        <td>30 Hrs</td><!--Heltec V2-->
        <td>19 Hrs</td><!--Heltec V3-->
        <td><div class="image-hover">61 Hrs<img src="{{ "/assets/images/runtimes/V3_2_1100PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">5 Nodes on Mesh - Firmware 2.5.17 - 1/10/25</span></div></td><!--Heltec V3.2-->
        <td>51 Hrs</td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td>21 Hrs</td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
      </tr>
      <tr>
        <td>2000mAh Battery</td>
        <td>74 Hrs</td><!--Heltec V2-->
        <td>44 Hrs</td><!--Heltec V3-->
        <td id="progress2"><div class="image-hover">110 Hrs<img src="{{ "/assets/images/runtimes/V3_2_2000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">5 Nodes on Mesh - Firmware 2.5.17 - 1/12/25</span></div></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td>35 Hrs</td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
      </tr>
      <tr>
        <td>3000mAh Battery</td>
        <td>119 Hrs</td><!--Heltec V2-->
        <td>80 Hrs</td><!--Heltec V3-->
        <td><div class="image-hover">156 Hrs<img src="{{ "/assets/images/runtimes/V3_2_3000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/17/25</span></div></td><!--Heltec V3.2-->
        <td><div class="image-hover">173 Hrs<img src="{{ "/assets/images/runtimes/PAPER_3000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/17/25</span></div></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td>156 Hrs</td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td>54 Hrs</td><!--T-Deck-->
        <td>442 Hrs</td><!--RAKRAK19007-->
        <td>453 Hrs</td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
      </tr>
      <tr>
        <td>4000mAh Battery</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td>71 Hrs</td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
      </tr>
      <tr>
        <td>5000mAh Battery</td>
        <td></td><!--Heltec V2-->
        <td></td><!--Heltec V3-->
        <td></td><!--Heltec V3.2-->
        <td></td><!--Wireless Paper-->
        <td></td><!--Wireless Stick Lite-->
        <td></td><!--Wireless Tracker-->
        <td></td><!--VME213-->
        <td></td><!--VME290-->
        <td></td><!--Heltec T114 GPS OFF-->
        <td></td><!--Heltec T114 GPS ON-->
        <td></td><!--T-Deck-->
        <td></td><!--RAKRAK19007-->
        <td></td><!--RAKRAK19003-->
        <td>-</td><!--T1000-E GPS Off-->
        <td>-</td><!--T1000-E GPS On-->
      </tr>
    </tbody>
  </table>
</div>

<!--<hr>-->

<h2>Experiment #3 - Best Power Saving Settings for Standalone Nodes</h2>

<details>
  <summary style="cursor: pointer;">Experiment conditions:</summary>
  <ul>
    <li>Firmware 2.3.12</li>
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>Note that RAK devices cannot support this mode.</li>
          <li>Power save mode is enabled to extend battery life, it does this by enabling Lite Sleep on ESP32 devices when there's no traffic on the mesh.</li>
          <li>The node will still retransmit any packets while on Lite Sleep and go back to sleep after.</li>
          <li>The Node will wake from Lite Sleep when activity is detected on the mesh, when button is pressed or when sleep duration setting is reached.</li>
          <li>During Lite sleep, the Bluetooth will go on Sleep Mode, making the node draw very low currents. But you will not be able to change settings with the app in this mode.</li>
          <li>After the node is awake. It will automatically reconnect to the app and notify if any messages have been received. You can change settings when this happens.</li>
        </ul>
      </details>
    </li>
    <li>Lite Sleep Duration: 1800 sec (30min)
      <details>
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>This setting tells the node how long to maintain Lite Sleep for, this way you can time when you can reconnect to remote nodes with the app should you need to change settings.</li>
        </ul>
      </details>
    </li>
    <li>Frequency 906</li>
    <li>Connected to Android phone via Bluetooth.</li>
    <li>CardKB Attached (Tdeck Comes with its own keyboard)</li>
  </ul>
  <p>Use case: Mobile Node/ Standalone</p>
</details>

<details open>
  <summary style="cursor: pointer;">Results:</summary>
  <div style="overflow-x: auto;">
    <table>
      <thead>
        <tr>
          <th>Device</th>
          <th data-gps-group="heltxt-exp3" data-gps="off">Hel-txt (GPS Off)</th>
          <th data-gps-group="heltxt-exp3" data-gps="on">Hel-txt (GPS On)</th>
          <th data-gps-group="nrftxt-exp3" data-gps="off">Nrf-txt (GPS Off)</th>
          <th data-gps-group="nrftxt-exp3" data-gps="on">Nrf-txt (GPS On)</th>
          <th data-gps-group="meshenger-exp3" data-gps="off">Meshenger (GPS Off)</th>
          <th data-gps-group="meshenger-exp3" data-gps="on">Meshenger (GPS On)</th>
          <th>Lilygo T-Deck</th>
        </tr>
        <tr>
          <th></th>
          <th class="gps-toggle-cell">
            <label class="gps-switch">
              <input type="checkbox" data-gps-toggle="heltxt-exp3" aria-label="Toggle Hel-txt GPS columns">
              <span class="gps-slider"></span>
            </label>
          </th>
          <th class="gps-toggle-cell">
            <label class="gps-switch">
              <input type="checkbox" data-gps-toggle="heltxt-exp3" aria-label="Toggle Hel-txt GPS columns">
              <span class="gps-slider"></span>
            </label>
          </th>
          <th class="gps-toggle-cell">
            <label class="gps-switch">
              <input type="checkbox" data-gps-toggle="nrftxt-exp3" aria-label="Toggle Nrf-txt GPS columns">
              <span class="gps-slider"></span>
            </label>
          </th>
          <th class="gps-toggle-cell">
            <label class="gps-switch">
              <input type="checkbox" data-gps-toggle="nrftxt-exp3" aria-label="Toggle Nrf-txt GPS columns">
              <span class="gps-slider"></span>
            </label>
          </th>
          <th class="gps-toggle-cell">
            <label class="gps-switch">
              <input type="checkbox" data-gps-toggle="meshenger-exp3" aria-label="Toggle Meshenger GPS columns">
              <span class="gps-slider"></span>
            </label>
          </th>
          <th class="gps-toggle-cell">
            <label class="gps-switch">
              <input type="checkbox" data-gps-toggle="meshenger-exp3" aria-label="Toggle Meshenger GPS columns">
              <span class="gps-slider"></span>
            </label>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>4000mAh Battery</td>
          <td><div class="image-hover">264 Hrs<img src="{{ "/assets/images/runtimes/HELTXT_4000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/19/25</span></div></td><!--HelTXT GPS off-->
          <td><div class="image-hover">108 Hrs<img src="{{ "/assets/images/runtimes/HELTXT_4000PS_GPS_2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/26/25</span></div></td><!--HelTXT GPS on-->
          <td>276 Hrs</td><!--NRFTXT Gps Off-->
          <td>198 Hrs</td><!--NRFTXT Gps on-->
          <td>166 Hrs</td><!--Meshenger GPS off-->
          <td>175 hrs</td><!--Meshenger GPS On-->
          <td>71 Hrs</td><!--Tdeck-->
        </tr>
      </tbody>
    </table>
  </div>
</details>

</body>
