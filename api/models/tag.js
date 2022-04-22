const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  tagName: { type: String, required: true, unique: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const Tag = mongoose.model("Tag", tagSchema);

const createNewTag = async (tagName, userId) => {
  const tag = new Tag({ tagName, user: userId });
  await tag.save();
  return tag;
};

const getAllTagsByUserId = async (userId) => {
  const data = await Tag.find({ user: mongoose.Types.ObjectId(userId) }).exec();
  return data;
};

module.exports = {
  createNewTag,
  getAllTagsByUserId,
};
