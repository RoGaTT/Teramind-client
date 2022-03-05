import { login, register } from "../../api/auth";

enum AuthModeEnum {
  SIGN_IN = "sign_in",
  SIGN_UP = "sign_up"
} 

function AuthController($scope, $location, $rootScope, $cookies, $q) {
  this.$onInit = function() {
    if ($rootScope.token) $location.path('/uploads')
    $scope.mode = AuthModeEnum.SIGN_IN;
    $scope.username = '';
    $scope.password = '';
    $scope.confirmPassword = '';
  }

  $scope.toggleMode = () => {
    $scope.mode = $scope.mode === 'sign_in' ? 'sign_up' : 'sign_in'
  }

  $scope.signIn = async () => {
    try {
      const $login = $q((resolve) => {
        login({
          username: $scope.username,
          password: $scope.password
        }).then(resolve)
      })
      $login.then((res) => {
        $rootScope.token = res.data.token
      })
    } catch (e) {
      console.error(e);
    }
  }

  $scope.signUp = async () => {
    console.log($scope.confirmPassword);
    if ($scope.password !== $scope.confirmPassword) return 
    try {
      const $register = $q((resolve) => {
        register({
          username: $scope.username,
          password: $scope.password
        }).then(resolve)
      })
      $register.then((res) => {
        $rootScope.token = res.data.token
        const $login = $q((resolve) => {
          login({
            username: $scope.username,
            password: $scope.password
          }).then(resolve)
        })
        $login.then((res) => {
          $rootScope.token = res.data.token
        })
      })
    } catch (e) {
      console.error(e);
    }
  }
}


export default AuthController
