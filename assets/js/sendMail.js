function sendMail(contactForm) {
    console.log("function entered");
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
function acknowledgement() {
    document.getElementById("acknowledgement").innerHTML = `<h2>ThankYou for placing your order with us. You can pick your orders at the chosen place on sechedule day.Please refer the schedule to know your day and time for pick up.</h2>`
}
function resetForm() {
    document.getElementById("orderform").reset();
}