angular
	.module('rpicontrol.core')
	.factory('$iconResolver', $iconResolverFactory);

function $iconResolverFactory() {
	return {
		device: resolveDevice
	};

	function resolveDevice(device) {
		var icon;
	    switch (device.type) {
            case 'ap':
                icon = 'access-point';
                break;
            case 'chromecast':
                icon = 'cast';
                break;
            case 'desktop':
                icon = 'desktop';
                break;
            case 'laptop':
                icon = 'laptop';
                switch (device.os) {
                    case 'macos':
                        icon += '-mac';
                        break;
                    case 'windows':
                        icon += '-windows';
                        break;
                    case 'chrome':
                        icon += '-chromebook';
                        break;
                }
                break;
            case 'nas':
                icon = 'nas';
                break;
            case 'printer':
            	icon = 'printer';
            	break;
            case 'router':
                icon = 'router';
                break;
            case 'server':
                icon = 'server';
                break;
            case 'smartphone':
                icon = 'cellphone';
                switch (device.os) {
                    case 'android':
                        icon += '-android';
                        break;
                    case 'ios':
                        icon += '-iphone';
                        break;
                }
                break;
            default:
                icon = 'server-network';
        }
        return icon;
	}
}