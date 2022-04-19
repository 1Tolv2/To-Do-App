const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "blabla" },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  settings: {
    name: { type: Boolean, default: false },
    email: { type: Boolean, default: false },
  },
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

const createUser = async (username, password) => {
  const user = new User({ username, password });
  await user.save();
  return user;
};

const verifyUser = async (username, password) => {
  const user = await User.login(username, password);
  return user
    ? {
        _id: user._id,
        username: user.username,
        name: user.name,
        image: user.image,
        email: user.email,
        settings: user.settings,
      }
    : null;
};

const getUserByUsername = async (username) => {
  const user = await User.findOne({ username }, { password: 0 });
  return user;
};

const getSingleUser = async (id) => {
  const user = await User.find(
    { _id: mongoose.Types.ObjectId(id) },
    { password: 0 }
  ).exec();
  return user;
};

const updateUser = async (id, payload, image) => {
  return await User.updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    {
      $set: {
        name: payload.name,
        email: payload.email,
        image,
        settings: {
          name: payload.setting_name,
          email: payload.setting_email,
        },
      },
    }
  );
};

module.exports = {
  createUser,
  verifyUser,
  getUserByUsername,
  getSingleUser,
  updateUser,
};
exports.User = User;
