var myApp = angular.module('myApp', ['ngRoute']);

myApp.config([
  "$routeProvider",
  function($routeProvider){

    $routeProvider

      .when("/assignments", {
        templateUrl: "angular/templates/thisTemplate.html",
        controller: "ListAssignmentsController"
      })
      .when("/assignments/:assignmentID", {
        templateUrl: "angular/templates/takeNotes.html",
        controller: "editNotesController"
      })
      .when("/assignments/:assignmentID/weekup", {
        templateUrl: "angular/templates/thisTemplate.html",
        controller: "ListAssignmentsController"
      })
      .when("/assignments/:assignmentID/weekdown", {
        templateUrl: "angular/templates/thisTemplate.html",
        controller: "ListAssignmentsController"
      })
      .when("/assignments/:assignmentID/checkOv", {
        templateUrl: "angular/templates/thisTemplate.html",
        controller: "ListAssignmentsController"
      })

      .otherwise("/assignments");


  }


]);
