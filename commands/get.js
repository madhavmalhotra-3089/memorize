const helpers = require("../helper");
const { memoryFile } = require("../constants");

(exports.command = "get [key]"), "Get a saved information value";
exports.describe = "Get a saved information value";
exports.handler = (argv) => {
  const keyItem = argv.key;
  if (!keyItem) {
    console.error("Please provide information item to be found!");
  }
  helpers.get(memoryFile, keyItem);
};
