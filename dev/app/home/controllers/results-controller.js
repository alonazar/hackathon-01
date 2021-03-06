'use strict';

angular.module('app.home').controller('ResultsController', function ($scope, $log, $state, $stateParams, VenueModel) {
    console.log('query param: %s' ,$stateParams.q);
    
    VenueModel.search($stateParams.q).then(function(res) {
        if(res.length == 1) {
            $state.go('app.home.details', {id: res[0].id});
        } else {
            $scope.results = res;
        }
    }, function(error) {
        console.log('ERROR searching venues: %s', error);
    });
        
    $scope.onResultClicked = function(id) {
        console.log("results-controller.onResultClicked(%s)",id);
        $state.go('app.home.details', {id:id});
    }
});