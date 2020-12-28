const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recommendedSchema = new Schema({
    recommendedmovies: { type: String, required: true },
}, {
    timestamps: true,
});

const Recommended = mongoose.model('Recommended', recommendedSchema);

module.exports = Recommended;