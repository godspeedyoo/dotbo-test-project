'use strict';

angular.module('app')
.factory('ShipmentService',
['$http', '$state',
  function ($http, $state) {


  var rates;

  return {
    create: function (shipment) {
      $http.post('/v1/shipments', shipment).then(function (response) {
        rates = response.data.rates;
        console.log(rates);
        $state.go('buyShipmentState');
      }, function (response) {
        console.log("error");
      });
    },
    getRates: function () {
      console.log(rates);
      return rates;
    },
    buyShipment: function (rateId) {
      $http.post('/v1/shipments/buy', {id: rateId}).then(function (response) {
        console.log(response);
      }, function (response) {
        console.log("error");
      });
    },
    getStubbedRates: function () {
      return [
        { 
          id: "rate_ce444e8cbe9c44ada3881795acae541a",
          carrier: "USPS",
          service:"First",
          rate:"3.07"
        },
        {
          id: "rate_5b69e120b39f4214a1cfad008fa9dfd6",
          carrier: "USPS",
          service: "ParcelSelect",
          rate: "7.04"
        }, 
        {
          id: "rate_2d683adbedfb4d3d9a68542ac1764d00",
          carrier:"USPS",
          service:"Priority",
          rate: "6.51"
        },
        {
          id:"rate_72bb164decc44ee3af5c07c92e99e398",
          carrier: "USPS",
          service: "Express",
          rate:"30.00"
        }
      ];
    }
  };

}]);
