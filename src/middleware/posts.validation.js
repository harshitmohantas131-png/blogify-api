const { body } = require("express-validator");

exports.createPostRules = [
  body("title").notEmpty().withMessage("Title is required"),
  body("content").notEmpty().withMessage("Content is required")
];