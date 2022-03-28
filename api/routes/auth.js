const express = require("express");
const { registerNewUser, logInUser } = require("../controllers/auth");
const router = express();

router.post("/users", registerNewUser);
router.post("/api-token", logInUser);

module.exports = router;
