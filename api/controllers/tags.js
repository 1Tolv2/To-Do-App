const { createNewTag, getAllTagsByUserId } = require("../models/tag");

const getAllTags = async (req, res) => {
  const data = await getAllTagsByUserId(req.user.userId);
  res.json({ data });
};

const handleNewTag = async (req, res) => {
  const body = req.body;
  await createNewTag(body.tagName, req.user.userId);
  res.json({ data: [{ tagName: "test", messageList: [1, 2] }] });
};

// const getPostsByTag = async (req, res) => {
//   const tag = req.params.tag;
//   const data = await getAllPostsByTag(tag);
//   res.json({ data });
// };

module.exports = { getAllTags, handleNewTag };
