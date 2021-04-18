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
