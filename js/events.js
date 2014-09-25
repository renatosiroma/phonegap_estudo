    

window.onload = function(){
    alert("LOAD WINDOW");
    onLoad();
}
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {
        alert("PRESSIONOU O BOTAO VOLTAR");
        window.history.back();
    }