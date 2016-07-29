"use strict";

angular.module('app.sample').directive('appSample', function (SampleModel, $log, $timeout) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/sample/directives/sample.tpl.html',
        scope: {
            events: "=events"
        },
        link: function (scope, element) {

        }
    }
});