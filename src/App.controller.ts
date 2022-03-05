function AppController($scope, $cookies, $location, $rootScope, $window) {
  this.$onInit = () => {
    const token = $cookies.get('access_token');
    $rootScope.token = token
    // if (token) $location.path('/uploads')
  }
  $rootScope.$watch(() => $rootScope.token, (newValue) => {
    console.log(newValue);
    if (newValue) {
      $window.location.href = '#/uploads'
      $location.path('/uploads')
    }
    $cookies.put('access_token', newValue)
  })
}

export default AppController