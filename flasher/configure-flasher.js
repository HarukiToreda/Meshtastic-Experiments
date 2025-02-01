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

    // Set the pop-up title
    downloadDialog.heading = "Download Firmware Instructions";

    // Create a container for the message
    const messageContainer = document.createElement("div");
    messageContainer.className = "message";
    messageContainer.innerHTML = `
        Ensure device DFU mode drive is mounted.<br>
        Download and copy UF2 file to DFU drive.
    `;

    // Automatically trigger the download
    setTimeout(() => {
        window.location.href = document.getElementById("downloadFirmware").href;
    }, 500); // Small delay to show the message before downloading

    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.className = "popup-button";
    closeButton.onclick = function () {
        document.body.removeChild(downloadDialog);
    };

    // Append message and button to the pop-up
    downloadDialog.appendChild(messageContainer);
    downloadDialog.appendChild(closeButton);

    // Add the dialog to the body
    document.body.appendChild(downloadDialog);
}
