'use strict';

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// //Can this and .pre function below be used to sort by week before sending data?
// var sortWeek = function(a,b){
//   if(a.week === b.week){
//     return b._id - a._id;
//   }
//   return b.week - a.week;
// }

var ListItemSchema = new Schema({
  name: String,
  week: Number,
  notes: {type: String, default: ""}
});

//Can I use this to change week?
// ListItemSchema.method("week", function(week, callback){
//   if(week === "up") {
//     this.weeks += 1;
//   } if(week === "down") {
//     this.weeks -= 1;
//   }
//   this.save(callback);
// });

//Can this be used to sort by week before sending data??
// ListItemSchema.pre("save", function(next){
//   this.week.sort(sortWeek);
// });

var ListItem = mongoose.model("ListItem", ListItemSchema);

module.exports.ListItem = ListItem;
