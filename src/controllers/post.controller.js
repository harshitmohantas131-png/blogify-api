const Post = require("../models/post.model");

// CREATE
exports.createPost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.user.id
  });

  res.status(201).json(post);
};

// DELETE (SECURE)
exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) return res.status(404).json({ message: "Not found" });

  if (post.author.toString() !== req.user.id) {
    return res.status(403).json({ message: "Forbidden" });
  }

  await post.deleteOne();

  res.json({ message: "Deleted" });
};