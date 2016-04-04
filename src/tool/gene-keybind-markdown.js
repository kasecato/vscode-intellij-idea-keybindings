/*---------------------------------------------------------------------------*\
 * node gene-keybind-markdown.js
\*---------------------------------------------------------------------------*/

const fs = require('fs'),
    readline = require('readline');

const rd = readline.createInterface({
    input: fs.createReadStream('../package-with-comment.json'),
    output: process.stdout,
    terminal: false
});

var key = null;
var mac = null;
var command = null;
var intellij = null;
var supported = null;
rd.on('line', function(line) {
    if (isWindowsOrLinux(line)) {
        key = getWindowsOrLinux(line);
    }
    else if (isMacOSX(line)) {
        mac = getMacOSX(line);
    }
    else if (isCommand(line)) {
        command = getCommand(line);
    }
    else if (isWhen(line)) {
        // NOP
    }
    else if (isIntelliJ(line)) {
        intellij = getIntelliJ(line);
        
        var format = key + ' | ' + mac + ' | ' + intellij + ' | ';
        if (hasCommand(command)) {
            console.log(format + 'Yes');
        } else {
            console.log(format + 'N/A');
        }
    }
});

const isWindowsOrLinux = (line) => line.match(/"key": "(.*)"/)      !== null;
const isMacOSX         = (line) => line.match(/"mac": "(.*)"/)      !== null;
const isCommand        = (line) => line.match(/"command": "(.*)"/)  !== null;
const isWhen           = (line) => line.match(/"when": "(.*)"/)     !== null;
const isIntelliJ       = (line) => line.match(/"intellij": "(.*)"/) !== null;
const isTodo           = (line) => line.match(/"todo": "(.*)"/)     !== null;

const hasCommand       = (cmnd) => cmnd !== null && cmnd !== '';

const getWindowsOrLinux = (line) => /"key": "(.*)"/.exec(line)[1];
const getMacOSX         = (line) => /"mac": "(.*)"/.exec(line)[1];
const getIntelliJ       = (line) => /"intellij": "(.*)"/.exec(line)[1];
const getCommand        = (line) => /"command": "(.*)"/.exec(line)[1];
const getTodo           = (line) => /"todo": "(.*)"/.exec(line)[1];
