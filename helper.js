
const fs = require('fs')
const readline = require('readline');

module.exports.checkOrCreateMemoryFile = function(appFolder, memoryFile) {
try {
fs.accessSync(appFolder);

} catch(err) {
    console.log("Folder is needed to be created");
    fs.mkdirSync(appFolder)
    console.log("Folder created");
}
try {
fs.accessSync(memoryFile);
} catch (err) {
    console.log("Data file does not exist");
    fs.openSync(memoryFile, fs.constants.O_CREAT);
    fs.close()
}

}

module.exports.remind = function(memoryFile, keyItem) {
    const fileStream = fs.createReadStream(memoryFile);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
    
      rl.on('line', (line) => {
        [key, value] = line.split(",");
        if (key==keyItem) {
            console.log(value);
        }
      });
}