// Function display and hide store info if click on marker
function displayMarkerInfo(){
    /** add class to hide all elements with store class - orginal code with modification from: https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript */
    var elems = document.querySelectorAll(".location");
    [].forEach.call(elems, function(el) {
        el.classList.add("hide");
    });
    // Remove class to display element
    document.getElementById(this.city).classList.remove('hide');
}

/** Declare a function to create a map - initMap function original code https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript with modifications for project */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 52.373170, lng: 4.890660}, /*to find lat and lng of an address-https://www.latlong.net/convert-address-to-lat-long.html*/
    });

    //Add marker locations and storeIds
    var markerList = [
        {'location': { lat: 51.9082773, lng: 4.60036 }, 
         'city': 'Amsterdam'
        },
        {'location': { lat: 51.7640606, lng: 4.7718492 }, 
        'city': 'Uterecht'
        },
        {'location': { lat: 51.5631166, lng: 5.2608243 }, 
        'city': 'DenBosch'
        },
        {'location': { lat: 51.4430834, lng: 5.4019321 }, 
        'city': 'Eindhoven'
        },
        {'location': { lat: 51.1487336, lng: 5.4255067 }, 
        'city': 'Mastricht'
        }
    ];


     var markers = markerList.map((marker, i) => {
        newMarker= new google.maps.Marker({
            position: marker.location,
            city: marker.city
            
        });
        // when marker clicked then display info
        newMarker.addListener("click", displayMarkerInfo);
        return newMarker;
    });

    /** New MarkerClusterer - initMap function original code https://developers.google.com/maps/documentation/javascript/marker-clustering */
    // Add a marker clusterer to manage the markers
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
    