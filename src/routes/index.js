const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/posts", require("./post.routes"));

module.exports = router;