'use strict';

var express = require("express");
var router = express.Router();

//GET /assignmentList
//Route for assignment list collection
router.get("/", function(req, res){
  res.json({response: "You sent me a GET request"});
});

//POST /assignmentList
//Route for creating assignment
router.post("/", function(req,res){
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

//GET /assignmentList/:id
//Route for specific questions
router.get("/:assignmentID", function(req, res){
  res.json({
    response: "You send me a GET request for ID " + req.params.assignmentID
  });
});

//POST /assignmentList/:assignmentID/week
//Route for creating week
router.post("/:assignmentID/week", function(req, res){
  res.json({
    response: "You sent me a POST request to /week",
    weekID: req.params.assignmentID,
    body: req.body
  });
});

//PUT /assignmentList/:assignmentID/week/:weekID
//Edit the week
router.put("/:assignmentID/week/:weekID", function(req, res){
  res.json({
    response: "You sent me a PUT request to /week",
    assignmentID: req.params.assignmentID,
    weekID: req.params.weekID,
    body: req.body
  });
});

//DELETE /assignmentList/:assignmentID/
//DELETE assignment
router.delete("/:assignmentID", function(req, res){
  res.json({
    response: "You sent me a DELETE request to /assignmentList",
    assignmentID: req.params.assignmentID,
    weekID: req.params.weekID
  });
});

//POST /assignmentList/:assignmentID/week/:weekID/move-up
//POST /assignmentList/:assignmentID/week/:weekID/move-down
//Move assignment to different week
router.post("/:assignmentID/week/:weekID/move-:dir", function(req, res, next){
  if(req.params.dir.search(/^(up|down)$/) === -1) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
}, function(req,res){
  res.json({
    response: "You sent me POST request to /move-" + req.params.dir,
    assignmentID: req.params.assignmentID,
    weekID: req.params.weekID,
    move: req.params.dir
  });
});

module.exports = router;
