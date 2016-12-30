'use strict';

/**
 * @ngdoc overview
 * @name claimPortalApp
 * @description
 * # claimPortalApp


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
    'ngMaterial',
    'toaster'
  ])
  .config(function ($httpProvider, $qProvider, $locationProvider) {
    // $qProvider.errorOnUnhandledRejections(false);
    // $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(function ($httpProvider) {


    $httpProvider.interceptors.push('myInterceptor')

  })
  .factory('myInterceptor', function ($q, $location) {
    return {
      request: function (config) {
        config.headers = config.header || {};
      //   if ($localStorage.token) { config.headers.Authorization = 'Bearer ' + $localStorage.token;
      //  }
        return config;
      },
      requestError: function (config) {
        return config;
      },
      response: function (res) {
        return res;
        // $state.go('');

      },
      responseError: function (res) {
        return res;
      }
    }
  });
 //
 // var history_api=typeof history.pushState!==undefined;
 // if(history_api) history.pushState(null,'','');;

angular.element(document).ready(function () {
  angular.module('claimPortalApp')
    .constant('appConfig');
  angular.bootstrap(document, ['claimPortalApp']);
});

