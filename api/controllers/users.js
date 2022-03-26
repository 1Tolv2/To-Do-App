const mongoose = require("mongoose");
const { User } = require("../models/user");

const getUser = async (req, res) => {
  const user = req.user;
  const data = await User.find(
    { _id: mongoose.Types.ObjectId(user.userId) },
    { password: 0 }
  ).exec();
  res.json({ data });
};

const getUserWithPosts = async (req, res) => {
  const user = req.user;
  const data = await User.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(user.userId) } },
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "author",
        as: "posts",
      },
    },
    { $project: { password: 0 } },
  ]).exec();
  res.json({ data });
};

module.exports = { getUser, getUserWithPosts };
