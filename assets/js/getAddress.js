//To auto-populate the address field based on the location(city) chosen in the place order form.

/*There is no need to test for empty string here as the default value is set to "Amsterdam" and
the corresponding address is populated in the address field. On change of Location the following code will execute*/

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
    document.getElementById("address").style.backgroundColor = "lightblue"; /*change color of the address field when the location is chosen*/
});

