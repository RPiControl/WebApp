angular
	.module('homie.network')
	.directive('networkDeviceNas', NetworkDeviceNas);

function NetworkDeviceNas() {
	return {
		restrict: 'E',
		require: '^networkDevice',
		templateUrl: '/app/modules/devices/components/nas/nas.view.html',
		link: function(scope, element, attrs, deviceCtrl) {
			scope.device = deviceCtrl.getDevice();
			for (var i = 0; i < scope.device.drives.length; i++) {
				scope.device.drives[i].percentage = Math.round((scope.device.drives[i].used/scope.device.drives[i].size) * 100);
			}
		}
	};
}