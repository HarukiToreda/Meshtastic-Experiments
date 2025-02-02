function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");

    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Hide Connect and Flash, show Download button
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
    } else {
        // Show Connect and Flash, hide Download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Maintain existing functionality for Connect and Flash
        if (eraseCheckbox.checked) {
            espWebTools.manifest = "./firmware/" + nodeHW + "/install.json";
        } else {
            espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
        }
    }
}

function showDownloadPopup() {
    // Create the custom download pop-up
    const downloadDialog = document.createElement("ewt-install-dialog");

    // Add a header
    const header = document.createElement("div");
    header.className = "popup-header";
    header.innerHTML = `
        <span class="popup-title">Meshtastic InkHUD</span>
        <span class="popup-close" onclick="document.body.removeChild(this.parentElement.parentElement)">×</span>
    `;

    // Add the message
    const list = document.createElement("ew-list");
    const messageItem = document.createElement("ew-list-item");
    messageItem.innerHTML = `
        <div slot="supporting-text">
            Download and copy the UF2 file to the DFU drive.
        </div>
    `;
    list.appendChild(messageItem);

    // Build the dialog
    downloadDialog.appendChild(header);
    downloadDialog.appendChild(list);

    // Add dialog to the DOM
    document.body.appendChild(downloadDialog);

    // Automatically trigger the file download after showing the dialog
    setTimeout(() => {
        window.location.href = document.getElementById("downloadFirmware").href;
    }, 500); // Short delay to ensure the pop-up is visible
}
