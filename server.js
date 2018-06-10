//dependancies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var request = require("request");
var cheerio = require("cheerio");

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Set up a static folder (public) for our web app
app.use(express.static("public"));

// Require all models
var db = require("./models");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/immigrationnews");

//this is the root route. This will display the index page
app.get("/", function (req, res) {
  res.render("index");
})

app.get("/all", function (req, res) {
  //  request call to grab the HTML body from VisaPro
  request("http://www.visapro.com/resources/article/", function (error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var results = [];

    //Write code here to make sure that data that is scraped does not exist here already.

    $("a.entry-image-link").each(function (i, element) {

      var img = $(element).children('img').attr("src");

      var link = $(element).attr('href');
      var title = $(element).children().attr("alt");

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: link,
        img: img
        //comments: "There are 0 comments"
      });
    });

    //creating the article collection with the scraped results
    db.Article.create(results)

    //send the results to front end
      .then(function (results) {
        res.render("index", {results:results});
      }).catch(function (err) {
        res.send("You do not have any new articles");
      });
  });

});

//Route for saving/updating comments associated with an article
app.get("/articles/:id", function (req, res) {

  //Create a Comment and pass the req.body
  db.Comment.create(req.body)
    .then(function (dbComment) {

      //Find the Article with _id that matches req.params.id and push the new comment in to the array of comments
      return db.Article.findOneAndUpdate({
        _id: req.params.id
      }, {
        $push: {
          comment: dbComment._id
        }
      }, {
        new: true
      });
    }).then(function (dbArticle) {
      res.json(dbArticle);
    }).catch(function (err) {
      res.json(err);
    })
});


// Set the app to listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});