import UploadsTemplate from './Uploads.template.html'

function UploadsConfig($routeProvider, $cookies) {
  $routeProvider.when('/uploads', {
    template: UploadsTemplate,
    controller: 'UploadsController'
  });
  console.log($cookies.get);
}

export default UploadsConfig