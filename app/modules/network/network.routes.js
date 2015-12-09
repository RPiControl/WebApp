angular
	.module('rpicontrol.network')
	.config(function($stateProvider) {
		$stateProvider
			.state('network', {
				url: '/network',
				views: {
					viewport: {
						templateUrl: '/app/modules/network/components/overview/overview.view.html',
						controller: 'NetworkOverviewCtrl',
					}
				},
				resolve: {
					$title: function() {
						return 'Network';
					}
				}
			})
			.state('network.details', {
				url: '/:mac',
				views: {
					'viewport@': {
						templateUrl: '/app/modules/network/components/details/details.view.html',
						controller: 'NetworkDeviceDetailsController as details',						
					}
				},
				resolve: {
					$title: function() {
						return 'Network Details';
					}
				}
			});
	});
