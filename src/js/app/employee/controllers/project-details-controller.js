/**
 * Created by kveena on 12/19/2016.
 */
angular.module("claimPortalApp")
  .controller("ProjectDetailsCtrl", ['$scope', '$state','ProjectModel','projectService', function($scope, $state,ProjectModel,projectService){
    var prjctDtlsCtrl=this;
    prjctDtlsCtrl.ProjectDetailsModel=new ProjectModel({});
    prjctDtlsCtrl.projectDetailsArr = [];
    projectService.getProject().then(function (response) {
      prjctDtlsCtrl.projectDetailsArr = response;
    });
    console.log(prjctDtlsCtrl.projectDetailsArr +"fgdfgsdfg")
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

