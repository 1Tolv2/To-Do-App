const express = require("express");
const mongoose = require("mongoose");

const { PORT } = require("./settings");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);

mongoose.connect("mongodb://localhost/toDo");

app.listen(PORT, (req, res) => {
  console.log(`Started express server on PORT: ${PORT}`);
});
