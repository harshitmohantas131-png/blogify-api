const express = require("express");
const router = express.Router();
const post = require("../controllers/post.controller");
const protect = require("../middleware/auth.middleware");

router.post("/", protect, post.createPost);
router.delete("/:id", protect, post.deletePost);

module.exports = router;