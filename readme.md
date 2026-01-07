approuter -->
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

       <Route element={<ProtectedRoute role="user" />}>
  <Route path="/dashboard" element={<UserDashboard />} />
</Route>

<Route element={<ProtectedRoute role="admin" />}>
  <Route path="/admin" element={<AdminDashboard />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}
--------------------------------------------
server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/certificate", require("./routes/certificateRoutes"));

app.listen(5000, () => console.log("Server running on 5000"));
--------------------------------------------
authcontroller
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    ...req.body,
    password: hashed
  });
  res.json("Registered");
};

exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json("User not found");

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(400).json("Wrong password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    "secret"
  );

  res.json({ token, role: user.role });
};
