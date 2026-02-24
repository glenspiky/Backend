const { error } = require("console");
const fs = require("fs");

//Reading files
fs.readFile("./docs/doc.txt", (err, data) => {
  // if (err) {
  //     console.log(err);
  // }
  // console.log(data.toString());
});

// Writing files
// fs.writeFile("./docs/doc.txt", "Hello ninjas", () => {
//     console.log("File writen");

// })

// fs.writeFile("./docs/doc1.txt", "Hello Glen", () => {
//   console.log("File writen");
// });

//Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("files crreated");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Deleted");
  });
}

//deleting filed
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted");
  });
}
{
}
