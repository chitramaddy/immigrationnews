//dependancies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var request = require("request");
var cheerio = require("cheerio");

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Require all models
var db = require("./models");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/immigrationnews");

// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });

