const express = require("express");
const router = express.Router();
const {getAllPosts} = require("../controllers/posts.controller")

// GET /api/v1/posts
router.get("/posts", getAllPosts);

module.exports = router;

