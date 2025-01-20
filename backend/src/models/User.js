const { unique } = require('@tensorflow/tfjs');
const { time } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');
const { id } = require('postcss-selector-parser');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose.Types.ObjectId().toString(),
    },
    username: {
        type: String,
        required: true, 
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fitnessLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner',
    },
    goals: {
        type: [String], // array of strings e.g. ['weight loss', 'muscle gain'] 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    personalInfo: {
        age: {
            type: Number
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other']
        },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
    },
});

module.exports = mongoose.model('User', userSchema);