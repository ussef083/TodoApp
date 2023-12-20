const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    FinishDate: {
        type: Date,
    }
}, {timestamps: true});

const Task = mongoose.models.tasks || mongoose.model('tasks', taskSchema);

module.exports = Task;
