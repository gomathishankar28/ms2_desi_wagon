/*jshint esversion: 6 */

function addItem(){

// To get the div element where the added list has to be displayed. 
    const divList = document.getElementById("groceryList");
    
// To create an input element for every item being added and set class ,type and disabled(to avoid any editing by the user) attribute.
    let newItem = document.createElement("input"); 
    newItem.setAttribute("type", "text");
    newItem.setAttribute("class", "inputlist");
    newItem.setAttribute("disabled", true);

// TO create a line break element. 
    let lb = document.createElement("br");

//  To create a delete button beside every item that is added.   
    let span1 = document.createElement("span");
    span1.innerText = "X";
    span1.className = "delete";
  
// To update the input box with item name and quantity.
    let groceryItem = document.contactForm.grocery_items.value;
    let quantity = document.contactForm.quantity.value;
    let list = groceryItem + " " +  "-"  + " " + quantity; 
    newItem.value = list;
 
// Appending div elements with input box and delete span element and linebreak
    divList.appendChild(newItem);
    divList.appendChild(span1);
    divList.appendChild(lb);    


// To remove an item when clicked on delete span element.
    const del = document.getElementsByClassName("delete");
    for (let i = 0; i < del.length; i++) {
        del[i].onclick = function() {
            let item = this.previousSibling;
            //console.log(item);
            let delItem = item.value;
            item.remove();
            this.nextSibling.remove();
            this.remove();
            let newlist = grocList.textContent.replace(delItem, "");
            grocList.textContent = newlist;
            checkList();
        };
        
    }
    
// To add items to textarea.
    const grocList = document.getElementById("grocList");
    let listInput = document.getElementsByClassName("inputlist"); // contains an array of input elements with grocery items.
    //console.log(listInput);
    //console.log(listInput.length);
    for (let k=0; k < listInput.length; k++) {
        var listInputValue = listInput[k].value + '\ \n';
        //console.log(listInputValue);
    }
    grocList.textContent += listInputValue;
    document.getElementById("submit-btn").disabled = false; // submit button enabled when there is atleast 1 item added to grocery list
}
   
// To display en error message when all the items are deleted from the list.
    function checkList() {
        let groceryItem = document.getElementsByClassName("inputlist");
        if (groceryItem.length === 0) {
            alert ("Grocery List cannot be empty.Please add atleast 1 item to the list"); 
            document.getElementById("submit-btn").disabled = true; // To prevent the form with empty grocery list being submitted.
        }
        else {
            return true;
        }
    }

