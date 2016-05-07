'use strict';
(function(){

class ThingsComponent {
  
  
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
    
    // $scope.toggleEdit = function(index){
    //   this.awesomeThings[index].edit = !this.awesomeThings[index].edit;
    // };
    
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }
  // showThing(thing) {
  //   console.log(thing._id);
  //   this.$http.show('/api/things/' + thing._id);
  // }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
  
  toggleEdit(thing){
    thing.edit = !thing.edit;
  }

  saveThing(thing) {
    this.$http.put('/api/things/' + thing._id, thing)
    .success(function(){
        thing.edit = false;
      })
      .error(function(err){
        alert('Error! Something went wrong');
      });
  }
}

angular.module('spsoApp')
  .component('things', {
    templateUrl: 'app/things/things.html',
    controller: ThingsComponent
  });

})();
