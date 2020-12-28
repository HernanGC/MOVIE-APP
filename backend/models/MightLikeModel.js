const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mightLikeSchema = new Schema({
    mightlikemovies: { type: String, required: true },
}, {
    timestamps: true,
});

const mightLike = mongoose.model('mightLike', mightLikeSchema);

module.exports = mightLike;