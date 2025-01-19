const mongoose = require('mongoose');
const { title } = require('process');

const goalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    goalType: {
        type: String,
        enum: ['weight loss', 'muscle gain', 'flexibility', 'endurance'],
        required: true,
    },
    targetDate: {
        type: Date,
        required: true,
    },
    progress: {
        type: Number, // e.g., percentage of completion
        default: 0,
    },
    status: {
        type: String,
        enum: ['not started', 'in progress', 'completed', 'on hold'],
        default: 'not started',
    },
});

module.exports = mongoose.model('Goal', goalSchema);