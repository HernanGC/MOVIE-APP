const router = require('express').Router();
let Recommended = require('../models/RecommendedModel');

router.route('/').get( (req, res) => {
    Recommended.find()
    .then(recommendeds => res.json(recommendeds))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post( (req, res) => {
    const recommendedmovies = req.body.recommendedmovies;

    const newRecommended = new Recommended({recommendedmovies});

    newRecommended.save()
    .then( () => res.json('Recommended added!'))
    .catch( err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;