const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['meal', 'workout'],
        required: true,
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'type', // reference either workout or meals
    }],
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
    },
});

exports = mongoose.model('Plan', planSchema);