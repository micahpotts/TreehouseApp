'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sandbox");

var db = mongoose.connection;

db.on("error", function(err){
  console.error("connection error:", err);
});

db.once("open", function(){
  console.log("db connection successful");
  //all db communication goes here

  var Schema = mongoose.Schema;
  var ModuleSchema = new Schema({
    name: String,
    week: Number,
    notes: {type: String, default: ""}
  });

  var Module = mongoose.model("Module", ModuleSchema);

  var jqueryBasics = new Module({
    name: "jquery basics",
    week: 1
  });

  var syllabusData = [
    {
      name: "JavaScript Basics",
      week: 1
    },
    {
      name: "Object Oriented JavaScript",
      week: 2
    },
    {
      name: "HTTP Basics",
      week: 3
    },
    jqueryBasics
  ]

  Module.remove({}, function(err) {
    if (err) console.error(err);
    Module.create(syllabusData, function(err, modules){
      if (err) console.error(err);
      Module.find({}, function(err, modules) {
        modules.forEach(function(module){
          console.log(module.name + " due on week " + module.week);
        });
        db.close(function(){
          console.log("db connection closed");
        });
      });
    });
  });

});
