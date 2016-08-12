(function() {
    "use strict";
    
    angular.module('venueService', []);
    
    angular.module('venueService').service('VenueModel', function($http, $q) {
        var service = this,
        path = '/data/json/venues.json';
        function getUrl() {
            return path;
        }
        service.search  = function (query) {
            var defer   = $q.defer();
            var svc     = $http.get(getUrl());
            var words   = query.split(' ');
            var matches = [];
            console.log(words);
            svc.success(function(results) {
                results.forEach(function(entry) {
                    if (words.some(function(item){return (new RegExp(item, 'i')).test(entry.name);}) ) {
                        matches.push(entry);
                    }
                });
                defer.resolve(matches);
            });
            
            return defer.promise;
        };
        service.fetch   = function (id) {
            var defer   = $q.defer();
            var svc     = $http.get(getUrl());
            
            svc.success(function(results) {
                var match = null;
                results.forEach(function(entry) {
                    if(entry.id == id) {
                        match = entry;
                        return true;
                    }
                });
                
                if(match) defer.resolve(match);
                else      defer.reject();     
            });
            
            return defer.promise;
        };
    });
})();
