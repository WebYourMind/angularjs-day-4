(function () {

    angular.module('app.dashboard')
        .controller('ProfileController', ['$log', '$stateParams', 'myprofile', ProfileController]);

    function ProfileController($log, $stateParams,  myprofile) {
        var vm = this;
        vm.myprofile = myprofile;
        vm.text = 'This is the Profile Page';
        $log.log('****ProfileController myProfile: ', myprofile);
        
    }
})();