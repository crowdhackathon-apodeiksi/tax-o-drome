  angular.module('starter.controllers').controller('LoginCtrl', function($scope) {
  	$scope.processWithRegister = function(){
  		$state.go('tab.register');
  	};
  });
