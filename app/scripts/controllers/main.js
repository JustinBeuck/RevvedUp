'use strict';

/**
 * @ngdoc function
 * @name reviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reviewApp
 */
angular.module('reviewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
