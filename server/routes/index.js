// Express.js
const router = require('express').Router();

// Routes
const searchHistoryRoutes = require('./search-history');

router.use('/search-history', searchHistoryRoutes);

module.exports = router;