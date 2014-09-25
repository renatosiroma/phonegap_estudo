 		var pictureSource;   // picture source
	    var destinationType; // sets the format of returned value

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
