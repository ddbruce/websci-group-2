const express = require("express");
var user = require("../models/user.js")
var router = express.Router();

router.post("/", function (req, res) {
    // Get parameters from the post request
    var params = req.body;
    // Find if any user matches the login credentials
    user.find({
        username: params.username,
        password: params.password
    }, function (err, data) {
        if (err) {
            res.send(400);
            return;
        }
        if (data.length) {
            res.status(200).send({
                id: data[0].id,
                username: data[0].username,
            });
        } else {
            res.send(400);
        }
    });
});

module.exports = router;