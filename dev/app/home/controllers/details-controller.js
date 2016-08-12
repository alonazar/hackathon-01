'use strict';

angular.module('app.home').controller('DetailsController', function ($scope, $log, $stateParams, VenueModel) {
    console.log("details-controller: result id=%s",$stateParams.id);
    
    VenueModel.fetch($stateParams.id).then(function(res) {
        console.log(res);
        $scope.venue = res;
    });
});
