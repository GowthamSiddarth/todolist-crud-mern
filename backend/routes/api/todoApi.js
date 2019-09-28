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

module.exports = router;