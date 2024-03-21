const express = require("express");
const router = express.Router();

router.post("/create-todo", (req, res) => {
  // const { text } = req.body;
  return res.status(200).json({ message: "Super" });
});

module.exports = router;
