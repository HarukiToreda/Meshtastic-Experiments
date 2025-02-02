function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");

    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Show the Download button for T-Echo
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
    } else {
        // Ensure Connect and Flash logic is intact for all other hardware
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Use the manifest files as per the erase checkbox
        if (eraseCheckbox.checked) {
            espWebTools.manifest = "./firmware/" + nodeHW + "/install.json";
        } else {
            espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
        }
    }
}

function showDownloadPopup() {
    // Create the download-specific pop-up dialog
    const downloadDialog = document.createElement("ewt-install-dialog");

    // Add the header for the download pop-up
    const header = document.createElement("div");
    header.className = "popup-header";
    header.innerHTML = `
        <span class="popup-title">Meshtastic InkHUD</span>
        <span class="popup-close" onclick="document.body.removeChild(this.parentElement.parentElement)">×</span>
    `;

    // Add the message for the download pop-up
    const list = document.createElement("ew-list");
    const messageItem = document.createElement("ew-list-item");
    messageItem.innerHTML = `
        <div slot="supporting-text">
            Download and copy the UF2 file to the DFU drive.
        </div>
    `;
    list.appendChild(messageItem);

    // Build the pop-up for download
    downloadDialog.appendChild(header);
    downloadDialog.appendChild(list);

    // Append the pop-up to the body
    document.body.appendChild(downloadDialog);

    // Trigger file download after a brief delay
    setTimeout(() => {
        const downloadLink = document.getElementById("downloadFirmware");
        if (downloadLink) {
            window.location.href = downloadLink.href;
        }
    }, 500);
}
