angular.module('app').controller("BuyShipmentController",
  ['$location', '$scope', 'AuthService', 'ShipmentService',
  function ($location, $scope, AuthService, ShipmentService){
    if(!AuthService.isLoggedIn()){
      AuthService.setPageTryingToAccess();
      return $location.path('/sign_in');
    }

    $scope.selection = {};

    $scope.rates = ShipmentService.getStubbedRates();

    $scope.buyShipment = function (rateId) {
    	ShipmentService.buyShipment(rateId);
    };

    console.log($scope.rates);

  }
]);
