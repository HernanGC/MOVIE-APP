const router = require('express').Router();
let Favourites = require('../models/FavouritesModel');

router.route('/').get( (req, res) => {
    Favourites.find()
    .then(favourites => res.json(favourites))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post( (req, res) => {
    const favouritemovies = req.body.favouritemovies;

    const newFavourites = new Favourites({favouritemovies});

    newFavourites.save()
    .then( () => res.json('Favourite added!'))
    .catch( err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;