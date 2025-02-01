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
    // Create the pop-up container
    const downloadDialog = document.createElement("ewt-install-dialog");
    downloadDialog.setAttribute("open", "");

    // Create a list to match the existing Flasher pop-up structure
    const list = document.createElement("ew-list");

    // Create the message content inside an ew-list-item
    const messageItem = document.createElement("ew-list-item");
    messageItem.innerHTML = `
        <div slot="headline">Ensure device DFU mode drive is mounted</div>
        <div slot="supporting-text">
            Download and copy UF2 file to DFU drive.
        </div>
    `;
    list.appendChild(messageItem);

    // Add a close button
    const closeButton = document.createElement("ew-list-item");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("class", "danger");
    closeButton.innerHTML = `
        <div slot="headline">Close</div>
    `;
    closeButton.addEventListener("click", () => {
        document.body.removeChild(downloadDialog);
    });

    list.appendChild(closeButton);
    downloadDialog.appendChild(list);

    // Append the dialog to the body
    document.body.appendChild(downloadDialog);

    // Automatically trigger the file download
    setTimeout(() => {
        window.location.href = document.getElementById("downloadFirmware").href;
    }, 500); // Short delay to show the pop-up before the download starts
}
