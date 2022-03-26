const express = require("express");
const { requireLogin } = require("../controllers/auth");
const handlePosts = require("../controllers/posts");
const router = express();

router.get("/", requireLogin, handlePosts.getAllPosts);
router.post("/", requireLogin, handlePosts.newPost);
router.get("/:id", requireLogin, handlePosts.getPost);
router.patch("/:id", requireLogin, handlePosts.editPost);
router.delete("/:id", requireLogin, handlePosts.deletePost);

module.exports = router;
