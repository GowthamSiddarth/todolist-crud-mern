const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

router.route('/list').get(function (req, res) {
    Todo.find((err, todos) => {
        if (err) {
            console.log(err);
            res.status(500).json({ success: false, message: err });
        } else {
            res.json(todos);
        }
    });
});

router.route('/:id').get(function (req, res) {
    let todoId = req.params.id;
    Todo.findById(id, (err, todo) => {
        res.json(todo);
    });
});

module.exports = router;