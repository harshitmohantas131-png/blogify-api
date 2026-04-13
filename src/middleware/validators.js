const { body } = require("express-validator");

// 🔐 Change Password Rules
exports.changePasswordRules = [
  body("oldPassword")
    .notEmpty()
    .withMessage("Old password is required"),

  body("newPassword")
    .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage(
      "Password must be 8+ chars, include 1 uppercase and 1 number"
    )
];