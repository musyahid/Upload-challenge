const TodoModel = require("../models/todo");

exports.store = async (req, res) => {
  const { params, file, body } = req;
  const todo = new TodoModel({ nama: body.nama, description: body.description , status: body.status, photo: file.filename});
  await todo.save();
  res.redirect("/");
};






