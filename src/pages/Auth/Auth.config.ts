import AuthTemplate from './Auth.template.html'

function AuthConfig($routeProvider) {
  $routeProvider.when('/auth', {
    template: AuthTemplate,
    controller: 'AuthController'
  });
}

export default AuthConfig