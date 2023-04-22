const router = require('express').Router();
const SearchHistory = require('../models/SearchHistory');

router.post('/', async (req, res) => {
    const searchHistory = await SearchHistory.findOne({ _id: process.env.ID });
    
    if(req.body.input) {
        searchHistory.searches.push(req.body.input.toLowerCase());
        searchHistory.save();
    }
    res.send(searchHistory);
});

module.exports = router;


