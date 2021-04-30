function addItem(event) {
    event.preventDefault();
  var li = document.createElement("p");
  var inputValue = document.getElementById("items").value;
  /*var t = document.createTextNode(inputValue);
  li.appendChild(t);*/
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("grocerylist").value = inputValue;
  }
  document.getElementById("items").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}