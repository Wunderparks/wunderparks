const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    parksVisited: {},
  },
  { minimize: false }
);

module.exports = mongoose.model('user', userSchema);
// parksVisited:
// yose: {
//   rating: Number,
//   date: Date,
//   notes: String,
//   activitiesCompleted: Array}
// acad: {
