const express = require("express");
const app = express();

// Import Routes
const postsRouter = require("./routes/posts.routes");

// Mount Routes
app.use("/api/v1", postsRouter);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


