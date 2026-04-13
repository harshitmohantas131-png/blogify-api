const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);
router.post("/logout", auth.logoutUser);

module.exports = router;