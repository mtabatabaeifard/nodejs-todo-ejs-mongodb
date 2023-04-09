const mongoose = require('mongoose');
const Schema = mongoose.Schema({title:String , completed:{
    type: Boolean,
    default:false
}})
const Todo = mongoose.model('Todo',Schema);

module.exports = Todo;


//  !! important note:
// ? Right Model Config in mongoose :
// ! first define Shcema!
// * Then Create Model
// ? Then export the model...