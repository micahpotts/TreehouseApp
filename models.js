'use strict';

var mongoose = require("mongoose");

var Schema = mongoose. Schema;

//Can this and .pre function below be used to sort by week before sending data?
var sortWeek = function(a,b){
  if(a.week === b.week){
    return b._id - a._id;
  }
  return b.week - a.week;
}

var ModuleSchema = new Schema({
  name: String,
  week: Number,
  notes: {type: String, default: ""}
});

//Can I use this to change week?
ModuleSchema.method("week", function(vote, callback){
  if(week === "up") {
    this.week += 1;
  } else {
    this.votes -= 1;
  }
  this.save(callback);
});

//Can this be used to sort by week before sending data??
ModuleSchema.pre("save", function(next){
  this.week.sort(sortWeek);
});

var Module = mongoose.model("Module", ModuleSchema);

module.exports.Module = Module;
