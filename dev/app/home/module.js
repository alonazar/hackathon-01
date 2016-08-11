'use strict';

angular.module('app.home', [
        'ui.router',
        'ngResource'
    ]);

angular.module('app.home').config(function ($stateProvider) {
    
        $stateProvider
            .state('app.home', {
                url: '/home',
                controller: 'HomeController',
                views: {
                    "content@app": {
                        controller: 'HomeController',
                        templateUrl: 'app/home/views/home.html'
                    }
                },
                data:{
                    title: 'Home'
                }
            })
            .state('app.home.searching', {
                views: {
                    "content@app": {
                        controller: 'SearchingController',
                        templateUrl: 'app/home/views/searching.html'
                    }
                },
                data:{
                    title: 'Searching'
                }
            });
    });
