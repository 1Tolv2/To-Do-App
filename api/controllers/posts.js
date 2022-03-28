const mongoose = require("mongoose");
const {
  createPost,
  getAllPosts,
  getSinglePost,
  updateSinglePost,
  deleteSinglePost,
} = require("../models/post");

const handleNewPost = async (req, res) => {
  const { title, body } = req.body;
  const userId = req.user.userId;
  const post = await createPost(userId, title, body);
  res.json({ post });
};

const listAllPosts = async (req, res) => {
  const data = await getAllPosts(req.user.userId);
  res.json({ data });
};

const listSinglePost = async (req, res) => {
  const id = req.params.id;
  const data = await getSinglePost(id);
  res.json({ data });
};

const editPost = async (req, res) => {
  const { userId } = req.user;
  const postId = req.params.id;
  const data = await updateSinglePost(userId, postId, req.body);
  console.log(data);
  data.modifiedCount > 0
    ? res.json({ message: "Post successfully updated" })
    : res.status(404).json({ error: "No post with that id found" });
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.user;
  const data = await deleteSinglePost(postId, userId);
  data.deletedCount > 0
    ? res.json({ message: `Post ${postId} successfully deleted` })
    : res.status(404).json({ error: "No post with the id found" });
};

module.exports = {
  handleNewPost,
  listAllPosts,
  listSinglePost,
  editPost,
  deletePost,
};
