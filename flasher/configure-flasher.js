// Run this any time 
function updateFlasherConfig() {
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
    var downloadLink = document.getElementById("downloadFirmware");
    var installButton = document.getElementById("installButton");
  
    // Get the selection from the hardware menu
    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;
  
    // Decide whether to full-erase, or just update
    if (nodeHW === "T-Echo") {
        // Hide flashing button and show download link
        espWebTools.style.display = "none";
        downloadLink.style.display = "block";
    } else {
        // Show flashing button and hide download link
        espWebTools.style.display = "block";
        downloadLink.style.display = "none";

        if (eraseCheckbox.checked) {
            espWebTools.manifest = "./firmware/" + nodeHW + "/install.json";
        } else {
            espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
        }
    }
}
