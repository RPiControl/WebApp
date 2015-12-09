angular
    .module('rpicontrol')
    .config(function($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider
            .icon('access-point', '/res/svg/access-point.svg')
            .icon('access-point-server', '/res/svg/access-point-server.svg')
            .icon('bulletin-board', '/res/svg/bulletin-board.svg')
            .icon('cast', '/res/svg/cast.svg')
            .icon('cellphone', '/res/svg/cellphone.svg')
            .icon('cellphone-android', '/res/svg/cellphone-android.svg')
            .icon('cellphone-iphone', '/res/svg/cellphone-iphone.svg')
            .icon('cellphone-link', '/res/svg/cellphone-link.svg')
            .icon('cellphone-link-off', '/res/svg/cellphone-link-off.svg')
            .icon('desktop', '/res/svg/desktop.svg')
            .icon('device-hub', '/res/svg/device-hub.svg')
            .icon('device-others', '/res/svg/device-others.svg')
            .icon('dots-vertical', '/res/svg/dots-vertical.svg')
            .icon('harddisk', '/res/svg/harddisk.svg')
            .icon('laptop', '/res/svg/laptop.svg')
            .icon('laptop-chromebook', '/res/svg/laptop-chromebook.svg')
            .icon('laptop-mac', '/res/svg/laptop-mac.svg')
            .icon('laptop-windows', '/res/svg/laptop-windows.svg')
            .icon('menu', '/res/svg/menu.svg')
            .icon('nas', '/res/svg/dns.svg')
            .icon('printer', '/res/svg/printer.svg')
            .icon('raspberrypi', '/res/svg/raspberrypi.svg')
            .icon('router', '/res/svg/router.svg')
            .icon('router-wireless', '/res/svg/router-wireless.svg')
            .icon('server', '/res/svg/server.svg')
            .icon('server-network', '/res/svg/server-network.svg')
            .icon('switch', '/res/svg/switch.svg');
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('deep-orange');
        $mdThemingProvider.theme('dark')
            .backgroundPalette('grey', {
                default: '200'
            });
    });