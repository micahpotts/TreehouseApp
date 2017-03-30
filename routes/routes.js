'use strict';

var express = require("express");
var router = express.Router();
var ListItem = require("../models/models").ListItem;

const myctrl = require('../controllers/myctrl');

router.param("assignmentID", myctrl.getAssByParamID);
router.get('/', myctrl.listAll);
router.get('/:assignmentID', myctrl.getAssignment);
router.post('/', myctrl.newAssignment);
router.put('/:assignmentID/weekup', myctrl.weekUp);
router.put('/:assignmentID/weekdown', myctrl.weekDown);
router.delete('/:assignmentID', myctrl.deleteAssignment);
router.put('/:assignmentID', myctrl.notes);
router.post('/:assignmentID/complete', myctrl.complete);


module.exports = router;
