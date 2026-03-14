const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { title } = require("process");

const app = express();
// console.log("Database URI:", process.env.dbURI);

mongoose
  .connect(process.env.dbURI)
  .then(() => app.listen(3000))
  .catch((err) => console.error(err));

//!register view engine
app.set("view engine", "ejs");

//listen for request

// app.use((req,res,next)  => {
//   console.log("new req made");
//   console.log("host",req.hostname);
//   console.log("path",req.path);
//   console.log("method", req.method);
//   next()
// });

//?static files
//send css files
app.use(express.static("public"));
//loger
app.use(morgan("dev"));
//for accepting form data
app.use(express.urlencoded({ extended: true }));

//!mongoose and mongo sandbox routes

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about about my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
    });
});
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("69b3e1d9a3e6e64cafa0e94d")
    .then((result) => res.send(result))
    .catch((err) => {
      console.error(err);
    });
});

// app.use((req, res, next) => {
//   console.log("in the next middleware");
//   next();
// });

app.get("/", (req, res) => {
  // res.send("<p>Home page</P>")
  // res.sendFile("./Routing/home.html",{root:__dirname})
  res.redirect("/blogs");

  // res.render("index", { title: "Home", blogs: blogs });
});
app.get("/about", (req, res) => {
  // res.send("<p>About page</P>")
  // res.sendFile("./Routing/about.html",{root:__dirname})
  res.render("about", { title: "About" });
});
//!redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});
//! Blog routes ===========================================
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/blogs/:id", (req, res) => {
  const id = req.params.id;
  //console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog details" });
    })
    .catch((err) => {
      console.log(err);
    });
});
//?===================================================================
//!create blog
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

//404 page
app.use((req, res) => {
  res.sendFile;
  // res.status(404).sendFile("./Routing/404.html",{root:__dirname})

  res.status(404).render("404", { title: "404" });
});
