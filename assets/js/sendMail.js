// Validate Form Elements 

function validateFormElements() {
    const name = document.getElementById("name");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const groceryList = document.getElementById("groceryList");

    console.log("validation entered");

    name.oninvalid = function(event) {
        event.target.setCustomValidity('name cannot be empty and should only contain letters. e.g. John');
        return false;
    }

    mobile.oninvalid = function(event) {
        event.target.setCustomValidity('mobile cannot be empty and should only contain a 10 digit number. e.g. 0687241357');
        return false;

    email.oninvalid = function(event) {
        event.target.setCustomValidity('Email cannot be empty. please enter a valid email-ID. e.g. john@gmail.com');
        return false;
    }

    address.oninvalid = function(event) {
        event.target.setCustomValidity('Address cannot be empty.please choose a desired location to get the corresponding address');
        return false;
    }

    groceryList.oninvalid = function(event) {
        event.target.setCustomValidity('Grocery List cannot be empty.Please atleast add 1 item to the list');
        return false;
    }
    
    return true;
}

// code reference code institute and  emailJS documentation with modifications
// To send email using emailJs API

window.onload = function() {
            document.getElementById('orderForm').addEventListener('submit', function(event) {
                event.preventDefault();
                // To validate form before sending an email.
                if (validateFormElements(contactForm)) {
    emailjs.sendForm("send_list", "desi_wagon", {
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
                        console.log('FAILED...', error);
                    });
                }
                else {
                    console.log("form validation failed");
                }
            });
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

