var Student = require('../models/Student')

const getAllStudents = async (req, res) => {
    let students = await Student.findAll({}).catch(err => {
        res.status(500).json({
            status: false,
            code: 'GET-STUDENT',
            message: 'Get students failed',
            error: err
        })
    })
    if (!students) {
        res.status(404).json({
            status: false,
            code: 'GET-STUDENTS',
            message: 'Get students failed',
            error: err
        })
    } else{
        res.status(200).json({
            status: true,
            code: 'GET-STUDENT',
            message: 'Get student successfuly',
            data: students
        })
    }
}

// const getTodosById = (req, res) => {
//     ToDo.findById(req.params.id, (err, todos) => {
//         if (err) {
//             res.status(500).json({
//                 status: false,
//                 code: 'GET-TODO',
//                 message: 'Get todo failed',
//                 error: err
//             })
//         } else {
//             res.status(200).json({
//                 status: true,
//                 code: 'GET-TODO',
//                 message: 'Get todo successfuly',
//                 data: todos
//             })
//         }
//     })
// }

const insertStudent = async (req, res) => {
    var studentData = {
        id:1,
        name: req.body.name,
        // description: req.body.description,
        // status: req.body.status
    }
    let student = await Student.create(studentData)
    res.send(student)
    // var newTodo = new ToDo(todo)
    // newTodo.save((err, todo) => {
    //     if (err) {
    //         res.status(500).json({
    //             status: false,
    //             code: 'INSERT-TODO',
    //             message: 'Insert new todo failed',
    //             error: err
    //         })
    //     } else {
    //         res.status(200).json({
    //             status: true,
    //             code: 'INSERT-TODO',
    //             message: 'Insert new todo successfuly',
    //             data: todo
    //         })
    //     }
    // })
}

// const updateTodo = (req, res) => {
//     ToDo.findByIdAndUpdate(req.params.id, {
//         $set: {
//             name: req.body.name,
//             description: req.body.description,
//             status: req.body.status
//         }
//     }, { new: true }, (err, todo) => {
//         if (err) {
//             res.status(500).json({
//                 status: false,
//                 code: 'UPDATE-TODO',
//                 message: 'Update new todo failed',
//                 error: err
//             })
//         } else {
//             res.status(200).json({
//                 status: true,
//                 code: 'UPDATE-TODO',
//                 message: 'Update new todo successfuly',
//                 data: todo
//             })
//         }
//     })
// }

// const deleteTodo = (req, res) => {
//     ToDo.remove({ _id: req.params.id }, (err, todo) => {
//         if (err) {
//             res.status(500).json({
//                 status: false,
//                 code: 'DELETE-TODO',
//                 message: 'Delete new todo failed',
//                 error: err
//             })
//         } else {
//             res.status(200).json({
//                 status: true,
//                 code: 'DELETE-TODO',
//                 message: 'Delete new todo successfuly',
//                 data: todo
//             })
//         }
//     })
// }


module.exports = {
    getAllStudents,
    insertStudent,
    // getTodosById,
    // updateTodo,
    // deleteTodo
}
