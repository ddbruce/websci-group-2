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

// Set root folder
app.use(express.static(path.join(__dirname, 'src')));

// Set Angular folder
app.use('/angular', express.static(path.join(__dirname, 'src/app')));

// Set node_modules folder
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Parse requests as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
	console.log('Menuoso server listening on port ' + port);
});
