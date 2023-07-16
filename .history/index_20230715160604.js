const fs = require("fs");
const http = require("http");
const url = require("url");

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//asynchronous way
/*as soon as readFile runs, it will start reading this file in the background,
without blocking the rest of code excution
*/
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written");
//       });
//     });
//   });
// }); //only when the file is completely read, this callback function will run.
// console.log("Will read file"); //move on to the next line of code,this will come out first

/////////////////////////////////////////////////
//SERVER
const replaceTemplate = (temp, product) => {
    let output = temp.replace('')
}
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  //overview page
  if (pathName === "/" || pathName === "/overview") {
      res.writeHead(200, { "Content-type": "text/html" });
      
      const cardsHtml = dataObj.map(el => replaceTemplate(tempcard,el))
    res.end(tempOverview);

    //prduct page
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT!");

    //API
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);

    //NOT FOUND
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!<h1>");
  }
}); //this callback function runs each time a new req hits the server.

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
