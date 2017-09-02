(function () {
  'use strict'; // best practise

  angular.module('IocApp', []) // brackets are dependencies, this bounds the app to the View

  // we can the name of the function for the controller as 2nd parameter (as an array)
  // the last element is the actual function name
  // the 1st and 2nd elements in the array indicate that the function uses 2 parameters and in the order specified,
  // this is for minification of JS code, it would look like this:
  //      .controller('IocController', ['$scope','$filter',IocController]);
 // but we can also do this, more elegant:
 .controller('IocController', IocController);
 IocController.$inject = ['$scope','$filter'];

 // and now define the controller's function
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
