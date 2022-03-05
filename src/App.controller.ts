function AppController($scope, $cookies, $location, $rootScope) {
  this.$onInit = () => {
    const token = $cookies.get('access_token');
    $rootScope.token = token
    // if (token) $location.path('/uploads')
  }
  $rootScope.$watch('token', (newValue) => {
    if (newValue) {
      $location.path('/uploads')
    }
    $cookies.put('access_token', newValue)
  })
}

export default AppController