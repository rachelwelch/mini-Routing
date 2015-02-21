var app = angular.module('miniRouting', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/js/home/homeTmpl.html',
      controller: 'HomeCtrl'
    })
    .when('/products/:id', {
      templateUrl: '/js/products/productTmpl.html',
      controller: 'ProductsCtrl'
    })
    .when('/settings', {
      templateUrl: '/js/settings/settingsTmpl.html',
      controller: 'SettingsCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
});