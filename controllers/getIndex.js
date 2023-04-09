const Todo = require("../models/Todo")

exports.getIndex = async(req, res) =>{
    try {
        const todos = await Todo.find();
        const completedTodos = await Todo.countDocuments({completed: true});
        res.render('index',{title:'todos app',
        todos,
        completedTodos,
        remainingTodos: todos.length - completedTodos
    })
    } catch (error) {
        console.log(error);
    }
}