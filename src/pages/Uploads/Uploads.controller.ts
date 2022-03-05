import { uploadFile } from "../../api/uploads";

function UploadsController($scope, $rootScope, $location, $q) {
  this.$onInit = function() {
    if (!$rootScope.token) $location.path('/auth')
  }

  $scope.upload = function() {
    const $upload = $q((resolve) => {
      const fileInputElement = document.getElementById('upload_input') as HTMLInputElement
      if (!fileInputElement) return
      const file = fileInputElement.files[0];
      if (!file) return

      const fileReader = new FileReader()
      console.log(file);
      
      fileReader.readAsBinaryString(file)
      // console.log(file);
      fileReader.onloadend = function(e) {
        const formData = new FormData()

        formData.append('file', file)

        uploadFile(formData).then(resolve)
      }
    })
    // $upload.then((res) => {
    //   $rootScope.token = res.data.token
    // })

    
  }
}

export default UploadsController