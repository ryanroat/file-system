const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = 'test.txt';
// const fileURL = new URL(
//     `file:///C:/Users/ryanr/OneDrive/RSR/WebDev/projects/file-system/${fileName}`
// );

rl.question(`What to write to the file ${fileName}? `, data => {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log(`Saved "${data}" to file ${fileName}.`);
    });
    rl.close();
});
