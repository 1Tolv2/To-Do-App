const express = require("express");
const { requireLogin } = require("../controllers/auth");
const { getUser } = require("../controllers/users");
const router = express();

router.get("/", requireLogin, getUser);

module.exports = router;
