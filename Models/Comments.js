var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var CommentsSchema = new Schema({
  name: {
    type: String,
  },
  body: {
    type: String,
    required: true
  },

});

var Comments = mongoose.model("Comments", CommentsSchema);
module.exports = Comments;