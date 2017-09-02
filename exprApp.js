(function () {
  'use strict';

  angular.module('ExprApp', [])
    .controller('ExprController', ExprController);
    ExprController.$inject = ['$scope'];

    function ExprController($scope) {
      $scope.name = "Hector";
      $scope.imageSelector = "one";
      $scope.sayMessage = function () {
          return "Focus man..";
      };

      $scope.testButtonAction = function () {
          if ($scope.imageSelector = "one") {
            $scope.imageSelector = "two";
          } else {
            $scope.imageSelector = "one";
          }
      };

    }
} )();
