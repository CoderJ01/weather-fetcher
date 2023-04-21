// Express.js
const express = require('express');

// dotenv
require('dotenv').config();

// other Node.js packages
const cors = require('cors');
require('colors');

// MongoDB
const connectDB = require('./config/connection');

// other imports
const routes = require('./routes/index');

const app = express();
const PORT = 3001;

connectDB();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(routes);

app.listen(PORT, console.log(`Listing on port ${PORT}...`));

module.exports = app;