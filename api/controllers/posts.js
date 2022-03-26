const { Post } = require("../models/post");

const newPost = async (req, res) => {
  const { title, body } = req.body;
  const user = req.user;
  const post = new Post({ author: user.userId, title, body });
  await post.save();
  res.json({ post });
};

const getPosts = async (req, res) => {
  const data = await Post.find({ author: req.user.userId }).exec();
  res.json({ data });
};

module.exports = { newPost, getPosts };
