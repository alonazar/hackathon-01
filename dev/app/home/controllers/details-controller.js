'use strict';

angular.module('app.home').controller('DetailsController', function ($scope, $log, $stateParams, VenueModel) {
    console.log("details-controller: result id=%s",$stateParams.id);
    
    VenueModel.get({id: $stateParams.id}, function(res) {
        $scope.venue = res[0];
    });
    
    /*
    $scope.venue = {
        id: $stateParams.id,
        name: "Foo",
        contactInfo: {
            address: "Zaphod",
            phoneNumber: "Ford",
            email: "Trillian",
            url: "Dent"
        },
        thumbnail: "path/to/image",
        loc: {
            lat: 1,
            lon: 2
        },
        region: "Betelgeuse",
        score: 3.5,
        description: "Mostly harmless"
    }*/
});
