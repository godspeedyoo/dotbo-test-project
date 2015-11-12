angular.module('app').controller("NewShipmentController",
	['$location', '$scope', 'ShipmentService', 'AuthService', '$http', '$state',
	function ($location, $scope, ShipmentService, AuthService, $http, $state){
		if(!AuthService.isLoggedIn()){
			AuthService.setPageTryingToAccess();
			return $location.path('/sign_in');
		}

		$scope.shipment = { to_address: {}, from_address: {}, parcel: {} }
		
		$scope.createShipment = function (shipment) {
			ShipmentService.create(shipment);
		}
		
		// to use for development/testing
		$scope.fillInForm = function () {
			$scope.shipment = 
				{
					to_address: {
						name: 'George Costanza',
						company: 'Vandelay Industries',
						street1: '1 E 161st St.',
						city: 'Bronx',
						state: 'NY',
						zip: 10451
					},
					from_address: {
						company: 'EasyPost',
						street1: '118 2nd Street',
						street2: '4th Floor',
						city: 'San Francisco',
						state: 'CA',
						zip: 94105,
						phone: '415-528-7555'
					},
					parcel: {
						length: 9,
						width: 6,
						height: 2,
						weight: 10
					}
				}
		}


		// $scope.locations = Restangular.all('locations').getList().$object;
		// console.log(Restangular.all('shipments'))
	}
]);
