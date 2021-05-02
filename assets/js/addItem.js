function addItem() {
    event.preventDefault();
    
  var groceryItem = document.contactForm.grocery_items.value;
  var quantity = document.contactForm.quantity.value;
  var groceryList = document.contactForm.grocerylist;
  var list = groceryItem + " " +  "-"  + " " + quantity;  
    
    if (groceryItem === '') {
        alert("You must choose atleast one item!");
    } 
    if (quantity === '') {
        alert("You must choose the quantity");
    } 
    else {
            document.contactForm.grocerylist.value +=list + '\ \n';
  }
  return;
}