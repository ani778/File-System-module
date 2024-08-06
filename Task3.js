const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, "input.txt")
fs.readFile(filePath, (err, data) => {
    if(err) throw err;

    console.log('ASYNC:', data.toString())
    fs.writeFile(filePath, 'How are you Ann?', (err, data) => {
        if(err) throw err;
    })
})

const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' })
console.log('Sync:', data)
fs.writeFileSync(filePath, 'Hello again!!!');