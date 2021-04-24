//code reference code institute and  emailJS documentation with modifications
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
    document.getElementById("place_order").classList.add("hide");
    document.getElementById("acknowledgement").classList.remove("hide");
    
}

function resetForm() {
    document.getElementById("orderform").reset();
}