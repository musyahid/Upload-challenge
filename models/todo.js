const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/todo_uploud", { useNewUrlParser: true });

const todoSchema = new Schema({
  nama: String, 
  description: String,
  status: Boolean,
  photo: String
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
