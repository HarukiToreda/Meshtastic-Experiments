// Run this any time 
function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseContainer = document.getElementById("eraseContainer");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");
  
    // Get the selection from the hardware menu
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
