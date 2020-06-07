#!/usr/bin/env node
const yargs = require("yargs");
const helpers = require("./helper");
const { appFolder, memoryFile } = require("./constants");

helpers.checkOrCreateMemoryFile(appFolder, memoryFile);
const commandArgs = process.argv.slice(2);

if (commandArgs.length === 0) {
  yargs.showHelp();
  return 0;
}

yargs
  .command(require("./commands/get"))
  .command(require("./commands/set"))
  .help().argv;
