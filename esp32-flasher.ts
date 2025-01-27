import { ESPLoader } from "https://cdn.jsdelivr.net/gh/espressif/esptool-js@latest/dist/web/esploader.js";

const firmwarePath = "/Meshtastic-Experiments/firmwares/E290_firmware_01-13-25.bin";
let port: SerialPort | null = null;
let loader: ESPLoader | null = null;

const connectButton = document.getElementById("connectButton") as HTMLButtonElement;
const programButton = document.getElementById("programButton") as HTMLButtonElement;
const eraseButton = document.getElementById("eraseButton") as HTMLButtonElement;
const baudRateSelect = document.getElementById("baudrates") as HTMLSelectElement;

const terminalDiv = document.getElementById("terminal")!;
const terminal = new window.Terminal();
terminal.open(terminalDiv);

const logMessage = (message: string) => {
  terminal.writeln(message);
};

connectButton.addEventListener("click", async () => {
  try {
    if (!("serial" in navigator)) {
      throw new Error("Web Serial API not supported in this browser.");
    }

    port = await navigator.serial.requestPort();
    const baudRate = parseInt(baudRateSelect.value, 10);
    await port.open({ baudRate });

    loader = new ESPLoader(port, terminal);
    await loader.initialize();

    logMessage(`Connected to ESP32: ${loader.chipName}`);
  } catch (error) {
    logMessage(`Error: ${(error as Error).message}`);
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
    logMessage(`Error: ${(error as Error).message}`);
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
    logMessage(`Error: ${(error as Error).message}`);
  }
});
