/**
 * Created by kveena on 12/15/2016.
 */
angular.module("claimPortalApp")
  .controller("signInController", ['$scope', '$state',function($scope, $state){
    var signInCtrl=this;
    signInCtrl.onLoginHandler=function () {
      $state.go('app.dashboard')
    }
  }]);
