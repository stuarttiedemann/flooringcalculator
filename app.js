(function() {
'use strict';

angular.module('myApp', ['ngRoute'])
  
  .config(function($routeProvider){
    $routeProvider.
      when('/', {
        templateUrl: 'templates/signin.html',
        controller:'signinCtrl'
        controllerAs:'vm'
      }).
      when('/signup',{
        templateUrl:'templates/signup.html',
        controller:'signupCtrl',
        controllerAs:'vm'
      }).
      when('/calculator', {
        templateUrl:'templates/calculator.html',
        controller:'calulatorCtrl',
        controllerAs:'vm'
      }).
      otherwise({ redirectTo: '/' });
  });
})();