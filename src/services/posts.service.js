const Post = require("../models/post.model");

const getAllPosts = async ( queryParams ) => {
  const { author, sortBy, limit =10, page = 1 } = queryParams;

  //Filter
  const filter = {};
  if (author) {
    filter.author = author;
  }

  // Sorting
  const sortOptions = {};
  if (sortBy) {
    const [field, order] = sortBy.split(":");
    sortOptions[field] = order === "desc" ? -1 : 1;
  } else {
    sortOptions.createdAt = -1; // Default sorting by creation date descending
  } 

  // Pagination
  const limitValue = parseInt(limit);
  const skipValue = (parseInt(page - 1)) * limitValue;

  const posts = await Post.find(filter)
       .sort(sortOptions)
       .skip(skipValue)
       .limit(limitValue)
       .populate("author", "username");

  return posts;
};

const getPostById = async (postId) => {
  const post = await Post.findById(postId).populate("author", "username email");
  return post;
};

module.exports = {
  getAllPosts,
  getPostById
};