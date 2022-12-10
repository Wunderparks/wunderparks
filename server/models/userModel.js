const mongoose = require('mongoose');
const Schema = mognoose.Schema;

const userSchema = new Schema({
  name: String,
  parksCompleted: [String],
});

module.exports = mongoose.model('user', userSchema);
