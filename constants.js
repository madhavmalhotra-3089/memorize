exports.folder = "memorize";
exports.appFolder = [require("os").homedir(), this.folder].join("/");
exports.dataFile = `${this.folder}.memorize`;
exports.memoryFile = [this.appFolder, this.dataFile].join("/");
exports.EOL = require("os").EOL;
