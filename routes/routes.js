'use strict';

var express = require("express");
var router = express.Router();
var ListItem = require("../models/models").ListItem;

const myctrl = require('../controllers/myctrl');

router.param("assignmentID", myctrl.getAssByParamID);
router.get('/', myctrl.listAll);
router.get('/:assignmentID', myctrl.getAssignment);
router.post('/', myctrl.newAssignment);
router.post('/:assignmentID/weekup', myctrl.weekUp);
router.post('/:assignmentID/weekdown', myctrl.weekDown);
router.delete('/:assignmentID', myctrl.deleteAssignment);


module.exports = router;
