/*jshint esversion: 6 */
//Assigning each form element  to a variable
    var sendEmail 
    const name = document.getElementById("name");
    const mobile = document.getElementById("mobile");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    let groceryList = document.getElementById("grocList");
    var groceryItem = document.getElementsByClassName("inputList");
    /*const delIcon = document.getElementsByClassName("delete");*/

// validation for name field on empty or invalid input

    name.addEventListener("invalid", function (event) {
        if ((!(name.value)) || (this.validity.patternMismatch)) {
            alert ("name cannot be empty and should only contain letters. e.g. John");
            
        }
        else {
             return false;
        }
    });

// validation for email field on empty or invalid input

    email.addEventListener("invalid", function (event) {
        if (this.validity.patternMismatch)
            alert ("please enter a valid email-ID. e.g. john@gmail.com");
        else {
        return false;
        }
    });

// validation for mobile field on empty or invalid input

    mobile.addEventListener("invalid", function (event) {
        if (this.validity.patternMismatch)
            alert ("mobile should only contain a 10 digit number. e.g. 0687241357");
        else {
            return false;
        }
    });

// validation for address field on empty or invalid input.

    address.addEventListener("invalid", function (event) {
        if (this.validity.patternMismatch) {
            alert ("please choose a desired location to get the corresponding address");
        }
        else {
        return false;
        }
    });


//  validation for GroceryList field on empty or invalid input

    groceryItem.addEventListener("remove", function (event) {
        if (groceryItem.length === 0)
            alert ("Grocery List cannot be empty.Please add atleast 1 item to the list");
        else {
            return false;
        }
    });

    /*function checkList() {
        console.log(groceryItem.length);
        if (groceryItem.value.length === 0) {
            alert ("Grocery Listssss cannot be empty.Please add atleast 1 item to the list");
            sendEmail = false;
        }
        else {
            sendEmail = true;
        }
    }*/
// code reference code institute and  emailJS documentation with modifications
// To send email using emailJs API

function sendMail(contactForm) {
        emailjs.send("send_list", "desi_wagon", {
        "from_name": contactForm.fname.value,
        "from_mobile": contactForm.mobileno.value,
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