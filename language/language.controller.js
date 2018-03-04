(function () {

    angular.module('app.customer')
        .controller('LanguageController', ['$rootScope','$translate', '$log', LanguageController]);

    function LanguageController($rootScope, $translate, $log, $stateParams) {
        var vm = this;
        vm.changeLang = changeLang;

        function changeLang(key) {
            $translate.use(key);
        };

        $rootScope.$on('customerDeleted', function(event, args){
            $log.log('customerDeleted event catched: ',args);
        });
    }
})();