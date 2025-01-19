const { ref, date } = require('joi');
const mongoose = require('mongoose');
const { type } = require('os');
const { required } = require('yargs');

const progressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    workout: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Workout model
        ref: 'Workout',
        required: true,
    },
    caloriesBurned: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
    },
});

module.exports = mongoose.model('Progress', progressSchema);