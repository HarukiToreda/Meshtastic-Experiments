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
    .gps-toggle-label{
      display:block;
      font-size:11px;
      font-weight:700;
      line-height:1.1;
      margin-bottom:4px;
      user-select:none;
      white-space:normal;
    }
    .gps-toggle-wrap{
      display:inline-flex;
      flex-direction:column;
      align-items:center;
      gap:4px;
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
        { id: 'progress1', start: new Date('2026-02-07T12:57:00') }, // L1 Eink 3000mAh NO GPS
        //<td id="progress1">
        { id: 'progress2', start: new Date('2026-02-11T01:37:00') }, // L1 OLED 2000mAh gps
        //<td id="progress2">
        { id: 'progress3', start: new Date('2026-02-11T03:38:00') }, // T114 No GPS 3000mAh
        //<td id="progress3">
        { id: 'progress4', start: new Date('2026-02-11T16:50:00') }, // NRF-TXT GPS On
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

    // Build the GPS toggle header row from the FIRST header row (data-gps-group + data-gps)
    function buildGpsToggleHeaderRows() {
      document.querySelectorAll("table").forEach(table => {
        const thead = table.querySelector("thead");
        if (!thead) return;

        const rows = thead.querySelectorAll("tr");
        if (rows.length < 2) return;

        const titleRow = rows[0];
        const toggleRow = rows[1];

        // Only replace rows we mark as placeholders
        if (!toggleRow.classList.contains("gps-toggle-row")) return;

        toggleRow.innerHTML = "";

        // We need to emit EXACTLY the same number of visual columns as the title row
        // so everything after a GPS pair does not shift.
        const titleCells = Array.from(titleRow.children);

        for (let cellIndex = 0; cellIndex < titleCells.length; cellIndex++) {
          const titleCell = titleCells[cellIndex];
          const span = titleCell.colSpan || 1;

          const group = titleCell.getAttribute("data-gps-group");
          const mode = titleCell.getAttribute("data-gps");

          // Normal header cell: create matching blank cells respecting colSpan
          if (!group || (mode !== "off" && mode !== "on")) {
            for (let i = 0; i < span; i++) toggleRow.appendChild(document.createElement("th"));
            continue;
          }

          // GPS pair handling:
          // - When we see the OFF header, we create TWO toggle cells (OFF + ON)
          // - We also consume the next title cell if it is the matching ON header
          if (mode === "off") {
            const offTh = document.createElement("th");
            offTh.className = "gps-toggle-cell";
            offTh.innerHTML = `
              <div class="gps-toggle-wrap">
                <span class="gps-toggle-label">GPS OFF</span>
                <label class="gps-switch">
                  <input type="checkbox" data-gps-toggle="${group}" aria-label="Toggle ${group} GPS columns">
                  <span class="gps-slider"></span>
                </label>
              </div>
            `;

            const onTh = document.createElement("th");
            onTh.className = "gps-toggle-cell";
            onTh.innerHTML = `
              <div class="gps-toggle-wrap">
                <span class="gps-toggle-label">GPS ON</span>
                <label class="gps-switch">
                  <input type="checkbox" data-gps-toggle="${group}" aria-label="Toggle ${group} GPS columns">
                  <span class="gps-slider"></span>
                </label>
              </div>
            `;

            toggleRow.appendChild(offTh);
            toggleRow.appendChild(onTh);

            // If the very next header cell is the ON partner for the same group, skip it
            const next = titleCells[cellIndex + 1];
            if (next) {
              const nextGroup = next.getAttribute("data-gps-group");
              const nextMode = next.getAttribute("data-gps");
              if (nextGroup === group && nextMode === "on") {
                cellIndex++;
              }
            }

            continue;
          }

          // If we ever hit a stray "on" without seeing "off" first, emit a blank
          toggleRow.appendChild(document.createElement("th"));
        }
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

          const offWrap = !inBody ? offCell.querySelector(".gps-toggle-wrap") : null;
          const onWrap  = !inBody ? onCell.querySelector(".gps-toggle-wrap")  : null;
          const isToggleRow = !inBody && (offWrap || onWrap);

          // Cache body HTML once
          if (inBody) {
            if (offCell.dataset.gpsOffHtml === undefined) offCell.dataset.gpsOffHtml = offCell.innerHTML;
            if (onCell.dataset.gpsOnHtml === undefined) onCell.dataset.gpsOnHtml = onCell.innerHTML;
          }

          pairs.push({
            offCell,
            onCell,
            inBody,
            isToggleRow,
            offWrap,
            onWrap
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

          // Toggle row: put wrappers back where they belong before re-collapsing
          if (p.isToggleRow) {
            if (p.offWrap && !offCell.contains(p.offWrap)) offCell.appendChild(p.offWrap);
            if (p.onWrap  && !onCell.contains(p.onWrap))   onCell.appendChild(p.onWrap);
          }

          // Body row: restore original HTML before re-collapsing
          if (p.inBody) {
            offCell.innerHTML = offCell.dataset.gpsOffHtml || "";
            onCell.innerHTML = onCell.dataset.gpsOnHtml || "";
          }

          const keepCell = showOn ? onCell : offCell;
          const hideCell = showOn ? offCell : onCell;

          // Collapse
          hideCell.style.display = "none";
          keepCell.colSpan = 2;

          // Toggle row: move the correct wrapper into the visible cell
          if (p.isToggleRow) {
            const keepWrap = showOn ? p.onWrap : p.offWrap;
            if (keepWrap && !keepCell.contains(keepWrap)) keepCell.appendChild(keepWrap);
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
      buildGpsToggleHeaderRows();
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
    <li>Firmware 2.7.19</li>
    <li>Role: Client</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode: Disabled.</li>
    <li>Frequency: 906</li>
    <li>Mesh size: 20-30 active nodes</li>
    <li>For GPS Only tests: Nodes were placed next to the window to allow continuous GPS satellite lock</li>
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
        <th data-gps-group="t114-exp1" data-gps="off">Heltec Meshnode T114</th>
        <th data-gps-group="t114-exp1" data-gps="on">Heltec Meshnode T114</th>
        <th>Lilygo T-Deck</th>
        <th>RAK19007 (RAK4631)</th>
        <th>RAK19003 (RAK4631)</th>
        <th data-gps-group="t1000e-exp1" data-gps="off">T1000E</th>
        <th data-gps-group="t1000e-exp1" data-gps="on">T1000E</th>
        <th data-gps-group="thinknode-exp1" data-gps="off">Thinknode M1</th>
        <th data-gps-group="thinknode-exp1" data-gps="on">Thinknode M1</th>
        <th data-gps-group="wio-oled-exp1" data-gps="off">WIO Tracker L1 OLED</th>
        <th data-gps-group="wio-oled-exp1" data-gps="on">WIO Tracker L1 OLED</th>
        <th data-gps-group="wio-eink-exp1" data-gps="off">WIO Tracker L1 Eink</th>
        <th data-gps-group="wio-eink-exp1" data-gps="on">WIO Tracker L1 Eink</th>
      </tr>
      <!-- HEADER ROW: toggle placeholders (auto-built by JS) -->
      <tr class="gps-toggle-row"></tr>
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
        <td>159 Hrs</td><!--WIO Tracker L1 OLED (GPS Off)-->
        <td id="progress2"></td><!--WIO Tracker L1 OLED (GPS On)-->
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
        <td id="progress3"></td><!--Heltec T114 GPS OFF-->
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
        <td id="progress1"></td><!--WIO Tracker L1 Eink (GPS Off)-->
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
        <th data-gps-group="t114-exp2" data-gps="off">Heltec Meshnode T114</th>
        <th data-gps-group="t114-exp2" data-gps="on">Heltec Meshnode T114</th>
        <th>Lilygo T-Deck</th>
        <th>RAK19007 (RAK4631)</th>
        <th>RAK19003 (RAK4631)</th>
        <th data-gps-group="t1000e-exp2" data-gps="off">T1000E</th>
        <th data-gps-group="t1000e-exp2" data-gps="on">T1000E</th>
      </tr>
      <tr class="gps-toggle-row"></tr>
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
          <th data-gps-group="heltxt-exp3" data-gps="off">Hel-txt</th>
          <th data-gps-group="heltxt-exp3" data-gps="on">Hel-txt</th>
          <th data-gps-group="nrftxt-exp3" data-gps="off">Nrf-txt</th>
          <th data-gps-group="nrftxt-exp3" data-gps="on">Nrf-txt</th>
          <th data-gps-group="meshenger-exp3" data-gps="off">Meshenger</th>
          <th data-gps-group="meshenger-exp3" data-gps="on">Meshenger</th>
          <th>Lilygo T-Deck</th>
        </tr>
        <tr class="gps-toggle-row"></tr>
      </thead>
      <tbody>
        <tr>
          <td>4000mAh Battery</td>
          <td><div class="image-hover">264 Hrs<img src="{{ "/assets/images/runtimes/HELTXT_4000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/19/25</span></div></td><!--HelTXT GPS off-->
          <td><div class="image-hover">108 Hrs<img src="{{ "/assets/images/runtimes/HELTXT_4000PS_GPS_2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/26/25</span></div></td><!--HelTXT GPS on-->
          <td>276 Hrs</td><!--NRFTXT Gps Off-->
          <td id="progress4">198 Hrs</td><!--NRFTXT Gps on-->
          <td>166 Hrs</td><!--Meshenger GPS off-->
          <td>175 hrs</td><!--Meshenger GPS On-->
          <td>71 Hrs</td><!--Tdeck-->
        </tr>
      </tbody>
    </table>
  </div>
</details>

</body>
