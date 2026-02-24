const express= require("express");
const router = express.Router();
// Import resource-sepcific routers
const postRouter = require("./posts.routes");
const userRouter = require("./users.routes");
//Mount them
router.use('/posts',postRouter);
router.use("/users",userRouter);
//Export master router
module.exports = router;