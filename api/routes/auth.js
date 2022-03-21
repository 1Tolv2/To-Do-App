const express = require("express");
const { createUser, logInUser } = require("../controllers/auth");
const router = express();

router.post("/users", createUser);
router.post("/api-token", logInUser);

module.exports = router;
