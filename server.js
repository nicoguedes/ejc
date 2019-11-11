const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
var cors = require('cors');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Health check OK!" });
});

require('./app/routes/person.routes.js')(app);

const apiPort = process.env.PORT || 9090;

process.env.JWT_KEY = "C7_b9sfAF&4rC6PScb4RBBQA_ZD%Kb64m-U2NH#?fb7LJ@7GTY87rPsh#^gUMpaw";

// listen for requests
var server = app.listen(apiPort, () => {
    console.log(`Server is listening on port ${server.address().port}`);
});