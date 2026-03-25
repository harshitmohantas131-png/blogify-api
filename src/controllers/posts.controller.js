const Post = require("../models/post.model");
const postService = require("../services/posts.service");
const { validationResult } = require("express-validator");

const createPost = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }
    const { title, content, author } = req.body;
    const newPost = await Post.create({ title, content, author });
    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost
    });
  } catch (error) {
    next(error);
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts(req.query);

    res.status(200).json({
      success: true,
      data: posts,
      message: "Fetched all posts successfully"
    });
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const post = await postService.getPostById(postId);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    res.status(200).json({
      success: true,
      data: post,
      message: "Fetched post successfully with postId: " + postId
    });

  } catch (error) {
    next(error);
  }
};


const updatePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      req.body,
      {
        new: true,        // return the updated document
        runValidators: true
      }
    );

    if (!updatedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: updatedPost
    });

  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { postId } = req.params;

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Post deleted successfully"
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };