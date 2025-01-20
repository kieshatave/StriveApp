const mongoose = require('mongoose');
const { type } = require('os');

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, // in days
        required: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
    },
    participants: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        },
        progress: {
            type: Number, // e.g., percentage of completion
            default: 0,
        },
    }],
});

module.exports = mongoose.model('Challenge', challengeSchema);