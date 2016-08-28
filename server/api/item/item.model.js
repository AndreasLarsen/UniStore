'use strict';

import mongoose from 'mongoose';

var ItemSchema = new mongoose.Schema({
  _id: String,
  name: String,
  seller: String,
  description: String,
  bids: Object,
  image: String,
});


export default mongoose.model('Item', ItemSchema, 'items');
