// Express.js
const express = require('express');

// other imports
const cors = require('cors');
require('colors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(express.json);
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(PORT, console.log(`Listing on port ${PORT}...`));

module.exports = app;