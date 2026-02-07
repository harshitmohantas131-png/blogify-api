const getAllPosts = (req,res) => {
  res.status(200).json({
    message: "Posts fetched successfully"
  });
};
module.exports = { getAllPosts};
