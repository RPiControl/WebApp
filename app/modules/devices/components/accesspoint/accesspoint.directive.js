angular
	.module('homie.network')
	.directive('networkDeviceAp', NetworkDeviceAP);

function NetworkDeviceAP($iconResolver) {
	return {
		restrict: 'E',
		require: '^networkDevice',
		templateUrl: '/app/modules/devices/components/accesspoint/accesspoint.view.html',
		link: function(scope, element, attrs, deviceCtrl) {
			scope.device = deviceCtrl.getDevice();
			for (var i = 0; i < scope.device.clients.length; i++) {
				var client = scope.device.clients[i];
				client.icon = $iconResolver.device(client);
			}
			if (scope.device.wifi) {
				deviceCtrl.addMenuItem('Disable Wi-Fi');
			}else {
				deviceCtrl.addMenuItem('Enable Wi-Fi');
			}
		}
	};
}