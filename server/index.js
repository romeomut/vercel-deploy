const express = require("express");
const app = express();

const port = 5050;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/test", (req, res) => {
  res.send("Server is testing!");
});

app.listen(port, console.log(`Server started on port ${port}`));
