angular.module('ServicePageModule',[])
.controller('ServicePageController', function($scope) {
     
})
.controller('FirstChildController', function($scope) {
     
    $scope.message = 'Welcome to My Corporation';
     
})
.controller('SecondChildController', function($scope) {
     
    $scope.message = 'Welcome ';
     
})
.controller('ThirdChildController', function($scope) {
     
    $scope.message = 'Welcome ';
     
});
