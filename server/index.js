const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use(express.json());
const bodyParser = require("body-parser");
app.use(express.json());

//

const testRoutes = require("./routes/testRoutes");
app.use(testRoutes);

//

const createTodo = require("./routes/createTodo");
app.use(createTodo);

//

const getTodo = require("./routes/getTodo");
app.use(getTodo);

//

const port = 5050;

app.listen(port, console.log(`Server started on port ${port}`));
