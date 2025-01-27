import { Terminal } from "https://cdn.jsdelivr.net/npm/xterm@4.19.0/lib/xterm.js";
import { ESPLoader } from "https://cdn.jsdelivr.net/gh/espressif/esptool-js@latest/dist/web/esploader.js";

const firmwarePath = "/Meshtastic-Experiments/firmwares/E290_firmware_01-13-25.bin";
let port = null;
let loader = null;

const connectButton = document.getElementById("connectButton");
const programButton = document.getElementById("programButton");
const eraseButton = document.getElementById("eraseButton");
const baudRateSelect = document.getElementById("baudrates");

const terminalDiv = document.getElementById("terminal");
const terminal = new Terminal();
terminal.open(terminalDiv);

const logMessage = (message) => {
  terminal.writeln(message);
};

if (!("serial" in navigator)) {
  alert("Your browser does not support the Web Serial API. Please use Chrome or Edge.");
  connectButton.disabled = true;
}

connectButton.addEventListener("click", async () => {
  logMessage("Connect button clicked.");
  try {
    port = await navigator.serial.requestPort();
    const baudRate = parseInt(baudRateSelect.value, 10);
    await port.open({ baudRate });
    loader = new ESPLoader(port, terminal);
    await loader.initialize();
    logMessage(`Connected to ESP32: ${loader.chipName}`);
  } catch (error) {
    logMessage(`Error: ${error.message}`);
  }
});

programButton.addEventListener("click", async () => {
  if (!loader) {
    logMessage("Error: No ESP32 connected.");
    return;
  }

  try {
    logMessage(`Downloading firmware from ${firmwarePath}...`);
    const response = await fetch(firmwarePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch firmware: ${response.statusText}`);
    }

    const firmware = new Uint8Array(await response.arrayBuffer());
    logMessage("Flashing firmware...");
    await loader.flashData(firmware, 0x1000);
    logMessage("Firmware successfully flashed!");
  } catch (error) {
    logMessage(`Error: ${error.message}`);
  }
});

eraseButton.addEventListener("click", async () => {
  if (!loader) {
    logMessage("Error: No ESP32 connected.");
    return;
  }

  try {
    logMessage("Erasing flash...");
    await loader.eraseFlash();
    logMessage("Flash successfully erased!");
  } catch (error) {
    logMessage(`Error: ${error.message}`);
  }
});
