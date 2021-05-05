function gaddItem() {

  var x = document.getElementById("groceryList");
   
var new_field = document.createElement("input"); 
new_field.setAttribute("type", "text");
new_field.setAttribute("name", "groceryList");
new_field.setAttribute("class", "inputlist");
    
var lb = document.createElement("br");

   
var span1 = document.createElement("span");
  span1.innerText = "X";
  span1.className = "delete";
  console.log(span1);

var groceryItem = document.contactForm.grocery_items.value;
  var quantity = document.contactForm.quantity.value;
  var groceryList = document.contactForm.grocerylist;
  var list = groceryItem + " " +  "-"  + " " + quantity; 
  new_field.value = list;


  x.appendChild(new_field);
  x.appendChild(span1);
  x.appendChild(lb);




var del = document.getElementsByClassName("delete");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var div = this.previousSibling;
    div.style.display = "none";
    this.style.display = "none";
  }
}


}
 