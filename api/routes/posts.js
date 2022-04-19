const express = require("express");
const { requireLogin } = require("../controllers/auth");
const p = require("../controllers/posts");
const router = express();

router.get("/", requireLogin, p.listAllPosts);
router.post("/", requireLogin, p.handleNewPost);
router.get("/:id", requireLogin, p.listSinglePost);
router.get("/:id/status", requireLogin, p.toggleDoneOnPost);
router.patch("/:id", requireLogin, p.editPost);
router.delete("/:id", requireLogin, p.deletePost);

module.exports = router;
