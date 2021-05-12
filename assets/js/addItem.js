/*jshint esversion: 6 */
function addItem(){

// To get the div element where the added list has to be displayed. 
    const divList = document.getElementById("groceryList");
 
// To create an input element for every item being added and set clas and type attribute.
    let new_field = document.createElement("input"); 
    new_field.setAttribute("type", "text");
    new_field.setAttribute("class", "inputlist");
    new_field.setAttribute("disabled", true);

// TO create a line break element. 
    let lb = document.createElement("br");

//  To create a delete button beside every item that is added.   
    let span1 = document.createElement("span");
    span1.innerText = "X";
    span1.className = "delete";
  
// To update the input box with item name and quantity.
    let groceryItem = document.contactForm.grocery_items.value;
    let quantity = document.contactForm.quantity.value;
    /*let groceryList = document.contactForm.grocerylist;*/
    let list = groceryItem + " " +  "-"  + " " + quantity; 
    new_field.value = list;
 
// Appending div elements with input box and delete span element and linebreak
    divList.appendChild(new_field);
    divList.appendChild(span1);
    divList.appendChild(lb);    

// To remove an item when clicked on delete span element.
    const del = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            let item = this.previousSibling;
            console.log(item);
            let delItem = item.value;
            item.remove();
            this.nextSibling.remove();
            this.remove();
            let newlist = grocList.textContent.replace(delItem, "");
            grocList.textContent = newlist;
        };
    }
    
// To add items to textarea.
    const grocList = document.getElementById("grocList");
    let listInput = document.getElementsByClassName("inputlist"); // contains an array of input elements with grocery items.
    console.log(listInput);
    /*var listDivText = document.getElementsByClassName("inputlist").value;*/
    console.log(listInput.length);
    for (let k=0; k < listInput.length; k++) {
        var listInputValue = listInput[k].value + '\ \n';
        console.log(listInputValue);
    }
    grocList.textContent += listInputValue;
}
    