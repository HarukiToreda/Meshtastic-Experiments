// Run this any time the hardware selection changes
function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");

    // Get the selection from the hardware menu
    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (nodeHW === "T-Echo") {
        // Hide flashing button and erase option, show download button
        espWebTools.style.display = "none";
        eraseContainer.style.display = "none";
        downloadLink.style.display = "block";
    } else if (nodeHW === "Select Device") {
        // Keep Connect and Flash button visible, but validation required
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";
    } else {
        // Show flashing button and erase option, hide download button
        espWebTools.style.display = "block";
        eraseContainer.style.display = "flex";
        downloadLink.style.display = "none";

        // Set the appropriate manifest for flashing
        espWebTools.manifest = `./firmware/${nodeHW}/install.json`;
    }
}

// Function to show a popup message
function showValidationPopup(message) {
    // Prevent creating duplicate popups
    if (document.getElementById("validationPopup")) return;

    // Create the popup element
    const validationPopup = document.createElement("div");
    validationPopup.id = "validationPopup";

    // Add message content
    validationPopup.innerHTML = `
        <p>${message}</p>
        <button onclick="document.body.removeChild(this.parentElement)">Close</button>
    `;

    // Append popup to the body
    document.body.appendChild(validationPopup);
}

// Add event listener for the Connect and Flash button
document.getElementById("installButton").addEventListener("click", function (event) {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var selectedHardware = hardwareMenu.options[hardwareMenu.selectedIndex].value;

    if (selectedHardware === "Select Device") {
        // Prevent the default flashing behavior and show a popup
        event.preventDefault();
        showValidationPopup("You must select the Hardware");
    }
});
