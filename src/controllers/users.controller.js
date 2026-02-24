const { validationResult } = require("express-validator");

const registerUser= (req,res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  res.status(201).json({
    success: true,
    message: "User registered successfully"
  });
};

module.exports = {
  registerUser
};