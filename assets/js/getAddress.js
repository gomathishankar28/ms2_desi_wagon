/*jshint esversion: 6 */
//To auto-populate the address field based on the location(city) chosen in the place order form.

    document.getElementById('location').addEventListener('change', function() {
    let location = this.value;

    if(location === "Eindhoven") {
        document.getElementById("address").value = "Sliffertsestraat 304, 5657 AS Eindhoven";
    } 
    else if(location === "Utrecht") {
        document.getElementById("address").value = "Vleutensevaart 50, 3532 AD Utrecht";
    } 
    else if(location === "Amsterdam") {
        document.getElementById("address").value = "Markelerbergpad 1, 1105 AW Amsterdam";
    }
    else if(location === "DenBosch") {
        document.getElementById("address").value = "Hofvijver 2, 5223 MB 's-Hertogenbosch";
    } 
    else {
        document.getElementById("address").value = "P. de Coubertinweg 3, 6224 AJ Maastricht";
    } 

// change color of the address field when the location is chosen.

    document.getElementById("address").style.backgroundColor = "lightblue"; 
    
/*There is no need to test for empty string here as the default value is set to "Amsterdam" and
the corresponding address is populated in the address field. On change of Location the following code will execute*/
    });

