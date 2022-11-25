const todoModel = require("../models/todo.model");
const TodoModel = require("../models/todo.model");

class TodoController {
  static createTodo(req, res) {
    const todo = req.body;
    new TodoModel(todo)
      .save()
      .then((result) => {
        res.status(201).send({ message: "Todo created", data: result });
      })
      .catch((err) => {
        res.status(500).send({ message: "User not created", error: err });
      });
  } //createTodo

  static deleteTodo(req, res) {
    const { id } = req.params;
    TodoModel.findOneAndDelete({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "todo deleted", data: result });
      })
      .catch((err) => {
        res.status(500).send({ message: "todo not deleted", error: err });
      });
  } //deleteTodo

  static deleteAllTodo(req, res) {
    TodoModel.deleteMany()
      .then((result) => {
        res.status(200).send({ message: "deleted all", data: result });
      })
      .catch((err) => {
        res.status(500).send({ message: "todos deleted", data: result });
      });
  } //deleteAllTodo

  static fetchAllTodo(req, res) {
    TodoModel.find()
      .then((result) => {
        res.status(200).send({ message: "all Todo", data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ message: "Could not find", error: err });
      });
  } //getAllTodos
}

module.exports = TodoController;
