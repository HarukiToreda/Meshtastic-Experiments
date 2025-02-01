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
    // Create a new install dialog element
    const downloadDialog = document.createElement("ewt-install-dialog");

    // Set the pop-up title and message
    downloadDialog.heading = "Download Firmware Instructions";
    downloadDialog.message = "Ensure device DFU mode drive is mounted.<br>Download and copy UF2 file to DFU drive.";

    // Add the button to continue with the download
    const continueButton = document.createElement("button");
    continueButton.innerText = "Continue";
    continueButton.className = "popup-button";
    continueButton.onclick = function () {
        window.location.href = document.getElementById("downloadFirmware").href;
        document.body.removeChild(downloadDialog);
    };

    // Add close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.className = "popup-button";
    closeButton.onclick = function () {
        document.body.removeChild(downloadDialog);
    };

    // Append buttons to the dialog
    downloadDialog.appendChild(continueButton);
    downloadDialog.appendChild(closeButton);
    document.body.appendChild(downloadDialog);
}
