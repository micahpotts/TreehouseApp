'use strict';

var express = require("express");
var router = express.Router();
var ListItem = require("../models/models").ListItem;

module.exports = {

  //reusable code to find item by id
  getAssByParamID: function(req, res, next, id){
    ListItem.findById(id, function(err, doc){
      if(err) return next(err);
      if(!doc) {
        err = new Error("Not Found");
        err.status = 404;
        return next(err);
      }
      req.item = doc;
      return next();
    });
  },

  //GET /assignmentList
  //Route for assignment list collection
  listAll: function(req, res, next){
    ListItem.find({})
            .sort({week: -1})
            .exec(function(err, listItems){
              if(err) return next(err);
              res.json(listItems);
            });
  },

  //GET /assignmentList/:id
  //Route for specific assignment
  getAssignment: function(req, res, next){
    res.json(req.item);
  },

  //POST /assignmentList
  //Route for creating assignment
  newAssignment: function(req, res, next){
    var listItem = new ListItem(req.body);
    listItem.save(function(err, listItem){
      if(err) return next(err);
      res.status(201);
      res.json(listItem);
    });
  },

  weekUp: function(req, res){
    if(req.item.week < 12) {
      req.item.week++;
      req.item.save();
      res.json(req.item);
    } else {
      return req.item.week;
    }
  },

  weekDown: function(req, res){
    if(req.item.week > 0) {
    req.item.week--;
    req.item.save();
    res.json(req.item);
  } else {
    return req.item.week;
  }
  },

  //DELETE /assignmentList/:assignmentID/
  //DELETE assignment
  deleteAssignment: function(req, res){
    req.item.remove(function(err){
      // if(err) return next(err);
      // res.json(item);
      res.send("Assignment removed");
    });
  },

}









//PUT /assignmentList/:assignmentID
//Edit the entry
// router.put("/:assignmentID", function(req, res){
//   var id = req.params.id;
//   req.item.week++
//   req.item.save()
//   var assignmentEdit = req.body;
//   item.findByIdAndUpdate(id, assignmentEdit, function(err, assignmentEdit) {
//     if(err) {
//       return next(err);
//     }
//     res.json(result);
//   });
// });
//   req.item.update(req.body, function(err, result){
//     if(err) return next(err);
//     res.json(result);
//   });
// });
