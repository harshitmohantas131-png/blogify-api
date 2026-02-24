const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/users.controller");

//Validation rules for registration
const registerValidationRules = [
  body("email")
     .isEmail()
     .withMessage("Please enter a valid email address."),
  body("password")
     .isLength({ min: 6 })
     .withMessage("Password must be atleast 6 characters long."),
  body("username")
     .notEmpty()
     .withMessage("Username is required.")
];

//Route
router.post("/register",registerValidationRules, userController.registerUser);

module.exports = router;