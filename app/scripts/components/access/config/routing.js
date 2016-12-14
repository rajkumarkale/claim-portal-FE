angular.module('claimPortalApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'scripts/components/access/views/app.html'
            })
            .state('app.signin', {
                url: '/sign-in',
                templateUrl: 'scripts/components/access/views/sign-in.html'
            })
            .state('app.forgot', {
                url: '/forgot',
                template: '<h1>forgot password</h1>'
            })

        $urlRouterProvider.otherwise('/app');
    }])