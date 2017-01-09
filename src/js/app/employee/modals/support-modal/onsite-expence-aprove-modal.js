/**
 * Created by rkale on 8/16/2016.
 */
var module = angular.module('claimPortalApp');
module.factory('OnsiteExpenceAproveModal', function ($injector) {
  function OnsiteExpencesAprove(modelData) {
    this.aprovedBudget = {};
    this._id = modelData._id;
    this.aproveStatus = modelData.aproveStatus;
    this.rejectionComment = modelData.rejectionComment;
  //  this.aprovedBudget.aprovedAmount = modelData.aprovedBudget.aprovedAmount;
  //  this.aprovedBudget.aproveBudgetComments = modelData.aprovedBudget.aproveBudgetComments
  }
  return OnsiteExpencesAprove;
});
