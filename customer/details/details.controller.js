(function () {

    angular.module('app.customer')
        .controller('DetailsController', ['$rootScope', '$log', '$filter','$stateParams', DetailsController]);

    function DetailsController($rootScope, $log, $filter, $stateParams) {
        var vm = this;
        vm.customerName = angular.copy($stateParams.customer);
        vm.text = 'I am the DetailsController';
        $log.log('Route Params Dump', $stateParams);
        $rootScope.$on('customerDeleted', function(){
            console.log('*********customerDeleted event catched');
        });
    }
})();