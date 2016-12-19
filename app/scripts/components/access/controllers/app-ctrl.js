angular.module("claimPortalApp").controller("AppCtrl", ['$scope', '$state', '$rootScope', '$mdDialog',
	function ($scope, $state, $rootScope, $mdDialog) {
		console.log('loading===========================');
		$state.go('app.signin');
		$scope.showLogOut = false;
		$scope.showBreadcrum=false;
		$rootScope.$on('$stateChangeStart', function (event, preState, toState, toParams) {
			$scope.stateUrl = preState.url.substring(1);

			if (preState.name === 'app.profile') {
				$scope.showLogOut = true;
			}
			else { $scope.showLogOut = false; }
			if (preState.name === 'app.signin') {
				$scope.showBreadcrum = false;
			}
			else { $scope.showBreadcrum = true; }
		});
	}]);
