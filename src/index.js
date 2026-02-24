require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const mainRouter = require('./routes');

//Global Middleware
app.use(cors());
app.use(express.json());

//Mount master router
app.use('/api/v1',mainRouter);

//Error Handling Middleware
const errorHandler = (err,req,res,next) => {
   console.error(err.stack);

     res.status(500).json({
      success:false,
      error: "Internal Server Error"
     });
    };
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


