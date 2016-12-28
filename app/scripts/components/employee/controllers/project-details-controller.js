/**
 * Created by kveena on 12/19/2016.
 */
angular.module("claimPortalApp")
  .controller("ProjectDetailsCtrl", ['$scope', '$state',function($scope, $state){
    var prjctDtlsCtrl=this;
    prjctDtlsCtrl.projectDetailsArr=[{projectId:"001",project:'cFog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabgdfgad',budget:'30,000',isSelected:false},
      {projectId:"00cf1",project:'fgdfcFog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFdfsog',location:'hyderabad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabdfad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabdfad',budget:'30dfsd,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabdfad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabdfad',budget:'30,000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderfsfabad',budget:'30,dfsdf4534000',isSelected:false},
      {projectId:"001",project:'cFog',location:'hyderabad',budget:'30,6456000',isSelectedd:false},
     
      
      ];
    prjctDtlsCtrl.currentPage = 0;
    prjctDtlsCtrl.paging = {
      total: prjctDtlsCtrl.projectDetailsArr.length,
      current: 1,
      itemsperpage:4

    };
    prjctDtlsCtrl.BackToProfilePage=function () {
      $state.go('app.profile');
    };
    prjctDtlsCtrl.onNextToApplyClaim=function () {
      $state.go('app.claim_form');
    };
    prjctDtlsCtrl.onSelectingProject=function (projectObj,index) {
      projectObj.isSelected=!projectObj.isSelected;
    }
  }]);

