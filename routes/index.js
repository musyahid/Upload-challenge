var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')

/* GET Dashboard */
router.get('/', function(req, res, next) {
  Todo.find({}, function(err, todo){
    if(err) {
        console.log(err)
    }else {
        res.render('index', {
            title: 'Dashboard Todo',
            todo: todo
        })
    }
}) 
});

module.exports = router;
