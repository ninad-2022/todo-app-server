const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const TodoSchema = new mongoose.Schema({
  todoId: Number,
  todo: String,
});

TodoSchema.plugin(AutoIncrement, { inc_field: "todoId" });
module.exports = mongoose.model("Todo", TodoSchema);
