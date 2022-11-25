const router = require("express").Router();
const {
  createTodo,
  deleteTodo,
  fetchAllTodo,
  deleteAllTodo,
} = require("../controllers/todo.controller");

router.post("/", createTodo); //createTodo
router.delete("/:id", deleteTodo); //deleteTodo
router.delete("/", deleteAllTodo); //deleteAllTodo
router.get("/", fetchAllTodo); //fetchAllTodo

module.exports = router;
