// Run this any time 
function updateFlasherConfig() {
    // Get the menu elements
    var hardwareMenu = document.getElementById("hardwareMenu");
    var eraseCheckbox = document.getElementById("eraseCheckbox");
    var espWebTools = document.getElementById("espWebTools");
  
    // Get the selection from the hardware menu
    var nodeHW = hardwareMenu.options[hardwareMenu.selectedIndex].value;
  
    // Decide whether to full-erase, or just update
    if (eraseCheckbox.checked) {
      espWebTools.manifest = "./firmware/" + nodeHW + "/install.json"; 
    }
    else {
      espWebTools.manifest = "./firmware/" + nodeHW + "/update.json";
    }
}