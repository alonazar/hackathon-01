(function() {
    "use strict";
    
    var venueService = angular.module('venueService', ['ngResource']);
        
    venueService.factory('VenueModel', 
        function ($resource, $location) {
            var url = '/data/json/venues.json';
            return $resource(url,
                { q: '@q', id: '@id' },
                { 
                    get: { method: "GET", isArray:true }, 
                    query: {
                        method: 'GET',
                        isArray: true,
                        transformResponse: function(data, header) {
                            var q = $location.search();
                            console.log(q);
                          return angular.fromJson(data);
                        }
                    }
                }
            );
        });
    
})();
