angular.module("assignmentList").component("assignmentList",{

  controller: function AssignmentListController($http){
    var self = this;




    this.selectAssignment = (assignment) => {
      // get the currently selected file and set the `selected`
      // property to false
      const currentlySelected = this.selectedAss;
      this.selectedAss = null;

      // Mark the passed file as selected
      if (!currentlySelected || currentlySelected._id !== assignment._id) {
        this.selectedAss = angular.copy(assignment);
      }
    }

    this.getAssignments = () => {
      return $http.get("/assignments").then(function(response){
        return self.assignments=response.data;
      });
    }
    this.getAssignments();

    this.updateAssignment = (assignment) => {
      $http.put(`/assignments/${assignment._id}`, {assignment})
        .then(response => {
          console.log("Successfully updated file");
          return this.getAssignments();
        })
        .catch(err => {
          console.log("Oops...there was an error", err);
        })
    }



    this.deleteAssignment = (assignment) => {
      $http.delete(`/assignments/${assignment._id}`)
        .then(response => {
          console.log("Successfully deleted file");
          this.selectedAss = null;
          return this.getAssignments();
        })
        .catch(err => {
          console.log("Drat...there was an error", err);
        })
    }

  }
});
