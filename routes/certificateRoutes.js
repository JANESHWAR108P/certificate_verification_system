const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const Certificate = require("../models/Certificate");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "No token" });

  req.user = jwt.verify(token, "secret123");
  next();
};

router.post("/upload", auth, upload.single("certificate"), async (req, res) => {
  const cert = await Certificate.create({
    userId: req.user.id,
    filename: req.file.filename,
    originalName: req.file.originalname,
  });
  res.json(cert);
});

router.post("/upload", auth, upload.single("certificate"), async (req,res)=>{
  await Certificate.create({
    user: req.user.id,
    file: req.file.filename,
    status: "Pending"
  });
  res.json({msg:"Uploaded"});
});

router.get("/admin", async (req, res) => {
  const certs = await Certificate.find().populate("userId", "name email");
  res.json(certs);
});

router.put("/:id/status", async (req, res) => {
  const { status } = req.body;
  await Certificate.findByIdAndUpdate(req.params.id, { status });
  res.json({ msg: "Updated" });
});

router.get("/user/:id", async (req, res) => {
  const certs = await Certificate.find({ userId: req.params.id });
  res.json(certs);
});

module.exports = router;
