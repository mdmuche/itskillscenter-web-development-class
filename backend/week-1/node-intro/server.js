const http = require("http");
require("dotenv").config();
const port = process.env.PORT;

// create server object
const server = http.createServer((req, res) => {
  res.statusCode === 200;
  res.setHeader("Content-Type", "text/html");

  //Route handling
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Welcome to Backend Development");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("About Us");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 Page Not Found");
  }
});

server.listen(port, (req, res) => {
  console.log("listening to request on port " + port);
});
