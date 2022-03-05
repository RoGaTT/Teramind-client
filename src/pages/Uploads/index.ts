
import angular from 'angular'
import UploadsConfig from './Uploads.config';
import UploadsController from './Uploads.controller';


const UploadsModule = angular.module('app.uploads', ['ngRoute'])

UploadsModule.config(['$routeProvider', UploadsConfig])

UploadsModule.controller('UploadsController', ["$scope", UploadsController])


export default UploadsModule;
