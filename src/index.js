const express = require('express');
const app = express();
//Middleware
app.use(express.json());
// Import Routes
const postsRouter = require('./routes/posts.routes');
// Mount Routes
app.use('/api/v1',postsRouter);
//Start Server
app.listen(3000, ()=> {
  console.log("Server is running on port 3000");
});
module.exports = app;

