const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const morgan = require("morgan");
const users = require("./routes/users");

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// morgan logger
app.use(morgan("dev"));

app
  .get("/", (req, res) => res.send("welcome to this is my shitty API"))

  //   users route
  .use("/users", users);

app.listen(3444, (req, res) => console.log("server is running on port 3444"));
