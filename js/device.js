// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {

        $("#device_inf").html(
            'Device Model: '    + device.model    + '<br />' +
            'Device Cordova: '  + device.cordova  + '<br />' +
            'Device Platform: ' + device.platform + '<br />' +
            'Device UUID: '     + device.uuid     + '<br />' +
            'Device Version: '  + device.version  + '<br />'
            );
    }