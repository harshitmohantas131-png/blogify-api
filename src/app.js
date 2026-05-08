const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", require("./routes"));
app.get("/", (req, res) => {
  res.send("Blogify API is live 🚀");
});

module.exports = app;