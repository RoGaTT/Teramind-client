import angular from 'angular'
import 'angular-route'
import AuthModule from './pages/Auth';
import UploadsModule from './pages/Uploads';

const AppModule = angular.module('app', [
  'ngRoute',
  AuthModule.name,
  UploadsModule.name
])

AppModule.config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.otherwise({redirectTo: '/auth'});
  }
]);