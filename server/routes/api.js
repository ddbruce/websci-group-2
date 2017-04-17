const express = require("express");
var router = express.Router();

//routes for database api
router.use("/item", require("../controllers/item.api"));
router.use("/user", require("../controllers/user.api"));
router.use("/section", require("../controllers/section.api"));
router.use("/menu", require("../controllers/menu.api"));

//routes for authentication api
router.use("/authenticate", require("../controllers/authenticate.api"));

//add here other api routes

module.exports = router;