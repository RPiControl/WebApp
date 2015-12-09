angular
	.module('homie.navigator')
	.provider('$navigation', $navigationProvider);
 
function $navigationProvider() {
    var navigation = [];
    return {
        register: function (name, constructor) {
            if (angular.isArray(constructor)) {
                constructor = constructor[constructor.length - 1];
            }
            if (angular.isDefined(constructor.$target)) {
                var target = {
                    ctrl: name,
                    name: constructor.$target.name,
                    state: constructor.$target.state,
                    icon: constructor.$target.icon,
                    desc: constructor.$target.desc
                };
                navigation.push(target);
            }
        },
        $get: function () {
            return {
                getTargets: function() {
                    return navigation;
                }
            };
        }
    };
}