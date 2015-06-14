angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Profile) {
	$scope.points = Profile.points();

})

.controller('ReceiptsCtrl', function($scope, Receipts) {
	$scope.receipts = Receipts.all();
})

.controller('ReceiptDetailCtrl', function($scope, $stateParams, Receipts) {
})

.controller('AccountCtrl', function($scope) {

});
