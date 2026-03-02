const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //set header content type
  res.setHeader("Content-Type", "text/html");

  // Route
  let path = "./";
  switch (req.url) {
    case "/":
      path += "home.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html"; 
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("location", "/about")
      res.end
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break
  }

  // Send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
