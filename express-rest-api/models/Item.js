const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const itemsSchema = new Schema({

  itemName: {
    type: String,
    required: true,
  },
  power: {
    type: Number,
    required: true,

  },
  price: {
    type: Number,
    required: true,

  },
  type: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  author: {
    type: ObjectId,
    ref: "Champion"
  },
  

}, { timestamps: true });

module.exports = new Model('Item', itemsSchema);