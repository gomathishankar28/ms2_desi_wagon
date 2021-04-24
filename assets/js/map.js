// Function to dispay the name of the city, address and additional info on click of the marker.
function displayMarkerInfo(){
    /* add hide class to hide all elements with location class - code reference from stackoverflow */
    var elems = document.querySelectorAll(".location");
    [].forEach.call(elems, function(el) {
        el.classList.add("hide");
    });
    // Remove hide class to display element
    document.getElementById(this.city).classList.remove('hide');
}

/** code reference code institute documentationa and google map markers documentation */
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 51.8949715, lng: 4.9876543}, /*to find lat and lng of Netherlands-https://www.latlong.net/convert-address-to-lat-long.html*/
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
        'city': 'Maastricht'
        }
    ];


     var markers = markerList.map((marker, i) => {
        newMarker= new google.maps.Marker({
            position: marker.location,
            city: marker.city
            
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
    
