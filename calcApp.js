(function () {
  'use strict';

  angular.module('CalcApp', [])
    .controller('CalcController', function ($scope) {
        // initialize properties & functions
        $scope.name = "";
        $scope.totalValue = 0;

        // this is a function that will be used in an html event (keyup = key pressed)
        $scope.displayNumeric = function () {
          var totalNameValue = calculateNumericForString($scope.name); // this invokes another "local" function passing the property bound to an html input
          $scope.totalValue = totalNameValue;
        };

        // this function is totally independent of view and data, it's high coheresed
        function calculateNumericForString(string) {
          var totalStringValue = 0;
          for (var i = 0; i < string.length; i++) {
            totalStringValue += string.charCodeAt(i);
          }
          return totalStringValue;
        }
    })
} )();
