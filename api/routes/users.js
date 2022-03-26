const express = require("express");
const { requireLogin } = require("../controllers/auth");
const { getUser, getUserWithPosts } = require("../controllers/users");
const router = express();

router.get("/", requireLogin, getUser);

module.exports = router;
