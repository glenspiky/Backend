const express = require("express");
const morgan = require("morgan");
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

// app.use((req,res,next)  => {
//   console.log("new req made");
//   console.log("host",req.hostname);
//   console.log("path",req.path);
//   console.log("method", req.method);
//   next()
// });

//static files
app.use(express.static("public"));

//loger
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("in the next middleware");
//   next();
// });

app.get("/", (req, res) => {
  // res.send("<p>Home page</P>")
  // res.sendFile("./Routing/home.html",{root:__dirname})

  const blogs = [
    {
      title: "Getting Started with JavaScript",
      snippet:
        "Learn the fundamentals of JavaScript, including variables, functions, and basic logic to start building interactive web pages.",
    },
    {
      title: "Understanding Flexbox in CSS",
      snippet:
        "Flexbox makes layout design easier. Discover how to align, justify, and distribute space among items in a container.",
    },
    {
      title: "A Beginner’s Guide to Node.js",
      snippet:
        "Node.js allows JavaScript to run on the server. Explore how it works and how to build simple backend applications.",
    },
    {
      title: "Why Developers Love React",
      snippet:
        "React simplifies building dynamic user interfaces using reusable components and a powerful virtual DOM.",
    },
    {
      title: "How APIs Power Modern Web Apps",
      snippet:
        "APIs connect different software systems. Learn how REST APIs help frontend and backend communicate.",
    },
    {
      title: "CSS Grid vs Flexbox",
      snippet:
        "Both Grid and Flexbox help create layouts. Understand when to use each one for responsive design.",
    },
    {
      title: "Intro to Git and GitHub",
      snippet:
        "Version control helps developers track code changes. Learn the basics of Git commands and GitHub workflows.",
    },
    {
      title: "Building Your First Express Server",
      snippet:
        "Express.js is a minimal Node framework. See how to create routes and send responses in minutes.",
    },
    {
      title: "Debugging JavaScript Like a Pro",
      snippet:
        "Use browser dev tools, breakpoints, and console methods to identify and fix bugs in your code.",
    },
    {
      title: "Responsive Design Best Practices",
      snippet:
        "Make your websites look great on any device using media queries, flexible layouts, and modern CSS techniques.",
    },
  ];
  res.render("index", { title: "Home", blogs: blogs });
});
app.get("/about", (req, res) => {
  // res.send("<p>About page</P>")
  // res.sendFile("./Routing/about.html",{root:__dirname})
  res.render("about", { title: "About" });
});
//redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//create blog
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

//404 page
app.use((req, res) => {
  res.sendFile;
  // res.status(404).sendFile("./Routing/404.html",{root:__dirname})

  res.status(404).render("404", { title: "404" });
});
