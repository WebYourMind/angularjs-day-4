(function () {

    angular.module('app.customer')
        .controller('CustomerController', ['$rootScope', '$log', '$filter', 'CustomerFactory', '$timeout', '$translate', 'customers', CustomerController]);

    function CustomerController($rootScope, $log, $filter, CustomerFactory, $timeout, $translate, customers) {
        var vm = this;
        vm.headerFields = [
            'ID', 'First Name', 'Last Name', 'Birth Date', 'IBAN', 'Credit Card No.',  'Record URL', 'Actions'];
        vm.customers = customers;
        // retrieve customers from BE

        $log.log('Timed Log');

        vm.addNewCustomer = addNewCustomer;
        vm.deleteCustomer = deleteCustomer;

        function addNewCustomer(customer) {
            $log.log('adding customer');
            vm.customers = CustomerFactory.addNewCustomer(customer);
        }

        function deleteCustomer(customer) {
            var message = "";
            CustomerFactory.deleteCustomer(customer)
                .then(function (msg) {  
                     message = msg;                  
                    return CustomerFactory.getCustomers();
                })
                .then(function(data){
                    vm.customers = data;
                    $log.log('broadcasting event');
                    $rootScope.$broadcast('customerDeleted', customer);
                    alert(message);
                })
                .catch(function (error) {
                    alert(error);
                })
        }

    }
})();