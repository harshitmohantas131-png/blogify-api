const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
const protect = require("../middleware/auth.middleware");
const { changePasswordRules } = require("../middleware/validators");

router.post("/register", auth.registerUser);
router.post("/login", auth.loginUser);
router.post("/logout", auth.logoutUser);
router.post(
  "/change-password",
  protect,
  changePasswordRules,
  auth.changePassword
);
module.exports = router;