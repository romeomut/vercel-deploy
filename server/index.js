const express = require("express");
const app = express();

const port = 5050;

app.use("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/test", (req, res) => {
  res.send("Server is testing!");
});

app.listen(port, console.log(`Server started on port ${port}`));
