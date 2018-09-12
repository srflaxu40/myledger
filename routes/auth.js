var express = require('express');
var db = require('../db')
var router = express.Router();
var mongoose = require('mongoose');
var Auth = require('../models/Auth.js');

var jwt = require('jsonwebtoken');

/* POST and respond with JWT for user session. */
router.post('/jwt', function(req, res, next) {

    var token = jwt.sign({
      name: req.body.w3.id,
      sub: req.body.googleId,
      iss: "Google"
    }, process.env.JWT_SECRET_KEY);

    Auth.create({ name: req.body.w3.id, jwt: token, googleId: req.body.googleId }, function (err) {
      if (err) {
        console.log("Error in creation of Auth collection document: " + err);
      }
    });

    res.json({
      jwt: token
    });
});

module.exports = router;
