app = angular.module('app', [
  'ui.router',   //angular-ui-router
  'templates',   //angular-rails-templates
  'restangular', //restangular
  'ngCookies'    //angular-cookies
  ])

$(document).ready(function(){
  if (!$('body').hasClass('ng-scope'))
    angular.bootstrap(document.body, ['app'])
});

app.value('urlToGoToAfterLogin', {url: '/'});

app.config(['$stateProvider','$urlRouterProvider',
            '$locationProvider', '$httpProvider',
            'RestangularProvider',
  function($stateProvider, $urlRouterProvider,
           $locationProvider, $httpProvider,
           RestangularProvider){

    //unmatched routes redirect to root
    $urlRouterProvider.otherwise("/");

    //set up states and routing
    $stateProvider
      .state('homeState',{
        url: '/',
        templateUrl: 'hello.html',
		controller: 'AppController'
      })
      .state('shipmentState',{
        url: '/shipments',
        templateUrl: 'shipment.html',
        controller : 'ShipmentController'
      })
      .state('newShipmentState',{
        url: '/shipments/new',
        templateUrl: 'new-shipment.html',
        controller : 'NewShipmentController'
      })
      .state('buyShipmentState',{
        url: '/shipments/buy',
        templateUrl: 'buy-shipment.html',
        controller : 'BuyShipmentController'
      })
      //auth
      .state('loginState',{
        url: '/sign_in',
        templateUrl: 'sessions/new.html',
        controller : 'LoginController'
      })
      .state('signUpState',{
        url: '/sign_up',
        templateUrl: 'registrations/new.html',
        controller : 'SignUpController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    //restangular settings
    RestangularProvider.setBaseUrl('/v1');
  }]);
