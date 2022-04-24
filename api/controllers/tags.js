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
  if (check.length > 0 && check[0].user.includes(req.user.userId)) {
    res.status(400).json({ error: "User already has tag" });
  } else if (check.length > 0) {
    await addUserToTag(body.tagName, req.user.userId);
    res.json({ message: "successfully added user to tag" });
  } else {
    await createNewTag(body.tagName, req.user.userId);
    res.json({ message: "successfully added user to tag" });
  }
};

module.exports = { getAllTags, handleNewTag };
