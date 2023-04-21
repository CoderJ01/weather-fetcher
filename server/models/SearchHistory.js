const mongoose = require('mongoose');

const SearchHistorySchema = new mongoose.Schema({
    searches: {
        type: [String]
    }
});

const SearchHistory = mongoose.model('SearchHistory', SearchHistorySchema);
module.exports = SearchHistory;