// Function display and hide store info if click on marker
function displayMarkerInfo() {
    /** add class to hide all elements with store class - orginal code with modification from: https://stackoverflow.com/questions/22270664/how-to-remove-a-class-from-elements-in-pure-javascript */
    var elems = document.querySelectorAll(".location");
    [].forEach.call(elems, function(el) {
        el.classList.add("hide");
    });
    // Remove class to display element
    document.getElementById(this.city).classList.remove('hide');
}


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 52.370216, lng: 4.895168 }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var locations = [
        {'location': { lat: 52.355480, lng: 4.893130 }, 
         'city': 'Amsterdam'
        },
        {'location': { lat: 52.355380, lng: 4.893140 }, 
        'city': 'Uterecht'
        },
        {'location': { lat: 52.355280, lng: 4.893150 }, 
        'city': 'DenBosch'
        },
        {'location': { lat: 52.355180, lng: 4.893160 }, 
        'city': 'Eindhoven'
        },
        {'location': { lat: 52.355580, lng: 4.893120 }, 
        'city': 'Mastricht'
        }
    ];


     var markers = locations.map(function(location, i) {
        newMarker = new google.maps.Marker({
            position: locations.location,
            city: locations.city,
            label: labels[i % labels.length]
        });
        newMarker.addEventListener("click", displayMarkerInfo)
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
        
function displayMarkerInfo() {
    var cards = document.querySelectorAll(".location");
    [].forEach.call(cards, function(c) {
        c.classList.add("hide");
    });
    // Remove class to display element
    document.getElementById(this.city).classList.remove('hide');
}

    
