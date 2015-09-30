// 'use strict';

// app.services('carousel', function ($http) {
	
// 	function load (path) {
// 		return $http.jsonp("http://127.0.0.1:8080" + path);
// 	}

// 	return {
// 		carousel: function () {
// 			return load("/api/carousel.json")
// 		},

// 		comments: function (id, params) {
// 			return load("/api/buytable.json")
// 		}
// 	}
// })


'use strict';

/* Services */

app.service('dataService', ['$http', function ($http) {
    var dataService = {};

    dataService.getCarousel = function () {
        return $http.get('/api/carousel.json');
    };

    dataService.getBuytable = function () {
        return $http.get('/api/buytable.json');
    };

    return dataService;
}]);
