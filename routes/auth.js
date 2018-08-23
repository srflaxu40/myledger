var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET user. */
router.get('/', function(req, res, next) {

  console.log("testes");
  //res.render(user);

});

module.exports = router;
