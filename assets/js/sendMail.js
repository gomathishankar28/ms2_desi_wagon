function validateForm() {
    console.log("hello");
    let name = document.getElementById("name").value;
    
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let groceryList = document.getElementById("groceryList").value;

    if(name === '') {
        alert("name field cannot be empty. Please enter you name");
    }
   name.oninvalid = function(event) {
   event.target.setCustomValidity('Username should only contain lowercase letters. e.g. john');
   }
    return true;
}