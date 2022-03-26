const express = require("express");
const { requireLogin } = require("../controllers/auth");
const { getPosts, newPost } = require("../controllers/posts");
const { Post } = require("../models/post");
const router = express();

router.get("/", requireLogin, getPosts);

router.post("/", requireLogin, newPost);
module.exports = router;
