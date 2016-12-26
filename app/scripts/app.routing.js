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
        //controller:'AppCtrl'
      })
      .state('app.signin', {
        url: '/sign-in',
        templateUrl: 'scripts/components/access/views/sign-in.html',
        controller: 'signInController',
        controllerAs: 'signInCtrl'
      })
      .state('app.forgot', {
        url: '/forgot',
        template: '<h1>forgot password</h1>'
      })
      .state('app.profile', {
        url: '/profile',
        templateUrl: 'scripts/components/employee/views/profile.html',
        controller: 'EmployeeDashboardCtrl',
        controllerAs: 'empDashboardCtrl'
      })
      .state('app.about', {
        url: '/about',
        templateUrl: 'scripts/components/access/views/about.html'
      })
      .state('app.services', {
        url: '/services',
        templateUrl: 'scripts/components/access/views/services.html'
      })
      .state('app.contact', {
        url: '/contact',
        templateUrl: 'scripts/components/access/views/contact.html'
      })
      .state('app.blog', {
        url: '/blog',
        templateUrl: 'scripts/components/access/views/blog.html'
      })
      .state('app.project_details', {
        url: '/project-details',
        templateUrl: 'scripts/components/employee/views/project-details-view.html',
        controller: 'ProjectDetailsCtrl',
        controllerAs: 'prjctDtlsCtrl'
      })
      .state('app.track_status', {
        url: '/track-status',
        templateUrl: 'scripts/components/employee/views/track-status-view.html',
        controller: 'TrackStatusCtrl',
        controllerAs: 'trckStsCtrl'
      });


    $urlRouterProvider.otherwise('/app');
  }]);
