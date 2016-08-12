'use strict';

angular.module('app.home').controller('SearchFormController', function ($scope, $log, $state) {
    console.log($scope.searchTerm);
    $scope.submit = function() {
        console.log($scope.searchTerm);
        if ($scope.searchTerm) {
            $state.go('app.home.results', {q: $scope.searchTerm});
            $scope.searchTerm = '';
        }
      };
});
