const express = require('express');
const connect = require('../lib/dbConnection');
const Task = require('../models/task');
const app = express();
app.use(express.json());

const router = express.Router();

router.get('/', async (req, res) => {

    await connect();
    const tasks = await Task.find();
    res.status(200).json({ ...tasks });

})

module.exports = router;

