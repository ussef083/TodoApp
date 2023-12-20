const express = require('express');
const app = express();
const cors = require('cors');
const getTaskrouter = require('./routes/getTaskes');
const updateTaskrouter = require('./routes/updateTask');
const createTaskrouter = require('./routes/createTask');
const deleteTaskrouter = require('./routes/deleteTask');
require('dotenv').config();


app.use(cors(
    {
        origin: 'https://todo-app-by-youssef-wardi.vercel.app/',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }
))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/tasks', getTaskrouter);
app.use('/tasks', updateTaskrouter);
app.use('/tasks', createTaskrouter);
app.use('/deleteTasks', deleteTaskrouter);


app.listen(8000, () => console.log('Listening on port 8000...'));