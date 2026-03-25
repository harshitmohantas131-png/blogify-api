require('dotenv').config();

const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 8080;

const mainRouter = require('./routes');

connectDB(); // connect to the database

//Global Middleware
app.use(cors());
app.use(express.json());

//Mount master router
app.use('/api/v1',mainRouter);

//Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  // Handle MongoDB CastError (invalid ObjectId)
  if (err.name === "CastError") {
    statusCode = 404;
    message = "Resource not found";
  }
  // Handle Mongoose ValidationError
  if (err.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(err.errors).map(val => val.message);
    return res.status(statusCode).json({
      success: false,
      errors: errors
    });
  }
  res.status(statusCode).json({
    success: false,
    message: message
  });
};

app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


