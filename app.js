(function () {
  'use strict'; // best practise

  angular.module('testApp', []) // brackets are dependencies, this bounds the app to the View
    .controller('Controller1', function ($scope) { // this bounds the controller's function to the div in the view. $scope is angularJS specific
      $scope.name = "Value in name property" // the scope has properties that can be exposed to the view where the controller is bound
      $scope.testFunction = function () { // the scope can have not only properties but functions that can be referenced in the view
          return "Data returned from testFunction"
      };
    })
} )();
