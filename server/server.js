'use strict';

// Load dependencies
var express = require('express')
  , http = require('http');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require("./routes/web"); // web routes
const apiRoutes = require("./routes/api"); // api routes
const connection = require("./config/db"); // mongodb connection
var server = http.createServer(app);
var io = require('socket.io').listen(server);


const port = 3000;

// Parse requests as JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set root folder
app.use(express.static(path.join(__dirname, '../src')));

// Set Angular folder
app.use('/angular', express.static(path.join(__dirname, '../src/app')));

// Set node_modules folder
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));

// Configure out routes
app.use("/", routes);
app.use("/api", apiRoutes);

//Socket handlers
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on("login",function(data){
    console.log('Logging in with: '+data);
  });
});

app.listen(port, () => {
	console.log('Menuoso server listening on port ' + port);
});
