const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, default: "Unknown" },
    description: { type: String, default: "" },
    body: { type: String, default: "" },
    status: { type: String },
    tags: [{ type: String, default: [] }],
    files: { type: String },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

const createPost = async (id, title, description, body, tags) => {
  const post = new Post({ author: id, title, description, body, tags });
  await post.save();
  return post;
};

const getAllPosts = async (id) => {
  const data = await Post.find({ author: mongoose.Types.ObjectId(id) })
    .sort({ updatedAt: -1 })
    .exec();
  return data;
};

const getSinglePost = async (id) => {
  const data = await Post.findById(id).exec();
  return data;
};

const updateSinglePost = async (userId, postId, payload) => {
  const { title, body, status, tags } = payload;
  const data = await Post.updateOne(
    {
      _id: mongoose.Types.ObjectId(postId),
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
  return data;
};

const deleteSinglePost = async (postId, userId) => {
  const data = await Post.deleteOne({
    _id: mongoose.Types.ObjectId(postId),
    author: mongoose.Types.ObjectId(userId),
  }).exec();
  return data;
};

module.exports = {
  createPost,
  getAllPosts,
  getSinglePost,
  updateSinglePost,
  deleteSinglePost,
};
exports.Post = Post;
