const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

router.route('/list').get(function (req, res) {
    Todo.find((err, todos) => {
        if (err) {
            console.log(err);
            res.status(400).json({ success: false, message: err });
        } else {
            res.json(todos);
        }
    });
});

router.route('/:id').get(function (req, res) {
    let todoId = req.params.id;
    Todo.findById(todoId, (err, todo) => {
        if (!todo) {
            res.status(404).json({ success: false, message: 'Todo Item with given ID not found' });
        } else {
            res.status(200).json({ success: true, message: todo });
        }
    });
});

router.route('/create').post(function (req, res) {
    let todo = new Todo(req.body);
    console.log(todo);
    todo.save()
        .then(todo => {
            res.status(200).json({ success: true, message: 'todo added successfully' });
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({ success: false, message: 'adding todo failed' })
        })
});

router.route('/update/:id').put(function (req, res) {
    let todoId = req.params.id;
    Todo.findById(todoId, (err, todo) => {
        if (!todo) {
            res.status(404).json({ success: false, message: 'Todo with given ID not found' });
        } else {
            todo.description = req.body.description;
            todo.responsible = req.body.responsible;
            todo.priority = req.body.priority;
            todo.completed = req.body.completed;

            todo.save()
                .then(todo => res.status(200).json({ success: true, message: 'todo updated successfully' }))
                .catch(err => res.status(400).json({ success: true, message: 'todo update failed' }));
        }
    });
});

module.exports = router;