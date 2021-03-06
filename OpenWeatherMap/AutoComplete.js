/**
 * Created by Gracie on 15-9-1.
 */
var autocomplete,city,country;

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
        {types: ['geocode']});
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    var place = autocomplete.getPlace();
    city=place.address_components[0].long_name;
    country=place.address_components[2].long_name;
}