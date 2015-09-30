/**
 * AngularJS Rokk3r Labs Test
 * @author 
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('testAngularWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider
		.when("/carousel", {controller: "carouselCtrl", templateUrl: "../views/carousel.html"})
		.when("/buy", {controller: "buyCtrl", templateUrl: "../views/buy.html"})
		.when("/complete", {controller: "buyCtrl", templateUrl: "../views/buy_complete.html"})
    	.otherwise({redirectTo: "/carousel"});
}])
