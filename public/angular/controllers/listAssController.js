'use strict';

myApp.controller("ListAssignmentsController", [
  "$scope",
  "$http",
  "$route",
  "$routeParams",
  function($scope, $http, $route, $routeParams) {

    $http({
      method: "GET",
      url: `http://localhost:3000/assignments`
    })
    .then(
      function(response) {
        $scope.assignments = response.data;
      },
      function(response) {
        alert("Problem in ListAssignmentsController");
      }
    );

    $scope.deleteAss = function(id) {
      $http({
        method: "DELETE",
        url: `http://localhost:3000/assignments/${id}`
      })
        .then(
          function(response) {
            $scope.sata = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.dats = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

    $scope.upAss = function(id) {
      $http({
        method: "PUT",
        url: `http://localhost:3000/assignments/${id}/weekup`
      })
        .then(
          function(response) {
            $scope.sata = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.dats = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

    $scope.downAss = function(id) {
      $http({
        method: "PUT",
        url: `http://localhost:3000/assignments/${id}/weekdown`
      })
        .then(
          function(response) {
            $scope.sata = response.data;
            $scope.status = response.status;
            $route.reload();
          },
          function(response) {
            $scope.dats = response.data || "Request failed";
            $scope.status = response.status;
          }
        );
    };

    $scope.newAss = function() {
      var newAssCity = {
        name: $scope.newName,
        week: $scope.newWeek
      };

      $http({
        method: "POST",
        url: `http://localhost:3000/assignments`,
        data: newAssCity
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
