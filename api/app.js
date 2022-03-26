const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { PORT } = require("./settings");
const JWT_SECRET = process.env.JWT_SECRET;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const authHeader = req.header("Authorization");

  if (authHeader && authHeader.split(" ")[0] === "Bearer") {
    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
  }
  next();
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);

mongoose.connect("mongodb://localhost/toDo");

app.listen(PORT, (req, res) => {
  console.log(`Started express server on PORT: ${PORT}`);
});
