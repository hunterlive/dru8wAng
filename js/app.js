var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .when('/contact', {
      templateUrl: "views/contact.html"
    })
    .when('/about', {
      templateUrl: "views/about.html"
    })
    .otherwise({
      redirectTo: '/'
    });
});
