const express = require("express");
var user = require("../models/user.js");
var menu = require("../models/menu.js");
var router = express.Router();
const mongoose = require("mongoose");

router.get("/", function (req, res) {
    user.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data);
    });
}).get("/:id", function (req, res) {
    var id = req.params.id;
    user.find({
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
    var model = new user(obj);
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

    user.findByIdAndUpdate(id, obj,
        function (err) {
            if (err) {
                res.send("error");
                return;
            }
            res.send("updated");
        });
}).delete("/", function (req, res) {
    user.remove({}, function (err) {
        if (err) {
            res.send(error);
            return;
        }
        res.send("deleted all");
    });
}).delete("/:id", function (req, res) {
    var id = req.params.id;
    user.findByIdAndRemove(id, function (err) {
        if (err) {
            res.send("error");
            return;
        }
        res.send("deleted");
    });
}).get("/user-menus/:id", function (req, res) {
  var id = req.params.id;
  var _user = user.findOne({
    _id: id
  }, function (err) {
    if (err) {
        res.send("error");
        return;
    }
  })
    .lean();

  _user.exec(function (err, docs) {
    var menuIds = docs.menus.map(function (menuId) {
      return mongoose.Types.ObjectId(menuId);
    });

    var menus = menu.find({
      _id: {
        "$in": menuIds
      }
    }, function (err) {
      if (err) {
          res.send("error");
          return;
      }
    })
      .lean();

    menus.exec(function (err, docs) {
      res.send(docs);
    });
  });
});

module.exports = router;
