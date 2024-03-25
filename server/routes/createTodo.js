const express = require("express");
const router = express.Router();

//db
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("database.db");

router.post("/create-todo", (req, res) => {
  const { text } = req.body;

  db.run("INSERT INTO todo (text) VALUES (?)", [text], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json({ message: `Success - id ${this.lastId}` });
  });
});

module.exports = router;
