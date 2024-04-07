/*---------------------------------------------------------------------------*\
 * node src/tool/gene-keybind-markdown.js
\*---------------------------------------------------------------------------*/

const fs = require('fs'),
    readline = require('readline');

const rd = readline.createInterface({
    input: fs.createReadStream('src/package-with-comment.json'),
    output: process.stdout,
    terminal: false
});

var header = null;
var key = null;
var mac = null;
var command = null;
var intellij = null;
var supported = null;
var commandsForHeader = new Map();

function maybeProcessCurrentSection() {
    if (header != null) {
        console.log();
        console.log('### ' + header);
        console.log();
        console.log(TABLE_HEADER);
    }
    commandsForHeader.forEach(function (hasCommand, format) {
        if (hasCommand) {
            console.log(format + '✅');
        } else {
            console.log(format + 'N/A');
        }
    });

    header = null;
    commandsForHeader = new Map();
}

rd.on('line', function(line) {

    if (isHeader(line)) {
        maybeProcessCurrentSection();
        header = getHeader(line);
        commandsForHeader = new Map();
    }
    
    else if (isWindowsOrLinux(line)) {
        key = getWindowsOrLinux(line);
    }
    else if (isMacOS(line)) {
        mac = getMacOS(line);
    }
    else if (isCommand(line)) {
        command = getCommand(line);
    }
    else if (isWhen(line)) {
        // NOP
    }
    else if (isIntelliJ(line)) {
        intellij = getIntelliJ(line);
        
        var format = available(escape(key)) + ' | ' + available(escape(mac)) + ' | ' + intellij + ' | ';
        commandsForHeader.set(format, hasCommand(command) || commandsForHeader.get(format));

        key = '';
        mac = '';
        command = '';
        intellij = '';
    }
});

maybeProcessCurrentSection(); 

const isHeader         = (line) => line.match(/\* (.*)/)            !== null;
const isWindowsOrLinux = (line) => line.match(/"key": "(.*)"/)      !== null;
const isMacOS          = (line) => line.match(/"mac": "(.*)"/)      !== null;
const isCommand        = (line) => line.match(/"command": "(.*)"/)  !== null;
const isWhen           = (line) => line.match(/"when": "(.*)"/)     !== null;
const isIntelliJ       = (line) => line.match(/"intellij": "(.*)"/) !== null;

const hasCommand       = (cmnd) => cmnd !== null && cmnd !== '';

const getHeader         = (line) => /\* (.*)/.exec(line)[1];
const getWindowsOrLinux = (line) => /"key": "(.*)"/.exec(line)[1];
const getMacOS          = (line) => /"mac": "(.*)"/.exec(line)[1];
const getIntelliJ       = (line) => /"intellij": "(.*)"/.exec(line)[1];
const getCommand        = (line) => /"command": "(.*)"/.exec(line)[1];

const escape            = (line) => line.replace(/([`])/, "\\$1");
const available         = (line) => line ? line : 'N/A';


const TABLE_HEADER = 
`Linux, Windows | macOS | Feature | Supported
---------------|------|---------|----------`;
