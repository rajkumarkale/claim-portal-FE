/**
 * Created by kveena on 12/15/2016.
 */
angular.module("claimPortalApp")
  .controller("signInController", ['$scope', '$state', '$mdSidenav', '$rootScope','ToastService',
    function ($scope, $state, $mdSidenav, $rootScope,ToastService) {
      var signInCtrl = this;
      $rootScope.showLogOut = false;
      signInCtrl.emailId = '';
      signInCtrl.password = '';
      signInCtrl.submitCredentials = function () {
        if (signInCtrl.emailId && signInCtrl.password) {
          ToastService.toastSuccess('Success', 'You are done!');
          $state.go('app.profile')
        }
        else {
          ToastService.toastError('','Plase check your credentials');
          return;
        }

      };

      // Open Side Nav For Credentials
      signInCtrl.toggleSideNav = function () {
        $mdSidenav('right').toggle();
      }

    }]);
