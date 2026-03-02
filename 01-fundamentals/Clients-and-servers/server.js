const http = require("http")

const server = http.createServer((req,res) => {
    console.log("Request made");
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html')
    res.write("<h1>Hello Glen</h1>")
    res.write("<p>Hello Glen</p>");
    res.end()
    
})
server.listen(3000, "localhost", () => {
    console.log("Listening on port 3000");
    
})