angular
	.module('rpicontrol.core')
	.provider('$ui', $uiProvider);

function $uiProvider() {
	toolbar = {
		color: '#607D8B',
		title: undefined
	};

	return {
		setDefaultColor: setDefaultColor,
		$get: $ui
	};

	function setDefaultColor(defaultColor) {
		toolbar.color = defaultColor;
	}

	function $ui($rootScope, $mdSidenav) {
		$rootScope.$on('$stateChangeStart', function(event, toState) {
			console.log(event);
			console.log(toState);
			toolbar.title = toState.resolve.$title();
			toolbar.color = '#607D8B';
		});

		return {
			toolbar: toolbar,
			setPageTitle: setPageTitle
		};

		function setPageTitle(newTitle) {
			$rootScope.$title = newTitle;
		}
	}
}