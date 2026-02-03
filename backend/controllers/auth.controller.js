const User = require("../models/User");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, password });
    res.json({ message: "Register success", user });

  } catch (err) {
    res.status(500).json({ message: "Register error" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json({
      message: "Login success",
      user
    });

  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
};
