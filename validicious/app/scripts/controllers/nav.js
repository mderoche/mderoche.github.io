'use strict';

angular.module('validiciousSiteApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isActive = function (whatPath) {
      var path = $location.path();

      if (path === '/') {
        path = '/home';
      }

      return (path.substr(1) === whatPath);
    };
  });
