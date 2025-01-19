const { min, max } = require('lodash');
const mongoose = require('mongoose');

const fitnessAssessmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true,
    },
    assessmentDate: {
        type: Date,
        default: Date.now,
    },
    fitnessLevel: {
        currentLevel: {
            type: String,
            enum: ['beginner', 'intermediate', 'advanced'],
            default: 'beginner',
            required: true,
        },
        exerciseFrequency: {
            type: String, // times per week
            enum: ['Never', '1-2 times per week', '3-4 times per week', '5+ times per week'],
            required: true,
        },
    },
    fitnessGoals: {
        primaryGoals: [String], // array of strings e.g. ['weight loss', 'muscle gain'] 
        focusAreas: [String],
    },
    confidenceLevel: {
        type: Number,
        min: 1,
        max: 5,
    },
    lifestyle: {
        activities: [String], // Array of selected activities
        sessionTime: {
            type: String,
            enum: [
                'Less than 15 minutes',
                '15-30 minutes',
                '30-45 minutes',
                '1 hour or more',
            ],
        },
    },
    healthConditions: {
        hasConditions: {
            type: Boolean,
            default: false,
        },
        conditions: [String], // Array of conditions (e.g., 'PCOS', 'Diabetes')
    },
    dietaryPreferences: {
        dietType: {
            type: String,
            enum: [
                'No specific plan',
                'Vegetarian',
                'Vegan',
                'Keto',
                'Paleo',
                'Low-carb',
                'High-protein',
                'Other',
            ],
        },
        otherDiet: String, // For "Other" option
    },
    motivation: {
        type: String,
        enum: [
            'Seeing visible results',
            'Tracking progress',
            'Achieving milestones',
            'Competing with friends/community challenges',
            'Other',
        ],
    },
    activeStatus: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model('FitnessAssessment', fitnessAssessmentSchema);