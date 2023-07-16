const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');

//asynchronous way
/*as soon as readFile runs, it will start reading this file in the background,
without blocking the rest of code excution
*/
fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Will read file');//move on to the next line of code,
//this will come out first