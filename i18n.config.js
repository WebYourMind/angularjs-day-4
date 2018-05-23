(function(){
    angular.module("app")
        .config(['$translateProvider', function($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'i18n/locale-',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('IT');
            $translateProvider.useSanitizeValueStrategy(null);
        }]);
}())