'use strict';

angular.module('app.home').controller('ResultsController', function ($scope, $log, $state, VenueModel) {
    
    VenueModel.query({q: 'foo'}, function(res) {
        $scope.results = res;
    });
        
    $scope.onResultClicked = function(id) {
        console.log("results-controller.onResultClicked(%s)",id);
        $state.go('app.home.details', {id:id});
    }
});