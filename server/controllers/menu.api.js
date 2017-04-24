const express = require("express");
const mongoose = require("mongoose");
var menu = require("../models/menu.js");
var section = require("../models/section.js");
var router = express.Router();

router.get("/", function (req, res) {
    menu.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function (req, res) {
    var id = req.params.id;
    menu.find({
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
    var model = new menu(obj);
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

    menu.findByIdAndUpdate(id, obj,
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/", function (req, res) {
    menu.remove({}, function (err) {
        if (err) {
            res.send(error);
            return;
        }
        res.send("deleted all");
    });
}).delete("/:id", function (req, res) {
    var id = req.params.id;
    menu.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
}).get("/menu-sections/:id", function (req, res) {
  var id = req.params.id;
  var _menu = menu.findOne({
    _id: id
  }, function (err) {
    if (err) {
        res.send("error");
        return;
    }
  })
    .lean();

  _menu.exec(function (err, docs) {
    var sectionIds = docs.sections.map(function (sectionId) {
      return mongoose.Types.ObjectId(sectionId);
    });

    var sections = section.find({
      _id: {
        "$in": sectionIds
      }
    }, function (err) {
      if (err) {
          res.send("error");
          return;
      }
    })
      .lean();

    sections.exec(function (err, docs) {
      res.send(docs);
    });
  });
});

module.exports = router;
