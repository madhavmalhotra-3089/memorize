const helpers = require("../helper");
const { memoryFile, EOL } = require("../constants");
const fs = require("fs");

(exports.command = "set [key] [value]"), "Set some information.";
exports.describe = "Set value for a particular key";
exports.handler = (argv) => {
  console.log("You want me to remember something");
  const key = argv.key;
  const value = argv.value;

  if (!key) {
    console.error("Please provide information item to be saved");
    return;
  }

  if (!value) {
    console.error("Please provide the information to be saved");
    return;
  }

  const toBeRemembered = [key, value].join(",");
  fs.appendFileSync(memoryFile, toBeRemembered + EOL);
  console.log("Information saved");
};
