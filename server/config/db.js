const mongoose = require('mongoose');

// Configure database
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/menuoso';
var connection = mongoose.connect(mongoUrl);

module.exports = connection;