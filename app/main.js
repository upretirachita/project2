//Define an angular module for our app
var myApp = angular.module('myApp', ['ngRoute','EnglishPageModule','FinnishPageModule','ChinesePageModule','AboutPageModule','ContactPageModule','ServicePageModule','TietoameistäPageModule','YhteystiedotPageModule','ChineseContactPageModule','ChineseAboutPageModule']);

// Since 1.6.0 Angular Route has had a hashprefix of "!". This means that EVERY
// routed url address has an additional "!" in them. You can either add these
// to your addresses or change the prefix by configuring the locationProvider. 

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

var myFinnish = angular.module('myFinnish', ['ngRoute','FinnishPageModule','TietoameistäPageModule']);

// Since 1.6.0 Angular Route has had a hashprefix of "!". This means that EVERY
// routed url address has an additional "!" in them. You can either add these
// to your addresses or change the prefix by configuring the locationProvider. 

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


 
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/englishpage', {
        templateUrl: 'views/englishpage.html',
        controller: 'EnglishPageController'
    }).
      when('/finnishpage', {
        templateUrl: 'views/finnishpage.html',
        controller: 'FinnishPageController'
      }).
      when('/chinesepage', {
        templateUrl: 'views/chinesepage.html',
        controller: 'ChinesePageController'
      }).
     
       when('/aboutpage', {
        templateUrl: 'views/aboutpage.html',
        controller: 'AboutPageController'
      }).
      when('/contactpage', {
        templateUrl: 'views/contactpage.html',
        controller: 'ContactPageController'
      }).
      when('/servicepage', {
        templateUrl: 'views/servicepage.html',
        controller: 'ServicePageController'
      }).
      when('/tietoameistäpage', {
        templateUrl: 'views/tietoameistäpage.html',
        controller: 'TietoameistäPageController'
      }).
      when('/yhteystiedotpage', {
        templateUrl: 'views/yhteystiedotpage.html',
        controller: 'YhteystiedotPageController'
      }).
      when('/chinesecontactpage', {
        templateUrl: 'views/chinesecontactpage.html',
        controller: 'ChineseContactPageController'
      }).
      when('/chineseaboutpage', {
        templateUrl: 'views/chineseaboutpage.html',
        controller: 'ChineseAboutPageController'
      }).
      otherwise({
        redirectTo: '/englishpage'
      });
}]);
 myFinnish.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     
      when('/finnishpage', {
        templateUrl: 'views/finnishpage.html',
        controller: 'FinnishPageController'
      }).
     
      when('/tietoameistäpage', {
        templateUrl: 'views/tietoameistäpage.html',
        controller: 'TietoameistäPageController'
      }).
			
      
      otherwise({
        redirectTo: '/englishpage'
      });
}]);


