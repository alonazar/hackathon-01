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
        })
        .state('app.test', {
            url: '/test',
            //templateUrl: 'app/test.html'
           //abstract: true,
           
            views: {
                'content@app': {
                    templateUrl: 'app/test.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/test');

})

