angular.module('starter.controllers').controller('ReceiptPhotoCtrl', function($scope, $state, $cordovaBarcodeScanner, Camera) {
    $scope.getPhoto = function() {
        Camera.getPicture({
            quality: 75,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: false
        }).then(function(imageURI) {
            $scope.imageURI = imageURI;
        }, function(err) {});
    };
    $scope.processWithOCR = function(imageURI) {
        $state.go('tab.receipt-create');
    };
    var prepareReceiptData = function(stringToSplit, seperator, imageURI) {
        var arrayOfStrings = stringToSplit.split(seperator);
        receipt = {
            "business": arrayOfStrings[0],
            "rid": arrayOfStrings[1],
            "transaction_date": arrayOfStrings[2],
            "total_amount": arrayOfStrings[6],
            "total_vat": arrayOfStrings[5],
            "imageURI": imageURI
        };
        return receipt;
    };
    $scope.cancel = function() {
        $scope.imageURI = null;
    };
    $scope.processWithHelp = function() {
        $state.go('tab.receipt-help');
    };
    $scope.processWithQR = function(imageURI) {
        $cordovaBarcodeScanner.scan().then(function(barcodeData) {
            if (barcodeData.cancelled === "false") {
                $scope.debug = prepareReceiptData(barcodeData.text, ",", imageURI);
            } else {
                $scope.debug = prepareReceiptData(barcodeData.text, ",", imageURI);
            }
            $state.go('tab.receipt-create', {
                receipt: $scope.debug
            });
        }, function(error) {
            $scope.debug = error;
        });
    };
});
angular.module('starter.controllers').controller('ReceiptsCreateCtrl', function($scope, $state, $stateParams, $cordovaGeolocation, Receipts) {
    $scope.receipt = $stateParams.receipt || {};
    var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
    };
    $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
        $scope.receipt.latitude = position.coords.latitude;
        $scope.receipt.longitude = position.coords.longitude;
    }, function(err) {
        $scope.debug = err;
    });
    $scope.submit = function(receipt) {
        Receipts.add(receipt);

        $state.go('tab.receipts');
    };
});