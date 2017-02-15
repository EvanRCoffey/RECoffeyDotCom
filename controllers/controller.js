var express = require('express');
var path = require("path");
var router = express.Router();
var model = require('../models/model.js');

//Home
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

//Bio
router.get("/bio", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/bio.html"));
});

//Contact
router.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/contact.html"));
});

//Portfolio
router.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/portfolio.html"));
});

// If no matching route is found default to home
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

// Export routes for server.js to use.
module.exports = router;
