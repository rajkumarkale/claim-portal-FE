/**
 * Created by kveena on 12/15/2016.
 */
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
        templateUrl: 'scripts/components/access/views/sign-in.html',
        controller:'signInController',
        controllerAs:'signInCtrl'
      })
      .state('app.forgot', {
        url: '/forgot',
        template: '<h1>forgot password</h1>'
      })
    .state('app.dashboard', {
      url: '/dashboard',
      templateUrl: 'scripts/components/employee/views/employee-dashboard-view.html',
      controller:'EmployeeDashboardCtrl',
      controllerAs:'empDashboardCtrl'
    });
    $urlRouterProvider.otherwise('/app');
  }]);
