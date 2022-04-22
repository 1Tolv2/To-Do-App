const express = require("express");
const { getAllTags, handleNewTag } = require("../controllers/tags");
const { requireLogin } = require("../controllers/auth");
const router = express();

router.get("/", requireLogin, getAllTags);
// router.get("/:tag", requireLogin, getPostsByTag);
router.post("/", requireLogin, handleNewTag);

module.exports = router;
