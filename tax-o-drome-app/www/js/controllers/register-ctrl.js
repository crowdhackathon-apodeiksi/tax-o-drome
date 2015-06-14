angular.module('starter.controllers').controller('RegisterCtrl', function($scope, $state, Profile) {
	console.log(Profile.username());
	if (Profile.username()) {
		$state.go('tab.dash', {location:'replace'});
	} 

	$scope.user = {};

	$scope.processWithRegistration = function(user){
		Profile.setUsername(user.username);

		$state.go('tab.dash');
	};
	$scope.processWithDash = function(){
		$state.go('tad.dash');
	};
});
