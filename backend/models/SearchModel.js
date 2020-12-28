const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchSchema = new Schema({
    searchresult: { type: String, required: true },
}, {
    timestamps: true,
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;