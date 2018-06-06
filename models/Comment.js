var mangoose = require("mangoose");

//refernce to Schema constructor
var Schema = mangoose.Schema;

//new schema for comments
var CommentSchema = new Schema({
    comment: {
        type: String
    }
});

//Create the model using mongoose
var Comment = mangoose.model("Comment", CommentSchema);

//Export the model
module.exports = Comment;