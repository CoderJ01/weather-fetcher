// Express.js
const express = require('express');

// MongoDB
const connectDB = require('./config/connection');

// other imports
const cors = require('cors');
const routes = require('./routes/index');
require('colors');
require('dotenv').config();

const app = express();
const PORT = 3001;

connectDB();

app.use(express.json);
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(routes);

app.listen(PORT, console.log(`Listing on port ${PORT}...`));

module.exports = app;