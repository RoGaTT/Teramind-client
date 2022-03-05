import { uploadFile } from "../../api/uploads";

function UploadsController($scope) {
  this.$onInit = function() {
    // console.log($element);
  }

  $scope.upload = function() {
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

      uploadFile(formData)
    }
  }
}

export default UploadsController