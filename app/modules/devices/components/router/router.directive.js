angular
	.module('rpicontrol.network')
	.directive('networkDeviceeRouter', NetworkDeviceRouter);

function NetworkDeviceRouter() {
	return {
		restrict: 'E',
		require: '^networkDevice',
		templateUrl: '/app/modules/devices/components/router/router.view.html',
		link: function(scope, element, attrs, deviceCtrl) {
			scope.device = deviceCtrl.getDevice();
		}
	};
}