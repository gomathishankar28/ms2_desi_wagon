/*jshint esversion: 6 */
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
        {'location': { lat: 52.2973478, lng: 4.9560379 }, 
         'city': 'Amsterdam'
        },
        {'location': { lat: 52.1005185, lng: 5.051333 }, 
        'city': 'Utrecht'
        },
        {'location': { lat: 51.6862173, lng: 5.2889867 }, 
        'city': 'DenBosch'
        },
        {'location': { lat: 51.4352433, lng: 5.4060191 }, 
        'city': 'Eindhoven'
        },
        {'location': { lat: 50.8581894, lng: 5.7086025 }, 
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
    
