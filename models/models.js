'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ListItemSchema = new Schema({
  name: String,
  week: Number,
  notes: {type: String, default: ""}
});


var ListItem = mongoose.model("ListItem", ListItemSchema);

module.exports.ListItem = ListItem;
