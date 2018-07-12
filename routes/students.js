var express = require('express')
var router = express.Router()
var Student = require('../apps/controllers/Student-controller')

router.get('/', Student.getAllStudents)

// router.get('/:id', function (req, res) {
//     ToDoList.getTodosById(req, res)
// })

router.post('/', Student.insertStudent)

// router.put('/:id', function (req, res) {
//     ToDoList.updateTodo(req, res)
// })

// router.delete('/:id', function (req, res) {
//     ToDoList.deleteTodo(req, res)
// })

module.exports = router
