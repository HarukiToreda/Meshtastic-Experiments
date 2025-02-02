// Run this any time the hardware selection changes
function updateFlasherConfig() {
    const hardwareMenu = document.getElementById("hardwareMenu");
    const eraseContainer = document.getElementById("eraseContainer");
    const eraseCheckbox = document.getElementById("eraseCheckbox");
    const espWebTools = document.getElementById("espWebTools");
    const downloadLink = document.getElementById("downloadFirmware");

    // Get the selection from the hardware menu
    const nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Hide flashing button and erase option, show download button
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
    } else {
        // Show flashing button and erase option, hide download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Set the appropriate manifest for flashing
        if (eraseCheckbox.checked) {
            espWebTools.manifest = `./firmware/${nodeHW}/install.json`;
        } else {
            espWebTools.manifest = `./firmware/${nodeHW}/update.json`;
        }
    }
}

// Function to display the Download Firmware popup
function showDownloadPopup() {
    // Prevent interference with `ewt-install-dialog`
    if (document.getElementById("downloadFirmwareDialog")) {
        return; // If the popup already exists, do nothing
    }

    // Create a unique popup for Download Firmware
    const downloadDialog = document.createElement("div");
    downloadDialog.id = "downloadFirmwareDialog";

    // Add the content to the popup
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

    // Trigger the file download after a short delay
    setTimeout(() => {
        const downloadLink = document.getElementById("downloadFirmware");
        if (downloadLink) {
            window.location.href = downloadLink.href;
        }
    }, 500); // Short delay ensures the popup is visible
}
