angular
	.module('rpicontrol.devices')
	.config(function($stateProvider) {
		$stateProvider.state('devices', {
			url: '/devices',
			views: {
				viewport: {
					templateUrl: '/app/modules/devices/components/overview/overview.view.html',
					controller: 'DeviceOverviewCtrl',
				}
			},
			resolve: {
				$title: function() {
					return 'Devices';
				}
			}
		});
	});
