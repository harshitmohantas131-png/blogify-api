const mongoose = require("mongoose");
require("./user.model");
require("./post.model");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;