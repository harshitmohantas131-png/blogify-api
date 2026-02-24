const { validationResult } = require("express-validator");

const createPost = (req,res) => {
  const errors = validationResult(req);
  // If validation errors exist
  if (!errors.isEmpty()){
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  // If validation passed
  const { title, content } = req.body;
  res.status(201).json({
    success: true,
    message: "Post created successfully",
    data: {
      title, content 
    }
  });
};
const getAllPosts = (req,res) => {
  const { sortBy } = req.query;
  if (sortBy==='date') {
    console.log('Sorting posts by date...');
  }
  res.status(200).json({
    success: true,
    data: {
    message: "Posts fetched successfully" 
  }
  });
};
const getPostById =  (req,res) => {
  //Extract postId from URL parameters
  const { postId } = req.params;
  res.status(200).json({
    success: true, 
    data: {
    message: "Fetching data for post with Id:" + postId  
    }
  });
};
module.exports = { getAllPosts, getPostById, createPost};