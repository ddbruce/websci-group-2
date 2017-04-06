'use strict';

// Load dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require("./routes/web"); // web routes
const apiRoutes = require("./routes/api"); // api routes
const connection = require("./config/db"); // mongodb connection

const port = 3000;

// Parse requests as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set root folder
app.use(express.static(path.join(__dirname, 'src')));

// Set Angular folder
app.use('/angular', express.static(path.join(__dirname, 'src/app')));

// Set node_modules folder
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Configure out routes
app.use("/", routes);
app.use("/api", apiRoutes);

app.listen(port, () => {
	console.log('Menuoso server listening on port ' + port);
});
