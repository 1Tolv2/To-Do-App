const {
  createNewTag,
  getAllTagsByUserId,
  getTagByTagName,
  addUserToTag,
} = require("../models/tag");

const getAllTags = async (req, res) => {
  const data = await getAllTagsByUserId(req.user.userId);
  res.json({ data });
};

const handleNewTag = async (req, res) => {
  const body = req.body;
  const check = await getTagByTagName(body.tagName);
  check.length > 0
    ? await addUserToTag(body.tagName, req.user.userId)
    : await createNewTag(body.tagName, req.user.userId);

  res.json({ message: "successfully added tag" });
};

module.exports = { getAllTags, handleNewTag };
