"use strict";

angular.module('app.layout', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('app', {
            //url: '/app',
            abstract: true,
            views: {
                root: {
                    templateUrl: 'app/layout/layout.tpl.html'
                }
            }
        });
        
    $urlRouterProvider.otherwise('/home');

});

