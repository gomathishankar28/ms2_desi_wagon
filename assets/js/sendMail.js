function validateForm(event) {
    var x = document.forms["contactForm"]["fname"].value;
    if (x == "") {
     alert("Name must be filled out");
    return false;
  }


// code reference code institute and  emailJS documentation with modifications
// To send email using emailJs API

function sendMail(contactForm) {
    emailjs.send("send_list", "desi_wagon", {
        "from_name": contactForm.fname.value,
        "from_email": contactForm.emailaddress.value,
        "grocerylist": contactForm.grocerylist.value
        })
        .then(
           function(response) {
            console.log("SUCCESS", response);
            acknowledgement ();
            //reset form
            resetForm();
            
        }, 
        function(error) {
            console.log("FAILED", error);
        }
        );
    
    return false;  // To block from loading a new page
}

//To display acknowledgement after successfull completion of placing the order.

function acknowledgement() {
    document.getElementById("place_order").classList.add("hide"); /* hide the place_order form*/
    document.getElementById("acknowledgement").classList.remove("hide");/* display the acknowledgement div*/
    
}

// To reset the form after the order is placed.

function resetForm() {
    document.getElementById("orderform").reset();
}