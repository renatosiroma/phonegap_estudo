	/* LOAD ASYNC */
	var map;
	var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=foicarregado';


	window.onload = function(){ document.body.appendChild(script); }

	function foicarregado(){
		alert("GoogleMaps carregafdo");
	}

	function geoStart(){
		alert("tentando");
		 navigator.geolocation.getCurrentPosition(onSuccess, onError);
		alert("Tentou");
	};

	function onSuccess(position) {
		alert("SUCES");

		var element = document.getElementById('geolocation');

		element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
							'Longitude: '          + position.coords.longitude             + '<br />' +
							'Altitude: '           + position.coords.altitude              + '<br />' +
							'Accuracy: '           + position.coords.accuracy              + '<br />' +
							'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
							'Heading: '            + position.coords.heading               + '<br />' +
							'Speed: '              + position.coords.speed                 + '<br />' +
							'Timestamp: '          + position.timestamp                    + '<br />';

		var mapOptions = {
			zoom: 7,
			center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
		};

		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	function onError(error) {
		alert('code: '    + error.code    + '\n' +
		'message: ' + error.message + '\n');
	}
