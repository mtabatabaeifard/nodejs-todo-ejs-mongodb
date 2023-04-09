const Todo = require("../models/Todo");

exports.handleCreateTodo = async (req, res) => {
  try {
    const todo = await Todo.create({ title: req.body.title });
    todo.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.handleDeleteTodos = async (req, res) => {
    try {
      await Todo.findByIdAndRemove(req.params.id);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
}

exports.handleCompleteTodo = async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      todo.completed = true;
      todo.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
}