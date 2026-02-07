const getAllPosts = (req,res) => {
  res.status(200).json({
    message: "Posts fetched successfully"
  });
};
const getPostById = async (req,res) => {
  //Extract postId from URL parameters
  const postId=req.params.postId;
  res.status(200).json({
    message: "Fetching data for post with Id:" + postId
  });
};
module.exports = { getAllPosts, getPostById};