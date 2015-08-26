'use strict';

angular.module('app.directive', [])
    .directive('mashstep', function () {
        return {
            templateUrl: 'test/unit/directives/mashTpl.html',
            restrict: 'EA',
            scope: {
                step: '@'
            },
            link: function postLink(scope, element, attrs) {
            }
        };
    });
