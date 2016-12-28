/**
 * Created by kveena on 12/19/2016.
 */
angular.module("claimPortalApp")
  .controller("ProjectDetailsCtrl", ['$scope', '$state',function($scope, $state){
    var prjctDtlsCtrl=this;
    prjctDtlsCtrl.projectDetailsArr=[{project:'cFog',location:'hyderabad',budget:'30,000'},
      {project:'cFog',location:'hyderabad',budget:'30,000'},
      {project:'cFog',location:'hyderabad',budget:'30,000'}]
  }]);

