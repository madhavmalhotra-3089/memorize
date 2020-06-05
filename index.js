#!/usr/bin/env node

const homeDir = require('os').homedir();
const fs = require('fs')
const {folder, dataFile} = require('./constants');
    
    
const appFolder = [homeDir, folder].join("/");
const memoryFile = [appFolder, dataFile].join("/");

try {
fs.accessSync(appFolder);

} catch(err) {
    console.log("Folder is needed to be created");
    fs.mkdirSync(appFolder)
    console.log("Folder created");
}

console.log("The folder exists");
console.log("Checking if the data file exists");

try {
fs.accessSync(memoryFile);
} catch (err) {
    console.log("Data file does not exist");
    fs.openSync(memoryFile, fs.constants.O_CREAT);
    fs.close()
}
console.log("You are all set!")





