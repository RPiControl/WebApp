angular
    .module('rpicontrol.network')
    .directive('networkDevice', NetworkDevice);

function NetworkDevice($iconResolver, $mdDialog) {
    return {
        restrict: 'E',
        templateUrl: '/app/modules/devices/components/device/device.view.html',
        replace: true,
        scope: {
            icon: '@',
            device: '=',
            showTraffic: '='
        },
        transclude: true,
        controller: function($scope) {
            $scope.menu = [];
            this.getDevice = function() {
                return $scope.device;
            };
            this.addMenuItem = function(title, callback) {
                $scope.menu.push({title: title, callback: callback});
            };
            this.addMenuItem('Rename');
            this.addMenuItem('Hide');
        },
        link: function(scope, element, attrs) {
            scope.icon = $iconResolver.device(scope.device);
            scope.device.show = function() {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.body))
                        .clickOutsideToClose(true)
                        .title('This is an alert title')
                        .textContent('You can specify some description text in here.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                );
            };
            /*
            scope.$on('chart-loaded', function() {
                var data = new google.visualization.DataTable();
                data.addColumn('timeofday', 'Time');
                data.addColumn('number', 'Inbound Data');
                data.addColumn('number', 'Outbound Data');
                data.addRows([[[15,8,0], 45, 2], [[15,9,0], 23, 3]]);
                scope.traffic = {
                    type: 'google.charts.Line',
                    data: data,
                    options: {
                        series: {
                            0: {axis: 'Traffic'},
                            1: {axis: 'Traffic'}
                        },
                        axes: {
                            y: {
                                Traffic: {
                                    label: 'Data'
                                }
                            }
                        },
                        legend: {
                            position: 'none'
                        }
                    }
                };
            });*/
        }
    };
}