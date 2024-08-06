const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "input.txt");
fs.watch(filePath, (eventType, filename) => {
    console.log("\nThe file", filename, "was modified!");
    console.log("The type of change was:", eventType);
});
setTimeout(
    () => fs.writeFileSync("input.txt",
        "The file is modified"), 1000
);