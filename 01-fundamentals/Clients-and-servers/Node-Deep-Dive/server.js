const os = require("os")
const fs = require("fs")
fs.write("./doc.txt",(err,files)=>{
    if (err) {
        console.log(err);
        
    }else{
    fs.write("hello")
    }
})


// const totalMem=os.totalmem()
// const freeMem=os.freemem()



// const path = require("path")

// var pathObj=path.parse(__filename)
// console.log(pathObj);


// const loger=require("./loger")
// console.log(loger);
// loger.log("msg")

// console.log(`Total memory${totalMem}`)
// console.log(`Free memory${freeMem}`)