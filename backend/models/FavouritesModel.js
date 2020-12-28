const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favouritesSchema = new Schema({
    favouritemovies: { type: String, required: true },
}, {
    timestamps: true,
});

const Favourites = mongoose.model('Favourites', favouritesSchema);

module.exports = Favourites;