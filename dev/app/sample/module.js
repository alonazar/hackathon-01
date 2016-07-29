'use strict';

angular.module('app.sample', [
        'ui.router',
        'ngResource'
    ]);

angular.module('app.sample').config(function ($stateProvider) {
    
        $stateProvider
            .state('app.sample', {
                abstract: true,
                data: {
                    title: 'Sample Module'
                }
            })
            .state('app.sample.show', {
                url: '/sample/show',
                controller: 'SampleShowController',
                views: {
                    "content@app": {
                        controller: 'SampleShowController',
                        templateUrl: 'app/sample/views/show.html',
                        resolve: {
                        }
                    }
                },
                data:{
                    title: 'Show'
                }
            });
    });
