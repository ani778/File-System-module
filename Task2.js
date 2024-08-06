const fs = require('fs');
const path = require('path');

const fileContent = 'This is some sample text for the file.';
const dirPath = path.join(__dirname, 'testDir');
const filePath = path.join(dirPath, 'testFile.txt');
const renamedFile = path.join(dirPath, 'renamedFile.txt');
fs.access(dirPath, (error) => {
    if (error) {
        fs.mkdir(dirPath,{ recursive: true }, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log("New Directory created successfully !!");

                fs.writeFile(filePath,fileContent, (err) => {
                    if(err) throw err
                    fs.readFile(filePath, (err, data) => {
                        if(err) throw err;
                        console.log('TEST:', data.toString())
                    })
                    fs.rename(filePath,renamedFile, (err) => {
                        if(err) throw err;
                        console.log("File Renamed!");
                    } )
                })
            }
        });
    } else {
        console.log("Given Directory already exists !!");

        fs.unlink(renamedFile, (err) => {
            if (err && err.code !== 'ENOENT') {
                return console.error('Error deleting file:', err);
            }
            console.log('File deleted successfully or did not exist!');

            fs.rmdir(dirPath,  (err) => {
                if(err) throw err;
                console.log('Directory deleted successfully!');
            })
        })
    }
});