const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is running!");
});

router.get("/test", (req, res) => {
  //res.send("Server is testing - super!");
  return res.status(200).json({ message: "Server is testing - super!" });
});

module.exports = router;
