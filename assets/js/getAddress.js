/*jshint esversion: 6 */
    
/* Default value for Location field is set to "Amsterdam" and the corresponding address is populated in the address field.
   On change of Location the above code will execute */
   
//To auto-populate the address field based on the location(city) chosen in the place order form.

    document.getElementById('location').addEventListener('change', function() {
    let location = this.value;
    const address = document.getElementById("address");

    const locationMap = {
        "Eindhoven": "Sliffertsestraat 304, 5657 AS Eindhoven",
        "Utrecht": "Vleutensevaart 50, 3532 AD Utrecht",
        "Amsterdam": "Markelerbergpad 1, 1105 AW Amsterdam",
        "DenBosch": "Hofvijver 2, 5223 MB 's-Hertogenbosch",
        "Maastricht": "P. de Coubertinweg 3, 6224 AJ Maastricht"
    }

     address.value = locationMap[location];
     
// change color of the address field when the location is chosen.

    address.style.backgroundColor = "lightblue"; 

    });

