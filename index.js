#!/usr/bin/env node
const yargs = require("yargs");
const helpers = require("./helper");
const { appFolder, memoryFile } = require("./constants");

helpers.checkOrCreateMemoryFile(appFolder, memoryFile);
const commandArgs = process.argv.slice(2);

yargs 
.commandDir('./commands').demandCommand(1, "You need to pass a command!")
  .help().argv;
