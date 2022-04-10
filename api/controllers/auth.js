const jwt = require("jsonwebtoken");
const { verifyUser, createUser, getUserByUsername } = require("../models/user");
const JWT_SECRET = process.env.JWT_SECRET;

const requireLogin = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const registerNewUser = async (req, res) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    res.json({ error: "Invalid data. Username and password is required." });
  } else {
    if (await getUserByUsername(username.toLowerCase())) {
      res
        .status(400)
        .json({ error: "User already exists, username must be unique" });
    } else {
      const user = await createUser(username.toLowerCase(), password);

      res.json({ user: { username: user.username } });
    }
  }
};

const logInUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await verifyUser(username.toLowerCase(), password);
  if (user) {
    const userId = user._id.toString();
    const token = jwt.sign({ userId, username: user.username }, JWT_SECRET, {
      expiresIn: "2h",
      subject: userId,
    });
    res.json({ user, token });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { requireLogin, registerNewUser, logInUser };
