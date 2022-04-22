const mongoose = require("mongoose");
const { getSingleUser, updateUser } = require("../models/user");

const listCurrentUser = async (req, res) => {
  const id = req.user.userId;
  const data = await getSingleUser(id);
  res.json({ data });
};

const editUserSettings = async (req, res) => {
  const response = await updateUser(req.user.userId, req.body, req?.file?.path);
  res.json({ message: "Successfully changed settings" });
};

module.exports = { listCurrentUser, editUserSettings };
