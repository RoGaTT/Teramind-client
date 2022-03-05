import { login, register } from "../../api/auth";

enum AuthModeEnum {
  SIGN_IN = "sign_in",
  SIGN_UP = "sign_up"
} 

function AuthController($scope, $location, $window) {
  this.$onInit = function() {
    console.log('object1');
  }
  
  $scope.mode = AuthModeEnum.SIGN_IN
  $scope.username = ''
  $scope.password = ''
  $scope.confirmPassword = ''

  $scope.toggleMode = () => {
    $scope.mode = $scope.mode === 'sign_in' ? 'sign_up' : 'sign_in'
  }

  $scope.signIn = async () => {
    try {
      await login({
        username: $scope.username,
        password: $scope.password
      })
      $window.location.href = '#/uploads'
    } catch (e) {
      console.error(e);
    }
  }

  $scope.signUp = async () => {
    try {
      await register({
        username: $scope.username,
        password: $scope.password
      })
      await login({
        username: $scope.username,
        password: $scope.password
      })
      $window.location.href = '#/uploads'
    } catch (e) {
      console.error(e);
    }
  }
}

export default AuthController
