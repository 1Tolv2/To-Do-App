const { getTags, getAllPostsByTag } = require("../models/post");

const getAllTags = async (req, res) => {
  const data = await getTags();
  res.json({ data });
};

const getPostsByTag = async (req, res) => {
  const tag = req.params.tag;
  const data = await getAllPostsByTag(tag);
  res.json({ data });
};

module.exports = { getAllTags, getPostsByTag };
