//dependancies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var fs = require('fs');
var path = require("path")
var mongoose = require("mongoose");
var mongojs = require("mongojs");

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "immigrationnews";
var collections = ["articles"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Set the app to listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });

