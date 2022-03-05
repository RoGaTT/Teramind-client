
import angular from 'angular'
import AuthConfig from './Auth.config';
import AuthController from './Auth.controller';


const AuthModule = angular.module('app.auth', ['ngRoute'])

AuthModule.config(['$routeProvider', AuthConfig])

AuthModule.controller('AuthController', AuthController)


export default AuthModule;
