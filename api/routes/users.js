const express = require("express");
const { requireLogin } = require("../controllers/auth");
const { listCurrentUser, editUserSettings } = require("../controllers/users");
const router = express();

router.get("/", requireLogin, listCurrentUser);
router.put("/", requireLogin, editUserSettings);

module.exports = router;
