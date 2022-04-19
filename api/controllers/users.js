const mongoose = require("mongoose");
const { getSingleUser, updateUser } = require("../models/user");

const listCurrentUser = async (req, res) => {
  const id = req.user.userId;
  const data = await getSingleUser(id);
  res.json({ data });
};

// const getUserWithPosts = async (req, res) => {
//   const user = req.user;
//   const data = await User.aggregate([
//     { $match: { _id: mongoose.Types.ObjectId(user.userId) } },
//     {
//       $lookup: {
//         from: "posts",
//         localField: "_id",
//         foreignField: "author",
//         as: "posts",
//       },
//     },
//     { $project: { password: 0 } },
//   ]).exec();
//   res.json({ data });
// };

const editUserSettings = async (req, res) => {
  console.log(req.body);
  const response = await updateUser(req.user.userId, req.body, req?.file?.path);
  console.log(response);
  res.json({ message: "Successfully changed settings" });
};

module.exports = { listCurrentUser, editUserSettings };
