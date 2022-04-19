const mongoose = require("mongoose");

const expTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
});

const ExpToken = mongoose.model("ExpToken", expTokenSchema);

const addExpiredToken = async (token) => {
  const expToken = new ExpToken({ token });
  await expToken.save((error) => {
    if (error) {
      res.json({ error: "Token expiration unsuccessful" }, 400);
    }
  });
};

const findExpiredToken = async (token) => {
  return await ExpToken.findOne({ token });
};

module.exports = { addExpiredToken, findExpiredToken };
