var bc = angular.module('bc', []);

bc.controller('CryptCtrl', ['$scope',
	function($scope) {

	$scope.encrypt = true;

	//var decrypted = CryptoJS.AES.decrypt(encrypted, passphrase).toString(CryptoJS.enc.Utf8);
	//console.log(decrypted);

	$scope.encrypt = function() {
		if ($scope.enc_message && $scope.enc_password){
			$scope.enc_result = CryptoJS.AES.encrypt($scope.enc_message, $scope.enc_password).toString();
		} else {
			$scope.enc_result = "You must enter some text and a password to encrypt your message!";
		}
	};

	$scope.decrypt = function() {
		if ($scope.dec_message && $scope.dec_password){
			$scope.dec_result = CryptoJS.AES.decrypt($scope.dec_message, $scope.dec_password).toString(CryptoJS.enc.Utf8);
			if (!$scope.dec_result) {
				$scope.dec_result = "Invalid password :-(";
			}
		} else {
			$scope.dec_result = "You must enter the encrypted text and a password to encrypt your message!";
		}
	};

	$scope.showEncrypt = function() {
		$scope.encrypt = true;
	}

	$scope.showDecrypt = function() {
		$scope.encrypt = false;
	}

}]);


