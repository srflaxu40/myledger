'use strict'

const Tracer = require('@risingstack/jaeger')
const tracer = new Tracer({
  serviceName: 'myledger'
});
console.log("HERE WE GO");

var Cookies = require('./utils.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: __dirname + '/.env'});
}

var db = require('./db')

// Connect to Mongo on start
db.connect('mongodb://' + process.env.MONGO_SERVER + ':27017/myledger', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  }
})

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Get routes
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/auth/', authRouter);

// Verify Jwt first or log them out:
/*app.use(function(req, res, next) {
   var result = Cookies.verifyJwt(req.cookies.jwt);
   result = false;
   if ( !result ) {
      console.log("here is result");
      console.log(result);
   } else {
      console.log(result);
   }
});*/

app.use('/', indexRouter);
app.use('/auth/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
