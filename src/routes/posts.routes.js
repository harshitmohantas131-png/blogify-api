const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");
//GET all posts
router.get("/",postController.getAllPosts);
// Get a post by ID (dynamic route)
router.get("/:postId",postController.getPostById);

module.exports = router;

