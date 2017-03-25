var app = angular.module("syllabusApp", [])

app.controller('mainCtrl', function($scope, dataService) {
  $scope.wtf = function(){
    console.log("wtf");
  };
   dataService.getAssignments(function(response) {
     console.log(response.data);
     $scope.assignments = response.data;
   });

   this.getAssignments = function(callback) {
     $http.get('/assignments')
     .then(callback)
   }

   this.selectAss = function(assignment) {
     var currentlySelected = this.selectedAss;
     this.selectedAss = angular.copy(assignment);

   }
   this.weekUp = function(callback) {
     $http.post('/${assignment._id}/weekup')
     .then(callback)
   }

});
app.service('dataService', function($http){

  this.getAssignments = function(callback) {
    $http.get('/assignments')
    .then(callback)
  }


});
