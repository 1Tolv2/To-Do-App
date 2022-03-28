const express = require("express");
const { requireLogin } = require("../controllers/auth");
const { listCurrentUser } = require("../controllers/users");
const router = express();

router.get("/", requireLogin, listCurrentUser);

module.exports = router;
