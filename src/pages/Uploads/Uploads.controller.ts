import { getFiles, uploadFile } from "../../api/uploads";

function UploadsController($scope, $rootScope, $location, $q) {
  $scope.fileList = []
  this.$onInit = function() {
    if (!$rootScope.token) $location.path('/auth')
    const $getFiles = $q((resolve) => {
      getFiles().then(resolve)
    })
    $getFiles.then((res) => {
      $scope.fileList = res.data || []
    })
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