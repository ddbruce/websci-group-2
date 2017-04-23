const express = require("express");
const path = require("path");
var router = express.Router();

var absPath = path.join(__dirname, "../../src");

//route to handle home page
router.get("/", function(req, res, next) {
    res.sendFile(absPath + "/index.html");
}).use((req, res, next) => {
  // Catch 404s
  res.status = 404;

  // respond with html page
  if (req.accepts('html')) {
      res.sendFile(absPath + "/404.html");
      return;
  }

  // respond with json
  if (req.accepts('json')) {
      res.send({
          error: 'Not found'
      });
      return;
  }

  res.type('txt').send('Not found');
});;

module.exports = router;
