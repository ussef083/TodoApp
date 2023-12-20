const express = require('express');
const connect = require('../lib/dbConnection');
const Task = require('../models/task');
const app = express();

const router = express.Router();

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send('Task not found.');
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send('Internal server error. Please try again!.');
    }
});

module.exports = router;