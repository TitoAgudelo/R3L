'use strict';

app.directive('header', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/header.html',
	};
});

app.directive('footer', function () {
	return {
		restrict: 'A',
		templateUrl: 'views/footer.html',
	};
});