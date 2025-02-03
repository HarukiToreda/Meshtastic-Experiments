// Function to update the debug window with detailed logs
function updateDebugWindow(logMessage) {
    let debugWindow = document.getElementById("debugWindow");

    // If the debug window doesn't exist, create it
    if (!debugWindow) {
        debugWindow = document.createElement("div");
        debugWindow.id = "debugWindow";

        // Style the debug window
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
        debugWindow.style.width = "350px";
        debugWindow.style.maxHeight = "300px";
        debugWindow.style.overflowY = "auto"; // Scrollable if logs overflow
        document.body.appendChild(debugWindow);
    }

    // Append the new log message
    const timestamp = new Date().toLocaleTimeString();
    debugWindow.innerHTML += `<div>[${timestamp}] ${logMessage}</div>`;
    console.log(`[Debug] ${logMessage}`); // Fallback for browser console
}

// Function to update the flasher configuration
function updateFlasherConfig() {
    const hardwareMenu = document.getElementById("hardwareMenu");
    const eraseCheckbox = document.getElementById("eraseCheckbox");
    const espWebTools = document.getElementById("espWebTools");
    const eraseContainer = document.getElementById("eraseContainer");
    const downloadLink = document.getElementById("downloadFirmware");

    // Get the selected hardware value
    const selectedHardware = hardwareMenu.options[hardwareMenu.selectedIndex]?.value || "None";

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

    // Log the current state to the debug window
    updateDebugWindow(`updateFlasherConfig called:
        Selected Hardware: ${selectedHardware}
        Erase Checkbox Checked: ${eraseCheckbox.checked}
        Manifest: ${manifest}`);
}

// Function to handle checkbox changes directly
function handleEraseCheckboxChange() {
    const hardwareMenu = document.getElementById("hardwareMenu");
    const eraseCheckbox = document.getElementById("eraseCheckbox");
    const espWebTools = document.getElementById("espWebTools");

    // Get the selected hardware value
    const selectedHardware = hardwareMenu.options[hardwareMenu.selectedIndex]?.value || "None";

    // Log the checkbox state change
    updateDebugWindow(`Erase Checkbox Toggled: ${eraseCheckbox.checked}`);

    if (!selectedHardware || selectedHardware === "None") {
        updateDebugWindow("No hardware selected, checkbox change ignored.");
        return;
    }

    // Update the manifest dynamically based on the checkbox state
    const manifest = eraseCheckbox.checked
        ? `./firmware/${selectedHardware}/install.json`
        : `./firmware/${selectedHardware}/update.json`;
    espWebTools.manifest = manifest;

    // Log the checkbox change and manifest update
    updateDebugWindow(`handleEraseCheckboxChange called:
        Selected Hardware: ${selectedHardware}
        Erase Checkbox Checked: ${eraseCheckbox.checked}
        Manifest: ${manifest}`);
}

// Function to ensure the checkbox is respected when Connect and Flash is pressed
function handleConnectAndFlash() {
    const eraseCheckbox = document.getElementById("eraseCheckbox");

    // Check the state of the checkbox
    const isEraseChecked = eraseCheckbox.checked;
    updateDebugWindow(`Connect and Flash button pressed:
        Erase Checkbox State: ${isEraseChecked}`);

    // Explicitly trigger the checkbox handler to ensure the state is respected
    handleEraseCheckboxChange();

    // Proceed with connecting and flashing (or other desired actions)
    updateDebugWindow("Manifest updated and Connect and Flash initiated.");
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

// Ensure both the checkbox and hardware menu always trigger manifest updates
function setupListeners() {
    const hardwareMenu = document.getElementById("hardwareMenu");
    const eraseCheckbox = document.getElementById("eraseCheckbox");
    const connectButton = document.getElementById("connectAndFlashButton");

    // Event listener for hardware dropdown
    hardwareMenu.addEventListener("change", () => {
        updateFlasherConfig();
    });

    // Event listener for checkbox with immediate logging
    eraseCheckbox.addEventListener("change", () => {
        handleEraseCheckboxChange();
    });

    // Event listener for Connect and Flash button
    connectButton.addEventListener("click", () => {
        handleConnectAndFlash();
    });

    // Log the initial state of the checkbox for debugging
    updateDebugWindow(`Initial Checkbox State: ${eraseCheckbox.checked}`);
}

// Initial setup
setupListeners();
updateFlasherConfig();
