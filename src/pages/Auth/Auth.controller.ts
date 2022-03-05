import { login, register } from "../../api/auth";

enum AuthModeEnum {
  SIGN_IN = "sign_in",
  SIGN_UP = "sign_up"
} 

function AuthController($scope, $location, $rootScope) {
  this.$onInit = function() {
    if ($rootScope.token) $location.path('/uploads')
  }
  
  $scope.mode = AuthModeEnum.SIGN_IN
  $scope.username = ''
  $scope.password = ''
  $scope.confirmPassword = ''

  $scope.toggleMode = () => {
    $scope.mode = $scope.mode === 'sign_in' ? 'sign_up' : 'sign_in'
  }

  $scope.signIn = async () => {
    // console.log($rootScope.token);
    try {
      await login({
        username: $scope.username,
        password: $scope.password
      })
      $location.path('/uploads')
    } catch (e) {
      console.error(e);
    }
  }

  $scope.signUp = async () => {
    console.log($scope.password, $scope.confirmPassword);
    if ($scope.password !== $scope.confirmPassword) return 
    try {
      await register({
        username: $scope.username,
        password: $scope.password
      })
      await login({
        username: $scope.username,
        password: $scope.password
      })
      $location.path('/uploads')
    } catch (e) {
      console.error(e);
    }
  }
}

export default AuthController
