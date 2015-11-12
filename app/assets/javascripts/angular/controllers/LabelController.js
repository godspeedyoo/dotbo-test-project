angular.module('app').controller("LabelController",
  ['$location', '$scope', 'ShipmentService', 'AuthService',
  function ($location, $scope, ShipmentService, AuthService){
    if(!AuthService.isLoggedIn()){
      AuthService.setPageTryingToAccess();
      return $location.path('/sign_in');
    }

    $scope.labelUrl = ShipmentService.getLabelUrl();

    // $scope.locations = Restangular.all('locations').getList().$object;
  }
]);
