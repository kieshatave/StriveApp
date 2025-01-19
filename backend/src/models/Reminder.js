const mongoose = require('mongoose');
const { type } = require('os');

const reminderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['hydration', 'meditation', 'meal', 'workout'],
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    daysOfWeek: [{
        type: String,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    }],
    message: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Reminder', reminderSchema);