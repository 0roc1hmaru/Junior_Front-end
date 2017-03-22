app.controller('clockCtrl', ['$scope', 'clockServise', function ($scope, clockServise) {
    clockServise.initLocalClocks();
}]);