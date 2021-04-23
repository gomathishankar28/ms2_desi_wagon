//To auto-populate the address field based on the location(city) chosen in the place order form.

document.getElementById('location').addEventListener('change', function() {
    var location = this.value;
    if(location === "Eindhoven") {
        document.getElementById("address").value = "Wilhelminaplein, 5611 JC Eindhoven";
    } else if(location === "Uterecht") {
        console.log("you chose uterect");
        document.getElementById("address").value = "Vredenburg, 3511 CW Utrecht";
    } else if(location === "Amsterdam") {
        
        document.getElementById("address").value = "Jan van Galenstraat 4, 1051 KM Amsterdam";
    } else if(location === "DenBosch") {
        document.getElementById("address").value = "Markt, 5211 GA 's-Hertogenbosch";
    } else {
        document.getElementById("address").value = "Mosae Forum 99, 6211 DW Maastricht";
    } 
});
//There is no need to test for empty string here as the default value is set to "Amsterdam"
