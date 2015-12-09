angular
	.module('rpicontrol.core')
	.controller('UIController', UIController);

function UIController($ui) {
	this.toolbar = $ui.toolbar;
	//this.sidenav = $ui.sidenav;
}