// Express.js
const router = require('express').Router();

// models
const SearchHistory = require('../models/SearchHistory');

// utils
const { getOccurance, bubbleSort } = require('../util/util');

router.post('/', async (req, res) => {
    const searchHistory = await SearchHistory.findOne({ _id: process.env.ID });
    
    if(req.body.input) {
        searchHistory.searches.push(req.body.input.toLowerCase());
        searchHistory.save();
    }
    res.send(searchHistory);
});

router.delete('/', async (req, res) => {
    const searchHistory = await SearchHistory.findOne({ _id: process.env.ID });
    searchHistory.searches = [];
    searchHistory.save();
    res.send(searchHistory);
});

router.get('/', async (req, res) => {
    const searchHistory = await SearchHistory.findOne({ _id: process.env.ID });
    
    let cities = [];
    for(let i = 0; i < searchHistory.searches.length; i++) {
        if(!cities.includes(searchHistory.searches[i])) {
            cities.push(searchHistory.searches[i]);
        }
    }

    let tally = [];
    for(let i = 0; i < cities.length; i++) {
        tally[i] = {
            city: cities[i],
            numberOfSearches: getOccurance(searchHistory.searches, cities[i])
        }
    }

    let orderedTally = bubbleSort(tally);

    res.send(orderedTally);
});

module.exports = router;


