const express = require("express");
const { requireLogin } = require("../controllers/auth");
const handlePosts = require("../controllers/posts");
const router = express();

router.get("/", requireLogin, handlePosts.listAllPosts);
router.post("/", requireLogin, handlePosts.handleNewPost);
router.get("/:id", requireLogin, handlePosts.listSinglePost);
router.patch("/:id", requireLogin, handlePosts.editPost);
router.delete("/:id", requireLogin, handlePosts.deletePost);

module.exports = router;
