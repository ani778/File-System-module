const fs = require('fs')
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');
function newUser(users,name, age) {
    users.push({name, age})

    fs.writeFile(dataPath, JSON.stringify(users), (err) => {
        if (err) console.error('Error writing to file:', err);

        console.log('New user added:', { name, age });
    });
    console.log('newUser->',users)
}
fs.readFile(dataPath, (err,data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    console.log(users);
    newUser(users,'Ann', 27)
})