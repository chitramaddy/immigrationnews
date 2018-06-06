var mongoose = require("mongoose");

//refernce to Schema constructor
var Schema = mongoose.Schema;

//new schema for comments
var CommentSchema = new Schema({
    comment: {
        type: String
    }
});

//Create the model using mongoose
var Comment = mongoose.model("Comment", CommentSchema);

//Export the model
module.exports = Comment;