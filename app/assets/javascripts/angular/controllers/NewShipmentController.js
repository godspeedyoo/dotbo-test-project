angular.module('app').controller("NewShipmentController",
  ['$location', '$scope', 'Restangular', 'AuthService', '$http',
  function ($location, $scope, Restangular, AuthService, $http){
    if(!AuthService.isLoggedIn()){
      AuthService.setPageTryingToAccess();
      return $location.path('/sign_in');
    }

    $http.get('/v1/shipments').then(function (response) {
    	console.log(response);
    }, function (response) {
    	console.log("error");
    });

    // $scope.locations = Restangular.all('locations').getList().$object;
    // console.log(Restangular.all('shipments'))
  }
]);
