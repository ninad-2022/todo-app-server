const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
require("./v1/models/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/todos", require("./v1/routes/todo.route"));

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
