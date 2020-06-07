#!/usr/bin/env node

const fs = require('fs')
const homeDir = require('os').homedir();
const EOL = require('os').EOL;
const {folder, dataFile} = require('./constants');
const appFolder = [homeDir, folder].join("/");
const memoryFile = [appFolder, dataFile].join("/");
const helpers = require('./helper');

const allowedCommands = {
    REMEMBER: {
        string: 'REMEMBER',
        params: 2
    },
    REMIND: {
        string: 'REMIND',
        params: 1
    }
}

helpers.checkOrCreateMemoryFile(appFolder, memoryFile);
const commandArgs = process.argv.slice(2);
if(commandArgs.length===0){
    helpers.showHelp()
    return 0
}
const command = commandArgs[0].toUpperCase();

if(!allowedCommands[command]){
    console.error(`Supplied command ${command} not allowed`);
}

switch(command) {
    case allowedCommands.REMEMBER.string:
        console.error("You want me to remember something");
        const key = commandArgs[1];
        const value = commandArgs[2];

        if (!key) {
            console.error("Please provide information item to be saved");
            return;
        }

        if(!value) {
            console.error("Please provide the information to be saved");
            return;
        }

        const toBeRemembered = [key, value].join(',');
        fs.appendFileSync(memoryFile,toBeRemembered+EOL);

        console.log("Information saved");
        

        break;
    
    case allowedCommands.REMIND.string:
        const keyItem = commandArgs[1];
        if (!keyItem) {
            console.error("Please provide information item to be found!");
        }

        helpers.remind(memoryFile, keyItem);


        break;
    
}