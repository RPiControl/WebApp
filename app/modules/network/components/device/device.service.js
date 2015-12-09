angular
	.module('homie.network')
	.factory('NetworkDevice', NetworkDeviceFactory);

function NetworkDeviceFactory($http) {
	var NetworkDevice = function(mac) {
		this.mac = mac;
		this.label = null;
		this.ip = null;
		this.forwards = [];
	};
	NetworkDevice.prototype.load = function() {
		var self = this;
		return $http({
			method: 'GET',
			url: '/_api/network/' + this.mac
		}).then(function(response) {
			self.label = response.data.label;
			return self;
		});
	};
	NetworkDevice.prototype.save = function() {
		$http({
			method: 'POST',
			url: '/_api/network/' + this.mac,
			body: this
		});
	};
	return NetworkDevice;
}