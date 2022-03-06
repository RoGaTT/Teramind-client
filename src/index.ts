import angular from 'angular'
import 'angular-route'
import 'angular-cookies'
import AuthModule from './pages/Auth';
import UploadsModule from './pages/Uploads';
import AppController from './App.controller';

const AppModule = angular.module('app', [
  'ngRoute',
  'ngCookies',
  AuthModule.name,
  UploadsModule.name
])

AppModule.config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({redirectTo: '/auth'})
  }
]);

AppModule.controller('AppController', AppController)