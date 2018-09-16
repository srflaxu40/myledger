var express = require('express');
var db = require('../db')
var router = express.Router();
var mongoose = require('mongoose');
var Auth = require('../models/Auth.js');

var Cookie = require('../utils.js');

var jwt = require('jsonwebtoken');

/* POST and respond with JWT for user session. */
/* This does not verify JWT since it is setting it and sending it back. */
router.post('/jwt', function(req, res, next) {

    var token = jwt.sign({
      name: req.body.w3.id,
      sub: req.body.googleId,
      iss: "Google"
    }, process.env.JWT_SECRET_KEY);

    console.log(req.body.w3.id);

    Auth.update({ name: req.body.w3.id, jwt: token, googleId: req.body.googleId }, {upsert:true}, function (err) {
      if (err) {
        console.log("Error in creation of Auth collection document: " + err);
      }
    });
  
    res.json({
      jwt: token
    });
});

/* Set jwt cookie for downstream requests to API. */
/* This does not verify JWT since it is setting it and sending it back. */
router.post('/jwt-token', function(req, res, next) {
    console.log(req.method);

    var token = jwt.sign({
      name: req.body.w3.id,
      sub: req.body.googleId,
      iss: "Google"
    }, process.env.JWT_SECRET_KEY);

    res.cookie('jwt', token, { httpOnly: true });
    res.send();

});

/* DELETE cookie and CLEAR jwt token */
router.delete('/jwt-token', function(req, res, next) {
    cookies = Cookie.parseCookies(req);
    //console.log(cookies.jwt);
    result = Cookie.verifyJwt(cookies.jwt);
    console.log(result);
    if ( result ) {
      res.clearCookie("jwt");
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }

});

module.exports = router;
