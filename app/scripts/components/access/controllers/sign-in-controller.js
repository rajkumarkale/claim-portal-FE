/**
 * Created by kveena on 12/15/2016.
 */
angular.module("claimPortalApp")
  .controller("signInController", ['$scope', '$state', '$mdSidenav', '$rootScope','ToastService',
    function ($scope, $state, $mdSidenav, $rootScope,ToastService) {
      var signInCtrl = this;
      $rootScope.showLogOut = false;
      var uEmail = "mr.rajkale@gmail.com";
      var ePassword = "password";
      signInCtrl.emailId = '';
      signInCtrl.password = ''
      signInCtrl.submitCredentials = function () {
        if (signInCtrl.emailId === uEmail && signInCtrl.password === ePassword) {
          ToastService.toastSuccess('Success', 'You are done!')
          $state.go('app.profile')
        }
        else {
          ToastService.toastError('', 'Error', 'Plase enter valid email & password')
          return;
        }

      }

      // Open Side Nav For Credentials
      signInCtrl.toggleSideNav = function () {
        $mdSidenav('right').toggle();
      }

    }]);
