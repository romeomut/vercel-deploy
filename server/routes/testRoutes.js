const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is running!");
});

router.get("/test", (req, res) => {
  //res.send("Server is testing!");
  return res.status(200).json({ message: "Server is testing!" });
});

module.exports = router;
