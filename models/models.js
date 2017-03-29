'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ListItemSchema = new Schema({
  name: String,
  week: Number,
  notes: {type: String, default: ""}
});


var ListItem = mongoose.model("ListItem", ListItemSchema);


ListItem.count({}, function(err, count) {
  if (err) {
    throw err;
  }
  if (count > 0) return ;

  const files = require('./file-seed.json');

  ListItem.create(files, function(err, newFiles) {
    if (err) {
      throw err;
    }
    console.log("DB seeded")
  });
});

module.exports.ListItem = ListItem;
