(function () {

    angular.module('app.dashboard')
        .factory('DashboardFactory', DashboardFactory);

    function DashboardFactory($log, $timeout) {
        var self = this;
        self.me = {
            "id": 0,
            "first_name": "Angela",
            "last_name": "Metallo",
            "birth_date": new Date(1974, 4, 19)
        };

        return {
            getMyProfile: function () {
                console.time('DashboardFactory.getMyProfile');
                return $timeout(function(){
                    return self.me;
                }, 250);
            }
        }

    }


})();