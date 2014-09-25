	var map;


      document.addEventListener("deviceready", onDeviceReady_maps, false);


      function onDeviceReady_maps() {
      	
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      }

      function onSuccess(position) {
        
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
