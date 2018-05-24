(function () {
    'use strict';

    angular
        .module('app.customer')
        .directive('vipDirective', vipDirective);


    /** @ngInject */
    function vipDirective() {
        return {
            restrict: 'AE',
            scope: {
                threshold: '=',
                balance: '='
            },
            template: '<b ng-if="balance >= threshold">Rich</b> <span ng-if="balance < threshold"> Poor </span>'
        }
    }

}());