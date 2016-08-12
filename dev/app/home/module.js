'use strict';

angular.module('app.home', [
        'ui.router',
        'ngResource',
        'venueService',
        'ngMap'
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
            })
            .state('app.home.results', {
                url: '/results/:q',
                controller: 'ResultsController',
                views: {
                    "content@app": {
                        controller: 'ResultsController',
                        templateUrl: 'app/home/views/results.html'
                    }
                },
                data:{
                    title: 'Search Results'
                }
            })
            .state('app.home.details', {
                url: '/details/:id',
                controller: 'DetailsController',
                views: {
                    "content@app": {
                        controller: 'DetailsController',
                        templateUrl: 'app/home/views/details.html'
                    }
                },
                data:{
                    title: 'Details'
                }
            });
    });
