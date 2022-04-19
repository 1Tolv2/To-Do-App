const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const { PORT } = require("./settings");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
app.use(upload.single("image"));
app.use("/uploads", express.static("./uploads"));
app.use(cors());
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
