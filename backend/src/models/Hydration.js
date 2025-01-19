const { date } = require('joi');
const mongoose = require('mongoose');

const hydrationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    waterIntake: {
        type: Number, // Watter intake in millileters
        required: true,
    },
});

module.exports = mongoose.model('Hydration', hydrationSchema);