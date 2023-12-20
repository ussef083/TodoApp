const express = require('express');
const connect = require('../lib/dbConnection');
const Task = require('../models/task');
const app = express();
app.use(express.json());
const router = express.Router();

const middleware = (req, res, next) => {
    const { title, FinishDate } = req.body
    if (!title || !FinishDate) {
        return res.status(400).json({ error: 'Please include a title and FinishDate' })
    }
    next();
}

router.use(middleware);

router.post('/', async (req, res) => {  
    try {
        await connect();
        const task = await Task.create({
            title: req.body.title,
            FinishDate: req.body.FinishDate,
            completed: false
        })
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(500).send('Internal server error. Please try again!. ' + error);
    }
})

module.exports = router;