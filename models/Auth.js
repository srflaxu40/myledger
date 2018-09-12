// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var authSchema = new Schema({
  name: String,
  jwt: { type: String, required: true, unique: true },
  googleId: { type: String, required: true, unique: true }
});

// the schema is useless so far
// we need to create a model using it
var Auth = mongoose.model('Auth', authSchema);

// make this available to our users in our Node applications
module.exports = Auth;
