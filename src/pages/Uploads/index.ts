
import angular from 'angular'
import UploadsConfig from './Uploads.config';
import UploadsController from './Uploads.controller';


const UploadsModule = angular.module('app.uploads', ['ngRoute', 'ngCookies'])

UploadsModule.config(['$routeProvider', '$cookiesProvider', UploadsConfig])

UploadsModule.controller('UploadsController', UploadsController)


export default UploadsModule;
