const router = require('express').Router();
const SearchHistory = require('../models/SearchHistory');

router.get('/', async (req, res) => {
    const searchHistory = await SearchHistory.find();
    console.log('Testing');
    res.send(searchHistory);
});

module.exports = router;


