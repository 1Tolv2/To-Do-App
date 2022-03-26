const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "blabla" },
  name: { type: String },
  email: { type: String },
  settings: { name: { type: Boolean }, email: { type: Boolean } },
});

// overwrites the password sent in with an encrypted version
userSchema.pre("save", async function (next) {
  if (this.modifiedPaths().includes("password")) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  }
  next();
});

userSchema.statics.login = async function (username, password) {
  const user = await this.findOne({ username });
  return user && password && (await bcrypt.compare(password, user.password))
    ? user
    : null;
};

const User = mongoose.model("User", userSchema);

exports.User = User;
