var express = require("express");

const uploadsMiddlewar = require("../middleware/uploads");
const TodoControllers = require("../controllers/todo");
const Todo = require('../models/todo')
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond router no');
  res.render("todo/index");
});


//Get single todo
router.get('/todo_details/:id', function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
      res.render('todo/todo_details', {
          todo: todo
      })
  }) 
})


//Load Edit form todo
router.get('/edit/:id', function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
      res.render('todo/todo_edit', {
          title: 'Edit TODO',
          todo: todo
      })
  }) 
})

//update
router.post('/edit/:id', function(req, res){
  const todo = {}
  todo.nama = req.body.nama
  todo.description = req.body.description
  todo.status = req.body.status
  const query = {_id:req.params.id}

  Todo.update(query, todo, function(err){
      if(err) {
          console.log(err)
          return
      }else {
          res.redirect('/')
      }
  })
})

//delete
router.delete('/delete/:id', function(req, res){
    let query = {_id:req.params.id}

    Todo.remove(query, function(err){
      if(err) {
        console.log(err)
      }
      res.send('Success')
    })
})


router.post("/", uploadsMiddlewar.single("photo"), TodoControllers.store);


module.exports = router;
