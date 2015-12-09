angular
	.module('rpicontrol.network')
	.controller('NetworkOverviewCtrl', NetworkOverviewCtrl);

function NetworkOverviewCtrl($scope, $http, $iconResolver, $ui) {
	$ui.toolbar.title = 'Network';
	$ui.toolbar.color = '#FFC107';
	$scope.devices = [];
	$scope.showDetails = function(selected) {
		selected.details = true;
		$ui.toolbar.title = 'Network - ' + selected.name;
		$scope.devices.forEach(function(device) {
			if (device != selected) {
				device.details = false;
			}
		});
	};
	$http.get('/_api/network_.json').then(function(result) {
		$scope.devices = result.data;
		$scope.query = {
			order: 'name'
		};
		$scope.devices.forEach(function(device) {
			device.icon = $iconResolver.device(device);
			console.log(device.icon);
		});
		console.log($scope.devices);
	});
}
NetworkOverviewCtrl.$target = {name: 'Network', desc: 'A Network Overview', icon: 'server-network', state: 'network'};