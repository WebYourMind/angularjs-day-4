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
                        /*myprofile: function (DashboardFactory) {
                            console.log('***** calling dashboard factory');
                            var retVal =  DashboardFactory.getMyProfile();
                            console.log('***** retVal dashboard factory', retVal);
                            return retVal;
                        }      */
                        myprofile: function ($timeout) {
                            return $timeout(function () {
                                return {
                                    "id": 0,
                                    "first_name": "Simone",
                                    "last_name": "Torrisi",
                                    "birth_date": new Date(1980, 10, 20)
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
        })
        /*
        .config(function ($translateProvider) {
            $translateProvider.translations('en', {
                CUSTOMER_ENTRY_FORM_TITLE: 'Customer Entry Form',
                DASHBOARD: 'Dashboard',
                CUSTOMER_SEARCH: 'Customer Search',
                LANGUAGE: 'Language',
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_IT: 'italian'
            });
            $translateProvider.translations('it', {
                CUSTOMER_ENTRY_FORM_TITLE: 'Modulo Inserimento Cliente',
                DASHBOARD: 'Cruscotto',
                CUSTOMER_SEARCH: 'Ricerca cliente',
                LANGUAGE: 'Lingua',
                BUTTON_LANG_EN: 'inglese',
                BUTTON_LANG_IT: 'italiano'
            });
            $translateProvider.preferredLanguage('it');
        })*/
        .config(function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'language/locale-',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('it');
        });
})();

