//var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');

var state = {
  db: null,
}

exports.connect = function(url, done) {
  if (state.db) return done()

  mongoose.connect(url);
 
  var db = mongoose.connection;

  db.on('error', function(err){
    console.log('connection error', err);
    return done(err)
  });
 
  db.once('open', function(){
    console.log('Connection to DB successful');
    state.db = db
    done()
  });
}

exports.get = function() {
  return state.db
}

exports.close = function(done) {
  if (state.db) {
    state.db.close()
    done()
  }
}
