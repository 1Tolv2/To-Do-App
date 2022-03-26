const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    body: { type: String },
    status: { type: String },
    tags: [{ type: String, default: [] }],
    files: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

exports.Post = Post;
