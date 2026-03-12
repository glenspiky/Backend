const http =require("http")
const server = http.createServer((res,req)=>{
if (req.url=="/") {
    req.write("hello")
    req.end()
}
})

server.on("connection",()=>{
    console.log("new connection");
    
})
server.listen(3000)

console.log("listening on port 3000");
