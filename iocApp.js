(function () {
  'use strict'; // best practise

  angular.module('IocApp', []) // brackets are dependencies, this bounds the app to the View
    .controller('IocController', IocController); // we define the name of the function for the controller

    function IocController($scope, $filter) { // this is the controller's main function, the $filter is a service that lets us create format function to display html
      $scope.name = "Hector"
      $scope.upper = function () { // the $filter needs to be within the scope, as a function in this case called upper
          var upCase = $filter('uppercase'); // upCase is the name of the function for the $filter service
          $scope.name = upCase($scope.name); // and here we are calling that (previous line) function upCase
      };
    }

    // we can add more JS functions here as we like
    // ..
} )();
