const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const fitnessAssessmentRoutes = require('./routes/fitnessAssessmentRoutes');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// basic route
app.get('/', (req, res) => {
    res.send('Strive backend is running.');
});

// moutning the user routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/fitness', fitnessAssessmentRoutes);

module.exports = app;