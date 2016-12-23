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
var app = angular.module("DemoApp", ['ngMaterial', 'cl.paging']);
app.controller("MainController", ['$scope', function($scope) {

  $scope.currentPage = 0;

  $scope.paging = {
    total: 100,
    current: 1,
    onPageChanged: loadPages,
  };

  function loadPages() {
    console.log('Current page is : ' + $scope.paging.current);

    // TODO : Load current page Data here

    $scope.currentPage = $scope.paging.current;
  }

}]);
