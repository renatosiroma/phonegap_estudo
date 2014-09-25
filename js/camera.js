var pictureSource;   // picture source
var destinationType; // sets the format of returned value

document.addEventListener("deviceready",onDeviceReady_camera,false);

function onDeviceReady_camera() {
	/* Camera */
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;

    /* Connections */
    setInterval(function(){
    	checkConnection()
    }, 3000);
}

function onPhotoDataSuccess(imageData) {
  var image = document.getElementById('smallImage');
  image.style.display = 'block';
  image.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
  var image = document.getElementById('smallImage');
  image.style.display = 'block';
  image.src = imageURI;
}

function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
    destinationType: destinationType.DATA_URL });
}

function getPhoto(source) {
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
    destinationType: destinationType.FILE_URI,
    sourceType: source });
}

function onFail(message) {
  alert('Failed because: ' + message);
}
