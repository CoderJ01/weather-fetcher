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

    const getOccurance = (array, value) => {
        return array.filter((v) => (v === value)).length;
    }

    let tally = [];
    for(let i = 0; i < cities.length; i++) {
        tally[i] = {
            city: cities[i],
            numberOfSearches: getOccurance(searchHistory.searches, cities[i])
        }
    }

    let greatest = 0;
    for(let i = 0; i < tally.length; i++) {
        if(tally[i].numberOfSearches > greatest) {
            greatest = tally[i].numberOfSearches;
            console.log(greatest)
        }
    }

    const bubbleSort = (array) => {
        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length - i - 1; j++) {
                if(array[j + 1].numberOfSearches > array[j].numberOfSearches) {
                    [array[j + 1], array[j]] = [array[j], array[j + 1]]
                }
            }
        }
        return array;
    }

    let orderedTally = bubbleSort(tally);

    res.send(orderedTally);
});

module.exports = router;


