const fs = require("fs")
const readStream = fs.createReadStream("./docs/doc3.txt", { encoding: 'utf-8' })//makes the buffer readable
const writeStream=fs.createWriteStream("./docs/doc4.txt")



// readStream.on("data", (chunk) => {
//     console.log("-------NEW CHUNK---------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

//piping
readStream.pipe(writeStream)
