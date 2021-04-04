const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const championSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,

  },
  gold: {
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
    ref: "User"
  },
  items: [{ type: ObjectId, ref: "Item" }]


}, { timestamps: true });

module.exports = new Model('Champion', championSchema);