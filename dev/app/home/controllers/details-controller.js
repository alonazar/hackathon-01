'use strict';

angular.module('app.home').controller('DetailsController', function ($scope, $log, $stateParams, VenueModel) {
    console.log("details-controller: result id=%s",$stateParams.id);
    
    VenueModel.get({id: $stateParams.id}, function(res) {
        $scope.venue = res[1];
        console.log("Got venue with coordinates: %s, %s",$scope.venue.loc.lat, $scope.venue.loc.lon)
});
});
