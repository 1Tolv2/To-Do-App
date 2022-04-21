const express = require("express");
const { getAllTags, getPostsByTag } = require("../controllers/tags");
const { requireLogin } = require("../controllers/auth");
const router = express();

router.get("/", requireLogin, getAllTags);
router.get("/:tag", requireLogin, getPostsByTag);

module.exports = router;
