(function () {
  'use strict';

  angular.module('ExprApp', [])
    .controller('ExprController', ExprController);
    ExprController.$inject = ['$scope'];

    function ExprController($scope) {
      $scope.name = "Hector";
      $scope.sayMessage = function () {
          return "Focus man..";
      };
    }
} )();
