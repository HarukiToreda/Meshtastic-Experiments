function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");

    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

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

        if (eraseCheckbox.checked) {
            espWebTools.manifest = "./firmware/" + nodeHW + "/install.json";
        } else {
            espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
        }
    }
}

function showDownloadPopup() {
    // Create the install dialog element
    const downloadDialog = document.createElement("ewt-install-dialog");

    // Create the header manually
    const header = document.createElement("div");
    header.className = "popup-header";
    header.innerHTML = `
        <span class="popup-title">Meshtastic InkHUD</span>
        <button class="popup-close" onclick="document.body.removeChild(this.parentElement.parentElement)">×</button>
    `;

    // Create a list for the message
    const list = document.createElement("ew-list");

    // Message Content
    const messageItem = document.createElement("ew-list-item");
    messageItem.innerHTML = `
        <div slot="headline">Ensure device DFU mode drive is mounted</div>
        <div slot="supporting-text">
            Download and copy UF2 file to DFU drive.
        </div>
    `;
    list.appendChild(messageItem);

    // Append elements to the dialog
    downloadDialog.appendChild(header); // Now the header is added
    downloadDialog.appendChild(list);

    // Append the dialog to the body
    document.body.appendChild(downloadDialog);

    // Automatically trigger the file download after a slight delay
    setTimeout(() => {
        window.location.href = document.getElementById("downloadFirmware").href;
    }, 500); // Short delay to ensure the pop-up is seen
}
