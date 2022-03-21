const { User } = require("../models/user");

const createUser = async (req, res) => {
  const { username, password } = req.body;
  const modifiedUsername = username.toLowerCase();

  if (!(username && password)) {
    res.json({ error: "Invalid data. Username and password is required." });
  } else {
    if (await User.findOne({ username: modifiedUsername })) {
      res
        .status(400)
        .json({ error: "User already exists, username must be unique" });
    } else {
      const user = new User({ username: modifiedUsername, password });
      await user.save();
      res.json({ user });
    }
  }
};

module.exports = { createUser };
