const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoApiRouter = require('./routes/api/todoApi');
const PORT = 4000;
app.use(cors());
app.use(bodyParser.json());
app.use("/api/todo", todoApiRouter);

mongoose.connect('mongodb://127.0.0.1:27017/todolist', { useNewUrlParser: true })
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log(err));

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});