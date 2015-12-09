angular
	.module('rpicontrol.network')
	.controller('NetworkDeviceDetailsController', NetworkDeviceDetailsController);

function NetworkDeviceDetailsController($iconResolver, device, $mdDialog, $ui) {
	this.device = device;
	this.name = this.device.name;
	this.ip = this.device.ip;
	this.forwards = this.device.forwards;
	this.selected = [];
	this.restrictions = {
		internet: {
			disabled: false
		},
		bandwith: {
			enabled: false,

		}
	};
	var self = this;

	this.forwards.forEach(function(forward) {
		if (forward.enabled) {
			self.selected.push(forward);
		}
	});
	this.addForward = function() {
		$mdDialog.show({
			parent: angular.element(document.body),
			templateUrl: '/app/modules/network/components/details/add.view.html',
			controller: function($mdDialog) {
				this.forward = {
					enabled: true,
					label: '',
					protocol: 'TCP',
					incoming: 80,
					outgoing: 80
				};

				this.add = function() {
					$mdDialog.hide(this.forward);
				};
				this.cancel = function() {
					$mdDialog.cancel();
				};
			},
			controllerAs: 'vm'
		}).then(function(forward) {
			self.forwards.push(forward);
			self.selected.push(forward);
		});
	};
	this.save = function() {
		self.device.name = self.name;
		self.device.ip = self.ip;
		self.device.forwards.forEach(function(forward) {
			forward.enabled = false;
			self.selected.forEach(function(selected) {
				if (forward == selected) {
					forward.enabled = true;
				}
			});
		});
		//self.device.save();
		self.close();
	};

	this.cancel = function() {
		self.name = self.device.name;
		self.ip = self.device.ip;
		self.close();
	};

	this.close = function() {
		self.device.details = false;
		$ui.toolbar.title = 'Network';
	}
}