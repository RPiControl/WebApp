angular
	.module('rpicontrol.network')
	.directive('networkDeviceDetails', NetworkDeviceDetailsDirective);

function NetworkDeviceDetailsDirective($controller) {
	return {
		restrict: 'E',
		templateUrl: '/app/modules/network/components/details/details.view.html',
		scope: {
			device: '=',
			editable: '@?'
		},
		link: NetworkDeviceDetailsLink
	};

	function NetworkDeviceDetailsLink(scope) {
		var locals = {
			$scope: scope,
			device: scope.device
		};
		$controller('NetworkDeviceDetailsController as ctrl', locals);
	}
}