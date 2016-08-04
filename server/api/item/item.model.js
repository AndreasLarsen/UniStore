'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemSchema = new Schema({
  _id: String,
  name: String,
  seller: String,
  description: String,
  bids: Object,
  image: String,
});

module.exports = mongoose.model('Item', ItemSchema, 'items');