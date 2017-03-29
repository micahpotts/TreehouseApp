'use strict';

var express = require("express");
var app = express();
var routes = require("./routes/routes");
var path = require("path");

var jsonParser = require("body-parser").json;
var logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

//serve static files from /public
app.use(express.static(__dirname + '/public'));

//serve files from node_modules
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));

//view engine setup
// app.set('view engine', 'pug');
// app.set('views', __dirname + '/views')

var mongoose = require("mongoose");
//connect to db
mongoose.connect("mongodb://localhost:27017/codeLou");

var db = mongoose.connection;

db.on("error", function(err){
  console.error("connection error:", err);
});

db.once("open", function(){
  console.log("db connection successful");
  //all db communication goes here
});

app.use("/assignments", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler

app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server is listening on port", port);
});
