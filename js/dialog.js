function alertDismissed() {
    // do something
}

// Show a custom alertDismissed
//
function showAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
}

// Show a custom confirmation dialog
//
function showConfirm() {
    navigator.notification.confirm(
        'You are the winner!', // message
         onConfirm,            // callback to invoke with index of button pressed
        'Game Over',           // title
        ['Restart','Exit']         // buttonLabels
    );
}


 // process the confirmation dialog result
function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}


function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

function showPrompt() {
    navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        ['Ok','Exit'],             // buttonLabels
        'Jane Doe'                 // defaultText
    );
}


// Beep three times
function playBeep() {
    navigator.notification.beep(3);
}

// Vibrate for 2 seconds
function vibrate() {
    navigator.notification.vibrate(2000);
}