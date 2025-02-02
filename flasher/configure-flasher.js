// Function to update the UI based on selected hardware
function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");

    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Show Download button and hide flashing UI
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
    } else {
        // Show flashing UI and hide Download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Configure esp-web-tools based on selected hardware
        if (eraseCheckbox.checked) {
            espWebTools.manifest = "./firmware/" + nodeHW + "/install.json";
        } else {
            espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
        }
    }
}

// Function to display the Download Firmware pop-up
function showDownloadPopup() {
    // Create a unique dialog for Download Firmware
    const downloadDialog = document.createElement("div");
    downloadDialog.id = "downloadFirmwareDialog";

    // Add the header
    downloadDialog.innerHTML = `
        <div class="popup-header">
            <span class="popup-title">Meshtastic InkHUD</span>
            <span class="popup-close" onclick="document.body.removeChild(this.parentElement.parentElement)">×</span>
        </div>
        <div class="popup-message">
            Download and copy the UF2 file to the DFU drive.
        </div>
    `;

    // Style and append the dialog
    downloadDialog.style.display = "flex";
    document.body.appendChild(downloadDialog);

    // Trigger the file download after a short delay
    setTimeout(() => {
        const downloadLink = document.getElementById("downloadFirmware");
        if (downloadLink) {
            window.location.href = downloadLink.href;
        }
    }, 500);
}
