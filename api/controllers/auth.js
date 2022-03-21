const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const JWT_SECRET = process.env.JWT_SECRET;

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
      res.json({ user: user.username });
    }
  }
};

const logInUser = async (req, res) => {
  const { username, password } = req.body;
  const modifiedUsername = username.toLowerCase();
  console.log(username);
  console.log(password);

  const user = await User.login(modifiedUsername, password);
  if (user) {
    console.log(JWT_SECRET);

    const userId = user._id.toString();
    const token = jwt.sign({ userId, username: user.username }, JWT_SECRET, {
      expiresIn: 120,
      subject: userId,
    });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { createUser, logInUser };
