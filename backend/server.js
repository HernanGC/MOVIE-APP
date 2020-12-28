//imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//express server
const app = express();
const port = process.env.PORT || 5000;


//express middleware
app.use(cors());
app.use(express.json());


//database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfullyX');
});


//TODO: MODIFICAR ESTO
//routing the backend
const searchRouter = require('./routes/search');
const favouritesRouter = require('./routes/favourites');
const recommendedRouter = require('./routes/recommended');
const mightLikeRouter = require('./routes/mightLike');

app.use('/api/search', searchRouter);
app.use('/api/favourites', favouritesRouter);
app.use('/api/recommended', recommendedRouter);
app.use('/api/mightlike', mightLikeRouter);


//server start
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});