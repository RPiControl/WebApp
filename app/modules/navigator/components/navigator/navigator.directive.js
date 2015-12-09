angular
	.module('homie.navigator')
	.directive('mjNavigator', navigatorDirective);

function navigatorDirective($navigation, $state) {
	return {
		restrict: 'A',
		link: link
	};

	function link(scope) {
		scope.targets = $navigation.getTargets();
		scope.isInState = function(state) {
			return $state.includes(state);
		};
	}
}