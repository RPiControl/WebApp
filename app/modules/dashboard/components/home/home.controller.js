angular
	.module('rpicontrol.dashboard')
	.controller('DashboardHomeCtrl', DashboardHomeCtrl);

function DashboardHomeCtrl() {
	
}

DashboardHomeCtrl.$target = {name: 'Dashboard', desc: 'The Dashboard', icon: 'bulletin-board', state: 'dashboard'};