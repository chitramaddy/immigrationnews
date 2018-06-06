var mangoose = require("mongoose");

//ref to the schema constructor. this is a mangoose method.
var Schema = mangoose.Schema;

//new schema for articles
var ArticleSchema = new Schema({
    //this is the title of the article
    title: {
        type: String,
        required: true
    },

    //link to the article
    link: {
        type: String,
        required: true
    },

    //'comment' stores the object_id associated with each article. 
    //ref property links the object_id to the comments model
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

var Article = mangoose.model("Article", ArticleSchema);

//export the Article model
module.exports = Article;