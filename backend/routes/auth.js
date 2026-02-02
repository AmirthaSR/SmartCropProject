const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("AUTH ROUTE OK");
});

router.get("/check", (req, res) => {
  res.send("AUTH CHECK OK");
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
