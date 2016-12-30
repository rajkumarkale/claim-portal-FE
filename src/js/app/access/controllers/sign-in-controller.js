/**
 * Created by kveena on 12/15/2016.
 */
angular.module("claimPortalApp")
  .controller("signInController", ['$scope', '$state', '$mdSidenav', '$rootScope', 'ToastService', 'loginService',
    function ($scope, $state, $mdSidenav, $rootScope, ToastService, loginService) {
      var signInCtrl = this;
      $rootScope.showLogOut = false;
      signInCtrl.emailId = '';
      signInCtrl.password = '';
      signInCtrl.submitCredentials = function () {

        var data = {
          email: signInCtrl.emailId,
          password: signInCtrl.password
        }
        loginService.login(data).then(function (res) {
          console.log(res);
        }, function (err) {
          ToastService.toastError('', 'Plase check your credentials');
          return;
        })
        // if (signInCtrl.emailId && signInCtrl.password) {
        //   ToastService.toastSuccess('Success', 'You are done!');
        //   $state.go('app.profile')
        // }
        // else {
        //   ToastService.toastError('', 'Plase check your credentials');
        //   return;
        // }

      };

      // Open Side Nav For Credentials
      signInCtrl.toggleSideNav = function () {
        $mdSidenav('right').toggle();
      }

    }]);
