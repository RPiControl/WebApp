angular
    .module('rpicontrol.navigator')
    .config(navigatorConfig);

function navigatorConfig($controllerProvider, $navigationProvider) {
    var register = $controllerProvider.register;
    $controllerProvider.register = function (name, ctrl) {
        $navigationProvider.register(name, ctrl);
        return register.apply(this, arguments);
    };
}