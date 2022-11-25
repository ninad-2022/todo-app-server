const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ninad_bhoir:TodoApp@todo-app.ttnwq10.mongodb.net/?retryWrites=true&w=majority"
);

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("Connected to db");
});

conn.on("disconnected", () => {
  console.log("disconnected to db");
});

conn.on("error", (err) => {
  console.log("could not connected", err);
});

const oneTodoSchema = mongoose.Schema({
  id: Number,
  todo: String,
});
