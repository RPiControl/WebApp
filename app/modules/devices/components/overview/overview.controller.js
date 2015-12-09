angular
	.module('rpicontrol.devices')
	.controller('DeviceOverviewCtrl', DeviceOverviewCtrl);

function DeviceOverviewCtrl($scope, $http, $iconResolver) {
	$scope.devices = [];
	$http.get('/_api/devices.json').then(function(result) {
		$scope.devices = result.data;
		$scope.query = {
			order: 'name'
		};
	});
}
DeviceOverviewCtrl.$target = {name: 'Devices', desc: 'A Device Overview', icon: 'device-hub', state: 'devices'};