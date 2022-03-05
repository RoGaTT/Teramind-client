function UploadsConfig($routeProvider, $cookies) {
  $routeProvider.when('/uploads', {
    templateUrl: 'src/pages/Uploads/Uploads.template.html',
    controller: 'UploadsController'
  });
  console.log($cookies.get);
}

export default UploadsConfig