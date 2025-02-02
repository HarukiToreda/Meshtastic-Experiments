// Run this any time the hardware selection changes
function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");
    var installButton = document.getElementById("installButton");

    // Get the selection from the hardware menu
    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Hide flashing button and erase option, show download button
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
        installButton.disabled = true; // Disable Connect and Flash button
    } else if (nodeHW === "Select Device") {
        // Disable Connect and Flash button when no device is selected
        installButton.disabled = true;
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";
    } else {
        // Show flashing button and erase option, hide download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";
        installButton.disabled = false; // Enable the Connect and Flash button

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
    // Prevent creating duplicate popups
    if (document.getElementById("downloadFirmwareDialog")) return;

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

// Ensure the button is disabled on page load
window.onload = function() {
    var installButton = document.getElementById("installButton");
    var hardwareMenu = document.getElementById("hardwareMenu");

    // Set default state: disable the button if "Select Device" is selected
    if (hardwareMenu.options[hardwareMenu.selectedIndex].value === "Select Device") {
        installButton.disabled = true;
    }
};
