'use strict';

var express = require("express");
var router = express.Router();
var ListItem = require("./models").ListItem;

//reusable code to find item by id
router.param("assignmentID", function(req, res, next, id){
  ListItem.findById(id, function(err, doc){
    if(err) return next(err);
    if(!doc) {
      err = new Error("Not Found");
      err.status = 404;
      return next(err);
    }
    req.item = doc; //Is "listItem" the right variable to use here??
    return next();
  });
});

//DO I NEED THIS??
//assign and grab week by sub id so it can be used in a POST below
// router.param("weekID", function(req, res, next, id){
//   req.week = req.listItem.week.id(id);
//   if(!req.week) {
//     err = new Error("Not Found");
//     err.status = 404;
//     return next(err);
//   }
//   next();
// });

//GET /assignmentList
//Route for assignment list collection
router.get("/", function(req, res, next){
  ListItem.find({})
          .sort({week: -1})
          .exec(function(err, listItems){
            if(err) return next(err);
            res.json(listItems);
          });
});

//POST /assignmentList
//Route for creating assignment
router.post("/", function(req, res, next){
  var listItem = new ListItem(req.body);
  listItem.save(function(err, listItem){
    if(err) return next(err);
    res.status(201);
    res.json(listItem);
  });
});

//GET /assignmentList/:id
//Route for specific assignment
router.get("/:assignmentID", function(req, res, next){
  res.json(req.item); //Is "listItem" the correct var to use???
});

//POST /assignmentList/:assignmentID/week
//Route for creating week
router.post("/:assignmentID/week", function(req, res, next){
  req.listItem.week.push(req.body);
  req.listItem.save(function(err, listItem){
    if(err) return next(err);
    res.status(201);
    res.json(listItem);
  });
});
// router.post("/:assignmentID/week", function(req, res, next){
//   req.listItem.week.push(req.body);
//   req.listItem.save(function(err, listItem){
//     if(err) return next(err);
//     res.status(201);
//     res.json(listItem);
//   });
// });

//PUT /assignmentList/:assignmentID
//Edit the entry
router.put("/:assignmentID", function(req, res){
  var id = req.params.id;
  var assignmentEdit = req.body;
  item.findByIdAndUpdate(id, assignmentEdit, function(err, assignmentEdit) {
    if(err) {
      return next(err);
    }
    res.json(result);
  });
});
//   req.item.update(req.body, function(err, result){
//     if(err) return next(err);
//     res.json(result);
//   });
// });

//DELETE /assignmentList/:assignmentID/
//DELETE assignment
router.delete("/:assignmentID", function(req, res){
  req.item.remove(function(err){
    // if(err) return next(err);
    // res.json(item);
    res.send("Assignment removed");
  });
});

//POST /assignmentList/:assignmentID/week/:weekID/move-up
//POST /assignmentList/:assignmentID/week/:weekID/move-down
//Move assignment to different week
router.post("/:assignmentID/:week/reassign-:dir",
  function(req, res, next){
    if(req.params.dir.search(/^(up|down)$/) === -1) {
      var err = new Error("Not Found");
      err.status = 404;
      next(err);
    } else {
      req.reassign = req.params.dir;
      next();
    }
  },
  function(req,res,next){
    req.listItem.reassign(req.reassign, function(err, listItem){
      if(err) return next(err);
      res.json(listItem);
    });
});

router.post("/:assignmentID/:week", function(req, res, next){
  req.listItem
})



module.exports = router;
