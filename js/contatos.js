// display the address information for all contacts

    function onSuccess(contacts) {
        for (var i = 0; i < navigator.contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                $("#list_contatos").append("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    }

    function onError(contactError) {
        alert('onError!');
    }


    function getContatos() {
        // find all contacts
        var options = new ContactFindOptions();
        options.filter = "";
        var filter = ["displayName", "addresses"];
        navigator.contacts.find(filter, onSuccess, onError, options);
    }