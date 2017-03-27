var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $http({
    method: 'GET',
    url: '/assignments'
  })
  .then(function(response) {
    $scope.assignments = response.data;
  });

})





// var app = angular.module("syllabusApp", [])
//
// app.controller('mainCtrl', function($scope, dataService) {
//
//    dataService.getAssignments(function(response) {
//      console.log(response.data);
//      $scope.assignments = response.data;
//    });
//
//    $scope.deleteAssignment = function(assignment, $index) {
//      dataService.deleteAssignment(assignment);
//      $scope.todos.splice($index, 1);
//    };
//
// });
// app.service('dataService', function($http){
//
//   this.getAssignments = function(callback) {
//     $http.get('/assignments')
//     .then(callback)
//   }
//   this.selectAss = function(assignment) {
//     var currentlySelected = this.selectedAss;
//     this.selectedAss = angular.copy(assignment);
//   }
//   this.weekUp = (assignment) => {
//     $http.post('/assignments/${assignment._id}/weekup', {assignment})
//     .then(response => {
//       return this.getAssignments();
//     })
//   }
//
//   this.deleteAssignment = function(assignment) {
//     $http.delete('/assignments/${assignment._id}')
//     .then(response => {
//       return this.getAssignments();
//     })
//   }
//
//
// });
