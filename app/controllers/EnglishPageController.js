angular.module('EnglishPageModule',[])
.controller('EnglishPageController', function($scope) {
     
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
/*
angular.module('FrontPageModule',[]).controller('FrontPageController', function($scope) {
     
    $scope.message = 'Welcome to My Corporation';
     
});
angular.module('FrontPageModule',[]).controller('FrontPageController', function($scope) {
     
    $scope.message = 'Welcome ';
     
});
*/
