const express = require("express");
const {
  registerNewUser,
  logInUser,
  logOutUser,
  requireLogin,
} = require("../controllers/auth");
const router = express();

router.post("/users", registerNewUser);
router.post("/api-token", logInUser);
router.get("/api-token", requireLogin, logOutUser);

module.exports = router;
