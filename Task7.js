const fs = require('fs');
const path = require('path');
const startPath = path.join(__dirname, 'subdir');
function listFilesAndDirs(dir, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);

        let filePaths = [];
        let dirs = [];

        let pending = files.length;
        if (!pending) return callback(null, { files: filePaths, dirs });

        files.forEach(file => {
            const fullPath = path.join(dir, file);

            fs.stat(fullPath, (err, stats) => {
                if (err) return callback(err);

                if (stats.isDirectory()) {
                    dirs.push(fullPath);
                    listFilesAndDirs(fullPath, (err, results) => {
                        if (err) return callback(err);
                        filePaths = filePaths.concat(results.files);
                        dirs = dirs.concat(results.dirs);

                        if (!--pending) callback(null, { files: filePaths, dirs });
                    });
                } else {
                    filePaths.push(fullPath);
                    if (!--pending) callback(null, { files: filePaths, dirs });
                }
            });
        });
    });
}

listFilesAndDirs(startPath, (err, results) => {
    if (err) {
        console.error('Error reading directory:', err);
    } else {
        console.log('Files:', results.files);
        console.log('Directories:', results.dirs);
    }
});
