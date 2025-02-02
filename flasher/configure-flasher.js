function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");

    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Show Download button for T-Echo and hide Flashing UI
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
    } else {
        // Show Flashing UI and hide Download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Configure espWebTools for flashing
        if (eraseCheckbox.checked) {
            espWebTools.manifest = "./firmware/" + nodeHW + "/install.json";
        } else {
            espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
        }
    }
}

function showDownloadPopup() {
    // Create a dialog specifically for Download Firmware
    const downloadDialog = document.createElement("div");
    downloadDialog.id = "downloadFirmwareDialog";

    // Add the header for the pop-up
    const header = document.createElement("div");
    header.className = "popup-header";
    header.innerHTML = `
        <span class="popup-title">Meshtastic InkHUD</span>
        <span class="popup-close" onclick="document.body.removeChild(this.parentElement.parentElement)">×</span>
    `;

    // Add the message for the pop-up
    const message = document.createElement("div");
    message.className = "popup-message";
    message.innerHTML = "Download and copy the UF2 file to the DFU drive.";

    // Assemble the dialog
    downloadDialog.appendChild(header);
    downloadDialog.appendChild(message);

    // Style and add the dialog to the body
    downloadDialog.style.display = "flex";
    document.body.appendChild(downloadDialog);

    // Automatically trigger the download after a short delay
    setTimeout(() => {
        const downloadLink = document.getElementById("downloadFirmware");
        if (downloadLink) {
            window.location.href = downloadLink.href;
        }
    }, 500);
}
