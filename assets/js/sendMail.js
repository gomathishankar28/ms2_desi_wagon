function validateFormElements(event) {
    
   const name = document.getElementById("name");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const groceryList = document.getElementById("groceryList");

    
    name.oninvalid = function(event) {
    event.target.setCustomValidity('name should only contain letters. e.g. John');
        

    mobile.oninvalid = function(event) {
    event.target.setCustomValidity('mobile should only contain a 10 digit number. e.g. 0687241357');
    
    }

    email.oninvalid = function(event) {
    event.target.setCustomValidity('please enter a valid email-ID. e.g. john@gmail.com');
    
    }

    address.oninvalid = function(event) {
    event.target.setCustomValidity('Address cannot be empty.please choose a desired location to get the corresponding address');
    
    }

    groceryList.oninvalid = function(event) {
    event.target.setCustomValidity('Grocery List cannot be empty.Please atleast add 1 item to the list');
    
    }
    
    
}
// code reference code institute and  emailJS documentation with modifications
// To send email using emailJs API

function sendMail(contactForm) {
     if(validateFormElements(contactForm)){
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
else{
        console.log("Form validation failed");
    }
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