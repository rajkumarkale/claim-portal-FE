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
    'ngTouch'
  ])
  .config(function ($httpProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  });
