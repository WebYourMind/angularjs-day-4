(function () {
    'use strict';

    angular
        .module ('app.customer')
        .directive ('customerRow', customerRow);


    /** @ngInject */
    function customerRow() {

        function customerRowDirectiveController($scope){
            var vm = this;
            vm.cancellaCliente = cancellaCliente;

            function cancellaCliente(customer) {
                $scope.customerTableCtrl.cancellaCliente(customer);
            }
        
        }

        return {
            controller: customerRowDirectiveController,
            controllerAs: 'customerRowCtl',
            require: '^customerTable',
            restrict: 'AE',
            bindToController: {
                customer : '='
            },
            scope: {},
            link: function ($scope, $elem, $attr, $ctrl) {
                $scope.customerTableCtrl = $ctrl;
            },
            templateUrl:'/customer/customer-row.tmpl.html'
        }
    }

})();