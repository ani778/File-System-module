const fs = require('fs');
const path = require('path');
const examlePath = path.join(__dirname, "example.txt")
const appendData = " This is Node.js FS module.";

// Task 1: Basic File Operations
fs.writeFile(examlePath, 'Hello World!',  (err) => {
    if(err) throw err;
    fs.appendFile(examlePath, appendData, 'utf8',(err) => {
        if(err) throw err;
    })
    fs.readFile(examlePath, (err,data) => {
        if(err) throw err;
        console.log(data.toString())
    })
})
