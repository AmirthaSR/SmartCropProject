const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("LOGIN HIT");
  console.log("Email:", email);
  console.log("Password:", password);

  if (email === "test@gmail.com" && password === "1234") {
    res.json({
      success: true,
      message: "Login successful"
    });
  } else {
    res.json({
      success: false,
      message: "Invalid email or password"
    });
  }
});

module.exports = router;
