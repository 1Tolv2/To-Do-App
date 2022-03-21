const express = require("express");
const { createUser } = require("../controllers/auth");
const router = express();

router.post("/", createUser);

module.exports = router;
