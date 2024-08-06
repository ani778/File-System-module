const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "input.txt");
fs.readFile(filePath, (err,data) => {
    if (err) {
        return console.log('ERROR:', err)
    }
})