const router = require('express').Router();
let Search = require('../models/SearchModel');

router.route('/').get( (req, res) => {
    Search.find()
    .then(searchs => res.json(searchs))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post( (req, res) => {
    const searchresult = req.body.searchresult;

    const newSearch = new Search({searchresult});

    newSearch.save()
    .then( () => res.json('Search added!'))
    .catch( err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;