const express = require("express");
const {
  handleCreateTodo,
  handleDeleteTodos,
  handleCompleteTodo,
} = require("../controllers/todos");
const { getIndex } = require("../controllers/getIndex");

const router = express.Router();

router.get("/", getIndex);
router.post("/create-todo", handleCreateTodo);
router.get("/delete-todo/:id", handleDeleteTodos);
router.get("/complete-todo/:id", handleCompleteTodo);

module.exports = router;
