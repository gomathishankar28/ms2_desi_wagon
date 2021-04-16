document.getElementById('location').addEventListener('change', function() {
    var location = this.value;
    if(location === "Eindhoven") {
        document.getElementById("address").value = "132 zanddreef Eindhoven";
    } else if(location === "Uterecht") {
        console.log("you chose uterect");
        document.getElementById("address").value = "133 landdreef uterecht";
    } else if(location === "Amsterdam") {
        
        document.getElementById("address").value = "134 zanddreef Amsterdam";
    } else if(location === "DenBosch") {
        document.getElementById("address").value = "135 zanddreef DenBosch";
    } else {
        document.getElementById("address").value = "136 zanddreef mastricht";
    }
  
});
