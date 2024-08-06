const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname, "input.txt")
fs.stat(filePath, function(err, stats){
    if (err) throw err;

    console.log(stats);

    fs.chmod(filePath, fs.constants.S_IRUSR , () => {
        console.log("File Contents:", fs.readFileSync("input.txt", 'utf8'));

        try {
            console.log("\nTrying to write to file");
            fs.writeFileSync('input.txt', "This file now has been edited.");
        }
        catch (e) {
            console.log("Error Occurred, Error Code:", e.code);
        }

    } )
});
