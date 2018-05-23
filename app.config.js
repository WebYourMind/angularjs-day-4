(function () {

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
            $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'customer/main/main.tmpl.html',
                    controller: 'CustomerController',
                    controllerAs: 'CustomerCtl',
                    resolve: {
                        customers: function (CustomerFactory) {
                            return CustomerFactory.getCustomers();
                        }
                    }
                })
                .state('customer', {
                    url: '/customer/:customer',
                    templateUrl: 'customer/details/details.tmpl.html',
                    controller: 'DetailsController',
                    controllerAs: 'DetailsCtl'
                })
                .state('dashboard', {
                    abstract: true,
                    resolve: {
                        myprofile: function ($timeout) {
                            return $timeout(function () {
                                return {
                                    "id": 0,
                                    "first_name": "Simone",
                                    "last_name": "Torrisi",
                                    "birth_date": new Date(1980, 9, 20)
                                }
                            }, 250);
                        }
                    }
                })
                .state('dashboard.profile', {
                    url: '/dashboard/profile',
                    templateUrl: 'dashboard/profile.tmpl.html',
                    controller: 'ProfileController',
                    controllerAs: 'ProfileCtl',
                });

            $urlRouterProvider.otherwise("/");
            // configure html5 for friendly URL
            $locationProvider.html5Mode(true);
        });
})();

