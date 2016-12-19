'use strict';

/**
 * @ngdoc overview
 * @name claimPortalApp
 * @description
 * # claimPortalApp
 *
 * Main module of the application.
 */
angular
  .module('claimPortalApp', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'toaster'
  ])
  .config(function ($httpProvider, $qProvider,$locationProvider) {
    $qProvider.errorOnUnhandledRejections(false);
// $locationProvider.html5Mode(true).hashPrefix('!');
  });

angular.element(document).ready(function () {
    angular.module('claimPortalApp')
    .constant('appConfig');
    angular.bootstrap(document, ['claimPortalApp']);
  })