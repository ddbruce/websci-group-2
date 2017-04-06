const express = require("express");
var section = require("../models/section.js");
var router = express.Router();

router.get("/", function (req, res) {
    section.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function (req, res) {
    var id = req.params.id;
    section.find({
        _id: id
    }, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data[0]);
    });
}).post("/", function (req, res) {
    var obj = req.body;
    var model = new section(obj);
    model.save(function (err) {
        if (err) {
            res.send(err);
            return;
        }
        res.send("created");
    });
}).put("/:id", function (req, res) {
    var id = req.params.id;
    var obj = req.body;

    section.findByIdAndUpdate(id, obj,
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/", function (req, res) {
    section.remove({}, function (err) {
        if (err) {
            res.send(error);
            return;
        }
        res.send("deleted all");
    });
}).delete("/:id", function (req, res) {
    var id = req.params.id;
    section.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
});

module.exports = router;