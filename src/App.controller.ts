function AppController($scope, $cookies, $location, $rootScope) {
  this.$onInit = () => {
    const token = $cookies.get('access_token');
    $rootScope.token = token
    if (token) $location.path('/uploads')
  }
}

export default AppController