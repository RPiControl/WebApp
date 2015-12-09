angular
	.module('rpicontrol.dashboard')
	.config(function($stateProvider, $urlRouterProvider) {
		//$urlRouterProvider.otherwise('/dashboard');
		$stateProvider.state('dashboard', {
			url: '/dashboard',
			views: {
				viewport: {
					templateUrl: '/app/modules/dashboard/components/home/home.view.html',
					controller: 'DashboardHomeCtrl',
				}
			},
			resolve: {
				$title: function() {
					return 'Dashboard';
				}
			}
		});
	});
