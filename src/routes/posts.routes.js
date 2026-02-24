const express = require("express");
const router = express.Router();

const postController = require("../controllers/posts.controller");
const {createPostRules} = require("../middleware/posts.validation");

router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);
router.post("/", createPostRules, postController.createPost);

module.exports = router;

