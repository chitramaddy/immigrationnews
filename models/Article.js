var mongoose = require("mongoose");

//ref to the schema constructor. this is a mongoose method.
var Schema = mongoose.Schema;

//new schema for articles
var ArticleSchema = new Schema({
    //this is the title of the article
    title: {
        type: String,
        required: true
    },

    //link to the article
    link: {
        type: String
    },

    //'comment' stores the object_id associated with each article. 
    //ref property links the object_id to the comments model
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

var Article = mongoose.model("Article", ArticleSchema);

//export the Article model
module.exports = Article;