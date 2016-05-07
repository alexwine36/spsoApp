'use strict';

import mongoose from 'mongoose';

var ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  active: Boolean,
  attributes: [{
      size: String,
      inventory: Number
    }]
});

function getPrice(num){
  var p = (num/100).toFixed(2);
    console.log(p);
    return p;
}

function setPrice(num){
    var p = num*100;
    console.log(p);
    return p;
}

export default mongoose.model('Product', ProductSchema);
