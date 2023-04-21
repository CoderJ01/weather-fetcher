const mongoose = require('mongoose');

const SearchHistorySchema = new mongoose.Schema({
    searches: {
        Type: [String]
    }
});

const SearchHistory = mongoose.model('SearchHistory', SearchHistorySchema);
module.exports = SearchHistory;