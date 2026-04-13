const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.registerUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ success: true, data: user });
};

// LOGIN (COOKIE)
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("accessToken", token, {
    httpOnly: true
  });

  res.json({ success: true, message: "Login success" });
};

// LOGOUT
exports.logoutUser = (req, res) => {
  res.clearCookie("accessToken");
  res.json({ success: true, message: "Logged out" });
};