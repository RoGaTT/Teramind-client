function UploadsConfig($routeProvider) {
  $routeProvider.when('/uploads', {
    templateUrl: 'src/pages/Uploads/Uploads.template.html',
    controller: 'UploadsController'
  });
  console.log(document.cookie);
}

export default UploadsConfig