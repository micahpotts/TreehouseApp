'use strict';

myApp.controller("editNotesController", [
  "$scope",
  "$http",
  "$route",
  "$routeParams",
  "$location",
  function($scope, $http, $route, $routeParams, $location) {

    $http({
      method: "GET",
      url: `assignments/${$routeParams.assignmentID}`
    })
    .then(
      function(response) {
        $scope.assignment = response.data;
      },
      function(response) {
        alert("Problem in editNotesController");
      }
    );

    $scope.takeNotes = function(id) {
      var someNotes = {
        notes: $scope.moduleNotes
      };

      $http({
        method: "PUT",
        url: `/assignments/${$routeParams.assignmentID}`,
        data: someNotes
      })
        .then(
          function(response) {
            $scope.data = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

  }
]);
