'use strict';

myApp.controller("ListAssignmentsController", [
  "$scope",
  "$http",
  "$route",
  "$routeParams",
  "$location",
  function($scope, $http, $route, $routeParams, $location) {

    $http({
      method: "GET",
      url: `/assignments`
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
        url: `/assignments/${id}`
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

    $scope.upAss = function(id) {
      $http({
        method: "PUT",
        url: `/assignments/${id}/weekup`
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

    $scope.downAss = function(id) {
      $http({
        method: "PUT",
        url: `/assignments/${id}/weekdown`
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

    $scope.newAss = function() {
      var newAssCity = {
        name: $scope.newName,
        week: $scope.newWeek
      };

      $http({
        method: "POST",
        url: `/assignments`,
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

    $scope.go = function(){
      $location.path("/home");
    }

  }
]);
