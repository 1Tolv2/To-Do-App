const mongoose = require("mongoose");
const { Post } = require("../models/post");

const newPost = async (req, res) => {
  const { title, body } = req.body;
  const user = req.user;
  const post = new Post({ author: user.userId, title, body });
  await post.save();
  res.json({ post });
};

const getAllPosts = async (req, res) => {
  const data = await Post.find({ author: req.user.userId })
    .sort({ updatedAt: -1 })
    .exec();
  res.json({ data });
};

const getPost = async (req, res) => {
  const id = req.params.id;
  const data = await Post.findById(id).exec();
  res.json({ data });
};

const editPost = async (req, res) => {
  const { userId } = req.user;
  const { title, body, status, tags } = req.body;
  const id = req.params.id;
  await Post.updateOne(
    {
      _id: mongoose.Types.ObjectId(id),
      author: mongoose.Types.ObjectId(userId),
    },
    {
      $set: {
        title,
        body,
        status,
        tags,
      },
    }
  );
  res.json({ message: "Post successfully updated" });
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.user;
  const data = await Post.deleteOne({
    _id: mongoose.Types.ObjectId(id),
    author: mongoose.Types.ObjectId(userId),
  }).exec();
  res.json({ data });
};

module.exports = { newPost, getAllPosts, getPost, editPost, deletePost };
