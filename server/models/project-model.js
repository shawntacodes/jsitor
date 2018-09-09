const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const projectSchema = new Schema({
  _id: {
    'type': String,
    'default': shortid.generate
  },
  name: String,
  description: String,
  userId: String,
  html: String,
  css: String,
  js: String,
  created: Number,
  modified: Number
});

module.exports = mongoose.model('project', projectSchema);