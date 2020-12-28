const router = require('express').Router();
let mightLike = require('../models/MightLikeModel');

router.route('/').get( (req, res) => {
    mightLike.find()
    .then(mightlikes => res.json(mightlikes))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post( (req, res) => {
    const mightlikemovies = req.body.mightlikemovies;

    const newMightLike = new mightLike({mightlikemovies});

    newMightLike.save()
    .then( () => res.json('MightLike added!'))
    .catch( err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;