    var contador=1;

    document.addEventListener("deviceready", onDeviceReady_events, false);
    

    // device APIs are available
    function onDeviceReady_events() {
        
        document.addEventListener("backbutton", onBackKeyDown, false);
        document.addEventListener("menubutton", onMenuKeyDown, false);
        document.addEventListener("pause", onPause, false);
        document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    }

    // Handle the back button
    function onBackKeyDown() {
        $("#eventos").prepend(contador+" - Botao Voltar<br>");
        contador++;
        window.history.back();
    }

    function onMenuKeyDown() {
        $("#eventos").prepend(contador+" - Botao Menu<br>");
        contador++;
    }


    function onPause() {
        $("#eventos").prepend(contador+" - APP Pausado<br>");
        contador++;
    }

    function onVolumeDownKeyDown() {
        $("#eventos").prepend(contador+" - Volume Down<br>");
        contador++;
    }

    function onVolumeUpKeyDown() {
        $("#eventos").prepend(contador+" - Volume UP<br>");
        contador++;
    }


