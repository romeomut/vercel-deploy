const express = require("express");
const router = express.Router();

//db
const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("database.db");

router.get("/get-todo", (req, res) => {
  db.all("SELECT * FROM todo", (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json(row);
  });
});

module.exports = router;
