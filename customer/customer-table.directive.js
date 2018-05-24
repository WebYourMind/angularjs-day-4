(function () {
    'use strict';

    angular
        .module ('app.customer')
        .directive ('customerTable', customerTable);


    /** @ngInject */
    function customerTable() {

        function customerTableDirectiveController(){
            var vm = this;
            vm.cancellaCliente = cancellaCliente;

            function cancellaCliente(customer) {
                vm.deleteCustomer({ customer: customer });
            }
        
        }
          

        return {
            controller: customerTableDirectiveController,
            controllerAs: 'customerTableCtl',
            restrict: 'AE',
            bindToController: {
                customers : '=',
                headerFields: '=',
                search: '=',
                deleteCustomer: '&'
            },
            scope: {},
            templateUrl:'/customer/customer-table.tmpl.html'
        }
    }

})();