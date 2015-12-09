angular
	.module('rpicontrol.network')
	.directive('networkDevicePrinter', NetworkDevicePrinter);

function NetworkDevicePrinter() {
	return {
		restrict: 'E',
		require: '^networkDevice',
		templateUrl: '/app/modules/devices/components/printer/printer.view.html',
		link: function(scope, element, attrs, deviceCtrl) {
			scope.device = deviceCtrl.getDevice();
		}
	};
}