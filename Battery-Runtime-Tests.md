---
layout: default
title: Battery Runtime Tests
---
<head>
  <title>Battery Runtime Tests</title>

  <style>
    [hidden] { display: none !important; }
    .gps-switch input:focus-visible + .gps-slider {
      outline: 2px solid #1769aa;
      outline-offset: 3px;
    }
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
    function formatDaysHours(totalHours) {
      const h = Math.max(0, Math.floor(totalHours));
      const days = Math.floor(h / 24);
      const hours = h % 24;
    
      if (days <= 0) return `${hours} hrs`;
      if (hours === 0) return (days === 1) ? `1 day` : `${days} days`;
    
      const dayText = (days === 1) ? `1 day` : `${days} days`;
      return `${dayText}<br>${hours} hrs`;
    }
    function convertHoursTextInCell(cell) {
      if (!cell) return;
    
      // Only touch plain text cells (skip cells that contain <div>, <img>, etc)
      if (cell.children && cell.children.length > 0) return;
    
      const txt = (cell.textContent || "").trim();
    
      // Match: "104 Hrs", "53 Hr", "110 hours", etc
      const m = txt.match(/^(\d+)\s*(h|hr|hrs|hour|hours)$/i);
      if (!m) return;
    
      const hours = parseInt(m[1], 10);
      if (Number.isNaN(hours)) return;
    
      cell.innerHTML = formatDaysHours(hours);
    }
    
    function updateStaticHourCells() {
      document.querySelectorAll("td, th").forEach(cell => {
        // Skip the dynamic progress cells (those become "Started ... ago")
        if (cell.id && cell.id.startsWith("progress")) return;
    
        // Do not touch your "Started ..." strings if any exist elsewhere
        if ((cell.textContent || "").includes("Started")) return;
    
        convertHoursTextInCell(cell);
      });
    }
    function updateProgress() {
      const startTimes = [
        //{ id: 'progress1', start: new Date('2026-02-07T12:57:00') }, // L1 Eink 3000mAh NO GPS
        //<td id="progress1">
        //{ id: 'progress2', start: new Date('2026-02-20T02:34:00') }, // Heltxt GPS ON
        //<td id="progress2">
        //{ id: 'progress3', start: new Date('2026-02-11T03:38:00') }, // T114 No GPS 3000mAh
        //<td id="progress3">
        //{ id: 'progress4', start: new Date('2026-02-11T16:50:00') }, // NRF-TXT GPS On
        //<td id="progress4">
        //{ id: 'progress5', start: new Date('2026-02-13T00:57:00') }, // Heltxt GPS OFF
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
        const diffInHours = (currentDate - item.start) / (1000 * 60 * 60);
        el.innerHTML = `Started ${formatDaysHours(diffInHours)} ago`;
      });
    }

    // Build the GPS toggle header row from the FIRST header row (data-gps-group + data-gps)
    function buildGpsToggleHeaderRows() {
      document.querySelectorAll("table").forEach(table => {
        const thead = table.querySelector("thead");
        if (!thead) return;

        const rows = thead.querySelectorAll("tr");
        if (!rows.length) return;

        const titleRow = rows[0];
        const toggleRow = thead.querySelector("tr.gps-toggle-row");
        if (!toggleRow) return;

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

            const btGroup = titleCell.getAttribute("data-bt-group");
            const btMode = titleCell.getAttribute("data-bt");
            if (btGroup && (btMode === "off" || btMode === "on")) {
              offTh.setAttribute("data-bt-group", btGroup);
              offTh.setAttribute("data-bt", btMode);
              onTh.setAttribute("data-bt-group", btGroup);
              onTh.setAttribute("data-bt", btMode);
            }

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

    // Build the BT toggle header row from the FIRST header row.
    // For non-BT GPS pairs, emit a single blank colspan=2 cell to avoid split placeholders.
    function buildBtToggleHeaderRows() {
      document.querySelectorAll("table").forEach(table => {
        const thead = table.querySelector("thead");
        if (!thead) return;

        const titleRow = thead.querySelector("tr");
        if (!titleRow) return;

        const btRow = thead.querySelector("tr.bt-toggle-row");
        if (!btRow) return;

        btRow.innerHTML = "";

        const titleCells = Array.from(titleRow.children);
        for (let cellIndex = 0; cellIndex < titleCells.length; cellIndex++) {
          const titleCell = titleCells[cellIndex];
          const span = titleCell.colSpan || 1;

          const btGroup = titleCell.getAttribute("data-bt-group");
          const btDefault = titleCell.getAttribute("data-bt-default") || "on";
          const gpsGroup = titleCell.getAttribute("data-gps-group");
          const gpsMode = titleCell.getAttribute("data-gps");

          // BT-enabled pair: render OFF + ON control cells.
          if (btGroup && gpsMode === "off") {
            const offTh = document.createElement("th");
            offTh.className = "gps-toggle-cell";
            offTh.setAttribute("data-bt-group", btGroup);
            offTh.setAttribute("data-bt", "off");
            offTh.innerHTML = `
              <div class="gps-toggle-wrap">
                <span class="gps-toggle-label">BT OFF</span>
                <label class="gps-switch">
                  <input type="checkbox" data-bt-toggle="${btGroup}" data-bt-default="${btDefault}" data-bt-sync-gps="${gpsGroup || ""}" aria-label="Toggle ${btGroup} BT columns">
                  <span class="gps-slider"></span>
                </label>
              </div>
            `;

            const onTh = document.createElement("th");
            onTh.className = "gps-toggle-cell";
            onTh.setAttribute("data-bt-group", btGroup);
            onTh.setAttribute("data-bt", "on");
            onTh.innerHTML = `
              <div class="gps-toggle-wrap">
                <span class="gps-toggle-label">BT ON</span>
                <label class="gps-switch">
                  <input type="checkbox" data-bt-toggle="${btGroup}" data-bt-default="${btDefault}" data-bt-sync-gps="${gpsGroup || ""}" aria-label="Toggle ${btGroup} BT columns">
                  <span class="gps-slider"></span>
                </label>
              </div>
            `;

            btRow.appendChild(offTh);
            btRow.appendChild(onTh);

            const next = titleCells[cellIndex + 1];
            if (next) {
              const nextBtGroup = next.getAttribute("data-bt-group");
              const nextGpsMode = next.getAttribute("data-gps");
              if (nextBtGroup === btGroup && nextGpsMode === "on") cellIndex++;
            }
            continue;
          }

          // Non-BT GPS pair: emit a single blank cell with colspan=2.
          if (!btGroup && gpsGroup && gpsMode === "off") {
            const next = titleCells[cellIndex + 1];
            if (next) {
              const nextGpsGroup = next.getAttribute("data-gps-group");
              const nextGpsMode = next.getAttribute("data-gps");
              if (nextGpsGroup === gpsGroup && nextGpsMode === "on") {
                const blankPair = document.createElement("th");
                blankPair.colSpan = 2;
                btRow.appendChild(blankPair);
                cellIndex++;
                continue;
              }
            }
          }

          const blank = document.createElement("th");
          blank.colSpan = span;
          btRow.appendChild(blank);
        }
      });
    }

    // Return the cell that occupies a given column index, respecting colSpan
    function getCellAtColumn(row, colIndex) {
      let colPos = 0;
      for (const cell of row.children) {
        const span = Number(cell.dataset.originalColspan) || cell.colSpan || 1;
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
        const span = Number(cell.dataset.originalColspan) || cell.colSpan || 1;

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
          // Keep BT control rows independent from GPS pair collapsing.
          if (row.classList && row.classList.contains("bt-toggle-row")) return;

          const offCell = getCellAtColumn(row, offIndex);
          const onCell = getCellAtColumn(row, onIndex);
          if (!offCell || !onCell || offCell === onCell) return;

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

    function initPerPairBtToggles() {
      const groups = new Map();
      document.querySelectorAll("input[data-bt-toggle]").forEach(input => {
        const group = input.getAttribute("data-bt-toggle");
        if (!group) return;
        if (!groups.has(group)) groups.set(group, []);
        groups.get(group).push(input);
      });

      groups.forEach((inputs, group) => {
        const tables = new Set(inputs.map(i => i.closest("table")).filter(Boolean));

        tables.forEach(table => {
          const tableInputs = inputs.filter(i => i.closest("table") === table);
          if (!tableInputs.length) return;

          const btCells = Array.from(table.querySelectorAll(`[data-bt-group="${group}"][data-bt-on][data-bt-off]`));
          if (!btCells.length) return;
          const btControlCells = Array.from(
            table.querySelectorAll(`.bt-toggle-row [data-bt-group="${group}"][data-bt]`)
          );

          const syncGpsGroup = tableInputs[0].getAttribute("data-bt-sync-gps");
          const syncGpsInputs = syncGpsGroup
            ? Array.from(table.querySelectorAll(`input[data-gps-toggle="${syncGpsGroup}"]`))
            : [];

          function apply(showOn) {
            tableInputs.forEach(i => (i.checked = showOn));

            btCells.forEach(cell => {
              const value = showOn
                ? (cell.getAttribute("data-bt-on") || "")
                : (cell.getAttribute("data-bt-off") || "");

              cell.textContent = value;
              convertHoursTextInCell(cell);

              const gpsMode = cell.getAttribute("data-bt-gps");
              if (gpsMode === "off") cell.dataset.gpsOffHtml = cell.innerHTML;
              if (gpsMode === "on") cell.dataset.gpsOnHtml = cell.innerHTML;
            });

            if (btControlCells.length >= 2) {
              let offCell = null;
              let onCell = null;

              btControlCells.forEach(cell => {
                cell.style.display = "";
                cell.colSpan = 1;
                const mode = cell.getAttribute("data-bt");
                if (mode === "off") offCell = cell;
                if (mode === "on") onCell = cell;
              });

              const keepCell = showOn ? onCell : offCell;
              const hideCell = showOn ? offCell : onCell;

              if (hideCell) hideCell.style.display = "none";
              if (keepCell) keepCell.colSpan = 2;
            }

            // Re-apply current GPS state so visible cell updates after BT value swap.
            if (syncGpsInputs.length) syncGpsInputs[0].dispatchEvent(new Event("change"));
          }

          const defaultOn = tableInputs.some(i => i.getAttribute("data-bt-default") === "on");
          apply(defaultOn);

          tableInputs.forEach(i => {
            i.addEventListener("change", () => apply(!!i.checked));
          });
        });
      });
    }
    
    function initRuntimeModeToggle() {
      const table = document.getElementById("runtime-results-table");
      if (!table) return;
      const headers = Array.from(table.querySelector("thead tr").children);
      const toggleRow = document.createElement("tr");
      toggleRow.className = "power-toggle-row";
      const labelCell = document.createElement("th");
      labelCell.textContent = "Power save";
      toggleRow.appendChild(labelCell);

      for (let index = 1; index < headers.length; index++) {
        const header = headers[index];
        const paired = header.dataset.gps === "off" &&
          headers[index + 1]?.dataset.gpsGroup === header.dataset.gpsGroup &&
          headers[index + 1]?.dataset.gps === "on";
        const span = paired ? 2 : 1;
        const cells = Array.from(table.querySelectorAll("tbody tr"))
          .flatMap(row => Array.from(row.children).slice(index, index + span));
        const controlCell = document.createElement("th");
        controlCell.className = "gps-toggle-cell";
        controlCell.colSpan = span;
        // nRF devices keep their normal runtimes and GPS controls without a power save switch.
        if (header.dataset.mcu === "nrf") {
          toggleRow.appendChild(controlCell);
          if (paired) index++;
          continue;
        }
        const label = document.createElement("label");
        label.className = "gps-toggle-wrap";
        const status = document.createElement("span");
        status.className = "gps-toggle-label";
        const switchWrap = document.createElement("span");
        switchWrap.className = "gps-switch";
        const toggle = document.createElement("input");
        toggle.type = "checkbox";
        toggle.dataset.powerToggle = header.textContent.trim();
        toggle.setAttribute("aria-label", `${header.textContent.trim()} power save mode`);
        const slider = document.createElement("span");
        slider.className = "gps-slider";
        switchWrap.append(toggle, slider);
        label.append(status, switchWrap);
        controlCell.appendChild(label);
        toggleRow.appendChild(controlCell);

        function apply() {
          const mode = toggle.checked ? "power-save" : "normal";
          status.textContent = toggle.checked ? "POWER SAVE ON" : "POWER SAVE OFF";
          cells.forEach(cell => {
            cell.querySelectorAll("[data-runtime-mode]").forEach(value => {
              value.hidden = value.dataset.runtimeMode !== mode;
            });
            // Preserve this device's mode when its GPS toggle restores cached HTML.
            if (cell.dataset.gpsOffHtml !== undefined) cell.dataset.gpsOffHtml = cell.innerHTML;
            if (cell.dataset.gpsOnHtml !== undefined) cell.dataset.gpsOnHtml = cell.innerHTML;
          });
        }
        toggle.addEventListener("change", apply);
        apply();
        if (paired) index++;
      }
      table.querySelector("thead").insertBefore(toggleRow, table.querySelector(".gps-toggle-row"));
    }

    window.addEventListener("load", () => {
      buildGpsToggleHeaderRows();
      buildBtToggleHeaderRows();
      updateProgress();
      updateStaticHourCells();   // convert "104 Hrs" -> "4 days 8 hrs"
      document.querySelectorAll("table th, table td").forEach(cell => {
        cell.dataset.originalColspan = cell.colSpan || 1;
      });
      document.querySelectorAll("[data-runtime-mode]").forEach(convertHoursTextInCell);
      initPerPairGpsToggles();   // cache AFTER conversion so toggles keep it
      initPerPairBtToggles();
      initRuntimeModeToggle();
    });

    setInterval(updateProgress, 3600000);
  </script>
</head>
<body>

<h1>Battery Runtime Tests</h1>
<p>Runtime Comparison Under Different Conditions</p>

<h2>Normal and Power Save Runtime Comparison</h2>
<p>Use each device's power save and GPS toggles to compare runtimes independently. An em dash (&mdash;) means no result is recorded for that combination.</p>
<details data-runtime-conditions="normal">
  <summary style="cursor: pointer;">Normal mode experiment conditions:</summary>
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

<details data-runtime-conditions="power-save">
  <summary style="cursor: pointer;">Power save experiment conditions:</summary>
  <ul>
    <li>Firmware 2.3.17</li>
    <li>Client Mode</li>
    <li>Screen Timeout: 60 sec</li>
    <li>Power Savemode Enabled.
      <details>
        <summary style="cursor: pointer;">Details:</summary>
        <ul>
          <li>Note that RAK Battery Sizes cannot support this mode.</li>
          <li>Power save mode is enabled to extend battery life, it does this by enabling Lite Sleep on ESP32 Battery Sizes when there's no traffic on the mesh.</li>
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
  <table id="runtime-results-table">
    <thead>
      <tr>
        <th>Battery Size</th>
        <th>Heltec ESP32 V2</th>
        <th>Heltec ESP32 V3.1</th>
        <th>Heltec ESP32 V3.2</th>
        <th>Heltec Wireless Paper</th>
        <th>Wireless Stick Lite (V3)</th>
        <th>Heltec Wireless Tracker</th>
        <th>Heltec Vision Master E213</th>
        <th>Heltec Vision Master E290</th>
        <th data-mcu="nrf" data-gps-group="t114-exp1" data-gps="off">Heltec Meshnode T114</th>
        <th data-mcu="nrf" data-gps-group="t114-exp1" data-gps="on">Heltec Meshnode T114</th>
        <th>Lilygo T-Deck</th>
        <th data-gps-group="tdeck-pro-runtime" data-gps="off">Lilygo T-Deck Pro</th>
        <th data-gps-group="tdeck-pro-runtime" data-gps="on">Lilygo T-Deck Pro</th>
        <th data-mcu="nrf">RAK19007 (RAK4631)</th>
        <th data-mcu="nrf">RAK19003 (RAK4631)</th>
        <th data-mcu="nrf" data-gps-group="t1000e-exp1" data-gps="off">T1000E</th>
        <th data-mcu="nrf" data-gps-group="t1000e-exp1" data-gps="on">T1000E</th>
        <th data-mcu="nrf" data-gps-group="thinknode-exp1" data-gps="off">Thinknode M1</th>
        <th data-mcu="nrf" data-gps-group="thinknode-exp1" data-gps="on">Thinknode M1</th>
        <th data-mcu="nrf" data-gps-group="wio-oled-exp1" data-gps="off">WIO Tracker L1 OLED</th>
        <th data-mcu="nrf" data-gps-group="wio-oled-exp1" data-gps="on">WIO Tracker L1 OLED</th>
        <th data-mcu="nrf" data-gps-group="wio-eink-exp1" data-gps="off">WIO Tracker L1 Eink</th>
        <th data-mcu="nrf" data-gps-group="wio-eink-exp1" data-gps="on">WIO Tracker L1 Eink</th>
      </tr>
      <tr class="gps-toggle-row"></tr>
    </thead>
    <!-- Runtime editing guide:
         Each node comment identifies the device, GPS state (if available), and battery size.
         data-runtime-mode="normal" is the normal runtime; "power-save" is the power save runtime.
         Enter measured values as hours (for example, 31 Hrs); use &mdash; for unrecorded results.
         nRF devices display only normal runtimes; their power-save fields are retained historical data.
    -->
    <tbody>
      <tr>
        <td>700mAh Battery</td>
        <!-- Heltec ESP32 V2 | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Paper | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">64 Hrs</span>
          <span data-runtime-mode="power-save" hidden>66 Hrs</span>
        </td>
        <!-- T1000E - GPS ON | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">51 Hrs</span>
          <span data-runtime-mode="power-save" hidden>53 Hr</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 700mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>1100mAh Battery</td>
        <!-- Heltec ESP32 V2 | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">21 Hrs</span>
          <span data-runtime-mode="power-save" hidden>30 Hrs</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">10 Hrs</span>
          <span data-runtime-mode="power-save" hidden>19 Hrs</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">10 Hrs</span>
          <span data-runtime-mode="power-save" hidden><div class="image-hover">61 Hrs<img src="{{ "/assets/images/runtimes/V3_2_1100PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">5 Nodes on Mesh - Firmware 2.5.17 - 1/10/25</span></div></span>
        </td>
        <!-- Heltec Wireless Paper | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">9 Hrs</span>
          <span data-runtime-mode="power-save" hidden>51 Hrs</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">10 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">9 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">104 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">62 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">10 Hrs</span>
          <span data-runtime-mode="power-save" hidden>21 Hrs</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">154 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">156 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- T1000E - GPS ON | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 1100mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>1200mAh Battery</td>
        <!-- Heltec ESP32 V2 | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Paper | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS ON | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">62 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">52 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 1200mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>1500mAh Battery</td>
        <!-- Heltec ESP32 V2 | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Paper | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>31 Hrs</span>
        </td>
        <!-- RAK19007 (RAK4631) | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS ON | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 1500mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>2000mAh Battery</td>
        <!-- Heltec ESP32 V2 | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">41 Hrs</span>
          <span data-runtime-mode="power-save" hidden>74 Hrs</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">21 Hrs</span>
          <span data-runtime-mode="power-save" hidden>44 Hrs</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden><div class="image-hover">110 Hrs<img src="{{ "/assets/images/runtimes/V3_2_2000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">5 Nodes on Mesh - Firmware 2.5.17 - 1/12/25</span></div></span>
        </td>
        <!-- Heltec Wireless Paper | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">20 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">20 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">13 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">19 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">220 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">119 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">18 Hrs</span>
          <span data-runtime-mode="power-save" hidden>35 Hrs</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">307 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- T1000E - GPS ON | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">159 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">132 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 2000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>3000mAh Battery</td>
        <!-- Heltec ESP32 V2 | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">60 Hrs</span>
          <span data-runtime-mode="power-save" hidden>119 Hrs</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">30 Hrs</span>
          <span data-runtime-mode="power-save" hidden>80 Hrs</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden><div class="image-hover">156 Hrs<img src="{{ "/assets/images/runtimes/V3_2_3000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/17/25</span></div></span>
        </td>
        <!-- Heltec Wireless Paper | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">30 Hrs</span>
          <span data-runtime-mode="power-save" hidden><div class="image-hover">173 Hrs<img src="{{ "/assets/images/runtimes/PAPER_3000PS-2.5.17.png" | relative_url }}"><span class="tooltip-text">4 Nodes on Mesh - Firmware 2.5.17 - 1/17/25</span></div></span>
        </td>
        <!-- Wireless Stick Lite (V3) | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">19 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>156 Hrs</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">320 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">215 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">26 Hrs</span>
          <span data-runtime-mode="power-save" hidden>54 Hrs</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">442 Hrs</span>
          <span data-runtime-mode="power-save" hidden>442 Hrs</span>
        </td>
        <!-- RAK19003 (RAK4631) | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">453 Hrs</span>
          <span data-runtime-mode="power-save" hidden>453 Hrs</span>
        </td>
        <!-- T1000E - GPS OFF | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- T1000E - GPS ON | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">334 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 3000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">183 Hrs</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>4000mAh Battery</td>
        <!-- Heltec ESP32 V2 | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Paper | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>71 Hrs</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- T1000E - GPS ON | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 4000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
      <tr>
        <td>5000mAh Battery</td>
        <!-- Heltec ESP32 V2 | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.1 | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec ESP32 V3.2 | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Paper | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Wireless Stick Lite (V3) | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Wireless Tracker | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E213 | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Vision Master E290 | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS OFF | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Heltec Meshnode T114 - GPS ON | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS OFF | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Lilygo T-Deck Pro - GPS ON | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19007 (RAK4631) | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- RAK19003 (RAK4631) | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- T1000E - GPS OFF | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- T1000E - GPS ON | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">-</span>
          <span data-runtime-mode="power-save" hidden>-</span>
        </td>
        <!-- Thinknode M1 - GPS OFF | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- Thinknode M1 - GPS ON | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS OFF | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 OLED - GPS ON | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS OFF | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
        <!-- WIO Tracker L1 Eink - GPS ON | 5000mAh Battery -->
        <td data-runtime-cell>
          <span data-runtime-mode="normal">&mdash;</span>
          <span data-runtime-mode="power-save" hidden>&mdash;</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

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
    <li>Wait For Bluetooth: 10 sec</li>
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
    <table id="exp3-results-table">
      <thead>
        <tr>
          <th>Battery Size</th>
          <th data-bt-group="heltxt-exp3" data-bt-default="on" data-gps-group="heltxt-exp3" data-gps="off">Hel-txt</th>
          <th data-bt-group="heltxt-exp3" data-bt-default="on" data-gps-group="heltxt-exp3" data-gps="on">Hel-txt</th>
          <th data-gps-group="nrftxt-exp3" data-gps="off">Nrf-txt</th>
          <th data-gps-group="nrftxt-exp3" data-gps="on">Nrf-txt</th>
          <th data-gps-group="meshenger-exp3" data-gps="off">Meshenger</th>
          <th data-gps-group="meshenger-exp3" data-gps="on">Meshenger</th>
          <th>Lilygo T-Deck</th>
          <th>Lilygo T-Deck Pro</th>
        </tr>
        <tr class="bt-toggle-row"></tr>
        <tr class="gps-toggle-row"></tr>
      </thead>
      <tbody>
        <tr>
          <td>4000mAh Battery</td>
          <td data-bt-group="heltxt-exp3" data-bt-gps="off" data-bt-off="" data-bt-on="126 Hrs">126 Hrs</td><!--HelTXT GPS off-->
          <td data-bt-group="heltxt-exp3" data-bt-gps="on" data-bt-off="" data-bt-on="78 Hrs">78 Hrs</td><!--HelTXT GPS on-->
          <td>276 Hrs</td><!--NRFTXT Gps Off-->
          <td>181 Hrs</td><!--NRFTXT Gps on-->
          <td>166 Hrs</td><!--Meshenger GPS off-->
          <td>175 hrs</td><!--Meshenger GPS On-->
          <td>71 Hrs</td><!--Tdeck-->
          <td></td><!--T-Deck Pro-->
        </tr>
      </tbody>
    </table>
  </div>
</details>

</body>
