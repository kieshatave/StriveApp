require('dotenv').config;
const connectDB = require('./config/database');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

// connect to db
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});