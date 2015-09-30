app.controller('carouselCtrl', ['$scope', 'dataService',
    function ($scope, dataService) {   
        dataService.getCarousel()
            .then(function (items) {
                var items = items.data.slides;
                $scope.corousel = items;
            })
            .catch(function (error) {

            });
    }
]);

app.controller('buyCtrl', ['$scope', 'dataService',
    function ($scope, dataService) { 

        $scope.calculate = function (items) {
            var resume = 0;
            for (var i = 0; i < items.length; i++) {
                resume = resume + parseInt(items[i].price, 10);
            }
            $scope.total = resume;
        };

        dataService.getBuytable()
            .then(function (items) {
                var itemsCon = items.data.buyTable;
                $scope.items = itemsCon;
                $scope.calculate(itemsCon);
            })
            .catch(function (error) {

            });

        $scope.remove =  function (idx) {
            $scope.items.splice(idx, 1);
            $scope.calculate($scope.items);
        };
    }
]);