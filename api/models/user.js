const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "blabla" },
  name: { type: String },
  email: { type: String },
  settings: { name: { type: Boolean }, email: { type: Boolean } },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", userSchema);

exports.User = User;
