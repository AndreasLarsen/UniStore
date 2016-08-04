'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
  _id: String,
  name: String,
  userId: String
  description: String,
  bids: Object,
  image: String,
});

module.exports = mongoose.model('Item', itemSchema);