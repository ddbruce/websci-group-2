const express = require("express");
var user = require("../models/user.js")
var router = express.Router();

router.get("/", function(req, res) {
    // Get parameters from the post request
    var params = req.body;

    // Find if any user matches the login credentials
    users.find({
        username: params.username,
        password: params.password
    }, function (err, data) {
        if (err) {
            res.send(400);
            return;
        }
        res.send(200, {
            id:data.id,
            username: data.username,
        });
    });
});