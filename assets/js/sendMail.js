document.getElementById("name").addEventListener("invalid", function (event) {
    alert ("name cannot be empty and should only contain letters. e.g. John");
});
document.getElementById("email").addEventListener("invalid", function (event) {
    alert ("Email cannot be empty. please enter a valid email-ID. e.g. john@gmail.com");
});
document.getElementById("mobile").addEventListener("invalid", function (event) {
    alert ("mobile cannot be empty and should only contain a 10 digit number. e.g. 0687241357");
});
document.getElementById("address").addEventListener("invalid", function (event) {
    alert ("Address cannot be empty.please choose a desired location to get the corresponding address");
});
document.getElementById("grocList").addEventListener("invalid", function (event) {
    alert ("Grocery List cannot be empty.Please atleast add 1 item to the list");
});
    



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
    document.getElementById("orderForm").reset();
}