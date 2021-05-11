// Function to dispay the name of the city, address and additional info on click of the marker.

    function displayMarkerInfo(){

// Add hide class to hide all elements with location class - code reference from stackoverflow.

    let elements = document.getElementsByClassName("location");

//let elems = document.querySelectorAll(".location");

    [].forEach.call(elements, function(element) {
        element.classList.add("hide");
    });

// Remove hide class to display address of the marker that is clicked.

    document.getElementById(this.title).classList.remove('hide');
}

// Code reference code institute documentation and google map markers documentation.

    function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: { lat: 51.7326, lng: 5.2913}, // To find lat and lng of Netherlands-https://www.latlong.net/convert-address-to-lat-long.html
        });

// Add marker locations and name of the city.

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

// To create new marker with position and title.

     var markers = markerList.map((marker, i) => {
        newMarker= new google.maps.Marker({
            position: marker.location,
            title: marker.city
            
        });

// when marker is clicked then display the card

        newMarker.addListener("click", displayMarkerInfo);
        return newMarker;
    });

// New marker clusterer for a group of 5 markers.
// Code reference code Institute Google maps section.

    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}
    
