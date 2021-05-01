function addItem() {
    event.preventDefault();
    console.log("goms");
  var groceryItem = document.contactForm.grocery_items.value;
  var quantity = document.contactForm.quantity.value;
  var list = groceryItem + " " +  "-"  + " " + quantity;
      list = list.replace(/\r?\n/g, '<br />');
    if (groceryItem === '') {
        alert("You must choose atleast one item!");
    } 
    if (quantity === '') {
        alert("You must choose the quantity");
    } 
    else {
        document.contactForm.grocerylist.value +=list;
  }
  return;
}