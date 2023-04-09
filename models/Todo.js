const mongoose = require('mongoose');
const Schema = mongoose.Schema({title:String , completed:{
    type: Boolean,
    default:false
}})
const Todo = mongoose.model('Todo',Schema);

module.exports = Todo;