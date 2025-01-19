const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Cardio', 'Strength', 'Flexibility', 'Balance', 'Endurance'],
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true,
    },
    duration: {
        type: Number, // in minutes
        required: true,
    },
    caloriesBurned: {
        type: Number,
        required: true,
    },
    equipmentNeeded: {
        type: String,
    },
    exercises: [
        {
            name: {
                type: String,
                required: true,
            },
            sets: {
                type: Number,
                required: true,
            },
            reps: {
                type: Number, // Reps per set
            },
            duration: {
                type: Number, // Duration in seconds for time-based exercises
            },
            rest: {
                type: Number, // Rest time in seconds between sets
            },
        },
    ],
    targetMuscles: [
        {
            type: String, // E.g., "Arms", "Legs", "Core", "Back"
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Workout', workoutSchema);