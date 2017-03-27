'use strict';

myApp.controller("ListAssignmentsController", [
  "$scope",
  "$http",
  "$route",
  "$routeParams",
  function($scope, $http, $route, $routeParams) {

    $http({
      method: "GET",
      url: "http://localhost:3000/assignments"
    })
    .then(
      function(response) {
        $scope.assignments = response.data;
      },
      function(response) {
        alert("Problem in ListAssignmentsController");
      }
    )
  }
])
