/**
 * Created by kveena on 12/19/2016.
 */
angular.module("claimPortalApp")
  .controller("TrackStatusCtrl", ['$scope', '$state',function($scope, $state){
    var trckStsCtrl=this;
    trckStsCtrl.projectStatusArr=[{claimid:'1123',name:'myJobs',locat:'Banglore',date:'23/12/2016'},
      {claimid:'1123',name:'myJobs',locat:'Banglore',date:'23/12/2016'},
      {claimid:'1123',name:'myJobs',locat:'Banglore',date:'23/12/2016'}]
    
  }]);
