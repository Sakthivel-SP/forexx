const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const app = express();

app.use(cors());


app.use(express.json());

/* 🔗 MongoDB connect */
mongoose
  .connect("mongodb+srv://sakthivel:ILLpYC3qXjhwcE9a@cluster0.5ik687m.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

/* ================= REGISTER ================= */
app.post("/api/register", async (req, res) => {
  const { name, age, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name,
    age,
    email,
    password: hashedPassword,
  });

  await user.save();
  res.json({ message: "Registration successful" });
});

/* ================= LOGIN ================= */
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Password incorrect" });
  }

  res.json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      age: user.age,
      email: user.email,
    },
  });
});

/* ================= LIVE CHART (already irukkurathu) ================= */
app.get("/api/live-chart", (req, res) => {
  const data = [
    { name: "EURUSD", value: Math.floor(Math.random() * 150) + 20 },
    { name: "GBPUSD", value: Math.floor(Math.random() * 150) + 20 },
    { name: "USDJPY", value: Math.floor(Math.random() * 150) + 20 },
    { name: "AUDUSD", value: Math.floor(Math.random() * 150) + 20 },
    { name: "USDCAD", value: Math.floor(Math.random() * 150) + 20 },
    { name: "CADCHF", value: Math.floor(Math.random() * 150) + 20 },
    { name: "NZDCAD", value: Math.floor(Math.random() * 150) + 20 },
    { name: "AUDJPY", value: Math.floor(Math.random() * 150) + 20 },
    { name: "JPYCHF", value: Math.floor(Math.random() * 150) + 20 },
    { name: "NZDJPY", value: Math.floor(Math.random() * 150) + 20 }
  ];
  res.json(data);
});


// =============test===================================
app.get("/", (req, res) => {
  res.json({message:"Working!!!!!!!"});
});


app.listen(process.env.PORT || 5000, () =>
  console.log("Backend running on http://localhost:5000")
);


