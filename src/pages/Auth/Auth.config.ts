function AuthConfig($routeProvider) {
  $routeProvider.when('/auth', {
    templateUrl: 'src/pages/Auth/Auth.template.html',
    controller: 'AuthController'
  });
}

export default AuthConfig