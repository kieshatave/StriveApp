const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
    criteria: {
        type: String,
        required: true,
    },
    dateEarned: {
        type: Date,
        default: Date.now,
    },
});

exports = mongoose.model('Badge', badgeSchema);