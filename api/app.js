const express = require("express");
const mongoose = require("mongoose");

const { PORT } = require("./settings");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();

app.use("/", indexRouter);

mongoose.connect("mongodb://localhost/toDo");

app.listen(PORT, (req, res) => {
  console.log(`Started express server on PORT: ${PORT}`);
});
