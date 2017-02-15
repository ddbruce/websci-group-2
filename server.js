'use strict';

// Load dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3000;

// Configure database
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/menuoso';
mongoose.connect(mongoUrl);
console.log('Running with mongodb url: ' + mongoUrl);

// Set Angular folder
app.use(express.static(path.join(__dirname, 'app')));

// Parse requests as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Configure routes
app.use(express.static(path.join(__dirname, 'src')));

app.listen(port, () => {
	console.log('Server listening on port ' + port);
});