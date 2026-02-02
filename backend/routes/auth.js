const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("AUTH ROUTE OK");
});

router.get("/check", (req, res) => {
  res.send("AUTH CHECK OK");
});
// Farmer
router.post("/farmer/register", (req, res) => {
  const { name, aadhar, phone, passcode } = req.body;

  if (!name || !aadhar || !phone || !passcode) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  res.json({
    success: true,
    message: "Farmer registered successfully"
  });
});



router.post("/farmer/login", (req, res) => {
  const { phone, passcode } = req.body;

  if (!phone || !passcode) {
    return res.status(400).json({
      success: false,
      message: "Phone and passcode are required"
    });
  }

  // dummy check for now
  if (phone === "9876543210" && passcode === "1234") {
    return res.json({
      success: true,
      message: "Farmer login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid phone or passcode"
  });
});


// User
router.post("/user/register", (req, res) => {
  const { name, phone, passcode } = req.body;

  if (!name || !phone || !passcode) {
    return res.status(400).json({
      success: false,
      message: "Name, phone, and passcode are required"
    });
  }

  res.json({
    success: true,
    message: "User registered successfully"
  });
});
router.post("/user/register", (req, res) => {
  const { name, phone, passcode } = req.body;

  if (!name || !phone || !passcode) {
    return res.status(400).json({
      success: false,
      message: "Name, phone, and passcode are required"
    });
  }

  res.json({
    success: true,
    message: "User registered successfully"
  });
});


router.post("/user/login", (req, res) => {
  const { phone, passcode } = req.body;

  if (!phone || !passcode) {
    return res.status(400).json({
      success: false,
      message: "Phone and passcode are required"
    });
  }

  // dummy check for now
  if (phone === "9123456789" && passcode === "5678") {
    return res.json({
      success: true,
      message: "User login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid phone or passcode"
  });
});


router.post("/login", (req, res) => {
  const { phone, password } = req.body;

  // 🔹 basic validation
  if (!phone || !password) {
    return res.status(400).json({
      message: "Phone and password are required"
    });
  }

  if (phone === "9876543210" && password === "1234") {
    return res.json({
      success: true,
      message: "Farmer login successful"
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid phone or password"
  });
});



module.exports = router;
