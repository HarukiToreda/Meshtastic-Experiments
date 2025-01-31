"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var baudrates = document.getElementById("baudrates");
var consoleBaudrates = document.getElementById("consoleBaudrates");
var connectButton = document.getElementById("connectButton");
var traceButton = document.getElementById("copyTraceButton");
var disconnectButton = document.getElementById("disconnectButton");
var resetButton = document.getElementById("resetButton");
var consoleStartButton = document.getElementById("consoleStartButton");
var consoleStopButton = document.getElementById("consoleStopButton");
var eraseButton = document.getElementById("eraseButton");
var addFileButton = document.getElementById("addFile");
var programButton = document.getElementById("programButton");
var filesDiv = document.getElementById("files");
var terminal = document.getElementById("terminal");
var programDiv = document.getElementById("program");
var consoleDiv = document.getElementById("console");
var lblBaudrate = document.getElementById("lblBaudrate");
var lblConsoleBaudrate = document.getElementById("lblConsoleBaudrate");
var lblConsoleFor = document.getElementById("lblConsoleFor");
var lblConnTo = document.getElementById("lblConnTo");
var table = document.getElementById("fileTable");
var alertDiv = document.getElementById("alertDiv");
var debugLogging = document.getElementById("debugLogging");
// This is a frontend example of Esptool-JS using local bundle file
// To optimize use a CDN hosted version like
// https://unpkg.com/esptool-js@0.5.0/bundle.js
var lib_1 = require("../../../lib");
var web_serial_polyfill_1 = require("web-serial-polyfill");
var serialLib = !navigator.serial && navigator.usb ? web_serial_polyfill_1.serial : navigator.serial;
var term = new Terminal({ cols: 120, rows: 40 });
term.open(terminal);
var device = null;
var transport;
var chip = null;
var esploader;
disconnectButton.style.display = "none";
traceButton.style.display = "none";
eraseButton.style.display = "none";
consoleStopButton.style.display = "none";
resetButton.style.display = "none";
filesDiv.style.display = "none";
/**
 * The built in Event object.
 * @external Event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */
/**
 * File reader handler to read given local file.
 * @param {Event} evt File Select event
 */
function handleFileSelect(evt) {
    var file = evt.target.files[0];
    if (!file)
        return;
    var reader = new FileReader();
    reader.onload = function (ev) {
        evt.target.data = ev.target.result;
    };
    reader.readAsBinaryString(file);
}
var espLoaderTerminal = {
    clean: function () {
        term.clear();
    },
    writeLine: function (data) {
        term.writeln(data);
    },
    write: function (data) {
        term.write(data);
    },
};
connectButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var flashOptions, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 8]);
                // Check if Web Serial API is supported
                if (!('serial' in navigator)) {
                    throw new Error('Web Serial API not supported. Use Chrome/Edge 89+.');
                }
                // Log: Requesting serial port
                console.log('Requesting serial port...');
                term.writeln('Requesting serial port...');
                return [4 /*yield*/, navigator.serial.requestPort({})];
            case 1:
                // Request serial port access
                device = _a.sent();
                console.log('Serial port selected:', device);
                term.writeln('Serial port selected.');
                // Log: Opening serial port
                console.log('Opening serial port...');
                term.writeln('Opening serial port...');
                // Open the port with default settings
                return [4 /*yield*/, device.open({ baudRate: 115200 })];
            case 2:
                // Open the port with default settings
                _a.sent();
                console.log('Serial port opened.');
                term.writeln('Serial port opened.');
                flashOptions = {
                    transport: new lib_1.Transport(device, true),
                    baudrate: parseInt(baudrates.value),
                    terminal: espLoaderTerminal,
                    debugLogging: debugLogging.checked,
                };
                esploader = new lib_1.ESPLoader(flashOptions);
                // Log: Connecting to device
                console.log('Connecting to device...');
                term.writeln('Connecting to device...');
                return [4 /*yield*/, esploader.main()];
            case 3:
                chip = _a.sent();
                console.log('Connected to device:', chip);
                term.writeln("Connected to device: ".concat(chip));
                // Update UI
                document.getElementById('connect-btn').disabled = true;
                document.getElementById('connection-status').textContent = '✅ Connected';
                document.getElementById('flash-btn').disabled = false;
                log('Connected to device');
                // Load devices after connection
                return [4 /*yield*/, loadDevices()];
            case 4:
                // Load devices after connection
                _a.sent();
                return [3 /*break*/, 8];
            case 5:
                error_1 = _a.sent();
                console.error('Connection error:', error_1);
                term.writeln("Connection error: ".concat(error_1.message));
                if (!device) return [3 /*break*/, 7];
                return [4 /*yield*/, device.close()];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7:
                device = null;
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
traceButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (transport) {
            transport.returnTrace();
        }
        return [2 /*return*/];
    });
}); };
resetButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!transport) return [3 /*break*/, 4];
                return [4 /*yield*/, transport.setDTR(false)];
            case 1:
                _a.sent();
                return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, transport.setDTR(true)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
eraseButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                eraseButton.disabled = true;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, 4, 5]);
                return [4 /*yield*/, esploader.eraseFlash()];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                e_1 = _a.sent();
                console.error(e_1);
                term.writeln("Error: ".concat(e_1.message));
                return [3 /*break*/, 5];
            case 4:
                eraseButton.disabled = false;
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
addFileButton.onclick = function () {
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    //Column 1 - Offset
    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "text";
    element1.id = "offset" + rowCount;
    element1.value = "0x1000";
    cell1.appendChild(element1);
    // Column 2 - File selector
    var cell2 = row.insertCell(1);
    var element2 = document.createElement("input");
    element2.type = "file";
    element2.id = "selectFile" + rowCount;
    element2.name = "selected_File" + rowCount;
    element2.addEventListener("change", handleFileSelect, false);
    cell2.appendChild(element2);
    // Column 3  - Progress
    var cell3 = row.insertCell(2);
    cell3.classList.add("progress-cell");
    cell3.style.display = "none";
    cell3.innerHTML = "<progress value=\"0\" max=\"100\"></progress>";
    // Column 4  - Remove File
    var cell4 = row.insertCell(3);
    cell4.classList.add("action-cell");
    if (rowCount > 1) {
        var element4 = document.createElement("input");
        element4.type = "button";
        var btnName = "button" + rowCount;
        element4.name = btnName;
        element4.setAttribute("class", "btn");
        element4.setAttribute("value", "Remove"); // or element1.value = "button";
        element4.onclick = function () {
            removeRow(row);
        };
        cell4.appendChild(element4);
    }
};
/**
 * The built in HTMLTableRowElement object.
 * @external HTMLTableRowElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement}
 */
/**
 * Remove file row from HTML Table
 * @param {HTMLTableRowElement} row Table row element to remove
 */
function removeRow(row) {
    var rowIndex = Array.from(table.rows).indexOf(row);
    table.deleteRow(rowIndex);
}
/**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */
function cleanUp() {
    device = null;
    transport = null;
    chip = null;
}
disconnectButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!transport) return [3 /*break*/, 2];
                return [4 /*yield*/, transport.disconnect()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                term.reset();
                lblBaudrate.style.display = "initial";
                baudrates.style.display = "initial";
                consoleBaudrates.style.display = "initial";
                connectButton.style.display = "initial";
                disconnectButton.style.display = "none";
                traceButton.style.display = "none";
                eraseButton.style.display = "none";
                lblConnTo.style.display = "none";
                filesDiv.style.display = "none";
                alertDiv.style.display = "none";
                consoleDiv.style.display = "initial";
                cleanUp();
                return [2 /*return*/];
        }
    });
}); };
var isConsoleClosed = false;
consoleStartButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var readLoop, _a, value, done;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!(device === null)) return [3 /*break*/, 2];
                return [4 /*yield*/, serialLib.requestPort({})];
            case 1:
                device = _b.sent();
                transport = new lib_1.Transport(device, true);
                _b.label = 2;
            case 2:
                lblConsoleFor.style.display = "block";
                lblConsoleBaudrate.style.display = "none";
                consoleBaudrates.style.display = "none";
                consoleStartButton.style.display = "none";
                consoleStopButton.style.display = "initial";
                resetButton.style.display = "initial";
                programDiv.style.display = "none";
                return [4 /*yield*/, transport.connect(parseInt(consoleBaudrates.value))];
            case 3:
                _b.sent();
                isConsoleClosed = false;
                _b.label = 4;
            case 4:
                if (!(true && !isConsoleClosed)) return [3 /*break*/, 6];
                readLoop = transport.rawRead();
                return [4 /*yield*/, readLoop.next()];
            case 5:
                _a = _b.sent(), value = _a.value, done = _a.done;
                if (done || !value) {
                    return [3 /*break*/, 6];
                }
                term.write(value);
                return [3 /*break*/, 4];
            case 6:
                console.log("quitting console");
                return [2 /*return*/];
        }
    });
}); };
consoleStopButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isConsoleClosed = true;
                if (!transport) return [3 /*break*/, 3];
                return [4 /*yield*/, transport.disconnect()];
            case 1:
                _a.sent();
                return [4 /*yield*/, transport.waitForUnlock(1500)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                term.reset();
                lblConsoleBaudrate.style.display = "initial";
                consoleBaudrates.style.display = "initial";
                consoleStartButton.style.display = "initial";
                consoleStopButton.style.display = "none";
                resetButton.style.display = "none";
                lblConsoleFor.style.display = "none";
                programDiv.style.display = "initial";
                cleanUp();
                return [2 /*return*/];
        }
    });
}); };
/**
 * Validate the provided files images and offset to see if they're valid.
 * @returns {string} Program input validation result
 */
function validateProgramInputs() {
    var offsetArr = [];
    var rowCount = table.rows.length;
    var row;
    var offset = 0;
    var fileData = null;
    // check for mandatory fields
    for (var index = 1; index < rowCount; index++) {
        row = table.rows[index];
        //offset fields checks
        var offSetObj = row.cells[0].childNodes[0];
        offset = parseInt(offSetObj.value);
        // Non-numeric or blank offset
        if (Number.isNaN(offset))
            return "Offset field in row " + index + " is not a valid address!";
        // Repeated offset used
        else if (offsetArr.includes(offset))
            return "Offset field in row " + index + " is already in use!";
        else
            offsetArr.push(offset);
        var fileObj = row.cells[1].childNodes[0];
        fileData = fileObj.data;
        if (fileData == null)
            return "No file selected for row " + index + "!";
    }
    return "success";
}
programButton.onclick = function () { return __awaiter(void 0, void 0, void 0, function () {
    var alertMsg, err, fileArray, progressBars, index, row, offSetObj, offset, fileObj, progressBar, flashOptions, e_2, index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                alertMsg = document.getElementById("alertmsg");
                err = validateProgramInputs();
                if (err != "success") {
                    alertMsg.innerHTML = "<strong>" + err + "</strong>";
                    alertDiv.style.display = "block";
                    return [2 /*return*/];
                }
                // Hide error message
                alertDiv.style.display = "none";
                fileArray = [];
                progressBars = [];
                for (index = 1; index < table.rows.length; index++) {
                    row = table.rows[index];
                    offSetObj = row.cells[0].childNodes[0];
                    offset = parseInt(offSetObj.value);
                    fileObj = row.cells[1].childNodes[0];
                    progressBar = row.cells[2].childNodes[0];
                    progressBar.textContent = "0";
                    progressBars.push(progressBar);
                    row.cells[2].style.display = "initial";
                    row.cells[3].style.display = "none";
                    fileArray.push({ data: fileObj.data, address: offset });
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, 5, 6]);
                flashOptions = {
                    fileArray: fileArray,
                    flashSize: "keep",
                    eraseAll: false,
                    compress: true,
                    reportProgress: function (fileIndex, written, total) {
                        progressBars[fileIndex].value = (written / total) * 100;
                    },
                    calculateMD5Hash: function (image) { return CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image)); },
                };
                return [4 /*yield*/, esploader.writeFlash(flashOptions)];
            case 2:
                _a.sent();
                return [4 /*yield*/, esploader.after()];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                e_2 = _a.sent();
                console.error(e_2);
                term.writeln("Error: ".concat(e_2.message));
                return [3 /*break*/, 6];
            case 5:
                // Hide progress bars and show erase buttons
                for (index = 1; index < table.rows.length; index++) {
                    table.rows[index].cells[2].style.display = "none";
                    table.rows[index].cells[3].style.display = "initial";
                }
                return [7 /*endfinally*/];
            case 6: return [2 /*return*/];
        }
    });
}); };
addFileButton.onclick(this);
