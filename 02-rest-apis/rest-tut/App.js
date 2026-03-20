const express = require("express");
const routes = require("./Routes/API");
const bodyParser=require('body-parser')

const app = express();
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(process.env.port || 3000);
