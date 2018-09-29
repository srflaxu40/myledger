var express = require('express');
var router = express.Router();

const pool = require('../db');

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

/*    Auth.update({ name: req.body.w3.id, jwt: token, googleId: req.body.googleId }, {upsert:true}, function (err) {
      if (err) {
        console.log("Error in creation of Auth collection document: " + err);
      }
    });
*/
pool.connect()
  .then(client => {
    return client.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';")
      .then(res => {
        client.release()
        console.log(res)
      })
      .catch(e => {
        client.release()
        console.log(err.stack)
      })
  })


    res.json({
      jwt: token
    });
});

/* Set jwt cookie for downstream requests to API. */
/* This does not verify JWT since it is setting it and sending it back. */
router.post('/jwt-token', function(req, res, next) {
    var token = jwt.sign({
      name: req.body.w3.id,
      sub: req.body.googleId,
      iss: "Google"
    }, process.env.JWT_SECRET_KEY);

    res.cookie('jwt', token, { httpOnly: true });
    res.send();

});

/* DELETE cookie and CLEAR jwt token on logout */
router.delete('/jwt-token', function(req, res, next) {
    //cookies = Cookie.parseCookies(req);
    console.log(req.cookies.jwt);
    if ( req.cookies.jwt == undefined ) {
        //Cookie.deleteAllCookies(req);
        res.sendStatus(200);
    } else {
      result = Cookie.verifyJwt(req.cookies.jwt);
    
      if ( result ) {
        //Cookie.deleteAllCookies(req);
        res.clearCookie("jwt");
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    }
});

/* RETRIEVE jwt token */
router.get('/loggedin', function(req, res, next) {
    console.log(req.cookies); 
    res.json({jwt: req.cookies.jwt});
});

module.exports = router;
