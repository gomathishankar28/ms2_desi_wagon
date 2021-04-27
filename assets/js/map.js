// Function to dispay the name of the city, address and additional info on click of the marker.
function displayMarkerInfo(){
    /* add hide class to hide all elements with location class - code reference from stackoverflow */
    var elems = document.querySelectorAll(".location");
    [].forEach.call(elems, function(el) {
        el.classList.add("hide");
    });
    // Remove hide class to display element
    document.getElementById(this.title).classList.remove('hide');
}

/** code reference code institute documentationa and google map markers documentation */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 52.1326, lng: 5.2913}, /*to find lat and lng of Netherlands-https://www.latlong.net/convert-address-to-lat-long.html*/
    });

    //Add marker locations and storeIds
    var markerList = [
        {'location': { lat: 52.377956, lng: 4.897070 }, 
         'city': 'Amsterdam'
        },
        {'location': { lat: 52.092876, lng: 5.104480 }, 
        'city': 'Uterecht'
        },
        {'location': { lat: 51.69917, lng: 5.30417 }, 
        'city': 'DenBosch'
        },
        {'location': { lat: 51.44083, lng: 5.47778 }, 
        'city': 'Eindhoven'
        },
        {'location': { lat: 50.851368, lng: 5.690973 }, 
        'city': 'Maastricht'
        }
    ];


     var markers = markerList.map((marker, i) => {
        newMarker= new google.maps.Marker({
            position: marker.location,
            title: marker.city
            
        });
        // when marker clicked then display the card
        newMarker.addListener("click", displayMarkerInfo);
        return newMarker;
    });

    /** code reference code Institute documentation and google map marker cluster documentation*/
    // New marker clusterer for a group of 5 markers
    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
    
