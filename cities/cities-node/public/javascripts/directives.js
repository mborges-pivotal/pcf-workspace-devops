'use strict';

/* Directives */

angular.module('citiesUiApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  });
