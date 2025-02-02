// Function to update the debug window with the current configuration
function updateDebugWindow(selectedHardware, isEraseChecked, manifest) {
    let debugWindow = document.getElementById("debugWindow");

    if (!debugWindow) {
        debugWindow = document.createElement("div");
        debugWindow.id = "debugWindow";
        debugWindow.style.position = "fixed";
        debugWindow.style.bottom = "20px";
        debugWindow.style.right = "20px";
        debugWindow.style.background = "#2A2A2A";
        debugWindow.style.color = "#FFFFFF";
        debugWindow.style.padding = "10px";
        debugWindow.style.borderRadius = "8px";
        debugWindow.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
        debugWindow.style.zIndex = "1000";
        debugWindow.style.fontSize = "14px";
        debugWindow.style.width = "300px";
        debugWindow.style.wordWrap = "break-word";
        document.body.appendChild(debugWindow);
    }

    debugWindow.innerHTML = `
        <strong>Debug Window</strong>
        <div>Selected Hardware: <code>${selectedHardware}</code></div>
        <div>Erase Checkbox Checked: <code>${isEraseChecked}</code></div>
        <div>Manifest: <code>${manifest}</code></div>
    `;
}

// Function to update flasher configuration
function updateFlasherConfig() {
    const hardwareMenu = document.getElementById("hardwareMenu");
    const eraseCheckbox = document.getElementById("eraseCheckbox");
    const espWebTools = document.getElementById("espWebTools");
    const eraseContainer = document.getElementById("eraseContainer");
    const downloadLink = document.getElementById("downloadFirmware");

    // Get the selected hardware value
    const selectedHardware = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    let manifest;

    if (selectedHardware === "T-Echo") {
        // Handle T-Echo: show the download button and hide flashing options
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
        manifest = "No flashing (Download Mode)";
    } else {
        // Handle other devices: show flashing options and hide the download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Update the manifest dynamically based on the checkbox state
        manifest = eraseCheckbox.checked
            ? `./firmware/${selectedHardware}/install.json`
            : `./firmware/${selectedHardware}/update.json`;
        espWebTools.manifest = manifest;
    }

    // Update the debug window
    updateDebugWindow(selectedHardware, eraseCheckbox.checked, manifest);
}

// Function to show the download popup
function showDownloadPopup() {
    // Prevent duplicate popups
    if (document.getElementById("downloadFirmwareDialog")) return;

    // Create the popup
    const downloadDialog = document.createElement("div");
    downloadDialog.id = "downloadFirmwareDialog";
    downloadDialog.innerHTML = `
        <div class="popup-header">
            <span class="popup-title">Meshtastic InkHUD</span>
            <span class="popup-close" onclick="document.body.removeChild(this.parentElement.parentElement)">×</span>
        </div>
        <div class="popup-message">
            Download and copy the UF2 file to the DFU drive.
        </div>
    `;

    // Append the popup to the body
    document.body.appendChild(downloadDialog);

    // Automatically trigger the file download after a short delay
    setTimeout(() => {
        const downloadLink = document.getElementById("downloadFirmware");
        if (downloadLink) {
            window.location.href = downloadLink.href;
        }
    }, 500); // Short delay ensures the popup is visible
}

// Add onchange event listeners for both dropdown and checkbox
document.getElementById("hardwareMenu").addEventListener("change", updateFlasherConfig);
document.getElementById("eraseCheckbox").addEventListener("change", updateFlasherConfig);

// Run updateFlasherConfig on initial load to set default states
updateFlasherConfig();
